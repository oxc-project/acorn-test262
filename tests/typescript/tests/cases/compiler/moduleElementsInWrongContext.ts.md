__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "TSModuleDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 17
          },
          "body": {
            "type": "TSModuleBlock",
            "body": [],
            "start": 18,
            "end": 21
          },
          "kind": "namespace",
          "declare": false,
          "global": false,
          "start": 6,
          "end": 21
        },
        {
          "type": "ExportNamedDeclaration",
          "declaration": {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 73
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [],
                      "start": 74,
                      "end": 77
                    },
                    "declare": false,
                    "start": 62,
                    "end": 77
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 55,
                  "end": 77
                }
              ],
              "start": 45,
              "end": 83
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 33,
            "end": 83
          },
          "specifiers": [],
          "source": null,
          "exportKind": "value",
          "attributes": [],
          "start": 26,
          "end": 83
        },
        {
          "type": "TSModuleDeclaration",
          "id": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "start": 99,
            "end": 102
          },
          "body": {
            "type": "TSModuleBlock",
            "body": [],
            "start": 103,
            "end": 106
          },
          "kind": "namespace",
          "declare": false,
          "global": false,
          "start": 89,
          "end": 106
        },
        {
          "type": "TSModuleDeclaration",
          "id": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 127,
            "end": 136
          },
          "body": {
            "type": "TSModuleBlock",
            "body": [],
            "start": 137,
            "end": 145
          },
          "kind": "module",
          "declare": true,
          "global": false,
          "start": 112,
          "end": 145
        },
        {
          "type": "TSExportAssignment",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 161
          },
          "start": 151,
          "end": 162
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
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 173
              },
              "init": null,
              "definite": false,
              "start": 172,
              "end": 173
            }
          ],
          "declare": false,
          "start": 168,
          "end": 174
        },
        {
          "type": "FunctionDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 191
          },
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 194,
            "end": 197
          },
          "expression": false,
          "start": 179,
          "end": 197
        },
        {
          "type": "ExportAllDeclaration",
          "exported": null,
          "source": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 216,
            "end": 225
          },
          "attributes": [],
          "exportKind": "value",
          "start": 202,
          "end": 226
        },
        {
          "type": "ExportNamedDeclaration",
          "declaration": null,
          "specifiers": [
            {
              "type": "ExportSpecifier",
              "local": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 243
              },
              "exported": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 243
              },
              "exportKind": "value",
              "start": 240,
              "end": 243
            }
          ],
          "source": null,
          "exportKind": "value",
          "attributes": [],
          "start": 231,
          "end": 246
        },
        {
          "type": "ExportNamedDeclaration",
          "declaration": null,
          "specifiers": [
            {
              "type": "ExportSpecifier",
              "local": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 263
              },
              "exported": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 268
              },
              "exportKind": "value",
              "start": 260,
              "end": 268
            }
          ],
          "source": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 276,
            "end": 285
          },
          "exportKind": "value",
          "attributes": [],
          "start": 251,
          "end": 286
        },
        {
          "type": "ExportDefaultDeclaration",
          "declaration": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 307
          },
          "exportKind": "value",
          "start": 291,
          "end": 308
        },
        {
          "type": "ExportDefaultDeclaration",
          "declaration": {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 335
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 336,
              "end": 339
            },
            "abstract": false,
            "declare": false,
            "start": 328,
            "end": 339
          },
          "exportKind": "value",
          "start": 313,
          "end": 339
        },
        {
          "type": "ExportNamedDeclaration",
          "declaration": {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bee",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 363
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 366,
              "end": 369
            },
            "expression": false,
            "start": 351,
            "end": 369
          },
          "specifiers": [],
          "source": null,
          "exportKind": "value",
          "attributes": [],
          "start": 344,
          "end": 369
        },
        {
          "type": "TSImportEqualsDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 382
          },
          "moduleReference": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 385,
            "end": 386
          },
          "importKind": "value",
          "start": 374,
          "end": 387
        },
        {
          "type": "TSImportEqualsDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "I2",
            "optional": false,
            "typeAnnotation": null,
            "start": 399,
            "end": 401
          },
          "moduleReference": {
            "type": "TSExternalModuleReference",
            "expression": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 412,
              "end": 417
            },
            "start": 404,
            "end": 418
          },
          "importKind": "value",
          "start": 392,
          "end": 419
        },
        {
          "type": "ImportDeclaration",
          "specifiers": [
            {
              "type": "ImportNamespaceSpecifier",
              "local": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 439
              },
              "start": 431,
              "end": 439
            }
          ],
          "source": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 445,
            "end": 454
          },
          "phase": null,
          "attributes": [],
          "importKind": "value",
          "start": 424,
          "end": 455
        },
        {
          "type": "ImportDeclaration",
          "specifiers": [
            {
              "type": "ImportDefaultSpecifier",
              "local": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 470
              },
              "start": 467,
              "end": 470
            }
          ],
          "source": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 476,
            "end": 485
          },
          "phase": null,
          "attributes": [],
          "importKind": "value",
          "start": 460,
          "end": 486
        },
        {
          "type": "ImportDeclaration",
          "specifiers": [
            {
              "type": "ImportSpecifier",
              "imported": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 503
              },
              "local": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 503
              },
              "importKind": "value",
              "start": 500,
              "end": 503
            }
          ],
          "source": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 511,
            "end": 520
          },
          "phase": null,
          "attributes": [],
          "importKind": "value",
          "start": 491,
          "end": 521
        },
        {
          "type": "ImportDeclaration",
          "specifiers": [],
          "source": {
            "type": "Literal",
            "value": "ambient",
            "raw": "\"ambient\"",
            "start": 533,
            "end": 542
          },
          "phase": null,
          "attributes": [],
          "importKind": "value",
          "start": 526,
          "end": 543
        }
      ],
      "start": 0,
      "end": 545
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 545
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "{",
    "start": 0,
    "end": 1,
    "range": [
      0,
      1
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 6,
    "end": 15,
    "range": [
      6,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 26,
    "end": 32,
    "range": [
      26,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 33,
    "end": 42,
    "range": [
      33,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 55,
    "end": 61,
    "range": [
      55,
      61
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 62,
    "end": 71,
    "range": [
      62,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 89,
    "end": 98,
    "range": [
      89,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
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
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 112,
    "end": 119,
    "range": [
      112,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 120,
    "end": 126,
    "range": [
      120,
      126
    ]
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 127,
    "end": 136,
    "range": [
      127,
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
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 151,
    "end": 157,
    "range": [
      151,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 168,
    "end": 171,
    "range": [
      168,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 172,
    "end": 173,
    "range": [
      172,
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
    "value": "function",
    "start": 179,
    "end": 187,
    "range": [
      179,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 188,
    "end": 191,
    "range": [
      188,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 202,
    "end": 208,
    "range": [
      202,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 211,
    "end": 215,
    "range": [
      211,
      215
    ]
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 216,
    "end": 225,
    "range": [
      216,
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
    "type": "Keyword",
    "value": "export",
    "start": 231,
    "end": 237,
    "range": [
      231,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 240,
    "end": 243,
    "range": [
      240,
      243
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
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 251,
    "end": 257,
    "range": [
      251,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 260,
    "end": 263,
    "range": [
      260,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 264,
    "end": 266,
    "range": [
      264,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 271,
    "end": 275,
    "range": [
      271,
      275
    ]
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 276,
    "end": 285,
    "range": [
      276,
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
    "type": "Keyword",
    "value": "export",
    "start": 291,
    "end": 297,
    "range": [
      291,
      297
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 298,
    "end": 305,
    "range": [
      298,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 313,
    "end": 319,
    "range": [
      313,
      319
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 320,
    "end": 327,
    "range": [
      320,
      327
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 328,
    "end": 333,
    "range": [
      328,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 344,
    "end": 350,
    "range": [
      344,
      350
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 351,
    "end": 359,
    "range": [
      351,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "bee",
    "start": 360,
    "end": 363,
    "range": [
      360,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 374,
    "end": 380,
    "range": [
      374,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 392,
    "end": 398,
    "range": [
      392,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 399,
    "end": 401,
    "range": [
      399,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 404,
    "end": 411,
    "range": [
      404,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 412,
    "end": 417,
    "range": [
      412,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 424,
    "end": 430,
    "range": [
      424,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 433,
    "end": 435,
    "range": [
      433,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 436,
    "end": 439,
    "range": [
      436,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 440,
    "end": 444,
    "range": [
      440,
      444
    ]
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 445,
    "end": 454,
    "range": [
      445,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 460,
    "end": 466,
    "range": [
      460,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 467,
    "end": 470,
    "range": [
      467,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 471,
    "end": 475,
    "range": [
      471,
      475
    ]
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 476,
    "end": 485,
    "range": [
      476,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 491,
    "end": 497,
    "range": [
      491,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 500,
    "end": 503,
    "range": [
      500,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 506,
    "end": 510,
    "range": [
      506,
      510
    ]
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 511,
    "end": 520,
    "range": [
      511,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 526,
    "end": 532,
    "range": [
      526,
      532
    ]
  },
  {
    "type": "String",
    "value": "\"ambient\"",
    "start": 533,
    "end": 542,
    "range": [
      533,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  }
]
```
