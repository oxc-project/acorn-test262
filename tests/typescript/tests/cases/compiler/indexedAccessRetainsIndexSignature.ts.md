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
        "name": "Diff",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
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
              "start": 10,
              "end": 11
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 26,
                "end": 29
              },
              "start": 20,
              "end": 29
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 29
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 32
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 47,
                "end": 50
              },
              "start": 41,
              "end": 50
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 31,
            "end": 50
          }
        ],
        "start": 9,
        "end": 51
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 63
              },
              "constraint": {
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
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 72
                },
                "typeArguments": null,
                "start": 71,
                "end": 72
              },
              "optional": false,
              "readonly": null,
              "start": 59,
              "end": 74
            },
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 81
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 86
                },
                "typeArguments": null,
                "start": 85,
                "end": 86
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 89,
                "end": 94
              },
              "optional": false,
              "readonly": null,
              "start": 77,
              "end": 96
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 105,
                          "end": 111
                        },
                        "start": 103,
                        "end": 111
                      },
                      "start": 102,
                      "end": 111
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 114,
                      "end": 119
                    },
                    "start": 112,
                    "end": 119
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 101,
                  "end": 119
                }
              ],
              "start": 99,
              "end": 121
            }
          ],
          "start": 59,
          "end": 121
        },
        "indexType": {
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
        "start": 58,
        "end": 125
      },
      "declare": false,
      "start": 0,
      "end": 125
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Omit",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 135
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 137
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 136,
            "end": 137
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 140
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 156
                },
                "typeArguments": null,
                "start": 155,
                "end": 156
              },
              "start": 149,
              "end": 156
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 139,
            "end": 156
          }
        ],
        "start": 135,
        "end": 157
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 160,
          "end": 164
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 166
              },
              "typeArguments": null,
              "start": 165,
              "end": 166
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Diff",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 172
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 179,
                        "end": 180
                      },
                      "typeArguments": null,
                      "start": 179,
                      "end": 180
                    },
                    "start": 173,
                    "end": 180
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 182,
                      "end": 183
                    },
                    "typeArguments": null,
                    "start": 182,
                    "end": 183
                  }
                ],
                "start": 172,
                "end": 184
              },
              "start": 168,
              "end": 184
            }
          ],
          "start": 164,
          "end": 185
        },
        "start": 160,
        "end": 185
      },
      "declare": false,
      "start": 126,
      "end": 185
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Omit1",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 196
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 198
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 197,
            "end": 198
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 201
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 217
                },
                "typeArguments": null,
                "start": 216,
                "end": 217
              },
              "start": 210,
              "end": 217
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 200,
            "end": 217
          }
        ],
        "start": 196,
        "end": 218
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 225
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 227
              },
              "typeArguments": null,
              "start": 226,
              "end": 227
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Diff",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 233
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 240,
                        "end": 241
                      },
                      "typeArguments": null,
                      "start": 240,
                      "end": 241
                    },
                    "start": 234,
                    "end": 241
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 243,
                      "end": 244
                    },
                    "typeArguments": null,
                    "start": 243,
                    "end": 244
                  }
                ],
                "start": 233,
                "end": 245
              },
              "start": 229,
              "end": 245
            }
          ],
          "start": 225,
          "end": 246
        },
        "start": 221,
        "end": 246
      },
      "declare": false,
      "start": 186,
      "end": 247
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Omit2",
        "optional": false,
        "typeAnnotation": null,
        "start": 285,
        "end": 290
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
              "start": 291,
              "end": 292
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 291,
            "end": 292
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 294,
              "end": 295
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
                  "start": 310,
                  "end": 311
                },
                "typeArguments": null,
                "start": 310,
                "end": 311
              },
              "start": 304,
              "end": 311
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 294,
            "end": 311
          }
        ],
        "start": 290,
        "end": 312
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 317,
          "end": 318
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Diff",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 326
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
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
                    "start": 333,
                    "end": 334
                  },
                  "typeArguments": null,
                  "start": 333,
                  "end": 334
                },
                "start": 327,
                "end": 334
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 337
                },
                "typeArguments": null,
                "start": 336,
                "end": 337
              }
            ],
            "start": 326,
            "end": 338
          },
          "start": 322,
          "end": 338
        },
        "nameType": null,
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
              "start": 341,
              "end": 342
            },
            "typeArguments": null,
            "start": 341,
            "end": 342
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 344
            },
            "typeArguments": null,
            "start": 343,
            "end": 344
          },
          "start": 341,
          "end": 345
        },
        "optional": false,
        "readonly": null,
        "start": 315,
        "end": 346
      },
      "declare": false,
      "start": 280,
      "end": 347
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O",
        "optional": false,
        "typeAnnotation": null,
        "start": 354,
        "end": 355
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Omit",
          "optional": false,
          "typeAnnotation": null,
          "start": 358,
          "end": 362
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 366
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 368,
                      "end": 374
                    },
                    "start": 366,
                    "end": 374
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 365,
                  "end": 375
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
                    "start": 376,
                    "end": 377
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 379,
                      "end": 385
                    },
                    "start": 377,
                    "end": 385
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 376,
                  "end": 385
                }
              ],
              "start": 363,
              "end": 387
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 389,
                "end": 392
              },
              "start": 389,
              "end": 392
            }
          ],
          "start": 362,
          "end": 393
        },
        "start": 358,
        "end": 393
      },
      "declare": false,
      "start": 349,
      "end": 393
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
              "name": "o",
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
                    "start": 410,
                    "end": 411
                  },
                  "typeArguments": null,
                  "start": 410,
                  "end": 411
                },
                "start": 408,
                "end": 411
              },
              "start": 407,
              "end": 411
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 416,
                    "end": 417
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 419,
                    "end": 421
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 416,
                  "end": 421
                }
              ],
              "start": 414,
              "end": 423
            },
            "definite": false,
            "start": 407,
            "end": 423
          }
        ],
        "declare": false,
        "start": 401,
        "end": 423
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 394,
      "end": 423
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 423
}
```
