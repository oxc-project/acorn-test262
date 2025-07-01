__ESTREE_TEST__:PASS:
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
