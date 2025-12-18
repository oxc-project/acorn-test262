__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "type": "PrivateIdentifier",
                    "name": "bar",
                    "start": 35,
                    "end": 39
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": true,
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
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Promise",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 57,
                                  "end": 64
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "resolve",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 65,
                                  "end": 72
                                },
                                "optional": false,
                                "computed": false,
                                "start": 57,
                                "end": 72
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 42,
                                  "raw": "42",
                                  "start": 73,
                                  "end": 75
                                }
                              ],
                              "optional": false,
                              "start": 57,
                              "end": 76
                            },
                            "start": 51,
                            "end": 76
                          },
                          "start": 44,
                          "end": 77
                        }
                      ],
                      "start": 42,
                      "end": 79
                    },
                    "expression": false,
                    "start": 39,
                    "end": 79
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 22,
                  "end": 79
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 100
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": true,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
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
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 119,
                                "end": 120
                              },
                              "init": {
                                "type": "AwaitExpression",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 129,
                                      "end": 133
                                    },
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "name": "bar",
                                      "start": 134,
                                      "end": 138
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 129,
                                    "end": 138
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 129,
                                  "end": 140
                                },
                                "start": 123,
                                "end": 140
                              },
                              "definite": false,
                              "start": 119,
                              "end": 140
                            }
                          ],
                          "declare": false,
                          "start": 113,
                          "end": 141
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 157,
                                "end": 158
                              },
                              "operator": "+",
                              "right": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 162,
                                            "end": 166
                                          },
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "name": "baz",
                                            "start": 167,
                                            "end": 171
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 162,
                                          "end": 171
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 162,
                                        "end": 173
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 174,
                                        "end": 178
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 162,
                                      "end": 178
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 162,
                                    "end": 180
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 181,
                                    "end": 186
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 162,
                                  "end": 186
                                },
                                "operator": "||",
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 190,
                                  "end": 191
                                },
                                "start": 162,
                                "end": 191
                              },
                              "start": 157,
                              "end": 192
                            },
                            "operator": "+",
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 203,
                                            "end": 207
                                          },
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "name": "qux",
                                            "start": 208,
                                            "end": 212
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 203,
                                          "end": 212
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 203,
                                        "end": 214
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 215,
                                        "end": 219
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 203,
                                      "end": 219
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 203,
                                    "end": 221
                                  },
                                  "start": 197,
                                  "end": 221
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 223,
                                  "end": 228
                                },
                                "optional": false,
                                "computed": false,
                                "start": 196,
                                "end": 228
                              },
                              "operator": "||",
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 232,
                                "end": 233
                              },
                              "start": 196,
                              "end": 233
                            },
                            "start": 157,
                            "end": 234
                          },
                          "start": 150,
                          "end": 235
                        }
                      ],
                      "start": 103,
                      "end": 241
                    },
                    "expression": false,
                    "start": 100,
                    "end": 241
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 84,
                  "end": 241
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "baz",
                    "start": 254,
                    "end": 258
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": true,
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
                            "type": "YieldExpression",
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "value": 42,
                              "raw": "42",
                              "start": 269,
                              "end": 271
                            },
                            "start": 263,
                            "end": 271
                          },
                          "directive": null,
                          "start": 263,
                          "end": 272
                        }
                      ],
                      "start": 261,
                      "end": 274
                    },
                    "expression": false,
                    "start": 258,
                    "end": 274
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 246,
                  "end": 274
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "qux",
                    "start": 293,
                    "end": 297
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": true,
                    "async": true,
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
                            "type": "YieldExpression",
                            "delegate": false,
                            "argument": {
                              "type": "AwaitExpression",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 323,
                                    "end": 330
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "resolve",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 331,
                                    "end": 338
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 323,
                                  "end": 338
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 42,
                                    "raw": "42",
                                    "start": 339,
                                    "end": 341
                                  }
                                ],
                                "optional": false,
                                "start": 323,
                                "end": 342
                              },
                              "start": 317,
                              "end": 342
                            },
                            "start": 310,
                            "end": 343
                          },
                          "directive": null,
                          "start": 310,
                          "end": 344
                        }
                      ],
                      "start": 300,
                      "end": 350
                    },
                    "expression": false,
                    "start": 297,
                    "end": 350
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 279,
                  "end": 350
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "bazBad",
                    "start": 369,
                    "end": 376
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": true,
                    "async": true,
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
                            "type": "YieldExpression",
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "value": 42,
                              "raw": "42",
                              "start": 387,
                              "end": 389
                            },
                            "start": 381,
                            "end": 389
                          },
                          "directive": null,
                          "start": 381,
                          "end": 390
                        }
                      ],
                      "start": 379,
                      "end": 392
                    },
                    "expression": false,
                    "start": 376,
                    "end": 392
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 355,
                  "end": 392
                }
              ],
              "start": 16,
              "end": 394
            },
            "abstract": false,
            "declare": false,
            "start": 10,
            "end": 394
          },
          "definite": false,
          "start": 6,
          "end": 394
        }
      ],
      "declare": false,
      "start": 0,
      "end": 394
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 396
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 10,
    "end": 15,
    "range": [
      10,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 22,
    "end": 28,
    "range": [
      22,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 29,
    "end": 34,
    "range": [
      29,
      34
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 35,
    "end": 39,
    "range": [
      35,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 44,
    "end": 50,
    "range": [
      44,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 51,
    "end": 56,
    "range": [
      51,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 57,
    "end": 64,
    "range": [
      57,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 65,
    "end": 72,
    "range": [
      65,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 73,
    "end": 75,
    "range": [
      73,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 84,
    "end": 90,
    "range": [
      84,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 91,
    "end": 96,
    "range": [
      91,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 97,
    "end": 100,
    "range": [
      97,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101,
    "range": [
      100,
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
    "value": "{",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 113,
    "end": 118,
    "range": [
      113,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 123,
    "end": 128,
    "range": [
      123,
      128
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 129,
    "end": 133,
    "range": [
      129,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 134,
    "end": 138,
    "range": [
      134,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 150,
    "end": 156,
    "range": [
      150,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 162,
    "end": 166,
    "range": [
      162,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "baz",
    "start": 167,
    "end": 171,
    "range": [
      167,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 174,
    "end": 178,
    "range": [
      174,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
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
    "value": "||",
    "start": 187,
    "end": 189,
    "range": [
      187,
      189
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 197,
    "end": 202,
    "range": [
      197,
      202
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 203,
    "end": 207,
    "range": [
      203,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "qux",
    "start": 208,
    "end": 212,
    "range": [
      208,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 215,
    "end": 219,
    "range": [
      215,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 223,
    "end": 228,
    "range": [
      223,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 229,
    "end": 231,
    "range": [
      229,
      231
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 246,
    "end": 252,
    "range": [
      246,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "baz",
    "start": 254,
    "end": 258,
    "range": [
      254,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259,
    "range": [
      258,
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
    "value": "{",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 263,
    "end": 268,
    "range": [
      263,
      268
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 269,
    "end": 271,
    "range": [
      269,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 279,
    "end": 285,
    "range": [
      279,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 286,
    "end": 291,
    "range": [
      286,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "qux",
    "start": 293,
    "end": 297,
    "range": [
      293,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 310,
    "end": 315,
    "range": [
      310,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 317,
    "end": 322,
    "range": [
      317,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 323,
    "end": 330,
    "range": [
      323,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 331,
    "end": 338,
    "range": [
      331,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 339,
    "end": 341,
    "range": [
      339,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
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
    "type": "Identifier",
    "value": "async",
    "start": 355,
    "end": 360,
    "range": [
      355,
      360
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 361,
    "end": 367,
    "range": [
      361,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "bazBad",
    "start": 369,
    "end": 376,
    "range": [
      369,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 381,
    "end": 386,
    "range": [
      381,
      386
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 387,
    "end": 389,
    "range": [
      387,
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
    "type": "Punctuator",
    "value": "}",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  }
]
```
