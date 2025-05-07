__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 944,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 23,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 22,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 11,
            "end": 20,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 20,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 14,
                "end": 20
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 24,
      "end": 47,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 33,
        "end": 46,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 44,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 38,
                "end": 44
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 49,
      "end": 74,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 57,
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 60,
        "end": 73,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 67,
          "end": 72,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 67,
              "end": 68,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 71,
              "end": 72,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 89,
      "end": 117,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 97,
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 103,
        "end": 116,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 110,
          "end": 115,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 110,
              "end": 111,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 110,
                "end": 111,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 114,
              "end": 115,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 97,
        "end": 100,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 98,
            "end": 99,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 136,
      "end": 164,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 144,
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 150,
        "end": 163,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 157,
          "end": 162,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 157,
              "end": 158,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 157,
                "end": 158,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 161,
              "end": 162,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 161,
                "end": 162,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 144,
        "end": 147,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 145,
            "end": 146,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 183,
      "end": 214,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 191,
        "decorators": [],
        "name": "T04",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 200,
        "end": 213,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 207,
          "end": 212,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 207,
              "end": 208,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 207,
                "end": 208,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 211,
              "end": 212,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 211,
                "end": 212,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 191,
        "end": 197,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 192,
            "end": 193,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 195,
            "end": 196,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 237,
      "end": 255,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 245,
        "decorators": [],
        "name": "T05",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 248,
        "end": 254,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 251,
          "end": 254,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 252,
              "end": 253,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 252,
                "end": 253,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 248,
          "end": 251,
          "decorators": [],
          "name": "T02",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 270,
      "end": 288,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 275,
        "end": 278,
        "decorators": [],
        "name": "T06",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 281,
        "end": 287,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 284,
          "end": 287,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 285,
              "end": 286,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 285,
                "end": 286,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 281,
          "end": 284,
          "decorators": [],
          "name": "T03",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 303,
      "end": 324,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 311,
        "decorators": [],
        "name": "T07",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 314,
        "end": 323,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 317,
          "end": 323,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 318,
              "end": 319,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 321,
              "end": 322,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 321,
                "end": 322,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 314,
          "end": 317,
          "decorators": [],
          "name": "T04",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 363,
      "end": 455,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 368,
        "end": 376,
        "decorators": [],
        "name": "Example1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 415,
        "end": 454,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 422,
          "end": 453,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 422,
              "end": 436,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 428,
                "end": 436,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 429,
                    "end": 430,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 429,
                      "end": 430,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 432,
                    "end": 435
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 422,
                "end": 428,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 439,
              "end": 453,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 445,
                "end": 453,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 446,
                    "end": 447,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 446,
                      "end": 447,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 449,
                    "end": 452
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 439,
                "end": 445,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 376,
        "end": 412,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 377,
            "end": 393,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 387,
              "end": 393
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 377,
              "end": 378,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 395,
            "end": 411,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 405,
              "end": 411
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 395,
              "end": 396,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 456,
      "end": 490,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 468,
        "decorators": [],
        "name": "Result1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 471,
        "end": 489,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 479,
          "end": 489,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 480,
              "end": 483,
              "literal": {
                "type": "Literal",
                "start": 480,
                "end": 483,
                "raw": "'x'",
                "value": "x",
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "TSLiteralType",
              "start": 485,
              "end": 488,
              "literal": {
                "type": "Literal",
                "start": 485,
                "end": 488,
                "raw": "'y'",
                "value": "y",
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 471,
          "end": 479,
          "decorators": [],
          "name": "Example1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 506,
      "end": 565,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 511,
        "end": 518,
        "decorators": [],
        "name": "Result2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 521,
        "end": 564,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 528,
          "end": 563,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 528,
              "end": 544,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 534,
                "end": 544,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 535,
                    "end": 538,
                    "literal": {
                      "type": "Literal",
                      "start": 535,
                      "end": 538,
                      "raw": "'x'",
                      "value": "x",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 540,
                    "end": 543
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 528,
                "end": 534,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 547,
              "end": 563,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 553,
                "end": 563,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 554,
                    "end": 557,
                    "literal": {
                      "type": "Literal",
                      "start": 554,
                      "end": 557,
                      "raw": "'y'",
                      "value": "y",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 559,
                    "end": 562
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 547,
                "end": 553,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 581,
      "end": 638,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 586,
        "end": 594,
        "decorators": [],
        "name": "Example3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 615,
        "end": 637,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 622,
          "end": 636,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 628,
            "end": 636,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 629,
                "end": 630,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 629,
                  "end": 630,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSAnyKeyword",
                "start": 632,
                "end": 635
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 622,
            "end": 628,
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 594,
        "end": 612,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 595,
            "end": 611,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 605,
              "end": 611
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 595,
              "end": 596,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 639,
      "end": 674,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 644,
        "end": 651,
        "decorators": [],
        "name": "Result3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 654,
        "end": 673,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 662,
          "end": 673,
          "params": [
            {
              "type": "TSUnionType",
              "start": 663,
              "end": 672,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 663,
                  "end": 666,
                  "literal": {
                    "type": "Literal",
                    "start": 663,
                    "end": 666,
                    "raw": "'x'",
                    "value": "x",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 669,
                  "end": 672,
                  "literal": {
                    "type": "Literal",
                    "start": 669,
                    "end": 672,
                    "raw": "'y'",
                    "value": "y",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 654,
          "end": 662,
          "decorators": [],
          "name": "Example3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 690,
      "end": 776,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 695,
        "end": 703,
        "decorators": [],
        "name": "Example4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 743,
        "end": 774,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 743,
            "end": 757,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 749,
              "end": 757,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 750,
                  "end": 751,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 750,
                    "end": 751,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 753,
                  "end": 756
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 743,
              "end": 749,
              "decorators": [],
              "name": "Record",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 760,
            "end": 774,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 766,
              "end": 774,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 767,
                  "end": 768,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 767,
                    "end": 768,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 770,
                  "end": 773
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 760,
              "end": 766,
              "decorators": [],
              "name": "Record",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 703,
        "end": 739,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 704,
            "end": 720,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 714,
              "end": 720
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 704,
              "end": 705,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 722,
            "end": 738,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 732,
              "end": 738
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 722,
              "end": 723,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 777,
      "end": 817,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 782,
        "end": 789,
        "decorators": [],
        "name": "Result4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 792,
        "end": 816,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 798,
          "end": 816,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 806,
            "end": 816,
            "params": [
              {
                "type": "TSLiteralType",
                "start": 807,
                "end": 810,
                "literal": {
                  "type": "Literal",
                  "start": 807,
                  "end": 810,
                  "raw": "'x'",
                  "value": "x",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "TSLiteralType",
                "start": 812,
                "end": 815,
                "literal": {
                  "type": "Literal",
                  "start": 812,
                  "end": 815,
                  "raw": "'y'",
                  "value": "y",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 798,
            "end": 806,
            "decorators": [],
            "name": "Example4",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 833,
      "end": 869,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 838,
        "end": 846,
        "decorators": [],
        "name": "Example5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 855,
        "end": 868,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 862,
          "end": 867,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 862,
              "end": 863,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 862,
                "end": 863,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 866,
              "end": 867,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 866,
                "end": 867,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 846,
        "end": 852,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 847,
            "end": 848,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 847,
              "end": 848,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 850,
            "end": 851,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 850,
              "end": 851,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 870,
      "end": 930,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 875,
        "end": 882,
        "decorators": [],
        "name": "Result5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 885,
        "end": 929,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 893,
          "end": 929,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 894,
              "end": 910,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 900,
                "end": 910,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 901,
                    "end": 904,
                    "literal": {
                      "type": "Literal",
                      "start": 901,
                      "end": 904,
                      "raw": "'x'",
                      "value": "x",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 906,
                    "end": 909
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 894,
                "end": 900,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 912,
              "end": 928,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 918,
                "end": 928,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 919,
                    "end": 922,
                    "literal": {
                      "type": "Literal",
                      "start": 919,
                      "end": 922,
                      "raw": "'y'",
                      "value": "y",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 924,
                    "end": 927
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 912,
                "end": 918,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 885,
          "end": 893,
          "decorators": [],
          "name": "Example5",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
