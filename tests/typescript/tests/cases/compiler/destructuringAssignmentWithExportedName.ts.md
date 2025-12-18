__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
              "name": "exportedFoo",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 24,
                  "end": 27
                },
                "start": 22,
                "end": 27
              },
              "start": 11,
              "end": 27
            },
            "init": null,
            "definite": false,
            "start": 11,
            "end": 27
          }
        ],
        "declare": false,
        "start": 7,
        "end": 28
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 28
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
            "name": "nonexportedFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 49,
                "end": 52
              },
              "start": 47,
              "end": 52
            },
            "start": 33,
            "end": 52
          },
          "init": null,
          "definite": false,
          "start": 33,
          "end": 52
        }
      ],
      "declare": false,
      "start": 29,
      "end": 53
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "exportedFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 83
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 86,
          "end": 90
        },
        "start": 72,
        "end": 90
      },
      "directive": null,
      "start": 72,
      "end": 91
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonexportedFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 92,
          "end": 106
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 109,
          "end": 113
        },
        "start": 92,
        "end": 113
      },
      "directive": null,
      "start": 92,
      "end": 114
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "TSAsExpression",
        "expression": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 120,
          "end": 124
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 128,
          "end": 131
        },
        "start": 120,
        "end": 131
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
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
                      "name": "exportedFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 153
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "exportedFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 153
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 142,
                    "end": 153
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nonexportedFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 155,
                      "end": 169
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nonexportedFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 155,
                      "end": 169
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 155,
                    "end": 169
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 171
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 174,
                  "end": 178
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 182,
                  "end": 185
                },
                "start": 174,
                "end": 185
              },
              "start": 140,
              "end": 185
            },
            "directive": null,
            "start": 139,
            "end": 187
          }
        ],
        "start": 133,
        "end": 189
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 199,
            "end": 203
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 207,
            "end": 210
          },
          "start": 199,
          "end": 210
        },
        "consequent": {
          "type": "BlockStatement",
          "body": [
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
                        "start": 218,
                        "end": 221
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "exportedFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 223,
                        "end": 234
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 218,
                      "end": 234
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 236,
                        "end": 239
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nonexportedFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 241,
                        "end": 255
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 236,
                      "end": 255
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 257
                },
                "right": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 260,
                    "end": 264
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 268,
                    "end": 271
                  },
                  "start": 260,
                  "end": 271
                },
                "start": 216,
                "end": 271
              },
              "directive": null,
              "start": 215,
              "end": 273
            }
          ],
          "start": 212,
          "end": 275
        },
        "alternate": {
          "type": "IfStatement",
          "test": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 285,
              "end": 289
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 293,
              "end": 296
            },
            "start": 285,
            "end": 296
          },
          "consequent": {
            "type": "BlockStatement",
            "body": [
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
                          "start": 304,
                          "end": 307
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
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 311,
                                "end": 314
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "exportedFoo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 316,
                                "end": 327
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 311,
                              "end": 327
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "baz",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 329,
                                "end": 332
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "nonexportedFoo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 334,
                                "end": 348
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 329,
                              "end": 348
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 309,
                          "end": 350
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 304,
                        "end": 350
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 352
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 355,
                      "end": 359
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 363,
                      "end": 366
                    },
                    "start": 355,
                    "end": 366
                  },
                  "start": 302,
                  "end": 366
                },
                "directive": null,
                "start": 301,
                "end": 368
              }
            ],
            "start": 298,
            "end": 370
          },
          "alternate": {
            "type": "IfStatement",
            "test": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 380,
                "end": 384
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 388,
                "end": 391
              },
              "start": 380,
              "end": 391
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "exportedFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 398,
                          "end": 409
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nonexportedFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 411,
                          "end": 425
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 397,
                      "end": 426
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 429,
                        "end": 433
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 437,
                        "end": 440
                      },
                      "start": 429,
                      "end": 440
                    },
                    "start": 397,
                    "end": 440
                  },
                  "directive": null,
                  "start": 396,
                  "end": 442
                }
              ],
              "start": 393,
              "end": 444
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
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
                          "type": "ArrayPattern",
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "exportedFoo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 456,
                              "end": 467
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "nonexportedFoo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 469,
                              "end": 483
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 455,
                          "end": 484
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 454,
                      "end": 485
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 488,
                        "end": 492
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 496,
                        "end": 499
                      },
                      "start": 488,
                      "end": 499
                    },
                    "start": 454,
                    "end": 499
                  },
                  "directive": null,
                  "start": 453,
                  "end": 501
                }
              ],
              "start": 450,
              "end": 503
            },
            "start": 376,
            "end": 503
          },
          "start": 281,
          "end": 503
        },
        "start": 195,
        "end": 503
      },
      "start": 116,
      "end": 503
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
            "name": "nonexportedFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 514,
            "end": 528
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "nonexportedFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 514,
            "end": 528
          },
          "exportKind": "value",
          "start": 514,
          "end": 528
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 505,
      "end": 531
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
            "name": "exportedFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 541,
            "end": 552
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 556,
            "end": 559
          },
          "exportKind": "value",
          "start": 541,
          "end": 559
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nonexportedFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 561,
            "end": 575
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "nfoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 579,
            "end": 583
          },
          "exportKind": "value",
          "start": 561,
          "end": 583
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 532,
      "end": 586
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 586
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 7,
    "end": 10,
    "range": [
      7,
      10
    ]
  },
  {
    "type": "Identifier",
    "value": "exportedFoo",
    "start": 11,
    "end": 22,
    "range": [
      11,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 24,
    "end": 27,
    "range": [
      24,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 29,
    "end": 32,
    "range": [
      29,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "nonexportedFoo",
    "start": 33,
    "end": 47,
    "range": [
      33,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 49,
    "end": 52,
    "range": [
      49,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "exportedFoo",
    "start": 72,
    "end": 83,
    "range": [
      72,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 86,
    "end": 90,
    "range": [
      86,
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
    "type": "Identifier",
    "value": "nonexportedFoo",
    "start": 92,
    "end": 106,
    "range": [
      92,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 109,
    "end": 113,
    "range": [
      109,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 116,
    "end": 118,
    "range": [
      116,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 120,
    "end": 124,
    "range": [
      120,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 125,
    "end": 127,
    "range": [
      125,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 128,
    "end": 131,
    "range": [
      128,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "exportedFoo",
    "start": 142,
    "end": 153,
    "range": [
      142,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "nonexportedFoo",
    "start": 155,
    "end": 169,
    "range": [
      155,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 174,
    "end": 178,
    "range": [
      174,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 179,
    "end": 181,
    "range": [
      179,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 182,
    "end": 185,
    "range": [
      182,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 190,
    "end": 194,
    "range": [
      190,
      194
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 195,
    "end": 197,
    "range": [
      195,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 199,
    "end": 203,
    "range": [
      199,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 204,
    "end": 206,
    "range": [
      204,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 207,
    "end": 210,
    "range": [
      207,
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
    "value": "{",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 218,
    "end": 221,
    "range": [
      218,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "exportedFoo",
    "start": 223,
    "end": 234,
    "range": [
      223,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 236,
    "end": 239,
    "range": [
      236,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "nonexportedFoo",
    "start": 241,
    "end": 255,
    "range": [
      241,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 260,
    "end": 264,
    "range": [
      260,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 265,
    "end": 267,
    "range": [
      265,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 268,
    "end": 271,
    "range": [
      268,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272,
    "range": [
      271,
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
    "type": "Keyword",
    "value": "else",
    "start": 276,
    "end": 280,
    "range": [
      276,
      280
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 281,
    "end": 283,
    "range": [
      281,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 285,
    "end": 289,
    "range": [
      285,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 290,
    "end": 292,
    "range": [
      290,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 293,
    "end": 296,
    "range": [
      293,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 304,
    "end": 307,
    "range": [
      304,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 311,
    "end": 314,
    "range": [
      311,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "exportedFoo",
    "start": 316,
    "end": 327,
    "range": [
      316,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 329,
    "end": 332,
    "range": [
      329,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "nonexportedFoo",
    "start": 334,
    "end": 348,
    "range": [
      334,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 355,
    "end": 359,
    "range": [
      355,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 360,
    "end": 362,
    "range": [
      360,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 363,
    "end": 366,
    "range": [
      363,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 371,
    "end": 375,
    "range": [
      371,
      375
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 376,
    "end": 378,
    "range": [
      376,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 380,
    "end": 384,
    "range": [
      380,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 385,
    "end": 387,
    "range": [
      385,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 388,
    "end": 391,
    "range": [
      388,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "exportedFoo",
    "start": 398,
    "end": 409,
    "range": [
      398,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "nonexportedFoo",
    "start": 411,
    "end": 425,
    "range": [
      411,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 429,
    "end": 433,
    "range": [
      429,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 434,
    "end": 436,
    "range": [
      434,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 437,
    "end": 440,
    "range": [
      437,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 445,
    "end": 449,
    "range": [
      445,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "exportedFoo",
    "start": 456,
    "end": 467,
    "range": [
      456,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "nonexportedFoo",
    "start": 469,
    "end": 483,
    "range": [
      469,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 488,
    "end": 492,
    "range": [
      488,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 493,
    "end": 495,
    "range": [
      493,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 496,
    "end": 499,
    "range": [
      496,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 505,
    "end": 511,
    "range": [
      505,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "nonexportedFoo",
    "start": 514,
    "end": 528,
    "range": [
      514,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 532,
    "end": 538,
    "range": [
      532,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "exportedFoo",
    "start": 541,
    "end": 552,
    "range": [
      541,
      552
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 553,
    "end": 555,
    "range": [
      553,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 556,
    "end": 559,
    "range": [
      556,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "nonexportedFoo",
    "start": 561,
    "end": 575,
    "range": [
      561,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 576,
    "end": 578,
    "range": [
      576,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "nfoo",
    "start": 579,
    "end": 583,
    "range": [
      579,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  }
]
```
