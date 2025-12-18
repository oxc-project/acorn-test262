__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "connect",
        "raw": "'connect'",
        "start": 15,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "connectModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 54
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "res",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 66,
                      "end": 69
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "req",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 74
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "next",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 80
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 83,
                      "end": 87
                    },
                    "start": 81,
                    "end": 87
                  },
                  "start": 65,
                  "end": 88
                }
              ],
              "start": 55,
              "end": 94
            },
            "declare": false,
            "start": 31,
            "end": 94
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "connectExport",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 123
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
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 134,
                    "end": 137
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "mod",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "connectModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 145,
                                "end": 158
                              },
                              "typeArguments": null,
                              "start": 145,
                              "end": 158
                            },
                            "start": 143,
                            "end": 158
                          },
                          "start": 140,
                          "end": 158
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "connectExport",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 163,
                            "end": 176
                          },
                          "typeArguments": null,
                          "start": 163,
                          "end": 176
                        },
                        "start": 160,
                        "end": 176
                      },
                      "start": 139,
                      "end": 176
                    },
                    "start": 137,
                    "end": 176
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 134,
                  "end": 177
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "listen",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 186,
                    "end": 192
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "port",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 201,
                              "end": 207
                            },
                            "start": 199,
                            "end": 207
                          },
                          "start": 195,
                          "end": 207
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 212,
                          "end": 216
                        },
                        "start": 209,
                        "end": 216
                      },
                      "start": 194,
                      "end": 216
                    },
                    "start": 192,
                    "end": 216
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 186,
                  "end": 217
                }
              ],
              "start": 124,
              "end": 223
            },
            "declare": false,
            "start": 100,
            "end": 223
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
                  "name": "server",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "connectExport",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 255,
                                "end": 268
                              },
                              "typeArguments": null,
                              "start": 255,
                              "end": 268
                            },
                            "start": 253,
                            "end": 268
                          },
                          "start": 251,
                          "end": 269
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 278,
                            "end": 283
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "connectModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 285,
                                "end": 298
                              },
                              "typeArguments": null,
                              "start": 285,
                              "end": 298
                            },
                            "start": 283,
                            "end": 298
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 278,
                          "end": 299
                        },
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 308,
                            "end": 313
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "connectModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 317,
                                "end": 330
                              },
                              "typeArguments": null,
                              "start": 317,
                              "end": 330
                            },
                            "start": 315,
                            "end": 330
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 308,
                          "end": 331
                        }
                      ],
                      "start": 241,
                      "end": 337
                    },
                    "start": 239,
                    "end": 337
                  },
                  "start": 233,
                  "end": 337
                },
                "init": null,
                "definite": false,
                "start": 233,
                "end": 337
              }
            ],
            "declare": false,
            "start": 229,
            "end": 338
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "server",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 358
            },
            "start": 343,
            "end": 359
          }
        ],
        "start": 25,
        "end": 361
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 361
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 361
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
    "value": "'connect'",
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
    "value": "interface",
    "start": 31,
    "end": 40,
    "range": [
      31,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "connectModule",
    "start": 41,
    "end": 54,
    "range": [
      41,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "res",
    "start": 66,
    "end": 69,
    "range": [
      66,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 71,
    "end": 74,
    "range": [
      71,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 76,
    "end": 80,
    "range": [
      76,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 83,
    "end": 87,
    "range": [
      83,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 100,
    "end": 109,
    "range": [
      100,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "connectExport",
    "start": 110,
    "end": 123,
    "range": [
      110,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 134,
    "end": 137,
    "range": [
      134,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 140,
    "end": 143,
    "range": [
      140,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "connectModule",
    "start": 145,
    "end": 158,
    "range": [
      145,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 160,
    "end": 162,
    "range": [
      160,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "connectExport",
    "start": 163,
    "end": 176,
    "range": [
      163,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "listen",
    "start": 186,
    "end": 192,
    "range": [
      186,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
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
    "type": "Identifier",
    "value": "port",
    "start": 195,
    "end": 199,
    "range": [
      195,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 201,
    "end": 207,
    "range": [
      201,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 209,
    "end": 211,
    "range": [
      209,
      211
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 212,
    "end": 216,
    "range": [
      212,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 229,
    "end": 232,
    "range": [
      229,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "server",
    "start": 233,
    "end": 239,
    "range": [
      233,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "connectExport",
    "start": 255,
    "end": 268,
    "range": [
      255,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 278,
    "end": 283,
    "range": [
      278,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "connectModule",
    "start": 285,
    "end": 298,
    "range": [
      285,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 308,
    "end": 313,
    "range": [
      308,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315,
    "range": [
      314,
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
    "value": "connectModule",
    "start": 317,
    "end": 330,
    "range": [
      317,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 343,
    "end": 349,
    "range": [
      343,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "server",
    "start": 352,
    "end": 358,
    "range": [
      352,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  }
]
```
