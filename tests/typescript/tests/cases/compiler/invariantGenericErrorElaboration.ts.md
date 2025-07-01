__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "wat",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Runtype",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 40
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 41,
                      "end": 44
                    }
                  ],
                  "start": 40,
                  "end": 45
                },
                "start": 33,
                "end": 45
              },
              "start": 31,
              "end": 45
            },
            "start": 28,
            "end": 45
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Num",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 51
          },
          "definite": false,
          "start": 28,
          "end": 51
        }
      ],
      "declare": false,
      "start": 22,
      "end": 52
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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 62
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 68
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 74
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 79
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 71,
                    "end": 79
                  }
                ],
                "start": 69,
                "end": 81
              }
            ],
            "optional": false,
            "start": 65,
            "end": 82
          },
          "definite": false,
          "start": 59,
          "end": 82
        }
      ],
      "declare": false,
      "start": 53,
      "end": 82
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Runtype",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 101
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 103
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 102,
            "end": 103
          }
        ],
        "start": 101,
        "end": 104
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
              "name": "constraint",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 119
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Constraint",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 131
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSThisType",
                      "start": 132,
                      "end": 136
                    }
                  ],
                  "start": 131,
                  "end": 137
                },
                "start": 121,
                "end": 137
              },
              "start": 119,
              "end": 137
            },
            "accessibility": null,
            "static": false,
            "start": 109,
            "end": 137
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "witness",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 147
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 150
                },
                "typeArguments": null,
                "start": 149,
                "end": 150
              },
              "start": 147,
              "end": 150
            },
            "accessibility": null,
            "static": false,
            "start": 140,
            "end": 150
          }
        ],
        "start": 105,
        "end": 152
      },
      "declare": false,
      "start": 84,
      "end": 152
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Num",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 167
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Runtype",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 183
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 184,
                "end": 190
              }
            ],
            "start": 183,
            "end": 191
          },
          "start": 176,
          "end": 191
        }
      ],
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
              "name": "tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 199
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 201,
                  "end": 209
                },
                "start": 201,
                "end": 209
              },
              "start": 199,
              "end": 209
            },
            "accessibility": null,
            "static": false,
            "start": 196,
            "end": 209
          }
        ],
        "start": 192,
        "end": 211
      },
      "declare": false,
      "start": 154,
      "end": 211
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
            "name": "Num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 234
                },
                "typeArguments": null,
                "start": 231,
                "end": 234
              },
              "start": 229,
              "end": 234
            },
            "start": 226,
            "end": 234
          },
          "init": null,
          "definite": false,
          "start": 226,
          "end": 234
        }
      ],
      "declare": true,
      "start": 212,
      "end": 234
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 246,
        "end": 249
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 251
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 264
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 268,
                "end": 274
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Runtype",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 284
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 285,
                      "end": 288
                    }
                  ],
                  "start": 284,
                  "end": 289
                },
                "start": 277,
                "end": 289
              },
              "optional": false,
              "readonly": null,
              "start": 260,
              "end": 291
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 250,
            "end": 291
          }
        ],
        "start": 249,
        "end": 292
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Runtype",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 308
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 312
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 322,
                      "end": 323
                    },
                    "typeArguments": null,
                    "start": 322,
                    "end": 323
                  },
                  "start": 316,
                  "end": 323
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 326,
                        "end": 327
                      },
                      "typeArguments": null,
                      "start": 326,
                      "end": 327
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 328,
                        "end": 329
                      },
                      "typeArguments": null,
                      "start": 328,
                      "end": 329
                    },
                    "start": 326,
                    "end": 330
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "witness",
                      "raw": "'witness'",
                      "start": 331,
                      "end": 340
                    },
                    "start": 331,
                    "end": 340
                  },
                  "start": 326,
                  "end": 341
                },
                "optional": false,
                "readonly": null,
                "start": 309,
                "end": 343
              }
            ],
            "start": 308,
            "end": 344
          },
          "start": 301,
          "end": 344
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 345,
        "end": 347
      },
      "declare": false,
      "start": 236,
      "end": 347
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 365,
        "end": 368
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
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 370
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 385,
                          "end": 391
                        },
                        "start": 383,
                        "end": 391
                      },
                      "start": 382,
                      "end": 391
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Runtype",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 394,
                        "end": 401
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 402,
                            "end": 405
                          }
                        ],
                        "start": 401,
                        "end": 406
                      },
                      "start": 394,
                      "end": 406
                    },
                    "start": 392,
                    "end": 406
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 381,
                  "end": 406
                }
              ],
              "start": 379,
              "end": 408
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 369,
            "end": 408
          }
        ],
        "start": 368,
        "end": 409
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fields",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 419
              },
              "typeArguments": null,
              "start": 418,
              "end": 419
            },
            "start": 416,
            "end": 419
          },
          "start": 410,
          "end": 419
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 425
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 426,
                  "end": 427
                },
                "typeArguments": null,
                "start": 426,
                "end": 427
              }
            ],
            "start": 425,
            "end": 428
          },
          "start": 422,
          "end": 428
        },
        "start": 420,
        "end": 428
      },
      "body": null,
      "expression": false,
      "start": 348,
      "end": 429
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constraint",
        "optional": false,
        "typeAnnotation": null,
        "start": 441,
        "end": 451
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 453
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Runtype",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 469
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 470,
                    "end": 473
                  }
                ],
                "start": 469,
                "end": 474
              },
              "start": 462,
              "end": 474
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 452,
            "end": 474
          }
        ],
        "start": 451,
        "end": 475
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Runtype",
            "optional": false,
            "typeAnnotation": null,
            "start": 484,
            "end": 491
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 492,
                    "end": 493
                  },
                  "typeArguments": null,
                  "start": 492,
                  "end": 493
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "witness",
                    "raw": "'witness'",
                    "start": 494,
                    "end": 503
                  },
                  "start": 494,
                  "end": 503
                },
                "start": 492,
                "end": 504
              }
            ],
            "start": 491,
            "end": 505
          },
          "start": 484,
          "end": 505
        }
      ],
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
              "name": "underlying",
              "optional": false,
              "typeAnnotation": null,
              "start": 510,
              "end": 520
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 523
                },
                "typeArguments": null,
                "start": 522,
                "end": 523
              },
              "start": 520,
              "end": 523
            },
            "accessibility": null,
            "static": false,
            "start": 510,
            "end": 524
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "check",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 532
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 538,
                            "end": 539
                          },
                          "typeArguments": null,
                          "start": 538,
                          "end": 539
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "witness",
                            "raw": "'witness'",
                            "start": 540,
                            "end": 549
                          },
                          "start": 540,
                          "end": 549
                        },
                        "start": 538,
                        "end": 550
                      },
                      "start": 536,
                      "end": 550
                    },
                    "start": 535,
                    "end": 550
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 555,
                    "end": 559
                  },
                  "start": 552,
                  "end": 559
                },
                "start": 534,
                "end": 559
              },
              "start": 532,
              "end": 559
            },
            "accessibility": null,
            "static": false,
            "start": 527,
            "end": 560
          }
        ],
        "start": 506,
        "end": 562
      },
      "declare": false,
      "start": 431,
      "end": 562
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 562
}
```
