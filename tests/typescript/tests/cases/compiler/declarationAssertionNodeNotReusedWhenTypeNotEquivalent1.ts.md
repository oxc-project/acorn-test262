__ESTREE_TEST__:PASS:
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
