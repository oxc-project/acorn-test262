__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "'use strict'",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 33
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 37,
              "end": 40
            },
            "start": 35,
            "end": 40
          },
          "start": 34,
          "end": 40
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 13,
      "end": 42
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 52,
            "end": 54
          },
          "definite": false,
          "start": 48,
          "end": 54
        }
      ],
      "declare": false,
      "start": 44,
      "end": 55
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
            "name": "z0",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 62
          },
          "init": null,
          "definite": false,
          "start": 60,
          "end": 62
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 66
          },
          "init": null,
          "definite": false,
          "start": 64,
          "end": 66
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 70
          },
          "init": null,
          "definite": false,
          "start": 68,
          "end": 70
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z3",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 74
          },
          "init": null,
          "definite": false,
          "start": 72,
          "end": 74
        }
      ],
      "declare": false,
      "start": 56,
      "end": 75
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 87
              },
              "init": {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 90,
                "end": 92
              },
              "definite": false,
              "start": 86,
              "end": 92
            }
          ],
          "declare": false,
          "start": 82,
          "end": 93
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 101
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 103
              }
            ],
            "optional": false,
            "start": 98,
            "end": 104
          },
          "directive": null,
          "start": 98,
          "end": 105
        },
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 118
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 119
              },
              "init": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 123,
                    "end": 124
                  }
                ],
                "start": 122,
                "end": 125
              },
              "definite": false,
              "start": 115,
              "end": 125
            }
          ],
          "declare": false,
          "start": 111,
          "end": 126
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 134
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z0",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 137
              }
            ],
            "optional": false,
            "start": 131,
            "end": 138
          },
          "directive": null,
          "start": 131,
          "end": 139
        },
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 151
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 152
              },
              "init": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 156,
                    "end": 157
                  }
                ],
                "start": 155,
                "end": 158
              },
              "definite": false,
              "start": 148,
              "end": 158
            }
          ],
          "declare": false,
          "start": 144,
          "end": 158
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 166
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z1",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 169
              }
            ],
            "optional": false,
            "start": 163,
            "end": 170
          },
          "directive": null,
          "start": 163,
          "end": 171
        },
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 181,
                      "end": 182
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 186
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 181,
                    "end": 186
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 187
              },
              "init": {
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
                      "start": 192,
                      "end": 193
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 195,
                      "end": 196
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 192,
                    "end": 196
                  }
                ],
                "start": 190,
                "end": 198
              },
              "definite": false,
              "start": 180,
              "end": 198
            }
          ],
          "declare": false,
          "start": 176,
          "end": 199
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 207
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z2",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 210
              }
            ],
            "optional": false,
            "start": 204,
            "end": 211
          },
          "directive": null,
          "start": 204,
          "end": 212
        },
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 222,
                      "end": 223
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 227
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 222,
                    "end": 227
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 228
              },
              "init": {
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
                      "start": 233,
                      "end": 234
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 236,
                      "end": 237
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 233,
                    "end": 237
                  }
                ],
                "start": 231,
                "end": 239
              },
              "definite": false,
              "start": 221,
              "end": 239
            }
          ],
          "declare": false,
          "start": 217,
          "end": 240
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 248
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z3",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 251
              }
            ],
            "optional": false,
            "start": 245,
            "end": 252
          },
          "directive": null,
          "start": 245,
          "end": 253
        }
      ],
      "start": 76,
      "end": 255
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 256,
          "end": 259
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 261
          }
        ],
        "optional": false,
        "start": 256,
        "end": 262
      },
      "directive": null,
      "start": 256,
      "end": 263
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 264,
          "end": 267
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z0",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 270
          }
        ],
        "optional": false,
        "start": 264,
        "end": 271
      },
      "directive": null,
      "start": 264,
      "end": 272
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 276
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 279
          }
        ],
        "optional": false,
        "start": 273,
        "end": 280
      },
      "directive": null,
      "start": 273,
      "end": 281
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 282,
          "end": 285
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 288
          }
        ],
        "optional": false,
        "start": 282,
        "end": 289
      },
      "directive": null,
      "start": 282,
      "end": 290
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 291,
          "end": 294
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z3",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 297
          }
        ],
        "optional": false,
        "start": 291,
        "end": 298
      },
      "directive": null,
      "start": 291,
      "end": 299
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
            "name": "z6",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 306
          },
          "init": null,
          "definite": false,
          "start": 304,
          "end": 306
        }
      ],
      "declare": false,
      "start": 300,
      "end": 307
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 313
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 316,
            "end": 320
          },
          "definite": false,
          "start": 312,
          "end": 320
        }
      ],
      "declare": false,
      "start": 308,
      "end": 321
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 333
              },
              "init": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 336,
                "end": 338
              },
              "definite": false,
              "start": 332,
              "end": 338
            }
          ],
          "declare": false,
          "start": 328,
          "end": 339
        },
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 351
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 348,
                "end": 352
              },
              "init": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 356,
                    "end": 360
                  }
                ],
                "start": 355,
                "end": 361
              },
              "definite": false,
              "start": 348,
              "end": 361
            }
          ],
          "declare": false,
          "start": 344,
          "end": 361
        },
        {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 380,
                    "end": 381
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 384,
                    "end": 385
                  },
                  "definite": false,
                  "start": 380,
                  "end": 385
                }
              ],
              "declare": false,
              "start": 376,
              "end": 386
            },
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 400,
                          "end": 401
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 403,
                          "end": 405
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 400,
                        "end": 405
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 399,
                    "end": 406
                  },
                  "init": {
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
                          "start": 410,
                          "end": 411
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 413,
                          "end": 414
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 410,
                        "end": 414
                      }
                    ],
                    "start": 409,
                    "end": 415
                  },
                  "definite": false,
                  "start": 399,
                  "end": 415
                }
              ],
              "declare": false,
              "start": 395,
              "end": 415
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "use",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 427
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 428,
                    "end": 429
                  }
                ],
                "optional": false,
                "start": 424,
                "end": 430
              },
              "directive": null,
              "start": 424,
              "end": 431
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "use",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 440,
                  "end": 443
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 444,
                    "end": 446
                  }
                ],
                "optional": false,
                "start": 440,
                "end": 447
              },
              "directive": null,
              "start": 440,
              "end": 448
            }
          ],
          "start": 366,
          "end": 454
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 462
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 464
              }
            ],
            "optional": false,
            "start": 459,
            "end": 465
          },
          "directive": null,
          "start": 459,
          "end": 466
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 471,
              "end": 474
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z6",
                "optional": false,
                "typeAnnotation": null,
                "start": 475,
                "end": 477
              }
            ],
            "optional": false,
            "start": 471,
            "end": 478
          },
          "directive": null,
          "start": 471,
          "end": 479
        }
      ],
      "start": 322,
      "end": 481
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 482,
          "end": 485
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 487
          }
        ],
        "optional": false,
        "start": 482,
        "end": 488
      },
      "directive": null,
      "start": 482,
      "end": 489
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 490,
          "end": 493
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z6",
            "optional": false,
            "typeAnnotation": null,
            "start": 494,
            "end": 496
          }
        ],
        "optional": false,
        "start": 490,
        "end": 497
      },
      "directive": null,
      "start": 490,
      "end": 498
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 505
          },
          "init": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 508,
            "end": 513
          },
          "definite": false,
          "start": 504,
          "end": 513
        }
      ],
      "declare": false,
      "start": 500,
      "end": 514
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
            "name": "z5",
            "optional": false,
            "typeAnnotation": null,
            "start": 519,
            "end": 521
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 524,
            "end": 525
          },
          "definite": false,
          "start": 519,
          "end": 525
        }
      ],
      "declare": false,
      "start": 515,
      "end": 526
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 537,
                "end": 538
              },
              "init": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 541,
                "end": 543
              },
              "definite": false,
              "start": 537,
              "end": 543
            }
          ],
          "declare": false,
          "start": 533,
          "end": 544
        },
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 554,
                    "end": 556
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 553,
                "end": 557
              },
              "init": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 561,
                    "end": 562
                  }
                ],
                "start": 560,
                "end": 563
              },
              "definite": false,
              "start": 553,
              "end": 563
            }
          ],
          "declare": false,
          "start": 549,
          "end": 564
        },
        {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 583,
                    "end": 585
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 588,
                    "end": 589
                  },
                  "definite": false,
                  "start": 583,
                  "end": 589
                }
              ],
              "declare": false,
              "start": 579,
              "end": 590
            },
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 604,
                          "end": 605
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_z5",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 607,
                          "end": 610
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 604,
                        "end": 610
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 603,
                    "end": 611
                  },
                  "init": {
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
                          "start": 616,
                          "end": 617
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 619,
                          "end": 620
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 616,
                        "end": 620
                      }
                    ],
                    "start": 614,
                    "end": 622
                  },
                  "definite": false,
                  "start": 603,
                  "end": 622
                }
              ],
              "declare": false,
              "start": 599,
              "end": 623
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "use",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 673,
                  "end": 676
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 677,
                    "end": 679
                  }
                ],
                "optional": false,
                "start": 673,
                "end": 680
              },
              "directive": null,
              "start": 673,
              "end": 681
            }
          ],
          "start": 569,
          "end": 687
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 692,
              "end": 695
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 696,
                "end": 697
              }
            ],
            "optional": false,
            "start": 692,
            "end": 698
          },
          "directive": null,
          "start": 692,
          "end": 699
        }
      ],
      "start": 527,
      "end": 701
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 702,
          "end": 705
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 706,
            "end": 707
          }
        ],
        "optional": false,
        "start": 702,
        "end": 708
      },
      "directive": null,
      "start": 702,
      "end": 709
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 709
}
```
