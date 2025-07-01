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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 73
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
              "start": 80,
              "end": 81
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 83,
                "end": 90
              },
              "start": 81,
              "end": 90
            },
            "accessibility": null,
            "static": false,
            "start": 80,
            "end": 91
          }
        ],
        "start": 76,
        "end": 93
      },
      "declare": false,
      "start": 67,
      "end": 94
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 102
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 110
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 112,
                "end": 118
              },
              "start": 110,
              "end": 118
            },
            "accessibility": null,
            "static": false,
            "start": 109,
            "end": 119
          }
        ],
        "start": 105,
        "end": 121
      },
      "declare": false,
      "start": 96,
      "end": 122
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 130
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 140,
                "end": 146
              },
              "start": 138,
              "end": 146
            },
            "accessibility": null,
            "static": false,
            "start": 137,
            "end": 147
          }
        ],
        "start": 133,
        "end": 149
      },
      "declare": false,
      "start": 124,
      "end": 150
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animations",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 167
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
                    "start": 180,
                    "end": 186
                  },
                  "start": 178,
                  "end": 186
                },
                "start": 175,
                "end": 186
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 191,
                          "end": 196
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 198,
                            "end": 204
                          },
                          "start": 196,
                          "end": 204
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 191,
                        "end": 204
                      }
                    ],
                    "start": 189,
                    "end": 206
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSIntersectionType",
                        "types": [
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
                                  "name": "kind",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 220,
                                  "end": 224
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "a",
                                      "raw": "\"a\"",
                                      "start": 226,
                                      "end": 229
                                    },
                                    "start": 226,
                                    "end": 229
                                  },
                                  "start": 224,
                                  "end": 229
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 220,
                                "end": 230
                              },
                              {
                                "type": "TSMethodSignature",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "func",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 231,
                                  "end": 235
                                },
                                "computed": false,
                                "optional": true,
                                "kind": "method",
                                "typeParameters": null,
                                "params": [],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Partial",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 240,
                                      "end": 247
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "A",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 248,
                                            "end": 249
                                          },
                                          "typeArguments": null,
                                          "start": 248,
                                          "end": 249
                                        }
                                      ],
                                      "start": 247,
                                      "end": 250
                                    },
                                    "start": 240,
                                    "end": 250
                                  },
                                  "start": 238,
                                  "end": 250
                                },
                                "accessibility": null,
                                "readonly": false,
                                "static": false,
                                "start": 231,
                                "end": 250
                              }
                            ],
                            "start": 218,
                            "end": 252
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 255,
                              "end": 256
                            },
                            "typeArguments": null,
                            "start": 255,
                            "end": 256
                          }
                        ],
                        "start": 218,
                        "end": 256
                      },
                      {
                        "type": "TSIntersectionType",
                        "types": [
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
                                  "name": "kind",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 267,
                                  "end": 271
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "b",
                                      "raw": "\"b\"",
                                      "start": 273,
                                      "end": 276
                                    },
                                    "start": 273,
                                    "end": 276
                                  },
                                  "start": 271,
                                  "end": 276
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 267,
                                "end": 277
                              },
                              {
                                "type": "TSMethodSignature",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "func",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 278,
                                  "end": 282
                                },
                                "computed": false,
                                "optional": true,
                                "kind": "method",
                                "typeParameters": null,
                                "params": [],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Partial",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 287,
                                      "end": 294
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "B",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 295,
                                            "end": 296
                                          },
                                          "typeArguments": null,
                                          "start": 295,
                                          "end": 296
                                        }
                                      ],
                                      "start": 294,
                                      "end": 297
                                    },
                                    "start": 287,
                                    "end": 297
                                  },
                                  "start": 285,
                                  "end": 297
                                },
                                "accessibility": null,
                                "readonly": false,
                                "static": false,
                                "start": 278,
                                "end": 297
                              }
                            ],
                            "start": 265,
                            "end": 299
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 302,
                              "end": 303
                            },
                            "typeArguments": null,
                            "start": 302,
                            "end": 303
                          }
                        ],
                        "start": 265,
                        "end": 303
                      },
                      {
                        "type": "TSIntersectionType",
                        "types": [
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
                                  "name": "kind",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 314,
                                  "end": 318
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "c",
                                      "raw": "\"c\"",
                                      "start": 320,
                                      "end": 323
                                    },
                                    "start": 320,
                                    "end": 323
                                  },
                                  "start": 318,
                                  "end": 323
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 314,
                                "end": 324
                              },
                              {
                                "type": "TSMethodSignature",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "func",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 325,
                                  "end": 329
                                },
                                "computed": false,
                                "optional": true,
                                "kind": "method",
                                "typeParameters": null,
                                "params": [],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Partial",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 334,
                                      "end": 341
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "C",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 342,
                                            "end": 343
                                          },
                                          "typeArguments": null,
                                          "start": 342,
                                          "end": 343
                                        }
                                      ],
                                      "start": 341,
                                      "end": 344
                                    },
                                    "start": 334,
                                    "end": 344
                                  },
                                  "start": 332,
                                  "end": 344
                                },
                                "accessibility": null,
                                "readonly": false,
                                "static": false,
                                "start": 325,
                                "end": 344
                              }
                            ],
                            "start": 312,
                            "end": 346
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 349,
                              "end": 350
                            },
                            "typeArguments": null,
                            "start": 349,
                            "end": 350
                          }
                        ],
                        "start": 312,
                        "end": 350
                      }
                    ],
                    "start": 215,
                    "end": 351
                  }
                ],
                "start": 189,
                "end": 355
              },
              "start": 187,
              "end": 355
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 174,
            "end": 356
          }
        ],
        "start": 170,
        "end": 358
      },
      "declare": false,
      "start": 152,
      "end": 359
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StyleParam",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 376
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
              "start": 377,
              "end": 378
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animations",
                "optional": false,
                "typeAnnotation": null,
                "start": 387,
                "end": 397
              },
              "typeArguments": null,
              "start": 387,
              "end": 397
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 377,
            "end": 397
          }
        ],
        "start": 376,
        "end": 398
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 401,
          "end": 407
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
                  "start": 414,
                  "end": 415
                },
                "typeArguments": null,
                "start": 414,
                "end": 415
              },
              "start": 408,
              "end": 415
            },
            {
              "type": "TSStringKeyword",
              "start": 417,
              "end": 423
            }
          ],
          "start": 407,
          "end": 424
        },
        "start": 401,
        "end": 424
      },
      "declare": false,
      "start": 361,
      "end": 425
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnimatedViewProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
        "end": 449
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
              "start": 450,
              "end": 451
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animations",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 470
              },
              "typeArguments": null,
              "start": 460,
              "end": 470
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 450,
            "end": 470
          }
        ],
        "start": 449,
        "end": 471
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
              "name": "style",
              "optional": false,
              "typeAnnotation": null,
              "start": 478,
              "end": 483
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "animationsValues",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "StyleParam",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 504,
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 515,
                                "end": 516
                              },
                              "typeArguments": null,
                              "start": 515,
                              "end": 516
                            }
                          ],
                          "start": 514,
                          "end": 517
                        },
                        "start": 504,
                        "end": 517
                      },
                      "start": 502,
                      "end": 517
                    },
                    "start": 486,
                    "end": 517
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 522,
                    "end": 528
                  },
                  "start": 519,
                  "end": 528
                },
                "start": 485,
                "end": 528
              },
              "start": 483,
              "end": 528
            },
            "accessibility": null,
            "static": false,
            "start": 478,
            "end": 529
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "animations",
              "optional": false,
              "typeAnnotation": null,
              "start": 532,
              "end": 542
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
                  "start": 544,
                  "end": 545
                },
                "typeArguments": null,
                "start": 544,
                "end": 545
              },
              "start": 542,
              "end": 545
            },
            "accessibility": null,
            "static": false,
            "start": 532,
            "end": 546
          }
        ],
        "start": 474,
        "end": 548
      },
      "declare": false,
      "start": 427,
      "end": 549
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
            "name": "Component",
            "optional": false,
            "typeAnnotation": null,
            "start": 557,
            "end": 566
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 570,
                    "end": 571
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Animations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 580,
                      "end": 590
                    },
                    "typeArguments": null,
                    "start": 580,
                    "end": 590
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 570,
                  "end": 590
                }
              ],
              "start": 569,
              "end": 591
            },
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "animations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 596,
                      "end": 606
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "animations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 596,
                      "end": 606
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 596,
                    "end": 606
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "style",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 610,
                      "end": 615
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "style",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 610,
                      "end": 615
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 610,
                    "end": 615
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AnimatedViewProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 620,
                      "end": 637
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 638,
                            "end": 639
                          },
                          "typeArguments": null,
                          "start": 638,
                          "end": 639
                        }
                      ],
                      "start": 637,
                      "end": 640
                    },
                    "start": 620,
                    "end": 640
                  },
                  "start": 618,
                  "end": 640
                },
                "start": 592,
                "end": 640
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXFragment",
              "openingFragment": {
                "type": "JSXOpeningFragment",
                "start": 645,
                "end": 647
              },
              "children": [],
              "closingFragment": {
                "type": "JSXClosingFragment",
                "start": 647,
                "end": 650
              },
              "start": 645,
              "end": 650
            },
            "id": null,
            "generator": false,
            "start": 569,
            "end": 650
          },
          "definite": false,
          "start": 557,
          "end": 650
        }
      ],
      "declare": false,
      "start": 551,
      "end": 651
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Component",
            "start": 654,
            "end": 663
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "animations",
                "start": 666,
                "end": 676
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 684,
                        "end": 688
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
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 698,
                              "end": 702
                            },
                            "value": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 704,
                              "end": 707
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 698,
                            "end": 707
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 715,
                              "end": 720
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 722,
                              "end": 723
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 715,
                            "end": 723
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 731,
                              "end": 732
                            },
                            "value": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 734,
                              "end": 738
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 731,
                            "end": 738
                          }
                        ],
                        "start": 690,
                        "end": 745
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 684,
                      "end": 745
                    }
                  ],
                  "start": 678,
                  "end": 750
                },
                "start": 677,
                "end": 751
              },
              "start": 666,
              "end": 751
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "style",
                "start": 754,
                "end": 759
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "anim",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 762,
                      "end": 766
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 784,
                          "end": 786
                        },
                        "start": 777,
                        "end": 787
                      }
                    ],
                    "start": 771,
                    "end": 791
                  },
                  "id": null,
                  "generator": false,
                  "start": 761,
                  "end": 791
                },
                "start": 760,
                "end": 792
              },
              "start": 754,
              "end": 792
            }
          ],
          "selfClosing": true,
          "start": 653,
          "end": 795
        },
        "children": [],
        "closingElement": null,
        "start": 653,
        "end": 795
      },
      "directive": null,
      "start": 653,
      "end": 796
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Component",
            "start": 798,
            "end": 807
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "animations",
                "start": 810,
                "end": 820
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 828,
                        "end": 832
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
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 842,
                              "end": 846
                            },
                            "value": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 848,
                              "end": 851
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 842,
                            "end": 851
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 859,
                              "end": 864
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 866,
                              "end": 867
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 859,
                            "end": 867
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 875,
                              "end": 876
                            },
                            "value": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 878,
                              "end": 882
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 875,
                            "end": 882
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 890,
                              "end": 894
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "ObjectExpression",
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 926,
                                            "end": 927
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "value": true,
                                            "raw": "true",
                                            "start": 929,
                                            "end": 933
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 926,
                                          "end": 933
                                        }
                                      ],
                                      "start": 914,
                                      "end": 944
                                    },
                                    "start": 907,
                                    "end": 945
                                  }
                                ],
                                "start": 897,
                                "end": 953
                              },
                              "expression": false,
                              "start": 894,
                              "end": 953
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 890,
                            "end": 953
                          }
                        ],
                        "start": 834,
                        "end": 960
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 828,
                      "end": 960
                    }
                  ],
                  "start": 822,
                  "end": 965
                },
                "start": 821,
                "end": 966
              },
              "start": 810,
              "end": 966
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "style",
                "start": 969,
                "end": 974
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "anim",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 977,
                      "end": 981
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 999,
                          "end": 1001
                        },
                        "start": 992,
                        "end": 1002
                      }
                    ],
                    "start": 986,
                    "end": 1006
                  },
                  "id": null,
                  "generator": false,
                  "start": 976,
                  "end": 1006
                },
                "start": 975,
                "end": 1007
              },
              "start": 969,
              "end": 1007
            }
          ],
          "selfClosing": true,
          "start": 797,
          "end": 1010
        },
        "children": [],
        "closingElement": null,
        "start": 797,
        "end": 1010
      },
      "directive": null,
      "start": 797,
      "end": 1011
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Component",
            "start": 1013,
            "end": 1022
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "animations",
                "start": 1025,
                "end": 1035
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1043,
                        "end": 1047
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
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1057,
                              "end": 1061
                            },
                            "value": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 1063,
                              "end": 1066
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1057,
                            "end": 1066
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1074,
                              "end": 1079
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1081,
                              "end": 1082
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1074,
                            "end": 1082
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1090,
                              "end": 1091
                            },
                            "value": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 1093,
                              "end": 1097
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1090,
                            "end": 1097
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1105,
                              "end": 1109
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "ObjectExpression",
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "a",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1146,
                                            "end": 1147
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "value": true,
                                            "raw": "true",
                                            "start": 1149,
                                            "end": 1153
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 1146,
                                          "end": 1153
                                        }
                                      ],
                                      "start": 1134,
                                      "end": 1164
                                    },
                                    "start": 1127,
                                    "end": 1165
                                  }
                                ],
                                "start": 1117,
                                "end": 1173
                              },
                              "id": null,
                              "generator": false,
                              "start": 1111,
                              "end": 1173
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1105,
                            "end": 1173
                          }
                        ],
                        "start": 1049,
                        "end": 1180
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1043,
                      "end": 1180
                    }
                  ],
                  "start": 1037,
                  "end": 1185
                },
                "start": 1036,
                "end": 1186
              },
              "start": 1025,
              "end": 1186
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "style",
                "start": 1189,
                "end": 1194
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "anim",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1197,
                      "end": 1201
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 1219,
                          "end": 1221
                        },
                        "start": 1212,
                        "end": 1222
                      }
                    ],
                    "start": 1206,
                    "end": 1226
                  },
                  "id": null,
                  "generator": false,
                  "start": 1196,
                  "end": 1226
                },
                "start": 1195,
                "end": 1227
              },
              "start": 1189,
              "end": 1227
            }
          ],
          "selfClosing": true,
          "start": 1012,
          "end": 1230
        },
        "children": [],
        "closingElement": null,
        "start": 1012,
        "end": 1230
      },
      "directive": null,
      "start": 1012,
      "end": 1231
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 1265,
        "end": 1270
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
              "start": 1271,
              "end": 1272
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1271,
            "end": 1272
          }
        ],
        "start": 1270,
        "end": 1273
      },
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1278,
              "end": 1279
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                        "start": 1285,
                        "end": 1291
                      },
                      "start": 1283,
                      "end": 1291
                    },
                    "start": 1282,
                    "end": 1291
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1296,
                      "end": 1297
                    },
                    "typeArguments": null,
                    "start": 1296,
                    "end": 1297
                  },
                  "start": 1293,
                  "end": 1297
                },
                "start": 1281,
                "end": 1297
              },
              "start": 1279,
              "end": 1297
            },
            "accessibility": null,
            "static": false,
            "start": 1278,
            "end": 1298
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
              "start": 1301,
              "end": 1302
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1310,
                          "end": 1311
                        },
                        "typeArguments": null,
                        "start": 1310,
                        "end": 1311
                      },
                      "start": 1308,
                      "end": 1311
                    },
                    "start": 1305,
                    "end": 1311
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1316,
                    "end": 1320
                  },
                  "start": 1313,
                  "end": 1320
                },
                "start": 1304,
                "end": 1320
              },
              "start": 1302,
              "end": 1320
            },
            "accessibility": null,
            "static": false,
            "start": 1301,
            "end": 1321
          }
        ],
        "start": 1274,
        "end": 1323
      },
      "declare": false,
      "start": 1255,
      "end": 1323
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1334,
        "end": 1337
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 1338,
              "end": 1339
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1338,
            "end": 1339
          }
        ],
        "start": 1337,
        "end": 1340
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 1348,
                "end": 1353
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1354,
                      "end": 1355
                    },
                    "typeArguments": null,
                    "start": 1354,
                    "end": 1355
                  }
                ],
                "start": 1353,
                "end": 1356
              },
              "start": 1348,
              "end": 1356
            },
            "start": 1346,
            "end": 1356
          },
          "start": 1341,
          "end": 1356
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 1370,
                  "end": 1373
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 1369,
                "end": 1376
              },
              "children": [],
              "closingElement": null,
              "start": 1369,
              "end": 1376
            },
            "start": 1362,
            "end": 1377
          }
        ],
        "start": 1358,
        "end": 1379
      },
      "expression": false,
      "start": 1325,
      "end": 1379
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Foo",
            "start": 1382,
            "end": 1385
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "a",
                "start": 1388,
                "end": 1389
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1397,
                    "end": 1399
                  },
                  "id": null,
                  "generator": false,
                  "start": 1391,
                  "end": 1399
                },
                "start": 1390,
                "end": 1400
              },
              "start": 1388,
              "end": 1400
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "b",
                "start": 1403,
                "end": 1404
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1407,
                      "end": 1410
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arg",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1417,
                              "end": 1420
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toString",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1421,
                              "end": 1429
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1417,
                            "end": 1429
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1417,
                          "end": 1431
                        },
                        "directive": null,
                        "start": 1417,
                        "end": 1432
                      }
                    ],
                    "start": 1415,
                    "end": 1434
                  },
                  "id": null,
                  "generator": false,
                  "start": 1406,
                  "end": 1434
                },
                "start": 1405,
                "end": 1435
              },
              "start": 1403,
              "end": 1435
            }
          ],
          "selfClosing": true,
          "start": 1381,
          "end": 1438
        },
        "children": [],
        "closingElement": null,
        "start": 1381,
        "end": 1438
      },
      "directive": null,
      "start": 1381,
      "end": 1439
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Foo",
            "start": 1442,
            "end": 1445
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "a",
                "start": 1448,
                "end": 1449
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1452,
                      "end": 1453
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1458,
                    "end": 1460
                  },
                  "id": null,
                  "generator": false,
                  "start": 1451,
                  "end": 1460
                },
                "start": 1450,
                "end": 1461
              },
              "start": 1448,
              "end": 1461
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "b",
                "start": 1464,
                "end": 1465
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1468,
                      "end": 1471
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arg",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1478,
                              "end": 1481
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toString",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1482,
                              "end": 1490
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1478,
                            "end": 1490
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1478,
                          "end": 1492
                        },
                        "directive": null,
                        "start": 1478,
                        "end": 1493
                      }
                    ],
                    "start": 1476,
                    "end": 1495
                  },
                  "id": null,
                  "generator": false,
                  "start": 1467,
                  "end": 1495
                },
                "start": 1466,
                "end": 1496
              },
              "start": 1464,
              "end": 1496
            }
          ],
          "selfClosing": true,
          "start": 1441,
          "end": 1499
        },
        "children": [],
        "closingElement": null,
        "start": 1441,
        "end": 1499
      },
      "directive": null,
      "start": 1441,
      "end": 1500
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Foo",
            "start": 1503,
            "end": 1506
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1515,
                      "end": 1516
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1519,
                          "end": 1520
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 1525,
                        "end": 1527
                      },
                      "id": null,
                      "generator": false,
                      "start": 1518,
                      "end": 1527
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1515,
                    "end": 1527
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1531,
                      "end": 1532
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1535,
                          "end": 1538
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1545,
                                  "end": 1548
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1549,
                                  "end": 1557
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1545,
                                "end": 1557
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1545,
                              "end": 1559
                            },
                            "directive": null,
                            "start": 1545,
                            "end": 1560
                          }
                        ],
                        "start": 1543,
                        "end": 1562
                      },
                      "id": null,
                      "generator": false,
                      "start": 1534,
                      "end": 1562
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1531,
                    "end": 1562
                  }
                ],
                "start": 1511,
                "end": 1565
              },
              "start": 1507,
              "end": 1566
            }
          ],
          "selfClosing": true,
          "start": 1502,
          "end": 1569
        },
        "children": [],
        "closingElement": null,
        "start": 1502,
        "end": 1569
      },
      "directive": null,
      "start": 1502,
      "end": 1570
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 67,
  "end": 1570
}
```
