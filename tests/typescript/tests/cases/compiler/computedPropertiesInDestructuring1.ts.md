__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 49
          },
          "init": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 52,
            "end": 57
          },
          "definite": false,
          "start": 46,
          "end": 57
        }
      ],
      "declare": false,
      "start": 42,
      "end": 58
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 68
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 74
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 64,
                "end": 74
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 75
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 82
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 84,
                  "end": 89
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 79,
                "end": 89
              }
            ],
            "start": 78,
            "end": 90
          },
          "definite": false,
          "start": 63,
          "end": 90
        }
      ],
      "declare": false,
      "start": 59,
      "end": 91
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
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 99,
                  "end": 104
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 111
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 98,
                "end": 111
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 112
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 119
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 121,
                  "end": 126
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 116,
                "end": 126
              }
            ],
            "start": 115,
            "end": 127
          },
          "definite": false,
          "start": 97,
          "end": 127
        }
      ],
      "declare": false,
      "start": 93,
      "end": 128
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
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 138
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 147,
              "end": 152
            },
            "id": null,
            "generator": false,
            "start": 141,
            "end": 152
          },
          "definite": false,
          "start": 134,
          "end": 152
        }
      ],
      "declare": false,
      "start": 130,
      "end": 153
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 164
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 160,
                  "end": 166
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 173
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 159,
                "end": 173
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 174
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 181
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 183,
                  "end": 188
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 178,
                "end": 188
              }
            ],
            "start": 177,
            "end": 189
          },
          "definite": false,
          "start": 158,
          "end": 189
        }
      ],
      "declare": false,
      "start": 154,
      "end": 190
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
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 199,
                      "end": 202
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 209
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 198,
                    "end": 209
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 210
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 211
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
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 216,
                      "end": 219
                    },
                    "value": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 221,
                      "end": 226
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 216,
                    "end": 226
                  }
                ],
                "start": 215,
                "end": 227
              }
            ],
            "start": 214,
            "end": 228
          },
          "definite": false,
          "start": 196,
          "end": 228
        }
      ],
      "declare": false,
      "start": 192,
      "end": 229
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
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 237,
                        "end": 241
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 237,
                      "end": 243
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 246,
                      "end": 250
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 236,
                    "end": 250
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 251
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 252
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
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 257,
                      "end": 260
                    },
                    "value": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 262,
                      "end": 267
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 257,
                    "end": 267
                  }
                ],
                "start": 256,
                "end": 268
              }
            ],
            "start": 255,
            "end": 269
          },
          "definite": false,
          "start": 234,
          "end": 269
        }
      ],
      "declare": false,
      "start": 230,
      "end": 270
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 281,
        "end": 283
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 286,
                "end": 291
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 295
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 285,
              "end": 295
            }
          ],
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 300,
                    "end": 303
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 305,
                      "end": 311
                    },
                    "start": 303,
                    "end": 311
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 300,
                  "end": 311
                }
              ],
              "start": 298,
              "end": 313
            },
            "start": 296,
            "end": 313
          },
          "start": 284,
          "end": 313
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 315,
        "end": 317
      },
      "expression": false,
      "start": 272,
      "end": 317
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 327,
        "end": 329
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 335
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 339
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 331,
              "end": 339
            }
          ],
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 344,
                    "end": 347
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 349,
                      "end": 355
                    },
                    "start": 347,
                    "end": 355
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 344,
                  "end": 355
                }
              ],
              "start": 342,
              "end": 357
            },
            "start": 340,
            "end": 357
          },
          "start": 330,
          "end": 357
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 359,
        "end": 361
      },
      "expression": false,
      "start": 318,
      "end": 361
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 373
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 380
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 376,
                "end": 382
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 385,
                "end": 386
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 375,
              "end": 386
            }
          ],
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 391,
                    "end": 394
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 396,
                      "end": 402
                    },
                    "start": 394,
                    "end": 402
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 391,
                  "end": 402
                }
              ],
              "start": 389,
              "end": 404
            },
            "start": 387,
            "end": 404
          },
          "start": 374,
          "end": 404
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 406,
        "end": 408
      },
      "expression": false,
      "start": 362,
      "end": 408
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 418,
        "end": 420
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 424,
                    "end": 427
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 430,
                    "end": 431
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 423,
                  "end": 431
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 422,
              "end": 432
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
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
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 438,
                        "end": 441
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 443,
                          "end": 449
                        },
                        "start": 441,
                        "end": 449
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 438,
                      "end": 449
                    }
                  ],
                  "start": 436,
                  "end": 451
                }
              ],
              "start": 435,
              "end": 452
            },
            "start": 433,
            "end": 452
          },
          "start": 421,
          "end": 452
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 454,
        "end": 456
      },
      "expression": false,
      "start": 409,
      "end": 456
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 466,
        "end": 468
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 472,
                      "end": 476
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 472,
                    "end": 478
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 481,
                    "end": 482
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 471,
                  "end": 482
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 483
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
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
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 489,
                        "end": 492
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 494,
                          "end": 500
                        },
                        "start": 492,
                        "end": 500
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 489,
                      "end": 500
                    }
                  ],
                  "start": 487,
                  "end": 502
                }
              ],
              "start": 486,
              "end": 503
            },
            "start": 484,
            "end": 503
          },
          "start": 469,
          "end": 503
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 505,
        "end": 507
      },
      "expression": false,
      "start": 457,
      "end": 507
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
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 593,
                        "end": 596
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 593,
                      "end": 598
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 601,
                      "end": 605
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 592,
                    "end": 605
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 591,
                "end": 606
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 590,
            "end": 607
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
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 612,
                      "end": 615
                    },
                    "value": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 617,
                      "end": 622
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 612,
                    "end": 622
                  }
                ],
                "start": 611,
                "end": 623
              }
            ],
            "start": 610,
            "end": 624
          },
          "definite": false,
          "start": 590,
          "end": 624
        }
      ],
      "declare": false,
      "start": 586,
      "end": 625
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
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 633,
                          "end": 636
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toExponential",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 637,
                          "end": 650
                        },
                        "optional": false,
                        "computed": false,
                        "start": 633,
                        "end": 650
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 633,
                      "end": 652
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 655,
                      "end": 659
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 632,
                    "end": 659
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 631,
                "end": 660
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 630,
            "end": 661
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
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 666,
                      "end": 669
                    },
                    "value": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 671,
                      "end": 676
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 666,
                    "end": 676
                  }
                ],
                "start": 665,
                "end": 677
              }
            ],
            "start": 664,
            "end": 678
          },
          "definite": false,
          "start": 630,
          "end": 678
        }
      ],
      "declare": false,
      "start": 626,
      "end": 679
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
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
                "start": 712,
                "end": 715
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 718,
                "end": 721
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 711,
              "end": 721
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 710,
          "end": 722
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 726,
                "end": 729
              },
              "value": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 731,
                "end": 736
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 726,
              "end": 736
            }
          ],
          "start": 725,
          "end": 737
        },
        "start": 710,
        "end": 737
      },
      "directive": null,
      "start": 709,
      "end": 739
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 744,
                "end": 749
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": null,
                "start": 752,
                "end": 756
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 743,
              "end": 756
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 742,
          "end": 757
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 761,
                "end": 764
              },
              "value": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 766,
                "end": 771
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 761,
              "end": 771
            }
          ],
          "start": 760,
          "end": 772
        },
        "start": 742,
        "end": 772
      },
      "directive": null,
      "start": 741,
      "end": 774
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 779,
                  "end": 783
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 779,
                "end": 785
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar3",
                "optional": false,
                "typeAnnotation": null,
                "start": 788,
                "end": 792
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 778,
              "end": 792
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 777,
          "end": 793
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 797,
                "end": 800
              },
              "value": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 802,
                "end": 807
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 797,
              "end": 807
            }
          ],
          "start": 796,
          "end": 808
        },
        "start": 777,
        "end": 808
      },
      "directive": null,
      "start": 776,
      "end": 810
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 815,
                    "end": 818
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 821,
                    "end": 825
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 814,
                  "end": 825
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 813,
              "end": 826
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 812,
          "end": 827
        },
        "right": {
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 832,
                    "end": 835
                  },
                  "value": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 837,
                    "end": 842
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 832,
                  "end": 842
                }
              ],
              "start": 831,
              "end": 843
            }
          ],
          "start": 830,
          "end": 844
        },
        "start": 812,
        "end": 844
      },
      "directive": null,
      "start": 812,
      "end": 845
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 849,
                      "end": 853
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 849,
                    "end": 855
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 858,
                    "end": 862
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 848,
                  "end": 862
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 847,
              "end": 863
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 846,
          "end": 864
        },
        "right": {
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 869,
                    "end": 872
                  },
                  "value": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 874,
                    "end": 879
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 869,
                  "end": 879
                }
              ],
              "start": 868,
              "end": 880
            }
          ],
          "start": 867,
          "end": 881
        },
        "start": 846,
        "end": 881
      },
      "directive": null,
      "start": 846,
      "end": 882
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 887,
                      "end": 890
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 887,
                    "end": 892
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 895,
                    "end": 899
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 886,
                  "end": 899
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 885,
              "end": 900
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 884,
          "end": 901
        },
        "right": {
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 906,
                    "end": 909
                  },
                  "value": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 911,
                    "end": 916
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 906,
                  "end": 916
                }
              ],
              "start": 905,
              "end": 917
            }
          ],
          "start": 904,
          "end": 918
        },
        "start": 884,
        "end": 918
      },
      "directive": null,
      "start": 884,
      "end": 919
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
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
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 924,
                      "end": 925
                    },
                    "operator": "+",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 928,
                      "end": 930
                    },
                    "start": 924,
                    "end": 930
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 934,
                    "end": 938
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 922,
                  "end": 938
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 921,
              "end": 939
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 920,
          "end": 940
        },
        "right": {
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 945,
                    "end": 948
                  },
                  "value": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 950,
                    "end": 955
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 945,
                  "end": 955
                }
              ],
              "start": 944,
              "end": 956
            }
          ],
          "start": 943,
          "end": 957
        },
        "start": 920,
        "end": 957
      },
      "directive": null,
      "start": 920,
      "end": 958
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 42,
  "end": 960
}
```
