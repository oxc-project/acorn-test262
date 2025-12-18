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
            "name": "createCacheReducer",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 24
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 28,
                    "end": 29
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 38,
                    "end": 44
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 28,
                  "end": 44
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "QR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 48
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 46,
                  "end": 48
                }
              ],
              "start": 27,
              "end": 49
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "queries",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cache",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 64,
                        "end": 69
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "N",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 70,
                              "end": 71
                            },
                            "typeArguments": null,
                            "start": 70,
                            "end": 71
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "QR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 73,
                              "end": 75
                            },
                            "typeArguments": null,
                            "start": 73,
                            "end": 75
                          }
                        ],
                        "start": 69,
                        "end": 76
                      },
                      "start": 64,
                      "end": 76
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "queries",
                        "raw": "\"queries\"",
                        "start": 77,
                        "end": 86
                      },
                      "start": 77,
                      "end": 86
                    },
                    "start": 64,
                    "end": 87
                  },
                  "start": 62,
                  "end": 87
                },
                "start": 55,
                "end": 87
              }
            ],
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
                        "name": "queriesMap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 116
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 119,
                          "end": 121
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "QR",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 125,
                            "end": 127
                          },
                          "typeArguments": null,
                          "start": 125,
                          "end": 127
                        },
                        "start": 119,
                        "end": 127
                      },
                      "definite": false,
                      "start": 106,
                      "end": 127
                    }
                  ],
                  "declare": false,
                  "start": 100,
                  "end": 128
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
                        "name": "initialState",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 152
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "queries",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 165,
                              "end": 172
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "queriesMap",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 174,
                              "end": 184
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 165,
                            "end": 184
                          }
                        ],
                        "start": 155,
                        "end": 191
                      },
                      "definite": false,
                      "start": 140,
                      "end": 191
                    }
                  ],
                  "declare": false,
                  "start": 134,
                  "end": 192
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 206,
                          "end": 211
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "initialState",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 214,
                          "end": 226
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 206,
                        "end": 226
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 231,
                      "end": 236
                    },
                    "id": null,
                    "generator": false,
                    "start": 205,
                    "end": 236
                  },
                  "start": 198,
                  "end": 237
                }
              ],
              "start": 94,
              "end": 239
            },
            "id": null,
            "generator": false,
            "start": 27,
            "end": 239
          },
          "definite": false,
          "start": 6,
          "end": 239
        }
      ],
      "declare": false,
      "start": 0,
      "end": 240
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cache",
          "optional": false,
          "typeAnnotation": null,
          "start": 254,
          "end": 259
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 261
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 270,
                "end": 276
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 260,
              "end": 276
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "QR",
                "optional": false,
                "typeAnnotation": null,
                "start": 278,
                "end": 280
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 278,
              "end": 280
            }
          ],
          "start": 259,
          "end": 281
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "queries",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 297
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "QK",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 310,
                    "end": 312
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QR",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 322,
                        "end": 324
                      },
                      "typeArguments": null,
                      "start": 322,
                      "end": 324
                    },
                    "start": 316,
                    "end": 324
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReturnType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 327,
                      "end": 337
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "createCacheReducer",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 345,
                            "end": 363
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "QR",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 364,
                                  "end": 366
                                },
                                "typeArguments": null,
                                "start": 364,
                                "end": 366
                              }
                            ],
                            "start": 363,
                            "end": 367
                          },
                          "start": 338,
                          "end": 367
                        }
                      ],
                      "start": 337,
                      "end": 368
                    },
                    "start": 327,
                    "end": 368
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 299,
                  "end": 375
                },
                "start": 297,
                "end": 375
              },
              "accessibility": null,
              "static": false,
              "start": 290,
              "end": 376
            }
          ],
          "start": 284,
          "end": 378
        },
        "declare": false,
        "start": 249,
        "end": 379
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 242,
      "end": 379
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 379
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
    "value": "createCacheReducer",
    "start": 6,
    "end": 24,
    "range": [
      6,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 30,
    "end": 37,
    "range": [
      30,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 38,
    "end": 44,
    "range": [
      38,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "QR",
    "start": 46,
    "end": 48,
    "range": [
      46,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "queries",
    "start": 55,
    "end": 62,
    "range": [
      55,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "Cache",
    "start": 64,
    "end": 69,
    "range": [
      64,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "QR",
    "start": 73,
    "end": 75,
    "range": [
      73,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "String",
    "value": "\"queries\"",
    "start": 77,
    "end": 86,
    "range": [
      77,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 91,
    "end": 93,
    "range": [
      91,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 100,
    "end": 105,
    "range": [
      100,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "queriesMap",
    "start": 106,
    "end": 116,
    "range": [
      106,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 122,
    "end": 124,
    "range": [
      122,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "QR",
    "start": 125,
    "end": 127,
    "range": [
      125,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 134,
    "end": 139,
    "range": [
      134,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "initialState",
    "start": 140,
    "end": 152,
    "range": [
      140,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "queries",
    "start": 165,
    "end": 172,
    "range": [
      165,
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
    "value": "queriesMap",
    "start": 174,
    "end": 184,
    "range": [
      174,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 198,
    "end": 204,
    "range": [
      198,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 206,
    "end": 211,
    "range": [
      206,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "initialState",
    "start": 214,
    "end": 226,
    "range": [
      214,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 228,
    "end": 230,
    "range": [
      228,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 231,
    "end": 236,
    "range": [
      231,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 242,
    "end": 248,
    "range": [
      242,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 249,
    "end": 253,
    "range": [
      249,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "Cache",
    "start": 254,
    "end": 259,
    "range": [
      254,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 262,
    "end": 269,
    "range": [
      262,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 270,
    "end": 276,
    "range": [
      270,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "QR",
    "start": 278,
    "end": 280,
    "range": [
      278,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "queries",
    "start": 290,
    "end": 297,
    "range": [
      290,
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
    "type": "Punctuator",
    "value": "{",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "QK",
    "start": 310,
    "end": 312,
    "range": [
      310,
      312
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 313,
    "end": 315,
    "range": [
      313,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 316,
    "end": 321,
    "range": [
      316,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "QR",
    "start": 322,
    "end": 324,
    "range": [
      322,
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
    "value": ":",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 327,
    "end": 337,
    "range": [
      327,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 338,
    "end": 344,
    "range": [
      338,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "createCacheReducer",
    "start": 345,
    "end": 363,
    "range": [
      345,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "QR",
    "start": 364,
    "end": 366,
    "range": [
      364,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 367,
    "end": 368,
    "range": [
      367,
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
    "start": 374,
    "end": 375,
    "range": [
      374,
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
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  }
]
```
