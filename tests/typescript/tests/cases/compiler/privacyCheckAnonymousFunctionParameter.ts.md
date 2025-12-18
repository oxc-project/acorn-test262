__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 15,
              "end": 16
            },
            "definite": false,
            "start": 11,
            "end": 16
          }
        ],
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 70
      },
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
              "start": 71,
              "end": 72
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 71,
            "end": 72
          }
        ],
        "start": 70,
        "end": 73
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 74,
        "end": 77
      },
      "declare": false,
      "start": 52,
      "end": 77
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Query",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 94
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromDoWhile",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
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
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 129,
                    "end": 130
                  }
                ],
                "start": 128,
                "end": 131
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "doWhile",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Iterator",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 148,
                                "end": 156
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 157,
                                      "end": 158
                                    },
                                    "typeArguments": null,
                                    "start": 157,
                                    "end": 158
                                  }
                                ],
                                "start": 156,
                                "end": 159
                              },
                              "start": 148,
                              "end": 159
                            },
                            "start": 146,
                            "end": 159
                          },
                          "start": 142,
                          "end": 159
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 164,
                          "end": 171
                        },
                        "start": 161,
                        "end": 171
                      },
                      "start": 141,
                      "end": 171
                    },
                    "start": 139,
                    "end": 171
                  },
                  "start": 132,
                  "end": 171
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 182
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 183,
                          "end": 184
                        },
                        "typeArguments": null,
                        "start": 183,
                        "end": 184
                      }
                    ],
                    "start": 182,
                    "end": 185
                  },
                  "start": 174,
                  "end": 185
                },
                "start": 172,
                "end": 185
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 203,
                      "end": 207
                    },
                    "start": 196,
                    "end": 208
                  }
                ],
                "start": 186,
                "end": 214
              },
              "expression": false,
              "start": 108,
              "end": 214
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 101,
            "end": 214
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fromOrderBy",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 240
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fromDoWhile",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 260,
                      "end": 271
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 272,
                            "end": 276
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 301,
                                "end": 305
                              },
                              "start": 294,
                              "end": 306
                            }
                          ],
                          "start": 280,
                          "end": 316
                        },
                        "id": null,
                        "generator": false,
                        "start": 272,
                        "end": 316
                      }
                    ],
                    "optional": false,
                    "start": 260,
                    "end": 317
                  },
                  "start": 253,
                  "end": 318
                }
              ],
              "start": 243,
              "end": 324
            },
            "expression": false,
            "start": 220,
            "end": 324
          }
        ],
        "start": 95,
        "end": 326
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 79,
      "end": 326
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 326
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
    "value": "var",
    "start": 7,
    "end": 10,
    "range": [
      7,
      10
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 52,
    "end": 61,
    "range": [
      52,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 62,
    "end": 70,
    "range": [
      62,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 79,
    "end": 88,
    "range": [
      79,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "Query",
    "start": 89,
    "end": 94,
    "range": [
      89,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 101,
    "end": 107,
    "range": [
      101,
      107
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 108,
    "end": 116,
    "range": [
      108,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "fromDoWhile",
    "start": 117,
    "end": 128,
    "range": [
      117,
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
    "type": "Punctuator",
    "value": ">",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "doWhile",
    "start": 132,
    "end": 139,
    "range": [
      132,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 142,
    "end": 146,
    "range": [
      142,
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
    "value": "Iterator",
    "start": 148,
    "end": 156,
    "range": [
      148,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 161,
    "end": 163,
    "range": [
      161,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 164,
    "end": 171,
    "range": [
      164,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 174,
    "end": 182,
    "range": [
      174,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 196,
    "end": 202,
    "range": [
      196,
      202
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 203,
    "end": 207,
    "range": [
      203,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 220,
    "end": 228,
    "range": [
      220,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "fromOrderBy",
    "start": 229,
    "end": 240,
    "range": [
      229,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 253,
    "end": 259,
    "range": [
      253,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "fromDoWhile",
    "start": 260,
    "end": 271,
    "range": [
      260,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 272,
    "end": 276,
    "range": [
      272,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 277,
    "end": 279,
    "range": [
      277,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 294,
    "end": 300,
    "range": [
      294,
      300
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 301,
    "end": 305,
    "range": [
      301,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  }
]
```
