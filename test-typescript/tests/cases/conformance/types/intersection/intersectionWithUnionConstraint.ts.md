intersectionWithUnionConstraint.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1272,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 170,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 170,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 141,
            "end": 168,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 145,
                "end": 167,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 163,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 146,
                    "end": 163,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 148,
                      "end": 163,
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
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 66,
          "end": 74,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 67,
            "end": 74,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 69,
              "end": 74,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 69,
                  "end": 70,
                  "typeName": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 70,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 73,
                  "end": 74,
                  "typeName": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 74,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 65,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 37,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 22,
              "end": 37,
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
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 39,
            "end": 64,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 49,
              "end": 64,
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
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 172,
      "end": 539,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 270,
        "end": 539,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 276,
            "end": 304,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 280,
                "end": 303,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 299,
                  "decorators": [],
                  "name": "y1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 282,
                    "end": 299,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 284,
                      "end": 299,
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
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 303,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 322,
            "end": 348,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 326,
                "end": 347,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 343,
                  "decorators": [],
                  "name": "y2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 328,
                    "end": 343,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 330,
                      "end": 343,
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
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 347,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 368,
            "end": 399,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 372,
                "end": 398,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 394,
                  "decorators": [],
                  "name": "y3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 374,
                    "end": 394,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 376,
                      "end": 394,
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
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 398,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 404,
            "end": 430,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 408,
                "end": 429,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 425,
                  "decorators": [],
                  "name": "y4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 410,
                    "end": 425,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 412,
                      "end": 425,
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
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 429,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 450,
            "end": 481,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 454,
                "end": 480,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 454,
                  "end": 476,
                  "decorators": [],
                  "name": "y5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 456,
                    "end": 476,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 458,
                      "end": 476,
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
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 480,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 496,
            "end": 525,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 500,
                "end": 524,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 520,
                  "decorators": [],
                  "name": "y6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 502,
                    "end": 520,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 504,
                      "end": 520,
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
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 523,
                  "end": 524,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 181,
        "end": 183,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 260,
          "end": 268,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 261,
            "end": 268,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 263,
              "end": 268,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 263,
                  "end": 264,
                  "typeName": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 264,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 267,
                  "end": 268,
                  "typeName": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 268,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 183,
        "end": 259,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 184,
            "end": 221,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 194,
              "end": 221,
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
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 223,
            "end": 258,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 233,
              "end": 258,
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
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 541,
      "end": 611,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 546,
        "end": 548,
        "decorators": [],
        "name": "T1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 551,
        "end": 610,
        "types": [
          {
            "type": "TSUnionType",
            "start": 552,
            "end": 579,
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
            ]
          },
          {
            "type": "TSUnionType",
            "start": 584,
            "end": 609,
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
            ]
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 636,
      "end": 765,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 725,
        "end": 765,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 731,
            "end": 763,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 737,
                "end": 762,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 737,
                  "end": 758,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 738,
                    "end": 758,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 740,
                      "end": 758,
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
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 761,
                  "end": 762,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 645,
        "end": 647,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 687,
          "end": 723,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 688,
            "end": 723,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 690,
              "end": 723,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 690,
                  "end": 691,
                  "typeName": {
                    "type": "Identifier",
                    "start": 690,
                    "end": 691,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSUnionType",
                  "start": 695,
                  "end": 722,
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
                  ]
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 647,
        "end": 686,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 648,
            "end": 685,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 658,
              "end": 685,
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
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 648,
              "end": 649,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 767,
      "end": 860,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 832,
        "end": 860,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 838,
            "end": 858,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 844,
                "end": 857,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 844,
                  "end": 853,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 845,
                    "end": 853,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 847,
                      "end": 853
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 856,
                  "end": 857,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 776,
        "end": 778,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 806,
          "end": 830,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 807,
            "end": 830,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 809,
              "end": 830,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 809,
                  "end": 810,
                  "typeName": {
                    "type": "Identifier",
                    "start": 809,
                    "end": 810,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSUnionType",
                  "start": 814,
                  "end": 829,
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
                  ]
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 778,
        "end": 805,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 779,
            "end": 804,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 789,
              "end": 804,
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
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 779,
              "end": 780,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 862,
      "end": 941,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 912,
        "end": 941,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 918,
            "end": 939,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 922,
                "end": 938,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 922,
                  "end": 934,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 923,
                    "end": 934,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 925,
                      "end": 934,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 931,
                        "end": 934
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 937,
                  "end": 938,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 871,
        "end": 873,
        "decorators": [],
        "name": "f5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 896,
          "end": 910,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 897,
            "end": 910,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 899,
              "end": 910,
              "types": [
                {
                  "type": "TSTypeOperator",
                  "start": 899,
                  "end": 906,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 905,
                    "end": 906,
                    "typeName": {
                      "type": "Identifier",
                      "start": 905,
                      "end": 906,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 909,
                  "end": 910,
                  "typeName": {
                    "type": "Identifier",
                    "start": 909,
                    "end": 910,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 873,
        "end": 895,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 874,
            "end": 875,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 874,
              "end": 875,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 877,
            "end": 894,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 887,
              "end": 894,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 893,
                "end": 894,
                "typeName": {
                  "type": "Identifier",
                  "start": 893,
                  "end": 894,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 877,
              "end": 878,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 965,
      "end": 1061,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 970,
        "end": 977,
        "decorators": [],
        "name": "Example",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 986,
        "end": 1061,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 994,
          "end": 1001,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1000,
            "end": 1001,
            "typeName": {
              "type": "Identifier",
              "start": 1000,
              "end": 1001,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 989,
          "end": 990,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 1004,
          "end": 1059,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1004,
            "end": 1005,
            "typeName": {
              "type": "Identifier",
              "start": 1004,
              "end": 1005,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "start": 1014,
            "end": 1021,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1020,
              "end": 1021,
              "typeName": {
                "type": "Identifier",
                "start": 1020,
                "end": 1021,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 1045,
            "end": 1059,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1056,
              "end": 1059,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1057,
                  "end": 1058,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1057,
                    "end": 1058,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1045,
              "end": 1056,
              "decorators": [],
              "name": "NoErrorHere",
              "optional": false
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 1024,
            "end": 1042,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1039,
              "end": 1042,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1040,
                  "end": 1041,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1040,
                    "end": 1041,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1024,
              "end": 1039,
              "decorators": [],
              "name": "UnexpectedError",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 977,
        "end": 983,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 978,
            "end": 979,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 978,
              "end": 979,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 981,
            "end": 982,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 981,
              "end": 982,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1063,
      "end": 1110,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1068,
        "end": 1083,
        "decorators": [],
        "name": "UnexpectedError",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1109,
        "end": 1110,
        "typeName": {
          "type": "Identifier",
          "start": 1109,
          "end": 1110,
          "decorators": [],
          "name": "T",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1083,
        "end": 1106,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1084,
            "end": 1105,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1094,
              "end": 1105,
              "typeName": {
                "type": "Identifier",
                "start": 1094,
                "end": 1105,
                "decorators": [],
                "name": "PropertyKey",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1084,
              "end": 1085,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1111,
      "end": 1154,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1116,
        "end": 1127,
        "decorators": [],
        "name": "NoErrorHere",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1153,
        "end": 1154,
        "typeName": {
          "type": "Identifier",
          "start": 1153,
          "end": 1154,
          "decorators": [],
          "name": "T",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1127,
        "end": 1150,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1128,
            "end": 1149,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1138,
              "end": 1149,
              "typeName": {
                "type": "Identifier",
                "start": 1138,
                "end": 1149,
                "decorators": [],
                "name": "PropertyKey",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1128,
              "end": 1129,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1178,
      "end": 1227,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1183,
        "end": 1184,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1190,
        "end": 1226,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1190,
          "end": 1191,
          "typeName": {
            "type": "Identifier",
            "start": 1190,
            "end": 1191,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1200,
          "end": 1214,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1205,
            "end": 1214,
            "params": [
              {
                "type": "TSInferType",
                "start": 1206,
                "end": 1213,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1212,
                  "end": 1213,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1212,
                    "end": 1213,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1200,
            "end": 1205,
            "decorators": [],
            "name": "Array",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1221,
          "end": 1226
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 1217,
          "end": 1218,
          "typeName": {
            "type": "Identifier",
            "start": 1217,
            "end": 1218,
            "decorators": [],
            "name": "U",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1184,
        "end": 1187,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1185,
            "end": 1186,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1185,
              "end": 1186,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1228,
      "end": 1271,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1233,
        "end": 1234,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1240,
        "end": 1270,
        "constraint": {
          "type": "TSIntersectionType",
          "start": 1248,
          "end": 1262,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 1248,
              "end": 1252,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1249,
                "end": 1252,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1250,
                    "end": 1251,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1250,
                      "end": 1251,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1248,
                "end": 1249,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            {
              "type": "TSTypeOperator",
              "start": 1255,
              "end": 1262,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1261,
                "end": 1262,
                "typeName": {
                  "type": "Identifier",
                  "start": 1261,
                  "end": 1262,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 1243,
          "end": 1244,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 1266,
          "end": 1268,
          "literal": {
            "type": "Literal",
            "start": 1266,
            "end": 1268,
            "raw": "42",
            "value": 42
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1234,
        "end": 1237,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1235,
            "end": 1236,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1235,
              "end": 1236,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
