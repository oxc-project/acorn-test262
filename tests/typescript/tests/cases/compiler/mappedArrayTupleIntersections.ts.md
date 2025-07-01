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
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
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
              "start": 9,
              "end": 10
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 9,
            "end": 10
          }
        ],
        "start": 8,
        "end": 11
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 21
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
                  "start": 23,
                  "end": 24
                },
                "typeArguments": null,
                "start": 23,
                "end": 24
              },
              "start": 21,
              "end": 24
            },
            "accessibility": null,
            "static": false,
            "start": 16,
            "end": 24
          }
        ],
        "start": 14,
        "end": 26
      },
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Boxify",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 39
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
              "start": 40,
              "end": 41
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 40,
            "end": 41
          }
        ],
        "start": 39,
        "end": 42
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 48,
          "end": 49
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "typeArguments": null,
            "start": 59,
            "end": 60
          },
          "start": 53,
          "end": 60
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 66
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 68
                  },
                  "typeArguments": null,
                  "start": 67,
                  "end": 68
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 70
                  },
                  "typeArguments": null,
                  "start": 69,
                  "end": 70
                },
                "start": 67,
                "end": 71
              }
            ],
            "start": 66,
            "end": 72
          },
          "start": 63,
          "end": 72
        },
        "optional": false,
        "readonly": null,
        "start": 45,
        "end": 74
      },
      "declare": false,
      "start": 28,
      "end": 75
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 84
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxify",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 93
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 94,
                "end": 100
              },
              "start": 94,
              "end": 102
            }
          ],
          "start": 93,
          "end": 103
        },
        "start": 87,
        "end": 103
      },
      "declare": false,
      "start": 77,
      "end": 104
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 112
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxify",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 121
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 123,
                  "end": 129
                },
                {
                  "type": "TSStringKeyword",
                  "start": 131,
                  "end": 137
                }
              ],
              "start": 122,
              "end": 138
            }
          ],
          "start": 121,
          "end": 139
        },
        "start": 115,
        "end": 139
      },
      "declare": false,
      "start": 105,
      "end": 140
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 148
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxify",
          "optional": false,
          "typeAnnotation": null,
          "start": 151,
          "end": 157
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 158,
                    "end": 164
                  },
                  "start": 158,
                  "end": 166
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSUnknownKeyword",
                    "start": 169,
                    "end": 176
                  },
                  "start": 169,
                  "end": 178
                }
              ],
              "start": 158,
              "end": 178
            }
          ],
          "start": 157,
          "end": 179
        },
        "start": 151,
        "end": 179
      },
      "declare": false,
      "start": 141,
      "end": 180
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 188
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxify",
          "optional": false,
          "typeAnnotation": null,
          "start": 191,
          "end": 197
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 198,
                    "end": 204
                  },
                  "start": 198,
                  "end": 206
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSStringKeyword",
                      "start": 210,
                      "end": 216
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 218,
                      "end": 224
                    }
                  ],
                  "start": 209,
                  "end": 225
                }
              ],
              "start": 198,
              "end": 225
            }
          ],
          "start": 197,
          "end": 226
        },
        "start": 191,
        "end": 226
      },
      "declare": false,
      "start": 181,
      "end": 227
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 235
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxify",
          "optional": false,
          "typeAnnotation": null,
          "start": 238,
          "end": 244
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 245,
                    "end": 251
                  },
                  "start": 245,
                  "end": 253
                },
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
                        "start": 258,
                        "end": 259
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 261,
                          "end": 267
                        },
                        "start": 259,
                        "end": 267
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 258,
                      "end": 267
                    }
                  ],
                  "start": 256,
                  "end": 269
                }
              ],
              "start": 245,
              "end": 269
            }
          ],
          "start": 244,
          "end": 270
        },
        "start": 238,
        "end": 270
      },
      "declare": false,
      "start": 228,
      "end": 271
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MustBeArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 335,
        "end": 346
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
              "start": 347,
              "end": 348
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 357,
                "end": 360
              },
              "start": 357,
              "end": 362
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 347,
            "end": 362
          }
        ],
        "start": 346,
        "end": 363
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 366,
          "end": 367
        },
        "typeArguments": null,
        "start": 366,
        "end": 367
      },
      "declare": false,
      "start": 330,
      "end": 368
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Hmm",
        "optional": false,
        "typeAnnotation": null,
        "start": 375,
        "end": 378
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
              "start": 379,
              "end": 380
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 389,
                "end": 392
              },
              "start": 389,
              "end": 394
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 379,
            "end": 394
          }
        ],
        "start": 378,
        "end": 395
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
            "start": 398,
            "end": 399
          },
          "typeArguments": null,
          "start": 398,
          "end": 399
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSNumberKeyword",
            "start": 408,
            "end": 414
          },
          "start": 408,
          "end": 416
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MustBeArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 423,
            "end": 434
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 438,
                  "end": 439
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 450
                    },
                    "typeArguments": null,
                    "start": 449,
                    "end": 450
                  },
                  "start": 443,
                  "end": 450
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 453,
                    "end": 454
                  },
                  "start": 453,
                  "end": 454
                },
                "optional": false,
                "readonly": null,
                "start": 435,
                "end": 456
              }
            ],
            "start": 434,
            "end": 457
          },
          "start": 423,
          "end": 457
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 464,
          "end": 469
        },
        "start": 398,
        "end": 469
      },
      "declare": false,
      "start": 370,
      "end": 470
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 477,
        "end": 478
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Hmm",
          "optional": false,
          "typeAnnotation": null,
          "start": 481,
          "end": 484
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 486,
                    "end": 487
                  },
                  "start": 486,
                  "end": 487
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 489,
                    "end": 490
                  },
                  "start": 489,
                  "end": 490
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 492,
                    "end": 493
                  },
                  "start": 492,
                  "end": 493
                }
              ],
              "start": 485,
              "end": 494
            }
          ],
          "start": 484,
          "end": 495
        },
        "start": 481,
        "end": 495
      },
      "declare": false,
      "start": 472,
      "end": 496
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 496
}
```
