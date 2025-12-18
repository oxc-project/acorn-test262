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
        "name": "Request",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 12
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 20
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 35
              },
              "typeArguments": null,
              "start": 29,
              "end": 35
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 35
          }
        ],
        "start": 12,
        "end": 36
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "query",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 48
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TSchema",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 57
                  },
                  "typeArguments": null,
                  "start": 50,
                  "end": 57
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "query",
                    "raw": "\"query\"",
                    "start": 58,
                    "end": 65
                  },
                  "start": 58,
                  "end": 65
                },
                "start": 50,
                "end": 66
              },
              "start": 48,
              "end": 66
            },
            "accessibility": null,
            "static": false,
            "start": 43,
            "end": 67
          }
        ],
        "start": 39,
        "end": 69
      },
      "declare": false,
      "start": 0,
      "end": 70
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 83
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "query",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 93
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 96,
                "end": 103
              },
              "start": 94,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 88,
            "end": 104
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "body",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 109
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 112,
                "end": 119
              },
              "start": 110,
              "end": 119
            },
            "accessibility": null,
            "static": false,
            "start": 105,
            "end": 119
          }
        ],
        "start": 86,
        "end": 121
      },
      "declare": false,
      "start": 72,
      "end": 122
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "route",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 146
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
              "name": "TSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 154
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 169
              },
              "typeArguments": null,
              "start": 163,
              "end": 169
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 147,
            "end": 169
          }
        ],
        "start": 146,
        "end": 170
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pre",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 180,
                    "end": 183
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TSchema",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 189,
                                "end": 196
                              },
                              "typeArguments": null,
                              "start": 189,
                              "end": 196
                            },
                            "start": 187,
                            "end": 196
                          },
                          "start": 186,
                          "end": 196
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 201,
                          "end": 205
                        },
                        "start": 198,
                        "end": 205
                      },
                      "start": 185,
                      "end": 205
                    },
                    "start": 183,
                    "end": 205
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 180,
                  "end": 206
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "schema",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 215
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TSchema",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 217,
                        "end": 224
                      },
                      "typeArguments": null,
                      "start": 217,
                      "end": 224
                    },
                    "start": 215,
                    "end": 224
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 209,
                  "end": 225
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "handle",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 234
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
                          "name": "req",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Request",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 242,
                                "end": 249
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TSchema",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 250,
                                      "end": 257
                                    },
                                    "typeArguments": null,
                                    "start": 250,
                                    "end": 257
                                  }
                                ],
                                "start": 249,
                                "end": 258
                              },
                              "start": 242,
                              "end": 258
                            },
                            "start": 240,
                            "end": 258
                          },
                          "start": 237,
                          "end": 258
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 263,
                          "end": 267
                        },
                        "start": 260,
                        "end": 267
                      },
                      "start": 236,
                      "end": 267
                    },
                    "start": 234,
                    "end": 267
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 228,
                  "end": 268
                }
              ],
              "start": 176,
              "end": 270
            },
            "start": 174,
            "end": 270
          },
          "start": 171,
          "end": 270
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 273,
          "end": 277
        },
        "start": 271,
        "end": 277
      },
      "body": null,
      "expression": false,
      "start": 124,
      "end": 278
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
            "name": "validate",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 294
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "query",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 303,
                          "end": 308
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 311,
                            "end": 318
                          },
                          "start": 309,
                          "end": 318
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 303,
                        "end": 319
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "body",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 320,
                          "end": 324
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 327,
                            "end": 334
                          },
                          "start": 325,
                          "end": 334
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 320,
                        "end": 334
                      }
                    ],
                    "start": 301,
                    "end": 336
                  },
                  "start": 299,
                  "end": 336
                },
                "start": 298,
                "end": 336
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 341,
              "end": 343
            },
            "id": null,
            "generator": false,
            "start": 297,
            "end": 343
          },
          "definite": false,
          "start": 286,
          "end": 343
        }
      ],
      "declare": false,
      "start": 280,
      "end": 344
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "route",
          "optional": false,
          "typeAnnotation": null,
          "start": 346,
          "end": 351
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pre",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 359
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "validate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 369
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 356,
                "end": 369
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 373,
                  "end": 379
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "query",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 387,
                        "end": 392
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 394,
                        "end": 396
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 387,
                      "end": 396
                    }
                  ],
                  "start": 381,
                  "end": 401
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 373,
                "end": 401
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "handle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 411
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "req",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 414,
                      "end": 417
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
                              "name": "test",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 440,
                                  "end": 446
                                },
                                "start": 438,
                                "end": 446
                              },
                              "start": 434,
                              "end": 446
                            },
                            "init": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "req",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 449,
                                "end": 452
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "query",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 453,
                                "end": 458
                              },
                              "optional": false,
                              "computed": false,
                              "start": 449,
                              "end": 458
                            },
                            "definite": false,
                            "start": 434,
                            "end": 458
                          }
                        ],
                        "declare": false,
                        "start": 428,
                        "end": 459
                      }
                    ],
                    "start": 422,
                    "end": 463
                  },
                  "id": null,
                  "generator": false,
                  "start": 413,
                  "end": 463
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 405,
                "end": 463
              }
            ],
            "start": 352,
            "end": 466
          }
        ],
        "optional": false,
        "start": 346,
        "end": 467
      },
      "directive": null,
      "start": 346,
      "end": 468
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 470,
      "end": 480
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 480
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
    "value": "Request",
    "start": 5,
    "end": 12,
    "range": [
      5,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "TSchema",
    "start": 13,
    "end": 20,
    "range": [
      13,
      20
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 21,
    "end": 28,
    "range": [
      21,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 29,
    "end": 35,
    "range": [
      29,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "query",
    "start": 43,
    "end": 48,
    "range": [
      43,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "TSchema",
    "start": 50,
    "end": 57,
    "range": [
      50,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "String",
    "value": "\"query\"",
    "start": 58,
    "end": 65,
    "range": [
      58,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 72,
    "end": 76,
    "range": [
      72,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 77,
    "end": 83,
    "range": [
      77,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "query",
    "start": 88,
    "end": 93,
    "range": [
      88,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 96,
    "end": 103,
    "range": [
      96,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 105,
    "end": 109,
    "range": [
      105,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 112,
    "end": 119,
    "range": [
      112,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 124,
    "end": 131,
    "range": [
      124,
      131
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 132,
    "end": 140,
    "range": [
      132,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "route",
    "start": 141,
    "end": 146,
    "range": [
      141,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "TSchema",
    "start": 147,
    "end": 154,
    "range": [
      147,
      154
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 155,
    "end": 162,
    "range": [
      155,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 163,
    "end": 169,
    "range": [
      163,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 171,
    "end": 174,
    "range": [
      171,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 180,
    "end": 183,
    "range": [
      180,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "TSchema",
    "start": 189,
    "end": 196,
    "range": [
      189,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 198,
    "end": 200,
    "range": [
      198,
      200
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 201,
    "end": 205,
    "range": [
      201,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 209,
    "end": 215,
    "range": [
      209,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "TSchema",
    "start": 217,
    "end": 224,
    "range": [
      217,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "handle",
    "start": 228,
    "end": 234,
    "range": [
      228,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 237,
    "end": 240,
    "range": [
      237,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 242,
    "end": 249,
    "range": [
      242,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "TSchema",
    "start": 250,
    "end": 257,
    "range": [
      250,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 260,
    "end": 262,
    "range": [
      260,
      262
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 263,
    "end": 267,
    "range": [
      263,
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
    "value": ":",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 273,
    "end": 277,
    "range": [
      273,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 280,
    "end": 285,
    "range": [
      280,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "validate",
    "start": 286,
    "end": 294,
    "range": [
      286,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "query",
    "start": 303,
    "end": 308,
    "range": [
      303,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 311,
    "end": 318,
    "range": [
      311,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 320,
    "end": 324,
    "range": [
      320,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 327,
    "end": 334,
    "range": [
      327,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 338,
    "end": 340,
    "range": [
      338,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "route",
    "start": 346,
    "end": 351,
    "range": [
      346,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Identifier",
    "value": "pre",
    "start": 356,
    "end": 359,
    "range": [
      356,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "validate",
    "start": 361,
    "end": 369,
    "range": [
      361,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 373,
    "end": 379,
    "range": [
      373,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "query",
    "start": 387,
    "end": 392,
    "range": [
      387,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 394,
    "end": 396,
    "range": [
      394,
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
    "type": "Punctuator",
    "value": "}",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "handle",
    "start": 405,
    "end": 411,
    "range": [
      405,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 414,
    "end": 417,
    "range": [
      414,
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
    "value": "=>",
    "start": 419,
    "end": 421,
    "range": [
      419,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 428,
    "end": 433,
    "range": [
      428,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 434,
    "end": 438,
    "range": [
      434,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 440,
    "end": 446,
    "range": [
      440,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 449,
    "end": 452,
    "range": [
      449,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "query",
    "start": 453,
    "end": 458,
    "range": [
      453,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 470,
    "end": 476,
    "range": [
      470,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  }
]
```
