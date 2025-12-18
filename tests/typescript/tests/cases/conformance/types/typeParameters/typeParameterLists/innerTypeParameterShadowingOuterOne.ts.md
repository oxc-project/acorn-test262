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
        "start": 92,
        "end": 93
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 108
              },
              "typeArguments": null,
              "start": 104,
              "end": 108
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 94,
            "end": 108
          }
        ],
        "start": 93,
        "end": 109
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 128
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 130
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 145
                    },
                    "typeArguments": null,
                    "start": 139,
                    "end": 145
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 129,
                  "end": 145
                }
              ],
              "start": 128,
              "end": 146
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 166,
                              "end": 167
                            },
                            "typeArguments": null,
                            "start": 166,
                            "end": 167
                          },
                          "start": 164,
                          "end": 167
                        },
                        "start": 163,
                        "end": 167
                      },
                      "init": null,
                      "definite": false,
                      "start": 163,
                      "end": 167
                    }
                  ],
                  "declare": false,
                  "start": 159,
                  "end": 168
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 177,
                        "end": 178
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 179,
                        "end": 186
                      },
                      "optional": false,
                      "computed": false,
                      "start": 177,
                      "end": 186
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 177,
                    "end": 188
                  },
                  "directive": null,
                  "start": 177,
                  "end": 189
                }
              ],
              "start": 149,
              "end": 195
            },
            "expression": false,
            "start": 118,
            "end": 195
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 207,
                        "end": 208
                      },
                      "typeArguments": null,
                      "start": 207,
                      "end": 208
                    },
                    "start": 205,
                    "end": 208
                  },
                  "start": 204,
                  "end": 208
                },
                "init": null,
                "definite": false,
                "start": 204,
                "end": 208
              }
            ],
            "declare": false,
            "start": 200,
            "end": 209
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 215
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getDate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 223
                },
                "optional": false,
                "computed": false,
                "start": 214,
                "end": 223
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 214,
              "end": 225
            },
            "directive": null,
            "start": 214,
            "end": 226
          }
        ],
        "start": 112,
        "end": 228
      },
      "expression": false,
      "start": 83,
      "end": 228
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 241
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 243
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 256
              },
              "typeArguments": null,
              "start": 252,
              "end": 256
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 242,
            "end": 256
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 259
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 272
              },
              "typeArguments": null,
              "start": 268,
              "end": 272
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 258,
            "end": 272
          }
        ],
        "start": 241,
        "end": 273
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 292
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 294
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 303,
                      "end": 309
                    },
                    "typeArguments": null,
                    "start": 303,
                    "end": 309
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 293,
                  "end": 309
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 312
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 321,
                      "end": 327
                    },
                    "typeArguments": null,
                    "start": 321,
                    "end": 327
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 311,
                  "end": 327
                }
              ],
              "start": 292,
              "end": 328
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 348,
                              "end": 349
                            },
                            "typeArguments": null,
                            "start": 348,
                            "end": 349
                          },
                          "start": 346,
                          "end": 349
                        },
                        "start": 345,
                        "end": 349
                      },
                      "init": null,
                      "definite": false,
                      "start": 345,
                      "end": 349
                    }
                  ],
                  "declare": false,
                  "start": 341,
                  "end": 350
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 359,
                        "end": 360
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 361,
                        "end": 368
                      },
                      "optional": false,
                      "computed": false,
                      "start": 359,
                      "end": 368
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 359,
                    "end": 370
                  },
                  "directive": null,
                  "start": 359,
                  "end": 371
                }
              ],
              "start": 331,
              "end": 377
            },
            "expression": false,
            "start": 282,
            "end": 377
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 389,
                        "end": 390
                      },
                      "typeArguments": null,
                      "start": 389,
                      "end": 390
                    },
                    "start": 387,
                    "end": 390
                  },
                  "start": 386,
                  "end": 390
                },
                "init": null,
                "definite": false,
                "start": 386,
                "end": 390
              }
            ],
            "declare": false,
            "start": 382,
            "end": 391
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 396,
                  "end": 397
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getDate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 398,
                  "end": 405
                },
                "optional": false,
                "computed": false,
                "start": 396,
                "end": 405
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 396,
              "end": 407
            },
            "directive": null,
            "start": 396,
            "end": 408
          }
        ],
        "start": 276,
        "end": 410
      },
      "expression": false,
      "start": 230,
      "end": 410
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 83,
  "end": 599
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 83,
    "end": 91,
    "range": [
      83,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 96,
    "end": 103,
    "range": [
      96,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 104,
    "end": 108,
    "range": [
      104,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 118,
    "end": 126,
    "range": [
      118,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 131,
    "end": 138,
    "range": [
      131,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 139,
    "end": 145,
    "range": [
      139,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 159,
    "end": 162,
    "range": [
      159,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 179,
    "end": 186,
    "range": [
      179,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 200,
    "end": 203,
    "range": [
      200,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 207,
    "end": 208,
    "range": [
      207,
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
    "type": "Identifier",
    "value": "x",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "getDate",
    "start": 216,
    "end": 223,
    "range": [
      216,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 230,
    "end": 238,
    "range": [
      230,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 239,
    "end": 241,
    "range": [
      239,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 244,
    "end": 251,
    "range": [
      244,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 252,
    "end": 256,
    "range": [
      252,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 260,
    "end": 267,
    "range": [
      260,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 268,
    "end": 272,
    "range": [
      268,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 282,
    "end": 290,
    "range": [
      282,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 295,
    "end": 302,
    "range": [
      295,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 303,
    "end": 309,
    "range": [
      303,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 313,
    "end": 320,
    "range": [
      313,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 321,
    "end": 327,
    "range": [
      321,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Keyword",
    "value": "var",
    "start": 341,
    "end": 344,
    "range": [
      341,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 361,
    "end": 368,
    "range": [
      361,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 382,
    "end": 385,
    "range": [
      382,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "getDate",
    "start": 398,
    "end": 405,
    "range": [
      398,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  }
]
```
