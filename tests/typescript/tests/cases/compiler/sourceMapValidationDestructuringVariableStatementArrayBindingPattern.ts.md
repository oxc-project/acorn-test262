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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 27,
                      "end": 30
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          },
                          "start": 34,
                          "end": 42
                        },
                        "start": 31,
                        "end": 42
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 45,
                        "end": 49
                      },
                      "start": 43,
                      "end": 49
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 50
                  }
                ],
                "start": 21,
                "end": 52
              },
              "start": 19,
              "end": 52
            },
            "start": 12,
            "end": 52
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 52
        }
      ],
      "declare": true,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 63
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 67,
            "end": 73
          },
          {
            "type": "TSStringKeyword",
            "start": 75,
            "end": 81
          },
          {
            "type": "TSStringKeyword",
            "start": 83,
            "end": 89
          }
        ],
        "start": 66,
        "end": 90
      },
      "declare": false,
      "start": 53,
      "end": 91
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
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 109
                },
                "typeArguments": null,
                "start": 104,
                "end": 109
              },
              "start": 102,
              "end": 109
            },
            "start": 96,
            "end": 109
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 113,
                "end": 114
              },
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 116,
                "end": 123
              },
              {
                "type": "Literal",
                "value": "mowing",
                "raw": "\"mowing\"",
                "start": 125,
                "end": 133
              }
            ],
            "start": 112,
            "end": 134
          },
          "definite": false,
          "start": 96,
          "end": 134
        }
      ],
      "declare": false,
      "start": 92,
      "end": 135
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
            "name": "robotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 153
                },
                "typeArguments": null,
                "start": 148,
                "end": 153
              },
              "start": 146,
              "end": 153
            },
            "start": 140,
            "end": 153
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 157,
                "end": 158
              },
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 160,
                "end": 169
              },
              {
                "type": "Literal",
                "value": "trimming",
                "raw": "\"trimming\"",
                "start": 171,
                "end": 181
              }
            ],
            "start": 156,
            "end": 182
          },
          "definite": false,
          "start": 140,
          "end": 182
        }
      ],
      "declare": false,
      "start": 136,
      "end": 183
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
              null,
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 198
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 199
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 208
          },
          "definite": false,
          "start": 190,
          "end": 208
        }
      ],
      "declare": false,
      "start": 186,
      "end": 209
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
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 222
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 223
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 232
          },
          "definite": false,
          "start": 214,
          "end": 232
        }
      ],
      "declare": false,
      "start": 210,
      "end": 233
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
                "name": "numberA2",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 247
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nameA2",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 255
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "skillA2",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 264
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 265
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 274
          },
          "definite": false,
          "start": 238,
          "end": 274
        }
      ],
      "declare": false,
      "start": 234,
      "end": 275
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
                "name": "numberC2",
                "optional": false,
                "typeAnnotation": null,
                "start": 282,
                "end": 290
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 291
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 295,
                "end": 296
              },
              {
                "type": "Literal",
                "value": "edging",
                "raw": "\"edging\"",
                "start": 298,
                "end": 306
              },
              {
                "type": "Literal",
                "value": "Trimming edges",
                "raw": "\"Trimming edges\"",
                "start": 308,
                "end": 324
              }
            ],
            "start": 294,
            "end": 325
          },
          "definite": false,
          "start": 281,
          "end": 325
        }
      ],
      "declare": false,
      "start": 277,
      "end": 326
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
                "name": "numberC",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 339
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nameC",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 346
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "skillC",
                "optional": false,
                "typeAnnotation": null,
                "start": 348,
                "end": 354
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 355
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 359,
                "end": 360
              },
              {
                "type": "Literal",
                "value": "edging",
                "raw": "\"edging\"",
                "start": 362,
                "end": 370
              },
              {
                "type": "Literal",
                "value": "Trimming edges",
                "raw": "\"Trimming edges\"",
                "start": 372,
                "end": 388
              }
            ],
            "start": 358,
            "end": 389
          },
          "definite": false,
          "start": 331,
          "end": 389
        }
      ],
      "declare": false,
      "start": 327,
      "end": 390
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
                "name": "numberA3",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 405
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "robotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 420
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 407,
                "end": 420
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 421
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 430
          },
          "definite": false,
          "start": 396,
          "end": 430
        }
      ],
      "declare": false,
      "start": 392,
      "end": 431
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameA",
          "optional": false,
          "typeAnnotation": null,
          "start": 437,
          "end": 442
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameA2",
          "optional": false,
          "typeAnnotation": null,
          "start": 446,
          "end": 452
        },
        "start": 437,
        "end": 452
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 467
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 468,
                  "end": 471
                },
                "optional": false,
                "computed": false,
                "start": 460,
                "end": 471
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 472,
                  "end": 479
                }
              ],
              "optional": false,
              "start": 460,
              "end": 480
            },
            "directive": null,
            "start": 460,
            "end": 481
          }
        ],
        "start": 454,
        "end": 483
      },
      "alternate": null,
      "start": 433,
      "end": 483
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 483
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
    "value": "console",
    "start": 12,
    "end": 19,
    "range": [
      12,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 27,
    "end": 30,
    "range": [
      27,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 31,
    "end": 34,
    "range": [
      31,
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
    "value": "string",
    "start": 36,
    "end": 42,
    "range": [
      36,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 45,
    "end": 49,
    "range": [
      45,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 53,
    "end": 57,
    "range": [
      53,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 58,
    "end": 63,
    "range": [
      58,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 67,
    "end": 73,
    "range": [
      67,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 75,
    "end": 81,
    "range": [
      75,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 83,
    "end": 89,
    "range": [
      83,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 92,
    "end": 95,
    "range": [
      92,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 96,
    "end": 102,
    "range": [
      96,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 104,
    "end": 109,
    "range": [
      104,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 116,
    "end": 123,
    "range": [
      116,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 125,
    "end": 133,
    "range": [
      125,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 136,
    "end": 139,
    "range": [
      136,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 140,
    "end": 146,
    "range": [
      140,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 148,
    "end": 153,
    "range": [
      148,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 160,
    "end": 169,
    "range": [
      160,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 171,
    "end": 181,
    "range": [
      171,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 186,
    "end": 189,
    "range": [
      186,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 193,
    "end": 198,
    "range": [
      193,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 202,
    "end": 208,
    "range": [
      202,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 210,
    "end": 213,
    "range": [
      210,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "numberB",
    "start": 215,
    "end": 222,
    "range": [
      215,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "robotB",
    "start": 226,
    "end": 232,
    "range": [
      226,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 234,
    "end": 237,
    "range": [
      234,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA2",
    "start": 239,
    "end": 247,
    "range": [
      239,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 249,
    "end": 255,
    "range": [
      249,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 257,
    "end": 264,
    "range": [
      257,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 268,
    "end": 274,
    "range": [
      268,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 277,
    "end": 280,
    "range": [
      277,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "numberC2",
    "start": 282,
    "end": 290,
    "range": [
      282,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 298,
    "end": 306,
    "range": [
      298,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "String",
    "value": "\"Trimming edges\"",
    "start": 308,
    "end": 324,
    "range": [
      308,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 327,
    "end": 330,
    "range": [
      327,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "numberC",
    "start": 332,
    "end": 339,
    "range": [
      332,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "nameC",
    "start": 341,
    "end": 346,
    "range": [
      341,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "skillC",
    "start": 348,
    "end": 354,
    "range": [
      348,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 362,
    "end": 370,
    "range": [
      362,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "String",
    "value": "\"Trimming edges\"",
    "start": 372,
    "end": 388,
    "range": [
      372,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 392,
    "end": 395,
    "range": [
      392,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "numberA3",
    "start": 397,
    "end": 405,
    "range": [
      397,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 407,
    "end": 410,
    "range": [
      407,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "robotAInfo",
    "start": 410,
    "end": 420,
    "range": [
      410,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "robotA",
    "start": 424,
    "end": 430,
    "range": [
      424,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 433,
    "end": 435,
    "range": [
      433,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 437,
    "end": 442,
    "range": [
      437,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 443,
    "end": 445,
    "range": [
      443,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA2",
    "start": 446,
    "end": 452,
    "range": [
      446,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 460,
    "end": 467,
    "range": [
      460,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 468,
    "end": 471,
    "range": [
      468,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA2",
    "start": 472,
    "end": 479,
    "range": [
      472,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  }
]
```
