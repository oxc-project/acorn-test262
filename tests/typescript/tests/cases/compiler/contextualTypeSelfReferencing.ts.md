__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "narrow",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 79
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 83
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 83
          }
        ],
        "start": 79,
        "end": 84
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 90
          },
          "typeArguments": null,
          "start": 87,
          "end": 90
        },
        "extendsType": {
          "type": "TSStringKeyword",
          "start": 99,
          "end": 105
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 113
          },
          "typeArguments": null,
          "start": 110,
          "end": 113
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 121
            },
            "typeArguments": null,
            "start": 118,
            "end": 121
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSUnknownKeyword",
                "start": 131,
                "end": 138
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSUnknownKeyword",
                    "start": 143,
                    "end": 150
                  },
                  "start": 143,
                  "end": 152
                },
                "start": 140,
                "end": 152
              }
            ],
            "start": 130,
            "end": 153
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 161
            },
            "typeArguments": null,
            "start": 158,
            "end": 161
          },
          "falseType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "def",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 189
                },
                "typeArguments": null,
                "start": 186,
                "end": 189
              },
              "start": 180,
              "end": 189
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "narrow",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 198
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "def",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 199,
                        "end": 202
                      },
                      "typeArguments": null,
                      "start": 199,
                      "end": 202
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 203,
                        "end": 204
                      },
                      "typeArguments": null,
                      "start": 203,
                      "end": 204
                    },
                    "start": 199,
                    "end": 205
                  }
                ],
                "start": 198,
                "end": 206
              },
              "start": 192,
              "end": 206
            },
            "optional": false,
            "readonly": null,
            "start": 166,
            "end": 213
          },
          "start": 118,
          "end": 213
        },
        "start": 87,
        "end": 213
      },
      "declare": false,
      "start": 68,
      "end": 214
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
            "name": "parse",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "def",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 238,
                        "end": 241
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 238,
                      "end": 241
                    }
                  ],
                  "start": 237,
                  "end": 242
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "def",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "narrow",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 248,
                          "end": 254
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "def",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 255,
                                "end": 258
                              },
                              "typeArguments": null,
                              "start": 255,
                              "end": 258
                            }
                          ],
                          "start": 254,
                          "end": 259
                        },
                        "start": 248,
                        "end": 259
                      },
                      "start": 246,
                      "end": 259
                    },
                    "start": 243,
                    "end": 259
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "def",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 264,
                      "end": 267
                    },
                    "typeArguments": null,
                    "start": 264,
                    "end": 267
                  },
                  "start": 261,
                  "end": 267
                },
                "start": 237,
                "end": 267
              },
              "start": 235,
              "end": 267
            },
            "start": 230,
            "end": 267
          },
          "init": null,
          "definite": false,
          "start": 230,
          "end": 267
        }
      ],
      "declare": true,
      "start": 216,
      "end": 268
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
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 282
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "parse",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 290
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 294,
                          "end": 295
                        },
                        "value": {
                          "type": "Literal",
                          "value": "foo",
                          "raw": "\"foo\"",
                          "start": 297,
                          "end": 302
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 294,
                        "end": 302
                      }
                    ],
                    "start": 292,
                    "end": 304
                  }
                ],
                "start": 291,
                "end": 305
              }
            ],
            "optional": false,
            "start": 285,
            "end": 306
          },
          "definite": false,
          "start": 276,
          "end": 306
        }
      ],
      "declare": false,
      "start": 270,
      "end": 307
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 307
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 68,
    "end": 72,
    "range": [
      68,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "narrow",
    "start": 73,
    "end": 79,
    "range": [
      73,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 80,
    "end": 83,
    "range": [
      80,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 87,
    "end": 90,
    "range": [
      87,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 91,
    "end": 98,
    "range": [
      91,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 99,
    "end": 105,
    "range": [
      99,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 110,
    "end": 113,
    "range": [
      110,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 118,
    "end": 121,
    "range": [
      118,
      121
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 122,
    "end": 129,
    "range": [
      122,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 131,
    "end": 138,
    "range": [
      131,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 140,
    "end": 143,
    "range": [
      140,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 143,
    "end": 150,
    "range": [
      143,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 158,
    "end": 161,
    "range": [
      158,
      161
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
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 177,
    "end": 179,
    "range": [
      177,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 180,
    "end": 185,
    "range": [
      180,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 186,
    "end": 189,
    "range": [
      186,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "narrow",
    "start": 192,
    "end": 198,
    "range": [
      192,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 199,
    "end": 202,
    "range": [
      199,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
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
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 216,
    "end": 223,
    "range": [
      216,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 224,
    "end": 229,
    "range": [
      224,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 230,
    "end": 235,
    "range": [
      230,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 238,
    "end": 241,
    "range": [
      238,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 243,
    "end": 246,
    "range": [
      243,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "narrow",
    "start": 248,
    "end": 254,
    "range": [
      248,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 255,
    "end": 258,
    "range": [
      255,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "=>",
    "start": 261,
    "end": 263,
    "range": [
      261,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 264,
    "end": 267,
    "range": [
      264,
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
    "value": "const",
    "start": 270,
    "end": 275,
    "range": [
      270,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 276,
    "end": 282,
    "range": [
      276,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 285,
    "end": 290,
    "range": [
      285,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 297,
    "end": 302,
    "range": [
      297,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
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
  }
]
```
