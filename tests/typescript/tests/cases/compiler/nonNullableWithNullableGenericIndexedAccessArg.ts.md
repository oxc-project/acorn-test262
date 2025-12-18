__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 22,
    "end": 31,
    "range": [
      22,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "StateSchema",
    "start": 32,
    "end": 43,
    "range": [
      32,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "states",
    "start": 48,
    "end": 54,
    "range": [
      48,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 64,
    "end": 67,
    "range": [
      64,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 69,
    "end": 75,
    "range": [
      69,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "StateSchema",
    "start": 78,
    "end": 89,
    "range": [
      78,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 99,
    "end": 106,
    "range": [
      99,
      106
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 107,
    "end": 112,
    "range": [
      107,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "StateNode",
    "start": 113,
    "end": 122,
    "range": [
      113,
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
    "value": "TStateSchema",
    "start": 123,
    "end": 135,
    "range": [
      123,
      135
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 136,
    "end": 143,
    "range": [
      136,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "StateSchema",
    "start": 144,
    "end": 155,
    "range": [
      144,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 161,
    "end": 167,
    "range": [
      161,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "TStateSchema",
    "start": 169,
    "end": 181,
    "range": [
      169,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 186,
    "end": 190,
    "range": [
      186,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "StateNodesConfig",
    "start": 191,
    "end": 207,
    "range": [
      191,
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
    "value": "TStateSchema",
    "start": 208,
    "end": 220,
    "range": [
      208,
      220
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 221,
    "end": 228,
    "range": [
      221,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "StateSchema",
    "start": 229,
    "end": 240,
    "range": [
      229,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 251,
    "end": 253,
    "range": [
      251,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 254,
    "end": 259,
    "range": [
      254,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "TStateSchema",
    "start": 260,
    "end": 272,
    "range": [
      260,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "String",
    "value": "\"states\"",
    "start": 273,
    "end": 281,
    "range": [
      273,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "StateNode",
    "start": 285,
    "end": 294,
    "range": [
      285,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 295,
    "end": 306,
    "range": [
      295,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "TStateSchema",
    "start": 307,
    "end": 319,
    "range": [
      307,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "String",
    "value": "\"states\"",
    "start": 320,
    "end": 328,
    "range": [
      320,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 386,
    "end": 390,
    "range": [
      386,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "Ordering",
    "start": 391,
    "end": 399,
    "range": [
      391,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "TOrderBy",
    "start": 400,
    "end": 408,
    "range": [
      400,
      408
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 409,
    "end": 416,
    "range": [
      409,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 417,
    "end": 423,
    "range": [
      417,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "orderBy",
    "start": 433,
    "end": 440,
    "range": [
      433,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "TOrderBy",
    "start": 442,
    "end": 450,
    "range": [
      442,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 454,
    "end": 458,
    "range": [
      454,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "Query",
    "start": 459,
    "end": 464,
    "range": [
      459,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "TOrderBy",
    "start": 465,
    "end": 473,
    "range": [
      465,
      473
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 474,
    "end": 481,
    "range": [
      474,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 482,
    "end": 488,
    "range": [
      482,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "order",
    "start": 498,
    "end": 503,
    "range": [
      498,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "Ordering",
    "start": 506,
    "end": 514,
    "range": [
      506,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "TOrderBy",
    "start": 515,
    "end": 523,
    "range": [
      515,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 528,
    "end": 532,
    "range": [
      528,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "QueryHandler",
    "start": 533,
    "end": 545,
    "range": [
      533,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "TQuery",
    "start": 551,
    "end": 557,
    "range": [
      551,
      557
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 558,
    "end": 565,
    "range": [
      558,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "Query",
    "start": 566,
    "end": 571,
    "range": [
      566,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Identifier",
    "value": "TOrderBy",
    "start": 572,
    "end": 580,
    "range": [
      572,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "TOrderBy",
    "start": 587,
    "end": 595,
    "range": [
      587,
      595
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 596,
    "end": 603,
    "range": [
      596,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 604,
    "end": 610,
    "range": [
      604,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 613,
    "end": 624,
    "range": [
      613,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "TQuery",
    "start": 625,
    "end": 631,
    "range": [
      625,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "String",
    "value": "\"order\"",
    "start": 632,
    "end": 639,
    "range": [
      632,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "String",
    "value": "\"orderBy\"",
    "start": 642,
    "end": 651,
    "range": [
      642,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  }
]
```
