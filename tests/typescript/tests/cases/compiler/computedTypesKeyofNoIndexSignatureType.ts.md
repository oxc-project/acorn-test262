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
        "name": "Compute",
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
              "name": "A",
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
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 33
                },
                "typeArguments": null,
                "start": 32,
                "end": 33
              },
              "start": 26,
              "end": 33
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Compute",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 43
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
                        "start": 44,
                        "end": 45
                      },
                      "typeArguments": null,
                      "start": 44,
                      "end": 45
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 46,
                        "end": 47
                      },
                      "typeArguments": null,
                      "start": 46,
                      "end": 47
                    },
                    "start": 44,
                    "end": 48
                  }
                ],
                "start": 43,
                "end": 49
              },
              "start": 36,
              "end": 49
            },
            "optional": false,
            "readonly": null,
            "start": 18,
            "end": 52
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 55,
            "end": 57
          }
        ],
        "start": 18,
        "end": 57
      },
      "declare": false,
      "start": 0,
      "end": 58
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EqualsTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 75
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
              "start": 76,
              "end": 77
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 76,
            "end": 77
          }
        ],
        "start": 75,
        "end": 78
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                "start": 82,
                "end": 83
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 82,
              "end": 83
            }
          ],
          "start": 81,
          "end": 84
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 91
              },
              "typeArguments": null,
              "start": 90,
              "end": 91
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 101
              },
              "typeArguments": null,
              "start": 100,
              "end": 101
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 104,
                "end": 105
              },
              "start": 104,
              "end": 105
            },
            "falseType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 108,
                "end": 109
              },
              "start": 108,
              "end": 109
            },
            "start": 90,
            "end": 109
          },
          "start": 87,
          "end": 109
        },
        "start": 81,
        "end": 109
      },
      "declare": false,
      "start": 60,
      "end": 110
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Equals",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 122
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A1",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 125
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 123,
            "end": 125
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 129
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 127,
            "end": 129
          }
        ],
        "start": 122,
        "end": 130
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "EqualsTest",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 143
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 144,
                  "end": 146
                },
                "typeArguments": null,
                "start": 144,
                "end": 146
              }
            ],
            "start": 143,
            "end": 147
          },
          "start": 133,
          "end": 147
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "EqualsTest",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 166
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 169
                },
                "typeArguments": null,
                "start": 167,
                "end": 169
              }
            ],
            "start": 166,
            "end": 170
          },
          "start": 156,
          "end": 170
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 173,
            "end": 174
          },
          "start": 173,
          "end": 174
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 177,
            "end": 178
          },
          "start": 177,
          "end": 178
        },
        "start": 133,
        "end": 178
      },
      "declare": false,
      "start": 111,
      "end": 179
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Filter",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 192
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
              "start": 193,
              "end": 194
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 193,
            "end": 194
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 197
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 196,
            "end": 197
          }
        ],
        "start": 192,
        "end": 198
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Equals",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 207
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
                  "start": 208,
                  "end": 209
                },
                "typeArguments": null,
                "start": 208,
                "end": 209
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 212
                },
                "typeArguments": null,
                "start": 211,
                "end": 212
              }
            ],
            "start": 207,
            "end": 213
          },
          "start": 201,
          "end": 213
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 222,
            "end": 223
          },
          "start": 222,
          "end": 223
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 226,
          "end": 231
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 235
          },
          "typeArguments": null,
          "start": 234,
          "end": 235
        },
        "start": 201,
        "end": 235
      },
      "declare": false,
      "start": 181,
      "end": 236
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OmitIndex",
        "optional": false,
        "typeAnnotation": null,
        "start": 243,
        "end": 252
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
              "start": 253,
              "end": 254
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 253,
            "end": 254
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 257
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 266,
                  "end": 272
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 275,
                  "end": 281
                }
              ],
              "start": 266,
              "end": 281
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 256,
            "end": 281
          }
        ],
        "start": 252,
        "end": 282
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 291
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
              "start": 301,
              "end": 302
            },
            "typeArguments": null,
            "start": 301,
            "end": 302
          },
          "start": 295,
          "end": 302
        },
        "nameType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Filter",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 312
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
                  "start": 313,
                  "end": 314
                },
                "typeArguments": null,
                "start": 313,
                "end": 314
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 317
                },
                "typeArguments": null,
                "start": 316,
                "end": 317
              }
            ],
            "start": 312,
            "end": 318
          },
          "start": 306,
          "end": 318
        },
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
              "start": 321,
              "end": 322
            },
            "typeArguments": null,
            "start": 321,
            "end": 322
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 324
            },
            "typeArguments": null,
            "start": 323,
            "end": 324
          },
          "start": 321,
          "end": 325
        },
        "optional": false,
        "readonly": null,
        "start": 285,
        "end": 328
      },
      "declare": false,
      "start": 238,
      "end": 329
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IndexObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 336,
        "end": 347
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 358,
                    "end": 364
                  },
                  "start": 356,
                  "end": 364
                },
                "start": 353,
                "end": 364
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 367,
                "end": 374
              },
              "start": 365,
              "end": 374
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 352,
            "end": 375
          }
        ],
        "start": 350,
        "end": 377
      },
      "declare": false,
      "start": 331,
      "end": 378
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 384,
        "end": 390
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 398
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 400,
                  "end": 407
                },
                "start": 400,
                "end": 407
              },
              "start": 398,
              "end": 407
            },
            "accessibility": null,
            "static": false,
            "start": 395,
            "end": 408
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 412
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "world",
                  "raw": "\"world\"",
                  "start": 414,
                  "end": 421
                },
                "start": 414,
                "end": 421
              },
              "start": 412,
              "end": 421
            },
            "accessibility": null,
            "static": false,
            "start": 409,
            "end": 422
          }
        ],
        "start": 393,
        "end": 424
      },
      "declare": false,
      "start": 379,
      "end": 425
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithIndex",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
        "end": 441
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Compute",
          "optional": false,
          "typeAnnotation": null,
          "start": 444,
          "end": 451
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FooBar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 452,
                    "end": 458
                  },
                  "typeArguments": null,
                  "start": 452,
                  "end": 458
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IndexObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 461,
                    "end": 472
                  },
                  "typeArguments": null,
                  "start": 461,
                  "end": 472
                }
              ],
              "start": 452,
              "end": 472
            }
          ],
          "start": 451,
          "end": 473
        },
        "start": 444,
        "end": 473
      },
      "declare": false,
      "start": 427,
      "end": 474
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithoutIndex",
        "optional": false,
        "typeAnnotation": null,
        "start": 541,
        "end": 553
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "OmitIndex",
          "optional": false,
          "typeAnnotation": null,
          "start": 556,
          "end": 565
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "WithIndex",
                "optional": false,
                "typeAnnotation": null,
                "start": 566,
                "end": 575
              },
              "typeArguments": null,
              "start": 566,
              "end": 575
            },
            {
              "type": "TSStringKeyword",
              "start": 577,
              "end": 583
            }
          ],
          "start": 565,
          "end": 584
        },
        "start": 556,
        "end": 584
      },
      "declare": false,
      "start": 536,
      "end": 585
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooBarKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 651,
        "end": 660
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "FooBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 675
          },
          "typeArguments": null,
          "start": 669,
          "end": 675
        },
        "start": 663,
        "end": 675
      },
      "declare": false,
      "start": 646,
      "end": 676
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithIndexKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 720,
        "end": 732
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "WithIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 741,
            "end": 750
          },
          "typeArguments": null,
          "start": 741,
          "end": 750
        },
        "start": 735,
        "end": 750
      },
      "declare": false,
      "start": 715,
      "end": 751
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithoutIndexKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 804,
        "end": 819
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "WithoutIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 828,
            "end": 840
          },
          "typeArguments": null,
          "start": 828,
          "end": 840
        },
        "start": 822,
        "end": 840
      },
      "declare": false,
      "start": 799,
      "end": 841
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 888
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
    "value": "Compute",
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
    "value": "A",
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
    "type": "Punctuator",
    "value": "[",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 23,
    "end": 25,
    "range": [
      23,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 26,
    "end": 31,
    "range": [
      26,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "Compute",
    "start": 36,
    "end": 43,
    "range": [
      36,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 60,
    "end": 64,
    "range": [
      60,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "EqualsTest",
    "start": 65,
    "end": 75,
    "range": [
      65,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 87,
    "end": 89,
    "range": [
      87,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 92,
    "end": 99,
    "range": [
      92,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 111,
    "end": 115,
    "range": [
      111,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "Equals",
    "start": 116,
    "end": 122,
    "range": [
      116,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 123,
    "end": 125,
    "range": [
      123,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 127,
    "end": 129,
    "range": [
      127,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "EqualsTest",
    "start": 133,
    "end": 143,
    "range": [
      133,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 144,
    "end": 146,
    "range": [
      144,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 148,
    "end": 155,
    "range": [
      148,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "EqualsTest",
    "start": 156,
    "end": 166,
    "range": [
      156,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 167,
    "end": 169,
    "range": [
      167,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 181,
    "end": 185,
    "range": [
      181,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "Filter",
    "start": 186,
    "end": 192,
    "range": [
      186,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "Equals",
    "start": 201,
    "end": 207,
    "range": [
      201,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 214,
    "end": 221,
    "range": [
      214,
      221
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 226,
    "end": 231,
    "range": [
      226,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 238,
    "end": 242,
    "range": [
      238,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "OmitIndex",
    "start": 243,
    "end": 252,
    "range": [
      243,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "I",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 258,
    "end": 265,
    "range": [
      258,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 266,
    "end": 272,
    "range": [
      266,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 275,
    "end": 281,
    "range": [
      275,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 292,
    "end": 294,
    "range": [
      292,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 295,
    "end": 300,
    "range": [
      295,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 303,
    "end": 305,
    "range": [
      303,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "Filter",
    "start": 306,
    "end": 312,
    "range": [
      306,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 331,
    "end": 335,
    "range": [
      331,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "IndexObject",
    "start": 336,
    "end": 347,
    "range": [
      336,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 353,
    "end": 356,
    "range": [
      353,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 358,
    "end": 364,
    "range": [
      358,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 367,
    "end": 374,
    "range": [
      367,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 379,
    "end": 383,
    "range": [
      379,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "FooBar",
    "start": 384,
    "end": 390,
    "range": [
      384,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 395,
    "end": 398,
    "range": [
      395,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 400,
    "end": 407,
    "range": [
      400,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 409,
    "end": 412,
    "range": [
      409,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 414,
    "end": 421,
    "range": [
      414,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 427,
    "end": 431,
    "range": [
      427,
      431
    ]
  },
  {
    "type": "Identifier",
    "value": "WithIndex",
    "start": 432,
    "end": 441,
    "range": [
      432,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "Compute",
    "start": 444,
    "end": 451,
    "range": [
      444,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "FooBar",
    "start": 452,
    "end": 458,
    "range": [
      452,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "IndexObject",
    "start": 461,
    "end": 472,
    "range": [
      461,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 536,
    "end": 540,
    "range": [
      536,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "WithoutIndex",
    "start": 541,
    "end": 553,
    "range": [
      541,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "OmitIndex",
    "start": 556,
    "end": 565,
    "range": [
      556,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "WithIndex",
    "start": 566,
    "end": 575,
    "range": [
      566,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 577,
    "end": 583,
    "range": [
      577,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 646,
    "end": 650,
    "range": [
      646,
      650
    ]
  },
  {
    "type": "Identifier",
    "value": "FooBarKey",
    "start": 651,
    "end": 660,
    "range": [
      651,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 663,
    "end": 668,
    "range": [
      663,
      668
    ]
  },
  {
    "type": "Identifier",
    "value": "FooBar",
    "start": 669,
    "end": 675,
    "range": [
      669,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 715,
    "end": 719,
    "range": [
      715,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "WithIndexKey",
    "start": 720,
    "end": 732,
    "range": [
      720,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 735,
    "end": 740,
    "range": [
      735,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "WithIndex",
    "start": 741,
    "end": 750,
    "range": [
      741,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 799,
    "end": 803,
    "range": [
      799,
      803
    ]
  },
  {
    "type": "Identifier",
    "value": "WithoutIndexKey",
    "start": 804,
    "end": 819,
    "range": [
      804,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 822,
    "end": 827,
    "range": [
      822,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "WithoutIndex",
    "start": 828,
    "end": 840,
    "range": [
      828,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  }
]
```
