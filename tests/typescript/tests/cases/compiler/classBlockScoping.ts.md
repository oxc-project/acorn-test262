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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSBooleanKeyword",
              "start": 14,
              "end": 21
            },
            "start": 12,
            "end": 21
          },
          "start": 11,
          "end": 21
        }
      ],
      "returnType": null,
      "body": {
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
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 36,
                      "end": 39
                    },
                    "start": 34,
                    "end": 39
                  },
                  "start": 31,
                  "end": 39
                },
                "init": null,
                "definite": false,
                "start": 31,
                "end": 39
              }
            ],
            "declare": false,
            "start": 27,
            "end": 40
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 48
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 59
                    },
                    "right": {
                      "type": "ClassExpression",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 71
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
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 87,
                              "end": 88
                            },
                            "typeAnnotation": null,
                            "value": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 95,
                                "end": 98
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 91,
                              "end": 100
                            },
                            "computed": false,
                            "static": true,
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "accessibility": null,
                            "start": 80,
                            "end": 101
                          },
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 116,
                              "end": 117
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
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Foo",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 134,
                                        "end": 137
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "start": 130,
                                      "end": 139
                                    },
                                    "directive": null,
                                    "start": 130,
                                    "end": 140
                                  }
                                ],
                                "start": 120,
                                "end": 148
                              },
                              "expression": false,
                              "start": 117,
                              "end": 148
                            },
                            "kind": "method",
                            "computed": false,
                            "static": true,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 109,
                            "end": 148
                          },
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 156,
                              "end": 157
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
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Foo",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 174,
                                        "end": 177
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "start": 170,
                                      "end": 179
                                    },
                                    "directive": null,
                                    "start": 170,
                                    "end": 180
                                  }
                                ],
                                "start": 160,
                                "end": 188
                              },
                              "expression": false,
                              "start": 157,
                              "end": 188
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 156,
                            "end": 188
                          }
                        ],
                        "start": 72,
                        "end": 194
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 62,
                      "end": 194
                    },
                    "start": 56,
                    "end": 194
                  },
                  "directive": null,
                  "start": 56,
                  "end": 195
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 208
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 201,
                    "end": 210
                  },
                  "directive": null,
                  "start": 201,
                  "end": 211
                }
              ],
              "start": 50,
              "end": 215
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 238
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
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 254,
                          "end": 255
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 262,
                            "end": 265
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 258,
                          "end": 267
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 247,
                        "end": 268
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 283,
                          "end": 284
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
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 301,
                                    "end": 304
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 297,
                                  "end": 306
                                },
                                "directive": null,
                                "start": 297,
                                "end": 307
                              }
                            ],
                            "start": 287,
                            "end": 315
                          },
                          "expression": false,
                          "start": 284,
                          "end": 315
                        },
                        "kind": "method",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 276,
                        "end": 315
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 323,
                          "end": 324
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
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 341,
                                    "end": 344
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 337,
                                  "end": 346
                                },
                                "directive": null,
                                "start": 337,
                                "end": 347
                              }
                            ],
                            "start": 327,
                            "end": 355
                          },
                          "expression": false,
                          "start": 324,
                          "end": 355
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 323,
                        "end": 355
                      }
                    ],
                    "start": 239,
                    "end": 361
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 229,
                  "end": 361
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 371,
                      "end": 374
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 367,
                    "end": 376
                  },
                  "directive": null,
                  "start": 367,
                  "end": 377
                }
              ],
              "start": 223,
              "end": 381
            },
            "start": 43,
            "end": 381
          }
        ],
        "start": 23,
        "end": 383
      },
      "expression": false,
      "start": 0,
      "end": 383
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 383
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
    "value": "f",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 14,
    "end": 21,
    "range": [
      14,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 27,
    "end": 30,
    "range": [
      27,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
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
    "value": "any",
    "start": 36,
    "end": 39,
    "range": [
      36,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 43,
    "end": 45,
    "range": [
      43,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 56,
    "end": 59,
    "range": [
      56,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 62,
    "end": 67,
    "range": [
      62,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 68,
    "end": 71,
    "range": [
      68,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 80,
    "end": 86,
    "range": [
      80,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 91,
    "end": 94,
    "range": [
      91,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 95,
    "end": 98,
    "range": [
      95,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 109,
    "end": 115,
    "range": [
      109,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 130,
    "end": 133,
    "range": [
      130,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 134,
    "end": 137,
    "range": [
      134,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139,
    "range": [
      138,
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
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 170,
    "end": 173,
    "range": [
      170,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 174,
    "end": 177,
    "range": [
      174,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 201,
    "end": 204,
    "range": [
      201,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 205,
    "end": 208,
    "range": [
      205,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 218,
    "end": 222,
    "range": [
      218,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 229,
    "end": 234,
    "range": [
      229,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 235,
    "end": 238,
    "range": [
      235,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 247,
    "end": 253,
    "range": [
      247,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 258,
    "end": 261,
    "range": [
      258,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 262,
    "end": 265,
    "range": [
      262,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 276,
    "end": 282,
    "range": [
      276,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
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
    "type": "Punctuator",
    "value": ")",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 297,
    "end": 300,
    "range": [
      297,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 301,
    "end": 304,
    "range": [
      301,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306,
    "range": [
      305,
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
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 337,
    "end": 340,
    "range": [
      337,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 341,
    "end": 344,
    "range": [
      341,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 367,
    "end": 370,
    "range": [
      367,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 371,
    "end": 374,
    "range": [
      371,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
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
  }
]
```
