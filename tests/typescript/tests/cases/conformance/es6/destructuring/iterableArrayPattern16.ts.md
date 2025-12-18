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
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 18
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 20,
                "end": 21
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 22
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 25,
                      "end": 28
                    },
                    "typeArguments": null,
                    "start": 25,
                    "end": 28
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 30,
                      "end": 33
                    },
                    "typeArguments": null,
                    "start": 30,
                    "end": 33
                  }
                ],
                "start": 24,
                "end": 34
              },
              "start": 24,
              "end": 36
            },
            "start": 22,
            "end": 36
          },
          "value": null,
          "start": 13,
          "end": 36
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 38,
        "end": 41
      },
      "expression": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fun",
          "optional": false,
          "typeAnnotation": null,
          "start": 42,
          "end": 45
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "FooIteratorIterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 72
              },
              "typeArguments": null,
              "arguments": [],
              "start": 49,
              "end": 72
            },
            "start": 46,
            "end": 72
          }
        ],
        "optional": false,
        "start": 42,
        "end": 73
      },
      "directive": null,
      "start": 42,
      "end": 74
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 84
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 87,
            "end": 88
          }
        ],
        "start": 85,
        "end": 90
      },
      "abstract": false,
      "declare": false,
      "start": 75,
      "end": 90
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 100
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 112
      },
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 116
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 115,
            "end": 116
          }
        ],
        "start": 113,
        "end": 118
      },
      "abstract": false,
      "declare": false,
      "start": 91,
      "end": 118
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 136
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
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 147
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
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 181,
                            "end": 186
                          },
                          "value": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 192,
                              "end": 195
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 188,
                            "end": 195
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 181,
                          "end": 195
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 209,
                            "end": 213
                          },
                          "value": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 215,
                            "end": 220
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 209,
                          "end": 220
                        }
                      ],
                      "start": 167,
                      "end": 230
                    },
                    "start": 160,
                    "end": 231
                  }
                ],
                "start": 150,
                "end": 237
              },
              "expression": false,
              "start": 147,
              "end": 237
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 143,
            "end": 237
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 244,
                "end": 250
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 259
              },
              "optional": false,
              "computed": false,
              "start": 244,
              "end": 259
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
                      "type": "ThisExpression",
                      "start": 280,
                      "end": 284
                    },
                    "start": 273,
                    "end": 285
                  }
                ],
                "start": 263,
                "end": 291
              },
              "expression": false,
              "start": 260,
              "end": 291
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 243,
            "end": 291
          }
        ],
        "start": 137,
        "end": 293
      },
      "abstract": false,
      "declare": false,
      "start": 119,
      "end": 293
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooIteratorIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 301,
        "end": 320
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
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 331
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
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 365,
                            "end": 370
                          },
                          "value": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "FooIterator",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 376,
                              "end": 387
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 372,
                            "end": 387
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 365,
                          "end": 387
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 401,
                            "end": 405
                          },
                          "value": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 407,
                            "end": 412
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 401,
                          "end": 412
                        }
                      ],
                      "start": 351,
                      "end": 422
                    },
                    "start": 344,
                    "end": 423
                  }
                ],
                "start": 334,
                "end": 429
              },
              "expression": false,
              "start": 331,
              "end": 429
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 327,
            "end": 429
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 442
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 451
              },
              "optional": false,
              "computed": false,
              "start": 436,
              "end": 451
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
                      "type": "ThisExpression",
                      "start": 472,
                      "end": 476
                    },
                    "start": 465,
                    "end": 477
                  }
                ],
                "start": 455,
                "end": 483
              },
              "expression": false,
              "start": 452,
              "end": 483
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 435,
            "end": 483
          }
        ],
        "start": 321,
        "end": 485
      },
      "abstract": false,
      "declare": false,
      "start": 295,
      "end": 485
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 485
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
    "value": "fun",
    "start": 9,
    "end": 12,
    "range": [
      9,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 13,
    "end": 16,
    "range": [
      13,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 21,
    "end": 22,
    "range": [
      21,
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
    "type": "Punctuator",
    "value": "[",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 25,
    "end": 28,
    "range": [
      25,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 30,
    "end": 33,
    "range": [
      30,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 42,
    "end": 45,
    "range": [
      42,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 46,
    "end": 49,
    "range": [
      46,
      49
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 49,
    "end": 52,
    "range": [
      49,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "FooIteratorIterator",
    "start": 53,
    "end": 72,
    "range": [
      53,
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
    "value": ";",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 75,
    "end": 80,
    "range": [
      75,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 81,
    "end": 84,
    "range": [
      81,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 91,
    "end": 96,
    "range": [
      91,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 97,
    "end": 100,
    "range": [
      97,
      100
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 101,
    "end": 108,
    "range": [
      101,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 109,
    "end": 112,
    "range": [
      109,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 119,
    "end": 124,
    "range": [
      119,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "FooIterator",
    "start": 125,
    "end": 136,
    "range": [
      125,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 143,
    "end": 147,
    "range": [
      143,
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
    "value": ")",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 160,
    "end": 166,
    "range": [
      160,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 181,
    "end": 186,
    "range": [
      181,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 188,
    "end": 191,
    "range": [
      188,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 192,
    "end": 195,
    "range": [
      192,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 209,
    "end": 213,
    "range": [
      209,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 215,
    "end": 220,
    "range": [
      215,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 244,
    "end": 250,
    "range": [
      244,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 251,
    "end": 259,
    "range": [
      251,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 273,
    "end": 279,
    "range": [
      273,
      279
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 280,
    "end": 284,
    "range": [
      280,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 295,
    "end": 300,
    "range": [
      295,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "FooIteratorIterator",
    "start": 301,
    "end": 320,
    "range": [
      301,
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
    "type": "Identifier",
    "value": "next",
    "start": 327,
    "end": 331,
    "range": [
      327,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 344,
    "end": 350,
    "range": [
      344,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 365,
    "end": 370,
    "range": [
      365,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 372,
    "end": 375,
    "range": [
      372,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "FooIterator",
    "start": 376,
    "end": 387,
    "range": [
      376,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 401,
    "end": 405,
    "range": [
      401,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 407,
    "end": 412,
    "range": [
      407,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 421,
    "end": 422,
    "range": [
      421,
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
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 436,
    "end": 442,
    "range": [
      436,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 443,
    "end": 451,
    "range": [
      443,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 465,
    "end": 471,
    "range": [
      465,
      471
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 472,
    "end": 476,
    "range": [
      472,
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
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  }
]
```
