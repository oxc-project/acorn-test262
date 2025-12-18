__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "action",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 15
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 27
              },
              "typeArguments": null,
              "start": 19,
              "end": 27
            },
            "start": 17,
            "end": 27
          },
          "start": 16,
          "end": 27
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 29,
        "end": 31
      },
      "expression": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 112,
                      "end": 118
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 121,
                      "end": 127
                    }
                  ],
                  "start": 112,
                  "end": 127
                },
                "start": 110,
                "end": 127
              },
              "start": 108,
              "end": 127
            },
            "init": null,
            "definite": false,
            "start": 108,
            "end": 127
          }
        ],
        "declare": false,
        "start": 104,
        "end": 128
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 97,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 131
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 134,
          "end": 139
        },
        "start": 129,
        "end": 139
      },
      "directive": null,
      "start": 129,
      "end": 140
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": null,
          "start": 141,
          "end": 147
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 158
                  },
                  "directive": null,
                  "start": 156,
                  "end": 158
                }
              ],
              "start": 154,
              "end": 182
            },
            "id": null,
            "generator": false,
            "start": 148,
            "end": 182
          }
        ],
        "optional": false,
        "start": 141,
        "end": 183
      },
      "directive": null,
      "start": 141,
      "end": 184
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 197
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 197
          },
          "exportKind": "value",
          "start": 195,
          "end": 197
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 186,
      "end": 200
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 209,
                    "end": 215
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 218,
                    "end": 224
                  }
                ],
                "start": 209,
                "end": 224
              },
              "start": 207,
              "end": 224
            },
            "start": 205,
            "end": 224
          },
          "init": null,
          "definite": false,
          "start": 205,
          "end": 224
        }
      ],
      "declare": false,
      "start": 201,
      "end": 225
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 226,
          "end": 228
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 231,
          "end": 236
        },
        "start": 226,
        "end": 236
      },
      "directive": null,
      "start": 226,
      "end": 237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": null,
          "start": 238,
          "end": 244
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 253,
                    "end": 255
                  },
                  "directive": null,
                  "start": 253,
                  "end": 255
                }
              ],
              "start": 251,
              "end": 279
            },
            "id": null,
            "generator": false,
            "start": 245,
            "end": 279
          }
        ],
        "optional": false,
        "start": 238,
        "end": 280
      },
      "directive": null,
      "start": 238,
      "end": 281
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 294
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 301
          },
          "exportKind": "value",
          "start": 292,
          "end": 301
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 283,
      "end": 304
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 313,
                    "end": 319
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 322,
                    "end": 328
                  }
                ],
                "start": 313,
                "end": 328
              },
              "start": 311,
              "end": 328
            },
            "start": 309,
            "end": 328
          },
          "init": null,
          "definite": false,
          "start": 309,
          "end": 328
        }
      ],
      "declare": false,
      "start": 305,
      "end": 329
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 330,
          "end": 332
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 335,
          "end": 340
        },
        "start": 330,
        "end": 340
      },
      "directive": null,
      "start": 330,
      "end": 341
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": null,
          "start": 342,
          "end": 348
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 357,
                    "end": 359
                  },
                  "directive": null,
                  "start": 357,
                  "end": 359
                }
              ],
              "start": 355,
              "end": 383
            },
            "id": null,
            "generator": false,
            "start": 349,
            "end": 383
          }
        ],
        "optional": false,
        "start": 342,
        "end": 384
      },
      "directive": null,
      "start": 342,
      "end": 385
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
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 395,
                    "end": 401
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 404,
                    "end": 410
                  }
                ],
                "start": 395,
                "end": 410
              },
              "start": 393,
              "end": 410
            },
            "start": 391,
            "end": 410
          },
          "init": null,
          "definite": false,
          "start": 391,
          "end": 410
        }
      ],
      "declare": false,
      "start": 387,
      "end": 411
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 412,
          "end": 414
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 417,
          "end": 422
        },
        "start": 412,
        "end": 422
      },
      "directive": null,
      "start": 412,
      "end": 423
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": null,
          "start": 424,
          "end": 430
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 439,
                    "end": 441
                  },
                  "directive": null,
                  "start": 439,
                  "end": 441
                }
              ],
              "start": 437,
              "end": 456
            },
            "id": null,
            "generator": false,
            "start": 431,
            "end": 456
          }
        ],
        "optional": false,
        "start": 424,
        "end": 457
      },
      "directive": null,
      "start": 424,
      "end": 458
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "x4",
        "optional": false,
        "typeAnnotation": null,
        "start": 474,
        "end": 476
      },
      "exportKind": "value",
      "start": 459,
      "end": 477
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
            "name": "x5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 487,
                    "end": 493
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 496,
                    "end": 502
                  }
                ],
                "start": 487,
                "end": 502
              },
              "start": 485,
              "end": 502
            },
            "start": 483,
            "end": 502
          },
          "init": null,
          "definite": false,
          "start": 483,
          "end": 502
        }
      ],
      "declare": false,
      "start": 479,
      "end": 503
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 504,
          "end": 506
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 509,
          "end": 514
        },
        "start": 504,
        "end": 514
      },
      "directive": null,
      "start": 504,
      "end": 515
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": null,
          "start": 516,
          "end": 522
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 531,
                    "end": 533
                  },
                  "directive": null,
                  "start": 531,
                  "end": 533
                }
              ],
              "start": 529,
              "end": 548
            },
            "id": null,
            "generator": false,
            "start": 523,
            "end": 548
          }
        ],
        "optional": false,
        "start": 516,
        "end": 549
      },
      "directive": null,
      "start": 516,
      "end": 550
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 550
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 9,
    "end": 15,
    "range": [
      9,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 19,
    "end": 27,
    "range": [
      19,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 97,
    "end": 103,
    "range": [
      97,
      103
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 104,
    "end": 107,
    "range": [
      104,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 108,
    "end": 110,
    "range": [
      108,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 112,
    "end": 118,
    "range": [
      112,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 121,
    "end": 127,
    "range": [
      121,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 129,
    "end": 131,
    "range": [
      129,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 134,
    "end": 139,
    "range": [
      134,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 141,
    "end": 147,
    "range": [
      141,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 151,
    "end": 153,
    "range": [
      151,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 156,
    "end": 158,
    "range": [
      156,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 186,
    "end": 192,
    "range": [
      186,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 195,
    "end": 197,
    "range": [
      195,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 201,
    "end": 204,
    "range": [
      201,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 205,
    "end": 207,
    "range": [
      205,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 209,
    "end": 215,
    "range": [
      209,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 218,
    "end": 224,
    "range": [
      218,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 226,
    "end": 228,
    "range": [
      226,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 231,
    "end": 236,
    "range": [
      231,
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
    "type": "Identifier",
    "value": "action",
    "start": 238,
    "end": 244,
    "range": [
      238,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 248,
    "end": 250,
    "range": [
      248,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 253,
    "end": 255,
    "range": [
      253,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 283,
    "end": 289,
    "range": [
      283,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 292,
    "end": 294,
    "range": [
      292,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 295,
    "end": 297,
    "range": [
      295,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 298,
    "end": 301,
    "range": [
      298,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 305,
    "end": 308,
    "range": [
      305,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 309,
    "end": 311,
    "range": [
      309,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 313,
    "end": 319,
    "range": [
      313,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 322,
    "end": 328,
    "range": [
      322,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 330,
    "end": 332,
    "range": [
      330,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 335,
    "end": 340,
    "range": [
      335,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 342,
    "end": 348,
    "range": [
      342,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 352,
    "end": 354,
    "range": [
      352,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 357,
    "end": 359,
    "range": [
      357,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 387,
    "end": 390,
    "range": [
      387,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 391,
    "end": 393,
    "range": [
      391,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 395,
    "end": 401,
    "range": [
      395,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 404,
    "end": 410,
    "range": [
      404,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 412,
    "end": 414,
    "range": [
      412,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 417,
    "end": 422,
    "range": [
      417,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 424,
    "end": 430,
    "range": [
      424,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 434,
    "end": 436,
    "range": [
      434,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 439,
    "end": 441,
    "range": [
      439,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 459,
    "end": 465,
    "range": [
      459,
      465
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 466,
    "end": 473,
    "range": [
      466,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 474,
    "end": 476,
    "range": [
      474,
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
    "value": "let",
    "start": 479,
    "end": 482,
    "range": [
      479,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 483,
    "end": 485,
    "range": [
      483,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 487,
    "end": 493,
    "range": [
      487,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 496,
    "end": 502,
    "range": [
      496,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 504,
    "end": 506,
    "range": [
      504,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 509,
    "end": 514,
    "range": [
      509,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 516,
    "end": 522,
    "range": [
      516,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 526,
    "end": 528,
    "range": [
      526,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 531,
    "end": 533,
    "range": [
      531,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  }
]
```
