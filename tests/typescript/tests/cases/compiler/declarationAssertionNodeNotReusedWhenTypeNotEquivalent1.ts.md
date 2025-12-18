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
        "name": "Wrapper",
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          }
        ],
        "start": 12,
        "end": 15
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
              "name": "_type",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 27
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
              "start": 27,
              "end": 30
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 31
          }
        ],
        "start": 18,
        "end": 33
      },
      "declare": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringWrapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 66
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrapper",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 77
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              }
            ],
            "start": 77,
            "end": 85
          },
          "start": 70,
          "end": 85
        },
        "start": 68,
        "end": 85
      },
      "body": null,
      "expression": false,
      "start": 36,
      "end": 86
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objWrapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 115
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
              "start": 116,
              "end": 117
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 132
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 133,
                    "end": 139
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Wrapper",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 148
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 149,
                          "end": 152
                        }
                      ],
                      "start": 148,
                      "end": 153
                    },
                    "start": 141,
                    "end": 153
                  }
                ],
                "start": 132,
                "end": 154
              },
              "start": 126,
              "end": 154
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 116,
            "end": 154
          }
        ],
        "start": 115,
        "end": 155
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 165
              },
              "typeArguments": null,
              "start": 164,
              "end": 165
            },
            "start": 162,
            "end": 165
          },
          "start": 159,
          "end": 165
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrapper",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 177
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
                  "start": 178,
                  "end": 179
                },
                "typeArguments": null,
                "start": 178,
                "end": 179
              }
            ],
            "start": 177,
            "end": 180
          },
          "start": 170,
          "end": 180
        },
        "start": 168,
        "end": 180
      },
      "body": null,
      "expression": false,
      "start": 88,
      "end": 181
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
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 194
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "objWrapper",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 207
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
                      "name": "prop1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 212,
                      "end": 217
                    },
                    "value": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stringWrapper",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 219,
                          "end": 232
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 219,
                        "end": 234
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Wrapper",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 238,
                          "end": 245
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "hello",
                                "raw": "\"hello\"",
                                "start": 246,
                                "end": 253
                              },
                              "start": 246,
                              "end": 253
                            }
                          ],
                          "start": 245,
                          "end": 254
                        },
                        "start": 238,
                        "end": 254
                      },
                      "start": 219,
                      "end": 254
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 212,
                    "end": 254
                  }
                ],
                "start": 208,
                "end": 257
              }
            ],
            "optional": false,
            "start": 197,
            "end": 258
          },
          "definite": false,
          "start": 189,
          "end": 258
        }
      ],
      "declare": false,
      "start": 183,
      "end": 259
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unwrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 272
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
              "start": 273,
              "end": 274
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 273,
            "end": 274
          }
        ],
        "start": 272,
        "end": 275
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 279
          },
          "typeArguments": null,
          "start": 278,
          "end": 279
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrapper",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 295
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 296,
                "end": 299
              }
            ],
            "start": 295,
            "end": 300
          },
          "start": 288,
          "end": 300
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 305,
                "end": 306
              },
              "typeArguments": null,
              "start": 305,
              "end": 306
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "_type",
                "raw": "\"_type\"",
                "start": 307,
                "end": 314
              },
              "start": 307,
              "end": 314
            },
            "start": 305,
            "end": 315
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Record",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 330
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 331,
                  "end": 337
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Wrapper",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 339,
                    "end": 346
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 347,
                        "end": 350
                      }
                    ],
                    "start": 346,
                    "end": 351
                  },
                  "start": 339,
                  "end": 351
                }
              ],
              "start": 330,
              "end": 352
            },
            "start": 324,
            "end": 352
          },
          "trueType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 365
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 375,
                    "end": 376
                  },
                  "typeArguments": null,
                  "start": 375,
                  "end": 376
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "_type",
                    "raw": "\"_type\"",
                    "start": 377,
                    "end": 384
                  },
                  "start": 377,
                  "end": 384
                },
                "start": 375,
                "end": 385
              },
              "start": 369,
              "end": 385
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unwrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 388,
                "end": 394
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 395,
                          "end": 396
                        },
                        "typeArguments": null,
                        "start": 395,
                        "end": 396
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "_type",
                          "raw": "\"_type\"",
                          "start": 397,
                          "end": 404
                        },
                        "start": 397,
                        "end": 404
                      },
                      "start": 395,
                      "end": 405
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 406,
                        "end": 409
                      },
                      "typeArguments": null,
                      "start": 406,
                      "end": 409
                    },
                    "start": 395,
                    "end": 410
                  }
                ],
                "start": 394,
                "end": 411
              },
              "start": 388,
              "end": 411
            },
            "optional": false,
            "readonly": null,
            "start": 359,
            "end": 413
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 420,
                "end": 421
              },
              "typeArguments": null,
              "start": 420,
              "end": 421
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "_type",
                "raw": "\"_type\"",
                "start": 422,
                "end": 429
              },
              "start": 422,
              "end": 429
            },
            "start": 420,
            "end": 430
          },
          "start": 305,
          "end": 430
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 435,
          "end": 440
        },
        "start": 278,
        "end": 440
      },
      "declare": false,
      "start": 261,
      "end": 441
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unwrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 460,
        "end": 466
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
              "start": 467,
              "end": 468
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 467,
            "end": 468
          }
        ],
        "start": 466,
        "end": 469
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "wrapper",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 479,
                "end": 480
              },
              "typeArguments": null,
              "start": 479,
              "end": 480
            },
            "start": 477,
            "end": 480
          },
          "start": 470,
          "end": 480
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Unwrap",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 489
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
                  "start": 490,
                  "end": 491
                },
                "typeArguments": null,
                "start": 490,
                "end": 491
              }
            ],
            "start": 489,
            "end": 492
          },
          "start": 483,
          "end": 492
        },
        "start": 481,
        "end": 492
      },
      "body": null,
      "expression": false,
      "start": 443,
      "end": 493
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "unwrapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 517
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "unwrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 520,
                "end": 526
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 527,
                  "end": 532
                }
              ],
              "optional": false,
              "start": 520,
              "end": 533
            },
            "definite": false,
            "start": 508,
            "end": 533
          }
        ],
        "declare": false,
        "start": 502,
        "end": 534
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 495,
      "end": 534
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 534
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
    "value": "Wrapper",
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
    "value": "T",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "_type",
    "start": 22,
    "end": 27,
    "range": [
      22,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28,
    "range": [
      27,
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
    "value": ";",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 36,
    "end": 43,
    "range": [
      36,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 44,
    "end": 52,
    "range": [
      44,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "stringWrapper",
    "start": 53,
    "end": 66,
    "range": [
      53,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68,
    "range": [
      67,
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
    "value": "Wrapper",
    "start": 70,
    "end": 77,
    "range": [
      70,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 78,
    "end": 84,
    "range": [
      78,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 88,
    "end": 95,
    "range": [
      88,
      95
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 96,
    "end": 104,
    "range": [
      96,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "objWrapper",
    "start": 105,
    "end": 115,
    "range": [
      105,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 118,
    "end": 125,
    "range": [
      118,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 126,
    "end": 132,
    "range": [
      126,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 133,
    "end": 139,
    "range": [
      133,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "Wrapper",
    "start": 141,
    "end": 148,
    "range": [
      141,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 149,
    "end": 152,
    "range": [
      149,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ">",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 159,
    "end": 162,
    "range": [
      159,
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
    "type": "Identifier",
    "value": "T",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "Wrapper",
    "start": 170,
    "end": 177,
    "range": [
      170,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 183,
    "end": 188,
    "range": [
      183,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 189,
    "end": 194,
    "range": [
      189,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "objWrapper",
    "start": 197,
    "end": 207,
    "range": [
      197,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 212,
    "end": 217,
    "range": [
      212,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "stringWrapper",
    "start": 219,
    "end": 232,
    "range": [
      219,
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
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 235,
    "end": 237,
    "range": [
      235,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "Wrapper",
    "start": 238,
    "end": 245,
    "range": [
      238,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 246,
    "end": 253,
    "range": [
      246,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 261,
    "end": 265,
    "range": [
      261,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "Unwrap",
    "start": 266,
    "end": 272,
    "range": [
      266,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 280,
    "end": 287,
    "range": [
      280,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "Wrapper",
    "start": 288,
    "end": 295,
    "range": [
      288,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 296,
    "end": 299,
    "range": [
      296,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "String",
    "value": "\"_type\"",
    "start": 307,
    "end": 314,
    "range": [
      307,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 316,
    "end": 323,
    "range": [
      316,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 324,
    "end": 330,
    "range": [
      324,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 331,
    "end": 337,
    "range": [
      331,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "Wrapper",
    "start": 339,
    "end": 346,
    "range": [
      339,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 347,
    "end": 350,
    "range": [
      347,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Punctuator",
    "value": "[",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 362,
    "end": 365,
    "range": [
      362,
      365
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 366,
    "end": 368,
    "range": [
      366,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 369,
    "end": 374,
    "range": [
      369,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "String",
    "value": "\"_type\"",
    "start": 377,
    "end": 384,
    "range": [
      377,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "Unwrap",
    "start": 388,
    "end": 394,
    "range": [
      388,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "String",
    "value": "\"_type\"",
    "start": 397,
    "end": 404,
    "range": [
      397,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 406,
    "end": 409,
    "range": [
      406,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "String",
    "value": "\"_type\"",
    "start": 422,
    "end": 429,
    "range": [
      422,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 435,
    "end": 440,
    "range": [
      435,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 443,
    "end": 450,
    "range": [
      443,
      450
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 451,
    "end": 459,
    "range": [
      451,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "unwrap",
    "start": 460,
    "end": 466,
    "range": [
      460,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "wrapper",
    "start": 470,
    "end": 477,
    "range": [
      470,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "Unwrap",
    "start": 483,
    "end": 489,
    "range": [
      483,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 495,
    "end": 501,
    "range": [
      495,
      501
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 502,
    "end": 507,
    "range": [
      502,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "unwrapped",
    "start": 508,
    "end": 517,
    "range": [
      508,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Identifier",
    "value": "unwrap",
    "start": 520,
    "end": 526,
    "range": [
      520,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 527,
    "end": 532,
    "range": [
      527,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  }
]
```
