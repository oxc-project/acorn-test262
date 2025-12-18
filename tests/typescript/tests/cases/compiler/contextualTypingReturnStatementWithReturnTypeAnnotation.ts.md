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
        "name": "PropOfRaw",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
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
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeOperator",
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 30
                },
                "typeArguments": null,
                "start": 29,
                "end": 30
              },
              "start": 29,
              "end": 32
            },
            "start": 20,
            "end": 32
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "not-array",
              "raw": "\"not-array\"",
              "start": 35,
              "end": 46
            },
            "start": 35,
            "end": 46
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "no-prop",
              "raw": "\"no-prop\"",
              "start": 49,
              "end": 58
            },
            "start": 49,
            "end": 58
          }
        ],
        "start": 20,
        "end": 58
      },
      "declare": false,
      "start": 0,
      "end": 59
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isString",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 86
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "text",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 93,
              "end": 100
            },
            "start": 91,
            "end": 100
          },
          "start": 87,
          "end": 100
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 107
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 111,
              "end": 117
            },
            "start": 111,
            "end": 117
          },
          "start": 103,
          "end": 117
        },
        "start": 101,
        "end": 117
      },
      "body": null,
      "expression": false,
      "start": 61,
      "end": 118
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getPropFromRaw",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 151
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 152,
              "end": 153
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 152,
            "end": 153
          }
        ],
        "start": 151,
        "end": 154
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "files",
                    "raw": "\"files\"",
                    "start": 164,
                    "end": 171
                  },
                  "start": 164,
                  "end": 171
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "include",
                    "raw": "\"include\"",
                    "start": 174,
                    "end": 183
                  },
                  "start": 174,
                  "end": 183
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "exclude",
                    "raw": "\"exclude\"",
                    "start": 186,
                    "end": 195
                  },
                  "start": 186,
                  "end": 195
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "references",
                    "raw": "\"references\"",
                    "start": 198,
                    "end": 210
                  },
                  "start": 198,
                  "end": 210
                }
              ],
              "start": 164,
              "end": 210
            },
            "start": 162,
            "end": 210
          },
          "start": 158,
          "end": 210
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "validateElement",
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 239,
                      "end": 246
                    },
                    "start": 237,
                    "end": 246
                  },
                  "start": 232,
                  "end": 246
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 251,
                  "end": 258
                },
                "start": 248,
                "end": 258
              },
              "start": 231,
              "end": 258
            },
            "start": 229,
            "end": 258
          },
          "start": 214,
          "end": 258
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "elementTypeName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 279,
              "end": 285
            },
            "start": 277,
            "end": 285
          },
          "start": 262,
          "end": 285
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropOfRaw",
            "optional": false,
            "typeAnnotation": null,
            "start": 289,
            "end": 298
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
                  "start": 299,
                  "end": 300
                },
                "typeArguments": null,
                "start": 299,
                "end": 300
              }
            ],
            "start": 298,
            "end": 301
          },
          "start": 289,
          "end": 301
        },
        "start": 287,
        "end": 301
      },
      "body": null,
      "expression": false,
      "start": 120,
      "end": 302
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getSpecsFromRaw",
        "optional": false,
        "typeAnnotation": null,
        "start": 313,
        "end": 328
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "files",
                    "raw": "\"files\"",
                    "start": 338,
                    "end": 345
                  },
                  "start": 338,
                  "end": 345
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "include",
                    "raw": "\"include\"",
                    "start": 348,
                    "end": 357
                  },
                  "start": 348,
                  "end": 357
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "exclude",
                    "raw": "\"exclude\"",
                    "start": 360,
                    "end": 369
                  },
                  "start": 360,
                  "end": 369
                }
              ],
              "start": 338,
              "end": 369
            },
            "start": 336,
            "end": 369
          },
          "start": 332,
          "end": 369
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropOfRaw",
            "optional": false,
            "typeAnnotation": null,
            "start": 373,
            "end": 382
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 383,
                "end": 389
              }
            ],
            "start": 382,
            "end": 390
          },
          "start": 373,
          "end": 390
        },
        "start": 371,
        "end": 390
      },
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
                "name": "getPropFromRaw",
                "optional": false,
                "typeAnnotation": null,
                "start": 402,
                "end": 416
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 421
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 431
                },
                {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 433,
                  "end": 441
                }
              ],
              "optional": false,
              "start": 402,
              "end": 442
            },
            "start": 395,
            "end": 443
          }
        ],
        "start": 391,
        "end": 445
      },
      "expression": false,
      "start": 304,
      "end": 445
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 445
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "PropOfRaw",
    "start": 5,
    "end": 14,
    "range": [
      5,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 20,
    "end": 28,
    "range": [
      20,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "String",
    "value": "\"not-array\"",
    "start": 35,
    "end": 46,
    "range": [
      35,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "String",
    "value": "\"no-prop\"",
    "start": 49,
    "end": 58,
    "range": [
      49,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 61,
    "end": 68,
    "range": [
      61,
      68
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 69,
    "end": 77,
    "range": [
      69,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 78,
    "end": 86,
    "range": [
      78,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 87,
    "end": 91,
    "range": [
      87,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 93,
    "end": 100,
    "range": [
      93,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 103,
    "end": 107,
    "range": [
      103,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 108,
    "end": 110,
    "range": [
      108,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 111,
    "end": 117,
    "range": [
      111,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 120,
    "end": 127,
    "range": [
      120,
      127
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 128,
    "end": 136,
    "range": [
      128,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "getPropFromRaw",
    "start": 137,
    "end": 151,
    "range": [
      137,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 158,
    "end": 162,
    "range": [
      158,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "String",
    "value": "\"files\"",
    "start": 164,
    "end": 171,
    "range": [
      164,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "String",
    "value": "\"include\"",
    "start": 174,
    "end": 183,
    "range": [
      174,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "String",
    "value": "\"exclude\"",
    "start": 186,
    "end": 195,
    "range": [
      186,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "String",
    "value": "\"references\"",
    "start": 198,
    "end": 210,
    "range": [
      198,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "validateElement",
    "start": 214,
    "end": 229,
    "range": [
      214,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 232,
    "end": 237,
    "range": [
      232,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 239,
    "end": 246,
    "range": [
      239,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 248,
    "end": 250,
    "range": [
      248,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 251,
    "end": 258,
    "range": [
      251,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "elementTypeName",
    "start": 262,
    "end": 277,
    "range": [
      262,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 279,
    "end": 285,
    "range": [
      279,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "PropOfRaw",
    "start": 289,
    "end": 298,
    "range": [
      289,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 304,
    "end": 312,
    "range": [
      304,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "getSpecsFromRaw",
    "start": 313,
    "end": 328,
    "range": [
      313,
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
    "type": "Identifier",
    "value": "prop",
    "start": 332,
    "end": 336,
    "range": [
      332,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "String",
    "value": "\"files\"",
    "start": 338,
    "end": 345,
    "range": [
      338,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "String",
    "value": "\"include\"",
    "start": 348,
    "end": 357,
    "range": [
      348,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "String",
    "value": "\"exclude\"",
    "start": 360,
    "end": 369,
    "range": [
      360,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "PropOfRaw",
    "start": 373,
    "end": 382,
    "range": [
      373,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 383,
    "end": 389,
    "range": [
      383,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 395,
    "end": 401,
    "range": [
      395,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "getPropFromRaw",
    "start": 402,
    "end": 416,
    "range": [
      402,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 417,
    "end": 421,
    "range": [
      417,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 423,
    "end": 431,
    "range": [
      423,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 433,
    "end": 441,
    "range": [
      433,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  }
]
```
