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
        "name": "ABC",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "initializer": null,
            "computed": false,
            "start": 11,
            "end": 12
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "initializer": null,
            "computed": false,
            "start": 14,
            "end": 15
          }
        ],
        "start": 9,
        "end": 17
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 24,
        "end": 27
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
              "start": 28,
              "end": 29
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ABC",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 41
              },
              "typeArguments": null,
              "start": 38,
              "end": 41
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 28,
            "end": 41
          }
        ],
        "start": 27,
        "end": 42
      },
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 47,
                  "end": 48
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
                      "start": 50,
                      "end": 51
                    },
                    "typeArguments": null,
                    "start": 50,
                    "end": 51
                  },
                  "start": 48,
                  "end": 51
                },
                "accessibility": null,
                "static": false,
                "start": 47,
                "end": 52
              }
            ],
            "start": 45,
            "end": 54
          },
          {
            "type": "TSUnionType",
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
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 68
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
                            "name": "ABC",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 70,
                            "end": 73
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 74,
                            "end": 75
                          },
                          "start": 70,
                          "end": 75
                        },
                        "typeArguments": null,
                        "start": 70,
                        "end": 75
                      },
                      "start": 68,
                      "end": 75
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 67,
                    "end": 76
                  },
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
                      "start": 81,
                      "end": 82
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 84,
                        "end": 90
                      },
                      "start": 82,
                      "end": 90
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 81,
                    "end": 91
                  }
                ],
                "start": 61,
                "end": 95
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
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 104,
                      "end": 105
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
                            "name": "ABC",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 107,
                            "end": 110
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 111,
                            "end": 112
                          },
                          "start": 107,
                          "end": 112
                        },
                        "typeArguments": null,
                        "start": 107,
                        "end": 112
                      },
                      "start": 105,
                      "end": 112
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 104,
                    "end": 113
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
                      "start": 118,
                      "end": 119
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      },
                      "start": 119,
                      "end": 127
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 118,
                    "end": 128
                  }
                ],
                "start": 98,
                "end": 132
              }
            ],
            "start": 61,
            "end": 132
          }
        ],
        "start": 45,
        "end": 134
      },
      "declare": false,
      "start": 19,
      "end": 134
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Gen2",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 224
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
              "start": 225,
              "end": 226
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ABC",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 238
              },
              "typeArguments": null,
              "start": 235,
              "end": 238
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 225,
            "end": 238
          }
        ],
        "start": 224,
        "end": 239
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "Property",
          "optional": false,
          "typeAnnotation": null,
          "start": 247,
          "end": 255
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Gen",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 268
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
                    "start": 269,
                    "end": 270
                  },
                  "typeArguments": null,
                  "start": 269,
                  "end": 270
                }
              ],
              "start": 268,
              "end": 271
            },
            "start": 265,
            "end": 271
          },
          "start": 259,
          "end": 271
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 274,
          "end": 280
        },
        "optional": false,
        "readonly": null,
        "start": 242,
        "end": 283
      },
      "declare": false,
      "start": 215,
      "end": 284
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
            "name": "gen2TypeA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Gen2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 343,
                  "end": 347
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ABC",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 348,
                          "end": 351
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 352,
                          "end": 353
                        },
                        "start": 348,
                        "end": 353
                      },
                      "typeArguments": null,
                      "start": 348,
                      "end": 353
                    }
                  ],
                  "start": 347,
                  "end": 354
                },
                "start": 343,
                "end": 354
              },
              "start": 341,
              "end": 354
            },
            "start": 332,
            "end": 354
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 359,
                  "end": 360
                },
                "value": {
                  "type": "Literal",
                  "value": "I am A",
                  "raw": "\"I am A\"",
                  "start": 363,
                  "end": 371
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 359,
                "end": 371
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
                  "start": 373,
                  "end": 374
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 376,
                  "end": 378
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 373,
                "end": 378
              }
            ],
            "start": 357,
            "end": 380
          },
          "definite": false,
          "start": 332,
          "end": 380
        }
      ],
      "declare": false,
      "start": 326,
      "end": 381
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
            "name": "gen2TypeB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Gen2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 399,
                  "end": 403
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ABC",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 404,
                          "end": 407
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 408,
                          "end": 409
                        },
                        "start": 404,
                        "end": 409
                      },
                      "typeArguments": null,
                      "start": 404,
                      "end": 409
                    }
                  ],
                  "start": 403,
                  "end": 410
                },
                "start": 399,
                "end": 410
              },
              "start": 397,
              "end": 410
            },
            "start": 388,
            "end": 410
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 415,
                  "end": 416
                },
                "value": {
                  "type": "Literal",
                  "value": "I am B",
                  "raw": "\"I am B\"",
                  "start": 419,
                  "end": 427
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 415,
                "end": 427
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
                  "start": 429,
                  "end": 430
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 432,
                  "end": 434
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 429,
                "end": 434
              }
            ],
            "start": 413,
            "end": 436
          },
          "definite": false,
          "start": 388,
          "end": 436
        }
      ],
      "declare": false,
      "start": 382,
      "end": 437
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 455,
        "end": 456
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
            "name": "Gen2",
            "optional": false,
            "typeAnnotation": null,
            "start": 465,
            "end": 469
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ABC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 470,
                    "end": 473
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 474,
                    "end": 475
                  },
                  "start": 470,
                  "end": 475
                },
                "typeArguments": null,
                "start": 470,
                "end": 475
              }
            ],
            "start": 469,
            "end": 476
          },
          "start": 465,
          "end": 476
        },
        "start": 459,
        "end": 476
      },
      "declare": false,
      "start": 450,
      "end": 477
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Gen2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 500,
                  "end": 504
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ABC",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 505,
                          "end": 508
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 509,
                          "end": 510
                        },
                        "start": 505,
                        "end": 510
                      },
                      "typeArguments": null,
                      "start": 505,
                      "end": 510
                    }
                  ],
                  "start": 504,
                  "end": 511
                },
                "start": 500,
                "end": 511
              },
              "start": 498,
              "end": 511
            },
            "start": 497,
            "end": 511
          },
          "init": null,
          "definite": false,
          "start": 497,
          "end": 511
        }
      ],
      "declare": true,
      "start": 485,
      "end": 512
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Gen2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 528,
                  "end": 532
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ABC",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 533,
                          "end": 536
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 537,
                          "end": 538
                        },
                        "start": 533,
                        "end": 538
                      },
                      "typeArguments": null,
                      "start": 533,
                      "end": 538
                    }
                  ],
                  "start": 532,
                  "end": 539
                },
                "start": 528,
                "end": 539
              },
              "start": 526,
              "end": 539
            },
            "start": 525,
            "end": 539
          },
          "init": null,
          "definite": false,
          "start": 525,
          "end": 539
        }
      ],
      "declare": true,
      "start": 513,
      "end": 540
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 541,
          "end": 542
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 545,
          "end": 546
        },
        "start": 541,
        "end": 546
      },
      "directive": null,
      "start": 541,
      "end": 547
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 548,
          "end": 549
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 552,
          "end": 553
        },
        "start": 548,
        "end": 553
      },
      "directive": null,
      "start": 548,
      "end": 554
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 554
}
```
