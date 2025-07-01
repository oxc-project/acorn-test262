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
        "name": "map",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          }
        ],
        "start": 12,
        "end": 18
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "xs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 24
                },
                "typeArguments": null,
                "start": 23,
                "end": 24
              },
              "start": 23,
              "end": 26
            },
            "start": 21,
            "end": 26
          },
          "start": 19,
          "end": 26
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 35,
                        "end": 36
                      },
                      "typeArguments": null,
                      "start": 35,
                      "end": 36
                    },
                    "start": 33,
                    "end": 36
                  },
                  "start": 32,
                  "end": 36
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 41,
                    "end": 42
                  },
                  "typeArguments": null,
                  "start": 41,
                  "end": 42
                },
                "start": 38,
                "end": 42
              },
              "start": 31,
              "end": 42
            },
            "start": 29,
            "end": 42
          },
          "start": 28,
          "end": 42
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ys",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 58,
                          "end": 59
                        },
                        "typeArguments": null,
                        "start": 58,
                        "end": 59
                      },
                      "start": 58,
                      "end": 61
                    },
                    "start": 56,
                    "end": 61
                  },
                  "start": 54,
                  "end": 61
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 64,
                  "end": 66
                },
                "definite": false,
                "start": 54,
                "end": 66
              }
            ],
            "declare": false,
            "start": 50,
            "end": 67
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "xs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 74
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 82
                },
                "optional": false,
                "computed": false,
                "start": 72,
                "end": 82
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 83,
                      "end": 84
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 88,
                        "end": 90
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 91,
                        "end": 95
                      },
                      "optional": false,
                      "computed": false,
                      "start": 88,
                      "end": 95
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 96,
                          "end": 97
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 98,
                            "end": 99
                          }
                        ],
                        "optional": false,
                        "start": 96,
                        "end": 100
                      }
                    ],
                    "optional": false,
                    "start": 88,
                    "end": 101
                  },
                  "id": null,
                  "generator": false,
                  "start": 83,
                  "end": 101
                }
              ],
              "optional": false,
              "start": 72,
              "end": 102
            },
            "directive": null,
            "start": 72,
            "end": 103
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ys",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 117
            },
            "start": 108,
            "end": 118
          }
        ],
        "start": 44,
        "end": 120
      },
      "expression": false,
      "start": 0,
      "end": 120
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r0",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 128
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 134
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 136,
                    "end": 137
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 139,
                    "end": 141
                  }
                ],
                "start": 135,
                "end": 142
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 146
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 152
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 153,
                      "end": 161
                    },
                    "optional": false,
                    "computed": false,
                    "start": 151,
                    "end": 161
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 151,
                  "end": 163
                },
                "id": null,
                "generator": false,
                "start": 144,
                "end": 163
              }
            ],
            "optional": false,
            "start": 131,
            "end": 164
          },
          "definite": false,
          "start": 126,
          "end": 164
        }
      ],
      "declare": false,
      "start": 122,
      "end": 165
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 172
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 178
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
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
              ],
              "start": 178,
              "end": 188
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 190,
                    "end": 191
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 193,
                    "end": 195
                  }
                ],
                "start": 189,
                "end": 196
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 199,
                    "end": 200
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 206
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 215
                    },
                    "optional": false,
                    "computed": false,
                    "start": 205,
                    "end": 215
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 205,
                  "end": 217
                },
                "id": null,
                "generator": false,
                "start": 198,
                "end": 217
              }
            ],
            "optional": false,
            "start": 175,
            "end": 218
          },
          "definite": false,
          "start": 170,
          "end": 218
        }
      ],
      "declare": false,
      "start": 166,
      "end": 219
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 226
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 232
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 233,
                    "end": 239
                  },
                  "typeArguments": null,
                  "start": 233,
                  "end": 239
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 241,
                    "end": 247
                  },
                  "typeArguments": null,
                  "start": 241,
                  "end": 247
                }
              ],
              "start": 232,
              "end": 248
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 250,
                    "end": 251
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 253,
                    "end": 255
                  }
                ],
                "start": 249,
                "end": 256
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 259,
                    "end": 260
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 265,
                      "end": 266
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 267,
                      "end": 275
                    },
                    "optional": false,
                    "computed": false,
                    "start": 265,
                    "end": 275
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 265,
                  "end": 277
                },
                "id": null,
                "generator": false,
                "start": 258,
                "end": 277
              }
            ],
            "optional": false,
            "start": 229,
            "end": 278
          },
          "definite": false,
          "start": 224,
          "end": 278
        }
      ],
      "declare": false,
      "start": 220,
      "end": 279
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 286
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 292
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
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
              ],
              "start": 292,
              "end": 308
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 310,
                    "end": 311
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 313,
                    "end": 315
                  }
                ],
                "start": 309,
                "end": 316
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 319,
                    "end": 320
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 326
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 327,
                      "end": 335
                    },
                    "optional": false,
                    "computed": false,
                    "start": 325,
                    "end": 335
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 325,
                  "end": 337
                },
                "id": null,
                "generator": false,
                "start": 318,
                "end": 337
              }
            ],
            "optional": false,
            "start": 289,
            "end": 338
          },
          "definite": false,
          "start": 284,
          "end": 338
        }
      ],
      "declare": false,
      "start": 280,
      "end": 339
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7b",
            "optional": false,
            "typeAnnotation": null,
            "start": 353,
            "end": 356
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 362
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 363,
                  "end": 369
                }
              ],
              "start": 362,
              "end": 370
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 372,
                    "end": 373
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 375,
                    "end": 377
                  }
                ],
                "start": 371,
                "end": 378
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 381,
                    "end": 382
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 387,
                      "end": 388
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 389,
                      "end": 397
                    },
                    "optional": false,
                    "computed": false,
                    "start": 387,
                    "end": 397
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 387,
                  "end": 399
                },
                "id": null,
                "generator": false,
                "start": 380,
                "end": 399
              }
            ],
            "optional": false,
            "start": 359,
            "end": 400
          },
          "definite": false,
          "start": 353,
          "end": 400
        }
      ],
      "declare": false,
      "start": 349,
      "end": 401
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 417
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 423
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
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
              ],
              "start": 423,
              "end": 436
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 438,
                    "end": 439
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 441,
                    "end": 443
                  }
                ],
                "start": 437,
                "end": 444
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 447,
                    "end": 448
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 453,
                      "end": 454
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 455,
                      "end": 463
                    },
                    "optional": false,
                    "computed": false,
                    "start": 453,
                    "end": 463
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 453,
                  "end": 465
                },
                "id": null,
                "generator": false,
                "start": 446,
                "end": 465
              }
            ],
            "optional": false,
            "start": 420,
            "end": 466
          },
          "definite": false,
          "start": 415,
          "end": 466
        }
      ],
      "declare": false,
      "start": 411,
      "end": 467
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 467
}
```
