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
        "name": "Events",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
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
                "name": "ListenerCallback",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 56
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
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 74,
                            "end": 77
                          },
                          "start": 73,
                          "end": 77
                        },
                        "start": 68,
                        "end": 77
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 79,
                        "end": 83
                      },
                      "start": 78,
                      "end": 83
                    },
                    "start": 67,
                    "end": 84
                  }
                ],
                "start": 57,
                "end": 90
              },
              "declare": false,
              "start": 30,
              "end": 90
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 23,
            "end": 90
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "EventEmitter",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 120
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "addListener",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 150
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 156,
                              "end": 162
                            },
                            "start": 155,
                            "end": 162
                          },
                          "start": 151,
                          "end": 162
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "listener",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ListenerCallback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 173,
                                "end": 189
                              },
                              "typeArguments": null,
                              "start": 173,
                              "end": 189
                            },
                            "start": 172,
                            "end": 189
                          },
                          "start": 164,
                          "end": 189
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 191,
                        "end": 203
                      },
                      "expression": false,
                      "start": 150,
                      "end": 203
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 132,
                    "end": 203
                  }
                ],
                "start": 121,
                "end": 209
              },
              "abstract": false,
              "declare": false,
              "start": 102,
              "end": 209
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 95,
            "end": 209
          }
        ],
        "start": 17,
        "end": 211
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 211
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Consumer",
        "optional": false,
        "typeAnnotation": null,
        "start": 223,
        "end": 231
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EventEmitterConsummer",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 265
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 276,
                    "end": 287
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "emitter",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Events",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 306,
                                  "end": 312
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "EventEmitter",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 313,
                                  "end": 325
                                },
                                "start": 306,
                                "end": 325
                              },
                              "typeArguments": null,
                              "start": 306,
                              "end": 325
                            },
                            "start": 304,
                            "end": 325
                          },
                          "start": 297,
                          "end": 325
                        },
                        "readonly": false,
                        "static": false,
                        "start": 289,
                        "end": 325
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 327,
                      "end": 330
                    },
                    "expression": false,
                    "start": 288,
                    "end": 330
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 276,
                  "end": 330
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "register",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 348,
                    "end": 356
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 373,
                                  "end": 377
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "emitter",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 378,
                                  "end": 385
                                },
                                "optional": false,
                                "computed": false,
                                "start": 373,
                                "end": 385
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addListener",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 386,
                                "end": 397
                              },
                              "optional": false,
                              "computed": false,
                              "start": 373,
                              "end": 397
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "change",
                                "raw": "'change'",
                                "start": 398,
                                "end": 406
                              },
                              {
                                "type": "ArrowFunctionExpression",
                                "expression": false,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "e",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 409,
                                    "end": 410
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 433,
                                            "end": 437
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "changed",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 438,
                                            "end": 445
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 433,
                                          "end": 445
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 433,
                                        "end": 447
                                      },
                                      "directive": null,
                                      "start": 433,
                                      "end": 448
                                    }
                                  ],
                                  "start": 415,
                                  "end": 462
                                },
                                "id": null,
                                "generator": false,
                                "start": 408,
                                "end": 462
                              }
                            ],
                            "optional": false,
                            "start": 373,
                            "end": 463
                          },
                          "directive": null,
                          "start": 373,
                          "end": 464
                        }
                      ],
                      "start": 359,
                      "end": 474
                    },
                    "expression": false,
                    "start": 356,
                    "end": 474
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 340,
                  "end": 474
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "changed",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 498,
                    "end": 505
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 508,
                      "end": 519
                    },
                    "expression": false,
                    "start": 505,
                    "end": 519
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 490,
                  "end": 519
                }
              ],
              "start": 266,
              "end": 525
            },
            "abstract": false,
            "declare": false,
            "start": 238,
            "end": 525
          }
        ],
        "start": 232,
        "end": 527
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 213,
      "end": 527
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 527
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Events",
    "start": 10,
    "end": 16,
    "range": [
      10,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 23,
    "end": 29,
    "range": [
      23,
      29
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 30,
    "end": 39,
    "range": [
      30,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "ListenerCallback",
    "start": 40,
    "end": 56,
    "range": [
      40,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 68,
    "end": 73,
    "range": [
      68,
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
    "value": "any",
    "start": 74,
    "end": 77,
    "range": [
      74,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 79,
    "end": 83,
    "range": [
      79,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 95,
    "end": 101,
    "range": [
      95,
      101
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 102,
    "end": 107,
    "range": [
      102,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "EventEmitter",
    "start": 108,
    "end": 120,
    "range": [
      108,
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
    "value": "public",
    "start": 132,
    "end": 138,
    "range": [
      132,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "addListener",
    "start": 139,
    "end": 150,
    "range": [
      139,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 151,
    "end": 155,
    "range": [
      151,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 156,
    "end": 162,
    "range": [
      156,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "listener",
    "start": 164,
    "end": 172,
    "range": [
      164,
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
    "value": "ListenerCallback",
    "start": 173,
    "end": 189,
    "range": [
      173,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 213,
    "end": 222,
    "range": [
      213,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "Consumer",
    "start": 223,
    "end": 231,
    "range": [
      223,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 238,
    "end": 243,
    "range": [
      238,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "EventEmitterConsummer",
    "start": 244,
    "end": 265,
    "range": [
      244,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 276,
    "end": 287,
    "range": [
      276,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 289,
    "end": 296,
    "range": [
      289,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "emitter",
    "start": 297,
    "end": 304,
    "range": [
      297,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "Events",
    "start": 306,
    "end": 312,
    "range": [
      306,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "EventEmitter",
    "start": 313,
    "end": 325,
    "range": [
      313,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 340,
    "end": 347,
    "range": [
      340,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "register",
    "start": 348,
    "end": 356,
    "range": [
      348,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358,
    "range": [
      357,
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
    "value": "this",
    "start": 373,
    "end": 377,
    "range": [
      373,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "emitter",
    "start": 378,
    "end": 385,
    "range": [
      378,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "addListener",
    "start": 386,
    "end": 397,
    "range": [
      386,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "String",
    "value": "'change'",
    "start": 398,
    "end": 406,
    "range": [
      398,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 412,
    "end": 414,
    "range": [
      412,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 433,
    "end": 437,
    "range": [
      433,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "changed",
    "start": 438,
    "end": 445,
    "range": [
      438,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 490,
    "end": 497,
    "range": [
      490,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "changed",
    "start": 498,
    "end": 505,
    "range": [
      498,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  }
]
```
