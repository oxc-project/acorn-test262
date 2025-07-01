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
        "name": "StateSchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 43
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
              "name": "states",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 54
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                            "start": 69,
                            "end": 75
                          },
                          "start": 67,
                          "end": 75
                        },
                        "start": 64,
                        "end": 75
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "StateSchema",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 78,
                          "end": 89
                        },
                        "typeArguments": null,
                        "start": 78,
                        "end": 89
                      },
                      "start": 76,
                      "end": 89
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 63,
                    "end": 90
                  }
                ],
                "start": 57,
                "end": 94
              },
              "start": 55,
              "end": 94
            },
            "accessibility": null,
            "static": false,
            "start": 48,
            "end": 95
          }
        ],
        "start": 44,
        "end": 97
      },
      "declare": false,
      "start": 22,
      "end": 97
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StateNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
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
              "name": "TStateSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 135
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StateSchema",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 155
              },
              "typeArguments": null,
              "start": 144,
              "end": 155
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 123,
            "end": 155
          }
        ],
        "start": 122,
        "end": 156
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "schema",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 167
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TStateSchema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 181
                },
                "typeArguments": null,
                "start": 169,
                "end": 181
              },
              "start": 167,
              "end": 181
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 161,
            "end": 182
          }
        ],
        "start": 157,
        "end": 184
      },
      "abstract": false,
      "declare": true,
      "start": 99,
      "end": 184
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StateNodesConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 207
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TStateSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 220
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StateSchema",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 240
              },
              "typeArguments": null,
              "start": 229,
              "end": 240
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 208,
            "end": 240
          }
        ],
        "start": 207,
        "end": 241
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 249,
          "end": 250
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TStateSchema",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 272
              },
              "typeArguments": null,
              "start": 260,
              "end": 272
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "states",
                "raw": "\"states\"",
                "start": 273,
                "end": 281
              },
              "start": 273,
              "end": 281
            },
            "start": 260,
            "end": 282
          },
          "start": 254,
          "end": 282
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "StateNode",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 294
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
                    "name": "NonNullable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 295,
                    "end": 306
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
                            "name": "TStateSchema",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 307,
                            "end": 319
                          },
                          "typeArguments": null,
                          "start": 307,
                          "end": 319
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "states",
                            "raw": "\"states\"",
                            "start": 320,
                            "end": 328
                          },
                          "start": 320,
                          "end": 328
                        },
                        "start": 307,
                        "end": 329
                      }
                    ],
                    "start": 306,
                    "end": 330
                  },
                  "start": 295,
                  "end": 330
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 331,
                    "end": 332
                  },
                  "typeArguments": null,
                  "start": 331,
                  "end": 332
                },
                "start": 295,
                "end": 333
              }
            ],
            "start": 294,
            "end": 334
          },
          "start": 285,
          "end": 334
        },
        "optional": false,
        "readonly": null,
        "start": 244,
        "end": 337
      },
      "declare": false,
      "start": 186,
      "end": 338
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ordering",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 399
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TOrderBy",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 408
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 417,
              "end": 423
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 400,
            "end": 423
          }
        ],
        "start": 399,
        "end": 424
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
              "name": "orderBy",
              "optional": false,
              "typeAnnotation": null,
              "start": 433,
              "end": 440
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TOrderBy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 450
                },
                "typeArguments": null,
                "start": 442,
                "end": 450
              },
              "start": 440,
              "end": 450
            },
            "accessibility": null,
            "static": false,
            "start": 433,
            "end": 450
          }
        ],
        "start": 427,
        "end": 452
      },
      "declare": false,
      "start": 386,
      "end": 452
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Query",
        "optional": false,
        "typeAnnotation": null,
        "start": 459,
        "end": 464
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TOrderBy",
              "optional": false,
              "typeAnnotation": null,
              "start": 465,
              "end": 473
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 482,
              "end": 488
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 465,
            "end": 488
          }
        ],
        "start": 464,
        "end": 489
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "order",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 503
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ordering",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 506,
                  "end": 514
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TOrderBy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 515,
                        "end": 523
                      },
                      "typeArguments": null,
                      "start": 515,
                      "end": 523
                    }
                  ],
                  "start": 514,
                  "end": 524
                },
                "start": 506,
                "end": 524
              },
              "start": 504,
              "end": 524
            },
            "accessibility": null,
            "static": false,
            "start": 498,
            "end": 524
          }
        ],
        "start": 492,
        "end": 526
      },
      "declare": false,
      "start": 454,
      "end": 526
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryHandler",
        "optional": false,
        "typeAnnotation": null,
        "start": 533,
        "end": 545
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQuery",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 557
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Query",
                "optional": false,
                "typeAnnotation": null,
                "start": 566,
                "end": 571
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TOrderBy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 572,
                      "end": 580
                    },
                    "typeArguments": null,
                    "start": 572,
                    "end": 580
                  }
                ],
                "start": 571,
                "end": 581
              },
              "start": 566,
              "end": 581
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 551,
            "end": 581
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TOrderBy",
              "optional": false,
              "typeAnnotation": null,
              "start": 587,
              "end": 595
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 604,
              "end": 610
            },
            "default": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonNullable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 613,
                  "end": 624
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
                          "name": "TQuery",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 625,
                          "end": 631
                        },
                        "typeArguments": null,
                        "start": 625,
                        "end": 631
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "order",
                          "raw": "\"order\"",
                          "start": 632,
                          "end": 639
                        },
                        "start": 632,
                        "end": 639
                      },
                      "start": 625,
                      "end": 640
                    }
                  ],
                  "start": 624,
                  "end": 641
                },
                "start": 613,
                "end": 641
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "orderBy",
                  "raw": "\"orderBy\"",
                  "start": 642,
                  "end": 651
                },
                "start": 642,
                "end": 651
              },
              "start": 613,
              "end": 652
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 587,
            "end": 652
          }
        ],
        "start": 545,
        "end": 654
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [],
        "start": 657,
        "end": 659
      },
      "declare": false,
      "start": 528,
      "end": 659
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 659
}
```
