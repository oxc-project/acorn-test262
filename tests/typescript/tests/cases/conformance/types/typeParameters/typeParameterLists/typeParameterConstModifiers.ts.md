__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 26,
              "end": 27
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 20,
            "end": 27
          }
        ],
        "start": 19,
        "end": 28
      },
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
                "start": 32,
                "end": 33
              },
              "typeArguments": null,
              "start": 32,
              "end": 33
            },
            "start": 30,
            "end": 33
          },
          "start": 29,
          "end": 33
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "typeArguments": null,
          "start": 36,
          "end": 37
        },
        "start": 34,
        "end": 37
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x11",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 49
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 54
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 55,
                "end": 58
              }
            ],
            "optional": false,
            "start": 52,
            "end": 59
          },
          "definite": false,
          "start": 46,
          "end": 59
        }
      ],
      "declare": false,
      "start": 40,
      "end": 60
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x12",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 75
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 77,
                    "end": 80
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 83,
                        "end": 86
                      },
                      {
                        "type": "Literal",
                        "value": "c",
                        "raw": "'c'",
                        "start": 88,
                        "end": 91
                      }
                    ],
                    "start": 82,
                    "end": 92
                  }
                ],
                "start": 76,
                "end": 93
              }
            ],
            "optional": false,
            "start": 73,
            "end": 94
          },
          "definite": false,
          "start": 67,
          "end": 94
        }
      ],
      "declare": false,
      "start": 61,
      "end": 95
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x13",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 105
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 110
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 114
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 116,
                      "end": 117
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 113,
                    "end": 117
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 119,
                      "end": 120
                    },
                    "value": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 122,
                      "end": 125
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 119,
                    "end": 125
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 127,
                      "end": 128
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "e",
                          "raw": "\"e\"",
                          "start": 131,
                          "end": 134
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 136,
                          "end": 137
                        },
                        {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 139,
                          "end": 143
                        },
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 147,
                                "end": 148
                              },
                              "value": {
                                "type": "Literal",
                                "value": "g",
                                "raw": "\"g\"",
                                "start": 150,
                                "end": 153
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 147,
                              "end": 153
                            }
                          ],
                          "start": 145,
                          "end": 155
                        }
                      ],
                      "start": 130,
                      "end": 156
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 127,
                    "end": 156
                  }
                ],
                "start": 111,
                "end": 158
              }
            ],
            "optional": false,
            "start": 108,
            "end": 159
          },
          "definite": false,
          "start": 102,
          "end": 159
        }
      ],
      "declare": false,
      "start": 96,
      "end": 160
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 181
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 188,
              "end": 189
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 182,
            "end": 189
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 192
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 191,
            "end": 192
          }
        ],
        "start": 181,
        "end": 193
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 198
                  },
                  "typeArguments": null,
                  "start": 197,
                  "end": 198
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 201,
                  "end": 210
                }
              ],
              "start": 197,
              "end": 210
            },
            "start": 195,
            "end": 210
          },
          "start": 194,
          "end": 210
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 214
          },
          "typeArguments": null,
          "start": 213,
          "end": 214
        },
        "start": 211,
        "end": 214
      },
      "body": null,
      "expression": false,
      "start": 162,
      "end": 215
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x21",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 226
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 231
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 232,
                "end": 235
              }
            ],
            "optional": false,
            "start": 229,
            "end": 236
          },
          "definite": false,
          "start": 223,
          "end": 236
        }
      ],
      "declare": false,
      "start": 217,
      "end": 237
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x22",
            "optional": false,
            "typeAnnotation": null,
            "start": 244,
            "end": 247
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 252
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 254,
                    "end": 257
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 260,
                        "end": 263
                      },
                      {
                        "type": "Literal",
                        "value": "c",
                        "raw": "'c'",
                        "start": 265,
                        "end": 268
                      }
                    ],
                    "start": 259,
                    "end": 269
                  }
                ],
                "start": 253,
                "end": 270
              }
            ],
            "optional": false,
            "start": 250,
            "end": 271
          },
          "definite": false,
          "start": 244,
          "end": 271
        }
      ],
      "declare": false,
      "start": 238,
      "end": 272
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x23",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 282
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 287
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 290,
                      "end": 291
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 293,
                      "end": 294
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 290,
                    "end": 294
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 297
                    },
                    "value": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 299,
                      "end": 302
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 296,
                    "end": 302
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 304,
                      "end": 305
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "e",
                          "raw": "\"e\"",
                          "start": 308,
                          "end": 311
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 313,
                          "end": 314
                        },
                        {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 316,
                          "end": 320
                        },
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 324,
                                "end": 325
                              },
                              "value": {
                                "type": "Literal",
                                "value": "g",
                                "raw": "\"g\"",
                                "start": 327,
                                "end": 330
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 324,
                              "end": 330
                            }
                          ],
                          "start": 322,
                          "end": 332
                        }
                      ],
                      "start": 307,
                      "end": 333
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 304,
                    "end": 333
                  }
                ],
                "start": 288,
                "end": 335
              }
            ],
            "optional": false,
            "start": 285,
            "end": 336
          },
          "definite": false,
          "start": 279,
          "end": 336
        }
      ],
      "declare": false,
      "start": 273,
      "end": 337
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 358
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 365,
              "end": 366
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 359,
            "end": 366
          }
        ],
        "start": 358,
        "end": 367
      },
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
                "start": 371,
                "end": 372
              },
              "typeArguments": null,
              "start": 371,
              "end": 372
            },
            "start": 369,
            "end": 372
          },
          "start": 368,
          "end": 372
        }
      ],
      "returnType": {
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
              "start": 375,
              "end": 376
            },
            "typeArguments": null,
            "start": 375,
            "end": 376
          },
          "start": 375,
          "end": 378
        },
        "start": 373,
        "end": 378
      },
      "body": null,
      "expression": false,
      "start": 339,
      "end": 379
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x31",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 390
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 395
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 396,
                "end": 403
              }
            ],
            "optional": false,
            "start": 393,
            "end": 404
          },
          "definite": false,
          "start": 387,
          "end": 404
        }
      ],
      "declare": false,
      "start": 381,
      "end": 405
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x32",
            "optional": false,
            "typeAnnotation": null,
            "start": 412,
            "end": 415
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 420
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 421,
                "end": 428
              }
            ],
            "optional": false,
            "start": 418,
            "end": 429
          },
          "definite": false,
          "start": 412,
          "end": 429
        }
      ],
      "declare": false,
      "start": 406,
      "end": 430
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 451
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 458,
              "end": 459
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 452,
            "end": 459
          }
        ],
        "start": 451,
        "end": 460
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 467,
                    "end": 468
                  },
                  "typeArguments": null,
                  "start": 467,
                  "end": 468
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 470,
                    "end": 471
                  },
                  "typeArguments": null,
                  "start": 470,
                  "end": 471
                }
              ],
              "start": 466,
              "end": 472
            },
            "start": 464,
            "end": 472
          },
          "start": 461,
          "end": 472
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 475,
            "end": 476
          },
          "typeArguments": null,
          "start": 475,
          "end": 476
        },
        "start": 473,
        "end": 476
      },
      "body": null,
      "expression": false,
      "start": 432,
      "end": 477
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x41",
            "optional": false,
            "typeAnnotation": null,
            "start": 485,
            "end": 488
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 493
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 496,
                        "end": 497
                      },
                      {
                        "type": "Literal",
                        "value": "x",
                        "raw": "'x'",
                        "start": 499,
                        "end": 502
                      }
                    ],
                    "start": 495,
                    "end": 503
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 506,
                        "end": 507
                      },
                      {
                        "type": "Literal",
                        "value": "y",
                        "raw": "'y'",
                        "start": 509,
                        "end": 512
                      }
                    ],
                    "start": 505,
                    "end": 513
                  }
                ],
                "start": 494,
                "end": 514
              }
            ],
            "optional": false,
            "start": 491,
            "end": 515
          },
          "definite": false,
          "start": 485,
          "end": 515
        }
      ],
      "declare": false,
      "start": 479,
      "end": 516
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x42",
            "optional": false,
            "typeAnnotation": null,
            "start": 523,
            "end": 526
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 529,
              "end": 531
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 535,
                          "end": 536
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 538,
                          "end": 539
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 535,
                        "end": 539
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 541,
                          "end": 542
                        },
                        "value": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "'x'",
                          "start": 544,
                          "end": 547
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 541,
                        "end": 547
                      }
                    ],
                    "start": 533,
                    "end": 549
                  },
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 553,
                          "end": 554
                        },
                        "value": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 556,
                          "end": 557
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 553,
                        "end": 557
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 559,
                          "end": 560
                        },
                        "value": {
                          "type": "Literal",
                          "value": "y",
                          "raw": "'y'",
                          "start": 562,
                          "end": 565
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 559,
                        "end": 565
                      }
                    ],
                    "start": 551,
                    "end": 567
                  }
                ],
                "start": 532,
                "end": 568
              }
            ],
            "optional": false,
            "start": 529,
            "end": 569
          },
          "definite": false,
          "start": 523,
          "end": 569
        }
      ],
      "declare": false,
      "start": 517,
      "end": 570
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 589,
        "end": 591
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 598,
              "end": 599
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 592,
            "end": 599
          }
        ],
        "start": 591,
        "end": 600
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 608,
                    "end": 609
                  },
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
                        "start": 611,
                        "end": 612
                      },
                      "typeArguments": null,
                      "start": 611,
                      "end": 612
                    },
                    "start": 609,
                    "end": 612
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 608,
                  "end": 613
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 614,
                    "end": 615
                  },
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
                        "start": 617,
                        "end": 618
                      },
                      "typeArguments": null,
                      "start": 617,
                      "end": 618
                    },
                    "start": 615,
                    "end": 618
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 614,
                  "end": 618
                }
              ],
              "start": 606,
              "end": 620
            },
            "start": 604,
            "end": 620
          },
          "start": 601,
          "end": 620
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 623,
            "end": 624
          },
          "typeArguments": null,
          "start": 623,
          "end": 624
        },
        "start": 621,
        "end": 624
      },
      "body": null,
      "expression": false,
      "start": 572,
      "end": 625
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x51",
            "optional": false,
            "typeAnnotation": null,
            "start": 633,
            "end": 636
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null,
              "start": 639,
              "end": 641
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 644,
                      "end": 645
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 648,
                          "end": 649
                        },
                        {
                          "type": "Literal",
                          "value": "x",
                          "raw": "'x'",
                          "start": 651,
                          "end": 654
                        }
                      ],
                      "start": 647,
                      "end": 655
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 644,
                    "end": 655
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 657,
                      "end": 658
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 661,
                          "end": 662
                        },
                        {
                          "type": "Literal",
                          "value": "y",
                          "raw": "'y'",
                          "start": 664,
                          "end": 667
                        }
                      ],
                      "start": 660,
                      "end": 668
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 657,
                    "end": 668
                  }
                ],
                "start": 642,
                "end": 670
              }
            ],
            "optional": false,
            "start": 639,
            "end": 671
          },
          "definite": false,
          "start": 633,
          "end": 671
        }
      ],
      "declare": false,
      "start": 627,
      "end": 672
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x52",
            "optional": false,
            "typeAnnotation": null,
            "start": 679,
            "end": 682
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null,
              "start": 685,
              "end": 687
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 690,
                      "end": 691
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 695,
                            "end": 696
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 698,
                            "end": 699
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 695,
                          "end": 699
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 701,
                            "end": 702
                          },
                          "value": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "'x'",
                            "start": 704,
                            "end": 707
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 701,
                          "end": 707
                        }
                      ],
                      "start": 693,
                      "end": 709
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 690,
                    "end": 709
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 711,
                      "end": 712
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 716,
                            "end": 717
                          },
                          "value": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 719,
                            "end": 720
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 716,
                          "end": 720
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 722,
                            "end": 723
                          },
                          "value": {
                            "type": "Literal",
                            "value": "y",
                            "raw": "'y'",
                            "start": 725,
                            "end": 728
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 722,
                          "end": 728
                        }
                      ],
                      "start": 714,
                      "end": 730
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 711,
                    "end": 730
                  }
                ],
                "start": 688,
                "end": 732
              }
            ],
            "optional": false,
            "start": 685,
            "end": 733
          },
          "definite": false,
          "start": 679,
          "end": 733
        }
      ],
      "declare": false,
      "start": 673,
      "end": 734
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 753,
        "end": 755
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 762,
              "end": 763
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 781,
                  "end": 788
                },
                "start": 781,
                "end": 790
              },
              "start": 772,
              "end": 790
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 756,
            "end": 790
          }
        ],
        "start": 755,
        "end": 791
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 795,
            "end": 799
          },
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
                "start": 801,
                "end": 802
              },
              "typeArguments": null,
              "start": 801,
              "end": 802
            },
            "start": 799,
            "end": 802
          },
          "value": null,
          "start": 792,
          "end": 802
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 805,
            "end": 806
          },
          "typeArguments": null,
          "start": 805,
          "end": 806
        },
        "start": 803,
        "end": 806
      },
      "body": null,
      "expression": false,
      "start": 736,
      "end": 807
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x61",
            "optional": false,
            "typeAnnotation": null,
            "start": 815,
            "end": 818
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f6",
              "optional": false,
              "typeAnnotation": null,
              "start": 821,
              "end": 823
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 824,
                "end": 825
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 827,
                "end": 830
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 834,
                      "end": 835
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 837,
                      "end": 838
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 834,
                    "end": 838
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 840,
                      "end": 841
                    },
                    "value": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "'x'",
                      "start": 843,
                      "end": 846
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 840,
                    "end": 846
                  }
                ],
                "start": 832,
                "end": 848
              }
            ],
            "optional": false,
            "start": 821,
            "end": 849
          },
          "definite": false,
          "start": 815,
          "end": 849
        }
      ],
      "declare": false,
      "start": 809,
      "end": 850
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x62",
            "optional": false,
            "typeAnnotation": null,
            "start": 857,
            "end": 860
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f6",
              "optional": false,
              "typeAnnotation": null,
              "start": 863,
              "end": 865
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 870,
                      "end": 871
                    },
                    {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 873,
                      "end": 876
                    }
                  ],
                  "start": 869,
                  "end": 877
                },
                "start": 866,
                "end": 877
              }
            ],
            "optional": false,
            "start": 863,
            "end": 878
          },
          "definite": false,
          "start": 857,
          "end": 878
        }
      ],
      "declare": false,
      "start": 851,
      "end": 879
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x63",
            "optional": false,
            "typeAnnotation": null,
            "start": 886,
            "end": 889
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f6",
              "optional": false,
              "typeAnnotation": null,
              "start": 892,
              "end": 894
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 895,
                "end": 899
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 905,
                      "end": 906
                    },
                    {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 908,
                      "end": 911
                    }
                  ],
                  "start": 904,
                  "end": 912
                },
                "start": 901,
                "end": 912
              }
            ],
            "optional": false,
            "start": 892,
            "end": 913
          },
          "definite": false,
          "start": 886,
          "end": 913
        }
      ],
      "declare": false,
      "start": 880,
      "end": 914
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x64",
            "optional": false,
            "typeAnnotation": null,
            "start": 921,
            "end": 924
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f6",
              "optional": false,
              "typeAnnotation": null,
              "start": 927,
              "end": 929
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 935,
                      "end": 936
                    },
                    {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 938,
                      "end": 941
                    }
                  ],
                  "start": 934,
                  "end": 942
                },
                "start": 930,
                "end": 943
              }
            ],
            "optional": false,
            "start": 927,
            "end": 944
          },
          "definite": false,
          "start": 921,
          "end": 944
        }
      ],
      "declare": false,
      "start": 915,
      "end": 945
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x65",
            "optional": false,
            "typeAnnotation": null,
            "start": 952,
            "end": 955
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f6",
              "optional": false,
              "typeAnnotation": null,
              "start": 958,
              "end": 960
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 961,
                "end": 965
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 972,
                      "end": 973
                    },
                    {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 975,
                      "end": 978
                    }
                  ],
                  "start": 971,
                  "end": 979
                },
                "start": 967,
                "end": 980
              }
            ],
            "optional": false,
            "start": 958,
            "end": 981
          },
          "definite": false,
          "start": 952,
          "end": 981
        }
      ],
      "declare": false,
      "start": 946,
      "end": 982
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 990,
        "end": 992
      },
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
              "start": 999,
              "end": 1000
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 993,
            "end": 1000
          }
        ],
        "start": 992,
        "end": 1001
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1008,
              "end": 1019
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                        "start": 1023,
                        "end": 1024
                      },
                      "typeArguments": null,
                      "start": 1023,
                      "end": 1024
                    },
                    "start": 1021,
                    "end": 1024
                  },
                  "start": 1020,
                  "end": 1024
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1026,
                "end": 1028
              },
              "expression": false,
              "start": 1019,
              "end": 1028
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1008,
            "end": 1028
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1033,
              "end": 1036
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1043,
                      "end": 1044
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": true,
                    "start": 1037,
                    "end": 1044
                  }
                ],
                "start": 1036,
                "end": 1045
              },
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1049,
                        "end": 1050
                      },
                      "typeArguments": null,
                      "start": 1049,
                      "end": 1050
                    },
                    "start": 1047,
                    "end": 1050
                  },
                  "start": 1046,
                  "end": 1050
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1061,
                      "end": 1062
                    },
                    "start": 1054,
                    "end": 1063
                  }
                ],
                "start": 1052,
                "end": 1065
              },
              "expression": false,
              "start": 1036,
              "end": 1065
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1033,
            "end": 1065
          }
        ],
        "start": 1002,
        "end": 1067
      },
      "abstract": false,
      "declare": false,
      "start": 984,
      "end": 1067
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c71",
            "optional": false,
            "typeAnnotation": null,
            "start": 1075,
            "end": 1078
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1085,
              "end": 1087
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1090,
                      "end": 1091
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1093,
                      "end": 1094
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1090,
                    "end": 1094
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1096,
                      "end": 1097
                    },
                    "value": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 1099,
                      "end": 1102
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1096,
                    "end": 1102
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1104,
                      "end": 1105
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "e",
                          "raw": "\"e\"",
                          "start": 1108,
                          "end": 1111
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1113,
                          "end": 1114
                        },
                        {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 1116,
                          "end": 1120
                        },
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1124,
                                "end": 1125
                              },
                              "value": {
                                "type": "Literal",
                                "value": "g",
                                "raw": "\"g\"",
                                "start": 1127,
                                "end": 1130
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1124,
                              "end": 1130
                            }
                          ],
                          "start": 1122,
                          "end": 1132
                        }
                      ],
                      "start": 1107,
                      "end": 1133
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1104,
                    "end": 1133
                  }
                ],
                "start": 1088,
                "end": 1135
              }
            ],
            "start": 1081,
            "end": 1136
          },
          "definite": false,
          "start": 1075,
          "end": 1136
        }
      ],
      "declare": false,
      "start": 1069,
      "end": 1137
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c72",
            "optional": false,
            "typeAnnotation": null,
            "start": 1144,
            "end": 1147
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c71",
                "optional": false,
                "typeAnnotation": null,
                "start": 1150,
                "end": 1153
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1154,
                "end": 1157
              },
              "optional": false,
              "computed": false,
              "start": 1150,
              "end": 1157
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 1159,
                    "end": 1162
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 1165,
                        "end": 1168
                      },
                      {
                        "type": "Literal",
                        "value": "c",
                        "raw": "'c'",
                        "start": 1170,
                        "end": 1173
                      }
                    ],
                    "start": 1164,
                    "end": 1174
                  }
                ],
                "start": 1158,
                "end": 1175
              }
            ],
            "optional": false,
            "start": 1150,
            "end": 1176
          },
          "definite": false,
          "start": 1144,
          "end": 1176
        }
      ],
      "declare": false,
      "start": 1138,
      "end": 1177
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1185,
            "end": 1187
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "start": 1203,
                    "end": 1204
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 1197,
                  "end": 1204
                }
              ],
              "start": 1196,
              "end": 1205
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1206,
              "end": 1208
            },
            "abstract": false,
            "declare": false,
            "start": 1190,
            "end": 1208
          },
          "definite": false,
          "start": 1185,
          "end": 1208
        }
      ],
      "declare": false,
      "start": 1179,
      "end": 1208
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fx1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1216,
            "end": 1219
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 1229,
                    "end": 1230
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 1223,
                  "end": 1230
                }
              ],
              "start": 1222,
              "end": 1231
            },
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
                      "start": 1235,
                      "end": 1236
                    },
                    "typeArguments": null,
                    "start": 1235,
                    "end": 1236
                  },
                  "start": 1233,
                  "end": 1236
                },
                "start": 1232,
                "end": 1236
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1241,
              "end": 1242
            },
            "id": null,
            "generator": false,
            "start": 1222,
            "end": 1242
          },
          "definite": false,
          "start": 1216,
          "end": 1242
        }
      ],
      "declare": false,
      "start": 1210,
      "end": 1243
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fx2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1250,
            "end": 1253
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 1263,
                    "end": 1264
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 1257,
                  "end": 1264
                }
              ],
              "start": 1256,
              "end": 1266
            },
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
                      "start": 1270,
                      "end": 1271
                    },
                    "typeArguments": null,
                    "start": 1270,
                    "end": 1271
                  },
                  "start": 1268,
                  "end": 1271
                },
                "start": 1267,
                "end": 1271
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1276,
              "end": 1277
            },
            "id": null,
            "generator": false,
            "start": 1256,
            "end": 1277
          },
          "definite": false,
          "start": 1250,
          "end": 1277
        }
      ],
      "declare": false,
      "start": 1244,
      "end": 1278
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1290,
        "end": 1292
      },
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
              "start": 1299,
              "end": 1300
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1293,
            "end": 1300
          }
        ],
        "start": 1292,
        "end": 1301
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1304,
              "end": 1305
            },
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
                  "start": 1307,
                  "end": 1308
                },
                "typeArguments": null,
                "start": 1307,
                "end": 1308
              },
              "start": 1305,
              "end": 1308
            },
            "accessibility": null,
            "static": false,
            "start": 1304,
            "end": 1308
          }
        ],
        "start": 1302,
        "end": 1310
      },
      "declare": false,
      "start": 1280,
      "end": 1310
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1332,
        "end": 1334
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1341,
              "end": 1342
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 1349,
                    "end": 1350
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 1343,
                  "end": 1350
                }
              ],
              "start": 1342,
              "end": 1351
            },
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
                      "start": 1355,
                      "end": 1356
                    },
                    "typeArguments": null,
                    "start": 1355,
                    "end": 1356
                  },
                  "start": 1353,
                  "end": 1356
                },
                "start": 1352,
                "end": 1356
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1359,
                  "end": 1360
                },
                "typeArguments": null,
                "start": 1359,
                "end": 1360
              },
              "start": 1357,
              "end": 1360
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1341,
            "end": 1361
          }
        ],
        "start": 1335,
        "end": 1363
      },
      "declare": false,
      "start": 1322,
      "end": 1363
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1370,
        "end": 1372
      },
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
              "start": 1379,
              "end": 1380
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1373,
            "end": 1380
          }
        ],
        "start": 1372,
        "end": 1381
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 1384,
          "end": 1385
        },
        "typeArguments": null,
        "start": 1384,
        "end": 1385
      },
      "declare": false,
      "start": 1365,
      "end": 1386
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1403,
        "end": 1405
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                "start": 1415,
                "end": 1416
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": true,
              "start": 1409,
              "end": 1416
            }
          ],
          "start": 1408,
          "end": 1417
        },
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
                  "start": 1421,
                  "end": 1422
                },
                "typeArguments": null,
                "start": 1421,
                "end": 1422
              },
              "start": 1419,
              "end": 1422
            },
            "start": 1418,
            "end": 1422
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1427,
              "end": 1428
            },
            "typeArguments": null,
            "start": 1427,
            "end": 1428
          },
          "start": 1424,
          "end": 1428
        },
        "start": 1408,
        "end": 1428
      },
      "declare": false,
      "start": 1398,
      "end": 1429
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1435,
        "end": 1437
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 1449,
                    "end": 1450
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 1443,
                  "end": 1450
                }
              ],
              "start": 1442,
              "end": 1451
            },
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
                      "start": 1455,
                      "end": 1456
                    },
                    "typeArguments": null,
                    "start": 1455,
                    "end": 1456
                  },
                  "start": 1453,
                  "end": 1456
                },
                "start": 1452,
                "end": 1456
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1459,
                  "end": 1460
                },
                "typeArguments": null,
                "start": 1459,
                "end": 1460
              },
              "start": 1457,
              "end": 1460
            },
            "start": 1442,
            "end": 1460
          }
        ],
        "start": 1440,
        "end": 1462
      },
      "declare": false,
      "start": 1430,
      "end": 1463
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1469,
        "end": 1471
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
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
                "start": 1485,
                "end": 1486
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": true,
              "start": 1479,
              "end": 1486
            }
          ],
          "start": 1478,
          "end": 1487
        },
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
                  "start": 1491,
                  "end": 1492
                },
                "typeArguments": null,
                "start": 1491,
                "end": 1492
              },
              "start": 1489,
              "end": 1492
            },
            "start": 1488,
            "end": 1492
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1497,
              "end": 1498
            },
            "typeArguments": null,
            "start": 1497,
            "end": 1498
          },
          "start": 1494,
          "end": 1498
        },
        "start": 1474,
        "end": 1498
      },
      "declare": false,
      "start": 1464,
      "end": 1499
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1505,
        "end": 1507
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 1523,
                    "end": 1524
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 1517,
                  "end": 1524
                }
              ],
              "start": 1516,
              "end": 1525
            },
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
                      "start": 1529,
                      "end": 1530
                    },
                    "typeArguments": null,
                    "start": 1529,
                    "end": 1530
                  },
                  "start": 1527,
                  "end": 1530
                },
                "start": 1526,
                "end": 1530
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1533,
                  "end": 1534
                },
                "typeArguments": null,
                "start": 1533,
                "end": 1534
              },
              "start": 1531,
              "end": 1534
            },
            "start": 1512,
            "end": 1534
          }
        ],
        "start": 1510,
        "end": 1536
      },
      "declare": false,
      "start": 1500,
      "end": 1537
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 1576,
        "end": 1579
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1584,
              "end": 1585
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1589,
                      "end": 1590
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1594,
                              "end": 1595
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "123",
                                  "raw": "\"123\"",
                                  "start": 1597,
                                  "end": 1602
                                },
                                "start": 1597,
                                "end": 1602
                              },
                              "start": 1595,
                              "end": 1602
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1594,
                            "end": 1602
                          }
                        ],
                        "start": 1592,
                        "end": 1604
                      },
                      "start": 1590,
                      "end": 1604
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1589,
                    "end": 1604
                  }
                ],
                "start": 1587,
                "end": 1606
              },
              "start": 1585,
              "end": 1606
            },
            "accessibility": null,
            "static": false,
            "start": 1584,
            "end": 1606
          }
        ],
        "start": 1582,
        "end": 1608
      },
      "declare": false,
      "start": 1571,
      "end": 1609
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetPath",
        "optional": false,
        "typeAnnotation": null,
        "start": 1616,
        "end": 1623
      },
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
              "start": 1624,
              "end": 1625
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1624,
            "end": 1625
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1627,
              "end": 1628
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1627,
            "end": 1628
          }
        ],
        "start": 1623,
        "end": 1629
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1636,
            "end": 1637
          },
          "typeArguments": null,
          "start": 1636,
          "end": 1637
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [],
            "start": 1655,
            "end": 1657
          },
          "start": 1646,
          "end": 1657
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1660,
            "end": 1661
          },
          "typeArguments": null,
          "start": 1660,
          "end": 1661
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1668,
              "end": 1669
            },
            "typeArguments": null,
            "start": 1668,
            "end": 1669
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1694,
                      "end": 1695
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1710,
                          "end": 1711
                        },
                        "typeArguments": null,
                        "start": 1710,
                        "end": 1711
                      },
                      "start": 1704,
                      "end": 1711
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1694,
                    "end": 1711
                  },
                  "start": 1688,
                  "end": 1711
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Rest",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1722,
                        "end": 1726
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1722,
                      "end": 1726
                    },
                    "start": 1716,
                    "end": 1726
                  },
                  "start": 1713,
                  "end": 1726
                }
              ],
              "start": 1687,
              "end": 1727
            },
            "start": 1678,
            "end": 1727
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "GetPath",
              "optional": false,
              "typeAnnotation": null,
              "start": 1730,
              "end": 1737
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1738,
                      "end": 1739
                    },
                    "typeArguments": null,
                    "start": 1738,
                    "end": 1739
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1740,
                      "end": 1741
                    },
                    "typeArguments": null,
                    "start": 1740,
                    "end": 1741
                  },
                  "start": 1738,
                  "end": 1742
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1744,
                    "end": 1748
                  },
                  "typeArguments": null,
                  "start": 1744,
                  "end": 1748
                }
              ],
              "start": 1737,
              "end": 1749
            },
            "start": 1730,
            "end": 1749
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1756,
            "end": 1761
          },
          "start": 1668,
          "end": 1761
        },
        "start": 1636,
        "end": 1761
      },
      "declare": false,
      "start": 1611,
      "end": 1762
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "set",
        "optional": false,
        "typeAnnotation": null,
        "start": 1773,
        "end": 1776
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
              "start": 1777,
              "end": 1778
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1777,
            "end": 1778
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1786,
              "end": 1787
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1805,
                  "end": 1811
                },
                "start": 1805,
                "end": 1813
              },
              "start": 1796,
              "end": 1813
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1780,
            "end": 1813
          }
        ],
        "start": 1776,
        "end": 1814
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 1820,
                "end": 1821
              },
              "typeArguments": null,
              "start": 1820,
              "end": 1821
            },
            "start": 1818,
            "end": 1821
          },
          "start": 1815,
          "end": 1821
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1829,
                "end": 1830
              },
              "typeArguments": null,
              "start": 1829,
              "end": 1830
            },
            "start": 1827,
            "end": 1830
          },
          "start": 1823,
          "end": 1830
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GetPath",
                "optional": false,
                "typeAnnotation": null,
                "start": 1839,
                "end": 1846
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1847,
                      "end": 1848
                    },
                    "typeArguments": null,
                    "start": 1847,
                    "end": 1848
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1850,
                      "end": 1851
                    },
                    "typeArguments": null,
                    "start": 1850,
                    "end": 1851
                  }
                ],
                "start": 1846,
                "end": 1852
              },
              "start": 1839,
              "end": 1852
            },
            "start": 1837,
            "end": 1852
          },
          "start": 1832,
          "end": 1852
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1854,
        "end": 1856
      },
      "expression": false,
      "start": 1764,
      "end": 1856
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1875,
                  "end": 1878
                },
                "typeArguments": null,
                "start": 1875,
                "end": 1878
              },
              "start": 1873,
              "end": 1878
            },
            "start": 1870,
            "end": 1878
          },
          "init": null,
          "definite": false,
          "start": 1870,
          "end": 1878
        }
      ],
      "declare": true,
      "start": 1858,
      "end": 1879
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "123",
                  "raw": "\"123\"",
                  "start": 1899,
                  "end": 1904
                },
                "start": 1899,
                "end": 1904
              },
              "start": 1897,
              "end": 1904
            },
            "start": 1892,
            "end": 1904
          },
          "init": null,
          "definite": false,
          "start": 1892,
          "end": 1904
        }
      ],
      "declare": true,
      "start": 1880,
      "end": 1905
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "set",
          "optional": false,
          "typeAnnotation": null,
          "start": 1907,
          "end": 1910
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 1911,
            "end": 1914
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 1917,
                "end": 1920
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 1922,
                "end": 1925
              },
              {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 1927,
                "end": 1930
              }
            ],
            "start": 1916,
            "end": 1931
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 1933,
            "end": 1938
          }
        ],
        "optional": false,
        "start": 1907,
        "end": 1939
      },
      "directive": null,
      "start": 1907,
      "end": 1940
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inners",
        "optional": false,
        "typeAnnotation": null,
        "start": 1981,
        "end": 1987
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1994,
              "end": 1995
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 2013,
                  "end": 2016
                },
                "start": 2013,
                "end": 2018
              },
              "start": 2004,
              "end": 2018
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1988,
            "end": 2018
          }
        ],
        "start": 1987,
        "end": 2019
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 2023,
            "end": 2027
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 2039,
                    "end": 2046
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2051,
                        "end": 2052
                      },
                      "typeArguments": null,
                      "start": 2051,
                      "end": 2052
                    },
                    "start": 2048,
                    "end": 2052
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 2054,
                    "end": 2061
                  }
                ],
                "start": 2038,
                "end": 2062
              },
              "start": 2029,
              "end": 2062
            },
            "start": 2027,
            "end": 2062
          },
          "value": null,
          "start": 2020,
          "end": 2062
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2065,
            "end": 2066
          },
          "typeArguments": null,
          "start": 2065,
          "end": 2066
        },
        "start": 2063,
        "end": 2066
      },
      "body": null,
      "expression": false,
      "start": 1964,
      "end": 2067
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 2075,
            "end": 2079
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "inners",
              "optional": false,
              "typeAnnotation": null,
              "start": 2082,
              "end": 2088
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2089,
                "end": 2090
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2091,
                "end": 2092
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2093,
                "end": 2094
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 2095,
                "end": 2096
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 2097,
                "end": 2098
              }
            ],
            "optional": false,
            "start": 2082,
            "end": 2099
          },
          "definite": false,
          "start": 2075,
          "end": 2099
        }
      ],
      "declare": false,
      "start": 2069,
      "end": 2100
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inners2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2119,
        "end": 2126
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 2133,
              "end": 2134
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 2152,
                  "end": 2155
                },
                "start": 2152,
                "end": 2157
              },
              "start": 2143,
              "end": 2157
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 2127,
            "end": 2157
          }
        ],
        "start": 2126,
        "end": 2158
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 2175,
                    "end": 2182
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2187,
                        "end": 2188
                      },
                      "typeArguments": null,
                      "start": 2187,
                      "end": 2188
                    },
                    "start": 2184,
                    "end": 2188
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 2190,
                    "end": 2197
                  }
                ],
                "start": 2174,
                "end": 2198
              },
              "start": 2165,
              "end": 2198
            },
            "start": 2163,
            "end": 2198
          },
          "start": 2159,
          "end": 2198
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2201,
            "end": 2202
          },
          "typeArguments": null,
          "start": 2201,
          "end": 2202
        },
        "start": 2199,
        "end": 2202
      },
      "body": null,
      "expression": false,
      "start": 2102,
      "end": 2203
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2211,
            "end": 2216
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "inners2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2219,
              "end": 2226
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
                    "start": 2228,
                    "end": 2229
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2230,
                    "end": 2231
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 2232,
                    "end": 2233
                  },
                  {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 2234,
                    "end": 2235
                  },
                  {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 2236,
                    "end": 2237
                  }
                ],
                "start": 2227,
                "end": 2238
              }
            ],
            "optional": false,
            "start": 2219,
            "end": 2239
          },
          "definite": false,
          "start": 2211,
          "end": 2239
        }
      ],
      "declare": false,
      "start": 2205,
      "end": 2240
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotEmpty",
        "optional": false,
        "typeAnnotation": null,
        "start": 2269,
        "end": 2277
      },
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
              "start": 2278,
              "end": 2279
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 2288,
                "end": 2294
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2295,
                    "end": 2301
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 2303,
                    "end": 2306
                  }
                ],
                "start": 2294,
                "end": 2307
              },
              "start": 2288,
              "end": 2307
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2278,
            "end": 2307
          }
        ],
        "start": 2277,
        "end": 2308
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2317,
              "end": 2318
            },
            "typeArguments": null,
            "start": 2317,
            "end": 2318
          },
          "start": 2311,
          "end": 2318
        },
        "extendsType": {
          "type": "TSNeverKeyword",
          "start": 2327,
          "end": 2332
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 2335,
          "end": 2340
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2343,
            "end": 2344
          },
          "typeArguments": null,
          "start": 2343,
          "end": 2344
        },
        "start": 2311,
        "end": 2344
      },
      "declare": false,
      "start": 2264,
      "end": 2345
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 2353,
            "end": 2358
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2368,
                    "end": 2369
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2378,
                      "end": 2384
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2385,
                          "end": 2391
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 2393,
                          "end": 2396
                        }
                      ],
                      "start": 2384,
                      "end": 2397
                    },
                    "start": 2378,
                    "end": 2397
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 2362,
                  "end": 2397
                }
              ],
              "start": 2361,
              "end": 2398
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NotEmpty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2402,
                      "end": 2410
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2411,
                            "end": 2412
                          },
                          "typeArguments": null,
                          "start": 2411,
                          "end": 2412
                        }
                      ],
                      "start": 2410,
                      "end": 2413
                    },
                    "start": 2402,
                    "end": 2413
                  },
                  "start": 2400,
                  "end": 2413
                },
                "start": 2399,
                "end": 2413
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 2418,
              "end": 2419
            },
            "id": null,
            "generator": false,
            "start": 2361,
            "end": 2419
          },
          "definite": false,
          "start": 2353,
          "end": 2419
        }
      ],
      "declare": false,
      "start": 2347,
      "end": 2420
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 2428,
            "end": 2429
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 2432,
              "end": 2437
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2440,
                      "end": 2443
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 2445,
                      "end": 2447
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2440,
                    "end": 2447
                  }
                ],
                "start": 2438,
                "end": 2449
              }
            ],
            "optional": false,
            "start": 2432,
            "end": 2450
          },
          "definite": false,
          "start": 2428,
          "end": 2450
        }
      ],
      "declare": false,
      "start": 2422,
      "end": 2451
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotEmptyMapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 2483,
        "end": 2497
      },
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
              "start": 2498,
              "end": 2499
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 2508,
                "end": 2514
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2515,
                    "end": 2521
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 2523,
                    "end": 2526
                  }
                ],
                "start": 2514,
                "end": 2527
              },
              "start": 2508,
              "end": 2527
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2498,
            "end": 2527
          }
        ],
        "start": 2497,
        "end": 2528
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2537,
              "end": 2538
            },
            "typeArguments": null,
            "start": 2537,
            "end": 2538
          },
          "start": 2531,
          "end": 2538
        },
        "extendsType": {
          "type": "TSNeverKeyword",
          "start": 2547,
          "end": 2552
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 2555,
          "end": 2560
        },
        "falseType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 2566,
            "end": 2567
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2577,
                "end": 2578
              },
              "typeArguments": null,
              "start": 2577,
              "end": 2578
            },
            "start": 2571,
            "end": 2578
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2581,
                "end": 2582
              },
              "typeArguments": null,
              "start": 2581,
              "end": 2582
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2583,
                "end": 2584
              },
              "typeArguments": null,
              "start": 2583,
              "end": 2584
            },
            "start": 2581,
            "end": 2585
          },
          "optional": false,
          "readonly": null,
          "start": 2563,
          "end": 2587
        },
        "start": 2531,
        "end": 2587
      },
      "declare": false,
      "start": 2478,
      "end": 2588
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "thingMapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 2596,
            "end": 2607
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2617,
                    "end": 2618
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2627,
                      "end": 2633
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2634,
                          "end": 2640
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 2642,
                          "end": 2645
                        }
                      ],
                      "start": 2633,
                      "end": 2646
                    },
                    "start": 2627,
                    "end": 2646
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": true,
                  "start": 2611,
                  "end": 2646
                }
              ],
              "start": 2610,
              "end": 2647
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NotEmptyMapped",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2651,
                      "end": 2665
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2666,
                            "end": 2667
                          },
                          "typeArguments": null,
                          "start": 2666,
                          "end": 2667
                        }
                      ],
                      "start": 2665,
                      "end": 2668
                    },
                    "start": 2651,
                    "end": 2668
                  },
                  "start": 2649,
                  "end": 2668
                },
                "start": 2648,
                "end": 2668
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 2673,
              "end": 2674
            },
            "id": null,
            "generator": false,
            "start": 2610,
            "end": 2674
          },
          "definite": false,
          "start": 2596,
          "end": 2674
        }
      ],
      "declare": false,
      "start": 2590,
      "end": 2675
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tMapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 2683,
            "end": 2690
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "thingMapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 2693,
              "end": 2704
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2707,
                      "end": 2710
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 2712,
                      "end": 2714
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2707,
                    "end": 2714
                  }
                ],
                "start": 2705,
                "end": 2716
              }
            ],
            "optional": false,
            "start": 2693,
            "end": 2717
          },
          "definite": false,
          "start": 2683,
          "end": 2717
        }
      ],
      "declare": false,
      "start": 2677,
      "end": 2718
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "factory_55033_minimal",
        "optional": false,
        "typeAnnotation": null,
        "start": 2813,
        "end": 2834
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
              "start": 2841,
              "end": 2842
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 2860,
                  "end": 2867
                },
                "start": 2860,
                "end": 2869
              },
              "start": 2851,
              "end": 2869
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 2835,
            "end": 2869
          }
        ],
        "start": 2834,
        "end": 2870
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2879,
                    "end": 2883
                  },
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
                        "start": 2885,
                        "end": 2886
                      },
                      "typeArguments": null,
                      "start": 2885,
                      "end": 2886
                    },
                    "start": 2883,
                    "end": 2886
                  },
                  "value": null,
                  "start": 2876,
                  "end": 2886
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2891,
                  "end": 2895
                },
                "start": 2888,
                "end": 2895
              },
              "start": 2875,
              "end": 2895
            },
            "start": 2873,
            "end": 2895
          },
          "start": 2871,
          "end": 2895
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 2910,
                "end": 2912
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2916,
                  "end": 2917
                },
                "typeArguments": null,
                "start": 2916,
                "end": 2917
              },
              "start": 2910,
              "end": 2917
            },
            "start": 2903,
            "end": 2917
          }
        ],
        "start": 2897,
        "end": 2919
      },
      "expression": false,
      "start": 2804,
      "end": 2919
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test_55033_minimal",
            "optional": false,
            "typeAnnotation": null,
            "start": 2927,
            "end": 2945
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "factory_55033_minimal",
              "optional": false,
              "typeAnnotation": null,
              "start": 2948,
              "end": 2969
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2974,
                        "end": 2980
                      },
                      "start": 2972,
                      "end": 2980
                    },
                    "start": 2971,
                    "end": 2980
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2985,
                  "end": 2987
                },
                "id": null,
                "generator": false,
                "start": 2970,
                "end": 2987
              }
            ],
            "optional": false,
            "start": 2948,
            "end": 2988
          },
          "definite": false,
          "start": 2927,
          "end": 2988
        }
      ],
      "declare": false,
      "start": 2921,
      "end": 2988
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "factory_55033",
        "optional": false,
        "typeAnnotation": null,
        "start": 2999,
        "end": 3012
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
              "start": 3019,
              "end": 3020
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 3038,
                  "end": 3045
                },
                "start": 3038,
                "end": 3047
              },
              "start": 3029,
              "end": 3047
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 3013,
            "end": 3047
          }
        ],
        "start": 3012,
        "end": 3048
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3057,
                    "end": 3061
                  },
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
                        "start": 3063,
                        "end": 3064
                      },
                      "typeArguments": null,
                      "start": 3063,
                      "end": 3064
                    },
                    "start": 3061,
                    "end": 3064
                  },
                  "value": null,
                  "start": 3054,
                  "end": 3064
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3069,
                  "end": 3073
                },
                "start": 3066,
                "end": 3073
              },
              "start": 3053,
              "end": 3073
            },
            "start": 3051,
            "end": 3073
          },
          "start": 3049,
          "end": 3073
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 3097,
                "end": 3101
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
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3108,
                      "end": 3109
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3118,
                        "end": 3119
                      },
                      "typeArguments": null,
                      "start": 3118,
                      "end": 3119
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": true,
                    "start": 3102,
                    "end": 3119
                  }
                ],
                "start": 3101,
                "end": 3120
              },
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3124,
                    "end": 3128
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3130,
                        "end": 3131
                      },
                      "typeArguments": null,
                      "start": 3130,
                      "end": 3131
                    },
                    "start": 3128,
                    "end": 3131
                  },
                  "value": null,
                  "start": 3121,
                  "end": 3131
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3134,
                    "end": 3135
                  },
                  "typeArguments": null,
                  "start": 3134,
                  "end": 3135
                },
                "start": 3132,
                "end": 3135
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 3153,
                        "end": 3155
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3159,
                          "end": 3160
                        },
                        "typeArguments": null,
                        "start": 3159,
                        "end": 3160
                      },
                      "start": 3153,
                      "end": 3160
                    },
                    "start": 3146,
                    "end": 3161
                  }
                ],
                "start": 3136,
                "end": 3167
              },
              "expression": false,
              "start": 3088,
              "end": 3167
            },
            "start": 3081,
            "end": 3168
          }
        ],
        "start": 3075,
        "end": 3170
      },
      "expression": false,
      "start": 2990,
      "end": 3170
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1_55033",
            "optional": false,
            "typeAnnotation": null,
            "start": 3178,
            "end": 3186
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "factory_55033",
                "optional": false,
                "typeAnnotation": null,
                "start": 3189,
                "end": 3202
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "test",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3209,
                                "end": 3213
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3215,
                                  "end": 3221
                                },
                                "start": 3213,
                                "end": 3221
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3209,
                              "end": 3221
                            }
                          ],
                          "start": 3207,
                          "end": 3223
                        },
                        "start": 3205,
                        "end": 3223
                      },
                      "start": 3204,
                      "end": 3223
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3228,
                          "end": 3234
                        },
                        "start": 3226,
                        "end": 3234
                      },
                      "start": 3225,
                      "end": 3234
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 3239,
                    "end": 3241
                  },
                  "id": null,
                  "generator": false,
                  "start": 3203,
                  "end": 3241
                }
              ],
              "optional": false,
              "start": 3189,
              "end": 3242
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3250,
                      "end": 3254
                    },
                    "value": {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 3256,
                      "end": 3259
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3250,
                    "end": 3259
                  }
                ],
                "start": 3248,
                "end": 3261
              },
              {
                "type": "Literal",
                "value": "some string",
                "raw": "\"some string\"",
                "start": 3267,
                "end": 3280
              }
            ],
            "optional": false,
            "start": 3189,
            "end": 3282
          },
          "definite": false,
          "start": 3178,
          "end": 3282
        }
      ],
      "declare": false,
      "start": 3172,
      "end": 3283
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2_55033",
            "optional": false,
            "typeAnnotation": null,
            "start": 3291,
            "end": 3299
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "factory_55033",
                "optional": false,
                "typeAnnotation": null,
                "start": 3302,
                "end": 3315
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "test",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3322,
                                "end": 3326
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3328,
                                  "end": 3334
                                },
                                "start": 3326,
                                "end": 3334
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3322,
                              "end": 3334
                            }
                          ],
                          "start": 3320,
                          "end": 3336
                        },
                        "start": 3318,
                        "end": 3336
                      },
                      "start": 3317,
                      "end": 3336
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3341,
                          "end": 3347
                        },
                        "start": 3339,
                        "end": 3347
                      },
                      "start": 3338,
                      "end": 3347
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 3352,
                    "end": 3354
                  },
                  "id": null,
                  "generator": false,
                  "start": 3316,
                  "end": 3354
                }
              ],
              "optional": false,
              "start": 3302,
              "end": 3355
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3363,
                        "end": 3367
                      },
                      "value": {
                        "type": "Literal",
                        "value": 123,
                        "raw": "123",
                        "start": 3369,
                        "end": 3372
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3363,
                      "end": 3372
                    }
                  ],
                  "start": 3361,
                  "end": 3374
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3378,
                    "end": 3383
                  },
                  "typeArguments": null,
                  "start": 3378,
                  "end": 3383
                },
                "start": 3361,
                "end": 3383
              },
              {
                "type": "Literal",
                "value": "some string",
                "raw": "\"some string\"",
                "start": 3389,
                "end": 3402
              }
            ],
            "optional": false,
            "start": 3302,
            "end": 3404
          },
          "definite": false,
          "start": 3291,
          "end": 3404
        }
      ],
      "declare": false,
      "start": 3285,
      "end": 3405
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "factory_55033_2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3454,
        "end": 3469
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
              "start": 3476,
              "end": 3477
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 3486,
                "end": 3493
              },
              "start": 3486,
              "end": 3495
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 3470,
            "end": 3495
          }
        ],
        "start": 3469,
        "end": 3496
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3505,
                    "end": 3509
                  },
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
                        "start": 3511,
                        "end": 3512
                      },
                      "typeArguments": null,
                      "start": 3511,
                      "end": 3512
                    },
                    "start": 3509,
                    "end": 3512
                  },
                  "value": null,
                  "start": 3502,
                  "end": 3512
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3517,
                  "end": 3521
                },
                "start": 3514,
                "end": 3521
              },
              "start": 3501,
              "end": 3521
            },
            "start": 3499,
            "end": 3521
          },
          "start": 3497,
          "end": 3521
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 3545,
                "end": 3549
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
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3556,
                      "end": 3557
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3566,
                        "end": 3567
                      },
                      "typeArguments": null,
                      "start": 3566,
                      "end": 3567
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": true,
                    "start": 3550,
                    "end": 3567
                  }
                ],
                "start": 3549,
                "end": 3568
              },
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3572,
                    "end": 3576
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3578,
                        "end": 3579
                      },
                      "typeArguments": null,
                      "start": 3578,
                      "end": 3579
                    },
                    "start": 3576,
                    "end": 3579
                  },
                  "value": null,
                  "start": 3569,
                  "end": 3579
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3582,
                    "end": 3583
                  },
                  "typeArguments": null,
                  "start": 3582,
                  "end": 3583
                },
                "start": 3580,
                "end": 3583
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 3601,
                        "end": 3603
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3607,
                          "end": 3608
                        },
                        "typeArguments": null,
                        "start": 3607,
                        "end": 3608
                      },
                      "start": 3601,
                      "end": 3608
                    },
                    "start": 3594,
                    "end": 3609
                  }
                ],
                "start": 3584,
                "end": 3615
              },
              "expression": false,
              "start": 3536,
              "end": 3615
            },
            "start": 3529,
            "end": 3616
          }
        ],
        "start": 3523,
        "end": 3618
      },
      "expression": false,
      "start": 3445,
      "end": 3618
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1_55033_2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3626,
            "end": 3636
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "factory_55033_2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3639,
                "end": 3654
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "test",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3661,
                                "end": 3665
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3667,
                                  "end": 3673
                                },
                                "start": 3665,
                                "end": 3673
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3661,
                              "end": 3673
                            }
                          ],
                          "start": 3659,
                          "end": 3675
                        },
                        "start": 3657,
                        "end": 3675
                      },
                      "start": 3656,
                      "end": 3675
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3680,
                          "end": 3686
                        },
                        "start": 3678,
                        "end": 3686
                      },
                      "start": 3677,
                      "end": 3686
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 3691,
                    "end": 3693
                  },
                  "id": null,
                  "generator": false,
                  "start": 3655,
                  "end": 3693
                }
              ],
              "optional": false,
              "start": 3639,
              "end": 3694
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3702,
                      "end": 3706
                    },
                    "value": {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 3708,
                      "end": 3711
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3702,
                    "end": 3711
                  }
                ],
                "start": 3700,
                "end": 3713
              },
              {
                "type": "Literal",
                "value": "some string",
                "raw": "\"some string\"",
                "start": 3719,
                "end": 3732
              }
            ],
            "optional": false,
            "start": 3639,
            "end": 3734
          },
          "definite": false,
          "start": 3626,
          "end": 3734
        }
      ],
      "declare": false,
      "start": 3620,
      "end": 3735
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2_55033_2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3743,
            "end": 3753
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "factory_55033_2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3756,
                "end": 3771
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "test",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3778,
                                "end": 3782
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3784,
                                  "end": 3790
                                },
                                "start": 3782,
                                "end": 3790
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3778,
                              "end": 3790
                            }
                          ],
                          "start": 3776,
                          "end": 3792
                        },
                        "start": 3774,
                        "end": 3792
                      },
                      "start": 3773,
                      "end": 3792
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3797,
                          "end": 3803
                        },
                        "start": 3795,
                        "end": 3803
                      },
                      "start": 3794,
                      "end": 3803
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 3808,
                    "end": 3810
                  },
                  "id": null,
                  "generator": false,
                  "start": 3772,
                  "end": 3810
                }
              ],
              "optional": false,
              "start": 3756,
              "end": 3811
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3819,
                        "end": 3823
                      },
                      "value": {
                        "type": "Literal",
                        "value": 123,
                        "raw": "123",
                        "start": 3825,
                        "end": 3828
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3819,
                      "end": 3828
                    }
                  ],
                  "start": 3817,
                  "end": 3830
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3834,
                    "end": 3839
                  },
                  "typeArguments": null,
                  "start": 3834,
                  "end": 3839
                },
                "start": 3817,
                "end": 3839
              },
              {
                "type": "Literal",
                "value": "some string",
                "raw": "\"some string\"",
                "start": 3845,
                "end": 3858
              }
            ],
            "optional": false,
            "start": 3756,
            "end": 3860
          },
          "definite": false,
          "start": 3743,
          "end": 3860
        }
      ],
      "declare": false,
      "start": 3737,
      "end": 3861
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 3948,
        "end": 3950
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 3957,
              "end": 3958
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 3967,
                "end": 3970
              },
              "start": 3967,
              "end": 3972
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 3951,
            "end": 3972
          }
        ],
        "start": 3950,
        "end": 3973
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 3977,
            "end": 3981
          },
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
                "start": 3983,
                "end": 3984
              },
              "typeArguments": null,
              "start": 3983,
              "end": 3984
            },
            "start": 3981,
            "end": 3984
          },
          "value": null,
          "start": 3974,
          "end": 3984
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3987,
            "end": 3988
          },
          "typeArguments": null,
          "start": 3987,
          "end": 3988
        },
        "start": 3985,
        "end": 3988
      },
      "body": null,
      "expression": false,
      "start": 3931,
      "end": 3989
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3997,
            "end": 3998
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 4001,
              "end": 4003
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 4004,
                "end": 4007
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 4009,
                "end": 4014
              }
            ],
            "optional": false,
            "start": 4001,
            "end": 4015
          },
          "definite": false,
          "start": 3997,
          "end": 4015
        }
      ],
      "declare": false,
      "start": 3991,
      "end": 4016
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fa1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4081,
        "end": 4084
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4091,
              "end": 4092
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 4101,
                "end": 4108
              },
              "start": 4101,
              "end": 4110
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 4085,
            "end": 4110
          }
        ],
        "start": 4084,
        "end": 4111
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                "start": 4118,
                "end": 4119
              },
              "typeArguments": null,
              "start": 4118,
              "end": 4119
            },
            "start": 4116,
            "end": 4119
          },
          "start": 4112,
          "end": 4119
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4122,
            "end": 4123
          },
          "typeArguments": null,
          "start": 4122,
          "end": 4123
        },
        "start": 4120,
        "end": 4123
      },
      "body": null,
      "expression": false,
      "start": 4064,
      "end": 4124
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fa2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4142,
        "end": 4145
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4152,
              "end": 4153
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 4171,
                  "end": 4178
                },
                "start": 4171,
                "end": 4180
              },
              "start": 4162,
              "end": 4180
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 4146,
            "end": 4180
          }
        ],
        "start": 4145,
        "end": 4181
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                "start": 4188,
                "end": 4189
              },
              "typeArguments": null,
              "start": 4188,
              "end": 4189
            },
            "start": 4186,
            "end": 4189
          },
          "start": 4182,
          "end": 4189
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4192,
            "end": 4193
          },
          "typeArguments": null,
          "start": 4192,
          "end": 4193
        },
        "start": 4190,
        "end": 4193
      },
      "body": null,
      "expression": false,
      "start": 4125,
      "end": 4194
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fa1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4196,
          "end": 4199
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 4201,
                "end": 4208
              },
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 4210,
                "end": 4212
              }
            ],
            "start": 4200,
            "end": 4213
          }
        ],
        "optional": false,
        "start": 4196,
        "end": 4214
      },
      "directive": null,
      "start": 4196,
      "end": 4215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fa2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4216,
          "end": 4219
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 4221,
                "end": 4228
              },
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 4230,
                "end": 4232
              }
            ],
            "start": 4220,
            "end": 4233
          }
        ],
        "optional": false,
        "start": 4216,
        "end": 4234
      },
      "directive": null,
      "start": 4216,
      "end": 4235
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fb1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4254,
        "end": 4257
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4264,
              "end": 4265
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 4274,
                "end": 4281
              },
              "start": 4274,
              "end": 4283
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 4258,
            "end": 4283
          }
        ],
        "start": 4257,
        "end": 4284
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 4288,
            "end": 4292
          },
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
                "start": 4294,
                "end": 4295
              },
              "typeArguments": null,
              "start": 4294,
              "end": 4295
            },
            "start": 4292,
            "end": 4295
          },
          "value": null,
          "start": 4285,
          "end": 4295
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4298,
            "end": 4299
          },
          "typeArguments": null,
          "start": 4298,
          "end": 4299
        },
        "start": 4296,
        "end": 4299
      },
      "body": null,
      "expression": false,
      "start": 4237,
      "end": 4300
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fb2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4318,
        "end": 4321
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4328,
              "end": 4329
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 4347,
                  "end": 4354
                },
                "start": 4347,
                "end": 4356
              },
              "start": 4338,
              "end": 4356
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 4322,
            "end": 4356
          }
        ],
        "start": 4321,
        "end": 4357
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 4361,
            "end": 4365
          },
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
                "start": 4367,
                "end": 4368
              },
              "typeArguments": null,
              "start": 4367,
              "end": 4368
            },
            "start": 4365,
            "end": 4368
          },
          "value": null,
          "start": 4358,
          "end": 4368
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4371,
            "end": 4372
          },
          "typeArguments": null,
          "start": 4371,
          "end": 4372
        },
        "start": 4369,
        "end": 4372
      },
      "body": null,
      "expression": false,
      "start": 4301,
      "end": 4373
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fb1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4375,
          "end": 4378
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 4379,
            "end": 4386
          },
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 4388,
            "end": 4390
          }
        ],
        "optional": false,
        "start": 4375,
        "end": 4391
      },
      "directive": null,
      "start": 4375,
      "end": 4392
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fb2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4393,
          "end": 4396
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 4397,
            "end": 4404
          },
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 4406,
            "end": 4408
          }
        ],
        "optional": false,
        "start": 4393,
        "end": 4409
      },
      "directive": null,
      "start": 4393,
      "end": 4410
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fc1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4429,
        "end": 4432
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4439,
              "end": 4440
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 4449,
                "end": 4456
              },
              "start": 4449,
              "end": 4458
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 4433,
            "end": 4458
          }
        ],
        "start": 4432,
        "end": 4459
      },
      "params": [
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4467,
                    "end": 4471
                  },
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
                        "start": 4473,
                        "end": 4474
                      },
                      "typeArguments": null,
                      "start": 4473,
                      "end": 4474
                    },
                    "start": 4471,
                    "end": 4474
                  },
                  "value": null,
                  "start": 4464,
                  "end": 4474
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4479,
                  "end": 4483
                },
                "start": 4476,
                "end": 4483
              },
              "start": 4463,
              "end": 4483
            },
            "start": 4461,
            "end": 4483
          },
          "start": 4460,
          "end": 4483
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 4488,
            "end": 4492
          },
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
                "start": 4494,
                "end": 4495
              },
              "typeArguments": null,
              "start": 4494,
              "end": 4495
            },
            "start": 4492,
            "end": 4495
          },
          "value": null,
          "start": 4485,
          "end": 4495
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4498,
            "end": 4499
          },
          "typeArguments": null,
          "start": 4498,
          "end": 4499
        },
        "start": 4496,
        "end": 4499
      },
      "body": null,
      "expression": false,
      "start": 4412,
      "end": 4500
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fc2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4518,
        "end": 4521
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4528,
              "end": 4529
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 4547,
                  "end": 4554
                },
                "start": 4547,
                "end": 4556
              },
              "start": 4538,
              "end": 4556
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 4522,
            "end": 4556
          }
        ],
        "start": 4521,
        "end": 4557
      },
      "params": [
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4565,
                    "end": 4569
                  },
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
                        "start": 4571,
                        "end": 4572
                      },
                      "typeArguments": null,
                      "start": 4571,
                      "end": 4572
                    },
                    "start": 4569,
                    "end": 4572
                  },
                  "value": null,
                  "start": 4562,
                  "end": 4572
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4577,
                  "end": 4581
                },
                "start": 4574,
                "end": 4581
              },
              "start": 4561,
              "end": 4581
            },
            "start": 4559,
            "end": 4581
          },
          "start": 4558,
          "end": 4581
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 4586,
            "end": 4590
          },
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
                "start": 4592,
                "end": 4593
              },
              "typeArguments": null,
              "start": 4592,
              "end": 4593
            },
            "start": 4590,
            "end": 4593
          },
          "value": null,
          "start": 4583,
          "end": 4593
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4596,
            "end": 4597
          },
          "typeArguments": null,
          "start": 4596,
          "end": 4597
        },
        "start": 4594,
        "end": 4597
      },
      "body": null,
      "expression": false,
      "start": 4501,
      "end": 4598
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fc1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4600,
          "end": 4603
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 4608,
                    "end": 4614
                  },
                  "start": 4606,
                  "end": 4614
                },
                "start": 4605,
                "end": 4614
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 4619,
                    "end": 4625
                  },
                  "start": 4617,
                  "end": 4625
                },
                "start": 4616,
                "end": 4625
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 4630,
              "end": 4632
            },
            "id": null,
            "generator": false,
            "start": 4604,
            "end": 4632
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 4634,
            "end": 4641
          },
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 4643,
            "end": 4645
          }
        ],
        "optional": false,
        "start": 4600,
        "end": 4646
      },
      "directive": null,
      "start": 4600,
      "end": 4647
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fc2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4648,
          "end": 4651
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 4656,
                    "end": 4662
                  },
                  "start": 4654,
                  "end": 4662
                },
                "start": 4653,
                "end": 4662
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 4667,
                    "end": 4673
                  },
                  "start": 4665,
                  "end": 4673
                },
                "start": 4664,
                "end": 4673
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 4678,
              "end": 4680
            },
            "id": null,
            "generator": false,
            "start": 4652,
            "end": 4680
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 4682,
            "end": 4689
          },
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 4691,
            "end": 4693
          }
        ],
        "optional": false,
        "start": 4648,
        "end": 4694
      },
      "directive": null,
      "start": 4648,
      "end": 4695
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fd1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4714,
        "end": 4717
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4724,
              "end": 4725
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 4734,
                    "end": 4740
                  },
                  "start": 4734,
                  "end": 4742
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 4745,
                    "end": 4751
                  },
                  "start": 4745,
                  "end": 4753
                }
              ],
              "start": 4734,
              "end": 4753
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 4718,
            "end": 4753
          }
        ],
        "start": 4717,
        "end": 4754
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                "start": 4761,
                "end": 4762
              },
              "typeArguments": null,
              "start": 4761,
              "end": 4762
            },
            "start": 4759,
            "end": 4762
          },
          "start": 4755,
          "end": 4762
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4765,
            "end": 4766
          },
          "typeArguments": null,
          "start": 4765,
          "end": 4766
        },
        "start": 4763,
        "end": 4766
      },
      "body": null,
      "expression": false,
      "start": 4697,
      "end": 4767
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fd2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4785,
        "end": 4788
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4795,
              "end": 4796
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 4805,
                    "end": 4811
                  },
                  "start": 4805,
                  "end": 4813
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 4825,
                      "end": 4831
                    },
                    "start": 4825,
                    "end": 4833
                  },
                  "start": 4816,
                  "end": 4833
                }
              ],
              "start": 4805,
              "end": 4833
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 4789,
            "end": 4833
          }
        ],
        "start": 4788,
        "end": 4834
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                "start": 4841,
                "end": 4842
              },
              "typeArguments": null,
              "start": 4841,
              "end": 4842
            },
            "start": 4839,
            "end": 4842
          },
          "start": 4835,
          "end": 4842
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4845,
            "end": 4846
          },
          "typeArguments": null,
          "start": 4845,
          "end": 4846
        },
        "start": 4843,
        "end": 4846
      },
      "body": null,
      "expression": false,
      "start": 4768,
      "end": 4847
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fd3",
        "optional": false,
        "typeAnnotation": null,
        "start": 4865,
        "end": 4868
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 4875,
              "end": 4876
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 4894,
                      "end": 4900
                    },
                    "start": 4894,
                    "end": 4902
                  },
                  "start": 4885,
                  "end": 4902
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 4914,
                      "end": 4920
                    },
                    "start": 4914,
                    "end": 4922
                  },
                  "start": 4905,
                  "end": 4922
                }
              ],
              "start": 4885,
              "end": 4922
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 4869,
            "end": 4922
          }
        ],
        "start": 4868,
        "end": 4923
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                "start": 4930,
                "end": 4931
              },
              "typeArguments": null,
              "start": 4930,
              "end": 4931
            },
            "start": 4928,
            "end": 4931
          },
          "start": 4924,
          "end": 4931
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4934,
            "end": 4935
          },
          "typeArguments": null,
          "start": 4934,
          "end": 4935
        },
        "start": 4932,
        "end": 4935
      },
      "body": null,
      "expression": false,
      "start": 4848,
      "end": 4936
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fd1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4938,
          "end": 4941
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 4943,
                "end": 4950
              },
              {
                "type": "Literal",
                "value": "world",
                "raw": "\"world\"",
                "start": 4952,
                "end": 4959
              }
            ],
            "start": 4942,
            "end": 4960
          }
        ],
        "optional": false,
        "start": 4938,
        "end": 4961
      },
      "directive": null,
      "start": 4938,
      "end": 4962
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fd1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4963,
          "end": 4966
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
                "start": 4968,
                "end": 4969
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 4971,
                "end": 4972
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 4974,
                "end": 4975
              }
            ],
            "start": 4967,
            "end": 4976
          }
        ],
        "optional": false,
        "start": 4963,
        "end": 4977
      },
      "directive": null,
      "start": 4963,
      "end": 4978
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fd2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4979,
          "end": 4982
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 4984,
                "end": 4991
              },
              {
                "type": "Literal",
                "value": "world",
                "raw": "\"world\"",
                "start": 4993,
                "end": 5000
              }
            ],
            "start": 4983,
            "end": 5001
          }
        ],
        "optional": false,
        "start": 4979,
        "end": 5002
      },
      "directive": null,
      "start": 4979,
      "end": 5003
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fd2",
          "optional": false,
          "typeAnnotation": null,
          "start": 5004,
          "end": 5007
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
                "start": 5009,
                "end": 5010
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 5012,
                "end": 5013
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 5015,
                "end": 5016
              }
            ],
            "start": 5008,
            "end": 5017
          }
        ],
        "optional": false,
        "start": 5004,
        "end": 5018
      },
      "directive": null,
      "start": 5004,
      "end": 5019
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fd3",
          "optional": false,
          "typeAnnotation": null,
          "start": 5020,
          "end": 5023
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 5025,
                "end": 5032
              },
              {
                "type": "Literal",
                "value": "world",
                "raw": "\"world\"",
                "start": 5034,
                "end": 5041
              }
            ],
            "start": 5024,
            "end": 5042
          }
        ],
        "optional": false,
        "start": 5020,
        "end": 5043
      },
      "directive": null,
      "start": 5020,
      "end": 5044
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fd3",
          "optional": false,
          "typeAnnotation": null,
          "start": 5045,
          "end": 5048
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
                "start": 5050,
                "end": 5051
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 5053,
                "end": 5054
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 5056,
                "end": 5057
              }
            ],
            "start": 5049,
            "end": 5058
          }
        ],
        "optional": false,
        "start": 5045,
        "end": 5059
      },
      "directive": null,
      "start": 5045,
      "end": 5060
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5079,
        "end": 5082
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 5089,
              "end": 5090
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5101,
                      "end": 5104
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSUnknownKeyword",
                          "start": 5106,
                          "end": 5113
                        },
                        "start": 5106,
                        "end": 5115
                      },
                      "start": 5104,
                      "end": 5115
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 5101,
                    "end": 5115
                  }
                ],
                "start": 5099,
                "end": 5117
              },
              "start": 5099,
              "end": 5119
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 5083,
            "end": 5119
          }
        ],
        "start": 5082,
        "end": 5120
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 5124,
            "end": 5128
          },
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
                "start": 5130,
                "end": 5131
              },
              "typeArguments": null,
              "start": 5130,
              "end": 5131
            },
            "start": 5128,
            "end": 5131
          },
          "value": null,
          "start": 5121,
          "end": 5131
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 5134,
            "end": 5135
          },
          "typeArguments": null,
          "start": 5134,
          "end": 5135
        },
        "start": 5132,
        "end": 5135
      },
      "body": null,
      "expression": false,
      "start": 5062,
      "end": 5136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 5138,
          "end": 5141
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5144,
                  "end": 5147
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 5150,
                      "end": 5157
                    },
                    {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 5159,
                      "end": 5162
                    }
                  ],
                  "start": 5149,
                  "end": 5163
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5144,
                "end": 5163
              }
            ],
            "start": 5142,
            "end": 5165
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5169,
                  "end": 5172
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 5175,
                      "end": 5179
                    }
                  ],
                  "start": 5174,
                  "end": 5180
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5169,
                "end": 5180
              }
            ],
            "start": 5167,
            "end": 5181
          }
        ],
        "optional": false,
        "start": 5138,
        "end": 5182
      },
      "directive": null,
      "start": 5138,
      "end": 5183
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 5183
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16,
    "range": [
      8,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 17,
    "end": 19,
    "range": [
      17,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 20,
    "end": 25,
    "range": [
      20,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 40,
    "end": 45,
    "range": [
      40,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "x11",
    "start": 46,
    "end": 49,
    "range": [
      46,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 52,
    "end": 54,
    "range": [
      52,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 55,
    "end": 58,
    "range": [
      55,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 61,
    "end": 66,
    "range": [
      61,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "x12",
    "start": 67,
    "end": 70,
    "range": [
      67,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 73,
    "end": 75,
    "range": [
      73,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 77,
    "end": 80,
    "range": [
      77,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 83,
    "end": 86,
    "range": [
      83,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 88,
    "end": 91,
    "range": [
      88,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 96,
    "end": 101,
    "range": [
      96,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "x13",
    "start": 102,
    "end": 105,
    "range": [
      102,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 108,
    "end": 110,
    "range": [
      108,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 122,
    "end": 125,
    "range": [
      122,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "String",
    "value": "\"e\"",
    "start": 131,
    "end": 134,
    "range": [
      131,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 139,
    "end": 143,
    "range": [
      139,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "String",
    "value": "\"g\"",
    "start": 150,
    "end": 153,
    "range": [
      150,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 162,
    "end": 169,
    "range": [
      162,
      169
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 170,
    "end": 178,
    "range": [
      170,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 179,
    "end": 181,
    "range": [
      179,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 182,
    "end": 187,
    "range": [
      182,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 201,
    "end": 210,
    "range": [
      201,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 217,
    "end": 222,
    "range": [
      217,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "x21",
    "start": 223,
    "end": 226,
    "range": [
      223,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 229,
    "end": 231,
    "range": [
      229,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 232,
    "end": 235,
    "range": [
      232,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 238,
    "end": 243,
    "range": [
      238,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "x22",
    "start": 244,
    "end": 247,
    "range": [
      244,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 250,
    "end": 252,
    "range": [
      250,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 254,
    "end": 257,
    "range": [
      254,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 260,
    "end": 263,
    "range": [
      260,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 265,
    "end": 268,
    "range": [
      265,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 273,
    "end": 278,
    "range": [
      273,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "x23",
    "start": 279,
    "end": 282,
    "range": [
      279,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 285,
    "end": 287,
    "range": [
      285,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 299,
    "end": 302,
    "range": [
      299,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "String",
    "value": "\"e\"",
    "start": 308,
    "end": 311,
    "range": [
      308,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 316,
    "end": 320,
    "range": [
      316,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "String",
    "value": "\"g\"",
    "start": 327,
    "end": 330,
    "range": [
      327,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 339,
    "end": 346,
    "range": [
      339,
      346
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 347,
    "end": 355,
    "range": [
      347,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 356,
    "end": 358,
    "range": [
      356,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 359,
    "end": 364,
    "range": [
      359,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 381,
    "end": 386,
    "range": [
      381,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "x31",
    "start": 387,
    "end": 390,
    "range": [
      387,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 393,
    "end": 395,
    "range": [
      393,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 396,
    "end": 403,
    "range": [
      396,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 406,
    "end": 411,
    "range": [
      406,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "x32",
    "start": 412,
    "end": 415,
    "range": [
      412,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 418,
    "end": 420,
    "range": [
      418,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 421,
    "end": 428,
    "range": [
      421,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 432,
    "end": 439,
    "range": [
      432,
      439
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 440,
    "end": 448,
    "range": [
      440,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 449,
    "end": 451,
    "range": [
      449,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 452,
    "end": 457,
    "range": [
      452,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 461,
    "end": 464,
    "range": [
      461,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 479,
    "end": 484,
    "range": [
      479,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "x41",
    "start": 485,
    "end": 488,
    "range": [
      485,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 491,
    "end": 493,
    "range": [
      491,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 499,
    "end": 502,
    "range": [
      499,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 509,
    "end": 512,
    "range": [
      509,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 517,
    "end": 522,
    "range": [
      517,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "x42",
    "start": 523,
    "end": 526,
    "range": [
      523,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 529,
    "end": 531,
    "range": [
      529,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 544,
    "end": 547,
    "range": [
      544,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 562,
    "end": 565,
    "range": [
      562,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 572,
    "end": 579,
    "range": [
      572,
      579
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 580,
    "end": 588,
    "range": [
      580,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 589,
    "end": 591,
    "range": [
      589,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 592,
    "end": 597,
    "range": [
      592,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 601,
    "end": 604,
    "range": [
      601,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 627,
    "end": 632,
    "range": [
      627,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "x51",
    "start": 633,
    "end": 636,
    "range": [
      633,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 639,
    "end": 641,
    "range": [
      639,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 651,
    "end": 654,
    "range": [
      651,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 664,
    "end": 667,
    "range": [
      664,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 673,
    "end": 678,
    "range": [
      673,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "x52",
    "start": 679,
    "end": 682,
    "range": [
      679,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 685,
    "end": 687,
    "range": [
      685,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 704,
    "end": 707,
    "range": [
      704,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 725,
    "end": 728,
    "range": [
      725,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 736,
    "end": 743,
    "range": [
      736,
      743
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 744,
    "end": 752,
    "range": [
      744,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 753,
    "end": 755,
    "range": [
      753,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 756,
    "end": 761,
    "range": [
      756,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 764,
    "end": 771,
    "range": [
      764,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 772,
    "end": 780,
    "range": [
      772,
      780
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 781,
    "end": 788,
    "range": [
      781,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 792,
    "end": 795,
    "range": [
      792,
      795
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 795,
    "end": 799,
    "range": [
      795,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 809,
    "end": 814,
    "range": [
      809,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "x61",
    "start": 815,
    "end": 818,
    "range": [
      815,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 821,
    "end": 823,
    "range": [
      821,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 827,
    "end": 830,
    "range": [
      827,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 843,
    "end": 846,
    "range": [
      843,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 851,
    "end": 856,
    "range": [
      851,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "x62",
    "start": 857,
    "end": 860,
    "range": [
      857,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 863,
    "end": 865,
    "range": [
      863,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 866,
    "end": 869,
    "range": [
      866,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 873,
    "end": 876,
    "range": [
      873,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 880,
    "end": 885,
    "range": [
      880,
      885
    ]
  },
  {
    "type": "Identifier",
    "value": "x63",
    "start": 886,
    "end": 889,
    "range": [
      886,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 892,
    "end": 894,
    "range": [
      892,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 895,
    "end": 899,
    "range": [
      895,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 901,
    "end": 904,
    "range": [
      901,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 908,
    "end": 911,
    "range": [
      908,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 915,
    "end": 920,
    "range": [
      915,
      920
    ]
  },
  {
    "type": "Identifier",
    "value": "x64",
    "start": 921,
    "end": 924,
    "range": [
      921,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 927,
    "end": 929,
    "range": [
      927,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 930,
    "end": 933,
    "range": [
      930,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 938,
    "end": 941,
    "range": [
      938,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 946,
    "end": 951,
    "range": [
      946,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "x65",
    "start": 952,
    "end": 955,
    "range": [
      952,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 958,
    "end": 960,
    "range": [
      958,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 961,
    "end": 965,
    "range": [
      961,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 967,
    "end": 970,
    "range": [
      967,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 975,
    "end": 978,
    "range": [
      975,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 984,
    "end": 989,
    "range": [
      984,
      989
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 990,
    "end": 992,
    "range": [
      990,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 993,
    "end": 998,
    "range": [
      993,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1008,
    "end": 1019,
    "range": [
      1008,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1033,
    "end": 1036,
    "range": [
      1033,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1037,
    "end": 1042,
    "range": [
      1037,
      1042
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1054,
    "end": 1060,
    "range": [
      1054,
      1060
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1069,
    "end": 1074,
    "range": [
      1069,
      1074
    ]
  },
  {
    "type": "Identifier",
    "value": "c71",
    "start": 1075,
    "end": 1078,
    "range": [
      1075,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1081,
    "end": 1084,
    "range": [
      1081,
      1084
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1085,
    "end": 1087,
    "range": [
      1085,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 1099,
    "end": 1102,
    "range": [
      1099,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "String",
    "value": "\"e\"",
    "start": 1108,
    "end": 1111,
    "range": [
      1108,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1116,
    "end": 1120,
    "range": [
      1116,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "String",
    "value": "\"g\"",
    "start": 1127,
    "end": 1130,
    "range": [
      1127,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1138,
    "end": 1143,
    "range": [
      1138,
      1143
    ]
  },
  {
    "type": "Identifier",
    "value": "c72",
    "start": 1144,
    "end": 1147,
    "range": [
      1144,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Identifier",
    "value": "c71",
    "start": 1150,
    "end": 1153,
    "range": [
      1150,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1154,
    "end": 1157,
    "range": [
      1154,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1159,
    "end": 1162,
    "range": [
      1159,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 1165,
    "end": 1168,
    "range": [
      1165,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 1170,
    "end": 1173,
    "range": [
      1170,
      1173
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1179,
    "end": 1184,
    "range": [
      1179,
      1184
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1185,
    "end": 1187,
    "range": [
      1185,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1190,
    "end": 1195,
    "range": [
      1190,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1197,
    "end": 1202,
    "range": [
      1197,
      1202
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1210,
    "end": 1215,
    "range": [
      1210,
      1215
    ]
  },
  {
    "type": "Identifier",
    "value": "fx1",
    "start": 1216,
    "end": 1219,
    "range": [
      1216,
      1219
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1220,
    "end": 1221,
    "range": [
      1220,
      1221
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1223,
    "end": 1228,
    "range": [
      1223,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1238,
    "end": 1240,
    "range": [
      1238,
      1240
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1244,
    "end": 1249,
    "range": [
      1244,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "fx2",
    "start": 1250,
    "end": 1253,
    "range": [
      1250,
      1253
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1257,
    "end": 1262,
    "range": [
      1257,
      1262
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1267,
    "end": 1268,
    "range": [
      1267,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1270,
    "end": 1271,
    "range": [
      1270,
      1271
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1273,
    "end": 1275,
    "range": [
      1273,
      1275
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1280,
    "end": 1289,
    "range": [
      1280,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 1290,
    "end": 1292,
    "range": [
      1290,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1293,
    "end": 1298,
    "range": [
      1293,
      1298
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1304,
    "end": 1305,
    "range": [
      1304,
      1305
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1322,
    "end": 1331,
    "range": [
      1322,
      1331
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1332,
    "end": 1334,
    "range": [
      1332,
      1334
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1343,
    "end": 1348,
    "range": [
      1343,
      1348
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1357,
    "end": 1358,
    "range": [
      1357,
      1358
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1365,
    "end": 1369,
    "range": [
      1365,
      1369
    ]
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1370,
    "end": 1372,
    "range": [
      1370,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1373,
    "end": 1378,
    "range": [
      1373,
      1378
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1385,
    "end": 1386,
    "range": [
      1385,
      1386
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1398,
    "end": 1402,
    "range": [
      1398,
      1402
    ]
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1403,
    "end": 1405,
    "range": [
      1403,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1409,
    "end": 1414,
    "range": [
      1409,
      1414
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1418,
    "end": 1419,
    "range": [
      1418,
      1419
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1424,
    "end": 1426,
    "range": [
      1424,
      1426
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1430,
    "end": 1434,
    "range": [
      1430,
      1434
    ]
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 1435,
    "end": 1437,
    "range": [
      1435,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1438,
    "end": 1439,
    "range": [
      1438,
      1439
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1440,
    "end": 1441,
    "range": [
      1440,
      1441
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1443,
    "end": 1448,
    "range": [
      1443,
      1448
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1450,
    "end": 1451,
    "range": [
      1450,
      1451
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
      1458
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1464,
    "end": 1468,
    "range": [
      1464,
      1468
    ]
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 1469,
    "end": 1471,
    "range": [
      1469,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1474,
    "end": 1477,
    "range": [
      1474,
      1477
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1479,
    "end": 1484,
    "range": [
      1479,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1485,
    "end": 1486,
    "range": [
      1485,
      1486
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1492,
    "end": 1493,
    "range": [
      1492,
      1493
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1494,
    "end": 1496,
    "range": [
      1494,
      1496
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1500,
    "end": 1504,
    "range": [
      1500,
      1504
    ]
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 1505,
    "end": 1507,
    "range": [
      1505,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1512,
    "end": 1515,
    "range": [
      1512,
      1515
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1517,
    "end": 1522,
    "range": [
      1517,
      1522
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1523,
    "end": 1524,
    "range": [
      1523,
      1524
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1524,
    "end": 1525,
    "range": [
      1524,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1535,
    "end": 1536,
    "range": [
      1535,
      1536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1571,
    "end": 1575,
    "range": [
      1571,
      1575
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1576,
    "end": 1579,
    "range": [
      1576,
      1579
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1580,
    "end": 1581,
    "range": [
      1580,
      1581
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1582,
    "end": 1583,
    "range": [
      1582,
      1583
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "String",
    "value": "\"123\"",
    "start": 1597,
    "end": 1602,
    "range": [
      1597,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1603,
    "end": 1604,
    "range": [
      1603,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1611,
    "end": 1615,
    "range": [
      1611,
      1615
    ]
  },
  {
    "type": "Identifier",
    "value": "GetPath",
    "start": 1616,
    "end": 1623,
    "range": [
      1616,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1630,
    "end": 1631,
    "range": [
      1630,
      1631
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1638,
    "end": 1645,
    "range": [
      1638,
      1645
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1646,
    "end": 1654,
    "range": [
      1646,
      1654
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1655,
    "end": 1656,
    "range": [
      1655,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1656,
    "end": 1657,
    "range": [
      1656,
      1657
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1670,
    "end": 1677,
    "range": [
      1670,
      1677
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1678,
    "end": 1686,
    "range": [
      1678,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1688,
    "end": 1693,
    "range": [
      1688,
      1693
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1696,
    "end": 1703,
    "range": [
      1696,
      1703
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1704,
    "end": 1709,
    "range": [
      1704,
      1709
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1713,
    "end": 1716,
    "range": [
      1713,
      1716
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1716,
    "end": 1721,
    "range": [
      1716,
      1721
    ]
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 1722,
    "end": 1726,
    "range": [
      1722,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1726,
    "end": 1727,
    "range": [
      1726,
      1727
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Identifier",
    "value": "GetPath",
    "start": 1730,
    "end": 1737,
    "range": [
      1730,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1742,
    "end": 1743,
    "range": [
      1742,
      1743
    ]
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 1744,
    "end": 1748,
    "range": [
      1744,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1748,
    "end": 1749,
    "range": [
      1748,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1750,
    "end": 1751,
    "range": [
      1750,
      1751
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1756,
    "end": 1761,
    "range": [
      1756,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1764,
    "end": 1772,
    "range": [
      1764,
      1772
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1773,
    "end": 1776,
    "range": [
      1773,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1780,
    "end": 1785,
    "range": [
      1780,
      1785
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1788,
    "end": 1795,
    "range": [
      1788,
      1795
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1796,
    "end": 1804,
    "range": [
      1796,
      1804
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1805,
    "end": 1811,
    "range": [
      1805,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1815,
    "end": 1818,
    "range": [
      1815,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1820,
    "end": 1821,
    "range": [
      1820,
      1821
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1821,
    "end": 1822,
    "range": [
      1821,
      1822
    ]
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 1823,
    "end": 1827,
    "range": [
      1823,
      1827
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1827,
    "end": 1828,
    "range": [
      1827,
      1828
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1830,
    "end": 1831,
    "range": [
      1830,
      1831
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1832,
    "end": 1837,
    "range": [
      1832,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Identifier",
    "value": "GetPath",
    "start": 1839,
    "end": 1846,
    "range": [
      1839,
      1846
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1846,
    "end": 1847,
    "range": [
      1846,
      1847
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1848,
    "end": 1849,
    "range": [
      1848,
      1849
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1850,
    "end": 1851,
    "range": [
      1850,
      1851
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1858,
    "end": 1865,
    "range": [
      1858,
      1865
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1866,
    "end": 1869,
    "range": [
      1866,
      1869
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1870,
    "end": 1873,
    "range": [
      1870,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1875,
    "end": 1878,
    "range": [
      1875,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1880,
    "end": 1887,
    "range": [
      1880,
      1887
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1888,
    "end": 1891,
    "range": [
      1888,
      1891
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1892,
    "end": 1897,
    "range": [
      1892,
      1897
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1897,
    "end": 1898,
    "range": [
      1897,
      1898
    ]
  },
  {
    "type": "String",
    "value": "\"123\"",
    "start": 1899,
    "end": 1904,
    "range": [
      1899,
      1904
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1907,
    "end": 1910,
    "range": [
      1907,
      1910
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1911,
    "end": 1914,
    "range": [
      1911,
      1914
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1917,
    "end": 1920,
    "range": [
      1917,
      1920
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1920,
    "end": 1921,
    "range": [
      1920,
      1921
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 1922,
    "end": 1925,
    "range": [
      1922,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 1927,
    "end": 1930,
    "range": [
      1927,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1933,
    "end": 1938,
    "range": [
      1933,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1964,
    "end": 1971,
    "range": [
      1964,
      1971
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1972,
    "end": 1980,
    "range": [
      1972,
      1980
    ]
  },
  {
    "type": "Identifier",
    "value": "inners",
    "start": 1981,
    "end": 1987,
    "range": [
      1981,
      1987
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1987,
    "end": 1988,
    "range": [
      1987,
      1988
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1988,
    "end": 1993,
    "range": [
      1988,
      1993
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1994,
    "end": 1995,
    "range": [
      1994,
      1995
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1996,
    "end": 2003,
    "range": [
      1996,
      2003
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2004,
    "end": 2012,
    "range": [
      2004,
      2012
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2013,
    "end": 2016,
    "range": [
      2013,
      2016
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2016,
    "end": 2017,
    "range": [
      2016,
      2017
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2017,
    "end": 2018,
    "range": [
      2017,
      2018
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2018,
    "end": 2019,
    "range": [
      2018,
      2019
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2019,
    "end": 2020,
    "range": [
      2019,
      2020
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2020,
    "end": 2023,
    "range": [
      2020,
      2023
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2023,
    "end": 2027,
    "range": [
      2023,
      2027
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2027,
    "end": 2028,
    "range": [
      2027,
      2028
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2029,
    "end": 2037,
    "range": [
      2029,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2039,
    "end": 2046,
    "range": [
      2039,
      2046
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2048,
    "end": 2051,
    "range": [
      2048,
      2051
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2052,
    "end": 2053,
    "range": [
      2052,
      2053
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2054,
    "end": 2061,
    "range": [
      2054,
      2061
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2061,
    "end": 2062,
    "range": [
      2061,
      2062
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2062,
    "end": 2063,
    "range": [
      2062,
      2063
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2063,
    "end": 2064,
    "range": [
      2063,
      2064
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2065,
    "end": 2066,
    "range": [
      2065,
      2066
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2066,
    "end": 2067,
    "range": [
      2066,
      2067
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2069,
    "end": 2074,
    "range": [
      2069,
      2074
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 2075,
    "end": 2079,
    "range": [
      2075,
      2079
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2080,
    "end": 2081,
    "range": [
      2080,
      2081
    ]
  },
  {
    "type": "Identifier",
    "value": "inners",
    "start": 2082,
    "end": 2088,
    "range": [
      2082,
      2088
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2089,
    "end": 2090,
    "range": [
      2089,
      2090
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2090,
    "end": 2091,
    "range": [
      2090,
      2091
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2091,
    "end": 2092,
    "range": [
      2091,
      2092
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2092,
    "end": 2093,
    "range": [
      2092,
      2093
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2093,
    "end": 2094,
    "range": [
      2093,
      2094
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2094,
    "end": 2095,
    "range": [
      2094,
      2095
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2095,
    "end": 2096,
    "range": [
      2095,
      2096
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2096,
    "end": 2097,
    "range": [
      2096,
      2097
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 2097,
    "end": 2098,
    "range": [
      2097,
      2098
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2098,
    "end": 2099,
    "range": [
      2098,
      2099
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2102,
    "end": 2109,
    "range": [
      2102,
      2109
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2110,
    "end": 2118,
    "range": [
      2110,
      2118
    ]
  },
  {
    "type": "Identifier",
    "value": "inners2",
    "start": 2119,
    "end": 2126,
    "range": [
      2119,
      2126
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2126,
    "end": 2127,
    "range": [
      2126,
      2127
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2127,
    "end": 2132,
    "range": [
      2127,
      2132
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2135,
    "end": 2142,
    "range": [
      2135,
      2142
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2143,
    "end": 2151,
    "range": [
      2143,
      2151
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2152,
    "end": 2155,
    "range": [
      2152,
      2155
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2155,
    "end": 2156,
    "range": [
      2155,
      2156
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2156,
    "end": 2157,
    "range": [
      2156,
      2157
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2157,
    "end": 2158,
    "range": [
      2157,
      2158
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2159,
    "end": 2163,
    "range": [
      2159,
      2163
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2163,
    "end": 2164,
    "range": [
      2163,
      2164
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2165,
    "end": 2173,
    "range": [
      2165,
      2173
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2174,
    "end": 2175,
    "range": [
      2174,
      2175
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2175,
    "end": 2182,
    "range": [
      2175,
      2182
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2182,
    "end": 2183,
    "range": [
      2182,
      2183
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2184,
    "end": 2187,
    "range": [
      2184,
      2187
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2187,
    "end": 2188,
    "range": [
      2187,
      2188
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2188,
    "end": 2189,
    "range": [
      2188,
      2189
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2190,
    "end": 2197,
    "range": [
      2190,
      2197
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2197,
    "end": 2198,
    "range": [
      2197,
      2198
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2199,
    "end": 2200,
    "range": [
      2199,
      2200
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2201,
    "end": 2202,
    "range": [
      2201,
      2202
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2202,
    "end": 2203,
    "range": [
      2202,
      2203
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2205,
    "end": 2210,
    "range": [
      2205,
      2210
    ]
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 2211,
    "end": 2216,
    "range": [
      2211,
      2216
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Identifier",
    "value": "inners2",
    "start": 2219,
    "end": 2226,
    "range": [
      2219,
      2226
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2226,
    "end": 2227,
    "range": [
      2226,
      2227
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2227,
    "end": 2228,
    "range": [
      2227,
      2228
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2228,
    "end": 2229,
    "range": [
      2228,
      2229
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2229,
    "end": 2230,
    "range": [
      2229,
      2230
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2230,
    "end": 2231,
    "range": [
      2230,
      2231
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2231,
    "end": 2232,
    "range": [
      2231,
      2232
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2232,
    "end": 2233,
    "range": [
      2232,
      2233
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2233,
    "end": 2234,
    "range": [
      2233,
      2234
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2234,
    "end": 2235,
    "range": [
      2234,
      2235
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2235,
    "end": 2236,
    "range": [
      2235,
      2236
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 2236,
    "end": 2237,
    "range": [
      2236,
      2237
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2237,
    "end": 2238,
    "range": [
      2237,
      2238
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2238,
    "end": 2239,
    "range": [
      2238,
      2239
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2239,
    "end": 2240,
    "range": [
      2239,
      2240
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2264,
    "end": 2268,
    "range": [
      2264,
      2268
    ]
  },
  {
    "type": "Identifier",
    "value": "NotEmpty",
    "start": 2269,
    "end": 2277,
    "range": [
      2269,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2277,
    "end": 2278,
    "range": [
      2277,
      2278
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2278,
    "end": 2279,
    "range": [
      2278,
      2279
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2280,
    "end": 2287,
    "range": [
      2280,
      2287
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2288,
    "end": 2294,
    "range": [
      2288,
      2294
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2294,
    "end": 2295,
    "range": [
      2294,
      2295
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2295,
    "end": 2301,
    "range": [
      2295,
      2301
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2301,
    "end": 2302,
    "range": [
      2301,
      2302
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2303,
    "end": 2306,
    "range": [
      2303,
      2306
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2306,
    "end": 2307,
    "range": [
      2306,
      2307
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2307,
    "end": 2308,
    "range": [
      2307,
      2308
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2309,
    "end": 2310,
    "range": [
      2309,
      2310
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2311,
    "end": 2316,
    "range": [
      2311,
      2316
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2317,
    "end": 2318,
    "range": [
      2317,
      2318
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2319,
    "end": 2326,
    "range": [
      2319,
      2326
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2327,
    "end": 2332,
    "range": [
      2327,
      2332
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2333,
    "end": 2334,
    "range": [
      2333,
      2334
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2335,
    "end": 2340,
    "range": [
      2335,
      2340
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2341,
    "end": 2342,
    "range": [
      2341,
      2342
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2343,
    "end": 2344,
    "range": [
      2343,
      2344
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2344,
    "end": 2345,
    "range": [
      2344,
      2345
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2347,
    "end": 2352,
    "range": [
      2347,
      2352
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 2353,
    "end": 2358,
    "range": [
      2353,
      2358
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2359,
    "end": 2360,
    "range": [
      2359,
      2360
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2361,
    "end": 2362,
    "range": [
      2361,
      2362
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2362,
    "end": 2367,
    "range": [
      2362,
      2367
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2368,
    "end": 2369,
    "range": [
      2368,
      2369
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2370,
    "end": 2377,
    "range": [
      2370,
      2377
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2378,
    "end": 2384,
    "range": [
      2378,
      2384
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2384,
    "end": 2385,
    "range": [
      2384,
      2385
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2385,
    "end": 2391,
    "range": [
      2385,
      2391
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2393,
    "end": 2396,
    "range": [
      2393,
      2396
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2396,
    "end": 2397,
    "range": [
      2396,
      2397
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2397,
    "end": 2398,
    "range": [
      2397,
      2398
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2398,
    "end": 2399,
    "range": [
      2398,
      2399
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2399,
    "end": 2400,
    "range": [
      2399,
      2400
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2400,
    "end": 2401,
    "range": [
      2400,
      2401
    ]
  },
  {
    "type": "Identifier",
    "value": "NotEmpty",
    "start": 2402,
    "end": 2410,
    "range": [
      2402,
      2410
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2410,
    "end": 2411,
    "range": [
      2410,
      2411
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2411,
    "end": 2412,
    "range": [
      2411,
      2412
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2412,
    "end": 2413,
    "range": [
      2412,
      2413
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2413,
    "end": 2414,
    "range": [
      2413,
      2414
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2415,
    "end": 2417,
    "range": [
      2415,
      2417
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2418,
    "end": 2419,
    "range": [
      2418,
      2419
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2419,
    "end": 2420,
    "range": [
      2419,
      2420
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2422,
    "end": 2427,
    "range": [
      2422,
      2427
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2428,
    "end": 2429,
    "range": [
      2428,
      2429
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2430,
    "end": 2431,
    "range": [
      2430,
      2431
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 2432,
    "end": 2437,
    "range": [
      2432,
      2437
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2437,
    "end": 2438,
    "range": [
      2437,
      2438
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2438,
    "end": 2439,
    "range": [
      2438,
      2439
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2440,
    "end": 2443,
    "range": [
      2440,
      2443
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2443,
    "end": 2444,
    "range": [
      2443,
      2444
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2445,
    "end": 2447,
    "range": [
      2445,
      2447
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2448,
    "end": 2449,
    "range": [
      2448,
      2449
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2449,
    "end": 2450,
    "range": [
      2449,
      2450
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2450,
    "end": 2451,
    "range": [
      2450,
      2451
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2478,
    "end": 2482,
    "range": [
      2478,
      2482
    ]
  },
  {
    "type": "Identifier",
    "value": "NotEmptyMapped",
    "start": 2483,
    "end": 2497,
    "range": [
      2483,
      2497
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2497,
    "end": 2498,
    "range": [
      2497,
      2498
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2498,
    "end": 2499,
    "range": [
      2498,
      2499
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2500,
    "end": 2507,
    "range": [
      2500,
      2507
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2508,
    "end": 2514,
    "range": [
      2508,
      2514
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2514,
    "end": 2515,
    "range": [
      2514,
      2515
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2515,
    "end": 2521,
    "range": [
      2515,
      2521
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2521,
    "end": 2522,
    "range": [
      2521,
      2522
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2523,
    "end": 2526,
    "range": [
      2523,
      2526
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2526,
    "end": 2527,
    "range": [
      2526,
      2527
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2527,
    "end": 2528,
    "range": [
      2527,
      2528
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2529,
    "end": 2530,
    "range": [
      2529,
      2530
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2531,
    "end": 2536,
    "range": [
      2531,
      2536
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2537,
    "end": 2538,
    "range": [
      2537,
      2538
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2539,
    "end": 2546,
    "range": [
      2539,
      2546
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2547,
    "end": 2552,
    "range": [
      2547,
      2552
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2553,
    "end": 2554,
    "range": [
      2553,
      2554
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2555,
    "end": 2560,
    "range": [
      2555,
      2560
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2561,
    "end": 2562,
    "range": [
      2561,
      2562
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2563,
    "end": 2564,
    "range": [
      2563,
      2564
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2565,
    "end": 2566,
    "range": [
      2565,
      2566
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2566,
    "end": 2567,
    "range": [
      2566,
      2567
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2568,
    "end": 2570,
    "range": [
      2568,
      2570
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2571,
    "end": 2576,
    "range": [
      2571,
      2576
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2577,
    "end": 2578,
    "range": [
      2577,
      2578
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2578,
    "end": 2579,
    "range": [
      2578,
      2579
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2579,
    "end": 2580,
    "range": [
      2579,
      2580
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2581,
    "end": 2582,
    "range": [
      2581,
      2582
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2582,
    "end": 2583,
    "range": [
      2582,
      2583
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2583,
    "end": 2584,
    "range": [
      2583,
      2584
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2584,
    "end": 2585,
    "range": [
      2584,
      2585
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2586,
    "end": 2587,
    "range": [
      2586,
      2587
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2587,
    "end": 2588,
    "range": [
      2587,
      2588
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2590,
    "end": 2595,
    "range": [
      2590,
      2595
    ]
  },
  {
    "type": "Identifier",
    "value": "thingMapped",
    "start": 2596,
    "end": 2607,
    "range": [
      2596,
      2607
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2608,
    "end": 2609,
    "range": [
      2608,
      2609
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2610,
    "end": 2611,
    "range": [
      2610,
      2611
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2611,
    "end": 2616,
    "range": [
      2611,
      2616
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2617,
    "end": 2618,
    "range": [
      2617,
      2618
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2619,
    "end": 2626,
    "range": [
      2619,
      2626
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2627,
    "end": 2633,
    "range": [
      2627,
      2633
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2633,
    "end": 2634,
    "range": [
      2633,
      2634
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2634,
    "end": 2640,
    "range": [
      2634,
      2640
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2640,
    "end": 2641,
    "range": [
      2640,
      2641
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2642,
    "end": 2645,
    "range": [
      2642,
      2645
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2645,
    "end": 2646,
    "range": [
      2645,
      2646
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2646,
    "end": 2647,
    "range": [
      2646,
      2647
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2647,
    "end": 2648,
    "range": [
      2647,
      2648
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2648,
    "end": 2649,
    "range": [
      2648,
      2649
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2649,
    "end": 2650,
    "range": [
      2649,
      2650
    ]
  },
  {
    "type": "Identifier",
    "value": "NotEmptyMapped",
    "start": 2651,
    "end": 2665,
    "range": [
      2651,
      2665
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2665,
    "end": 2666,
    "range": [
      2665,
      2666
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2666,
    "end": 2667,
    "range": [
      2666,
      2667
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2667,
    "end": 2668,
    "range": [
      2667,
      2668
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2668,
    "end": 2669,
    "range": [
      2668,
      2669
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2670,
    "end": 2672,
    "range": [
      2670,
      2672
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2673,
    "end": 2674,
    "range": [
      2673,
      2674
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2674,
    "end": 2675,
    "range": [
      2674,
      2675
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2677,
    "end": 2682,
    "range": [
      2677,
      2682
    ]
  },
  {
    "type": "Identifier",
    "value": "tMapped",
    "start": 2683,
    "end": 2690,
    "range": [
      2683,
      2690
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2691,
    "end": 2692,
    "range": [
      2691,
      2692
    ]
  },
  {
    "type": "Identifier",
    "value": "thingMapped",
    "start": 2693,
    "end": 2704,
    "range": [
      2693,
      2704
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2704,
    "end": 2705,
    "range": [
      2704,
      2705
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2705,
    "end": 2706,
    "range": [
      2705,
      2706
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2707,
    "end": 2710,
    "range": [
      2707,
      2710
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2710,
    "end": 2711,
    "range": [
      2710,
      2711
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2712,
    "end": 2714,
    "range": [
      2712,
      2714
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2715,
    "end": 2716,
    "range": [
      2715,
      2716
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2716,
    "end": 2717,
    "range": [
      2716,
      2717
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2717,
    "end": 2718,
    "range": [
      2717,
      2718
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2804,
    "end": 2812,
    "range": [
      2804,
      2812
    ]
  },
  {
    "type": "Identifier",
    "value": "factory_55033_minimal",
    "start": 2813,
    "end": 2834,
    "range": [
      2813,
      2834
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2834,
    "end": 2835,
    "range": [
      2834,
      2835
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2835,
    "end": 2840,
    "range": [
      2835,
      2840
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2841,
    "end": 2842,
    "range": [
      2841,
      2842
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2843,
    "end": 2850,
    "range": [
      2843,
      2850
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2851,
    "end": 2859,
    "range": [
      2851,
      2859
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2860,
    "end": 2867,
    "range": [
      2860,
      2867
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2867,
    "end": 2868,
    "range": [
      2867,
      2868
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2868,
    "end": 2869,
    "range": [
      2868,
      2869
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2869,
    "end": 2870,
    "range": [
      2869,
      2870
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2870,
    "end": 2871,
    "range": [
      2870,
      2871
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2871,
    "end": 2873,
    "range": [
      2871,
      2873
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2873,
    "end": 2874,
    "range": [
      2873,
      2874
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2875,
    "end": 2876,
    "range": [
      2875,
      2876
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2876,
    "end": 2879,
    "range": [
      2876,
      2879
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2879,
    "end": 2883,
    "range": [
      2879,
      2883
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2883,
    "end": 2884,
    "range": [
      2883,
      2884
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2885,
    "end": 2886,
    "range": [
      2885,
      2886
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2886,
    "end": 2887,
    "range": [
      2886,
      2887
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2888,
    "end": 2890,
    "range": [
      2888,
      2890
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2891,
    "end": 2895,
    "range": [
      2891,
      2895
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2895,
    "end": 2896,
    "range": [
      2895,
      2896
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2897,
    "end": 2898,
    "range": [
      2897,
      2898
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2903,
    "end": 2909,
    "range": [
      2903,
      2909
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2910,
    "end": 2911,
    "range": [
      2910,
      2911
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2911,
    "end": 2912,
    "range": [
      2911,
      2912
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2913,
    "end": 2915,
    "range": [
      2913,
      2915
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2916,
    "end": 2917,
    "range": [
      2916,
      2917
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2918,
    "end": 2919,
    "range": [
      2918,
      2919
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2921,
    "end": 2926,
    "range": [
      2921,
      2926
    ]
  },
  {
    "type": "Identifier",
    "value": "test_55033_minimal",
    "start": 2927,
    "end": 2945,
    "range": [
      2927,
      2945
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2946,
    "end": 2947,
    "range": [
      2946,
      2947
    ]
  },
  {
    "type": "Identifier",
    "value": "factory_55033_minimal",
    "start": 2948,
    "end": 2969,
    "range": [
      2948,
      2969
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2969,
    "end": 2970,
    "range": [
      2969,
      2970
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2970,
    "end": 2971,
    "range": [
      2970,
      2971
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2971,
    "end": 2972,
    "range": [
      2971,
      2972
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2972,
    "end": 2973,
    "range": [
      2972,
      2973
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2974,
    "end": 2980,
    "range": [
      2974,
      2980
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2980,
    "end": 2981,
    "range": [
      2980,
      2981
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2982,
    "end": 2984,
    "range": [
      2982,
      2984
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2985,
    "end": 2986,
    "range": [
      2985,
      2986
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2986,
    "end": 2987,
    "range": [
      2986,
      2987
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2987,
    "end": 2988,
    "range": [
      2987,
      2988
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2990,
    "end": 2998,
    "range": [
      2990,
      2998
    ]
  },
  {
    "type": "Identifier",
    "value": "factory_55033",
    "start": 2999,
    "end": 3012,
    "range": [
      2999,
      3012
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3012,
    "end": 3013,
    "range": [
      3012,
      3013
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3013,
    "end": 3018,
    "range": [
      3013,
      3018
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3019,
    "end": 3020,
    "range": [
      3019,
      3020
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3021,
    "end": 3028,
    "range": [
      3021,
      3028
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 3029,
    "end": 3037,
    "range": [
      3029,
      3037
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3038,
    "end": 3045,
    "range": [
      3038,
      3045
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3045,
    "end": 3046,
    "range": [
      3045,
      3046
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3046,
    "end": 3047,
    "range": [
      3046,
      3047
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3047,
    "end": 3048,
    "range": [
      3047,
      3048
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3048,
    "end": 3049,
    "range": [
      3048,
      3049
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3049,
    "end": 3051,
    "range": [
      3049,
      3051
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3051,
    "end": 3052,
    "range": [
      3051,
      3052
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3053,
    "end": 3054,
    "range": [
      3053,
      3054
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3054,
    "end": 3057,
    "range": [
      3054,
      3057
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3057,
    "end": 3061,
    "range": [
      3057,
      3061
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3061,
    "end": 3062,
    "range": [
      3061,
      3062
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3063,
    "end": 3064,
    "range": [
      3063,
      3064
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3064,
    "end": 3065,
    "range": [
      3064,
      3065
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3066,
    "end": 3068,
    "range": [
      3066,
      3068
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3069,
    "end": 3073,
    "range": [
      3069,
      3073
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3073,
    "end": 3074,
    "range": [
      3073,
      3074
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3075,
    "end": 3076,
    "range": [
      3075,
      3076
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3081,
    "end": 3087,
    "range": [
      3081,
      3087
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3088,
    "end": 3096,
    "range": [
      3088,
      3096
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 3097,
    "end": 3101,
    "range": [
      3097,
      3101
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3101,
    "end": 3102,
    "range": [
      3101,
      3102
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3102,
    "end": 3107,
    "range": [
      3102,
      3107
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3108,
    "end": 3109,
    "range": [
      3108,
      3109
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3110,
    "end": 3117,
    "range": [
      3110,
      3117
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3118,
    "end": 3119,
    "range": [
      3118,
      3119
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3119,
    "end": 3120,
    "range": [
      3119,
      3120
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3120,
    "end": 3121,
    "range": [
      3120,
      3121
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3121,
    "end": 3124,
    "range": [
      3121,
      3124
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3124,
    "end": 3128,
    "range": [
      3124,
      3128
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3128,
    "end": 3129,
    "range": [
      3128,
      3129
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3130,
    "end": 3131,
    "range": [
      3130,
      3131
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3131,
    "end": 3132,
    "range": [
      3131,
      3132
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3132,
    "end": 3133,
    "range": [
      3132,
      3133
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3134,
    "end": 3135,
    "range": [
      3134,
      3135
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3136,
    "end": 3137,
    "range": [
      3136,
      3137
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3146,
    "end": 3152,
    "range": [
      3146,
      3152
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3153,
    "end": 3154,
    "range": [
      3153,
      3154
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3154,
    "end": 3155,
    "range": [
      3154,
      3155
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3156,
    "end": 3158,
    "range": [
      3156,
      3158
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3159,
    "end": 3160,
    "range": [
      3159,
      3160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3160,
    "end": 3161,
    "range": [
      3160,
      3161
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3166,
    "end": 3167,
    "range": [
      3166,
      3167
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3167,
    "end": 3168,
    "range": [
      3167,
      3168
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3169,
    "end": 3170,
    "range": [
      3169,
      3170
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3172,
    "end": 3177,
    "range": [
      3172,
      3177
    ]
  },
  {
    "type": "Identifier",
    "value": "t1_55033",
    "start": 3178,
    "end": 3186,
    "range": [
      3178,
      3186
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3187,
    "end": 3188,
    "range": [
      3187,
      3188
    ]
  },
  {
    "type": "Identifier",
    "value": "factory_55033",
    "start": 3189,
    "end": 3202,
    "range": [
      3189,
      3202
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3202,
    "end": 3203,
    "range": [
      3202,
      3203
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3203,
    "end": 3204,
    "range": [
      3203,
      3204
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3204,
    "end": 3205,
    "range": [
      3204,
      3205
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3205,
    "end": 3206,
    "range": [
      3205,
      3206
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3207,
    "end": 3208,
    "range": [
      3207,
      3208
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3209,
    "end": 3213,
    "range": [
      3209,
      3213
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3213,
    "end": 3214,
    "range": [
      3213,
      3214
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3215,
    "end": 3221,
    "range": [
      3215,
      3221
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3222,
    "end": 3223,
    "range": [
      3222,
      3223
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3223,
    "end": 3224,
    "range": [
      3223,
      3224
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3225,
    "end": 3226,
    "range": [
      3225,
      3226
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3226,
    "end": 3227,
    "range": [
      3226,
      3227
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3228,
    "end": 3234,
    "range": [
      3228,
      3234
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3234,
    "end": 3235,
    "range": [
      3234,
      3235
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3236,
    "end": 3238,
    "range": [
      3236,
      3238
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3239,
    "end": 3240,
    "range": [
      3239,
      3240
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3240,
    "end": 3241,
    "range": [
      3240,
      3241
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3241,
    "end": 3242,
    "range": [
      3241,
      3242
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3242,
    "end": 3243,
    "range": [
      3242,
      3243
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3248,
    "end": 3249,
    "range": [
      3248,
      3249
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3250,
    "end": 3254,
    "range": [
      3250,
      3254
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3254,
    "end": 3255,
    "range": [
      3254,
      3255
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 3256,
    "end": 3259,
    "range": [
      3256,
      3259
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3260,
    "end": 3261,
    "range": [
      3260,
      3261
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3261,
    "end": 3262,
    "range": [
      3261,
      3262
    ]
  },
  {
    "type": "String",
    "value": "\"some string\"",
    "start": 3267,
    "end": 3280,
    "range": [
      3267,
      3280
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3281,
    "end": 3282,
    "range": [
      3281,
      3282
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3282,
    "end": 3283,
    "range": [
      3282,
      3283
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3285,
    "end": 3290,
    "range": [
      3285,
      3290
    ]
  },
  {
    "type": "Identifier",
    "value": "t2_55033",
    "start": 3291,
    "end": 3299,
    "range": [
      3291,
      3299
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3300,
    "end": 3301,
    "range": [
      3300,
      3301
    ]
  },
  {
    "type": "Identifier",
    "value": "factory_55033",
    "start": 3302,
    "end": 3315,
    "range": [
      3302,
      3315
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3315,
    "end": 3316,
    "range": [
      3315,
      3316
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3316,
    "end": 3317,
    "range": [
      3316,
      3317
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3317,
    "end": 3318,
    "range": [
      3317,
      3318
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3318,
    "end": 3319,
    "range": [
      3318,
      3319
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3320,
    "end": 3321,
    "range": [
      3320,
      3321
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3322,
    "end": 3326,
    "range": [
      3322,
      3326
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3326,
    "end": 3327,
    "range": [
      3326,
      3327
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3328,
    "end": 3334,
    "range": [
      3328,
      3334
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3335,
    "end": 3336,
    "range": [
      3335,
      3336
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3336,
    "end": 3337,
    "range": [
      3336,
      3337
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3338,
    "end": 3339,
    "range": [
      3338,
      3339
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3339,
    "end": 3340,
    "range": [
      3339,
      3340
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3341,
    "end": 3347,
    "range": [
      3341,
      3347
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3347,
    "end": 3348,
    "range": [
      3347,
      3348
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3349,
    "end": 3351,
    "range": [
      3349,
      3351
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3352,
    "end": 3353,
    "range": [
      3352,
      3353
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3353,
    "end": 3354,
    "range": [
      3353,
      3354
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3354,
    "end": 3355,
    "range": [
      3354,
      3355
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3355,
    "end": 3356,
    "range": [
      3355,
      3356
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3361,
    "end": 3362,
    "range": [
      3361,
      3362
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3363,
    "end": 3367,
    "range": [
      3363,
      3367
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3367,
    "end": 3368,
    "range": [
      3367,
      3368
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 3369,
    "end": 3372,
    "range": [
      3369,
      3372
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3373,
    "end": 3374,
    "range": [
      3373,
      3374
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3375,
    "end": 3377,
    "range": [
      3375,
      3377
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 3378,
    "end": 3383,
    "range": [
      3378,
      3383
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3383,
    "end": 3384,
    "range": [
      3383,
      3384
    ]
  },
  {
    "type": "String",
    "value": "\"some string\"",
    "start": 3389,
    "end": 3402,
    "range": [
      3389,
      3402
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3403,
    "end": 3404,
    "range": [
      3403,
      3404
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3404,
    "end": 3405,
    "range": [
      3404,
      3405
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3445,
    "end": 3453,
    "range": [
      3445,
      3453
    ]
  },
  {
    "type": "Identifier",
    "value": "factory_55033_2",
    "start": 3454,
    "end": 3469,
    "range": [
      3454,
      3469
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3469,
    "end": 3470,
    "range": [
      3469,
      3470
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3470,
    "end": 3475,
    "range": [
      3470,
      3475
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3476,
    "end": 3477,
    "range": [
      3476,
      3477
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3478,
    "end": 3485,
    "range": [
      3478,
      3485
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3486,
    "end": 3493,
    "range": [
      3486,
      3493
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3493,
    "end": 3494,
    "range": [
      3493,
      3494
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3494,
    "end": 3495,
    "range": [
      3494,
      3495
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3495,
    "end": 3496,
    "range": [
      3495,
      3496
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3496,
    "end": 3497,
    "range": [
      3496,
      3497
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3497,
    "end": 3499,
    "range": [
      3497,
      3499
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3499,
    "end": 3500,
    "range": [
      3499,
      3500
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3501,
    "end": 3502,
    "range": [
      3501,
      3502
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3502,
    "end": 3505,
    "range": [
      3502,
      3505
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3505,
    "end": 3509,
    "range": [
      3505,
      3509
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3509,
    "end": 3510,
    "range": [
      3509,
      3510
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3511,
    "end": 3512,
    "range": [
      3511,
      3512
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3512,
    "end": 3513,
    "range": [
      3512,
      3513
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3514,
    "end": 3516,
    "range": [
      3514,
      3516
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3517,
    "end": 3521,
    "range": [
      3517,
      3521
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3521,
    "end": 3522,
    "range": [
      3521,
      3522
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3523,
    "end": 3524,
    "range": [
      3523,
      3524
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3529,
    "end": 3535,
    "range": [
      3529,
      3535
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3536,
    "end": 3544,
    "range": [
      3536,
      3544
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 3545,
    "end": 3549,
    "range": [
      3545,
      3549
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3549,
    "end": 3550,
    "range": [
      3549,
      3550
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3550,
    "end": 3555,
    "range": [
      3550,
      3555
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3556,
    "end": 3557,
    "range": [
      3556,
      3557
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3558,
    "end": 3565,
    "range": [
      3558,
      3565
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3566,
    "end": 3567,
    "range": [
      3566,
      3567
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3567,
    "end": 3568,
    "range": [
      3567,
      3568
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3568,
    "end": 3569,
    "range": [
      3568,
      3569
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3569,
    "end": 3572,
    "range": [
      3569,
      3572
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3572,
    "end": 3576,
    "range": [
      3572,
      3576
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3576,
    "end": 3577,
    "range": [
      3576,
      3577
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3578,
    "end": 3579,
    "range": [
      3578,
      3579
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3579,
    "end": 3580,
    "range": [
      3579,
      3580
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3580,
    "end": 3581,
    "range": [
      3580,
      3581
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3582,
    "end": 3583,
    "range": [
      3582,
      3583
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3584,
    "end": 3585,
    "range": [
      3584,
      3585
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3594,
    "end": 3600,
    "range": [
      3594,
      3600
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3601,
    "end": 3602,
    "range": [
      3601,
      3602
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3602,
    "end": 3603,
    "range": [
      3602,
      3603
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3604,
    "end": 3606,
    "range": [
      3604,
      3606
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3607,
    "end": 3608,
    "range": [
      3607,
      3608
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3608,
    "end": 3609,
    "range": [
      3608,
      3609
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3614,
    "end": 3615,
    "range": [
      3614,
      3615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3615,
    "end": 3616,
    "range": [
      3615,
      3616
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3617,
    "end": 3618,
    "range": [
      3617,
      3618
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3620,
    "end": 3625,
    "range": [
      3620,
      3625
    ]
  },
  {
    "type": "Identifier",
    "value": "t1_55033_2",
    "start": 3626,
    "end": 3636,
    "range": [
      3626,
      3636
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3637,
    "end": 3638,
    "range": [
      3637,
      3638
    ]
  },
  {
    "type": "Identifier",
    "value": "factory_55033_2",
    "start": 3639,
    "end": 3654,
    "range": [
      3639,
      3654
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3654,
    "end": 3655,
    "range": [
      3654,
      3655
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3655,
    "end": 3656,
    "range": [
      3655,
      3656
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3656,
    "end": 3657,
    "range": [
      3656,
      3657
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3657,
    "end": 3658,
    "range": [
      3657,
      3658
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3659,
    "end": 3660,
    "range": [
      3659,
      3660
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3661,
    "end": 3665,
    "range": [
      3661,
      3665
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3665,
    "end": 3666,
    "range": [
      3665,
      3666
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3667,
    "end": 3673,
    "range": [
      3667,
      3673
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3674,
    "end": 3675,
    "range": [
      3674,
      3675
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3675,
    "end": 3676,
    "range": [
      3675,
      3676
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3677,
    "end": 3678,
    "range": [
      3677,
      3678
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3678,
    "end": 3679,
    "range": [
      3678,
      3679
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3680,
    "end": 3686,
    "range": [
      3680,
      3686
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3686,
    "end": 3687,
    "range": [
      3686,
      3687
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3688,
    "end": 3690,
    "range": [
      3688,
      3690
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3691,
    "end": 3692,
    "range": [
      3691,
      3692
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3692,
    "end": 3693,
    "range": [
      3692,
      3693
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3693,
    "end": 3694,
    "range": [
      3693,
      3694
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3694,
    "end": 3695,
    "range": [
      3694,
      3695
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3700,
    "end": 3701,
    "range": [
      3700,
      3701
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3702,
    "end": 3706,
    "range": [
      3702,
      3706
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3706,
    "end": 3707,
    "range": [
      3706,
      3707
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 3708,
    "end": 3711,
    "range": [
      3708,
      3711
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3712,
    "end": 3713,
    "range": [
      3712,
      3713
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3713,
    "end": 3714,
    "range": [
      3713,
      3714
    ]
  },
  {
    "type": "String",
    "value": "\"some string\"",
    "start": 3719,
    "end": 3732,
    "range": [
      3719,
      3732
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3733,
    "end": 3734,
    "range": [
      3733,
      3734
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3734,
    "end": 3735,
    "range": [
      3734,
      3735
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3737,
    "end": 3742,
    "range": [
      3737,
      3742
    ]
  },
  {
    "type": "Identifier",
    "value": "t2_55033_2",
    "start": 3743,
    "end": 3753,
    "range": [
      3743,
      3753
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3754,
    "end": 3755,
    "range": [
      3754,
      3755
    ]
  },
  {
    "type": "Identifier",
    "value": "factory_55033_2",
    "start": 3756,
    "end": 3771,
    "range": [
      3756,
      3771
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3771,
    "end": 3772,
    "range": [
      3771,
      3772
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3772,
    "end": 3773,
    "range": [
      3772,
      3773
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3773,
    "end": 3774,
    "range": [
      3773,
      3774
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3774,
    "end": 3775,
    "range": [
      3774,
      3775
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3776,
    "end": 3777,
    "range": [
      3776,
      3777
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3778,
    "end": 3782,
    "range": [
      3778,
      3782
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3782,
    "end": 3783,
    "range": [
      3782,
      3783
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3784,
    "end": 3790,
    "range": [
      3784,
      3790
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3791,
    "end": 3792,
    "range": [
      3791,
      3792
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3792,
    "end": 3793,
    "range": [
      3792,
      3793
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3794,
    "end": 3795,
    "range": [
      3794,
      3795
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3795,
    "end": 3796,
    "range": [
      3795,
      3796
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3797,
    "end": 3803,
    "range": [
      3797,
      3803
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3803,
    "end": 3804,
    "range": [
      3803,
      3804
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3805,
    "end": 3807,
    "range": [
      3805,
      3807
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3808,
    "end": 3809,
    "range": [
      3808,
      3809
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3809,
    "end": 3810,
    "range": [
      3809,
      3810
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3810,
    "end": 3811,
    "range": [
      3810,
      3811
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3811,
    "end": 3812,
    "range": [
      3811,
      3812
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3817,
    "end": 3818,
    "range": [
      3817,
      3818
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3819,
    "end": 3823,
    "range": [
      3819,
      3823
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3823,
    "end": 3824,
    "range": [
      3823,
      3824
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 3825,
    "end": 3828,
    "range": [
      3825,
      3828
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3829,
    "end": 3830,
    "range": [
      3829,
      3830
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3831,
    "end": 3833,
    "range": [
      3831,
      3833
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 3834,
    "end": 3839,
    "range": [
      3834,
      3839
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3839,
    "end": 3840,
    "range": [
      3839,
      3840
    ]
  },
  {
    "type": "String",
    "value": "\"some string\"",
    "start": 3845,
    "end": 3858,
    "range": [
      3845,
      3858
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3859,
    "end": 3860,
    "range": [
      3859,
      3860
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3860,
    "end": 3861,
    "range": [
      3860,
      3861
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3931,
    "end": 3938,
    "range": [
      3931,
      3938
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3939,
    "end": 3947,
    "range": [
      3939,
      3947
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 3948,
    "end": 3950,
    "range": [
      3948,
      3950
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3950,
    "end": 3951,
    "range": [
      3950,
      3951
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3951,
    "end": 3956,
    "range": [
      3951,
      3956
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3957,
    "end": 3958,
    "range": [
      3957,
      3958
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3959,
    "end": 3966,
    "range": [
      3959,
      3966
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3967,
    "end": 3970,
    "range": [
      3967,
      3970
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3970,
    "end": 3971,
    "range": [
      3970,
      3971
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3971,
    "end": 3972,
    "range": [
      3971,
      3972
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3972,
    "end": 3973,
    "range": [
      3972,
      3973
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3973,
    "end": 3974,
    "range": [
      3973,
      3974
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3974,
    "end": 3977,
    "range": [
      3974,
      3977
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3977,
    "end": 3981,
    "range": [
      3977,
      3981
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3981,
    "end": 3982,
    "range": [
      3981,
      3982
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3983,
    "end": 3984,
    "range": [
      3983,
      3984
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3984,
    "end": 3985,
    "range": [
      3984,
      3985
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3985,
    "end": 3986,
    "range": [
      3985,
      3986
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3987,
    "end": 3988,
    "range": [
      3987,
      3988
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3988,
    "end": 3989,
    "range": [
      3988,
      3989
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3991,
    "end": 3996,
    "range": [
      3991,
      3996
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3997,
    "end": 3998,
    "range": [
      3997,
      3998
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3999,
    "end": 4000,
    "range": [
      3999,
      4000
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 4001,
    "end": 4003,
    "range": [
      4001,
      4003
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4003,
    "end": 4004,
    "range": [
      4003,
      4004
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4004,
    "end": 4007,
    "range": [
      4004,
      4007
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4007,
    "end": 4008,
    "range": [
      4007,
      4008
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 4009,
    "end": 4014,
    "range": [
      4009,
      4014
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4014,
    "end": 4015,
    "range": [
      4014,
      4015
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4015,
    "end": 4016,
    "range": [
      4015,
      4016
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4064,
    "end": 4071,
    "range": [
      4064,
      4071
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4072,
    "end": 4080,
    "range": [
      4072,
      4080
    ]
  },
  {
    "type": "Identifier",
    "value": "fa1",
    "start": 4081,
    "end": 4084,
    "range": [
      4081,
      4084
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4084,
    "end": 4085,
    "range": [
      4084,
      4085
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4085,
    "end": 4090,
    "range": [
      4085,
      4090
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4091,
    "end": 4092,
    "range": [
      4091,
      4092
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4093,
    "end": 4100,
    "range": [
      4093,
      4100
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4101,
    "end": 4108,
    "range": [
      4101,
      4108
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4108,
    "end": 4109,
    "range": [
      4108,
      4109
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4109,
    "end": 4110,
    "range": [
      4109,
      4110
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4110,
    "end": 4111,
    "range": [
      4110,
      4111
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4111,
    "end": 4112,
    "range": [
      4111,
      4112
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4112,
    "end": 4116,
    "range": [
      4112,
      4116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4116,
    "end": 4117,
    "range": [
      4116,
      4117
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4118,
    "end": 4119,
    "range": [
      4118,
      4119
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4119,
    "end": 4120,
    "range": [
      4119,
      4120
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4120,
    "end": 4121,
    "range": [
      4120,
      4121
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4122,
    "end": 4123,
    "range": [
      4122,
      4123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4123,
    "end": 4124,
    "range": [
      4123,
      4124
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4125,
    "end": 4132,
    "range": [
      4125,
      4132
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4133,
    "end": 4141,
    "range": [
      4133,
      4141
    ]
  },
  {
    "type": "Identifier",
    "value": "fa2",
    "start": 4142,
    "end": 4145,
    "range": [
      4142,
      4145
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4145,
    "end": 4146,
    "range": [
      4145,
      4146
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4146,
    "end": 4151,
    "range": [
      4146,
      4151
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4152,
    "end": 4153,
    "range": [
      4152,
      4153
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4154,
    "end": 4161,
    "range": [
      4154,
      4161
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4162,
    "end": 4170,
    "range": [
      4162,
      4170
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4171,
    "end": 4178,
    "range": [
      4171,
      4178
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4178,
    "end": 4179,
    "range": [
      4178,
      4179
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4179,
    "end": 4180,
    "range": [
      4179,
      4180
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4180,
    "end": 4181,
    "range": [
      4180,
      4181
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4181,
    "end": 4182,
    "range": [
      4181,
      4182
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4182,
    "end": 4186,
    "range": [
      4182,
      4186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4186,
    "end": 4187,
    "range": [
      4186,
      4187
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4188,
    "end": 4189,
    "range": [
      4188,
      4189
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4189,
    "end": 4190,
    "range": [
      4189,
      4190
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4190,
    "end": 4191,
    "range": [
      4190,
      4191
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4192,
    "end": 4193,
    "range": [
      4192,
      4193
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4193,
    "end": 4194,
    "range": [
      4193,
      4194
    ]
  },
  {
    "type": "Identifier",
    "value": "fa1",
    "start": 4196,
    "end": 4199,
    "range": [
      4196,
      4199
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4199,
    "end": 4200,
    "range": [
      4199,
      4200
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4200,
    "end": 4201,
    "range": [
      4200,
      4201
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4201,
    "end": 4208,
    "range": [
      4201,
      4208
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4208,
    "end": 4209,
    "range": [
      4208,
      4209
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 4210,
    "end": 4212,
    "range": [
      4210,
      4212
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4212,
    "end": 4213,
    "range": [
      4212,
      4213
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4213,
    "end": 4214,
    "range": [
      4213,
      4214
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4214,
    "end": 4215,
    "range": [
      4214,
      4215
    ]
  },
  {
    "type": "Identifier",
    "value": "fa2",
    "start": 4216,
    "end": 4219,
    "range": [
      4216,
      4219
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4219,
    "end": 4220,
    "range": [
      4219,
      4220
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4220,
    "end": 4221,
    "range": [
      4220,
      4221
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4221,
    "end": 4228,
    "range": [
      4221,
      4228
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4228,
    "end": 4229,
    "range": [
      4228,
      4229
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 4230,
    "end": 4232,
    "range": [
      4230,
      4232
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4232,
    "end": 4233,
    "range": [
      4232,
      4233
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4233,
    "end": 4234,
    "range": [
      4233,
      4234
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4234,
    "end": 4235,
    "range": [
      4234,
      4235
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4237,
    "end": 4244,
    "range": [
      4237,
      4244
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4245,
    "end": 4253,
    "range": [
      4245,
      4253
    ]
  },
  {
    "type": "Identifier",
    "value": "fb1",
    "start": 4254,
    "end": 4257,
    "range": [
      4254,
      4257
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4257,
    "end": 4258,
    "range": [
      4257,
      4258
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4258,
    "end": 4263,
    "range": [
      4258,
      4263
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4264,
    "end": 4265,
    "range": [
      4264,
      4265
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4266,
    "end": 4273,
    "range": [
      4266,
      4273
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4274,
    "end": 4281,
    "range": [
      4274,
      4281
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4281,
    "end": 4282,
    "range": [
      4281,
      4282
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4282,
    "end": 4283,
    "range": [
      4282,
      4283
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4283,
    "end": 4284,
    "range": [
      4283,
      4284
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4284,
    "end": 4285,
    "range": [
      4284,
      4285
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4285,
    "end": 4288,
    "range": [
      4285,
      4288
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4288,
    "end": 4292,
    "range": [
      4288,
      4292
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4292,
    "end": 4293,
    "range": [
      4292,
      4293
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4294,
    "end": 4295,
    "range": [
      4294,
      4295
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4295,
    "end": 4296,
    "range": [
      4295,
      4296
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4296,
    "end": 4297,
    "range": [
      4296,
      4297
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4298,
    "end": 4299,
    "range": [
      4298,
      4299
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4299,
    "end": 4300,
    "range": [
      4299,
      4300
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4301,
    "end": 4308,
    "range": [
      4301,
      4308
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4309,
    "end": 4317,
    "range": [
      4309,
      4317
    ]
  },
  {
    "type": "Identifier",
    "value": "fb2",
    "start": 4318,
    "end": 4321,
    "range": [
      4318,
      4321
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4321,
    "end": 4322,
    "range": [
      4321,
      4322
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4322,
    "end": 4327,
    "range": [
      4322,
      4327
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4328,
    "end": 4329,
    "range": [
      4328,
      4329
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4330,
    "end": 4337,
    "range": [
      4330,
      4337
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4338,
    "end": 4346,
    "range": [
      4338,
      4346
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4347,
    "end": 4354,
    "range": [
      4347,
      4354
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4354,
    "end": 4355,
    "range": [
      4354,
      4355
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4355,
    "end": 4356,
    "range": [
      4355,
      4356
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4356,
    "end": 4357,
    "range": [
      4356,
      4357
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4357,
    "end": 4358,
    "range": [
      4357,
      4358
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4358,
    "end": 4361,
    "range": [
      4358,
      4361
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4361,
    "end": 4365,
    "range": [
      4361,
      4365
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4365,
    "end": 4366,
    "range": [
      4365,
      4366
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4367,
    "end": 4368,
    "range": [
      4367,
      4368
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4368,
    "end": 4369,
    "range": [
      4368,
      4369
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4369,
    "end": 4370,
    "range": [
      4369,
      4370
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4371,
    "end": 4372,
    "range": [
      4371,
      4372
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4372,
    "end": 4373,
    "range": [
      4372,
      4373
    ]
  },
  {
    "type": "Identifier",
    "value": "fb1",
    "start": 4375,
    "end": 4378,
    "range": [
      4375,
      4378
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4378,
    "end": 4379,
    "range": [
      4378,
      4379
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4379,
    "end": 4386,
    "range": [
      4379,
      4386
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4386,
    "end": 4387,
    "range": [
      4386,
      4387
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 4388,
    "end": 4390,
    "range": [
      4388,
      4390
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4390,
    "end": 4391,
    "range": [
      4390,
      4391
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4391,
    "end": 4392,
    "range": [
      4391,
      4392
    ]
  },
  {
    "type": "Identifier",
    "value": "fb2",
    "start": 4393,
    "end": 4396,
    "range": [
      4393,
      4396
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4396,
    "end": 4397,
    "range": [
      4396,
      4397
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4397,
    "end": 4404,
    "range": [
      4397,
      4404
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4404,
    "end": 4405,
    "range": [
      4404,
      4405
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 4406,
    "end": 4408,
    "range": [
      4406,
      4408
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4408,
    "end": 4409,
    "range": [
      4408,
      4409
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4409,
    "end": 4410,
    "range": [
      4409,
      4410
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4412,
    "end": 4419,
    "range": [
      4412,
      4419
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4420,
    "end": 4428,
    "range": [
      4420,
      4428
    ]
  },
  {
    "type": "Identifier",
    "value": "fc1",
    "start": 4429,
    "end": 4432,
    "range": [
      4429,
      4432
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4432,
    "end": 4433,
    "range": [
      4432,
      4433
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4433,
    "end": 4438,
    "range": [
      4433,
      4438
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4439,
    "end": 4440,
    "range": [
      4439,
      4440
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4441,
    "end": 4448,
    "range": [
      4441,
      4448
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4449,
    "end": 4456,
    "range": [
      4449,
      4456
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4456,
    "end": 4457,
    "range": [
      4456,
      4457
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4457,
    "end": 4458,
    "range": [
      4457,
      4458
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4458,
    "end": 4459,
    "range": [
      4458,
      4459
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4459,
    "end": 4460,
    "range": [
      4459,
      4460
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 4460,
    "end": 4461,
    "range": [
      4460,
      4461
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4461,
    "end": 4462,
    "range": [
      4461,
      4462
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4463,
    "end": 4464,
    "range": [
      4463,
      4464
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4464,
    "end": 4467,
    "range": [
      4464,
      4467
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4467,
    "end": 4471,
    "range": [
      4467,
      4471
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4471,
    "end": 4472,
    "range": [
      4471,
      4472
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4473,
    "end": 4474,
    "range": [
      4473,
      4474
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4474,
    "end": 4475,
    "range": [
      4474,
      4475
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4476,
    "end": 4478,
    "range": [
      4476,
      4478
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4479,
    "end": 4483,
    "range": [
      4479,
      4483
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4483,
    "end": 4484,
    "range": [
      4483,
      4484
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4485,
    "end": 4488,
    "range": [
      4485,
      4488
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4488,
    "end": 4492,
    "range": [
      4488,
      4492
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4492,
    "end": 4493,
    "range": [
      4492,
      4493
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4494,
    "end": 4495,
    "range": [
      4494,
      4495
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4495,
    "end": 4496,
    "range": [
      4495,
      4496
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4496,
    "end": 4497,
    "range": [
      4496,
      4497
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4498,
    "end": 4499,
    "range": [
      4498,
      4499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4499,
    "end": 4500,
    "range": [
      4499,
      4500
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4501,
    "end": 4508,
    "range": [
      4501,
      4508
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4509,
    "end": 4517,
    "range": [
      4509,
      4517
    ]
  },
  {
    "type": "Identifier",
    "value": "fc2",
    "start": 4518,
    "end": 4521,
    "range": [
      4518,
      4521
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4521,
    "end": 4522,
    "range": [
      4521,
      4522
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4522,
    "end": 4527,
    "range": [
      4522,
      4527
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4528,
    "end": 4529,
    "range": [
      4528,
      4529
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4530,
    "end": 4537,
    "range": [
      4530,
      4537
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4538,
    "end": 4546,
    "range": [
      4538,
      4546
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4547,
    "end": 4554,
    "range": [
      4547,
      4554
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4554,
    "end": 4555,
    "range": [
      4554,
      4555
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4555,
    "end": 4556,
    "range": [
      4555,
      4556
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4556,
    "end": 4557,
    "range": [
      4556,
      4557
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4557,
    "end": 4558,
    "range": [
      4557,
      4558
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 4558,
    "end": 4559,
    "range": [
      4558,
      4559
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4559,
    "end": 4560,
    "range": [
      4559,
      4560
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4561,
    "end": 4562,
    "range": [
      4561,
      4562
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4562,
    "end": 4565,
    "range": [
      4562,
      4565
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4565,
    "end": 4569,
    "range": [
      4565,
      4569
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4569,
    "end": 4570,
    "range": [
      4569,
      4570
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4571,
    "end": 4572,
    "range": [
      4571,
      4572
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4572,
    "end": 4573,
    "range": [
      4572,
      4573
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4574,
    "end": 4576,
    "range": [
      4574,
      4576
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4577,
    "end": 4581,
    "range": [
      4577,
      4581
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4581,
    "end": 4582,
    "range": [
      4581,
      4582
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4583,
    "end": 4586,
    "range": [
      4583,
      4586
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4586,
    "end": 4590,
    "range": [
      4586,
      4590
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4590,
    "end": 4591,
    "range": [
      4590,
      4591
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4592,
    "end": 4593,
    "range": [
      4592,
      4593
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4593,
    "end": 4594,
    "range": [
      4593,
      4594
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4594,
    "end": 4595,
    "range": [
      4594,
      4595
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4596,
    "end": 4597,
    "range": [
      4596,
      4597
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4597,
    "end": 4598,
    "range": [
      4597,
      4598
    ]
  },
  {
    "type": "Identifier",
    "value": "fc1",
    "start": 4600,
    "end": 4603,
    "range": [
      4600,
      4603
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4603,
    "end": 4604,
    "range": [
      4603,
      4604
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4604,
    "end": 4605,
    "range": [
      4604,
      4605
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4605,
    "end": 4606,
    "range": [
      4605,
      4606
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4606,
    "end": 4607,
    "range": [
      4606,
      4607
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4608,
    "end": 4614,
    "range": [
      4608,
      4614
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4614,
    "end": 4615,
    "range": [
      4614,
      4615
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4616,
    "end": 4617,
    "range": [
      4616,
      4617
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4617,
    "end": 4618,
    "range": [
      4617,
      4618
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4619,
    "end": 4625,
    "range": [
      4619,
      4625
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4625,
    "end": 4626,
    "range": [
      4625,
      4626
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4627,
    "end": 4629,
    "range": [
      4627,
      4629
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4630,
    "end": 4631,
    "range": [
      4630,
      4631
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4631,
    "end": 4632,
    "range": [
      4631,
      4632
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4632,
    "end": 4633,
    "range": [
      4632,
      4633
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4634,
    "end": 4641,
    "range": [
      4634,
      4641
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4641,
    "end": 4642,
    "range": [
      4641,
      4642
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 4643,
    "end": 4645,
    "range": [
      4643,
      4645
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4645,
    "end": 4646,
    "range": [
      4645,
      4646
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4646,
    "end": 4647,
    "range": [
      4646,
      4647
    ]
  },
  {
    "type": "Identifier",
    "value": "fc2",
    "start": 4648,
    "end": 4651,
    "range": [
      4648,
      4651
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4651,
    "end": 4652,
    "range": [
      4651,
      4652
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4652,
    "end": 4653,
    "range": [
      4652,
      4653
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4653,
    "end": 4654,
    "range": [
      4653,
      4654
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4654,
    "end": 4655,
    "range": [
      4654,
      4655
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4656,
    "end": 4662,
    "range": [
      4656,
      4662
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4662,
    "end": 4663,
    "range": [
      4662,
      4663
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4664,
    "end": 4665,
    "range": [
      4664,
      4665
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4665,
    "end": 4666,
    "range": [
      4665,
      4666
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4667,
    "end": 4673,
    "range": [
      4667,
      4673
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4673,
    "end": 4674,
    "range": [
      4673,
      4674
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4675,
    "end": 4677,
    "range": [
      4675,
      4677
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4678,
    "end": 4679,
    "range": [
      4678,
      4679
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4679,
    "end": 4680,
    "range": [
      4679,
      4680
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4680,
    "end": 4681,
    "range": [
      4680,
      4681
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4682,
    "end": 4689,
    "range": [
      4682,
      4689
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4689,
    "end": 4690,
    "range": [
      4689,
      4690
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 4691,
    "end": 4693,
    "range": [
      4691,
      4693
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4693,
    "end": 4694,
    "range": [
      4693,
      4694
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4694,
    "end": 4695,
    "range": [
      4694,
      4695
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4697,
    "end": 4704,
    "range": [
      4697,
      4704
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4705,
    "end": 4713,
    "range": [
      4705,
      4713
    ]
  },
  {
    "type": "Identifier",
    "value": "fd1",
    "start": 4714,
    "end": 4717,
    "range": [
      4714,
      4717
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4717,
    "end": 4718,
    "range": [
      4717,
      4718
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4718,
    "end": 4723,
    "range": [
      4718,
      4723
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4724,
    "end": 4725,
    "range": [
      4724,
      4725
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4726,
    "end": 4733,
    "range": [
      4726,
      4733
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4734,
    "end": 4740,
    "range": [
      4734,
      4740
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4740,
    "end": 4741,
    "range": [
      4740,
      4741
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4741,
    "end": 4742,
    "range": [
      4741,
      4742
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4743,
    "end": 4744,
    "range": [
      4743,
      4744
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4745,
    "end": 4751,
    "range": [
      4745,
      4751
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4751,
    "end": 4752,
    "range": [
      4751,
      4752
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4752,
    "end": 4753,
    "range": [
      4752,
      4753
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4753,
    "end": 4754,
    "range": [
      4753,
      4754
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4754,
    "end": 4755,
    "range": [
      4754,
      4755
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4755,
    "end": 4759,
    "range": [
      4755,
      4759
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4759,
    "end": 4760,
    "range": [
      4759,
      4760
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4761,
    "end": 4762,
    "range": [
      4761,
      4762
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4762,
    "end": 4763,
    "range": [
      4762,
      4763
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4763,
    "end": 4764,
    "range": [
      4763,
      4764
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4765,
    "end": 4766,
    "range": [
      4765,
      4766
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4766,
    "end": 4767,
    "range": [
      4766,
      4767
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4768,
    "end": 4775,
    "range": [
      4768,
      4775
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4776,
    "end": 4784,
    "range": [
      4776,
      4784
    ]
  },
  {
    "type": "Identifier",
    "value": "fd2",
    "start": 4785,
    "end": 4788,
    "range": [
      4785,
      4788
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4788,
    "end": 4789,
    "range": [
      4788,
      4789
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4789,
    "end": 4794,
    "range": [
      4789,
      4794
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4795,
    "end": 4796,
    "range": [
      4795,
      4796
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4797,
    "end": 4804,
    "range": [
      4797,
      4804
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4805,
    "end": 4811,
    "range": [
      4805,
      4811
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4811,
    "end": 4812,
    "range": [
      4811,
      4812
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4812,
    "end": 4813,
    "range": [
      4812,
      4813
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4814,
    "end": 4815,
    "range": [
      4814,
      4815
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4816,
    "end": 4824,
    "range": [
      4816,
      4824
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4825,
    "end": 4831,
    "range": [
      4825,
      4831
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4831,
    "end": 4832,
    "range": [
      4831,
      4832
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4832,
    "end": 4833,
    "range": [
      4832,
      4833
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4833,
    "end": 4834,
    "range": [
      4833,
      4834
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4834,
    "end": 4835,
    "range": [
      4834,
      4835
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4835,
    "end": 4839,
    "range": [
      4835,
      4839
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4839,
    "end": 4840,
    "range": [
      4839,
      4840
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4841,
    "end": 4842,
    "range": [
      4841,
      4842
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4842,
    "end": 4843,
    "range": [
      4842,
      4843
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4843,
    "end": 4844,
    "range": [
      4843,
      4844
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4845,
    "end": 4846,
    "range": [
      4845,
      4846
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4846,
    "end": 4847,
    "range": [
      4846,
      4847
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4848,
    "end": 4855,
    "range": [
      4848,
      4855
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4856,
    "end": 4864,
    "range": [
      4856,
      4864
    ]
  },
  {
    "type": "Identifier",
    "value": "fd3",
    "start": 4865,
    "end": 4868,
    "range": [
      4865,
      4868
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4868,
    "end": 4869,
    "range": [
      4868,
      4869
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4869,
    "end": 4874,
    "range": [
      4869,
      4874
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4875,
    "end": 4876,
    "range": [
      4875,
      4876
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4877,
    "end": 4884,
    "range": [
      4877,
      4884
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4885,
    "end": 4893,
    "range": [
      4885,
      4893
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4894,
    "end": 4900,
    "range": [
      4894,
      4900
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4900,
    "end": 4901,
    "range": [
      4900,
      4901
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4901,
    "end": 4902,
    "range": [
      4901,
      4902
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4903,
    "end": 4904,
    "range": [
      4903,
      4904
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4905,
    "end": 4913,
    "range": [
      4905,
      4913
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4914,
    "end": 4920,
    "range": [
      4914,
      4920
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4920,
    "end": 4921,
    "range": [
      4920,
      4921
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4921,
    "end": 4922,
    "range": [
      4921,
      4922
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4922,
    "end": 4923,
    "range": [
      4922,
      4923
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4923,
    "end": 4924,
    "range": [
      4923,
      4924
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4924,
    "end": 4928,
    "range": [
      4924,
      4928
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4928,
    "end": 4929,
    "range": [
      4928,
      4929
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4930,
    "end": 4931,
    "range": [
      4930,
      4931
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4931,
    "end": 4932,
    "range": [
      4931,
      4932
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4932,
    "end": 4933,
    "range": [
      4932,
      4933
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4934,
    "end": 4935,
    "range": [
      4934,
      4935
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4935,
    "end": 4936,
    "range": [
      4935,
      4936
    ]
  },
  {
    "type": "Identifier",
    "value": "fd1",
    "start": 4938,
    "end": 4941,
    "range": [
      4938,
      4941
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4941,
    "end": 4942,
    "range": [
      4941,
      4942
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4942,
    "end": 4943,
    "range": [
      4942,
      4943
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4943,
    "end": 4950,
    "range": [
      4943,
      4950
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4950,
    "end": 4951,
    "range": [
      4950,
      4951
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 4952,
    "end": 4959,
    "range": [
      4952,
      4959
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4959,
    "end": 4960,
    "range": [
      4959,
      4960
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4960,
    "end": 4961,
    "range": [
      4960,
      4961
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4961,
    "end": 4962,
    "range": [
      4961,
      4962
    ]
  },
  {
    "type": "Identifier",
    "value": "fd1",
    "start": 4963,
    "end": 4966,
    "range": [
      4963,
      4966
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4966,
    "end": 4967,
    "range": [
      4966,
      4967
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4967,
    "end": 4968,
    "range": [
      4967,
      4968
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4968,
    "end": 4969,
    "range": [
      4968,
      4969
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4969,
    "end": 4970,
    "range": [
      4969,
      4970
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4971,
    "end": 4972,
    "range": [
      4971,
      4972
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4972,
    "end": 4973,
    "range": [
      4972,
      4973
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 4974,
    "end": 4975,
    "range": [
      4974,
      4975
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4975,
    "end": 4976,
    "range": [
      4975,
      4976
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4976,
    "end": 4977,
    "range": [
      4976,
      4977
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4977,
    "end": 4978,
    "range": [
      4977,
      4978
    ]
  },
  {
    "type": "Identifier",
    "value": "fd2",
    "start": 4979,
    "end": 4982,
    "range": [
      4979,
      4982
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4982,
    "end": 4983,
    "range": [
      4982,
      4983
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4983,
    "end": 4984,
    "range": [
      4983,
      4984
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4984,
    "end": 4991,
    "range": [
      4984,
      4991
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4991,
    "end": 4992,
    "range": [
      4991,
      4992
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 4993,
    "end": 5000,
    "range": [
      4993,
      5000
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5000,
    "end": 5001,
    "range": [
      5000,
      5001
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5001,
    "end": 5002,
    "range": [
      5001,
      5002
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5002,
    "end": 5003,
    "range": [
      5002,
      5003
    ]
  },
  {
    "type": "Identifier",
    "value": "fd2",
    "start": 5004,
    "end": 5007,
    "range": [
      5004,
      5007
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5007,
    "end": 5008,
    "range": [
      5007,
      5008
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5008,
    "end": 5009,
    "range": [
      5008,
      5009
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5009,
    "end": 5010,
    "range": [
      5009,
      5010
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5010,
    "end": 5011,
    "range": [
      5010,
      5011
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5012,
    "end": 5013,
    "range": [
      5012,
      5013
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5013,
    "end": 5014,
    "range": [
      5013,
      5014
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 5015,
    "end": 5016,
    "range": [
      5015,
      5016
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5016,
    "end": 5017,
    "range": [
      5016,
      5017
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5017,
    "end": 5018,
    "range": [
      5017,
      5018
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5018,
    "end": 5019,
    "range": [
      5018,
      5019
    ]
  },
  {
    "type": "Identifier",
    "value": "fd3",
    "start": 5020,
    "end": 5023,
    "range": [
      5020,
      5023
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5023,
    "end": 5024,
    "range": [
      5023,
      5024
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5024,
    "end": 5025,
    "range": [
      5024,
      5025
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 5025,
    "end": 5032,
    "range": [
      5025,
      5032
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5032,
    "end": 5033,
    "range": [
      5032,
      5033
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 5034,
    "end": 5041,
    "range": [
      5034,
      5041
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5041,
    "end": 5042,
    "range": [
      5041,
      5042
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5042,
    "end": 5043,
    "range": [
      5042,
      5043
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5043,
    "end": 5044,
    "range": [
      5043,
      5044
    ]
  },
  {
    "type": "Identifier",
    "value": "fd3",
    "start": 5045,
    "end": 5048,
    "range": [
      5045,
      5048
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5048,
    "end": 5049,
    "range": [
      5048,
      5049
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5049,
    "end": 5050,
    "range": [
      5049,
      5050
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5050,
    "end": 5051,
    "range": [
      5050,
      5051
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5051,
    "end": 5052,
    "range": [
      5051,
      5052
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5053,
    "end": 5054,
    "range": [
      5053,
      5054
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5054,
    "end": 5055,
    "range": [
      5054,
      5055
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 5056,
    "end": 5057,
    "range": [
      5056,
      5057
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5057,
    "end": 5058,
    "range": [
      5057,
      5058
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5058,
    "end": 5059,
    "range": [
      5058,
      5059
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5059,
    "end": 5060,
    "range": [
      5059,
      5060
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5062,
    "end": 5069,
    "range": [
      5062,
      5069
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5070,
    "end": 5078,
    "range": [
      5070,
      5078
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 5079,
    "end": 5082,
    "range": [
      5079,
      5082
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5082,
    "end": 5083,
    "range": [
      5082,
      5083
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5083,
    "end": 5088,
    "range": [
      5083,
      5088
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5089,
    "end": 5090,
    "range": [
      5089,
      5090
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5091,
    "end": 5098,
    "range": [
      5091,
      5098
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5099,
    "end": 5100,
    "range": [
      5099,
      5100
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5101,
    "end": 5104,
    "range": [
      5101,
      5104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5104,
    "end": 5105,
    "range": [
      5104,
      5105
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5106,
    "end": 5113,
    "range": [
      5106,
      5113
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5113,
    "end": 5114,
    "range": [
      5113,
      5114
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5114,
    "end": 5115,
    "range": [
      5114,
      5115
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5116,
    "end": 5117,
    "range": [
      5116,
      5117
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5117,
    "end": 5118,
    "range": [
      5117,
      5118
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5118,
    "end": 5119,
    "range": [
      5118,
      5119
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5119,
    "end": 5120,
    "range": [
      5119,
      5120
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5120,
    "end": 5121,
    "range": [
      5120,
      5121
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 5121,
    "end": 5124,
    "range": [
      5121,
      5124
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 5124,
    "end": 5128,
    "range": [
      5124,
      5128
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5128,
    "end": 5129,
    "range": [
      5128,
      5129
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5130,
    "end": 5131,
    "range": [
      5130,
      5131
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5131,
    "end": 5132,
    "range": [
      5131,
      5132
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5132,
    "end": 5133,
    "range": [
      5132,
      5133
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5134,
    "end": 5135,
    "range": [
      5134,
      5135
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5135,
    "end": 5136,
    "range": [
      5135,
      5136
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 5138,
    "end": 5141,
    "range": [
      5138,
      5141
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5141,
    "end": 5142,
    "range": [
      5141,
      5142
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5142,
    "end": 5143,
    "range": [
      5142,
      5143
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5144,
    "end": 5147,
    "range": [
      5144,
      5147
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5147,
    "end": 5148,
    "range": [
      5147,
      5148
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5149,
    "end": 5150,
    "range": [
      5149,
      5150
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 5150,
    "end": 5157,
    "range": [
      5150,
      5157
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5157,
    "end": 5158,
    "range": [
      5157,
      5158
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 5159,
    "end": 5162,
    "range": [
      5159,
      5162
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5162,
    "end": 5163,
    "range": [
      5162,
      5163
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5164,
    "end": 5165,
    "range": [
      5164,
      5165
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5165,
    "end": 5166,
    "range": [
      5165,
      5166
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5167,
    "end": 5168,
    "range": [
      5167,
      5168
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5169,
    "end": 5172,
    "range": [
      5169,
      5172
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5172,
    "end": 5173,
    "range": [
      5172,
      5173
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5174,
    "end": 5175,
    "range": [
      5174,
      5175
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 5175,
    "end": 5179,
    "range": [
      5175,
      5179
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5179,
    "end": 5180,
    "range": [
      5179,
      5180
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5180,
    "end": 5181,
    "range": [
      5180,
      5181
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5181,
    "end": 5182,
    "range": [
      5181,
      5182
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5182,
    "end": 5183,
    "range": [
      5182,
      5183
    ]
  }
]
```
