__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Date",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 21
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "day",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 31
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 33,
                  "end": 39
                },
                "start": 31,
                "end": 39
              },
              "accessibility": null,
              "static": false,
              "start": 28,
              "end": 40
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "month",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 50
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 52,
                  "end": 58
                },
                "start": 50,
                "end": 58
              },
              "accessibility": null,
              "static": false,
              "start": 45,
              "end": 59
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "year",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 68
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 70,
                  "end": 76
                },
                "start": 68,
                "end": 76
              },
              "accessibility": null,
              "static": false,
              "start": 64,
              "end": 77
            }
          ],
          "start": 22,
          "end": 79
        },
        "declare": false,
        "start": 7,
        "end": 79
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 79
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Event",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 103
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 123
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 126,
                  "end": 129
                },
                "declare": false,
                "start": 117,
                "end": 130
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 110,
              "end": 130
            }
          ],
          "start": 104,
          "end": 132
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 88,
        "end": 132
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 81,
      "end": 132
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 133
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
    "value": "interface",
    "start": 7,
    "end": 16,
    "range": [
      7,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 17,
    "end": 21,
    "range": [
      17,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "day",
    "start": 28,
    "end": 31,
    "range": [
      28,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 33,
    "end": 39,
    "range": [
      33,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "month",
    "start": 45,
    "end": 50,
    "range": [
      45,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 52,
    "end": 58,
    "range": [
      52,
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
    "value": "year",
    "start": 64,
    "end": 68,
    "range": [
      64,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 70,
    "end": 76,
    "range": [
      70,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 81,
    "end": 87,
    "range": [
      81,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 88,
    "end": 97,
    "range": [
      88,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 98,
    "end": 103,
    "range": [
      98,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 110,
    "end": 116,
    "range": [
      110,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 117,
    "end": 121,
    "range": [
      117,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 126,
    "end": 129,
    "range": [
      126,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "node:console",
        "raw": "'node:console'",
        "start": 15,
        "end": 29
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 42
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 63,
                    "end": 70
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 85,
                          "end": 92
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 94,
                                "end": 101
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ConsoleConstructor",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 102,
                                "end": 120
                              },
                              "start": 94,
                              "end": 120
                            },
                            "typeArguments": null,
                            "start": 94,
                            "end": 120
                          },
                          "start": 92,
                          "end": 120
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 85,
                        "end": 121
                      }
                    ],
                    "start": 71,
                    "end": 131
                  },
                  "declare": false,
                  "start": 53,
                  "end": 131
                },
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 157
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [
                      {
                        "type": "TSInterfaceDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ConsoleConstructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 182,
                          "end": 200
                        },
                        "typeParameters": null,
                        "extends": [],
                        "body": {
                          "type": "TSInterfaceBody",
                          "body": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prototype",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 219,
                                "end": 228
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Console",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 230,
                                    "end": 237
                                  },
                                  "typeArguments": null,
                                  "start": 230,
                                  "end": 237
                                },
                                "start": 228,
                                "end": 237
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 219,
                              "end": 238
                            },
                            {
                              "type": "TSConstructSignatureDeclaration",
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Console",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 263,
                                    "end": 270
                                  },
                                  "typeArguments": null,
                                  "start": 263,
                                  "end": 270
                                },
                                "start": 261,
                                "end": 270
                              },
                              "start": 255,
                              "end": 271
                            }
                          ],
                          "start": 201,
                          "end": 285
                        },
                        "declare": false,
                        "start": 172,
                        "end": 285
                      }
                    ],
                    "start": 158,
                    "end": 295
                  },
                  "kind": "namespace",
                  "declare": false,
                  "global": false,
                  "start": 140,
                  "end": 295
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 317,
                              "end": 324
                            },
                            "typeArguments": null,
                            "start": 317,
                            "end": 324
                          },
                          "start": 315,
                          "end": 324
                        },
                        "start": 308,
                        "end": 324
                      },
                      "init": null,
                      "definite": false,
                      "start": 308,
                      "end": 324
                    }
                  ],
                  "declare": false,
                  "start": 304,
                  "end": 325
                }
              ],
              "start": 43,
              "end": 331
            },
            "kind": "global",
            "declare": false,
            "global": true,
            "start": 36,
            "end": 331
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "globalThis",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 355
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "console",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 363
              },
              "optional": false,
              "computed": false,
              "start": 345,
              "end": 363
            },
            "start": 336,
            "end": 364
          }
        ],
        "start": 30,
        "end": 366
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 366
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 367
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
    "value": "'node:console'",
    "start": 15,
    "end": 29,
    "range": [
      15,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 36,
    "end": 42,
    "range": [
      36,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 53,
    "end": 62,
    "range": [
      53,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "Console",
    "start": 63,
    "end": 70,
    "range": [
      63,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "Console",
    "start": 85,
    "end": 92,
    "range": [
      85,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 94,
    "end": 101,
    "range": [
      94,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "ConsoleConstructor",
    "start": 102,
    "end": 120,
    "range": [
      102,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 140,
    "end": 149,
    "range": [
      140,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 150,
    "end": 157,
    "range": [
      150,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 172,
    "end": 181,
    "range": [
      172,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "ConsoleConstructor",
    "start": 182,
    "end": 200,
    "range": [
      182,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 219,
    "end": 228,
    "range": [
      219,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "Console",
    "start": 230,
    "end": 237,
    "range": [
      230,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 255,
    "end": 258,
    "range": [
      255,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "Console",
    "start": 263,
    "end": 270,
    "range": [
      263,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 304,
    "end": 307,
    "range": [
      304,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 308,
    "end": 315,
    "range": [
      308,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "Console",
    "start": 317,
    "end": 324,
    "range": [
      317,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 336,
    "end": 342,
    "range": [
      336,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 345,
    "end": 355,
    "range": [
      345,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 356,
    "end": 363,
    "range": [
      356,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Event",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Event",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 20
          },
          "importKind": "value",
          "start": 15,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./types",
        "raw": "'./types'",
        "start": 28,
        "end": 37
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 38
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 51
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 59
              },
              "typeArguments": null,
              "start": 55,
              "end": 59
            },
            "start": 53,
            "end": 59
          },
          "start": 52,
          "end": 59
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 73,
                  "end": 74
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 85
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 87
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "year",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 88,
                        "end": 92
                      },
                      "optional": false,
                      "computed": false,
                      "start": 86,
                      "end": 92
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 94,
                        "end": 95
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "month",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 96,
                        "end": 101
                      },
                      "optional": false,
                      "computed": false,
                      "start": 94,
                      "end": 101
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 103,
                        "end": 104
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "day",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
                        "end": 108
                      },
                      "optional": false,
                      "computed": false,
                      "start": 103,
                      "end": 108
                    }
                  ],
                  "start": 77,
                  "end": 109
                },
                "definite": false,
                "start": 73,
                "end": 109
              }
            ],
            "declare": false,
            "start": 67,
            "end": 110
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 123
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getTime",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 131
                },
                "optional": false,
                "computed": false,
                "start": 122,
                "end": 131
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 122,
              "end": 133
            },
            "start": 115,
            "end": 134
          }
        ],
        "start": 61,
        "end": 136
      },
      "expression": false,
      "start": 39,
      "end": 136
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 149
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
              "type": "TSAsExpression",
              "expression": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Event",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 174
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 175,
                    "end": 180
                  }
                ],
                "start": 165,
                "end": 181
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Event",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 190
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 192
                  },
                  "start": 185,
                  "end": 192
                },
                "typeArguments": null,
                "start": 185,
                "end": 192
              },
              "start": 165,
              "end": 192
            },
            "start": 158,
            "end": 193
          }
        ],
        "start": 152,
        "end": 195
      },
      "expression": false,
      "start": 137,
      "end": 195
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 196
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 9,
    "end": 13,
    "range": [
      9,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 15,
    "end": 20,
    "range": [
      15,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 23,
    "end": 27,
    "range": [
      23,
      27
    ]
  },
  {
    "type": "String",
    "value": "'./types'",
    "start": 28,
    "end": 37,
    "range": [
      28,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 39,
    "end": 47,
    "range": [
      39,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 48,
    "end": 51,
    "range": [
      48,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 55,
    "end": 59,
    "range": [
      55,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 67,
    "end": 72,
    "range": [
      67,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 77,
    "end": 80,
    "range": [
      77,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 81,
    "end": 85,
    "range": [
      81,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "year",
    "start": 88,
    "end": 92,
    "range": [
      88,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "month",
    "start": 96,
    "end": 101,
    "range": [
      96,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "day",
    "start": 105,
    "end": 108,
    "range": [
      105,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 115,
    "end": 121,
    "range": [
      115,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "getTime",
    "start": 124,
    "end": 131,
    "range": [
      124,
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
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 137,
    "end": 145,
    "range": [
      137,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 146,
    "end": 149,
    "range": [
      146,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 158,
    "end": 164,
    "range": [
      158,
      164
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 165,
    "end": 168,
    "range": [
      165,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 169,
    "end": 174,
    "range": [
      169,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 175,
    "end": 180,
    "range": [
      175,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 182,
    "end": 184,
    "range": [
      182,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 185,
    "end": 190,
    "range": [
      185,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
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
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 18
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 18
          },
          "importKind": "value",
          "start": 14,
          "end": 18
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Event",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 25
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Event",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 25
          },
          "importKind": "value",
          "start": 20,
          "end": 25
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./types",
        "raw": "'./types'",
        "start": 33,
        "end": 42
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 43
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Console",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 60
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Console",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 60
          },
          "importKind": "value",
          "start": 53,
          "end": 60
        }
      ],
      "source": {
        "type": "Literal",
        "value": "node:console",
        "raw": "'node:console'",
        "start": 68,
        "end": 82
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 83
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 96
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 104
              },
              "typeArguments": null,
              "start": 100,
              "end": 104
            },
            "start": 98,
            "end": 104
          },
          "start": 97,
          "end": 104
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 118,
                  "end": 119
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 130
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 131,
                        "end": 132
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "year",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 133,
                        "end": 137
                      },
                      "optional": false,
                      "computed": false,
                      "start": 131,
                      "end": 137
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 139,
                        "end": 140
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "month",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 141,
                        "end": 146
                      },
                      "optional": false,
                      "computed": false,
                      "start": 139,
                      "end": 146
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 148,
                        "end": 149
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "day",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 153
                      },
                      "optional": false,
                      "computed": false,
                      "start": 148,
                      "end": 153
                    }
                  ],
                  "start": 122,
                  "end": 154
                },
                "definite": false,
                "start": 118,
                "end": 154
              }
            ],
            "declare": false,
            "start": 112,
            "end": 155
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 168
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getTime",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 176
                },
                "optional": false,
                "computed": false,
                "start": 167,
                "end": 176
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 167,
              "end": 178
            },
            "start": 160,
            "end": 179
          }
        ],
        "start": 106,
        "end": 181
      },
      "expression": false,
      "start": 84,
      "end": 181
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 194
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
              "type": "TSAsExpression",
              "expression": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Event",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 219
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 220,
                    "end": 225
                  }
                ],
                "start": 210,
                "end": 226
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Event",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 230,
                    "end": 235
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 236,
                    "end": 237
                  },
                  "start": 230,
                  "end": 237
                },
                "typeArguments": null,
                "start": 230,
                "end": 237
              },
              "start": 210,
              "end": 237
            },
            "start": 203,
            "end": 238
          }
        ],
        "start": 197,
        "end": 240
      },
      "expression": false,
      "start": 182,
      "end": 240
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
            "name": "baz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 259
                },
                "typeArguments": null,
                "start": 252,
                "end": 259
              },
              "start": 250,
              "end": 259
            },
            "start": 247,
            "end": 259
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Console",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 273
            },
            "typeArguments": null,
            "arguments": [],
            "start": 262,
            "end": 275
          },
          "definite": false,
          "start": 247,
          "end": 275
        }
      ],
      "declare": false,
      "start": 241,
      "end": 276
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 276
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11,
    "range": [
      7,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 14,
    "end": 18,
    "range": [
      14,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 20,
    "end": 25,
    "range": [
      20,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 28,
    "end": 32,
    "range": [
      28,
      32
    ]
  },
  {
    "type": "String",
    "value": "'./types'",
    "start": 33,
    "end": 42,
    "range": [
      33,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 44,
    "end": 50,
    "range": [
      44,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "Console",
    "start": 53,
    "end": 60,
    "range": [
      53,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 63,
    "end": 67,
    "range": [
      63,
      67
    ]
  },
  {
    "type": "String",
    "value": "'node:console'",
    "start": 68,
    "end": 82,
    "range": [
      68,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 84,
    "end": 92,
    "range": [
      84,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 93,
    "end": 96,
    "range": [
      93,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 100,
    "end": 104,
    "range": [
      100,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 112,
    "end": 117,
    "range": [
      112,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 122,
    "end": 125,
    "range": [
      122,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 126,
    "end": 130,
    "range": [
      126,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "year",
    "start": 133,
    "end": 137,
    "range": [
      133,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "month",
    "start": 141,
    "end": 146,
    "range": [
      141,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "day",
    "start": 150,
    "end": 153,
    "range": [
      150,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 160,
    "end": 166,
    "range": [
      160,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "getTime",
    "start": 169,
    "end": 176,
    "range": [
      169,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 182,
    "end": 190,
    "range": [
      182,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 191,
    "end": 194,
    "range": [
      191,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 203,
    "end": 209,
    "range": [
      203,
      209
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 210,
    "end": 213,
    "range": [
      210,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 214,
    "end": 219,
    "range": [
      214,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 220,
    "end": 225,
    "range": [
      220,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 227,
    "end": 229,
    "range": [
      227,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 230,
    "end": 235,
    "range": [
      230,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 241,
    "end": 246,
    "range": [
      241,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 247,
    "end": 250,
    "range": [
      247,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "Console",
    "start": 252,
    "end": 259,
    "range": [
      252,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 262,
    "end": 265,
    "range": [
      262,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "Console",
    "start": 266,
    "end": 273,
    "range": [
      266,
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
    "value": ";",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  }
]
```
