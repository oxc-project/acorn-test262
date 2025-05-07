__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1021,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 22,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 20,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 19,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 13,
                "end": 19
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 55,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 55,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 43,
            "end": 53,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 52,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 46,
                "end": 52
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 72,
      "end": 102,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 80,
        "end": 102,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 86,
            "end": 100,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 87,
                "end": 96,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 88,
                  "end": 96,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 90,
                    "end": 96
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 100,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 99,
                "end": 100,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 79,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 103,
      "end": 143,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 121,
        "end": 143,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 127,
            "end": 141,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 128,
                "end": 137,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 129,
                  "end": 137,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 131,
                    "end": 137
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 140,
                "end": 141,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 110,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 119,
        "end": 120,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 158,
      "end": 188,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 166,
        "end": 188,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 172,
            "end": 186,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 173,
                "end": 182,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 174,
                  "end": 182,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 176,
                    "end": 182
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 186,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 185,
                "end": 186,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 165,
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 189,
      "end": 229,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 207,
        "end": 229,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 213,
            "end": 227,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 214,
                "end": 223,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 215,
                  "end": 223,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 217,
                    "end": 223
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 227,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 226,
                "end": 227,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 196,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 205,
        "end": 206,
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 254,
      "end": 285,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 262,
        "end": 285,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 268,
            "end": 283,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 269,
                "end": 278,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 270,
                  "end": 278,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 272,
                    "end": 278
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 279,
              "end": 283,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 281,
                "end": 283,
                "members": []
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 261,
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 287,
      "end": 348,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 305,
        "end": 348,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 311,
            "end": 326,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 312,
                "end": 321,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 313,
                  "end": 321,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 315,
                    "end": 321
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 322,
              "end": 325,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 324,
                "end": 325,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 325,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 331,
            "end": 346,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 332,
                "end": 341,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 333,
                  "end": 341,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 335,
                    "end": 341
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 342,
              "end": 345,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 344,
                "end": 345,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 345,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 293,
        "end": 294,
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 303,
        "end": 304,
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 351,
      "end": 379,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 369,
        "decorators": [],
        "name": "AliasedNumber",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 372,
        "end": 378
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 381,
      "end": 423,
      "body": {
        "type": "TSInterfaceBody",
        "start": 393,
        "end": 423,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 399,
            "end": 421,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 400,
                "end": 416,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 401,
                  "end": 416,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 403,
                    "end": 416,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 403,
                      "end": 416,
                      "decorators": [],
                      "name": "AliasedNumber",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 417,
              "end": 420,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 419,
                "end": 420,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 419,
                  "end": 420,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 391,
        "end": 392,
        "decorators": [],
        "name": "L",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 425,
      "end": 453,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 430,
        "end": 443,
        "decorators": [],
        "name": "AliasedString",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 446,
        "end": 452
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 455,
      "end": 497,
      "body": {
        "type": "TSInterfaceBody",
        "start": 467,
        "end": 497,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 473,
            "end": 495,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 474,
                "end": 490,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 475,
                  "end": 490,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 477,
                    "end": 490,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 477,
                      "end": 490,
                      "decorators": [],
                      "name": "AliasedString",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 491,
              "end": 494,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 493,
                "end": 494,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 494,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 465,
        "end": 466,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 499,
      "end": 529,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 504,
        "end": 518,
        "decorators": [],
        "name": "AliasedBoolean",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSBooleanKeyword",
        "start": 521,
        "end": 528
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 531,
      "end": 574,
      "body": {
        "type": "TSInterfaceBody",
        "start": 543,
        "end": 574,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 549,
            "end": 572,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 550,
                "end": 567,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 551,
                  "end": 567,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 553,
                    "end": 567,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 553,
                      "end": 567,
                      "decorators": [],
                      "name": "AliasedBoolean",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 568,
              "end": 571,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 570,
                "end": 571,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 570,
                  "end": 571,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 541,
        "end": 542,
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 576,
      "end": 612,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 581,
        "end": 595,
        "decorators": [],
        "name": "IndexableUnion",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 598,
        "end": 611,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 598,
            "end": 603,
            "literal": {
              "type": "Literal",
              "start": 598,
              "end": 603,
              "raw": "\"foo\"",
              "value": "foo",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSLiteralType",
            "start": 606,
            "end": 611,
            "literal": {
              "type": "Literal",
              "start": 606,
              "end": 611,
              "raw": "\"bar\"",
              "value": "bar",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 614,
      "end": 657,
      "body": {
        "type": "TSInterfaceBody",
        "start": 626,
        "end": 657,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 632,
            "end": 655,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 633,
                "end": 650,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 634,
                  "end": 650,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 636,
                    "end": 650,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 636,
                      "end": 650,
                      "decorators": [],
                      "name": "IndexableUnion",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 651,
              "end": 654,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 653,
                "end": 654,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 653,
                  "end": 654,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 624,
        "end": 625,
        "decorators": [],
        "name": "O",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 659,
      "end": 697,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 664,
        "end": 681,
        "decorators": [],
        "name": "NonIndexableUnion",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 684,
        "end": 696,
        "types": [
          {
            "type": "TSBooleanKeyword",
            "start": 684,
            "end": 691
          },
          {
            "type": "TSTypeLiteral",
            "start": 694,
            "end": 696,
            "members": []
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 699,
      "end": 745,
      "body": {
        "type": "TSInterfaceBody",
        "start": 711,
        "end": 745,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 717,
            "end": 743,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 718,
                "end": 738,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 719,
                  "end": 738,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 721,
                    "end": 738,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 721,
                      "end": 738,
                      "decorators": [],
                      "name": "NonIndexableUnion",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 739,
              "end": 742,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 741,
                "end": 742,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 742,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 709,
        "end": 710,
        "decorators": [],
        "name": "P",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 747,
      "end": 789,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 752,
        "end": 770,
        "decorators": [],
        "name": "NonIndexableUnion2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 773,
        "end": 788,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 773,
            "end": 779
          },
          {
            "type": "TSNumberKeyword",
            "start": 782,
            "end": 788
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 791,
      "end": 838,
      "body": {
        "type": "TSInterfaceBody",
        "start": 803,
        "end": 838,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 809,
            "end": 836,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 810,
                "end": 831,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 811,
                  "end": 831,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 813,
                    "end": 831,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 813,
                      "end": 831,
                      "decorators": [],
                      "name": "NonIndexableUnion2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 832,
              "end": 835,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 834,
                "end": 835,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 834,
                  "end": 835,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 801,
        "end": 802,
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 840,
      "end": 877,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 845,
        "end": 863,
        "decorators": [],
        "name": "NonIndexableUnion3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 866,
        "end": 876,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 866,
            "end": 871,
            "literal": {
              "type": "Literal",
              "start": 866,
              "end": 871,
              "raw": "\"foo\"",
              "value": "foo",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSLiteralType",
            "start": 874,
            "end": 876,
            "literal": {
              "type": "Literal",
              "start": 874,
              "end": 876,
              "raw": "42",
              "value": 42,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 879,
      "end": 926,
      "body": {
        "type": "TSInterfaceBody",
        "start": 891,
        "end": 926,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 897,
            "end": 924,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 898,
                "end": 919,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 899,
                  "end": 919,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 901,
                    "end": 919,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 901,
                      "end": 919,
                      "decorators": [],
                      "name": "NonIndexableUnion3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 920,
              "end": 923,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 922,
                "end": 923,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 922,
                  "end": 923,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 889,
        "end": 890,
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 928,
      "end": 970,
      "body": {
        "type": "TSInterfaceBody",
        "start": 940,
        "end": 970,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 946,
            "end": 968,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 947,
                "end": 963,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 948,
                  "end": 963,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 950,
                    "end": 963,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 950,
                        "end": 955,
                        "literal": {
                          "type": "Literal",
                          "start": 950,
                          "end": 955,
                          "raw": "\"foo\"",
                          "value": "foo",
                          "regex": null,
                          "bigint": null
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 958,
                        "end": 963,
                        "literal": {
                          "type": "Literal",
                          "start": 958,
                          "end": 963,
                          "raw": "\"bar\"",
                          "value": "bar",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 964,
              "end": 967,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 966,
                "end": 967,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 966,
                  "end": 967,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 938,
        "end": 939,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 972,
      "end": 990,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 977,
        "end": 980,
        "decorators": [],
        "name": "Key",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 983,
        "end": 989
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 991,
      "end": 1021,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1003,
        "end": 1021,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1009,
            "end": 1019,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1010,
                "end": 1018,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1013,
                  "end": 1018,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1015,
                    "end": 1018,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1015,
                      "end": 1018,
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1001,
        "end": 1002,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
