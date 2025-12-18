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
        "name": "isNotNullish",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 29
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSUnknownKeyword",
              "start": 37,
              "end": 44
            },
            "start": 35,
            "end": 44
          },
          "start": 30,
          "end": 44
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 52
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 56,
              "end": 58
            },
            "start": 56,
            "end": 58
          },
          "start": 47,
          "end": 58
        },
        "start": 45,
        "end": 58
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 59
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNullish",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 86
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSUnknownKeyword",
              "start": 94,
              "end": 101
            },
            "start": 92,
            "end": 101
          },
          "start": 87,
          "end": 101
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 109
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNullKeyword",
                  "start": 113,
                  "end": 117
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 120,
                  "end": 129
                }
              ],
              "start": 113,
              "end": 129
            },
            "start": 113,
            "end": 129
          },
          "start": 104,
          "end": 129
        },
        "start": 102,
        "end": 129
      },
      "body": null,
      "expression": false,
      "start": 60,
      "end": 130
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
            "name": "value1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 154,
                "end": 161
              },
              "start": 152,
              "end": 161
            },
            "start": 146,
            "end": 161
          },
          "init": null,
          "definite": false,
          "start": 146,
          "end": 161
        }
      ],
      "declare": true,
      "start": 132,
      "end": 162
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNotNullish",
          "optional": false,
          "typeAnnotation": null,
          "start": 167,
          "end": 179
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value1",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 186
          }
        ],
        "optional": false,
        "start": 167,
        "end": 187
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value1",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 199
            },
            "directive": null,
            "start": 193,
            "end": 200
          }
        ],
        "start": 189,
        "end": 202
      },
      "alternate": null,
      "start": 163,
      "end": 202
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
            "name": "value2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 226,
                "end": 233
              },
              "start": 224,
              "end": 233
            },
            "start": 218,
            "end": 233
          },
          "init": null,
          "definite": false,
          "start": 218,
          "end": 233
        }
      ],
      "declare": true,
      "start": 204,
      "end": 234
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isNotNullish",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 252
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "value2",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 259
            }
          ],
          "optional": false,
          "start": 240,
          "end": 260
        },
        "prefix": true,
        "start": 239,
        "end": 260
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value2",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 272
            },
            "directive": null,
            "start": 266,
            "end": 273
          }
        ],
        "start": 262,
        "end": 275
      },
      "alternate": null,
      "start": 235,
      "end": 275
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
            "name": "value3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 299,
                "end": 306
              },
              "start": 297,
              "end": 306
            },
            "start": 291,
            "end": 306
          },
          "init": null,
          "definite": false,
          "start": 291,
          "end": 306
        }
      ],
      "declare": true,
      "start": 277,
      "end": 307
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNullish",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 321
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value3",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 328
          }
        ],
        "optional": false,
        "start": 312,
        "end": 329
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value3",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 341
            },
            "directive": null,
            "start": 335,
            "end": 342
          }
        ],
        "start": 331,
        "end": 344
      },
      "alternate": null,
      "start": 308,
      "end": 344
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
            "name": "value4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 368,
                "end": 375
              },
              "start": 366,
              "end": 375
            },
            "start": 360,
            "end": 375
          },
          "init": null,
          "definite": false,
          "start": 360,
          "end": 375
        }
      ],
      "declare": true,
      "start": 346,
      "end": 376
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isNullish",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 391
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "value4",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 398
            }
          ],
          "optional": false,
          "start": 382,
          "end": 399
        },
        "prefix": true,
        "start": 381,
        "end": 399
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value4",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 411
            },
            "directive": null,
            "start": 405,
            "end": 412
          }
        ],
        "start": 401,
        "end": 414
      },
      "alternate": null,
      "start": 377,
      "end": 414
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 430,
        "end": 431
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 437
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 439,
                "end": 445
              },
              "start": 437,
              "end": 445
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 434,
            "end": 446
          }
        ],
        "start": 432,
        "end": 448
      },
      "abstract": false,
      "declare": true,
      "start": 416,
      "end": 448
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isA",
        "optional": false,
        "typeAnnotation": null,
        "start": 466,
        "end": 469
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSUnknownKeyword",
              "start": 477,
              "end": 484
            },
            "start": 475,
            "end": 484
          },
          "start": 470,
          "end": 484
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 492
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 496,
                "end": 497
              },
              "typeArguments": null,
              "start": 496,
              "end": 497
            },
            "start": 496,
            "end": 497
          },
          "start": 487,
          "end": 497
        },
        "start": 485,
        "end": 497
      },
      "body": null,
      "expression": false,
      "start": 449,
      "end": 498
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
            "name": "value5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 522,
                "end": 529
              },
              "start": 520,
              "end": 529
            },
            "start": 514,
            "end": 529
          },
          "init": null,
          "definite": false,
          "start": 514,
          "end": 529
        }
      ],
      "declare": true,
      "start": 500,
      "end": 530
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isA",
          "optional": false,
          "typeAnnotation": null,
          "start": 535,
          "end": 538
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value5",
            "optional": false,
            "typeAnnotation": null,
            "start": 539,
            "end": 545
          }
        ],
        "optional": false,
        "start": 535,
        "end": 546
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value5",
              "optional": false,
              "typeAnnotation": null,
              "start": 552,
              "end": 558
            },
            "directive": null,
            "start": 552,
            "end": 559
          }
        ],
        "start": 548,
        "end": 561
      },
      "alternate": null,
      "start": 531,
      "end": 561
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
            "name": "value6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 585,
                "end": 592
              },
              "start": 583,
              "end": 592
            },
            "start": 577,
            "end": 592
          },
          "init": null,
          "definite": false,
          "start": 577,
          "end": 592
        }
      ],
      "declare": true,
      "start": 563,
      "end": 593
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isA",
            "optional": false,
            "typeAnnotation": null,
            "start": 599,
            "end": 602
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "value6",
              "optional": false,
              "typeAnnotation": null,
              "start": 603,
              "end": 609
            }
          ],
          "optional": false,
          "start": 599,
          "end": 610
        },
        "prefix": true,
        "start": 598,
        "end": 610
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value6",
              "optional": false,
              "typeAnnotation": null,
              "start": 616,
              "end": 622
            },
            "directive": null,
            "start": 616,
            "end": 623
          }
        ],
        "start": 612,
        "end": 625
      },
      "alternate": null,
      "start": 594,
      "end": 625
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 625
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
    "value": "isNotNullish",
    "start": 17,
    "end": 29,
    "range": [
      17,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 30,
    "end": 35,
    "range": [
      30,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 37,
    "end": 44,
    "range": [
      37,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 47,
    "end": 52,
    "range": [
      47,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 53,
    "end": 55,
    "range": [
      53,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 60,
    "end": 67,
    "range": [
      60,
      67
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 68,
    "end": 76,
    "range": [
      68,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "isNullish",
    "start": 77,
    "end": 86,
    "range": [
      77,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 87,
    "end": 92,
    "range": [
      87,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 94,
    "end": 101,
    "range": [
      94,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102,
    "range": [
      101,
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
    "value": "value",
    "start": 104,
    "end": 109,
    "range": [
      104,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 110,
    "end": 112,
    "range": [
      110,
      112
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 113,
    "end": 117,
    "range": [
      113,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 120,
    "end": 129,
    "range": [
      120,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 132,
    "end": 139,
    "range": [
      132,
      139
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 140,
    "end": 145,
    "range": [
      140,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 146,
    "end": 152,
    "range": [
      146,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 154,
    "end": 161,
    "range": [
      154,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 163,
    "end": 165,
    "range": [
      163,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "isNotNullish",
    "start": 167,
    "end": 179,
    "range": [
      167,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 180,
    "end": 186,
    "range": [
      180,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 193,
    "end": 199,
    "range": [
      193,
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
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 204,
    "end": 211,
    "range": [
      204,
      211
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 212,
    "end": 217,
    "range": [
      212,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "value2",
    "start": 218,
    "end": 224,
    "range": [
      218,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 226,
    "end": 233,
    "range": [
      226,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 235,
    "end": 237,
    "range": [
      235,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "isNotNullish",
    "start": 240,
    "end": 252,
    "range": [
      240,
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
    "type": "Identifier",
    "value": "value2",
    "start": 253,
    "end": 259,
    "range": [
      253,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "value2",
    "start": 266,
    "end": 272,
    "range": [
      266,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 277,
    "end": 284,
    "range": [
      277,
      284
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 285,
    "end": 290,
    "range": [
      285,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "value3",
    "start": 291,
    "end": 297,
    "range": [
      291,
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
    "type": "Identifier",
    "value": "unknown",
    "start": 299,
    "end": 306,
    "range": [
      299,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 308,
    "end": 310,
    "range": [
      308,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "isNullish",
    "start": 312,
    "end": 321,
    "range": [
      312,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "value3",
    "start": 322,
    "end": 328,
    "range": [
      322,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "value3",
    "start": 335,
    "end": 341,
    "range": [
      335,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 346,
    "end": 353,
    "range": [
      346,
      353
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 354,
    "end": 359,
    "range": [
      354,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "value4",
    "start": 360,
    "end": 366,
    "range": [
      360,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 368,
    "end": 375,
    "range": [
      368,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 377,
    "end": 379,
    "range": [
      377,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "isNullish",
    "start": 382,
    "end": 391,
    "range": [
      382,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "value4",
    "start": 392,
    "end": 398,
    "range": [
      392,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "value4",
    "start": 405,
    "end": 411,
    "range": [
      405,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 416,
    "end": 423,
    "range": [
      416,
      423
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 424,
    "end": 429,
    "range": [
      424,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 434,
    "end": 437,
    "range": [
      434,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 439,
    "end": 445,
    "range": [
      439,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 449,
    "end": 456,
    "range": [
      449,
      456
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 457,
    "end": 465,
    "range": [
      457,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 466,
    "end": 469,
    "range": [
      466,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 470,
    "end": 475,
    "range": [
      470,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 477,
    "end": 484,
    "range": [
      477,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485,
    "range": [
      484,
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
    "value": "value",
    "start": 487,
    "end": 492,
    "range": [
      487,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 493,
    "end": 495,
    "range": [
      493,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 500,
    "end": 507,
    "range": [
      500,
      507
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 508,
    "end": 513,
    "range": [
      508,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "value5",
    "start": 514,
    "end": 520,
    "range": [
      514,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 522,
    "end": 529,
    "range": [
      522,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 531,
    "end": 533,
    "range": [
      531,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 535,
    "end": 538,
    "range": [
      535,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "value5",
    "start": 539,
    "end": 545,
    "range": [
      539,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "value5",
    "start": 552,
    "end": 558,
    "range": [
      552,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 563,
    "end": 570,
    "range": [
      563,
      570
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 571,
    "end": 576,
    "range": [
      571,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "value6",
    "start": 577,
    "end": 583,
    "range": [
      577,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 585,
    "end": 592,
    "range": [
      585,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 594,
    "end": 596,
    "range": [
      594,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 599,
    "end": 602,
    "range": [
      599,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "value6",
    "start": 603,
    "end": 609,
    "range": [
      603,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "value6",
    "start": 616,
    "end": 622,
    "range": [
      616,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  }
]
```
