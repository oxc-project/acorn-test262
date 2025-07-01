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
        "name": "AB",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 30
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 42,
                  "end": 45
                },
                "start": 42,
                "end": 45
              },
              "start": 40,
              "end": 45
            },
            "accessibility": null,
            "static": false,
            "start": 39,
            "end": 45
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 53,
                  "end": 56
                },
                "start": 53,
                "end": 56
              },
              "start": 51,
              "end": 56
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 56
          }
        ],
        "start": 33,
        "end": 58
      },
      "declare": false,
      "start": 23,
      "end": 59
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 68
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
              "start": 69,
              "end": 70
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 87
                },
                "typeArguments": null,
                "start": 85,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 69,
            "end": 87
          }
        ],
        "start": 68,
        "end": 88
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 97
        },
        "constraint": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AB",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 103
            },
            "typeArguments": null,
            "start": 101,
            "end": 103
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 105
            },
            "typeArguments": null,
            "start": 104,
            "end": 105
          },
          "start": 101,
          "end": 106
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 109,
            "end": 113
          },
          "start": 109,
          "end": 113
        },
        "optional": false,
        "readonly": null,
        "start": 91,
        "end": 115
      },
      "declare": false,
      "start": 61,
      "end": 116
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 124
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
              "start": 125,
              "end": 126
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 135,
                    "end": 138
                  },
                  "start": 135,
                  "end": 138
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 139,
                    "end": 142
                  },
                  "start": 139,
                  "end": 142
                }
              ],
              "start": 135,
              "end": 142
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 125,
            "end": 142
          }
        ],
        "start": 124,
        "end": 143
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 148
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 150
                },
                "typeArguments": null,
                "start": 149,
                "end": 150
              }
            ],
            "start": 148,
            "end": 151
          },
          "start": 146,
          "end": 151
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 153
          },
          "typeArguments": null,
          "start": 152,
          "end": 153
        },
        "start": 146,
        "end": 154
      },
      "declare": false,
      "start": 117,
      "end": 155
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 172
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AB",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 177
          },
          "typeArguments": null,
          "start": 175,
          "end": 177
        },
        "indexType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AB",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 186
            },
            "typeArguments": null,
            "start": 184,
            "end": 186
          },
          "start": 178,
          "end": 186
        },
        "start": 175,
        "end": 187
      },
      "declare": false,
      "start": 166,
      "end": 188
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 203
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 209,
          "end": 212
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 217
          },
          "typeArguments": null,
          "start": 216,
          "end": 217
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 220,
            "end": 224
          },
          "start": 220,
          "end": 224
        },
        "optional": false,
        "readonly": null,
        "start": 206,
        "end": 226
      },
      "declare": false,
      "start": 196,
      "end": 227
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 237
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 246,
                    "end": 249
                  },
                  "start": 246,
                  "end": 249
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 250,
                    "end": 253
                  },
                  "start": 250,
                  "end": 253
                }
              ],
              "start": 246,
              "end": 253
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 236,
            "end": 253
          }
        ],
        "start": 235,
        "end": 254
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 259
          },
          "typeArguments": null,
          "start": 257,
          "end": 259
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 261
          },
          "typeArguments": null,
          "start": 260,
          "end": 261
        },
        "start": 257,
        "end": 262
      },
      "declare": false,
      "start": 228,
      "end": 262
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 278,
        "end": 280
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
              "start": 281,
              "end": 282
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 291,
                    "end": 294
                  },
                  "start": 291,
                  "end": 294
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 295,
                    "end": 298
                  },
                  "start": 295,
                  "end": 298
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "extra",
                    "raw": "'extra'",
                    "start": 299,
                    "end": 306
                  },
                  "start": 299,
                  "end": 306
                }
              ],
              "start": 291,
              "end": 306
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 281,
            "end": 306
          }
        ],
        "start": 280,
        "end": 307
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 315
          },
          "constraint": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AB",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 321
              },
              "typeArguments": null,
              "start": 319,
              "end": 321
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 323
              },
              "typeArguments": null,
              "start": 322,
              "end": 323
            },
            "start": 319,
            "end": 324
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 327,
              "end": 331
            },
            "start": 327,
            "end": 331
          },
          "optional": false,
          "readonly": null,
          "start": 310,
          "end": 332
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 334
          },
          "typeArguments": null,
          "start": 333,
          "end": 334
        },
        "start": 310,
        "end": 335
      },
      "declare": false,
      "start": 273,
      "end": 336
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null,
        "start": 352,
        "end": 354
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
              "start": 355,
              "end": 356
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 365,
                    "end": 368
                  },
                  "start": 365,
                  "end": 368
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 369,
                    "end": 372
                  },
                  "start": 369,
                  "end": 372
                }
              ],
              "start": 365,
              "end": 372
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 355,
            "end": 372
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 375
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 384,
                    "end": 387
                  },
                  "start": 384,
                  "end": 387
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 388,
                    "end": 391
                  },
                  "start": 388,
                  "end": 391
                }
              ],
              "start": 384,
              "end": 391
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 374,
            "end": 391
          }
        ],
        "start": 354,
        "end": 392
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null,
            "start": 397,
            "end": 400
          },
          "constraint": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AB",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 406
              },
              "typeArguments": null,
              "start": 404,
              "end": 406
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 407,
                "end": 408
              },
              "typeArguments": null,
              "start": 407,
              "end": 408
            },
            "start": 404,
            "end": 409
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 412,
              "end": 416
            },
            "start": 412,
            "end": 416
          },
          "optional": false,
          "readonly": null,
          "start": 395,
          "end": 417
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "L",
            "optional": false,
            "typeAnnotation": null,
            "start": 418,
            "end": 419
          },
          "typeArguments": null,
          "start": 418,
          "end": 419
        },
        "start": 395,
        "end": 420
      },
      "declare": false,
      "start": 347,
      "end": 421
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T7",
        "optional": false,
        "typeAnnotation": null,
        "start": 437,
        "end": 439
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
              "start": 440,
              "end": 441
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 450,
                    "end": 453
                  },
                  "start": 450,
                  "end": 453
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 454,
                    "end": 457
                  },
                  "start": 454,
                  "end": 457
                }
              ],
              "start": 450,
              "end": 457
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 440,
            "end": 457
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 460
            },
            "constraint": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 469,
                "end": 472
              },
              "start": 469,
              "end": 472
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 459,
            "end": 472
          }
        ],
        "start": 439,
        "end": 473
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null,
            "start": 478,
            "end": 481
          },
          "constraint": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AB",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 487
              },
              "typeArguments": null,
              "start": 485,
              "end": 487
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 488,
                "end": 489
              },
              "typeArguments": null,
              "start": 488,
              "end": 489
            },
            "start": 485,
            "end": 490
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 493,
              "end": 497
            },
            "start": 493,
            "end": 497
          },
          "optional": false,
          "readonly": null,
          "start": 476,
          "end": 498
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "L",
            "optional": false,
            "typeAnnotation": null,
            "start": 499,
            "end": 500
          },
          "typeArguments": null,
          "start": 499,
          "end": 500
        },
        "start": 476,
        "end": 501
      },
      "declare": false,
      "start": 432,
      "end": 502
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 502
}
```
