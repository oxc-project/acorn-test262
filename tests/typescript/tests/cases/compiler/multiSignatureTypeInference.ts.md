__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 25,
              "end": 32
            },
            "start": 23,
            "end": 32
          },
          "start": 20,
          "end": 32
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 35,
          "end": 41
        },
        "start": 33,
        "end": 41
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 62
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 69,
              "end": 75
            },
            "start": 67,
            "end": 75
          },
          "start": 63,
          "end": 75
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 83,
              "end": 89
            },
            "start": 81,
            "end": 89
          },
          "start": 77,
          "end": 89
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 92,
          "end": 98
        },
        "start": 90,
        "end": 98
      },
      "body": null,
      "expression": false,
      "start": 43,
      "end": 99
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 119
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 127
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 129,
                "end": 135
              },
              "start": 129,
              "end": 137
            },
            "start": 127,
            "end": 137
          },
          "value": null,
          "start": 120,
          "end": 137
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 140,
            "end": 146
          },
          "start": 140,
          "end": 148
        },
        "start": 138,
        "end": 148
      },
      "body": null,
      "expression": false,
      "start": 100,
      "end": 149
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 170
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 176,
              "end": 183
            },
            "start": 174,
            "end": 183
          },
          "start": 171,
          "end": 183
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 186,
          "end": 193
        },
        "start": 184,
        "end": 193
      },
      "body": null,
      "expression": false,
      "start": 151,
      "end": 194
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 215
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 219,
          "end": 225
        },
        "start": 217,
        "end": 225
      },
      "body": null,
      "expression": false,
      "start": 196,
      "end": 226
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AllParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 242
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
              "start": 243,
              "end": 244
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 243,
            "end": 244
          }
        ],
        "start": 242,
        "end": 245
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
            "start": 252,
            "end": 253
          },
          "typeArguments": null,
          "start": 252,
          "end": 253
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 268,
                    "end": 269
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 277,
                          "end": 279
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 277,
                        "end": 279
                      },
                      "start": 271,
                      "end": 279
                    },
                    "start": 269,
                    "end": 279
                  },
                  "value": null,
                  "start": 265,
                  "end": 279
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 282,
                  "end": 285
                },
                "start": 280,
                "end": 285
              },
              "start": 264,
              "end": 286
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 292
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 300,
                          "end": 302
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 300,
                        "end": 302
                      },
                      "start": 294,
                      "end": 302
                    },
                    "start": 292,
                    "end": 302
                  },
                  "value": null,
                  "start": 288,
                  "end": 302
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 305,
                  "end": 308
                },
                "start": 303,
                "end": 308
              },
              "start": 287,
              "end": 309
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 314,
                    "end": 315
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 323,
                          "end": 325
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 323,
                        "end": 325
                      },
                      "start": 317,
                      "end": 325
                    },
                    "start": 315,
                    "end": 325
                  },
                  "value": null,
                  "start": 311,
                  "end": 325
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 328,
                  "end": 331
                },
                "start": 326,
                "end": 331
              },
              "start": 310,
              "end": 332
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 337,
                    "end": 338
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 346,
                          "end": 348
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 346,
                        "end": 348
                      },
                      "start": 340,
                      "end": 348
                    },
                    "start": 338,
                    "end": 348
                  },
                  "value": null,
                  "start": 334,
                  "end": 348
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 351,
                  "end": 354
                },
                "start": 349,
                "end": 354
              },
              "start": 333,
              "end": 354
            }
          ],
          "start": 262,
          "end": 356
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A1",
                "optional": false,
                "typeAnnotation": null,
                "start": 359,
                "end": 361
              },
              "typeArguments": null,
              "start": 359,
              "end": 361
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A2",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 366
              },
              "typeArguments": null,
              "start": 364,
              "end": 366
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A3",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 371
              },
              "typeArguments": null,
              "start": 369,
              "end": 371
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A4",
                "optional": false,
                "typeAnnotation": null,
                "start": 374,
                "end": 376
              },
              "typeArguments": null,
              "start": 374,
              "end": 376
            }
          ],
          "start": 359,
          "end": 376
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 379,
          "end": 384
        },
        "start": 252,
        "end": 384
      },
      "declare": false,
      "start": 228,
      "end": 385
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AllReturns",
        "optional": false,
        "typeAnnotation": null,
        "start": 392,
        "end": 402
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
              "start": 403,
              "end": 404
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 403,
            "end": 404
          }
        ],
        "start": 402,
        "end": 405
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
            "start": 412,
            "end": 413
          },
          "typeArguments": null,
          "start": 412,
          "end": 413
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 428,
                    "end": 429
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 431,
                        "end": 434
                      },
                      "start": 431,
                      "end": 436
                    },
                    "start": 429,
                    "end": 436
                  },
                  "value": null,
                  "start": 425,
                  "end": 436
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 445,
                      "end": 447
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 445,
                    "end": 447
                  },
                  "start": 439,
                  "end": 447
                },
                "start": 437,
                "end": 447
              },
              "start": 424,
              "end": 448
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 453,
                    "end": 454
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 456,
                        "end": 459
                      },
                      "start": 456,
                      "end": 461
                    },
                    "start": 454,
                    "end": 461
                  },
                  "value": null,
                  "start": 450,
                  "end": 461
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 470,
                      "end": 472
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 470,
                    "end": 472
                  },
                  "start": 464,
                  "end": 472
                },
                "start": 462,
                "end": 472
              },
              "start": 449,
              "end": 473
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 478,
                    "end": 479
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 481,
                        "end": 484
                      },
                      "start": 481,
                      "end": 486
                    },
                    "start": 479,
                    "end": 486
                  },
                  "value": null,
                  "start": 475,
                  "end": 486
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 495,
                      "end": 497
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 495,
                    "end": 497
                  },
                  "start": 489,
                  "end": 497
                },
                "start": 487,
                "end": 497
              },
              "start": 474,
              "end": 498
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 503,
                    "end": 504
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 506,
                        "end": 509
                      },
                      "start": 506,
                      "end": 511
                    },
                    "start": 504,
                    "end": 511
                  },
                  "value": null,
                  "start": 500,
                  "end": 511
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 520,
                      "end": 522
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 520,
                    "end": 522
                  },
                  "start": 514,
                  "end": 522
                },
                "start": 512,
                "end": 522
              },
              "start": 499,
              "end": 522
            }
          ],
          "start": 422,
          "end": 524
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R1",
                "optional": false,
                "typeAnnotation": null,
                "start": 527,
                "end": 529
              },
              "typeArguments": null,
              "start": 527,
              "end": 529
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R2",
                "optional": false,
                "typeAnnotation": null,
                "start": 532,
                "end": 534
              },
              "typeArguments": null,
              "start": 532,
              "end": 534
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R3",
                "optional": false,
                "typeAnnotation": null,
                "start": 537,
                "end": 539
              },
              "typeArguments": null,
              "start": 537,
              "end": 539
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R4",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 544
              },
              "typeArguments": null,
              "start": 542,
              "end": 544
            }
          ],
          "start": 527,
          "end": 544
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 547,
          "end": 552
        },
        "start": 412,
        "end": 552
      },
      "declare": false,
      "start": 387,
      "end": 553
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Params1",
        "optional": false,
        "typeAnnotation": null,
        "start": 560,
        "end": 567
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AllParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 570,
          "end": 579
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 587,
                "end": 589
              },
              "typeArguments": null,
              "start": 580,
              "end": 589
            }
          ],
          "start": 579,
          "end": 590
        },
        "start": 570,
        "end": 590
      },
      "declare": false,
      "start": 555,
      "end": 591
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Params2",
        "optional": false,
        "typeAnnotation": null,
        "start": 658,
        "end": 665
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AllParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 668,
          "end": 677
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 685,
                "end": 687
              },
              "typeArguments": null,
              "start": 678,
              "end": 687
            }
          ],
          "start": 677,
          "end": 688
        },
        "start": 668,
        "end": 688
      },
      "declare": false,
      "start": 653,
      "end": 689
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Params3",
        "optional": false,
        "typeAnnotation": null,
        "start": 714,
        "end": 721
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AllParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 724,
          "end": 733
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f3",
                "optional": false,
                "typeAnnotation": null,
                "start": 741,
                "end": 743
              },
              "typeArguments": null,
              "start": 734,
              "end": 743
            }
          ],
          "start": 733,
          "end": 744
        },
        "start": 724,
        "end": 744
      },
      "declare": false,
      "start": 709,
      "end": 745
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Returns1",
        "optional": false,
        "typeAnnotation": null,
        "start": 759,
        "end": 767
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AllReturns",
          "optional": false,
          "typeAnnotation": null,
          "start": 770,
          "end": 780
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 788,
                "end": 790
              },
              "typeArguments": null,
              "start": 781,
              "end": 790
            }
          ],
          "start": 780,
          "end": 791
        },
        "start": 770,
        "end": 791
      },
      "declare": false,
      "start": 754,
      "end": 791
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Returns2",
        "optional": false,
        "typeAnnotation": null,
        "start": 828,
        "end": 836
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AllReturns",
          "optional": false,
          "typeAnnotation": null,
          "start": 839,
          "end": 849
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 857,
                "end": 859
              },
              "typeArguments": null,
              "start": 850,
              "end": 859
            }
          ],
          "start": 849,
          "end": 860
        },
        "start": 839,
        "end": 860
      },
      "declare": false,
      "start": 823,
      "end": 861
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Returns3",
        "optional": false,
        "typeAnnotation": null,
        "start": 879,
        "end": 887
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AllReturns",
          "optional": false,
          "typeAnnotation": null,
          "start": 890,
          "end": 900
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f3",
                "optional": false,
                "typeAnnotation": null,
                "start": 908,
                "end": 910
              },
              "typeArguments": null,
              "start": 901,
              "end": 910
            }
          ],
          "start": 900,
          "end": 911
        },
        "start": 890,
        "end": 911
      },
      "declare": false,
      "start": 874,
      "end": 912
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferTwoOverloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 952,
        "end": 969
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 970,
              "end": 971
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 980,
                "end": 988
              },
              "typeArguments": null,
              "start": 980,
              "end": 988
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 970,
            "end": 988
          }
        ],
        "start": 969,
        "end": 989
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 995,
            "end": 996
          },
          "typeArguments": null,
          "start": 995,
          "end": 996
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1011,
                    "end": 1013
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1021,
                          "end": 1023
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1021,
                        "end": 1023
                      },
                      "start": 1015,
                      "end": 1023
                    },
                    "start": 1013,
                    "end": 1023
                  },
                  "value": null,
                  "start": 1008,
                  "end": 1023
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1032,
                      "end": 1034
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1032,
                    "end": 1034
                  },
                  "start": 1026,
                  "end": 1034
                },
                "start": 1024,
                "end": 1034
              },
              "start": 1007,
              "end": 1035
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1040,
                    "end": 1042
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1050,
                          "end": 1052
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1050,
                        "end": 1052
                      },
                      "start": 1044,
                      "end": 1052
                    },
                    "start": 1042,
                    "end": 1052
                  },
                  "value": null,
                  "start": 1037,
                  "end": 1052
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1061,
                      "end": 1063
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1061,
                    "end": 1063
                  },
                  "start": 1055,
                  "end": 1063
                },
                "start": 1053,
                "end": 1063
              },
              "start": 1036,
              "end": 1063
            }
          ],
          "start": 1005,
          "end": 1065
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1078,
                    "end": 1080
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1082,
                        "end": 1084
                      },
                      "typeArguments": null,
                      "start": 1082,
                      "end": 1084
                    },
                    "start": 1080,
                    "end": 1084
                  },
                  "value": null,
                  "start": 1075,
                  "end": 1084
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1089,
                    "end": 1091
                  },
                  "typeArguments": null,
                  "start": 1089,
                  "end": 1091
                },
                "start": 1086,
                "end": 1091
              },
              "start": 1074,
              "end": 1091
            },
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1097,
                    "end": 1099
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1101,
                        "end": 1103
                      },
                      "typeArguments": null,
                      "start": 1101,
                      "end": 1103
                    },
                    "start": 1099,
                    "end": 1103
                  },
                  "value": null,
                  "start": 1094,
                  "end": 1103
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1108,
                    "end": 1110
                  },
                  "typeArguments": null,
                  "start": 1108,
                  "end": 1110
                },
                "start": 1105,
                "end": 1110
              },
              "start": 1093,
              "end": 1110
            }
          ],
          "start": 1073,
          "end": 1111
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1119,
          "end": 1124
        },
        "start": 995,
        "end": 1124
      },
      "declare": false,
      "start": 947,
      "end": 1125
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Expected",
        "optional": false,
        "typeAnnotation": null,
        "start": 1132,
        "end": 1140
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferTwoOverloads",
          "optional": false,
          "typeAnnotation": null,
          "start": 1143,
          "end": 1160
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
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
                          "type": "TSStringKeyword",
                          "start": 1166,
                          "end": 1172
                        },
                        "start": 1164,
                        "end": 1172
                      },
                      "start": 1163,
                      "end": 1172
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1177,
                      "end": 1183
                    },
                    "start": 1174,
                    "end": 1183
                  },
                  "start": 1162,
                  "end": 1183
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1194,
                      "end": 1200
                    },
                    "start": 1191,
                    "end": 1200
                  },
                  "start": 1188,
                  "end": 1200
                }
              ],
              "start": 1161,
              "end": 1201
            }
          ],
          "start": 1160,
          "end": 1202
        },
        "start": 1143,
        "end": 1202
      },
      "declare": false,
      "start": 1127,
      "end": 1203
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustOneSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 1256,
        "end": 1272
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferTwoOverloads",
          "optional": false,
          "typeAnnotation": null,
          "start": 1275,
          "end": 1292
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                      "type": "TSStringKeyword",
                      "start": 1298,
                      "end": 1304
                    },
                    "start": 1296,
                    "end": 1304
                  },
                  "start": 1295,
                  "end": 1304
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1309,
                  "end": 1315
                },
                "start": 1306,
                "end": 1315
              },
              "start": 1294,
              "end": 1315
            }
          ],
          "start": 1292,
          "end": 1317
        },
        "start": 1275,
        "end": 1317
      },
      "declare": false,
      "start": 1251,
      "end": 1318
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustTheOtherSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 1376,
        "end": 1397
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferTwoOverloads",
          "optional": false,
          "typeAnnotation": null,
          "start": 1400,
          "end": 1417
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1425,
                  "end": 1431
                },
                "start": 1422,
                "end": 1431
              },
              "start": 1419,
              "end": 1431
            }
          ],
          "start": 1417,
          "end": 1433
        },
        "start": 1400,
        "end": 1433
      },
      "declare": false,
      "start": 1371,
      "end": 1434
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Overloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 1496,
        "end": 1505
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 1506,
              "end": 1507
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1506,
            "end": 1507
          }
        ],
        "start": 1505,
        "end": 1508
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 1515,
            "end": 1516
          },
          "typeArguments": null,
          "start": 1515,
          "end": 1516
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1541,
                    "end": 1545
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1553,
                          "end": 1555
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1553,
                        "end": 1555
                      },
                      "start": 1547,
                      "end": 1555
                    },
                    "start": 1545,
                    "end": 1555
                  },
                  "value": null,
                  "start": 1538,
                  "end": 1555
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1564,
                      "end": 1566
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1564,
                    "end": 1566
                  },
                  "start": 1558,
                  "end": 1566
                },
                "start": 1556,
                "end": 1566
              },
              "start": 1537,
              "end": 1566
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1581,
                    "end": 1585
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1593,
                          "end": 1595
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1593,
                        "end": 1595
                      },
                      "start": 1587,
                      "end": 1595
                    },
                    "start": 1585,
                    "end": 1595
                  },
                  "value": null,
                  "start": 1578,
                  "end": 1595
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1604,
                      "end": 1606
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1604,
                    "end": 1606
                  },
                  "start": 1598,
                  "end": 1606
                },
                "start": 1596,
                "end": 1606
              },
              "start": 1577,
              "end": 1607
            }
          ],
          "start": 1525,
          "end": 1615
        },
        "trueType": {
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
                "name": "rule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1619,
                "end": 1623
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1625,
                    "end": 1626
                  },
                  "start": 1625,
                  "end": 1626
                },
                "start": 1623,
                "end": 1626
              },
              "accessibility": null,
              "static": false,
              "start": 1619,
              "end": 1627
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "variants",
                "optional": false,
                "typeAnnotation": null,
                "start": 1628,
                "end": 1636
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1639,
                            "end": 1641
                          },
                          "typeArguments": null,
                          "start": 1639,
                          "end": 1641
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1643,
                            "end": 1645
                          },
                          "typeArguments": null,
                          "start": 1643,
                          "end": 1645
                        }
                      ],
                      "start": 1638,
                      "end": 1646
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1650,
                            "end": 1652
                          },
                          "typeArguments": null,
                          "start": 1650,
                          "end": 1652
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1654,
                            "end": 1656
                          },
                          "typeArguments": null,
                          "start": 1654,
                          "end": 1656
                        }
                      ],
                      "start": 1649,
                      "end": 1657
                    }
                  ],
                  "start": 1638,
                  "end": 1657
                },
                "start": 1636,
                "end": 1657
              },
              "accessibility": null,
              "static": false,
              "start": 1628,
              "end": 1657
            }
          ],
          "start": 1618,
          "end": 1658
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 1665,
              "end": 1666
            },
            "typeArguments": null,
            "start": 1665,
            "end": 1666
          },
          "extendsType": {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSCallSignatureDeclaration",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1691,
                      "end": 1695
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1703,
                            "end": 1705
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1703,
                          "end": 1705
                        },
                        "start": 1697,
                        "end": 1705
                      },
                      "start": 1695,
                      "end": 1705
                    },
                    "value": null,
                    "start": 1688,
                    "end": 1705
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1714,
                        "end": 1716
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1714,
                      "end": 1716
                    },
                    "start": 1708,
                    "end": 1716
                  },
                  "start": 1706,
                  "end": 1716
                },
                "start": 1687,
                "end": 1717
              }
            ],
            "start": 1675,
            "end": 1725
          },
          "trueType": {
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
                  "name": "rule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1729,
                  "end": 1733
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1735,
                      "end": 1736
                    },
                    "start": 1735,
                    "end": 1736
                  },
                  "start": 1733,
                  "end": 1736
                },
                "accessibility": null,
                "static": false,
                "start": 1729,
                "end": 1737
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "variants",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1738,
                  "end": 1746
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1749,
                          "end": 1751
                        },
                        "typeArguments": null,
                        "start": 1749,
                        "end": 1751
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1753,
                          "end": 1755
                        },
                        "typeArguments": null,
                        "start": 1753,
                        "end": 1755
                      }
                    ],
                    "start": 1748,
                    "end": 1756
                  },
                  "start": 1746,
                  "end": 1756
                },
                "accessibility": null,
                "static": false,
                "start": 1738,
                "end": 1756
              }
            ],
            "start": 1728,
            "end": 1757
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1764,
            "end": 1769
          },
          "start": 1665,
          "end": 1769
        },
        "start": 1515,
        "end": 1769
      },
      "declare": false,
      "start": 1491,
      "end": 1770
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
            "name": "ok1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Overloads",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1791,
                  "end": 1800
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                              "type": "TSNumberKeyword",
                              "start": 1805,
                              "end": 1811
                            },
                            "start": 1803,
                            "end": 1811
                          },
                          "start": 1802,
                          "end": 1811
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1816,
                          "end": 1823
                        },
                        "start": 1813,
                        "end": 1823
                      },
                      "start": 1801,
                      "end": 1823
                    }
                  ],
                  "start": 1800,
                  "end": 1824
                },
                "start": 1791,
                "end": 1824
              },
              "start": 1789,
              "end": 1824
            },
            "start": 1786,
            "end": 1824
          },
          "init": null,
          "definite": false,
          "start": 1786,
          "end": 1824
        }
      ],
      "declare": true,
      "start": 1772,
      "end": 1825
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
            "name": "ok2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Overloads",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1891,
                  "end": 1900
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 1906,
                                "end": 1907
                              },
                              "start": 1906,
                              "end": 1907
                            },
                            "start": 1904,
                            "end": 1907
                          },
                          "start": 1902,
                          "end": 1908
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
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
                                  "type": "TSNumberKeyword",
                                  "start": 1913,
                                  "end": 1919
                                },
                                "start": 1911,
                                "end": 1919
                              },
                              "start": 1910,
                              "end": 1919
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 1922,
                                "end": 1923
                              },
                              "start": 1922,
                              "end": 1923
                            },
                            "start": 1920,
                            "end": 1923
                          },
                          "start": 1909,
                          "end": 1923
                        }
                      ],
                      "start": 1901,
                      "end": 1924
                    }
                  ],
                  "start": 1900,
                  "end": 1925
                },
                "start": 1891,
                "end": 1925
              },
              "start": 1889,
              "end": 1925
            },
            "start": 1886,
            "end": 1925
          },
          "init": null,
          "definite": false,
          "start": 1886,
          "end": 1925
        }
      ],
      "declare": true,
      "start": 1872,
      "end": 1926
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
            "name": "ok3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Overloads",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1996,
                  "end": 2005
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2012,
                          "end": 2019
                        },
                        "start": 2009,
                        "end": 2019
                      },
                      "start": 2006,
                      "end": 2019
                    }
                  ],
                  "start": 2005,
                  "end": 2020
                },
                "start": 1996,
                "end": 2020
              },
              "start": 1994,
              "end": 2020
            },
            "start": 1991,
            "end": 2020
          },
          "init": null,
          "definite": false,
          "start": 1991,
          "end": 2020
        }
      ],
      "declare": true,
      "start": 1977,
      "end": 2021
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
            "name": "ok4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Overloads",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2082,
                  "end": 2091
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2096,
                            "end": 2100
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSUnknownKeyword",
                                "start": 2102,
                                "end": 2109
                              },
                              "start": 2102,
                              "end": 2111
                            },
                            "start": 2100,
                            "end": 2111
                          },
                          "value": null,
                          "start": 2093,
                          "end": 2111
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2116,
                          "end": 2123
                        },
                        "start": 2113,
                        "end": 2123
                      },
                      "start": 2092,
                      "end": 2123
                    }
                  ],
                  "start": 2091,
                  "end": 2124
                },
                "start": 2082,
                "end": 2124
              },
              "start": 2080,
              "end": 2124
            },
            "start": 2077,
            "end": 2124
          },
          "init": null,
          "definite": false,
          "start": 2077,
          "end": 2124
        }
      ],
      "declare": true,
      "start": 2063,
      "end": 2125
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
            "name": "ok5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Overloads",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2193,
                  "end": 2202
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                              "type": "TSUnknownKeyword",
                              "start": 2207,
                              "end": 2214
                            },
                            "start": 2205,
                            "end": 2214
                          },
                          "start": 2204,
                          "end": 2214
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2219,
                          "end": 2226
                        },
                        "start": 2216,
                        "end": 2226
                      },
                      "start": 2203,
                      "end": 2226
                    }
                  ],
                  "start": 2202,
                  "end": 2227
                },
                "start": 2193,
                "end": 2227
              },
              "start": 2191,
              "end": 2227
            },
            "start": 2188,
            "end": 2227
          },
          "init": null,
          "definite": false,
          "start": 2188,
          "end": 2227
        }
      ],
      "declare": true,
      "start": 2174,
      "end": 2228
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
            "name": "ok6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Overloads",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2296,
                  "end": 2305
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                              "type": "TSAnyKeyword",
                              "start": 2310,
                              "end": 2313
                            },
                            "start": 2308,
                            "end": 2313
                          },
                          "start": 2307,
                          "end": 2313
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2318,
                          "end": 2325
                        },
                        "start": 2315,
                        "end": 2325
                      },
                      "start": 2306,
                      "end": 2325
                    }
                  ],
                  "start": 2305,
                  "end": 2326
                },
                "start": 2296,
                "end": 2326
              },
              "start": 2294,
              "end": 2326
            },
            "start": 2291,
            "end": 2326
          },
          "init": null,
          "definite": false,
          "start": 2291,
          "end": 2326
        }
      ],
      "declare": true,
      "start": 2277,
      "end": 2327
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2370
}
```
