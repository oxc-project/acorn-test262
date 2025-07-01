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
        "name": "BuildTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 26
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 37,
              "end": 43
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 27,
            "end": 43
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 55,
                "end": 58
              },
              "start": 55,
              "end": 60
            },
            "default": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSAnyKeyword",
                  "start": 64,
                  "end": 67
                }
              ],
              "start": 63,
              "end": 68
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 45,
            "end": 68
          }
        ],
        "start": 26,
        "end": 69
      },
      "typeAnnotation": {
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
              "start": 77,
              "end": 78
            },
            "typeArguments": null,
            "start": 77,
            "end": 78
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "'length'",
              "start": 79,
              "end": 87
            },
            "start": 79,
            "end": 87
          },
          "start": 77,
          "end": 88
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "L",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 98
          },
          "typeArguments": null,
          "start": 97,
          "end": 98
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 102
          },
          "typeArguments": null,
          "start": 101,
          "end": 102
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "BuildTuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 115
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "L",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 117
                },
                "typeArguments": null,
                "start": 116,
                "end": 117
              },
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 123,
                        "end": 124
                      },
                      "typeArguments": null,
                      "start": 123,
                      "end": 124
                    },
                    "start": 120,
                    "end": 124
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 129,
                        "end": 130
                      },
                      "typeArguments": null,
                      "start": 129,
                      "end": 130
                    },
                    "start": 126,
                    "end": 130
                  }
                ],
                "start": 119,
                "end": 131
              }
            ],
            "start": 115,
            "end": 132
          },
          "start": 105,
          "end": 132
        },
        "start": 77,
        "end": 132
      },
      "declare": false,
      "start": 11,
      "end": 133
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 141
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BuildTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 154
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 155,
                "end": 156
              },
              "start": 155,
              "end": 156
            }
          ],
          "start": 154,
          "end": 157
        },
        "start": 144,
        "end": 157
      },
      "declare": false,
      "start": 135,
      "end": 157
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T0",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 166
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSAnyKeyword",
            "start": 170,
            "end": 173
          }
        ],
        "start": 169,
        "end": 174
      },
      "declare": false,
      "start": 159,
      "end": 175
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 183
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T0",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 192
              },
              "typeArguments": null,
              "start": 190,
              "end": 192
            },
            "start": 187,
            "end": 192
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T0",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 199
              },
              "typeArguments": null,
              "start": 197,
              "end": 199
            },
            "start": 194,
            "end": 199
          }
        ],
        "start": 186,
        "end": 200
      },
      "declare": false,
      "start": 176,
      "end": 201
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 207,
        "end": 209
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 218
              },
              "typeArguments": null,
              "start": 216,
              "end": 218
            },
            "start": 213,
            "end": 218
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 223,
                "end": 225
              },
              "typeArguments": null,
              "start": 223,
              "end": 225
            },
            "start": 220,
            "end": 225
          }
        ],
        "start": 212,
        "end": 226
      },
      "declare": false,
      "start": 202,
      "end": 227
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 235
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 244
              },
              "typeArguments": null,
              "start": 242,
              "end": 244
            },
            "start": 239,
            "end": 244
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 251
              },
              "typeArguments": null,
              "start": 249,
              "end": 251
            },
            "start": 246,
            "end": 251
          }
        ],
        "start": 238,
        "end": 252
      },
      "declare": false,
      "start": 228,
      "end": 253
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 261
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 270
              },
              "typeArguments": null,
              "start": 268,
              "end": 270
            },
            "start": 265,
            "end": 270
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 277
              },
              "typeArguments": null,
              "start": 275,
              "end": 277
            },
            "start": 272,
            "end": 277
          }
        ],
        "start": 264,
        "end": 278
      },
      "declare": false,
      "start": 254,
      "end": 279
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 285,
        "end": 287
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 296
              },
              "typeArguments": null,
              "start": 294,
              "end": 296
            },
            "start": 291,
            "end": 296
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 303
              },
              "typeArguments": null,
              "start": 301,
              "end": 303
            },
            "start": 298,
            "end": 303
          }
        ],
        "start": 290,
        "end": 304
      },
      "declare": false,
      "start": 280,
      "end": 305
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 313
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T5",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 322
              },
              "typeArguments": null,
              "start": 320,
              "end": 322
            },
            "start": 317,
            "end": 322
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T5",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 329
              },
              "typeArguments": null,
              "start": 327,
              "end": 329
            },
            "start": 324,
            "end": 329
          }
        ],
        "start": 316,
        "end": 330
      },
      "declare": false,
      "start": 306,
      "end": 331
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T7",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 339
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T6",
                "optional": false,
                "typeAnnotation": null,
                "start": 346,
                "end": 348
              },
              "typeArguments": null,
              "start": 346,
              "end": 348
            },
            "start": 343,
            "end": 348
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T6",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 355
              },
              "typeArguments": null,
              "start": 353,
              "end": 355
            },
            "start": 350,
            "end": 355
          }
        ],
        "start": 342,
        "end": 356
      },
      "declare": false,
      "start": 332,
      "end": 357
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T8",
        "optional": false,
        "typeAnnotation": null,
        "start": 363,
        "end": 365
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T7",
                "optional": false,
                "typeAnnotation": null,
                "start": 372,
                "end": 374
              },
              "typeArguments": null,
              "start": 372,
              "end": 374
            },
            "start": 369,
            "end": 374
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T7",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 381
              },
              "typeArguments": null,
              "start": 379,
              "end": 381
            },
            "start": 376,
            "end": 381
          }
        ],
        "start": 368,
        "end": 382
      },
      "declare": false,
      "start": 358,
      "end": 383
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T9",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 391
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T8",
                "optional": false,
                "typeAnnotation": null,
                "start": 398,
                "end": 400
              },
              "typeArguments": null,
              "start": 398,
              "end": 400
            },
            "start": 395,
            "end": 400
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T8",
                "optional": false,
                "typeAnnotation": null,
                "start": 405,
                "end": 407
              },
              "typeArguments": null,
              "start": 405,
              "end": 407
            },
            "start": 402,
            "end": 407
          }
        ],
        "start": 394,
        "end": 408
      },
      "declare": false,
      "start": 384,
      "end": 409
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 418
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T9",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 427
              },
              "typeArguments": null,
              "start": 425,
              "end": 427
            },
            "start": 422,
            "end": 427
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T9",
                "optional": false,
                "typeAnnotation": null,
                "start": 432,
                "end": 434
              },
              "typeArguments": null,
              "start": 432,
              "end": 434
            },
            "start": 429,
            "end": 434
          }
        ],
        "start": 421,
        "end": 435
      },
      "declare": false,
      "start": 410,
      "end": 436
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 442,
        "end": 445
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T10",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 455
              },
              "typeArguments": null,
              "start": 452,
              "end": 455
            },
            "start": 449,
            "end": 455
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T10",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 463
              },
              "typeArguments": null,
              "start": 460,
              "end": 463
            },
            "start": 457,
            "end": 463
          }
        ],
        "start": 448,
        "end": 464
      },
      "declare": false,
      "start": 437,
      "end": 465
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 474
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T11",
                "optional": false,
                "typeAnnotation": null,
                "start": 481,
                "end": 484
              },
              "typeArguments": null,
              "start": 481,
              "end": 484
            },
            "start": 478,
            "end": 484
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T11",
                "optional": false,
                "typeAnnotation": null,
                "start": 489,
                "end": 492
              },
              "typeArguments": null,
              "start": 489,
              "end": 492
            },
            "start": 486,
            "end": 492
          }
        ],
        "start": 477,
        "end": 493
      },
      "declare": false,
      "start": 466,
      "end": 494
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 500,
        "end": 503
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T12",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 513
              },
              "typeArguments": null,
              "start": 510,
              "end": 513
            },
            "start": 507,
            "end": 513
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T12",
                "optional": false,
                "typeAnnotation": null,
                "start": 518,
                "end": 521
              },
              "typeArguments": null,
              "start": 518,
              "end": 521
            },
            "start": 515,
            "end": 521
          }
        ],
        "start": 506,
        "end": 522
      },
      "declare": false,
      "start": 495,
      "end": 523
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T14",
        "optional": false,
        "typeAnnotation": null,
        "start": 529,
        "end": 532
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T13",
                "optional": false,
                "typeAnnotation": null,
                "start": 539,
                "end": 542
              },
              "typeArguments": null,
              "start": 539,
              "end": 542
            },
            "start": 536,
            "end": 542
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T13",
                "optional": false,
                "typeAnnotation": null,
                "start": 547,
                "end": 550
              },
              "typeArguments": null,
              "start": 547,
              "end": 550
            },
            "start": 544,
            "end": 550
          }
        ],
        "start": 535,
        "end": 551
      },
      "declare": false,
      "start": 524,
      "end": 552
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
            "name": "a0",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 579
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 583,
                  "end": 584
                }
              ],
              "start": 582,
              "end": 585
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 589,
                "end": 594
              },
              "typeArguments": null,
              "start": 589,
              "end": 594
            },
            "start": 582,
            "end": 594
          },
          "definite": false,
          "start": 577,
          "end": 594
        }
      ],
      "declare": false,
      "start": 571,
      "end": 595
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 602,
            "end": 604
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 611,
                    "end": 613
                  },
                  "start": 608,
                  "end": 613
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 618,
                    "end": 620
                  },
                  "start": 615,
                  "end": 620
                }
              ],
              "start": 607,
              "end": 621
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 625,
                "end": 630
              },
              "typeArguments": null,
              "start": 625,
              "end": 630
            },
            "start": 607,
            "end": 630
          },
          "definite": false,
          "start": 602,
          "end": 630
        }
      ],
      "declare": false,
      "start": 596,
      "end": 631
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 640
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 647,
                    "end": 649
                  },
                  "start": 644,
                  "end": 649
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 654,
                    "end": 656
                  },
                  "start": 651,
                  "end": 656
                }
              ],
              "start": 643,
              "end": 657
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 661,
                "end": 666
              },
              "typeArguments": null,
              "start": 661,
              "end": 666
            },
            "start": 643,
            "end": 666
          },
          "definite": false,
          "start": 638,
          "end": 666
        }
      ],
      "declare": false,
      "start": 632,
      "end": 667
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 674,
            "end": 676
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 683,
                    "end": 685
                  },
                  "start": 680,
                  "end": 685
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 690,
                    "end": 692
                  },
                  "start": 687,
                  "end": 692
                }
              ],
              "start": 679,
              "end": 693
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 697,
                "end": 702
              },
              "typeArguments": null,
              "start": 697,
              "end": 702
            },
            "start": 679,
            "end": 702
          },
          "definite": false,
          "start": 674,
          "end": 702
        }
      ],
      "declare": false,
      "start": 668,
      "end": 703
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 710,
            "end": 712
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 719,
                    "end": 721
                  },
                  "start": 716,
                  "end": 721
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 726,
                    "end": 728
                  },
                  "start": 723,
                  "end": 728
                }
              ],
              "start": 715,
              "end": 729
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 733,
                "end": 738
              },
              "typeArguments": null,
              "start": 733,
              "end": 738
            },
            "start": 715,
            "end": 738
          },
          "definite": false,
          "start": 710,
          "end": 738
        }
      ],
      "declare": false,
      "start": 704,
      "end": 739
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
            "name": "a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 746,
            "end": 748
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 755,
                    "end": 757
                  },
                  "start": 752,
                  "end": 757
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 762,
                    "end": 764
                  },
                  "start": 759,
                  "end": 764
                }
              ],
              "start": 751,
              "end": 765
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 769,
                "end": 774
              },
              "typeArguments": null,
              "start": 769,
              "end": 774
            },
            "start": 751,
            "end": 774
          },
          "definite": false,
          "start": 746,
          "end": 774
        }
      ],
      "declare": false,
      "start": 740,
      "end": 775
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
            "name": "a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 782,
            "end": 784
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 791,
                    "end": 793
                  },
                  "start": 788,
                  "end": 793
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 798,
                    "end": 800
                  },
                  "start": 795,
                  "end": 800
                }
              ],
              "start": 787,
              "end": 801
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 805,
                "end": 810
              },
              "typeArguments": null,
              "start": 805,
              "end": 810
            },
            "start": 787,
            "end": 810
          },
          "definite": false,
          "start": 782,
          "end": 810
        }
      ],
      "declare": false,
      "start": 776,
      "end": 811
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
            "name": "a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 818,
            "end": 820
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 827,
                    "end": 829
                  },
                  "start": 824,
                  "end": 829
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 834,
                    "end": 836
                  },
                  "start": 831,
                  "end": 836
                }
              ],
              "start": 823,
              "end": 837
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 841,
                "end": 846
              },
              "typeArguments": null,
              "start": 841,
              "end": 846
            },
            "start": 823,
            "end": 846
          },
          "definite": false,
          "start": 818,
          "end": 846
        }
      ],
      "declare": false,
      "start": 812,
      "end": 847
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
            "name": "a8",
            "optional": false,
            "typeAnnotation": null,
            "start": 854,
            "end": 856
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 863,
                    "end": 865
                  },
                  "start": 860,
                  "end": 865
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 870,
                    "end": 872
                  },
                  "start": 867,
                  "end": 872
                }
              ],
              "start": 859,
              "end": 873
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 877,
                "end": 882
              },
              "typeArguments": null,
              "start": 877,
              "end": 882
            },
            "start": 859,
            "end": 882
          },
          "definite": false,
          "start": 854,
          "end": 882
        }
      ],
      "declare": false,
      "start": 848,
      "end": 883
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
            "name": "a9",
            "optional": false,
            "typeAnnotation": null,
            "start": 890,
            "end": 892
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 899,
                    "end": 901
                  },
                  "start": 896,
                  "end": 901
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 906,
                    "end": 908
                  },
                  "start": 903,
                  "end": 908
                }
              ],
              "start": 895,
              "end": 909
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 913,
                "end": 918
              },
              "typeArguments": null,
              "start": 913,
              "end": 918
            },
            "start": 895,
            "end": 918
          },
          "definite": false,
          "start": 890,
          "end": 918
        }
      ],
      "declare": false,
      "start": 884,
      "end": 919
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
            "name": "a10",
            "optional": false,
            "typeAnnotation": null,
            "start": 926,
            "end": 929
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 936,
                    "end": 938
                  },
                  "start": 933,
                  "end": 938
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 943,
                    "end": 945
                  },
                  "start": 940,
                  "end": 945
                }
              ],
              "start": 932,
              "end": 946
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 950,
                "end": 955
              },
              "typeArguments": null,
              "start": 950,
              "end": 955
            },
            "start": 932,
            "end": 955
          },
          "definite": false,
          "start": 926,
          "end": 955
        }
      ],
      "declare": false,
      "start": 920,
      "end": 956
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
            "name": "a11",
            "optional": false,
            "typeAnnotation": null,
            "start": 963,
            "end": 966
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 973,
                    "end": 976
                  },
                  "start": 970,
                  "end": 976
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 981,
                    "end": 984
                  },
                  "start": 978,
                  "end": 984
                }
              ],
              "start": 969,
              "end": 985
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 989,
                "end": 994
              },
              "typeArguments": null,
              "start": 989,
              "end": 994
            },
            "start": 969,
            "end": 994
          },
          "definite": false,
          "start": 963,
          "end": 994
        }
      ],
      "declare": false,
      "start": 957,
      "end": 995
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
            "name": "a12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1002,
            "end": 1005
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1012,
                    "end": 1015
                  },
                  "start": 1009,
                  "end": 1015
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1020,
                    "end": 1023
                  },
                  "start": 1017,
                  "end": 1023
                }
              ],
              "start": 1008,
              "end": 1024
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1028,
                "end": 1033
              },
              "typeArguments": null,
              "start": 1028,
              "end": 1033
            },
            "start": 1008,
            "end": 1033
          },
          "definite": false,
          "start": 1002,
          "end": 1033
        }
      ],
      "declare": false,
      "start": 996,
      "end": 1034
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
            "name": "a13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1041,
            "end": 1044
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a12",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1051,
                    "end": 1054
                  },
                  "start": 1048,
                  "end": 1054
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a12",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1059,
                    "end": 1062
                  },
                  "start": 1056,
                  "end": 1062
                }
              ],
              "start": 1047,
              "end": 1063
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1067,
                "end": 1072
              },
              "typeArguments": null,
              "start": 1067,
              "end": 1072
            },
            "start": 1047,
            "end": 1072
          },
          "definite": false,
          "start": 1041,
          "end": 1072
        }
      ],
      "declare": false,
      "start": 1035,
      "end": 1073
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
            "name": "a14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1080,
            "end": 1083
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a13",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1090,
                    "end": 1093
                  },
                  "start": 1087,
                  "end": 1093
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a13",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1098,
                    "end": 1101
                  },
                  "start": 1095,
                  "end": 1101
                }
              ],
              "start": 1086,
              "end": 1102
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1106,
                "end": 1111
              },
              "typeArguments": null,
              "start": 1106,
              "end": 1111
            },
            "start": 1086,
            "end": 1111
          },
          "definite": false,
          "start": 1080,
          "end": 1111
        }
      ],
      "declare": false,
      "start": 1074,
      "end": 1112
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 11,
  "end": 1129
}
```
