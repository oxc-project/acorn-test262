__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "http",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 71
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
                "name": "TcpSocketConnectOpts",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 113
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
                      "name": "port",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 120,
                      "end": 124
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 126,
                        "end": 132
                      },
                      "start": 124,
                      "end": 132
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 120,
                    "end": 133
                  }
                ],
                "start": 114,
                "end": 137
              },
              "declare": false,
              "start": 83,
              "end": 137
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 76,
            "end": 137
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "AgentOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 170
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Partial",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 186
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TcpSocketConnectOpts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 187,
                          "end": 207
                        },
                        "typeArguments": null,
                        "start": 187,
                        "end": 207
                      }
                    ],
                    "start": 186,
                    "end": 208
                  },
                  "start": 179,
                  "end": 208
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keepAlive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 215,
                      "end": 224
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 227,
                            "end": 234
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 237,
                            "end": 246
                          }
                        ],
                        "start": 227,
                        "end": 246
                      },
                      "start": 225,
                      "end": 246
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 215,
                    "end": 247
                  }
                ],
                "start": 209,
                "end": 251
              },
              "declare": false,
              "start": 148,
              "end": 251
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 141,
            "end": 251
          }
        ],
        "start": 72,
        "end": 253
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 57,
      "end": 253
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tls",
        "optional": false,
        "typeAnnotation": null,
        "start": 265,
        "end": 268
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
                "name": "ConnectionOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 307
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "port",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 314,
                      "end": 318
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 321,
                            "end": 327
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 330,
                            "end": 339
                          }
                        ],
                        "start": 321,
                        "end": 339
                      },
                      "start": 319,
                      "end": 339
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 314,
                    "end": 340
                  }
                ],
                "start": 308,
                "end": 344
              },
              "declare": false,
              "start": 280,
              "end": 344
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 273,
            "end": 344
          }
        ],
        "start": 269,
        "end": 346
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 255,
      "end": 346
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AgentOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 358,
        "end": 370
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "http",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 383
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "AgentOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 396
            },
            "optional": false,
            "computed": false,
            "start": 379,
            "end": 396
          },
          "typeArguments": null,
          "start": 379,
          "end": 396
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "tls",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 401
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConnectionOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 419
            },
            "optional": false,
            "computed": false,
            "start": 398,
            "end": 419
          },
          "typeArguments": null,
          "start": 398,
          "end": 419
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "maxCachedSessions",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 483
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 486,
                    "end": 492
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 495,
                    "end": 504
                  }
                ],
                "start": 486,
                "end": 504
              },
              "start": 484,
              "end": 504
            },
            "accessibility": null,
            "static": false,
            "start": 466,
            "end": 505
          }
        ],
        "start": 420,
        "end": 507
      },
      "declare": false,
      "start": 348,
      "end": 507
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 507
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 57,
    "end": 66,
    "range": [
      57,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "http",
    "start": 67,
    "end": 71,
    "range": [
      67,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 76,
    "end": 82,
    "range": [
      76,
      82
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 83,
    "end": 92,
    "range": [
      83,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "TcpSocketConnectOpts",
    "start": 93,
    "end": 113,
    "range": [
      93,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "port",
    "start": 120,
    "end": 124,
    "range": [
      120,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 126,
    "end": 132,
    "range": [
      126,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 141,
    "end": 147,
    "range": [
      141,
      147
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 148,
    "end": 157,
    "range": [
      148,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "AgentOptions",
    "start": 158,
    "end": 170,
    "range": [
      158,
      170
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 171,
    "end": 178,
    "range": [
      171,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 179,
    "end": 186,
    "range": [
      179,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "TcpSocketConnectOpts",
    "start": 187,
    "end": 207,
    "range": [
      187,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "keepAlive",
    "start": 215,
    "end": 224,
    "range": [
      215,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 227,
    "end": 234,
    "range": [
      227,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 237,
    "end": 246,
    "range": [
      237,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 255,
    "end": 264,
    "range": [
      255,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "tls",
    "start": 265,
    "end": 268,
    "range": [
      265,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 273,
    "end": 279,
    "range": [
      273,
      279
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 280,
    "end": 289,
    "range": [
      280,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "ConnectionOptions",
    "start": 290,
    "end": 307,
    "range": [
      290,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "port",
    "start": 314,
    "end": 318,
    "range": [
      314,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 321,
    "end": 327,
    "range": [
      321,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 330,
    "end": 339,
    "range": [
      330,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 348,
    "end": 357,
    "range": [
      348,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "AgentOptions",
    "start": 358,
    "end": 370,
    "range": [
      358,
      370
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 371,
    "end": 378,
    "range": [
      371,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "http",
    "start": 379,
    "end": 383,
    "range": [
      379,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "AgentOptions",
    "start": 384,
    "end": 396,
    "range": [
      384,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "tls",
    "start": 398,
    "end": 401,
    "range": [
      398,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "ConnectionOptions",
    "start": 402,
    "end": 419,
    "range": [
      402,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "maxCachedSessions",
    "start": 466,
    "end": 483,
    "range": [
      466,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 486,
    "end": 492,
    "range": [
      486,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 495,
    "end": 504,
    "range": [
      495,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  }
]
```
