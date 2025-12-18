__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 27
          },
          "start": 23,
          "end": 27
        },
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 32
          },
          "start": 28,
          "end": 32
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 40
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 51
                },
                "start": 47,
                "end": 51
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 60
                },
                "start": 56,
                "end": 60
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 71
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 74,
                "end": 76
              },
              "expression": false,
              "start": 71,
              "end": 76
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 47,
            "end": 76
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 86
                },
                "start": 82,
                "end": 86
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 95
                },
                "start": 91,
                "end": 95
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 105
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 117,
                      "end": 118
                    },
                    "start": 110,
                    "end": 119
                  }
                ],
                "start": 108,
                "end": 121
              },
              "expression": false,
              "start": 105,
              "end": 121
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 82,
            "end": 121
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 131
                },
                "start": 127,
                "end": 131
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 140
                },
                "start": 136,
                "end": 140
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 150
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 158,
                      "end": 164
                    },
                    "start": 156,
                    "end": 164
                  },
                  "start": 151,
                  "end": 164
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 166,
                "end": 169
              },
              "expression": false,
              "start": 150,
              "end": 169
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 127,
            "end": 169
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 179
                },
                "start": 175,
                "end": 179
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 188
                },
                "start": 184,
                "end": 188
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 194
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 197,
              "end": 198
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 175,
            "end": 199
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 209
                },
                "start": 205,
                "end": 209
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 218
                },
                "start": 214,
                "end": 218
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 233
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 236,
              "end": 237
            },
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 205,
            "end": 238
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 248
                },
                "start": 244,
                "end": 248
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 257
                },
                "start": 253,
                "end": 257
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "method",
              "start": 269,
              "end": 276
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 279,
                "end": 281
              },
              "expression": false,
              "start": 276,
              "end": 281
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 244,
            "end": 281
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 288,
                  "end": 291
                },
                "start": 287,
                "end": 291
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 300
                },
                "start": 296,
                "end": 300
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "x",
              "start": 316,
              "end": 318
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 330,
                      "end": 331
                    },
                    "start": 323,
                    "end": 332
                  }
                ],
                "start": 321,
                "end": 334
              },
              "expression": false,
              "start": 318,
              "end": 334
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 287,
            "end": 334
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 344
                },
                "start": 340,
                "end": 344
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 353
                },
                "start": 349,
                "end": 353
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "x",
              "start": 369,
              "end": 371
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 379,
                      "end": 385
                    },
                    "start": 377,
                    "end": 385
                  },
                  "start": 372,
                  "end": 385
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 387,
                "end": 390
              },
              "expression": false,
              "start": 371,
              "end": 390
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 340,
            "end": 390
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 400
                },
                "start": 396,
                "end": 400
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 409
                },
                "start": 405,
                "end": 409
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "y",
              "start": 421,
              "end": 423
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 426,
              "end": 427
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 396,
            "end": 428
          },
          {
            "type": "AccessorProperty",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 435,
                  "end": 438
                },
                "start": 434,
                "end": 438
              },
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 444,
                  "end": 447
                },
                "start": 443,
                "end": 447
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "z",
              "start": 468,
              "end": 470
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 473,
              "end": 474
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 434,
            "end": 475
          }
        ],
        "start": 41,
        "end": 477
      },
      "abstract": false,
      "declare": false,
      "start": 23,
      "end": 477
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 477
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
    "value": "var",
    "start": 8,
    "end": 11,
    "range": [
      8,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 12,
    "end": 15,
    "range": [
      12,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 17,
    "end": 20,
    "range": [
      17,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 24,
    "end": 27,
    "range": [
      24,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 29,
    "end": 32,
    "range": [
      29,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 33,
    "end": 38,
    "range": [
      33,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 48,
    "end": 51,
    "range": [
      48,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 57,
    "end": 60,
    "range": [
      57,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 65,
    "end": 71,
    "range": [
      65,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 83,
    "end": 86,
    "range": [
      83,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 92,
    "end": 95,
    "range": [
      92,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 100,
    "end": 103,
    "range": [
      100,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 110,
    "end": 116,
    "range": [
      110,
      116
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 128,
    "end": 131,
    "range": [
      128,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 137,
    "end": 140,
    "range": [
      137,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 145,
    "end": 148,
    "range": [
      145,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 151,
    "end": 156,
    "range": [
      151,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 158,
    "end": 164,
    "range": [
      158,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 176,
    "end": 179,
    "range": [
      176,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 185,
    "end": 188,
    "range": [
      185,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 206,
    "end": 209,
    "range": [
      206,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 215,
    "end": 218,
    "range": [
      215,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 223,
    "end": 231,
    "range": [
      223,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 245,
    "end": 248,
    "range": [
      245,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 254,
    "end": 257,
    "range": [
      254,
      257
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 262,
    "end": 268,
    "range": [
      262,
      268
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 269,
    "end": 276,
    "range": [
      269,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 288,
    "end": 291,
    "range": [
      288,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 297,
    "end": 300,
    "range": [
      297,
      300
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 305,
    "end": 311,
    "range": [
      305,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 312,
    "end": 315,
    "range": [
      312,
      315
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 316,
    "end": 318,
    "range": [
      316,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 323,
    "end": 329,
    "range": [
      323,
      329
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 341,
    "end": 344,
    "range": [
      341,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 350,
    "end": 353,
    "range": [
      350,
      353
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 358,
    "end": 364,
    "range": [
      358,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 365,
    "end": 368,
    "range": [
      365,
      368
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 369,
    "end": 371,
    "range": [
      369,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 372,
    "end": 377,
    "range": [
      372,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 379,
    "end": 385,
    "range": [
      379,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 397,
    "end": 400,
    "range": [
      397,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 406,
    "end": 409,
    "range": [
      406,
      409
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 414,
    "end": 420,
    "range": [
      414,
      420
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "y",
    "start": 421,
    "end": 423,
    "range": [
      421,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 435,
    "end": 438,
    "range": [
      435,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 444,
    "end": 447,
    "range": [
      444,
      447
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 452,
    "end": 458,
    "range": [
      452,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 459,
    "end": 467,
    "range": [
      459,
      467
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "z",
    "start": 468,
    "end": 470,
    "range": [
      468,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  }
]
```
