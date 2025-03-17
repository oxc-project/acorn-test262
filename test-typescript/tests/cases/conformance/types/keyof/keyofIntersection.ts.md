__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 945,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 23,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 22,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 11,
            "end": 20,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 20,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 14,
                "end": 20
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 24,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 33,
        "end": 46,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 44,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 38,
                "end": 44
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 49,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 57,
        "name": "T01",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 71,
              "end": 72,
              "typeName": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 89,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 97,
        "name": "T02",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
              "typeName": {
                "type": "Identifier",
                "start": 110,
                "end": 111,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 114,
              "end": 115,
              "typeName": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 136,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 144,
        "name": "T03",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
              "typeName": {
                "type": "Identifier",
                "start": 157,
                "end": 158,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 161,
              "end": 162,
              "typeName": {
                "type": "Identifier",
                "start": 161,
                "end": 162,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 183,
      "end": 214,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 191,
        "name": "T04",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 195,
            "end": 196,
            "name": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
              "typeName": {
                "type": "Identifier",
                "start": 207,
                "end": 208,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 211,
              "end": 212,
              "typeName": {
                "type": "Identifier",
                "start": 211,
                "end": 212,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 237,
      "end": 255,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 245,
        "name": "T05",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 248,
        "end": 254,
        "typeName": {
          "type": "Identifier",
          "start": 248,
          "end": 251,
          "name": "T02",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 251,
          "end": 254,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 252,
              "end": 253,
              "typeName": {
                "type": "Identifier",
                "start": 252,
                "end": 253,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 270,
      "end": 288,
      "id": {
        "type": "Identifier",
        "start": 275,
        "end": 278,
        "name": "T06",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 281,
        "end": 287,
        "typeName": {
          "type": "Identifier",
          "start": 281,
          "end": 284,
          "name": "T03",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 284,
          "end": 287,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 285,
              "end": 286,
              "typeName": {
                "type": "Identifier",
                "start": 285,
                "end": 286,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 303,
      "end": 324,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 311,
        "name": "T07",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 314,
        "end": 323,
        "typeName": {
          "type": "Identifier",
          "start": 314,
          "end": 317,
          "name": "T04",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 317,
          "end": 323,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 318,
              "end": 319,
              "typeName": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 321,
              "end": 322,
              "typeName": {
                "type": "Identifier",
                "start": 321,
                "end": 322,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 363,
      "end": 455,
      "id": {
        "type": "Identifier",
        "start": 368,
        "end": 376,
        "name": "Example1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 377,
              "end": 378,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 387,
              "end": 393
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 395,
            "end": 411,
            "name": {
              "type": "Identifier",
              "start": 395,
              "end": 396,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 405,
              "end": 411
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
              "typeName": {
                "type": "Identifier",
                "start": 422,
                "end": 428,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 428,
                "end": 436,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 429,
                    "end": 430,
                    "typeName": {
                      "type": "Identifier",
                      "start": 429,
                      "end": 430,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 432,
                    "end": 435
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 439,
              "end": 453,
              "typeName": {
                "type": "Identifier",
                "start": 439,
                "end": 445,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 445,
                "end": 453,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 446,
                    "end": 447,
                    "typeName": {
                      "type": "Identifier",
                      "start": 446,
                      "end": 447,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 449,
                    "end": 452
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 456,
      "end": 490,
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 468,
        "name": "Result1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 471,
        "end": 489,
        "typeName": {
          "type": "Identifier",
          "start": 471,
          "end": 479,
          "name": "Example1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "value": "x",
                "raw": "'x'"
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
                "value": "y",
                "raw": "'y'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 506,
      "end": 565,
      "id": {
        "type": "Identifier",
        "start": 511,
        "end": 518,
        "name": "Result2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 528,
                "end": 534,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "value": "x",
                      "raw": "'x'"
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 540,
                    "end": 543
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 547,
              "end": 563,
              "typeName": {
                "type": "Identifier",
                "start": 547,
                "end": 553,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "value": "y",
                      "raw": "'y'"
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 559,
                    "end": 562
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 581,
      "end": 638,
      "id": {
        "type": "Identifier",
        "start": 586,
        "end": 594,
        "name": "Example3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 595,
              "end": 596,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 605,
              "end": 611
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
          "typeName": {
            "type": "Identifier",
            "start": 622,
            "end": 628,
            "name": "Record",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 628,
            "end": 636,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 629,
                "end": 630,
                "typeName": {
                  "type": "Identifier",
                  "start": 629,
                  "end": 630,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSAnyKeyword",
                "start": 632,
                "end": 635
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 639,
      "end": 674,
      "id": {
        "type": "Identifier",
        "start": 644,
        "end": 651,
        "name": "Result3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 654,
        "end": 673,
        "typeName": {
          "type": "Identifier",
          "start": 654,
          "end": 662,
          "name": "Example3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                    "value": "x",
                    "raw": "'x'"
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
                    "value": "y",
                    "raw": "'y'"
                  }
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 690,
      "end": 776,
      "id": {
        "type": "Identifier",
        "start": 695,
        "end": 703,
        "name": "Example4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 704,
              "end": 705,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 714,
              "end": 720
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 722,
            "end": 738,
            "name": {
              "type": "Identifier",
              "start": 722,
              "end": 723,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 732,
              "end": 738
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "typeName": {
              "type": "Identifier",
              "start": 743,
              "end": 749,
              "name": "Record",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 749,
              "end": 757,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 750,
                  "end": 751,
                  "typeName": {
                    "type": "Identifier",
                    "start": 750,
                    "end": 751,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 753,
                  "end": 756
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 760,
            "end": 774,
            "typeName": {
              "type": "Identifier",
              "start": 760,
              "end": 766,
              "name": "Record",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 766,
              "end": 774,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 767,
                  "end": 768,
                  "typeName": {
                    "type": "Identifier",
                    "start": 767,
                    "end": 768,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 770,
                  "end": 773
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 777,
      "end": 817,
      "id": {
        "type": "Identifier",
        "start": 782,
        "end": 789,
        "name": "Result4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 792,
        "end": 816,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 798,
          "end": 816,
          "typeName": {
            "type": "Identifier",
            "start": 798,
            "end": 806,
            "name": "Example4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "value": "x",
                  "raw": "'x'"
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
                  "value": "y",
                  "raw": "'y'"
                }
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 833,
      "end": 869,
      "id": {
        "type": "Identifier",
        "start": 838,
        "end": 846,
        "name": "Example5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 847,
              "end": 848,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 850,
            "end": 851,
            "name": {
              "type": "Identifier",
              "start": 850,
              "end": 851,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
              "typeName": {
                "type": "Identifier",
                "start": 862,
                "end": 863,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 866,
              "end": 867,
              "typeName": {
                "type": "Identifier",
                "start": 866,
                "end": 867,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 870,
      "end": 930,
      "id": {
        "type": "Identifier",
        "start": 875,
        "end": 882,
        "name": "Result5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 885,
        "end": 929,
        "typeName": {
          "type": "Identifier",
          "start": 885,
          "end": 893,
          "name": "Example5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 893,
          "end": 929,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 894,
              "end": 910,
              "typeName": {
                "type": "Identifier",
                "start": 894,
                "end": 900,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "value": "x",
                      "raw": "'x'"
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 906,
                    "end": 909
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 912,
              "end": 928,
              "typeName": {
                "type": "Identifier",
                "start": 912,
                "end": 918,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "value": "y",
                      "raw": "'y'"
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 924,
                    "end": 927
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
