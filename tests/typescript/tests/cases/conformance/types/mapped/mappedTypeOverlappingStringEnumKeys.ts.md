__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TerrestrialAnimalTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 38
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "CAT",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 46
            },
            "initializer": {
              "type": "Literal",
              "value": "cat",
              "raw": "\"cat\"",
              "start": 49,
              "end": 54
            },
            "computed": false,
            "start": 43,
            "end": 54
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "DOG",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 61
            },
            "initializer": {
              "type": "Literal",
              "value": "dog",
              "raw": "\"dog\"",
              "start": 64,
              "end": 69
            },
            "computed": false,
            "start": 58,
            "end": 69
          }
        ],
        "start": 39,
        "end": 71
      },
      "const": false,
      "declare": false,
      "start": 11,
      "end": 71
    },
    {
      "type": "EmptyStatement",
      "start": 71,
      "end": 72
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AlienAnimalTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 95
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "CAT",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 103
            },
            "initializer": {
              "type": "Literal",
              "value": "cat",
              "raw": "\"cat\"",
              "start": 106,
              "end": 111
            },
            "computed": false,
            "start": 100,
            "end": 111
          }
        ],
        "start": 96,
        "end": 114
      },
      "const": false,
      "declare": false,
      "start": 74,
      "end": 114
    },
    {
      "type": "EmptyStatement",
      "start": 114,
      "end": 115
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnimalTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 133
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TerrestrialAnimalTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 158
            },
            "typeArguments": null,
            "start": 136,
            "end": 158
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AlienAnimalTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 177
            },
            "typeArguments": null,
            "start": 161,
            "end": 177
          }
        ],
        "start": 136,
        "end": 177
      },
      "declare": false,
      "start": 117,
      "end": 178
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TerrestrialCat",
        "optional": false,
        "typeAnnotation": null,
        "start": 190,
        "end": 204
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 213
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TerrestrialAnimalTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 237
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CAT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 238,
                    "end": 241
                  },
                  "start": 215,
                  "end": 241
                },
                "typeArguments": null,
                "start": 215,
                "end": 241
              },
              "start": 213,
              "end": 241
            },
            "accessibility": null,
            "static": false,
            "start": 209,
            "end": 242
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "address",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 252
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 254,
                "end": 260
              },
              "start": 252,
              "end": 260
            },
            "accessibility": null,
            "static": false,
            "start": 245,
            "end": 261
          }
        ],
        "start": 205,
        "end": 263
      },
      "declare": false,
      "start": 180,
      "end": 263
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AlienCat",
        "optional": false,
        "typeAnnotation": null,
        "start": 275,
        "end": 283
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 292
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AlienAnimalTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 310
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CAT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 314
                  },
                  "start": 294,
                  "end": 314
                },
                "typeArguments": null,
                "start": 294,
                "end": 314
              },
              "start": 292,
              "end": 314
            },
            "accessibility": null,
            "static": false,
            "start": 288,
            "end": 314
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "planet",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 323
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 325,
                "end": 331
              },
              "start": 323,
              "end": 331
            },
            "accessibility": null,
            "static": false,
            "start": 317,
            "end": 332
          }
        ],
        "start": 284,
        "end": 334
      },
      "declare": false,
      "start": 265,
      "end": 334
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cats",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 345
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TerrestrialCat",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 362
            },
            "typeArguments": null,
            "start": 348,
            "end": 362
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AlienCat",
              "optional": false,
              "typeAnnotation": null,
              "start": 365,
              "end": 373
            },
            "typeArguments": null,
            "start": 365,
            "end": 373
          }
        ],
        "start": 348,
        "end": 373
      },
      "declare": false,
      "start": 336,
      "end": 374
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CatMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 381,
        "end": 387
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "V",
          "optional": false,
          "typeAnnotation": null,
          "start": 395,
          "end": 396
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AnimalTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 400,
            "end": 411
          },
          "typeArguments": null,
          "start": 400,
          "end": 411
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Extract",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 421
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Cats",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 422,
                    "end": 426
                  },
                  "typeArguments": null,
                  "start": 422,
                  "end": 426
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 430,
                        "end": 434
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 436,
                            "end": 437
                          },
                          "typeArguments": null,
                          "start": 436,
                          "end": 437
                        },
                        "start": 434,
                        "end": 437
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 430,
                      "end": 437
                    }
                  ],
                  "start": 428,
                  "end": 439
                }
              ],
              "start": 421,
              "end": 440
            },
            "start": 414,
            "end": 440
          },
          "start": 414,
          "end": 442
        },
        "optional": false,
        "readonly": null,
        "start": 390,
        "end": 444
      },
      "declare": false,
      "start": 376,
      "end": 445
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
            "name": "catMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CatMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 461,
                  "end": 467
                },
                "typeArguments": null,
                "start": 461,
                "end": 467
              },
              "start": 459,
              "end": 467
            },
            "start": 453,
            "end": 467
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
                  "name": "cat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 477
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 487,
                            "end": 491
                          },
                          "value": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TerrestrialAnimalTypes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 493,
                              "end": 515
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CAT",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 516,
                              "end": 519
                            },
                            "optional": false,
                            "computed": false,
                            "start": 493,
                            "end": 519
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 487,
                          "end": 519
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "address",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 521,
                            "end": 528
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 530,
                            "end": 532
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 521,
                          "end": 532
                        }
                      ],
                      "start": 485,
                      "end": 534
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 542,
                            "end": 546
                          },
                          "value": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AlienAnimalTypes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 548,
                              "end": 564
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CAT",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 565,
                              "end": 568
                            },
                            "optional": false,
                            "computed": false,
                            "start": 548,
                            "end": 568
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 542,
                          "end": 568
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "planet",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 570,
                            "end": 576
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 578,
                            "end": 580
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 570,
                          "end": 580
                        }
                      ],
                      "start": 540,
                      "end": 582
                    }
                  ],
                  "start": 479,
                  "end": 586
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 474,
                "end": 586
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dog",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 590,
                  "end": 593
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 595,
                    "end": 597
                  },
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNeverKeyword",
                      "start": 601,
                      "end": 606
                    },
                    "start": 601,
                    "end": 608
                  },
                  "start": 595,
                  "end": 608
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 590,
                "end": 608
              }
            ],
            "start": 470,
            "end": 610
          },
          "definite": false,
          "start": 453,
          "end": 610
        }
      ],
      "declare": false,
      "start": 447,
      "end": 611
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 11,
  "end": 611
}
```
