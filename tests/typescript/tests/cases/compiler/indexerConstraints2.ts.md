__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 13,
                "end": 19
              },
              "start": 11,
              "end": 19
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
            "start": 10,
            "end": 20
          }
        ],
        "start": 8,
        "end": 22
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 30
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 40
      },
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 46,
                "end": 52
              },
              "start": 44,
              "end": 52
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
            "start": 43,
            "end": 53
          }
        ],
        "start": 41,
        "end": 55
      },
      "abstract": false,
      "declare": false,
      "start": 23,
      "end": 55
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 79
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 90,
                    "end": 96
                  },
                  "start": 88,
                  "end": 96
                },
                "start": 87,
                "end": 96
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 100
                },
                "typeArguments": null,
                "start": 99,
                "end": 100
              },
              "start": 97,
              "end": 100
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 86,
            "end": 100
          }
        ],
        "start": 80,
        "end": 102
      },
      "abstract": false,
      "declare": false,
      "start": 72,
      "end": 102
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 110
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 120
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 131,
                    "end": 137
                  },
                  "start": 129,
                  "end": 137
                },
                "start": 128,
                "end": 137
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 141
                },
                "typeArguments": null,
                "start": 140,
                "end": 141
              },
              "start": 138,
              "end": 141
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 127,
            "end": 141
          }
        ],
        "start": 121,
        "end": 143
      },
      "abstract": false,
      "declare": false,
      "start": 103,
      "end": 143
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 165
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 176,
                    "end": 182
                  },
                  "start": 174,
                  "end": 182
                },
                "start": 173,
                "end": 182
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 186
                },
                "typeArguments": null,
                "start": 185,
                "end": 186
              },
              "start": 183,
              "end": 186
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 172,
            "end": 186
          }
        ],
        "start": 166,
        "end": 188
      },
      "abstract": false,
      "declare": false,
      "start": 158,
      "end": 188
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 196
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 206
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 217,
                    "end": 223
                  },
                  "start": 215,
                  "end": 223
                },
                "start": 214,
                "end": 223
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 227
                },
                "typeArguments": null,
                "start": 226,
                "end": 227
              },
              "start": 224,
              "end": 227
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 213,
            "end": 227
          }
        ],
        "start": 207,
        "end": 229
      },
      "abstract": false,
      "declare": false,
      "start": 189,
      "end": 229
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 261
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 272,
                    "end": 278
                  },
                  "start": 270,
                  "end": 278
                },
                "start": 269,
                "end": 278
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 281,
                "end": 283
              },
              "start": 279,
              "end": 283
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 268,
            "end": 283
          }
        ],
        "start": 262,
        "end": 285
      },
      "abstract": false,
      "declare": false,
      "start": 254,
      "end": 285
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 293,
        "end": 294
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null,
        "start": 303,
        "end": 304
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 315,
                    "end": 321
                  },
                  "start": 313,
                  "end": 321
                },
                "start": 312,
                "end": 321
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 324,
                  "end": 325
                },
                "typeArguments": null,
                "start": 324,
                "end": 325
              },
              "start": 322,
              "end": 325
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 311,
            "end": 326
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 335,
                    "end": 341
                  },
                  "start": 333,
                  "end": 341
                },
                "start": 332,
                "end": 341
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 345
                },
                "typeArguments": null,
                "start": 344,
                "end": 345
              },
              "start": 342,
              "end": 345
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 331,
            "end": 346
          }
        ],
        "start": 305,
        "end": 348
      },
      "abstract": false,
      "declare": false,
      "start": 287,
      "end": 348
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AliasedNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 369
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 372,
        "end": 378
      },
      "declare": false,
      "start": 351,
      "end": 379
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 392
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AliasedNumber",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 403,
                      "end": 416
                    },
                    "typeArguments": null,
                    "start": 403,
                    "end": 416
                  },
                  "start": 401,
                  "end": 416
                },
                "start": 400,
                "end": 416
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 419,
                  "end": 420
                },
                "typeArguments": null,
                "start": 419,
                "end": 420
              },
              "start": 417,
              "end": 420
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 399,
            "end": 421
          }
        ],
        "start": 393,
        "end": 423
      },
      "declare": false,
      "start": 381,
      "end": 423
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AliasedString",
        "optional": false,
        "typeAnnotation": null,
        "start": 430,
        "end": 443
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 446,
        "end": 452
      },
      "declare": false,
      "start": 425,
      "end": 453
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 465,
        "end": 466
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AliasedString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 477,
                      "end": 490
                    },
                    "typeArguments": null,
                    "start": 477,
                    "end": 490
                  },
                  "start": 475,
                  "end": 490
                },
                "start": 474,
                "end": 490
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 493,
                  "end": 494
                },
                "typeArguments": null,
                "start": 493,
                "end": 494
              },
              "start": 491,
              "end": 494
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 473,
            "end": 495
          }
        ],
        "start": 467,
        "end": 497
      },
      "declare": false,
      "start": 455,
      "end": 497
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AliasedBoolean",
        "optional": false,
        "typeAnnotation": null,
        "start": 504,
        "end": 518
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSBooleanKeyword",
        "start": 521,
        "end": 528
      },
      "declare": false,
      "start": 499,
      "end": 529
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 541,
        "end": 542
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
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
                      "name": "AliasedBoolean",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 553,
                      "end": 567
                    },
                    "typeArguments": null,
                    "start": 553,
                    "end": 567
                  },
                  "start": 551,
                  "end": 567
                },
                "start": 550,
                "end": 567
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 571
                },
                "typeArguments": null,
                "start": 570,
                "end": 571
              },
              "start": 568,
              "end": 571
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 549,
            "end": 572
          }
        ],
        "start": 543,
        "end": 574
      },
      "declare": false,
      "start": 531,
      "end": 574
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IndexableUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 581,
        "end": 595
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 598,
              "end": 603
            },
            "start": 598,
            "end": 603
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 606,
              "end": 611
            },
            "start": 606,
            "end": 611
          }
        ],
        "start": 598,
        "end": 611
      },
      "declare": false,
      "start": 576,
      "end": 612
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O",
        "optional": false,
        "typeAnnotation": null,
        "start": 624,
        "end": 625
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IndexableUnion",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 636,
                      "end": 650
                    },
                    "typeArguments": null,
                    "start": 636,
                    "end": 650
                  },
                  "start": 634,
                  "end": 650
                },
                "start": 633,
                "end": 650
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 653,
                  "end": 654
                },
                "typeArguments": null,
                "start": 653,
                "end": 654
              },
              "start": 651,
              "end": 654
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 632,
            "end": 655
          }
        ],
        "start": 626,
        "end": 657
      },
      "declare": false,
      "start": 614,
      "end": 657
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonIndexableUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 664,
        "end": 681
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSBooleanKeyword",
            "start": 684,
            "end": 691
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 694,
            "end": 696
          }
        ],
        "start": 684,
        "end": 696
      },
      "declare": false,
      "start": 659,
      "end": 697
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "P",
        "optional": false,
        "typeAnnotation": null,
        "start": 709,
        "end": 710
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NonIndexableUnion",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 721,
                      "end": 738
                    },
                    "typeArguments": null,
                    "start": 721,
                    "end": 738
                  },
                  "start": 719,
                  "end": 738
                },
                "start": 718,
                "end": 738
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 741,
                  "end": 742
                },
                "typeArguments": null,
                "start": 741,
                "end": 742
              },
              "start": 739,
              "end": 742
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 717,
            "end": 743
          }
        ],
        "start": 711,
        "end": 745
      },
      "declare": false,
      "start": 699,
      "end": 745
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonIndexableUnion2",
        "optional": false,
        "typeAnnotation": null,
        "start": 752,
        "end": 770
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
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
        ],
        "start": 773,
        "end": 788
      },
      "declare": false,
      "start": 747,
      "end": 789
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null,
        "start": 801,
        "end": 802
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NonIndexableUnion2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 813,
                      "end": 831
                    },
                    "typeArguments": null,
                    "start": 813,
                    "end": 831
                  },
                  "start": 811,
                  "end": 831
                },
                "start": 810,
                "end": 831
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 834,
                  "end": 835
                },
                "typeArguments": null,
                "start": 834,
                "end": 835
              },
              "start": 832,
              "end": 835
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 809,
            "end": 836
          }
        ],
        "start": 803,
        "end": 838
      },
      "declare": false,
      "start": 791,
      "end": 838
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonIndexableUnion3",
        "optional": false,
        "typeAnnotation": null,
        "start": 845,
        "end": 863
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 866,
              "end": 871
            },
            "start": 866,
            "end": 871
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 874,
              "end": 876
            },
            "start": 874,
            "end": 876
          }
        ],
        "start": 866,
        "end": 876
      },
      "declare": false,
      "start": 840,
      "end": 877
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 889,
        "end": 890
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NonIndexableUnion3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 901,
                      "end": 919
                    },
                    "typeArguments": null,
                    "start": 901,
                    "end": 919
                  },
                  "start": 899,
                  "end": 919
                },
                "start": 898,
                "end": 919
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 922,
                  "end": 923
                },
                "typeArguments": null,
                "start": 922,
                "end": 923
              },
              "start": 920,
              "end": 923
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 897,
            "end": 924
          }
        ],
        "start": 891,
        "end": 926
      },
      "declare": false,
      "start": 879,
      "end": 926
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 938,
        "end": 939
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "foo",
                          "raw": "\"foo\"",
                          "start": 950,
                          "end": 955
                        },
                        "start": 950,
                        "end": 955
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "bar",
                          "raw": "\"bar\"",
                          "start": 958,
                          "end": 963
                        },
                        "start": 958,
                        "end": 963
                      }
                    ],
                    "start": 950,
                    "end": 963
                  },
                  "start": 948,
                  "end": 963
                },
                "start": 947,
                "end": 963
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 966,
                  "end": 967
                },
                "typeArguments": null,
                "start": 966,
                "end": 967
              },
              "start": 964,
              "end": 967
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 946,
            "end": 968
          }
        ],
        "start": 940,
        "end": 970
      },
      "declare": false,
      "start": 928,
      "end": 970
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Key",
        "optional": false,
        "typeAnnotation": null,
        "start": 977,
        "end": 980
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 983,
        "end": 989
      },
      "declare": false,
      "start": 972,
      "end": 990
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 1001,
        "end": 1002
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1015,
                      "end": 1018
                    },
                    "typeArguments": null,
                    "start": 1015,
                    "end": 1018
                  },
                  "start": 1013,
                  "end": 1018
                },
                "start": 1010,
                "end": 1018
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1009,
            "end": 1019
          }
        ],
        "start": 1003,
        "end": 1021
      },
      "declare": false,
      "start": 991,
      "end": 1021
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1021
}
```
