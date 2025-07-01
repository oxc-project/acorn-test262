__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InvalidKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 23
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 25
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 34,
                    "end": 40
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 41,
                    "end": 47
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 48,
                    "end": 54
                  }
                ],
                "start": 34,
                "end": 54
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 24,
              "end": 54
            }
          ],
          "start": 23,
          "end": 55
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 62
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "typeArguments": null,
            "start": 66,
            "end": 67
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSNeverKeyword",
            "start": 72,
            "end": 77
          },
          "optional": true,
          "readonly": null,
          "start": 58,
          "end": 79
        },
        "declare": false,
        "start": 7,
        "end": 80
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 80
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InvalidKeys2",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 105
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 107
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 116,
                    "end": 122
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 123,
                    "end": 129
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 130,
                    "end": 136
                  }
                ],
                "start": 116,
                "end": 136
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 106,
              "end": 136
            }
          ],
          "start": 105,
          "end": 137
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 150
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 155
            },
            "typeArguments": null,
            "start": 154,
            "end": 155
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSNeverKeyword",
            "start": 160,
            "end": 165
          },
          "optional": true,
          "readonly": null,
          "start": 146,
          "end": 167
        },
        "declare": false,
        "start": 88,
        "end": 170
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 81,
      "end": 170
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 184,
          "end": 185
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
                "start": 186,
                "end": 187
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 186,
              "end": 187
            }
          ],
          "start": 185,
          "end": 188
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 198
              },
              "typeArguments": null,
              "start": 197,
              "end": 198
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InvalidKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 212
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 213,
                      "end": 216
                    },
                    "start": 213,
                    "end": 216
                  }
                ],
                "start": 212,
                "end": 217
              },
              "start": 201,
              "end": 217
            }
          ],
          "start": 197,
          "end": 217
        },
        "declare": false,
        "start": 179,
        "end": 220
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 172,
      "end": 220
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A2",
          "optional": false,
          "typeAnnotation": null,
          "start": 233,
          "end": 235
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
                "start": 236,
                "end": 237
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 236,
              "end": 237
            }
          ],
          "start": 235,
          "end": 238
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 248
              },
              "typeArguments": null,
              "start": 247,
              "end": 248
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InvalidKeys2",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 263
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 264,
                      "end": 267
                    },
                    "start": 264,
                    "end": 267
                  }
                ],
                "start": 263,
                "end": 268
              },
              "start": 251,
              "end": 268
            }
          ],
          "start": 247,
          "end": 268
        },
        "declare": false,
        "start": 228,
        "end": 271
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 221,
      "end": 271
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 287
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 290,
                "end": 294
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 299
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 302,
                            "end": 303
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 306,
                              "end": 312
                            },
                            "start": 304,
                            "end": 312
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 302,
                          "end": 312
                        }
                      ],
                      "start": 300,
                      "end": 314
                    }
                  ],
                  "start": 299,
                  "end": 315
                },
                "start": 298,
                "end": 315
              },
              "start": 290,
              "end": 315
            },
            "definite": false,
            "start": 286,
            "end": 315
          }
        ],
        "declare": false,
        "start": 280,
        "end": 316
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 273,
      "end": 316
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
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 332
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 335,
                "end": 339
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 343,
                  "end": 345
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 348,
                            "end": 349
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 352,
                              "end": 358
                            },
                            "start": 350,
                            "end": 358
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 348,
                          "end": 358
                        }
                      ],
                      "start": 346,
                      "end": 360
                    }
                  ],
                  "start": 345,
                  "end": 361
                },
                "start": 343,
                "end": 361
              },
              "start": 335,
              "end": 361
            },
            "definite": false,
            "start": 330,
            "end": 361
          }
        ],
        "declare": false,
        "start": 324,
        "end": 362
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 317,
      "end": 362
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
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 378
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 381,
                "end": 385
              },
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 391,
                          "end": 392
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 395,
                            "end": 401
                          },
                          "start": 393,
                          "end": 401
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 391,
                        "end": 401
                      }
                    ],
                    "start": 389,
                    "end": 403
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InvalidKeys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 406,
                      "end": 417
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 418,
                            "end": 421
                          },
                          "start": 418,
                          "end": 421
                        }
                      ],
                      "start": 417,
                      "end": 422
                    },
                    "start": 406,
                    "end": 422
                  }
                ],
                "start": 389,
                "end": 422
              },
              "start": 381,
              "end": 422
            },
            "definite": false,
            "start": 376,
            "end": 422
          }
        ],
        "declare": false,
        "start": 370,
        "end": 423
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 363,
      "end": 423
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
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 439
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 442,
                "end": 446
              },
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 452,
                          "end": 453
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 456,
                            "end": 462
                          },
                          "start": 454,
                          "end": 462
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 452,
                        "end": 462
                      }
                    ],
                    "start": 450,
                    "end": 464
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InvalidKeys2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 479
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 480,
                            "end": 483
                          },
                          "start": 480,
                          "end": 483
                        }
                      ],
                      "start": 479,
                      "end": 484
                    },
                    "start": 467,
                    "end": 484
                  }
                ],
                "start": 450,
                "end": 484
              },
              "start": 442,
              "end": 484
            },
            "definite": false,
            "start": 437,
            "end": 484
          }
        ],
        "declare": false,
        "start": 431,
        "end": 485
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 424,
      "end": 485
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 485
}
```
