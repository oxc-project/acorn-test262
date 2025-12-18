__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 57
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 67
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 69,
                "end": 75
              },
              "start": 67,
              "end": 75
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 64,
            "end": 76
          }
        ],
        "start": 58,
        "end": 78
      },
      "abstract": false,
      "declare": false,
      "start": 47,
      "end": 78
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 93
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 106
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 118,
                "end": 124
              },
              "start": 116,
              "end": 124
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 113,
            "end": 125
          }
        ],
        "start": 107,
        "end": 127
      },
      "abstract": false,
      "declare": false,
      "start": 80,
      "end": 127
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
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
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 146
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 152
                },
                "typeArguments": null,
                "start": 148,
                "end": 152
              },
              "start": 146,
              "end": 152
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 143,
            "end": 153
          }
        ],
        "start": 137,
        "end": 155
      },
      "abstract": false,
      "declare": false,
      "start": 129,
      "end": 155
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 164
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 174
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
              "name": "fooo",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 185
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 194
                },
                "typeArguments": null,
                "start": 187,
                "end": 194
              },
              "start": 185,
              "end": 194
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 181,
            "end": 195
          }
        ],
        "start": 175,
        "end": 217
      },
      "abstract": false,
      "declare": false,
      "start": 157,
      "end": 217
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 227
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
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 234,
              "end": 235
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 241
                },
                "typeArguments": null,
                "start": 237,
                "end": 241
              },
              "start": 235,
              "end": 241
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 234,
            "end": 242
          }
        ],
        "start": 228,
        "end": 245
      },
      "abstract": false,
      "declare": false,
      "start": 219,
      "end": 245
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 253,
        "end": 255
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 266
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
              "type": "Literal",
              "value": 1.1,
              "raw": "1.1",
              "start": 273,
              "end": 276
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 285
                },
                "typeArguments": null,
                "start": 278,
                "end": 285
              },
              "start": 276,
              "end": 285
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 273,
            "end": 286
          }
        ],
        "start": 267,
        "end": 306
      },
      "abstract": false,
      "declare": false,
      "start": 247,
      "end": 306
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 316
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
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 323,
              "end": 326
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 332
                },
                "typeArguments": null,
                "start": 328,
                "end": 332
              },
              "start": 326,
              "end": 332
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 323,
            "end": 333
          }
        ],
        "start": 317,
        "end": 335
      },
      "abstract": false,
      "declare": false,
      "start": 308,
      "end": 335
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null,
        "start": 343,
        "end": 345
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 354,
        "end": 356
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
              "type": "Literal",
              "value": "1.1",
              "raw": "'1.1'",
              "start": 363,
              "end": 368
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 377
                },
                "typeArguments": null,
                "start": 370,
                "end": 377
              },
              "start": 368,
              "end": 377
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 363,
            "end": 378
          }
        ],
        "start": 357,
        "end": 400
      },
      "abstract": false,
      "declare": false,
      "start": 337,
      "end": 400
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 47,
  "end": 400
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 47,
    "end": 52,
    "range": [
      47,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 53,
    "end": 57,
    "range": [
      53,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
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
    "value": ":",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 69,
    "end": 75,
    "range": [
      69,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 80,
    "end": 85,
    "range": [
      80,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 86,
    "end": 93,
    "range": [
      86,
      93
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 94,
    "end": 101,
    "range": [
      94,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 102,
    "end": 106,
    "range": [
      102,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 113,
    "end": 116,
    "range": [
      113,
      116
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
    "value": "string",
    "start": 118,
    "end": 124,
    "range": [
      118,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 129,
    "end": 134,
    "range": [
      129,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 135,
    "end": 136,
    "range": [
      135,
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
    "value": "foo",
    "start": 143,
    "end": 146,
    "range": [
      143,
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
    "value": "Base",
    "start": 148,
    "end": 152,
    "range": [
      148,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 157,
    "end": 162,
    "range": [
      157,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 165,
    "end": 172,
    "range": [
      165,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "fooo",
    "start": 181,
    "end": 185,
    "range": [
      181,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 187,
    "end": 194,
    "range": [
      187,
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
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 219,
    "end": 224,
    "range": [
      219,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 225,
    "end": 227,
    "range": [
      225,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 234,
    "end": 235,
    "range": [
      234,
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
    "type": "Identifier",
    "value": "Base",
    "start": 237,
    "end": 241,
    "range": [
      237,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 247,
    "end": 252,
    "range": [
      247,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 253,
    "end": 255,
    "range": [
      253,
      255
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 256,
    "end": 263,
    "range": [
      256,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 264,
    "end": 266,
    "range": [
      264,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Numeric",
    "value": "1.1",
    "start": 273,
    "end": 276,
    "range": [
      273,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 278,
    "end": 285,
    "range": [
      278,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 308,
    "end": 313,
    "range": [
      308,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 314,
    "end": 316,
    "range": [
      314,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 323,
    "end": 326,
    "range": [
      323,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 328,
    "end": 332,
    "range": [
      328,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 337,
    "end": 342,
    "range": [
      337,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 343,
    "end": 345,
    "range": [
      343,
      345
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 346,
    "end": 353,
    "range": [
      346,
      353
    ]
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 354,
    "end": 356,
    "range": [
      354,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "String",
    "value": "'1.1'",
    "start": 363,
    "end": 368,
    "range": [
      363,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 370,
    "end": 377,
    "range": [
      370,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  }
]
```
