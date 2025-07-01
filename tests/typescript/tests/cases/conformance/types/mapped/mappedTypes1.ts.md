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
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
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
              "start": 14,
              "end": 15
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
              },
              "start": 15,
              "end": 23
            },
            "accessibility": null,
            "static": false,
            "start": 14,
            "end": 24
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
              "start": 25,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "accessibility": null,
            "static": false,
            "start": 25,
            "end": 35
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 39,
                "end": 46
              },
              "start": 37,
              "end": 46
            },
            "accessibility": null,
            "static": false,
            "start": 36,
            "end": 46
          }
        ],
        "start": 12,
        "end": 48
      },
      "declare": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T00",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 59
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 66
        },
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "x",
                "raw": "\"x\"",
                "start": 70,
                "end": 73
              },
              "start": 70,
              "end": 73
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "y",
                "raw": "\"y\"",
                "start": 76,
                "end": 79
              },
              "start": 76,
              "end": 79
            }
          ],
          "start": 70,
          "end": 79
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 82,
          "end": 88
        },
        "optional": false,
        "readonly": null,
        "start": 62,
        "end": 90
      },
      "declare": false,
      "start": 51,
      "end": 91
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 100
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 107
        },
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "x",
                "raw": "\"x\"",
                "start": 111,
                "end": 114
              },
              "start": 111,
              "end": 114
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "y",
                "raw": "\"y\"",
                "start": 117,
                "end": 120
              },
              "start": 117,
              "end": 120
            }
          ],
          "start": 111,
          "end": 120
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 124
          },
          "typeArguments": null,
          "start": 123,
          "end": 124
        },
        "optional": false,
        "readonly": null,
        "start": 103,
        "end": 126
      },
      "declare": false,
      "start": 92,
      "end": 127
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 136
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 142,
          "end": 143
        },
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 147,
                "end": 150
              },
              "start": 147,
              "end": 150
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 153,
                "end": 156
              },
              "start": 153,
              "end": 156
            }
          ],
          "start": 147,
          "end": 156
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 163
            },
            "typeArguments": null,
            "start": 159,
            "end": 163
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 165
            },
            "typeArguments": null,
            "start": 164,
            "end": 165
          },
          "start": 159,
          "end": 166
        },
        "optional": false,
        "readonly": null,
        "start": 139,
        "end": 169
      },
      "declare": false,
      "start": 128,
      "end": 169
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 178
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 184,
          "end": 185
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 199
            },
            "typeArguments": null,
            "start": 195,
            "end": 199
          },
          "start": 189,
          "end": 199
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 206
          },
          "typeArguments": null,
          "start": 202,
          "end": 206
        },
        "optional": false,
        "readonly": null,
        "start": 181,
        "end": 208
      },
      "declare": false,
      "start": 170,
      "end": 209
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 216,
        "end": 219
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 226
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 240
            },
            "typeArguments": null,
            "start": 236,
            "end": 240
          },
          "start": 230,
          "end": 240
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 247
            },
            "typeArguments": null,
            "start": 243,
            "end": 247
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 249
            },
            "typeArguments": null,
            "start": 248,
            "end": 249
          },
          "start": 243,
          "end": 250
        },
        "optional": false,
        "readonly": null,
        "start": 222,
        "end": 252
      },
      "declare": false,
      "start": 211,
      "end": 253
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 262
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 268,
          "end": 269
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 283
            },
            "typeArguments": null,
            "start": 279,
            "end": 283
          },
          "start": 273,
          "end": 283
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 291
            },
            "typeArguments": null,
            "start": 287,
            "end": 291
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 293
            },
            "typeArguments": null,
            "start": 292,
            "end": 293
          },
          "start": 287,
          "end": 294
        },
        "optional": true,
        "readonly": null,
        "start": 265,
        "end": 296
      },
      "declare": false,
      "start": 254,
      "end": 297
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 303,
        "end": 306
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 321,
          "end": 322
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 336
            },
            "typeArguments": null,
            "start": 332,
            "end": 336
          },
          "start": 326,
          "end": 336
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 343
            },
            "typeArguments": null,
            "start": 339,
            "end": 343
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 344,
              "end": 345
            },
            "typeArguments": null,
            "start": 344,
            "end": 345
          },
          "start": 339,
          "end": 346
        },
        "optional": false,
        "readonly": true,
        "start": 309,
        "end": 348
      },
      "declare": false,
      "start": 298,
      "end": 349
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 355,
        "end": 358
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 374
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 388
            },
            "typeArguments": null,
            "start": 384,
            "end": 388
          },
          "start": 378,
          "end": 388
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 396
            },
            "typeArguments": null,
            "start": 392,
            "end": 396
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 398
            },
            "typeArguments": null,
            "start": 397,
            "end": 398
          },
          "start": 392,
          "end": 399
        },
        "optional": true,
        "readonly": true,
        "start": 361,
        "end": 401
      },
      "declare": false,
      "start": 350,
      "end": 402
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 409,
        "end": 412
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 418,
          "end": 419
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 433
            },
            "typeArguments": null,
            "start": 429,
            "end": 433
          },
          "start": 423,
          "end": 433
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 436,
                  "end": 440
                },
                "typeArguments": null,
                "start": 436,
                "end": 440
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 441,
                  "end": 442
                },
                "typeArguments": null,
                "start": 441,
                "end": 442
              },
              "start": 436,
              "end": 443
            },
            {
              "type": "TSNullKeyword",
              "start": 446,
              "end": 450
            }
          ],
          "start": 436,
          "end": 450
        },
        "optional": false,
        "readonly": null,
        "start": 415,
        "end": 452
      },
      "declare": false,
      "start": 404,
      "end": 453
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 459,
        "end": 462
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 468,
          "end": 469
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 479,
              "end": 483
            },
            "typeArguments": null,
            "start": 479,
            "end": 483
          },
          "start": 473,
          "end": 483
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
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
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 492,
                    "end": 496
                  },
                  "typeArguments": null,
                  "start": 492,
                  "end": 496
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 497,
                    "end": 498
                  },
                  "typeArguments": null,
                  "start": 497,
                  "end": 498
                },
                "start": 492,
                "end": 499
              }
            ],
            "start": 491,
            "end": 500
          },
          "start": 486,
          "end": 500
        },
        "optional": false,
        "readonly": null,
        "start": 465,
        "end": 502
      },
      "declare": false,
      "start": 454,
      "end": 503
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null,
        "start": 510,
        "end": 513
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 519,
          "end": 520
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 530,
            "end": 533
          },
          "start": 524,
          "end": 533
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 536,
          "end": 540
        },
        "optional": false,
        "readonly": null,
        "start": 516,
        "end": 542
      },
      "declare": false,
      "start": 505,
      "end": 543
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null,
        "start": 549,
        "end": 552
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 558,
          "end": 559
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 569,
            "end": 575
          },
          "start": 563,
          "end": 575
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 578,
          "end": 582
        },
        "optional": false,
        "readonly": null,
        "start": 555,
        "end": 584
      },
      "declare": false,
      "start": 544,
      "end": 585
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T32",
        "optional": false,
        "typeAnnotation": null,
        "start": 591,
        "end": 594
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 600,
          "end": 601
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 611,
            "end": 617
          },
          "start": 605,
          "end": 617
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 620,
          "end": 624
        },
        "optional": false,
        "readonly": null,
        "start": 597,
        "end": 626
      },
      "declare": false,
      "start": 586,
      "end": 627
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T33",
        "optional": false,
        "typeAnnotation": null,
        "start": 633,
        "end": 636
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 642,
          "end": 643
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 653,
            "end": 660
          },
          "start": 647,
          "end": 660
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 663,
          "end": 667
        },
        "optional": false,
        "readonly": null,
        "start": 639,
        "end": 669
      },
      "declare": false,
      "start": 628,
      "end": 670
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T34",
        "optional": false,
        "typeAnnotation": null,
        "start": 676,
        "end": 679
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 685,
          "end": 686
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSUndefinedKeyword",
            "start": 696,
            "end": 705
          },
          "start": 690,
          "end": 705
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 708,
          "end": 712
        },
        "optional": false,
        "readonly": null,
        "start": 682,
        "end": 714
      },
      "declare": false,
      "start": 671,
      "end": 715
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T35",
        "optional": false,
        "typeAnnotation": null,
        "start": 721,
        "end": 724
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 730,
          "end": 731
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSNullKeyword",
            "start": 741,
            "end": 745
          },
          "start": 735,
          "end": 745
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 748,
          "end": 752
        },
        "optional": false,
        "readonly": null,
        "start": 727,
        "end": 754
      },
      "declare": false,
      "start": 716,
      "end": 755
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T36",
        "optional": false,
        "typeAnnotation": null,
        "start": 761,
        "end": 764
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 770,
          "end": 771
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 781,
            "end": 785
          },
          "start": 775,
          "end": 785
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 788,
          "end": 792
        },
        "optional": false,
        "readonly": null,
        "start": 767,
        "end": 794
      },
      "declare": false,
      "start": 756,
      "end": 795
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T37",
        "optional": false,
        "typeAnnotation": null,
        "start": 801,
        "end": 804
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 810,
          "end": 811
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSSymbolKeyword",
            "start": 821,
            "end": 827
          },
          "start": 815,
          "end": 827
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 830,
          "end": 834
        },
        "optional": false,
        "readonly": null,
        "start": 807,
        "end": 836
      },
      "declare": false,
      "start": 796,
      "end": 837
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T38",
        "optional": false,
        "typeAnnotation": null,
        "start": 843,
        "end": 846
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 852,
          "end": 853
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSNeverKeyword",
            "start": 863,
            "end": 868
          },
          "start": 857,
          "end": 868
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 871,
          "end": 875
        },
        "optional": false,
        "readonly": null,
        "start": 849,
        "end": 877
      },
      "declare": false,
      "start": 838,
      "end": 878
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T40",
        "optional": false,
        "typeAnnotation": null,
        "start": 885,
        "end": 888
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 894,
          "end": 895
        },
        "constraint": {
          "type": "TSStringKeyword",
          "start": 899,
          "end": 905
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 908,
          "end": 912
        },
        "optional": false,
        "readonly": null,
        "start": 891,
        "end": 914
      },
      "declare": false,
      "start": 880,
      "end": 915
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T43",
        "optional": false,
        "typeAnnotation": null,
        "start": 921,
        "end": 924
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 930,
          "end": 931
        },
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 935,
                "end": 938
              },
              "start": 935,
              "end": 938
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 941,
                "end": 944
              },
              "start": 941,
              "end": 944
            }
          ],
          "start": 935,
          "end": 944
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 947,
          "end": 951
        },
        "optional": false,
        "readonly": null,
        "start": 927,
        "end": 953
      },
      "declare": false,
      "start": 916,
      "end": 954
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T44",
        "optional": false,
        "typeAnnotation": null,
        "start": 960,
        "end": 963
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 969,
          "end": 970
        },
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 974,
                "end": 977
              },
              "start": 974,
              "end": 977
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 980,
                "end": 983
              },
              "start": 980,
              "end": 983
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 986,
                "end": 989
              },
              "start": 986,
              "end": 989
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 992,
                "end": 995
              },
              "start": 992,
              "end": 995
            }
          ],
          "start": 974,
          "end": 995
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 998,
          "end": 1002
        },
        "optional": false,
        "readonly": null,
        "start": 966,
        "end": 1004
      },
      "declare": false,
      "start": 955,
      "end": 1005
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T47",
        "optional": false,
        "typeAnnotation": null,
        "start": 1011,
        "end": 1014
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1020,
          "end": 1021
        },
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 1025,
              "end": 1031
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1034,
                "end": 1037
              },
              "start": 1034,
              "end": 1037
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 1040,
                "end": 1043
              },
              "start": 1040,
              "end": 1043
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 1046,
                "end": 1049
              },
              "start": 1046,
              "end": 1049
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 1052,
                "end": 1055
              },
              "start": 1052,
              "end": 1055
            }
          ],
          "start": 1025,
          "end": 1055
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1058,
          "end": 1062
        },
        "optional": false,
        "readonly": null,
        "start": 1017,
        "end": 1064
      },
      "declare": false,
      "start": 1006,
      "end": 1065
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1084,
        "end": 1086
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
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1087,
              "end": 1089
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1087,
            "end": 1089
          }
        ],
        "start": 1086,
        "end": 1090
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1097,
            "end": 1098
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1108,
                "end": 1110
              },
              "typeArguments": null,
              "start": 1108,
              "end": 1110
            },
            "start": 1102,
            "end": 1110
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1113,
            "end": 1117
          },
          "optional": false,
          "readonly": null,
          "start": 1094,
          "end": 1119
        },
        "start": 1092,
        "end": 1119
      },
      "body": null,
      "expression": false,
      "start": 1067,
      "end": 1120
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1138,
        "end": 1140
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
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1141,
              "end": 1143
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1152,
              "end": 1158
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1141,
            "end": 1158
          }
        ],
        "start": 1140,
        "end": 1159
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1166,
            "end": 1167
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1177,
                "end": 1179
              },
              "typeArguments": null,
              "start": 1177,
              "end": 1179
            },
            "start": 1171,
            "end": 1179
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1182,
            "end": 1186
          },
          "optional": false,
          "readonly": null,
          "start": 1163,
          "end": 1188
        },
        "start": 1161,
        "end": 1188
      },
      "body": null,
      "expression": false,
      "start": 1121,
      "end": 1189
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1207,
        "end": 1209
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
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1210,
              "end": 1212
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1221,
              "end": 1227
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1210,
            "end": 1227
          }
        ],
        "start": 1209,
        "end": 1228
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1235,
            "end": 1236
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1246,
                "end": 1248
              },
              "typeArguments": null,
              "start": 1246,
              "end": 1248
            },
            "start": 1240,
            "end": 1248
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1251,
            "end": 1255
          },
          "optional": false,
          "readonly": null,
          "start": 1232,
          "end": 1257
        },
        "start": 1230,
        "end": 1257
      },
      "body": null,
      "expression": false,
      "start": 1190,
      "end": 1258
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1276,
        "end": 1278
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
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1279,
              "end": 1281
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1290,
                "end": 1296
              },
              "typeArguments": null,
              "start": 1290,
              "end": 1296
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1279,
            "end": 1296
          }
        ],
        "start": 1278,
        "end": 1297
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1304,
            "end": 1305
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1315,
                "end": 1317
              },
              "typeArguments": null,
              "start": 1315,
              "end": 1317
            },
            "start": 1309,
            "end": 1317
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1320,
            "end": 1324
          },
          "optional": false,
          "readonly": null,
          "start": 1301,
          "end": 1326
        },
        "start": 1299,
        "end": 1326
      },
      "body": null,
      "expression": false,
      "start": 1259,
      "end": 1327
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1333,
            "end": 1335
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1338,
              "end": 1340
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1338,
            "end": 1342
          },
          "definite": false,
          "start": 1333,
          "end": 1342
        }
      ],
      "declare": false,
      "start": 1329,
      "end": 1343
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1348,
            "end": 1350
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1353,
              "end": 1355
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1353,
            "end": 1357
          },
          "definite": false,
          "start": 1348,
          "end": 1357
        }
      ],
      "declare": false,
      "start": 1344,
      "end": 1358
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1363,
            "end": 1365
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1368,
              "end": 1370
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1368,
            "end": 1372
          },
          "definite": false,
          "start": 1363,
          "end": 1372
        }
      ],
      "declare": false,
      "start": 1359,
      "end": 1373
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1378,
            "end": 1380
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1383,
              "end": 1385
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1383,
            "end": 1387
          },
          "definite": false,
          "start": 1378,
          "end": 1387
        }
      ],
      "declare": false,
      "start": 1374,
      "end": 1388
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1388
}
```
