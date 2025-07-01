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
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "name": "x",
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
            "end": 23
          }
        ],
        "start": 12,
        "end": 25
      },
      "declare": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 37
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 41
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "accessibility": null,
            "static": false,
            "start": 40,
            "end": 49
          }
        ],
        "start": 38,
        "end": 51
      },
      "declare": false,
      "start": 26,
      "end": 51
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 70,
                "end": 77
              },
              "start": 68,
              "end": 77
            },
            "accessibility": null,
            "static": false,
            "start": 66,
            "end": 77
          }
        ],
        "start": 64,
        "end": 79
      },
      "declare": false,
      "start": 52,
      "end": 79
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "XY",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 88
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 92
            },
            "typeArguments": null,
            "start": 91,
            "end": 92
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 96
            },
            "typeArguments": null,
            "start": 95,
            "end": 96
          }
        ],
        "start": 91,
        "end": 96
      },
      "declare": false,
      "start": 81,
      "end": 97
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
            "name": "xy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "XY",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 110
                },
                "typeArguments": null,
                "start": 108,
                "end": 110
              },
              "start": 106,
              "end": 110
            },
            "start": 104,
            "end": 110
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 115
                },
                "value": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 117,
                  "end": 120
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 114,
                "end": 120
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 123
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 125,
                  "end": 127
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 122,
                "end": 127
              }
            ],
            "start": 113,
            "end": 128
          },
          "definite": false,
          "start": 104,
          "end": 128
        }
      ],
      "declare": false,
      "start": 98,
      "end": 129
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 142
                },
                "typeArguments": null,
                "start": 141,
                "end": 142
              },
              "start": 139,
              "end": 142
            },
            "start": 137,
            "end": 142
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "xy",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 147
          },
          "definite": false,
          "start": 137,
          "end": 147
        }
      ],
      "declare": false,
      "start": 131,
      "end": 148
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ViewStyle",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 210
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
              "name": "view",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 221
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 223,
                "end": 229
              },
              "start": 221,
              "end": 229
            },
            "accessibility": null,
            "static": false,
            "start": 217,
            "end": 229
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "styleMedia",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 244
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 246,
                "end": 252
              },
              "start": 244,
              "end": 252
            },
            "accessibility": null,
            "static": false,
            "start": 234,
            "end": 252
          }
        ],
        "start": 211,
        "end": 254
      },
      "declare": false,
      "start": 191,
      "end": 254
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Brand",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 265
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
              "start": 266,
              "end": 267
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 266,
            "end": 267
          }
        ],
        "start": 265,
        "end": 268
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 271,
            "end": 277
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
                  "name": "__brand",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 289
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
                      "start": 291,
                      "end": 292
                    },
                    "typeArguments": null,
                    "start": 291,
                    "end": 292
                  },
                  "start": 289,
                  "end": 292
                },
                "accessibility": null,
                "static": false,
                "start": 282,
                "end": 292
              }
            ],
            "start": 280,
            "end": 294
          }
        ],
        "start": 271,
        "end": 294
      },
      "declare": false,
      "start": 255,
      "end": 294
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "create",
        "optional": false,
        "typeAnnotation": null,
        "start": 312,
        "end": 318
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 320
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 335,
                          "end": 341
                        },
                        "start": 333,
                        "end": 341
                      },
                      "start": 332,
                      "end": 341
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ViewStyle",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 344,
                        "end": 353
                      },
                      "typeArguments": null,
                      "start": 344,
                      "end": 353
                    },
                    "start": 342,
                    "end": 353
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 331,
                  "end": 353
                }
              ],
              "start": 329,
              "end": 355
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 319,
            "end": 355
          }
        ],
        "start": 318,
        "end": 356
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "styles",
          "optional": false,
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
                "start": 365,
                "end": 366
              },
              "typeArguments": null,
              "start": 365,
              "end": 366
            },
            "start": 363,
            "end": 366
          },
          "start": 357,
          "end": 366
        }
      ],
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
            "start": 372,
            "end": 373
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
                "start": 383,
                "end": 384
              },
              "typeArguments": null,
              "start": 383,
              "end": 384
            },
            "start": 377,
            "end": 384
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Brand",
              "optional": false,
              "typeAnnotation": null,
              "start": 387,
              "end": 392
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
                      "start": 393,
                      "end": 394
                    },
                    "typeArguments": null,
                    "start": 393,
                    "end": 394
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 395,
                      "end": 396
                    },
                    "typeArguments": null,
                    "start": 395,
                    "end": 396
                  },
                  "start": 393,
                  "end": 397
                }
              ],
              "start": 392,
              "end": 398
            },
            "start": 387,
            "end": 398
          },
          "optional": false,
          "readonly": null,
          "start": 369,
          "end": 400
        },
        "start": 367,
        "end": 400
      },
      "body": null,
      "expression": false,
      "start": 295,
      "end": 401
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
            "name": "wrapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 415
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 424
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
                      "name": "first",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 427,
                      "end": 432
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "view",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 436,
                            "end": 440
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 442,
                            "end": 443
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 436,
                          "end": 443
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "styleMedia",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 445,
                            "end": 455
                          },
                          "value": {
                            "type": "Literal",
                            "value": "???",
                            "raw": "\"???\"",
                            "start": 457,
                            "end": 462
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 445,
                          "end": 462
                        }
                      ],
                      "start": 434,
                      "end": 464
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 427,
                    "end": 464
                  }
                ],
                "start": 425,
                "end": 466
              }
            ],
            "optional": false,
            "start": 418,
            "end": 467
          },
          "definite": false,
          "start": 408,
          "end": 467
        }
      ],
      "declare": false,
      "start": 402,
      "end": 468
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
            "name": "vs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ViewStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 488
                },
                "typeArguments": null,
                "start": 479,
                "end": 488
              },
              "start": 477,
              "end": 488
            },
            "start": 475,
            "end": 488
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "wrapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 498
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null,
              "start": 499,
              "end": 504
            },
            "optional": false,
            "computed": false,
            "start": 491,
            "end": 504
          },
          "definite": false,
          "start": 475,
          "end": 504
        }
      ],
      "declare": false,
      "start": 469,
      "end": 504
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 540
}
```
