__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1227,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "name": "Funcs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 13,
        "end": 66,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 14,
            "end": 42,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 17,
              "end": 42,
              "elementType": {
                "type": "TSFunctionType",
                "start": 18,
                "end": 39,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 19,
                    "end": 30,
                    "name": "arg",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 22,
                      "end": 30,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 24,
                        "end": 30
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 32,
                  "end": 39,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 35,
                    "end": 39
                  }
                }
              }
            }
          },
          {
            "type": "TSFunctionType",
            "start": 44,
            "end": 65,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 45,
                "end": 56,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 48,
                  "end": 56,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 50,
                    "end": 56
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 65,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 61,
                "end": 65
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 69,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 89,
        "name": "num",
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
          "start": 90,
          "end": 99,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 99,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 93,
              "end": 99
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 100,
        "end": 106,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 102,
          "end": 106
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 108,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 128,
        "name": "str",
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
          "start": 129,
          "end": 138,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 138,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 132,
              "end": 138
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 139,
        "end": 145,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 141,
          "end": 145
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 148,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 167,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 168,
          "end": 182,
          "argument": {
            "type": "Identifier",
            "start": 171,
            "end": 175,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 175,
            "end": 182,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 177,
              "end": 182,
              "typeName": {
                "type": "Identifier",
                "start": 177,
                "end": 182,
                "name": "Funcs",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 183,
        "end": 189,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 185,
          "end": 189
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 197,
      "expression": {
        "type": "CallExpression",
        "start": 192,
        "end": 196,
        "callee": {
          "type": "Identifier",
          "start": 192,
          "end": 194,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 224,
      "expression": {
        "type": "CallExpression",
        "start": 208,
        "end": 223,
        "callee": {
          "type": "Identifier",
          "start": 208,
          "end": 210,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 211,
            "end": 222,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 211,
                "end": 212,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 216,
              "end": 222,
              "callee": {
                "type": "Identifier",
                "start": 216,
                "end": 219,
                "name": "str",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 220,
                  "end": 221,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 254,
      "expression": {
        "type": "CallExpression",
        "start": 225,
        "end": 253,
        "callee": {
          "type": "Identifier",
          "start": 225,
          "end": 227,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 228,
            "end": 239,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 228,
                "end": 229,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 233,
              "end": 239,
              "callee": {
                "type": "Identifier",
                "start": 233,
                "end": 236,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 237,
                  "end": 238,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 241,
            "end": 252,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 246,
              "end": 252,
              "callee": {
                "type": "Identifier",
                "start": 246,
                "end": 249,
                "name": "str",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 250,
                  "end": 251,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 255,
      "end": 297,
      "expression": {
        "type": "CallExpression",
        "start": 255,
        "end": 296,
        "callee": {
          "type": "Identifier",
          "start": 255,
          "end": 257,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 258,
            "end": 269,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 258,
                "end": 259,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 263,
              "end": 269,
              "callee": {
                "type": "Identifier",
                "start": 263,
                "end": 266,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 267,
                  "end": 268,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 271,
            "end": 282,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 271,
                "end": 272,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 276,
              "end": 282,
              "callee": {
                "type": "Identifier",
                "start": 276,
                "end": 279,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 280,
                  "end": 281,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 284,
            "end": 295,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 284,
                "end": 285,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 289,
              "end": 295,
              "callee": {
                "type": "Identifier",
                "start": 289,
                "end": 292,
                "name": "str",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 293,
                  "end": 294,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 299,
      "end": 320,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 319,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 314,
            "name": "a0",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 314,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 309,
                "end": 314,
                "typeName": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 314,
                  "name": "Funcs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 317,
            "end": 319,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 331,
      "end": 363,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 362,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 346,
            "name": "a1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 346,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 341,
                "end": 346,
                "typeName": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 346,
                  "name": "Funcs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 349,
            "end": 362,
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "start": 350,
                "end": 361,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 350,
                    "end": 351,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 355,
                  "end": 361,
                  "callee": {
                    "type": "Identifier",
                    "start": 355,
                    "end": 358,
                    "name": "str",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 359,
                      "end": 360,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 364,
      "end": 409,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 370,
          "end": 408,
          "id": {
            "type": "Identifier",
            "start": 370,
            "end": 379,
            "name": "a2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 372,
              "end": 379,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 374,
                "end": 379,
                "typeName": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 379,
                  "name": "Funcs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 382,
            "end": 408,
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "start": 383,
                "end": 394,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 383,
                    "end": 384,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 388,
                  "end": 394,
                  "callee": {
                    "type": "Identifier",
                    "start": 388,
                    "end": 391,
                    "name": "num",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 392,
                      "end": 393,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 396,
                "end": 407,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 396,
                    "end": 397,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 401,
                  "end": 407,
                  "callee": {
                    "type": "Identifier",
                    "start": 401,
                    "end": 404,
                    "name": "str",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 405,
                      "end": 406,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 410,
      "end": 468,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 416,
          "end": 467,
          "id": {
            "type": "Identifier",
            "start": 416,
            "end": 425,
            "name": "a3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 418,
              "end": 425,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 420,
                "end": 425,
                "typeName": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 425,
                  "name": "Funcs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 428,
            "end": 467,
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "start": 429,
                "end": 440,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 429,
                    "end": 430,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 434,
                  "end": 440,
                  "callee": {
                    "type": "Identifier",
                    "start": 434,
                    "end": 437,
                    "name": "num",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 438,
                      "end": 439,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 442,
                "end": 453,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 442,
                    "end": 443,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 447,
                  "end": 453,
                  "callee": {
                    "type": "Identifier",
                    "start": 447,
                    "end": 450,
                    "name": "num",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 451,
                      "end": 452,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 455,
                "end": 466,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 455,
                    "end": 456,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 460,
                  "end": 466,
                  "callee": {
                    "type": "Identifier",
                    "start": 460,
                    "end": 463,
                    "name": "str",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 464,
                      "end": 465,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 492,
      "end": 548,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 499,
        "end": 548,
        "id": {
          "type": "Identifier",
          "start": 504,
          "end": 512,
          "name": "Selector",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 512,
          "end": 519,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 513,
              "end": 518,
              "name": {
                "type": "Identifier",
                "start": 513,
                "end": 518,
                "name": "State",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 522,
          "end": 547,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 523,
              "end": 535,
              "name": "state",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 528,
                "end": 535,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 530,
                  "end": 535,
                  "typeName": {
                    "type": "Identifier",
                    "start": 530,
                    "end": 535,
                    "name": "State",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 537,
            "end": 547,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 540,
              "end": 547
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 549,
      "end": 602,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 556,
        "end": 602,
        "id": {
          "type": "Identifier",
          "start": 561,
          "end": 574,
          "name": "SelectorTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 574,
          "end": 581,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 575,
              "end": 580,
              "name": {
                "type": "Identifier",
                "start": 575,
                "end": 580,
                "name": "State",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 584,
          "end": 601,
          "elementType": {
            "type": "TSTypeReference",
            "start": 584,
            "end": 599,
            "typeName": {
              "type": "Identifier",
              "start": 584,
              "end": 592,
              "name": "Selector",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 592,
              "end": 599,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 593,
                  "end": 598,
                  "typeName": {
                    "type": "Identifier",
                    "start": 593,
                    "end": 598,
                    "name": "State",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 604,
      "end": 664,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 611,
        "end": 664,
        "id": {
          "type": "Identifier",
          "start": 616,
          "end": 628,
          "name": "ExampleState",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 631,
          "end": 663,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 637,
              "end": 648,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 637,
                "end": 640,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 640,
                "end": 647,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 642,
                  "end": 647,
                  "literal": {
                    "type": "Literal",
                    "start": 642,
                    "end": 647,
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 653,
              "end": 661,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 653,
                "end": 656,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 656,
                "end": 660,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 658,
                  "end": 660,
                  "literal": {
                    "type": "Literal",
                    "start": 658,
                    "end": 660,
                    "value": 42,
                    "raw": "42"
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 666,
      "end": 820,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 673,
        "end": 820,
        "id": {
          "type": "Identifier",
          "start": 682,
          "end": 696,
          "name": "createSelector",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "RestElement",
            "start": 736,
            "end": 787,
            "argument": {
              "type": "Identifier",
              "start": 739,
              "end": 748,
              "name": "selectors",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 748,
              "end": 787,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 750,
                "end": 787,
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "start": 751,
                    "end": 766,
                    "typeAnnotation": {
                      "type": "TSNamedTupleMember",
                      "start": 754,
                      "end": 766,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 765,
                        "end": 766,
                        "typeName": {
                          "type": "Identifier",
                          "start": 765,
                          "end": 766,
                          "name": "S",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "label": {
                        "type": "Identifier",
                        "start": 754,
                        "end": 763,
                        "name": "selectors",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "start": 768,
                    "end": 786,
                    "elementType": {
                      "type": "TSFunctionType",
                      "start": 771,
                      "end": 786,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 772,
                          "end": 778,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 773,
                            "end": 778,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 775,
                              "end": 778
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 780,
                        "end": 786,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 783,
                          "end": 786
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 768,
                      "end": 769,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "optional": false
                  }
                ]
              }
            },
            "value": null
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 789,
          "end": 820,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 795,
              "end": 818,
              "expression": {
                "type": "CallExpression",
                "start": 795,
                "end": 817,
                "callee": {
                  "type": "MemberExpression",
                  "start": 795,
                  "end": 806,
                  "object": {
                    "type": "Identifier",
                    "start": 795,
                    "end": 802,
                    "name": "console",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 803,
                    "end": 806,
                    "name": "log",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 807,
                    "end": 816,
                    "name": "selectors",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 696,
          "end": 735,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 697,
              "end": 734,
              "name": {
                "type": "Identifier",
                "start": 697,
                "end": 698,
                "name": "S",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 707,
                "end": 734,
                "typeName": {
                  "type": "Identifier",
                  "start": 707,
                  "end": 720,
                  "name": "SelectorTuple",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 720,
                  "end": 734,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 721,
                      "end": 733,
                      "typeName": {
                        "type": "Identifier",
                        "start": 721,
                        "end": 733,
                        "name": "ExampleState",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 822,
      "end": 885,
      "expression": {
        "type": "CallExpression",
        "start": 822,
        "end": 884,
        "callee": {
          "type": "Identifier",
          "start": 822,
          "end": 836,
          "name": "createSelector",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 842,
            "end": 852,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 842,
                "end": 843,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "MemberExpression",
              "start": 847,
              "end": 852,
              "object": {
                "type": "Identifier",
                "start": 847,
                "end": 848,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 849,
                "end": 852,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 858,
            "end": 868,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 858,
                "end": 859,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "MemberExpression",
              "start": 863,
              "end": 868,
              "object": {
                "type": "Identifier",
                "start": 863,
                "end": 864,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 865,
                "end": 868,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 874,
            "end": 882,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Literal",
              "start": 880,
              "end": 882,
              "value": 42,
              "raw": "42"
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 909,
      "end": 996,
      "id": {
        "type": "Identifier",
        "start": 926,
        "end": 933,
        "name": "example",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 934,
          "end": 989,
          "argument": {
            "type": "Identifier",
            "start": 937,
            "end": 941,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 941,
            "end": 989,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 943,
              "end": 989,
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "start": 944,
                  "end": 970,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 947,
                    "end": 970,
                    "elementType": {
                      "type": "TSFunctionType",
                      "start": 948,
                      "end": 967,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 949,
                          "end": 958,
                          "name": "n",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 950,
                            "end": 958,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 952,
                              "end": 958
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 960,
                        "end": 967,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 963,
                          "end": 967
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 972,
                  "end": 988,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 973,
                      "end": 979,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 974,
                        "end": 979,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 976,
                          "end": 979
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 981,
                    "end": 988,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 984,
                      "end": 988
                    }
                  }
                }
              ]
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 990,
        "end": 996,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 992,
          "end": 996
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 998,
      "end": 1077,
      "expression": {
        "type": "CallExpression",
        "start": 998,
        "end": 1076,
        "callee": {
          "type": "Identifier",
          "start": 998,
          "end": 1005,
          "name": "example",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1011,
            "end": 1021,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1011,
                "end": 1012,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "MemberExpression",
              "start": 1016,
              "end": 1021,
              "object": {
                "type": "Identifier",
                "start": 1016,
                "end": 1017,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1018,
                "end": 1021,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 1037,
            "end": 1047,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1037,
                "end": 1038,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "MemberExpression",
              "start": 1042,
              "end": 1047,
              "object": {
                "type": "Identifier",
                "start": 1042,
                "end": 1043,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1044,
                "end": 1047,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 1063,
            "end": 1073,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1063,
                "end": 1064,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "MemberExpression",
              "start": 1068,
              "end": 1073,
              "object": {
                "type": "Identifier",
                "start": 1068,
                "end": 1069,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1070,
                "end": 1073,
                "name": "baz",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1101,
      "end": 1193,
      "id": {
        "type": "Identifier",
        "start": 1118,
        "end": 1122,
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 1123,
          "end": 1185,
          "argument": {
            "type": "Identifier",
            "start": 1126,
            "end": 1130,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1130,
            "end": 1185,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 1132,
              "end": 1185,
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "start": 1133,
                  "end": 1161,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1136,
                    "end": 1161,
                    "elementType": {
                      "type": "TSFunctionType",
                      "start": 1137,
                      "end": 1158,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1138,
                          "end": 1149,
                          "name": "arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1141,
                            "end": 1149,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1143,
                              "end": 1149
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1151,
                        "end": 1158,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1154,
                          "end": 1158
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 1163,
                  "end": 1184,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1164,
                      "end": 1175,
                      "name": "arg",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1167,
                        "end": 1175,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1169,
                          "end": 1175
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1177,
                    "end": 1184,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1180,
                      "end": 1184
                    }
                  }
                }
              ]
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1186,
        "end": 1192,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1188,
          "end": 1192
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1197,
      "end": 1226,
      "expression": {
        "type": "CallExpression",
        "start": 1197,
        "end": 1225,
        "callee": {
          "type": "Identifier",
          "start": 1197,
          "end": 1201,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1202,
            "end": 1208,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1202,
                "end": 1203,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 1207,
              "end": 1208,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 1210,
            "end": 1216,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1210,
                "end": 1211,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 1215,
              "end": 1216,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 1218,
            "end": 1224,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1218,
                "end": 1219,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 1223,
              "end": 1224,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
