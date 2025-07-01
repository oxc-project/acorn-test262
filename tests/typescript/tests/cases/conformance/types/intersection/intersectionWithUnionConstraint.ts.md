__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
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
              "start": 12,
              "end": 13
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 22,
                  "end": 28
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 31,
                  "end": 37
                }
              ],
              "start": 22,
              "end": 37
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 37
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 49,
                  "end": 55
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 58,
                  "end": 64
                }
              ],
              "start": 49,
              "end": 64
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 39,
            "end": 64
          }
        ],
        "start": 11,
        "end": 65
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 70
                  },
                  "typeArguments": null,
                  "start": 69,
                  "end": 70
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 74
                  },
                  "typeArguments": null,
                  "start": 73,
                  "end": 74
                }
              ],
              "start": 69,
              "end": 74
            },
            "start": 67,
            "end": 74
          },
          "start": 66,
          "end": 74
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 148,
                          "end": 154
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 157,
                          "end": 163
                        }
                      ],
                      "start": 148,
                      "end": 163
                    },
                    "start": 146,
                    "end": 163
                  },
                  "start": 145,
                  "end": 163
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 167
                },
                "definite": false,
                "start": 145,
                "end": 167
              }
            ],
            "declare": false,
            "start": 141,
            "end": 168
          }
        ],
        "start": 76,
        "end": 170
      },
      "expression": false,
      "start": 0,
      "end": 170
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 183
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
              "start": 184,
              "end": 185
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 194,
                  "end": 200
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 203,
                  "end": 209
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 212,
                  "end": 221
                }
              ],
              "start": 194,
              "end": 221
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 184,
            "end": 221
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 224
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 233,
                  "end": 239
                },
                {
                  "type": "TSNullKeyword",
                  "start": 242,
                  "end": 246
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 249,
                  "end": 258
                }
              ],
              "start": 233,
              "end": 258
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 223,
            "end": 258
          }
        ],
        "start": 183,
        "end": 259
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 263,
                    "end": 264
                  },
                  "typeArguments": null,
                  "start": 263,
                  "end": 264
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 268
                  },
                  "typeArguments": null,
                  "start": 267,
                  "end": 268
                }
              ],
              "start": 263,
              "end": 268
            },
            "start": 261,
            "end": 268
          },
          "start": 260,
          "end": 268
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 284,
                          "end": 290
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 293,
                          "end": 299
                        }
                      ],
                      "start": 284,
                      "end": 299
                    },
                    "start": 282,
                    "end": 299
                  },
                  "start": 280,
                  "end": 299
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 303
                },
                "definite": false,
                "start": 280,
                "end": 303
              }
            ],
            "declare": false,
            "start": 276,
            "end": 304
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
                  "name": "y2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 330,
                          "end": 336
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 339,
                          "end": 343
                        }
                      ],
                      "start": 330,
                      "end": 343
                    },
                    "start": 328,
                    "end": 343
                  },
                  "start": 326,
                  "end": 343
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 346,
                  "end": 347
                },
                "definite": false,
                "start": 326,
                "end": 347
              }
            ],
            "declare": false,
            "start": 322,
            "end": 348
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
                  "name": "y3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 376,
                          "end": 382
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 385,
                          "end": 394
                        }
                      ],
                      "start": 376,
                      "end": 394
                    },
                    "start": 374,
                    "end": 394
                  },
                  "start": 372,
                  "end": 394
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 398
                },
                "definite": false,
                "start": 372,
                "end": 398
              }
            ],
            "declare": false,
            "start": 368,
            "end": 399
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
                  "name": "y4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 412,
                          "end": 418
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 421,
                          "end": 425
                        }
                      ],
                      "start": 412,
                      "end": 425
                    },
                    "start": 410,
                    "end": 425
                  },
                  "start": 408,
                  "end": 425
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 428,
                  "end": 429
                },
                "definite": false,
                "start": 408,
                "end": 429
              }
            ],
            "declare": false,
            "start": 404,
            "end": 430
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
                  "name": "y5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 458,
                          "end": 464
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 467,
                          "end": 476
                        }
                      ],
                      "start": 458,
                      "end": 476
                    },
                    "start": 456,
                    "end": 476
                  },
                  "start": 454,
                  "end": 476
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 480
                },
                "definite": false,
                "start": 454,
                "end": 480
              }
            ],
            "declare": false,
            "start": 450,
            "end": 481
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
                  "name": "y6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNullKeyword",
                          "start": 504,
                          "end": 508
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 511,
                          "end": 520
                        }
                      ],
                      "start": 504,
                      "end": 520
                    },
                    "start": 502,
                    "end": 520
                  },
                  "start": 500,
                  "end": 520
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 523,
                  "end": 524
                },
                "definite": false,
                "start": 500,
                "end": 524
              }
            ],
            "declare": false,
            "start": 496,
            "end": 525
          }
        ],
        "start": 270,
        "end": 539
      },
      "expression": false,
      "start": 172,
      "end": 539
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 546,
        "end": 548
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 552,
                "end": 558
              },
              {
                "type": "TSNumberKeyword",
                "start": 561,
                "end": 567
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 570,
                "end": 579
              }
            ],
            "start": 552,
            "end": 579
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 584,
                "end": 590
              },
              {
                "type": "TSNullKeyword",
                "start": 593,
                "end": 597
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 600,
                "end": 609
              }
            ],
            "start": 584,
            "end": 609
          }
        ],
        "start": 551,
        "end": 610
      },
      "declare": false,
      "start": 541,
      "end": 611
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 645,
        "end": 647
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
              "start": 648,
              "end": 649
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 658,
                  "end": 664
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 667,
                  "end": 673
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 676,
                  "end": 685
                }
              ],
              "start": 658,
              "end": 685
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 648,
            "end": 685
          }
        ],
        "start": 647,
        "end": 686
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 690,
                    "end": 691
                  },
                  "typeArguments": null,
                  "start": 690,
                  "end": 691
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 695,
                      "end": 701
                    },
                    {
                      "type": "TSObjectKeyword",
                      "start": 704,
                      "end": 710
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 713,
                      "end": 722
                    }
                  ],
                  "start": 695,
                  "end": 722
                }
              ],
              "start": 690,
              "end": 723
            },
            "start": 688,
            "end": 723
          },
          "start": 687,
          "end": 723
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 740,
                          "end": 746
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 749,
                          "end": 758
                        }
                      ],
                      "start": 740,
                      "end": 758
                    },
                    "start": 738,
                    "end": 758
                  },
                  "start": 737,
                  "end": 758
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 761,
                  "end": 762
                },
                "definite": false,
                "start": 737,
                "end": 762
              }
            ],
            "declare": false,
            "start": 731,
            "end": 763
          }
        ],
        "start": 725,
        "end": 765
      },
      "expression": false,
      "start": 636,
      "end": 765
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 776,
        "end": 778
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
              "start": 779,
              "end": 780
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 789,
                  "end": 795
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 798,
                  "end": 804
                }
              ],
              "start": 789,
              "end": 804
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 779,
            "end": 804
          }
        ],
        "start": 778,
        "end": 805
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 809,
                    "end": 810
                  },
                  "typeArguments": null,
                  "start": 809,
                  "end": 810
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 814,
                      "end": 820
                    },
                    {
                      "type": "TSObjectKeyword",
                      "start": 823,
                      "end": 829
                    }
                  ],
                  "start": 814,
                  "end": 829
                }
              ],
              "start": 809,
              "end": 830
            },
            "start": 807,
            "end": 830
          },
          "start": 806,
          "end": 830
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 847,
                      "end": 853
                    },
                    "start": 845,
                    "end": 853
                  },
                  "start": 844,
                  "end": 853
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 856,
                  "end": 857
                },
                "definite": false,
                "start": 844,
                "end": 857
              }
            ],
            "declare": false,
            "start": 838,
            "end": 858
          }
        ],
        "start": 832,
        "end": 860
      },
      "expression": false,
      "start": 767,
      "end": 860
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 871,
        "end": 873
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
              "start": 874,
              "end": 875
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 874,
            "end": 875
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 877,
              "end": 878
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
                  "start": 893,
                  "end": 894
                },
                "typeArguments": null,
                "start": 893,
                "end": 894
              },
              "start": 887,
              "end": 894
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 877,
            "end": 894
          }
        ],
        "start": 873,
        "end": 895
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
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
                      "start": 905,
                      "end": 906
                    },
                    "typeArguments": null,
                    "start": 905,
                    "end": 906
                  },
                  "start": 899,
                  "end": 906
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 909,
                    "end": 910
                  },
                  "typeArguments": null,
                  "start": 909,
                  "end": 910
                }
              ],
              "start": 899,
              "end": 910
            },
            "start": 897,
            "end": 910
          },
          "start": 896,
          "end": 910
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 931,
                        "end": 934
                      },
                      "start": 925,
                      "end": 934
                    },
                    "start": 923,
                    "end": 934
                  },
                  "start": 922,
                  "end": 934
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 937,
                  "end": 938
                },
                "definite": false,
                "start": 922,
                "end": 938
              }
            ],
            "declare": false,
            "start": 918,
            "end": 939
          }
        ],
        "start": 912,
        "end": 941
      },
      "expression": false,
      "start": 862,
      "end": 941
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null,
        "start": 970,
        "end": 977
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
              "start": 978,
              "end": 979
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 978,
            "end": 979
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 981,
              "end": 982
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 981,
            "end": 982
          }
        ],
        "start": 977,
        "end": 983
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 989,
          "end": 990
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
              "start": 1000,
              "end": 1001
            },
            "typeArguments": null,
            "start": 1000,
            "end": 1001
          },
          "start": 994,
          "end": 1001
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1004,
              "end": 1005
            },
            "typeArguments": null,
            "start": 1004,
            "end": 1005
          },
          "extendsType": {
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
                "start": 1020,
                "end": 1021
              },
              "typeArguments": null,
              "start": 1020,
              "end": 1021
            },
            "start": 1014,
            "end": 1021
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "UnexpectedError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1024,
              "end": 1039
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
                    "start": 1040,
                    "end": 1041
                  },
                  "typeArguments": null,
                  "start": 1040,
                  "end": 1041
                }
              ],
              "start": 1039,
              "end": 1042
            },
            "start": 1024,
            "end": 1042
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NoErrorHere",
              "optional": false,
              "typeAnnotation": null,
              "start": 1045,
              "end": 1056
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
                    "start": 1057,
                    "end": 1058
                  },
                  "typeArguments": null,
                  "start": 1057,
                  "end": 1058
                }
              ],
              "start": 1056,
              "end": 1059
            },
            "start": 1045,
            "end": 1059
          },
          "start": 1004,
          "end": 1059
        },
        "optional": false,
        "readonly": null,
        "start": 986,
        "end": 1061
      },
      "declare": false,
      "start": 965,
      "end": 1061
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnexpectedError",
        "optional": false,
        "typeAnnotation": null,
        "start": 1068,
        "end": 1083
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
              "start": 1084,
              "end": 1085
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 1094,
                "end": 1105
              },
              "typeArguments": null,
              "start": 1094,
              "end": 1105
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1084,
            "end": 1105
          }
        ],
        "start": 1083,
        "end": 1106
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 1109,
          "end": 1110
        },
        "typeArguments": null,
        "start": 1109,
        "end": 1110
      },
      "declare": false,
      "start": 1063,
      "end": 1110
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoErrorHere",
        "optional": false,
        "typeAnnotation": null,
        "start": 1116,
        "end": 1127
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
              "start": 1128,
              "end": 1129
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 1138,
                "end": 1149
              },
              "typeArguments": null,
              "start": 1138,
              "end": 1149
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1128,
            "end": 1149
          }
        ],
        "start": 1127,
        "end": 1150
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 1153,
          "end": 1154
        },
        "typeArguments": null,
        "start": 1153,
        "end": 1154
      },
      "declare": false,
      "start": 1111,
      "end": 1154
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1183,
        "end": 1184
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
              "start": 1185,
              "end": 1186
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1185,
            "end": 1186
          }
        ],
        "start": 1184,
        "end": 1187
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
            "start": 1190,
            "end": 1191
          },
          "typeArguments": null,
          "start": 1190,
          "end": 1191
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1200,
            "end": 1205
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1212,
                    "end": 1213
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1212,
                  "end": 1213
                },
                "start": 1206,
                "end": 1213
              }
            ],
            "start": 1205,
            "end": 1214
          },
          "start": 1200,
          "end": 1214
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 1217,
            "end": 1218
          },
          "typeArguments": null,
          "start": 1217,
          "end": 1218
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1221,
          "end": 1226
        },
        "start": 1190,
        "end": 1226
      },
      "declare": false,
      "start": 1178,
      "end": 1227
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1233,
        "end": 1234
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
              "start": 1235,
              "end": 1236
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1235,
            "end": 1236
          }
        ],
        "start": 1234,
        "end": 1237
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1243,
          "end": 1244
        },
        "constraint": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1248,
                "end": 1249
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
                      "start": 1250,
                      "end": 1251
                    },
                    "typeArguments": null,
                    "start": 1250,
                    "end": 1251
                  }
                ],
                "start": 1249,
                "end": 1252
              },
              "start": 1248,
              "end": 1252
            },
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
                  "start": 1261,
                  "end": 1262
                },
                "typeArguments": null,
                "start": 1261,
                "end": 1262
              },
              "start": 1255,
              "end": 1262
            }
          ],
          "start": 1248,
          "end": 1262
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1266,
            "end": 1268
          },
          "start": 1266,
          "end": 1268
        },
        "optional": false,
        "readonly": null,
        "start": 1240,
        "end": 1270
      },
      "declare": false,
      "start": 1228,
      "end": 1271
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1271
}
```
