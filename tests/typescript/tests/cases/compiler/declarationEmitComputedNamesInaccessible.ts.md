__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 18
        },
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
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "localClassFieldName",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 33,
                    "end": 52
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 55,
                            "end": 59
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 60,
                            "end": 66
                          },
                          "optional": false,
                          "computed": false,
                          "start": 55,
                          "end": 66
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 55,
                        "end": 68
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "value": 0.5,
                        "raw": "0.5",
                        "start": 71,
                        "end": 74
                      },
                      "start": 55,
                      "end": 74
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": "g1",
                      "raw": "\"g1\"",
                      "start": 77,
                      "end": 81
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": "g2",
                      "raw": "\"g2\"",
                      "start": 84,
                      "end": 88
                    },
                    "start": 55,
                    "end": 88
                  },
                  "definite": false,
                  "start": 33,
                  "end": 88
                }
              ],
              "declare": false,
              "start": 27,
              "end": 89
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
                    "name": "localOtherField",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 100,
                    "end": 115
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localClassFieldName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 118,
                        "end": 137
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "g1",
                        "raw": "\"g1\"",
                        "start": 142,
                        "end": 146
                      },
                      "start": 118,
                      "end": 146
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": "g2",
                      "raw": "\"g2\"",
                      "start": 149,
                      "end": 153
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": "g1",
                      "raw": "\"g1\"",
                      "start": 156,
                      "end": 160
                    },
                    "start": 118,
                    "end": 160
                  },
                  "definite": false,
                  "start": 100,
                  "end": 160
                }
              ],
              "declare": false,
              "start": 94,
              "end": 161
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
                    "name": "localStaticField",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 172,
                    "end": 188
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 191,
                            "end": 195
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 196,
                            "end": 202
                          },
                          "optional": false,
                          "computed": false,
                          "start": 191,
                          "end": 202
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 191,
                        "end": 204
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "value": 0.5,
                        "raw": "0.5",
                        "start": 207,
                        "end": 210
                      },
                      "start": 191,
                      "end": 210
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": "s1",
                      "raw": "\"s1\"",
                      "start": 213,
                      "end": 217
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": "s2",
                      "raw": "\"s2\"",
                      "start": 220,
                      "end": 224
                    },
                    "start": 191,
                    "end": 224
                  },
                  "definite": false,
                  "start": 172,
                  "end": 224
                }
              ],
              "declare": false,
              "start": 166,
              "end": 225
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ClassExpression",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParameterizedHolder",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 262
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
                        "name": "localClassFieldName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 274,
                        "end": 293
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
                                "value": "value",
                                "raw": "\"value\"",
                                "start": 318,
                                "end": 325
                              },
                              "start": 311,
                              "end": 326
                            }
                          ],
                          "start": 297,
                          "end": 336
                        },
                        "expression": false,
                        "start": 294,
                        "end": 336
                      },
                      "kind": "method",
                      "computed": true,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 273,
                      "end": 336
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localOtherField",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 346,
                        "end": 361
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
                                "value": 42,
                                "raw": "42",
                                "start": 386,
                                "end": 388
                              },
                              "start": 379,
                              "end": 389
                            }
                          ],
                          "start": 365,
                          "end": 399
                        },
                        "expression": false,
                        "start": 362,
                        "end": 399
                      },
                      "kind": "method",
                      "computed": true,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 345,
                      "end": 399
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localStaticField",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 416,
                        "end": 432
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
                                      "name": "static",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 459,
                                      "end": 465
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 467,
                                      "end": 471
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 459,
                                    "end": 471
                                  }
                                ],
                                "start": 457,
                                "end": 473
                              },
                              "start": 450,
                              "end": 474
                            }
                          ],
                          "start": 436,
                          "end": 484
                        },
                        "expression": false,
                        "start": 433,
                        "end": 484
                      },
                      "kind": "method",
                      "computed": true,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 408,
                      "end": 484
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localStaticField",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 501,
                        "end": 517
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
                                      "name": "static",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 544,
                                      "end": 550
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": "sometimes",
                                      "raw": "\"sometimes\"",
                                      "start": 552,
                                      "end": 563
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 544,
                                    "end": 563
                                  }
                                ],
                                "start": 542,
                                "end": 565
                              },
                              "start": 535,
                              "end": 566
                            }
                          ],
                          "start": 521,
                          "end": 576
                        },
                        "expression": false,
                        "start": 518,
                        "end": 576
                      },
                      "kind": "method",
                      "computed": true,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 493,
                      "end": 576
                    }
                  ],
                  "start": 263,
                  "end": 582
                },
                "abstract": false,
                "declare": false,
                "start": 237,
                "end": 582
              },
              "start": 230,
              "end": 582
            }
          ],
          "start": 21,
          "end": 584
        },
        "expression": false,
        "start": 7,
        "end": 584
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 584
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 584
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
    "value": "function",
    "start": 7,
    "end": 15,
    "range": [
      7,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 16,
    "end": 18,
    "range": [
      16,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 27,
    "end": 32,
    "range": [
      27,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "localClassFieldName",
    "start": 33,
    "end": 52,
    "range": [
      33,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 55,
    "end": 59,
    "range": [
      55,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 60,
    "end": 66,
    "range": [
      60,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 71,
    "end": 74,
    "range": [
      71,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "String",
    "value": "\"g1\"",
    "start": 77,
    "end": 81,
    "range": [
      77,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "String",
    "value": "\"g2\"",
    "start": 84,
    "end": 88,
    "range": [
      84,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 94,
    "end": 99,
    "range": [
      94,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "localOtherField",
    "start": 100,
    "end": 115,
    "range": [
      100,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "localClassFieldName",
    "start": 118,
    "end": 137,
    "range": [
      118,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 138,
    "end": 141,
    "range": [
      138,
      141
    ]
  },
  {
    "type": "String",
    "value": "\"g1\"",
    "start": 142,
    "end": 146,
    "range": [
      142,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "String",
    "value": "\"g2\"",
    "start": 149,
    "end": 153,
    "range": [
      149,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "String",
    "value": "\"g1\"",
    "start": 156,
    "end": 160,
    "range": [
      156,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 166,
    "end": 171,
    "range": [
      166,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "localStaticField",
    "start": 172,
    "end": 188,
    "range": [
      172,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 191,
    "end": 195,
    "range": [
      191,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 196,
    "end": 202,
    "range": [
      196,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 207,
    "end": 210,
    "range": [
      207,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "String",
    "value": "\"s1\"",
    "start": 213,
    "end": 217,
    "range": [
      213,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "String",
    "value": "\"s2\"",
    "start": 220,
    "end": 224,
    "range": [
      220,
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
    "type": "Keyword",
    "value": "return",
    "start": 230,
    "end": 236,
    "range": [
      230,
      236
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 237,
    "end": 242,
    "range": [
      237,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "ParameterizedHolder",
    "start": 243,
    "end": 262,
    "range": [
      243,
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
    "type": "Punctuator",
    "value": "[",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "localClassFieldName",
    "start": 274,
    "end": 293,
    "range": [
      274,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 311,
    "end": 317,
    "range": [
      311,
      317
    ]
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 318,
    "end": 325,
    "range": [
      318,
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
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Identifier",
    "value": "localOtherField",
    "start": 346,
    "end": 361,
    "range": [
      346,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 379,
    "end": 385,
    "range": [
      379,
      385
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 386,
    "end": 388,
    "range": [
      386,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 408,
    "end": 414,
    "range": [
      408,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "localStaticField",
    "start": 416,
    "end": 432,
    "range": [
      416,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 450,
    "end": 456,
    "range": [
      450,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "static",
    "start": 459,
    "end": 465,
    "range": [
      459,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 467,
    "end": 471,
    "range": [
      467,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 493,
    "end": 499,
    "range": [
      493,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "localStaticField",
    "start": 501,
    "end": 517,
    "range": [
      501,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 535,
    "end": 541,
    "range": [
      535,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "static",
    "start": 544,
    "end": 550,
    "range": [
      544,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "String",
    "value": "\"sometimes\"",
    "start": 552,
    "end": 563,
    "range": [
      552,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  }
]
```
