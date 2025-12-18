__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "express",
        "raw": "\"express\"",
        "start": 15,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "express",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 48
            },
            "start": 32,
            "end": 49
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "express",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 71
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "express",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 75,
                    "end": 82
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpressServer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 96
                  },
                  "start": 75,
                  "end": 96
                },
                "typeArguments": null,
                "start": 75,
                "end": 96
              },
              "start": 73,
              "end": 96
            },
            "body": null,
            "expression": false,
            "start": 55,
            "end": 97
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "express",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 120
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
                      "name": "ExpressServer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 162
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "enable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 178,
                            "end": 184
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 191,
                                  "end": 197
                                },
                                "start": 189,
                                "end": 197
                              },
                              "start": 185,
                              "end": 197
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ExpressServer",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 200,
                                "end": 213
                              },
                              "typeArguments": null,
                              "start": 200,
                              "end": 213
                            },
                            "start": 198,
                            "end": 213
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 178,
                          "end": 214
                        },
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "post",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 228,
                            "end": 232
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "path",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RegExp",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 239,
                                    "end": 245
                                  },
                                  "typeArguments": null,
                                  "start": 239,
                                  "end": 245
                                },
                                "start": 237,
                                "end": 245
                              },
                              "start": 233,
                              "end": 245
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "handler",
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
                                      "name": "req",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Function",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 262,
                                            "end": 270
                                          },
                                          "typeArguments": null,
                                          "start": 262,
                                          "end": 270
                                        },
                                        "start": 260,
                                        "end": 270
                                      },
                                      "start": 257,
                                      "end": 270
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 275,
                                      "end": 279
                                    },
                                    "start": 272,
                                    "end": 279
                                  },
                                  "start": 256,
                                  "end": 279
                                },
                                "start": 254,
                                "end": 279
                              },
                              "start": 247,
                              "end": 279
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 283,
                              "end": 287
                            },
                            "start": 281,
                            "end": 287
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 228,
                          "end": 288
                        }
                      ],
                      "start": 163,
                      "end": 299
                    },
                    "declare": false,
                    "start": 139,
                    "end": 299
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 132,
                  "end": 299
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ExpressServerRequest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 322,
                      "end": 342
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 343,
                      "end": 355
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 316,
                    "end": 355
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 309,
                  "end": 355
                }
              ],
              "start": 121,
              "end": 362
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 103,
            "end": 362
          }
        ],
        "start": 25,
        "end": 365
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 365
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 365
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
    "value": "\"express\"",
    "start": 15,
    "end": 24,
    "range": [
      15,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 32,
    "end": 38,
    "range": [
      32,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "express",
    "start": 41,
    "end": 48,
    "range": [
      41,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 55,
    "end": 63,
    "range": [
      55,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "express",
    "start": 64,
    "end": 71,
    "range": [
      64,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "express",
    "start": 75,
    "end": 82,
    "range": [
      75,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "ExpressServer",
    "start": 83,
    "end": 96,
    "range": [
      83,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 103,
    "end": 112,
    "range": [
      103,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "express",
    "start": 113,
    "end": 120,
    "range": [
      113,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 132,
    "end": 138,
    "range": [
      132,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 139,
    "end": 148,
    "range": [
      139,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "ExpressServer",
    "start": 149,
    "end": 162,
    "range": [
      149,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "enable",
    "start": 178,
    "end": 184,
    "range": [
      178,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 185,
    "end": 189,
    "range": [
      185,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 191,
    "end": 197,
    "range": [
      191,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198,
    "range": [
      197,
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
    "value": "ExpressServer",
    "start": 200,
    "end": 213,
    "range": [
      200,
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
    "value": "post",
    "start": 228,
    "end": 232,
    "range": [
      228,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 233,
    "end": 237,
    "range": [
      233,
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
    "value": "RegExp",
    "start": 239,
    "end": 245,
    "range": [
      239,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 247,
    "end": 254,
    "range": [
      247,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 257,
    "end": 260,
    "range": [
      257,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 262,
    "end": 270,
    "range": [
      262,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 272,
    "end": 274,
    "range": [
      272,
      274
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
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
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 283,
    "end": 287,
    "range": [
      283,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 309,
    "end": 315,
    "range": [
      309,
      315
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 316,
    "end": 321,
    "range": [
      316,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "ExpressServerRequest",
    "start": 322,
    "end": 342,
    "range": [
      322,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  }
]
```
