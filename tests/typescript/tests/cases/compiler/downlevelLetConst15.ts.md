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
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 89
              },
              "init": {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 92,
                "end": 94
              },
              "definite": false,
              "start": 88,
              "end": 94
            }
          ],
          "declare": false,
          "start": 82,
          "end": 95
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
              "start": 100,
              "end": 103
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 105
              }
            ],
            "optional": false,
            "start": 100,
            "end": 106
          },
          "directive": null,
          "start": 100,
          "end": 107
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
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
                    "start": 120,
                    "end": 122
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 123
              },
              "init": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 127,
                    "end": 128
                  }
                ],
                "start": 126,
                "end": 129
              },
              "definite": false,
              "start": 119,
              "end": 129
            }
          ],
          "declare": false,
          "start": 113,
          "end": 130
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
              "start": 135,
              "end": 138
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z0",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 141
              }
            ],
            "optional": false,
            "start": 135,
            "end": 142
          },
          "directive": null,
          "start": 135,
          "end": 143
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
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
                          "start": 156,
                          "end": 157
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 159,
                          "end": 161
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 156,
                        "end": 161
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 155,
                    "end": 162
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 163
              },
              "init": {
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
                          "start": 168,
                          "end": 169
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 171,
                          "end": 172
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 168,
                        "end": 172
                      }
                    ],
                    "start": 167,
                    "end": 173
                  }
                ],
                "start": 166,
                "end": 174
              },
              "definite": false,
              "start": 154,
              "end": 174
            }
          ],
          "declare": false,
          "start": 148,
          "end": 174
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
              "start": 179,
              "end": 182
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z1",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 185
              }
            ],
            "optional": false,
            "start": 179,
            "end": 186
          },
          "directive": null,
          "start": 179,
          "end": 187
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
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
                      "start": 199,
                      "end": 200
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 204
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 199,
                    "end": 204
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 205
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
                      "start": 210,
                      "end": 211
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 213,
                      "end": 214
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 210,
                    "end": 214
                  }
                ],
                "start": 208,
                "end": 216
              },
              "definite": false,
              "start": 198,
              "end": 216
            }
          ],
          "declare": false,
          "start": 192,
          "end": 217
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
              "start": 222,
              "end": 225
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z2",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 228
              }
            ],
            "optional": false,
            "start": 222,
            "end": 229
          },
          "directive": null,
          "start": 222,
          "end": 230
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
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
                      "start": 242,
                      "end": 243
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 246,
                            "end": 247
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 249,
                            "end": 251
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 246,
                          "end": 251
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 245,
                      "end": 252
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 242,
                    "end": 252
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 253
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
                      "start": 258,
                      "end": 259
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
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 262,
                            "end": 263
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 265,
                            "end": 266
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 262,
                          "end": 266
                        }
                      ],
                      "start": 261,
                      "end": 267
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 258,
                    "end": 267
                  }
                ],
                "start": 256,
                "end": 269
              },
              "definite": false,
              "start": 241,
              "end": 269
            }
          ],
          "declare": false,
          "start": 235,
          "end": 270
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
              "start": 275,
              "end": 278
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z3",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 281
              }
            ],
            "optional": false,
            "start": 275,
            "end": 282
          },
          "directive": null,
          "start": 275,
          "end": 283
        }
      ],
      "start": 76,
      "end": 285
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
          "start": 286,
          "end": 289
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 291
          }
        ],
        "optional": false,
        "start": 286,
        "end": 292
      },
      "directive": null,
      "start": 286,
      "end": 293
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
          "start": 294,
          "end": 297
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z0",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 300
          }
        ],
        "optional": false,
        "start": 294,
        "end": 301
      },
      "directive": null,
      "start": 294,
      "end": 302
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
          "start": 303,
          "end": 306
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null,
            "start": 307,
            "end": 309
          }
        ],
        "optional": false,
        "start": 303,
        "end": 310
      },
      "directive": null,
      "start": 303,
      "end": 311
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
          "start": 312,
          "end": 315
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 318
          }
        ],
        "optional": false,
        "start": 312,
        "end": 319
      },
      "directive": null,
      "start": 312,
      "end": 320
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
          "start": 321,
          "end": 324
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z3",
            "optional": false,
            "typeAnnotation": null,
            "start": 325,
            "end": 327
          }
        ],
        "optional": false,
        "start": 321,
        "end": 328
      },
      "directive": null,
      "start": 321,
      "end": 329
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
            "start": 334,
            "end": 336
          },
          "init": null,
          "definite": false,
          "start": 334,
          "end": 336
        }
      ],
      "declare": false,
      "start": 330,
      "end": 337
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
            "start": 342,
            "end": 343
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 346,
            "end": 350
          },
          "definite": false,
          "start": 342,
          "end": 350
        }
      ],
      "declare": false,
      "start": 338,
      "end": 351
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 365
              },
              "init": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 368,
                "end": 370
              },
              "definite": false,
              "start": 364,
              "end": 370
            }
          ],
          "declare": false,
          "start": 358,
          "end": 371
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
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
                    "start": 383,
                    "end": 385
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 386
              },
              "init": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 390,
                    "end": 394
                  }
                ],
                "start": 389,
                "end": 395
              },
              "definite": false,
              "start": 382,
              "end": 395
            }
          ],
          "declare": false,
          "start": 376,
          "end": 395
        },
        {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 416,
                    "end": 417
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 420,
                    "end": 421
                  },
                  "definite": false,
                  "start": 416,
                  "end": 421
                }
              ],
              "declare": false,
              "start": 410,
              "end": 422
            },
            {
              "type": "VariableDeclaration",
              "kind": "const",
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
                          "start": 438,
                          "end": 439
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 441,
                          "end": 443
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 438,
                        "end": 443
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 437,
                    "end": 444
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
                          "start": 449,
                          "end": 450
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 452,
                          "end": 453
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 449,
                        "end": 453
                      }
                    ],
                    "start": 447,
                    "end": 455
                  },
                  "definite": false,
                  "start": 437,
                  "end": 455
                }
              ],
              "declare": false,
              "start": 431,
              "end": 455
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
                  "start": 464,
                  "end": 467
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 468,
                    "end": 469
                  }
                ],
                "optional": false,
                "start": 464,
                "end": 470
              },
              "directive": null,
              "start": 464,
              "end": 471
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
                  "start": 480,
                  "end": 483
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 484,
                    "end": 486
                  }
                ],
                "optional": false,
                "start": 480,
                "end": 487
              },
              "directive": null,
              "start": 480,
              "end": 488
            }
          ],
          "start": 400,
          "end": 494
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
              "start": 499,
              "end": 502
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 503,
                "end": 504
              }
            ],
            "optional": false,
            "start": 499,
            "end": 505
          },
          "directive": null,
          "start": 499,
          "end": 506
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
              "start": 511,
              "end": 514
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z6",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 517
              }
            ],
            "optional": false,
            "start": 511,
            "end": 518
          },
          "directive": null,
          "start": 511,
          "end": 519
        }
      ],
      "start": 352,
      "end": 521
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
          "start": 522,
          "end": 525
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 526,
            "end": 527
          }
        ],
        "optional": false,
        "start": 522,
        "end": 528
      },
      "directive": null,
      "start": 522,
      "end": 529
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
          "start": 530,
          "end": 533
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z6",
            "optional": false,
            "typeAnnotation": null,
            "start": 534,
            "end": 536
          }
        ],
        "optional": false,
        "start": 530,
        "end": 537
      },
      "directive": null,
      "start": 530,
      "end": 538
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
            "start": 544,
            "end": 545
          },
          "init": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 548,
            "end": 553
          },
          "definite": false,
          "start": 544,
          "end": 553
        }
      ],
      "declare": false,
      "start": 540,
      "end": 554
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
            "start": 559,
            "end": 561
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 564,
            "end": 565
          },
          "definite": false,
          "start": 559,
          "end": 565
        }
      ],
      "declare": false,
      "start": 555,
      "end": 566
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 580
              },
              "init": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 583,
                "end": 585
              },
              "definite": false,
              "start": 579,
              "end": 585
            }
          ],
          "declare": false,
          "start": 573,
          "end": 586
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
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
                    "start": 598,
                    "end": 600
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 597,
                "end": 601
              },
              "init": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 605,
                    "end": 606
                  }
                ],
                "start": 604,
                "end": 607
              },
              "definite": false,
              "start": 597,
              "end": 607
            }
          ],
          "declare": false,
          "start": 591,
          "end": 608
        },
        {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 629,
                    "end": 631
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 634,
                    "end": 635
                  },
                  "definite": false,
                  "start": 629,
                  "end": 635
                }
              ],
              "declare": false,
              "start": 623,
              "end": 636
            },
            {
              "type": "VariableDeclaration",
              "kind": "const",
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
                          "start": 652,
                          "end": 653
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_z5",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 655,
                          "end": 658
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 652,
                        "end": 658
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 651,
                    "end": 659
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
                          "start": 664,
                          "end": 665
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 667,
                          "end": 668
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 664,
                        "end": 668
                      }
                    ],
                    "start": 662,
                    "end": 670
                  },
                  "definite": false,
                  "start": 651,
                  "end": 670
                }
              ],
              "declare": false,
              "start": 645,
              "end": 671
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
                  "start": 721,
                  "end": 724
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 725,
                    "end": 727
                  }
                ],
                "optional": false,
                "start": 721,
                "end": 728
              },
              "directive": null,
              "start": 721,
              "end": 729
            }
          ],
          "start": 613,
          "end": 735
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
              "start": 740,
              "end": 743
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 744,
                "end": 745
              }
            ],
            "optional": false,
            "start": 740,
            "end": 746
          },
          "directive": null,
          "start": 740,
          "end": 747
        }
      ],
      "start": 567,
      "end": 749
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
          "start": 750,
          "end": 753
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 754,
            "end": 755
          }
        ],
        "optional": false,
        "start": 750,
        "end": 756
      },
      "directive": null,
      "start": 750,
      "end": 757
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 757
}
```
