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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 41,
                  "end": 48
                },
                "start": 41,
                "end": 50
              },
              "start": 39,
              "end": 50
            },
            "start": 36,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 36,
          "end": 50
        }
      ],
      "declare": true,
      "start": 22,
      "end": 51
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 61
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 67
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "flatMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 75
              },
              "optional": false,
              "computed": false,
              "start": 64,
              "end": 75
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 79
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 86
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 90,
                      "end": 93
                    },
                    "typeArguments": null,
                    "start": 90,
                    "end": 93
                  },
                  "start": 83,
                  "end": 93
                },
                "id": null,
                "generator": false,
                "start": 76,
                "end": 93
              }
            ],
            "optional": false,
            "start": 64,
            "end": 94
          },
          "definite": false,
          "start": 58,
          "end": 94
        }
      ],
      "declare": false,
      "start": 52,
      "end": 95
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 110
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 124
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 125,
                "end": 131
              }
            ],
            "start": 124,
            "end": 132
          },
          "start": 119,
          "end": 132
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 133,
        "end": 135
      },
      "declare": false,
      "start": 97,
      "end": 135
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
            "name": "repro_43249",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 189
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 200,
                    "end": 207
                  },
                  "start": 198,
                  "end": 207
                },
                "start": 193,
                "end": 207
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 229,
                        "end": 234
                      },
                      "prefix": true,
                      "start": 222,
                      "end": 234
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 239,
                      "end": 247
                    },
                    "start": 222,
                    "end": 247
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 269,
                            "end": 274
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "No",
                              "raw": "\"No\"",
                              "start": 275,
                              "end": 279
                            }
                          ],
                          "start": 265,
                          "end": 280
                        },
                        "start": 259,
                        "end": 281
                      }
                    ],
                    "start": 249,
                    "end": 287
                  },
                  "alternate": null,
                  "start": 218,
                  "end": 287
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
                        "name": "match",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 298,
                        "end": 303
                      },
                      "init": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 306,
                              "end": 311
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "match",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 312,
                              "end": 317
                            },
                            "optional": false,
                            "computed": false,
                            "start": 306,
                            "end": 317
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "/anything/",
                              "regex": {
                                "pattern": "anything",
                                "flags": ""
                              },
                              "start": 318,
                              "end": 328
                            }
                          ],
                          "optional": false,
                          "start": 306,
                          "end": 329
                        },
                        "operator": "||",
                        "right": {
                          "type": "ArrayExpression",
                          "elements": [],
                          "start": 333,
                          "end": 335
                        },
                        "start": 306,
                        "end": 335
                      },
                      "definite": false,
                      "start": 298,
                      "end": 335
                    }
                  ],
                  "declare": false,
                  "start": 292,
                  "end": 336
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
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
                            "name": "extracted",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 350,
                            "end": 359
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 347,
                        "end": 360
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "match",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 363,
                        "end": 368
                      },
                      "definite": false,
                      "start": 347,
                      "end": 368
                    }
                  ],
                  "declare": false,
                  "start": 341,
                  "end": 369
                }
              ],
              "start": 212,
              "end": 371
            },
            "id": null,
            "generator": false,
            "start": 192,
            "end": 371
          },
          "definite": false,
          "start": 178,
          "end": 371
        }
      ],
      "declare": false,
      "start": 172,
      "end": 372
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 383,
        "end": 384
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 388
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 385,
            "end": 388
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 391
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 400,
              "end": 406
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 390,
            "end": 406
          }
        ],
        "start": 384,
        "end": 407
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FlatArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 420
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Arr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 421,
                      "end": 424
                    },
                    "typeArguments": null,
                    "start": 421,
                    "end": 424
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 426,
                    "end": 429
                  }
                ],
                "start": 420,
                "end": 430
              },
              "start": 411,
              "end": 430
            },
            "start": 409,
            "end": 430
          },
          "start": 408,
          "end": 430
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FlatArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 444
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Arr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 445,
                      "end": 448
                    },
                    "typeArguments": null,
                    "start": 445,
                    "end": 448
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 450,
                      "end": 451
                    },
                    "typeArguments": null,
                    "start": 450,
                    "end": 451
                  }
                ],
                "start": 444,
                "end": 452
              },
              "start": 435,
              "end": 452
            },
            "start": 433,
            "end": 452
          },
          "start": 432,
          "end": 452
        }
      ],
      "returnType": null,
      "body": {
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 461
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 465
              },
              "start": 460,
              "end": 465
            },
            "directive": null,
            "start": 460,
            "end": 466
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 471,
                "end": 472
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 475,
                "end": 476
              },
              "start": 471,
              "end": 476
            },
            "directive": null,
            "start": 471,
            "end": 477
          }
        ],
        "start": 454,
        "end": 489
      },
      "expression": false,
      "start": 374,
      "end": 489
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 489
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 22,
    "end": 29,
    "range": [
      22,
      29
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 30,
    "end": 35,
    "range": [
      30,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 36,
    "end": 39,
    "range": [
      36,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 41,
    "end": 48,
    "range": [
      41,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 52,
    "end": 57,
    "range": [
      52,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 58,
    "end": 61,
    "range": [
      58,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 64,
    "end": 67,
    "range": [
      64,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "flatMap",
    "start": 68,
    "end": 75,
    "range": [
      68,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 76,
    "end": 79,
    "range": [
      76,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 80,
    "end": 82,
    "range": [
      80,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 83,
    "end": 86,
    "range": [
      83,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 87,
    "end": 89,
    "range": [
      87,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 90,
    "end": 93,
    "range": [
      90,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 97,
    "end": 106,
    "range": [
      97,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 107,
    "end": 110,
    "range": [
      107,
      110
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 111,
    "end": 118,
    "range": [
      111,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 119,
    "end": 124,
    "range": [
      119,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 125,
    "end": 131,
    "range": [
      125,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "}",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 172,
    "end": 177,
    "range": [
      172,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "repro_43249",
    "start": 178,
    "end": 189,
    "range": [
      178,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 193,
    "end": 198,
    "range": [
      193,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 200,
    "end": 207,
    "range": [
      200,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 209,
    "end": 211,
    "range": [
      209,
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
    "type": "Keyword",
    "value": "if",
    "start": 218,
    "end": 220,
    "range": [
      218,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 222,
    "end": 228,
    "range": [
      222,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 229,
    "end": 234,
    "range": [
      229,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 235,
    "end": 238,
    "range": [
      235,
      238
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 239,
    "end": 247,
    "range": [
      239,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 259,
    "end": 264,
    "range": [
      259,
      264
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 265,
    "end": 268,
    "range": [
      265,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 269,
    "end": 274,
    "range": [
      269,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "String",
    "value": "\"No\"",
    "start": 275,
    "end": 279,
    "range": [
      275,
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
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 292,
    "end": 297,
    "range": [
      292,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 298,
    "end": 303,
    "range": [
      298,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 306,
    "end": 311,
    "range": [
      306,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 312,
    "end": 317,
    "range": [
      312,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/anything/",
    "regex": {
      "flags": "",
      "pattern": "anything"
    },
    "start": 318,
    "end": 328,
    "range": [
      318,
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
    "value": "||",
    "start": 330,
    "end": 332,
    "range": [
      330,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 341,
    "end": 346,
    "range": [
      341,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "extracted",
    "start": 350,
    "end": 359,
    "range": [
      350,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 363,
    "end": 368,
    "range": [
      363,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 374,
    "end": 382,
    "range": [
      374,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "Arr",
    "start": 385,
    "end": 388,
    "range": [
      385,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 392,
    "end": 399,
    "range": [
      392,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 400,
    "end": 406,
    "range": [
      400,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "FlatArray",
    "start": 411,
    "end": 420,
    "range": [
      411,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "Arr",
    "start": 421,
    "end": 424,
    "range": [
      421,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 426,
    "end": 429,
    "range": [
      426,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "FlatArray",
    "start": 435,
    "end": 444,
    "range": [
      435,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "Arr",
    "start": 445,
    "end": 448,
    "range": [
      445,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 451,
    "end": 452,
    "range": [
      451,
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
    "value": "x",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 475,
    "end": 476,
    "range": [
      475,
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
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  }
]
```
