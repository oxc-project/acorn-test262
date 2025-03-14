__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1388,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 49,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Item",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 12,
        "end": 48,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 24,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 35,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 46,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 46,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 39,
                "end": 46
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 51,
      "end": 91,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 59,
        "decorators": [],
        "name": "T00",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 62,
        "end": 90,
        "constraint": {
          "type": "TSUnionType",
          "start": 70,
          "end": 79,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 70,
              "end": 73,
              "literal": {
                "type": "Literal",
                "start": 70,
                "end": 73,
                "raw": "\"x\"",
                "value": "x"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 76,
              "end": 79,
              "literal": {
                "type": "Literal",
                "start": 76,
                "end": 79,
                "raw": "\"y\"",
                "value": "y"
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 65,
          "end": 66,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 82,
          "end": 88
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 92,
      "end": 127,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 100,
        "decorators": [],
        "name": "T01",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 103,
        "end": 126,
        "constraint": {
          "type": "TSUnionType",
          "start": 111,
          "end": 120,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 111,
              "end": 114,
              "literal": {
                "type": "Literal",
                "start": 111,
                "end": 114,
                "raw": "\"x\"",
                "value": "x"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 117,
              "end": 120,
              "literal": {
                "type": "Literal",
                "start": 117,
                "end": 120,
                "raw": "\"y\"",
                "value": "y"
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 106,
          "end": 107,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 123,
          "end": 124,
          "typeName": {
            "type": "Identifier",
            "start": 123,
            "end": 124,
            "decorators": [],
            "name": "P",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 128,
      "end": 169,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 136,
        "decorators": [],
        "name": "T02",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 139,
        "end": 169,
        "constraint": {
          "type": "TSUnionType",
          "start": 147,
          "end": 156,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 147,
              "end": 150,
              "literal": {
                "type": "Literal",
                "start": 147,
                "end": 150,
                "raw": "\"a\"",
                "value": "a"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 153,
              "end": 156,
              "literal": {
                "type": "Literal",
                "start": 153,
                "end": 156,
                "raw": "\"b\"",
                "value": "b"
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 142,
          "end": 143,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 159,
          "end": 166,
          "indexType": {
            "type": "TSTypeReference",
            "start": 164,
            "end": 165,
            "typeName": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "decorators": [],
              "name": "P",
              "optional": false
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 159,
            "end": 163,
            "typeName": {
              "type": "Identifier",
              "start": 159,
              "end": 163,
              "decorators": [],
              "name": "Item",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 170,
      "end": 209,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 178,
        "decorators": [],
        "name": "T03",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 181,
        "end": 208,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 189,
          "end": 199,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 195,
            "end": 199,
            "typeName": {
              "type": "Identifier",
              "start": 195,
              "end": 199,
              "decorators": [],
              "name": "Item",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 184,
          "end": 185,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 202,
          "end": 206,
          "typeName": {
            "type": "Identifier",
            "start": 202,
            "end": 206,
            "decorators": [],
            "name": "Date",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 211,
      "end": 253,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 219,
        "decorators": [],
        "name": "T10",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 222,
        "end": 252,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 230,
          "end": 240,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 236,
            "end": 240,
            "typeName": {
              "type": "Identifier",
              "start": 236,
              "end": 240,
              "decorators": [],
              "name": "Item",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 225,
          "end": 226,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 243,
          "end": 250,
          "indexType": {
            "type": "TSTypeReference",
            "start": 248,
            "end": 249,
            "typeName": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
              "decorators": [],
              "name": "P",
              "optional": false
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 243,
            "end": 247,
            "typeName": {
              "type": "Identifier",
              "start": 243,
              "end": 247,
              "decorators": [],
              "name": "Item",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 254,
      "end": 297,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 262,
        "decorators": [],
        "name": "T11",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 265,
        "end": 296,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 273,
          "end": 283,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 279,
            "end": 283,
            "typeName": {
              "type": "Identifier",
              "start": 279,
              "end": 283,
              "decorators": [],
              "name": "Item",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 268,
          "end": 269,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "optional": true,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 287,
          "end": 294,
          "indexType": {
            "type": "TSTypeReference",
            "start": 292,
            "end": 293,
            "typeName": {
              "type": "Identifier",
              "start": 292,
              "end": 293,
              "decorators": [],
              "name": "P",
              "optional": false
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 287,
            "end": 291,
            "typeName": {
              "type": "Identifier",
              "start": 287,
              "end": 291,
              "decorators": [],
              "name": "Item",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 298,
      "end": 349,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 303,
        "end": 306,
        "decorators": [],
        "name": "T12",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 309,
        "end": 348,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 326,
          "end": 336,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 332,
            "end": 336,
            "typeName": {
              "type": "Identifier",
              "start": 332,
              "end": 336,
              "decorators": [],
              "name": "Item",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 321,
          "end": 322,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "readonly": true,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 339,
          "end": 346,
          "indexType": {
            "type": "TSTypeReference",
            "start": 344,
            "end": 345,
            "typeName": {
              "type": "Identifier",
              "start": 344,
              "end": 345,
              "decorators": [],
              "name": "P",
              "optional": false
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 339,
            "end": 343,
            "typeName": {
              "type": "Identifier",
              "start": 339,
              "end": 343,
              "decorators": [],
              "name": "Item",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 350,
      "end": 402,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 358,
        "decorators": [],
        "name": "T13",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 361,
        "end": 401,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 378,
          "end": 388,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 384,
            "end": 388,
            "typeName": {
              "type": "Identifier",
              "start": 384,
              "end": 388,
              "decorators": [],
              "name": "Item",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 373,
          "end": 374,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "optional": true,
        "readonly": true,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 392,
          "end": 399,
          "indexType": {
            "type": "TSTypeReference",
            "start": 397,
            "end": 398,
            "typeName": {
              "type": "Identifier",
              "start": 397,
              "end": 398,
              "decorators": [],
              "name": "P",
              "optional": false
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 392,
            "end": 396,
            "typeName": {
              "type": "Identifier",
              "start": 392,
              "end": 396,
              "decorators": [],
              "name": "Item",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 404,
      "end": 453,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 409,
        "end": 412,
        "decorators": [],
        "name": "T20",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 415,
        "end": 452,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 423,
          "end": 433,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 429,
            "end": 433,
            "typeName": {
              "type": "Identifier",
              "start": 429,
              "end": 433,
              "decorators": [],
              "name": "Item",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 418,
          "end": 419,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 436,
          "end": 450,
          "types": [
            {
              "type": "TSIndexedAccessType",
              "start": 436,
              "end": 443,
              "indexType": {
                "type": "TSTypeReference",
                "start": 441,
                "end": 442,
                "typeName": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 442,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 436,
                "end": 440,
                "typeName": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 440,
                  "decorators": [],
                  "name": "Item",
                  "optional": false
                }
              }
            },
            {
              "type": "TSNullKeyword",
              "start": 446,
              "end": 450
            }
          ]
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 454,
      "end": 503,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 459,
        "end": 462,
        "decorators": [],
        "name": "T21",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 465,
        "end": 502,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 473,
          "end": 483,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 479,
            "end": 483,
            "typeName": {
              "type": "Identifier",
              "start": 479,
              "end": 483,
              "decorators": [],
              "name": "Item",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 468,
          "end": 469,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 486,
          "end": 500,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 491,
            "end": 500,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 492,
                "end": 499,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 497,
                  "end": 498,
                  "typeName": {
                    "type": "Identifier",
                    "start": 497,
                    "end": 498,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 492,
                  "end": 496,
                  "typeName": {
                    "type": "Identifier",
                    "start": 492,
                    "end": 496,
                    "decorators": [],
                    "name": "Item",
                    "optional": false
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 486,
            "end": 491,
            "decorators": [],
            "name": "Array",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 505,
      "end": 543,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 510,
        "end": 513,
        "decorators": [],
        "name": "T30",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 516,
        "end": 542,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 524,
          "end": 533,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 530,
            "end": 533
          }
        },
        "key": {
          "type": "Identifier",
          "start": 519,
          "end": 520,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 536,
          "end": 540
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 544,
      "end": 585,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 549,
        "end": 552,
        "decorators": [],
        "name": "T31",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 555,
        "end": 584,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 563,
          "end": 575,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 569,
            "end": 575
          }
        },
        "key": {
          "type": "Identifier",
          "start": 558,
          "end": 559,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 578,
          "end": 582
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 586,
      "end": 627,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 591,
        "end": 594,
        "decorators": [],
        "name": "T32",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 597,
        "end": 626,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 605,
          "end": 617,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 611,
            "end": 617
          }
        },
        "key": {
          "type": "Identifier",
          "start": 600,
          "end": 601,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 620,
          "end": 624
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 628,
      "end": 670,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 633,
        "end": 636,
        "decorators": [],
        "name": "T33",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 639,
        "end": 669,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 647,
          "end": 660,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 653,
            "end": 660
          }
        },
        "key": {
          "type": "Identifier",
          "start": 642,
          "end": 643,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 663,
          "end": 667
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 671,
      "end": 715,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 676,
        "end": 679,
        "decorators": [],
        "name": "T34",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 682,
        "end": 714,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 690,
          "end": 705,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSUndefinedKeyword",
            "start": 696,
            "end": 705
          }
        },
        "key": {
          "type": "Identifier",
          "start": 685,
          "end": 686,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 708,
          "end": 712
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 716,
      "end": 755,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 721,
        "end": 724,
        "decorators": [],
        "name": "T35",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 727,
        "end": 754,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 735,
          "end": 745,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSNullKeyword",
            "start": 741,
            "end": 745
          }
        },
        "key": {
          "type": "Identifier",
          "start": 730,
          "end": 731,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 748,
          "end": 752
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 756,
      "end": 795,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 761,
        "end": 764,
        "decorators": [],
        "name": "T36",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 767,
        "end": 794,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 775,
          "end": 785,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 781,
            "end": 785
          }
        },
        "key": {
          "type": "Identifier",
          "start": 770,
          "end": 771,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 788,
          "end": 792
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 796,
      "end": 837,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 801,
        "end": 804,
        "decorators": [],
        "name": "T37",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 807,
        "end": 836,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 815,
          "end": 827,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSSymbolKeyword",
            "start": 821,
            "end": 827
          }
        },
        "key": {
          "type": "Identifier",
          "start": 810,
          "end": 811,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 830,
          "end": 834
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 838,
      "end": 878,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 843,
        "end": 846,
        "decorators": [],
        "name": "T38",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 849,
        "end": 877,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 857,
          "end": 868,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSNeverKeyword",
            "start": 863,
            "end": 868
          }
        },
        "key": {
          "type": "Identifier",
          "start": 852,
          "end": 853,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 871,
          "end": 875
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 880,
      "end": 915,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 885,
        "end": 888,
        "decorators": [],
        "name": "T40",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 891,
        "end": 914,
        "constraint": {
          "type": "TSStringKeyword",
          "start": 899,
          "end": 905
        },
        "key": {
          "type": "Identifier",
          "start": 894,
          "end": 895,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 908,
          "end": 912
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 916,
      "end": 954,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 921,
        "end": 924,
        "decorators": [],
        "name": "T43",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 927,
        "end": 953,
        "constraint": {
          "type": "TSUnionType",
          "start": 935,
          "end": 944,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 935,
              "end": 938,
              "literal": {
                "type": "Literal",
                "start": 935,
                "end": 938,
                "raw": "\"a\"",
                "value": "a"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 941,
              "end": 944,
              "literal": {
                "type": "Literal",
                "start": 941,
                "end": 944,
                "raw": "\"b\"",
                "value": "b"
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 930,
          "end": 931,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 947,
          "end": 951
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 955,
      "end": 1005,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 960,
        "end": 963,
        "decorators": [],
        "name": "T44",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 966,
        "end": 1004,
        "constraint": {
          "type": "TSUnionType",
          "start": 974,
          "end": 995,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 974,
              "end": 977,
              "literal": {
                "type": "Literal",
                "start": 974,
                "end": 977,
                "raw": "\"a\"",
                "value": "a"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 980,
              "end": 983,
              "literal": {
                "type": "Literal",
                "start": 980,
                "end": 983,
                "raw": "\"b\"",
                "value": "b"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 986,
              "end": 989,
              "literal": {
                "type": "Literal",
                "start": 986,
                "end": 989,
                "raw": "\"0\"",
                "value": "0"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 992,
              "end": 995,
              "literal": {
                "type": "Literal",
                "start": 992,
                "end": 995,
                "raw": "\"1\"",
                "value": "1"
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 969,
          "end": 970,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 998,
          "end": 1002
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1006,
      "end": 1065,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1011,
        "end": 1014,
        "decorators": [],
        "name": "T47",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1017,
        "end": 1064,
        "constraint": {
          "type": "TSUnionType",
          "start": 1025,
          "end": 1055,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 1025,
              "end": 1031
            },
            {
              "type": "TSLiteralType",
              "start": 1034,
              "end": 1037,
              "literal": {
                "type": "Literal",
                "start": 1034,
                "end": 1037,
                "raw": "\"a\"",
                "value": "a"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1040,
              "end": 1043,
              "literal": {
                "type": "Literal",
                "start": 1040,
                "end": 1043,
                "raw": "\"b\"",
                "value": "b"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1046,
              "end": 1049,
              "literal": {
                "type": "Literal",
                "start": 1046,
                "end": 1049,
                "raw": "\"0\"",
                "value": "0"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 1052,
              "end": 1055,
              "literal": {
                "type": "Literal",
                "start": 1052,
                "end": 1055,
                "raw": "\"1\"",
                "value": "1"
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 1020,
          "end": 1021,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1058,
          "end": 1062
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1067,
      "end": 1120,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1084,
        "end": 1086,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1092,
        "end": 1119,
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 1094,
          "end": 1119,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1102,
            "end": 1110,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1108,
              "end": 1110,
              "typeName": {
                "type": "Identifier",
                "start": 1108,
                "end": 1110,
                "decorators": [],
                "name": "T1",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 1097,
            "end": 1098,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1113,
            "end": 1117
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1086,
        "end": 1090,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1087,
            "end": 1089,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1087,
              "end": 1089,
              "decorators": [],
              "name": "T1",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1121,
      "end": 1189,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1138,
        "end": 1140,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1161,
        "end": 1188,
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 1163,
          "end": 1188,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1171,
            "end": 1179,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1177,
              "end": 1179,
              "typeName": {
                "type": "Identifier",
                "start": 1177,
                "end": 1179,
                "decorators": [],
                "name": "T1",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 1166,
            "end": 1167,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1182,
            "end": 1186
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1140,
        "end": 1159,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1141,
            "end": 1158,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1152,
              "end": 1158
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1141,
              "end": 1143,
              "decorators": [],
              "name": "T1",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1190,
      "end": 1258,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1207,
        "end": 1209,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1230,
        "end": 1257,
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 1232,
          "end": 1257,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1240,
            "end": 1248,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1246,
              "end": 1248,
              "typeName": {
                "type": "Identifier",
                "start": 1246,
                "end": 1248,
                "decorators": [],
                "name": "T1",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 1235,
            "end": 1236,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1251,
            "end": 1255
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1209,
        "end": 1228,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1210,
            "end": 1227,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1221,
              "end": 1227
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1210,
              "end": 1212,
              "decorators": [],
              "name": "T1",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1259,
      "end": 1327,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1276,
        "end": 1278,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1299,
        "end": 1326,
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 1301,
          "end": 1326,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1309,
            "end": 1317,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1315,
              "end": 1317,
              "typeName": {
                "type": "Identifier",
                "start": 1315,
                "end": 1317,
                "decorators": [],
                "name": "T1",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 1304,
            "end": 1305,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1320,
            "end": 1324
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1278,
        "end": 1297,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1279,
            "end": 1296,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1290,
              "end": 1296,
              "typeName": {
                "type": "Identifier",
                "start": 1290,
                "end": 1296,
                "decorators": [],
                "name": "Number",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1279,
              "end": 1281,
              "decorators": [],
              "name": "T1",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1329,
      "end": 1343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1333,
          "end": 1342,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1333,
            "end": 1335,
            "decorators": [],
            "name": "x1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1338,
            "end": 1342,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1338,
              "end": 1340,
              "decorators": [],
              "name": "f1",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1344,
      "end": 1358,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1348,
          "end": 1357,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1348,
            "end": 1350,
            "decorators": [],
            "name": "x2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1353,
            "end": 1357,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1353,
              "end": 1355,
              "decorators": [],
              "name": "f2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1359,
      "end": 1373,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1363,
          "end": 1372,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1363,
            "end": 1365,
            "decorators": [],
            "name": "x3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1368,
            "end": 1372,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1368,
              "end": 1370,
              "decorators": [],
              "name": "f3",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1374,
      "end": 1388,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1378,
          "end": 1387,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1378,
            "end": 1380,
            "decorators": [],
            "name": "x4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1383,
            "end": 1387,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1383,
              "end": 1385,
              "decorators": [],
              "name": "f4",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
