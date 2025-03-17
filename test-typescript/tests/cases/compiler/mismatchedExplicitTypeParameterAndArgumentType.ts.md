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
        "name": "map",
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
          "start": 19,
          "end": 26,
          "name": "xs",
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 28,
          "end": 42,
          "name": "f",
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
                  "name": "x",
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
                        "name": "T",
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
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 120,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 50,
            "end": 67,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 54,
                "end": 66,
                "id": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 61,
                  "name": "ys",
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
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
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
            "kind": "var",
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
                  "name": "xs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 82,
                  "name": "forEach",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 83,
                  "end": 101,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 83,
                      "end": 84,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                        "name": "ys",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 95,
                        "name": "push",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "start": 96,
                        "end": 100,
                        "callee": {
                          "type": "Identifier",
                          "start": 96,
                          "end": 97,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 98,
                            "end": 99,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
            "type": "ReturnStatement",
            "start": 108,
            "end": 118,
            "argument": {
              "type": "Identifier",
              "start": 115,
              "end": 117,
              "name": "ys",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "U",
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
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 164,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 128,
            "name": "r0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 131,
            "end": 164,
            "callee": {
              "type": "Identifier",
              "start": 131,
              "end": 134,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 161,
                      "name": "toString",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 218,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 172,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 175,
            "end": 218,
            "callee": {
              "type": "Identifier",
              "start": 175,
              "end": 178,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 199,
                    "end": 200,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 215,
                      "name": "toString",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
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
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 220,
      "end": 279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 278,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 226,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 229,
            "end": 278,
            "callee": {
              "type": "Identifier",
              "start": 229,
              "end": 232,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 259,
                    "end": 260,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 275,
                      "name": "toString",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
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
                    "name": "Object",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "Object",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 280,
      "end": 339,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 338,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 286,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 289,
            "end": 338,
            "callee": {
              "type": "Identifier",
              "start": 289,
              "end": 292,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 319,
                    "end": 320,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 327,
                      "end": 335,
                      "name": "toString",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
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
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 349,
      "end": 401,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 400,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 356,
            "name": "r7b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 359,
            "end": 400,
            "callee": {
              "type": "Identifier",
              "start": 359,
              "end": 362,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 381,
                    "end": 382,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 389,
                      "end": 397,
                      "name": "toString",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
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
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 411,
      "end": 467,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 415,
          "end": 466,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 417,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 420,
            "end": 466,
            "callee": {
              "type": "Identifier",
              "start": 420,
              "end": 423,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 447,
                    "end": 448,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 455,
                      "end": 463,
                      "name": "toString",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
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
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
