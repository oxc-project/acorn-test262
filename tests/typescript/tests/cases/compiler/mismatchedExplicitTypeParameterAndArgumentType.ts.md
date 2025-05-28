__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 467,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 26,
          "decorators": [],
          "name": "xs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 26,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 23,
              "end": 26,
              "elementType": {
                "type": "TSTypeReference",
                "start": 23,
                "end": 24,
                "typeName": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 28,
          "end": 42,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 42,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 31,
              "end": 42,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 32,
                  "end": 36,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 35,
                      "end": 36,
                      "typeName": {
                        "type": "Identifier",
                        "start": 35,
                        "end": 36,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 38,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 41,
                  "end": 42,
                  "typeName": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 120,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 50,
            "end": 67,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 54,
                "end": 66,
                "id": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 61,
                  "decorators": [],
                  "name": "ys",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 56,
                    "end": 61,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 58,
                      "end": 61,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 58,
                        "end": 59,
                        "typeName": {
                          "type": "Identifier",
                          "start": 58,
                          "end": 59,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 64,
                  "end": 66,
                  "elements": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 72,
            "end": 103,
            "expression": {
              "type": "CallExpression",
              "start": 72,
              "end": 102,
              "callee": {
                "type": "MemberExpression",
                "start": 72,
                "end": 82,
                "object": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 74,
                  "decorators": [],
                  "name": "xs",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 82,
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 83,
                  "end": 101,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 83,
                      "end": 84,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "start": 88,
                    "end": 101,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 88,
                      "end": 95,
                      "object": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 90,
                        "decorators": [],
                        "name": "ys",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 95,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "start": 96,
                        "end": 100,
                        "callee": {
                          "type": "Identifier",
                          "start": 96,
                          "end": 97,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 98,
                            "end": 99,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    ],
                    "optional": false
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 108,
            "end": 118,
            "argument": {
              "type": "Identifier",
              "start": 115,
              "end": 117,
              "decorators": [],
              "name": "ys",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 165,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 164,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 128,
            "decorators": [],
            "name": "r0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 131,
            "end": 164,
            "callee": {
              "type": "Identifier",
              "start": 131,
              "end": 134,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 135,
                "end": 142,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 136,
                    "end": 137,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 139,
                    "end": 141,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 144,
                "end": 163,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 151,
                  "end": 163,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 151,
                    "end": 161,
                    "object": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 152,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 161,
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 219,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 218,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 172,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 175,
            "end": 218,
            "callee": {
              "type": "Identifier",
              "start": 175,
              "end": 178,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 178,
              "end": 188,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 179,
                  "end": 182
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 184,
                  "end": 187
                }
              ]
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 189,
                "end": 196,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 190,
                    "end": 191,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 193,
                    "end": 195,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 198,
                "end": 217,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 199,
                    "end": 200,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 205,
                  "end": 217,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 205,
                    "end": 215,
                    "object": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 206,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 215,
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 279,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 278,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 226,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 229,
            "end": 278,
            "callee": {
              "type": "Identifier",
              "start": 229,
              "end": 232,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 232,
              "end": 248,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 233,
                  "end": 239,
                  "typeName": {
                    "type": "Identifier",
                    "start": 233,
                    "end": 239,
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 241,
                  "end": 247,
                  "typeName": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 247,
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 249,
                "end": 256,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 250,
                    "end": 251,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 253,
                    "end": 255,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 258,
                "end": 277,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 259,
                    "end": 260,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 265,
                  "end": 277,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 265,
                    "end": 275,
                    "object": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 266,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 275,
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 280,
      "end": 339,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 338,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 286,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 289,
            "end": 338,
            "callee": {
              "type": "Identifier",
              "start": 289,
              "end": 292,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 292,
              "end": 308,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 293,
                  "end": 299
                },
                {
                  "type": "TSStringKeyword",
                  "start": 301,
                  "end": 307
                }
              ]
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 309,
                "end": 316,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 310,
                    "end": 311,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 313,
                    "end": 315,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 318,
                "end": 337,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 319,
                    "end": 320,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 325,
                  "end": 337,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 325,
                    "end": 335,
                    "object": {
                      "type": "Identifier",
                      "start": 325,
                      "end": 326,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 327,
                      "end": 335,
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 349,
      "end": 401,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 400,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 356,
            "decorators": [],
            "name": "r7b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 359,
            "end": 400,
            "callee": {
              "type": "Identifier",
              "start": 359,
              "end": 362,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 362,
              "end": 370,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 363,
                  "end": 369
                }
              ]
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 371,
                "end": 378,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 372,
                    "end": 373,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 375,
                    "end": 377,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 380,
                "end": 399,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 381,
                    "end": 382,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 387,
                  "end": 399,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 387,
                    "end": 397,
                    "object": {
                      "type": "Identifier",
                      "start": 387,
                      "end": 388,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 389,
                      "end": 397,
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 411,
      "end": 467,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 415,
          "end": 466,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 417,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 420,
            "end": 466,
            "callee": {
              "type": "Identifier",
              "start": 420,
              "end": 423,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 423,
              "end": 436,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 424,
                  "end": 427
                },
                {
                  "type": "TSStringKeyword",
                  "start": 429,
                  "end": 435
                }
              ]
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 437,
                "end": 444,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 438,
                    "end": 439,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 441,
                    "end": 443,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 446,
                "end": 465,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 447,
                    "end": 448,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 453,
                  "end": 465,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 453,
                    "end": 463,
                    "object": {
                      "type": "Identifier",
                      "start": 453,
                      "end": 454,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 455,
                      "end": 463,
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
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
