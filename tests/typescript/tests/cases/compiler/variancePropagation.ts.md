__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedTable",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 79
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 81
            },
            "constraint": {
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
                    "name": "base",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 96
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 98,
                      "end": 101
                    },
                    "start": 96,
                    "end": 101
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 92,
                  "end": 102
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "new",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 106
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 108,
                      "end": 111
                    },
                    "start": 106,
                    "end": 111
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 103,
                  "end": 111
                }
              ],
              "start": 90,
              "end": 113
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 113
          }
        ],
        "start": 79,
        "end": 114
      },
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
              "name": "schema",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 197
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 199,
                        "end": 200
                      },
                      "typeArguments": null,
                      "start": 199,
                      "end": 200
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "base",
                        "raw": "\"base\"",
                        "start": 201,
                        "end": 207
                      },
                      "start": 201,
                      "end": 207
                    },
                    "start": 199,
                    "end": 208
                  },
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 211,
                        "end": 212
                      },
                      "typeArguments": null,
                      "start": 211,
                      "end": 212
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "new",
                        "raw": "\"new\"",
                        "start": 213,
                        "end": 218
                      },
                      "start": 213,
                      "end": 218
                    },
                    "start": 211,
                    "end": 219
                  }
                ],
                "start": 199,
                "end": 219
              },
              "start": 197,
              "end": 219
            },
            "accessibility": null,
            "static": false,
            "start": 191,
            "end": 219
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlySchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 238
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 248
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 249,
                              "end": 250
                            },
                            "typeArguments": null,
                            "start": 249,
                            "end": 250
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "base",
                              "raw": "\"base\"",
                              "start": 251,
                              "end": 257
                            },
                            "start": 251,
                            "end": 257
                          },
                          "start": 249,
                          "end": 258
                        },
                        {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 261,
                              "end": 262
                            },
                            "typeArguments": null,
                            "start": 261,
                            "end": 262
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "new",
                              "raw": "\"new\"",
                              "start": 263,
                              "end": 268
                            },
                            "start": 263,
                            "end": 268
                          },
                          "start": 261,
                          "end": 269
                        }
                      ],
                      "start": 249,
                      "end": 269
                    }
                  ],
                  "start": 248,
                  "end": 270
                },
                "start": 240,
                "end": 270
              },
              "start": 238,
              "end": 270
            },
            "accessibility": null,
            "static": false,
            "start": 224,
            "end": 270
          }
        ],
        "start": 115,
        "end": 272
      },
      "declare": false,
      "start": 57,
      "end": 272
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 288
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
              "name": "baseProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 299
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 301,
                "end": 307
              },
              "start": 299,
              "end": 307
            },
            "accessibility": null,
            "static": false,
            "start": 291,
            "end": 308
          }
        ],
        "start": 289,
        "end": 310
      },
      "declare": false,
      "start": 274,
      "end": 310
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "New",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 324
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
              "name": "newProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 335
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 337,
                "end": 344
              },
              "start": 335,
              "end": 344
            },
            "accessibility": null,
            "static": false,
            "start": 328,
            "end": 345
          }
        ],
        "start": 326,
        "end": 347
      },
      "declare": false,
      "start": 311,
      "end": 347
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
            "name": "source",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DerivedTable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 383
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
                            "name": "base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 386,
                            "end": 390
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 392,
                                "end": 396
                              },
                              "typeArguments": null,
                              "start": 392,
                              "end": 396
                            },
                            "start": 390,
                            "end": 396
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 386,
                          "end": 397
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "new",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 398,
                            "end": 401
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "New",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 403,
                                "end": 406
                              },
                              "typeArguments": null,
                              "start": 403,
                              "end": 406
                            },
                            "start": 401,
                            "end": 406
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 398,
                          "end": 406
                        }
                      ],
                      "start": 384,
                      "end": 408
                    }
                  ],
                  "start": 383,
                  "end": 409
                },
                "start": 371,
                "end": 409
              },
              "start": 369,
              "end": 409
            },
            "start": 363,
            "end": 409
          },
          "init": null,
          "definite": false,
          "start": 363,
          "end": 409
        }
      ],
      "declare": true,
      "start": 349,
      "end": 409
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
            "name": "destination",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DerivedTable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 429,
                  "end": 441
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
                            "name": "base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 444,
                            "end": 448
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 450,
                                "end": 454
                              },
                              "typeArguments": null,
                              "start": 450,
                              "end": 454
                            },
                            "start": 448,
                            "end": 454
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 444,
                          "end": 455
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "new",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 456,
                            "end": 459
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSIntersectionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "New",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 461,
                                    "end": 464
                                  },
                                  "typeArguments": null,
                                  "start": 461,
                                  "end": 464
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Base",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 467,
                                    "end": 471
                                  },
                                  "typeArguments": null,
                                  "start": 467,
                                  "end": 471
                                }
                              ],
                              "start": 461,
                              "end": 471
                            },
                            "start": 459,
                            "end": 471
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 456,
                          "end": 471
                        }
                      ],
                      "start": 442,
                      "end": 473
                    }
                  ],
                  "start": 441,
                  "end": 474
                },
                "start": 429,
                "end": 474
              },
              "start": 427,
              "end": 474
            },
            "start": 416,
            "end": 474
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "source",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 483
          },
          "definite": false,
          "start": 416,
          "end": 483
        }
      ],
      "declare": false,
      "start": 410,
      "end": 484
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 493
}
```
