__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "SubModule",
        "raw": "\"SubModule\"",
        "start": 15,
        "end": 26
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MainModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 50
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "MainModule",
                "raw": "'MainModule'",
                "start": 61,
                "end": 73
              },
              "start": 53,
              "end": 74
            },
            "importKind": "value",
            "start": 33,
            "end": 75
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "SubModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 95
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
                    "name": "StaticVar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 120,
                    "end": 129
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 131,
                      "end": 137
                    },
                    "start": 129,
                    "end": 137
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 106,
                  "end": 138
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InstanceVar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 165
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 167,
                      "end": 173
                    },
                    "start": 165,
                    "end": 173
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 147,
                  "end": 174
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "main",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 190,
                    "end": 194
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MainModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 196,
                        "end": 206
                      },
                      "typeArguments": null,
                      "start": 196,
                      "end": 206
                    },
                    "start": 194,
                    "end": 206
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 183,
                  "end": 207
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 227
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 227,
                    "end": 230
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 216,
                  "end": 230
                }
              ],
              "start": 96,
              "end": 236
            },
            "abstract": false,
            "declare": false,
            "start": 80,
            "end": 236
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "SubModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 259
            },
            "start": 241,
            "end": 260
          }
        ],
        "start": 27,
        "end": 262
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 262
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "MainModule",
        "raw": "\"MainModule\"",
        "start": 278,
        "end": 290
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "SubModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 313
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "SubModule",
                "raw": "'SubModule'",
                "start": 324,
                "end": 335
              },
              "start": 316,
              "end": 336
            },
            "importKind": "value",
            "start": 297,
            "end": 337
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MainModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 358
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
                    "name": "SubModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 376,
                    "end": 385
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SubModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 387,
                        "end": 396
                      },
                      "typeArguments": null,
                      "start": 387,
                      "end": 396
                    },
                    "start": 385,
                    "end": 396
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 369,
                  "end": 397
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 406,
                    "end": 417
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 417,
                    "end": 420
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 406,
                  "end": 420
                }
              ],
              "start": 359,
              "end": 426
            },
            "abstract": false,
            "declare": false,
            "start": 342,
            "end": 426
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "MainModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 450
            },
            "start": 431,
            "end": 451
          }
        ],
        "start": 291,
        "end": 453
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 263,
      "end": 453
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 453
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14,
    "range": [
      8,
      14
    ]
  },
  {
    "type": "String",
    "value": "\"SubModule\"",
    "start": 15,
    "end": 26,
    "range": [
      15,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 33,
    "end": 39,
    "range": [
      33,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "MainModule",
    "start": 40,
    "end": 50,
    "range": [
      40,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 53,
    "end": 60,
    "range": [
      53,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "String",
    "value": "'MainModule'",
    "start": 61,
    "end": 73,
    "range": [
      61,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
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
    "value": "SubModule",
    "start": 86,
    "end": 95,
    "range": [
      86,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 106,
    "end": 112,
    "range": [
      106,
      112
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 113,
    "end": 119,
    "range": [
      113,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "StaticVar",
    "start": 120,
    "end": 129,
    "range": [
      120,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 131,
    "end": 137,
    "range": [
      131,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 147,
    "end": 153,
    "range": [
      147,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "InstanceVar",
    "start": 154,
    "end": 165,
    "range": [
      154,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 167,
    "end": 173,
    "range": [
      167,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 183,
    "end": 189,
    "range": [
      183,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "main",
    "start": 190,
    "end": 194,
    "range": [
      190,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "MainModule",
    "start": 196,
    "end": 206,
    "range": [
      196,
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
    "type": "Identifier",
    "value": "constructor",
    "start": 216,
    "end": 227,
    "range": [
      216,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 241,
    "end": 247,
    "range": [
      241,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule",
    "start": 250,
    "end": 259,
    "range": [
      250,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 263,
    "end": 270,
    "range": [
      263,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 271,
    "end": 277,
    "range": [
      271,
      277
    ]
  },
  {
    "type": "String",
    "value": "\"MainModule\"",
    "start": 278,
    "end": 290,
    "range": [
      278,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 297,
    "end": 303,
    "range": [
      297,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule",
    "start": 304,
    "end": 313,
    "range": [
      304,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 316,
    "end": 323,
    "range": [
      316,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "String",
    "value": "'SubModule'",
    "start": 324,
    "end": 335,
    "range": [
      324,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 342,
    "end": 347,
    "range": [
      342,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "MainModule",
    "start": 348,
    "end": 358,
    "range": [
      348,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 369,
    "end": 375,
    "range": [
      369,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule",
    "start": 376,
    "end": 385,
    "range": [
      376,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "SubModule",
    "start": 387,
    "end": 396,
    "range": [
      387,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 406,
    "end": 417,
    "range": [
      406,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 431,
    "end": 437,
    "range": [
      431,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "MainModule",
    "start": 440,
    "end": 450,
    "range": [
      440,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  }
]
```
