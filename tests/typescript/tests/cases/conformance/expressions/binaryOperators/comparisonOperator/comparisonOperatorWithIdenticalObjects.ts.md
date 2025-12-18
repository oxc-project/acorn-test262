__ESTREE_TEST__:AST:
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
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
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
              "start": 22,
              "end": 23
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              },
              "start": 23,
              "end": 31
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 15,
            "end": 32
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 37,
            "end": 54
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 69,
                "end": 76
              },
              "start": 67,
              "end": 76
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 59,
            "end": 77
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 92,
                "end": 95
              },
              "start": 90,
              "end": 95
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 82,
            "end": 96
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 109
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 111,
                  "end": 117
                },
                "typeArguments": null,
                "start": 111,
                "end": 117
              },
              "start": 109,
              "end": 117
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 101,
            "end": 118
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 132
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 136,
                      "end": 142
                    },
                    "start": 134,
                    "end": 142
                  },
                  "start": 133,
                  "end": 142
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 145,
                  "end": 151
                },
                "start": 143,
                "end": 151
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 169,
                      "end": 173
                    },
                    "start": 162,
                    "end": 174
                  }
                ],
                "start": 152,
                "end": 180
              },
              "expression": false,
              "start": 132,
              "end": 180
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 123,
            "end": 180
          }
        ],
        "start": 9,
        "end": 182
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 182
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 191
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
              "start": 205,
              "end": 206
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 208,
                "end": 214
              },
              "start": 206,
              "end": 214
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 198,
            "end": 215
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 228
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 230,
                "end": 236
              },
              "start": 228,
              "end": 236
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 220,
            "end": 237
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 250
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 252,
                "end": 259
              },
              "start": 250,
              "end": 259
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 242,
            "end": 260
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 273
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 275,
                "end": 278
              },
              "start": 273,
              "end": 278
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 265,
            "end": 279
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 292
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 300
                },
                "typeArguments": null,
                "start": 294,
                "end": 300
              },
              "start": 292,
              "end": 300
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 284,
            "end": 301
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 313,
              "end": 315
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 319,
                      "end": 325
                    },
                    "start": 317,
                    "end": 325
                  },
                  "start": 316,
                  "end": 325
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 328,
                  "end": 334
                },
                "start": 326,
                "end": 334
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 352,
                      "end": 356
                    },
                    "start": 345,
                    "end": 357
                  }
                ],
                "start": 335,
                "end": 363
              },
              "expression": false,
              "start": 315,
              "end": 363
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 306,
            "end": 363
          }
        ],
        "start": 192,
        "end": 365
      },
      "abstract": false,
      "declare": false,
      "start": 183,
      "end": 365
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 377
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
              "start": 392,
              "end": 393
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 395,
                "end": 401
              },
              "start": 393,
              "end": 401
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 384,
            "end": 402
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 415,
              "end": 417
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 421,
                      "end": 427
                    },
                    "start": 419,
                    "end": 427
                  },
                  "start": 418,
                  "end": 427
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 430,
                  "end": 436
                },
                "start": 428,
                "end": 436
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 454,
                      "end": 458
                    },
                    "start": 447,
                    "end": 459
                  }
                ],
                "start": 437,
                "end": 465
              },
              "expression": false,
              "start": 417,
              "end": 465
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 407,
            "end": 465
          }
        ],
        "start": 378,
        "end": 467
      },
      "abstract": false,
      "declare": false,
      "start": 367,
      "end": 467
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 474,
        "end": 476
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 485,
        "end": 489
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 490,
        "end": 493
      },
      "abstract": false,
      "declare": false,
      "start": 468,
      "end": 493
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 500,
        "end": 502
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 511,
        "end": 515
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 516,
        "end": 519
      },
      "abstract": false,
      "declare": false,
      "start": 494,
      "end": 519
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 531,
        "end": 533
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 537
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 541,
                    "end": 547
                  },
                  "start": 539,
                  "end": 547
                },
                "start": 538,
                "end": 547
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 550,
                "end": 556
              },
              "start": 548,
              "end": 556
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 536,
            "end": 557
          }
        ],
        "start": 534,
        "end": 559
      },
      "declare": false,
      "start": 521,
      "end": 559
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null,
        "start": 570,
        "end": 572
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 575,
              "end": 576
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 580,
                    "end": 586
                  },
                  "start": 578,
                  "end": 586
                },
                "start": 577,
                "end": 586
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 589,
                "end": 595
              },
              "start": 587,
              "end": 595
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 575,
            "end": 596
          }
        ],
        "start": 573,
        "end": 598
      },
      "declare": false,
      "start": 560,
      "end": 598
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A4",
        "optional": false,
        "typeAnnotation": null,
        "start": 610,
        "end": 612
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 623,
                    "end": 629
                  },
                  "start": 621,
                  "end": 629
                },
                "start": 620,
                "end": 629
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 632,
                  "end": 634
                },
                "typeArguments": null,
                "start": 632,
                "end": 634
              },
              "start": 630,
              "end": 634
            },
            "start": 615,
            "end": 635
          }
        ],
        "start": 613,
        "end": 637
      },
      "declare": false,
      "start": 600,
      "end": 637
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B4",
        "optional": false,
        "typeAnnotation": null,
        "start": 648,
        "end": 650
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 661,
                    "end": 667
                  },
                  "start": 659,
                  "end": 667
                },
                "start": 658,
                "end": 667
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 670,
                  "end": 672
                },
                "typeArguments": null,
                "start": 670,
                "end": 672
              },
              "start": 668,
              "end": 672
            },
            "start": 653,
            "end": 673
          }
        ],
        "start": 651,
        "end": 675
      },
      "declare": false,
      "start": 638,
      "end": 675
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A5",
        "optional": false,
        "typeAnnotation": null,
        "start": 687,
        "end": 689
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 696,
                    "end": 702
                  },
                  "start": 694,
                  "end": 702
                },
                "start": 693,
                "end": 702
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 705,
                "end": 711
              },
              "start": 703,
              "end": 711
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 692,
            "end": 712
          }
        ],
        "start": 690,
        "end": 714
      },
      "declare": false,
      "start": 677,
      "end": 714
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B5",
        "optional": false,
        "typeAnnotation": null,
        "start": 725,
        "end": 727
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 734,
                    "end": 740
                  },
                  "start": 732,
                  "end": 740
                },
                "start": 731,
                "end": 740
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 743,
                "end": 749
              },
              "start": 741,
              "end": 749
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 730,
            "end": 750
          }
        ],
        "start": 728,
        "end": 752
      },
      "declare": false,
      "start": 715,
      "end": 752
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A6",
        "optional": false,
        "typeAnnotation": null,
        "start": 764,
        "end": 766
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 773,
                    "end": 779
                  },
                  "start": 771,
                  "end": 779
                },
                "start": 770,
                "end": 779
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 782,
                "end": 788
              },
              "start": 780,
              "end": 788
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 769,
            "end": 789
          }
        ],
        "start": 767,
        "end": 791
      },
      "declare": false,
      "start": 754,
      "end": 791
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B6",
        "optional": false,
        "typeAnnotation": null,
        "start": 802,
        "end": 804
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 811,
                    "end": 817
                  },
                  "start": 809,
                  "end": 817
                },
                "start": 808,
                "end": 817
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 820,
                "end": 826
              },
              "start": 818,
              "end": 826
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 807,
            "end": 827
          }
        ],
        "start": 805,
        "end": 829
      },
      "declare": false,
      "start": 792,
      "end": 829
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 839,
                  "end": 841
                },
                "typeArguments": null,
                "start": 839,
                "end": 841
              },
              "start": 837,
              "end": 841
            },
            "start": 835,
            "end": 841
          },
          "init": null,
          "definite": false,
          "start": 835,
          "end": 841
        }
      ],
      "declare": false,
      "start": 831,
      "end": 842
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 851,
                  "end": 853
                },
                "typeArguments": null,
                "start": 851,
                "end": 853
              },
              "start": 849,
              "end": 853
            },
            "start": 847,
            "end": 853
          },
          "init": null,
          "definite": false,
          "start": 847,
          "end": 853
        }
      ],
      "declare": false,
      "start": 843,
      "end": 854
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 863,
                  "end": 865
                },
                "typeArguments": null,
                "start": 863,
                "end": 865
              },
              "start": 861,
              "end": 865
            },
            "start": 859,
            "end": 865
          },
          "init": null,
          "definite": false,
          "start": 859,
          "end": 865
        }
      ],
      "declare": false,
      "start": 855,
      "end": 866
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 875,
                  "end": 877
                },
                "typeArguments": null,
                "start": 875,
                "end": 877
              },
              "start": 873,
              "end": 877
            },
            "start": 871,
            "end": 877
          },
          "init": null,
          "definite": false,
          "start": 871,
          "end": 877
        }
      ],
      "declare": false,
      "start": 867,
      "end": 878
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 887,
                  "end": 889
                },
                "typeArguments": null,
                "start": 887,
                "end": 889
              },
              "start": 885,
              "end": 889
            },
            "start": 883,
            "end": 889
          },
          "init": null,
          "definite": false,
          "start": 883,
          "end": 889
        }
      ],
      "declare": false,
      "start": 879,
      "end": 890
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 899,
                  "end": 901
                },
                "typeArguments": null,
                "start": 899,
                "end": 901
              },
              "start": 897,
              "end": 901
            },
            "start": 895,
            "end": 901
          },
          "init": null,
          "definite": false,
          "start": 895,
          "end": 901
        }
      ],
      "declare": false,
      "start": 891,
      "end": 902
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 912,
                  "end": 914
                },
                "typeArguments": null,
                "start": 912,
                "end": 914
              },
              "start": 910,
              "end": 914
            },
            "start": 908,
            "end": 914
          },
          "init": null,
          "definite": false,
          "start": 908,
          "end": 914
        }
      ],
      "declare": false,
      "start": 904,
      "end": 915
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 924,
                  "end": 926
                },
                "typeArguments": null,
                "start": 924,
                "end": 926
              },
              "start": 922,
              "end": 926
            },
            "start": 920,
            "end": 926
          },
          "init": null,
          "definite": false,
          "start": 920,
          "end": 926
        }
      ],
      "declare": false,
      "start": 916,
      "end": 927
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 936,
                  "end": 938
                },
                "typeArguments": null,
                "start": 936,
                "end": 938
              },
              "start": 934,
              "end": 938
            },
            "start": 932,
            "end": 938
          },
          "init": null,
          "definite": false,
          "start": 932,
          "end": 938
        }
      ],
      "declare": false,
      "start": 928,
      "end": 939
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 948,
                  "end": 950
                },
                "typeArguments": null,
                "start": 948,
                "end": 950
              },
              "start": 946,
              "end": 950
            },
            "start": 944,
            "end": 950
          },
          "init": null,
          "definite": false,
          "start": 944,
          "end": 950
        }
      ],
      "declare": false,
      "start": 940,
      "end": 951
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 960,
                  "end": 962
                },
                "typeArguments": null,
                "start": 960,
                "end": 962
              },
              "start": 958,
              "end": 962
            },
            "start": 956,
            "end": 962
          },
          "init": null,
          "definite": false,
          "start": 956,
          "end": 962
        }
      ],
      "declare": false,
      "start": 952,
      "end": 963
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 972,
                  "end": 974
                },
                "typeArguments": null,
                "start": 972,
                "end": 974
              },
              "start": 970,
              "end": 974
            },
            "start": 968,
            "end": 974
          },
          "init": null,
          "definite": false,
          "start": 968,
          "end": 974
        }
      ],
      "declare": false,
      "start": 964,
      "end": 975
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "base1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 988,
                  "end": 992
                },
                "typeArguments": null,
                "start": 988,
                "end": 992
              },
              "start": 986,
              "end": 992
            },
            "start": 981,
            "end": 992
          },
          "init": null,
          "definite": false,
          "start": 981,
          "end": 992
        }
      ],
      "declare": false,
      "start": 977,
      "end": 993
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "base2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1005,
                  "end": 1009
                },
                "typeArguments": null,
                "start": 1005,
                "end": 1009
              },
              "start": 1003,
              "end": 1009
            },
            "start": 998,
            "end": 1009
          },
          "init": null,
          "definite": false,
          "start": 998,
          "end": 1009
        }
      ],
      "declare": false,
      "start": 994,
      "end": 1010
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1030,
            "end": 1034
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1037,
              "end": 1039
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1042,
              "end": 1044
            },
            "start": 1037,
            "end": 1044
          },
          "definite": false,
          "start": 1030,
          "end": 1044
        }
      ],
      "declare": false,
      "start": 1026,
      "end": 1045
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1050,
            "end": 1054
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1057,
              "end": 1062
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1065,
              "end": 1070
            },
            "start": 1057,
            "end": 1070
          },
          "definite": false,
          "start": 1050,
          "end": 1070
        }
      ],
      "declare": false,
      "start": 1046,
      "end": 1071
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1076,
            "end": 1080
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1083,
              "end": 1085
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1088,
              "end": 1090
            },
            "start": 1083,
            "end": 1090
          },
          "definite": false,
          "start": 1076,
          "end": 1090
        }
      ],
      "declare": false,
      "start": 1072,
      "end": 1091
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1096,
            "end": 1100
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1103,
              "end": 1105
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1108,
              "end": 1110
            },
            "start": 1103,
            "end": 1110
          },
          "definite": false,
          "start": 1096,
          "end": 1110
        }
      ],
      "declare": false,
      "start": 1092,
      "end": 1111
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1116,
            "end": 1120
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1123,
              "end": 1125
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1128,
              "end": 1130
            },
            "start": 1123,
            "end": 1130
          },
          "definite": false,
          "start": 1116,
          "end": 1130
        }
      ],
      "declare": false,
      "start": 1112,
      "end": 1131
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1136,
            "end": 1140
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1143,
              "end": 1145
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1148,
              "end": 1150
            },
            "start": 1143,
            "end": 1150
          },
          "definite": false,
          "start": 1136,
          "end": 1150
        }
      ],
      "declare": false,
      "start": 1132,
      "end": 1151
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1156,
            "end": 1160
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1163,
              "end": 1165
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1168,
              "end": 1170
            },
            "start": 1163,
            "end": 1170
          },
          "definite": false,
          "start": 1156,
          "end": 1170
        }
      ],
      "declare": false,
      "start": 1152,
      "end": 1171
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1177,
            "end": 1181
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1184,
              "end": 1186
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1189,
              "end": 1191
            },
            "start": 1184,
            "end": 1191
          },
          "definite": false,
          "start": 1177,
          "end": 1191
        }
      ],
      "declare": false,
      "start": 1173,
      "end": 1192
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1197,
            "end": 1201
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1204,
              "end": 1209
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1212,
              "end": 1217
            },
            "start": 1204,
            "end": 1217
          },
          "definite": false,
          "start": 1197,
          "end": 1217
        }
      ],
      "declare": false,
      "start": 1193,
      "end": 1218
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1223,
            "end": 1227
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1230,
              "end": 1232
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1235,
              "end": 1237
            },
            "start": 1230,
            "end": 1237
          },
          "definite": false,
          "start": 1223,
          "end": 1237
        }
      ],
      "declare": false,
      "start": 1219,
      "end": 1238
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1243,
            "end": 1247
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1250,
              "end": 1252
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1255,
              "end": 1257
            },
            "start": 1250,
            "end": 1257
          },
          "definite": false,
          "start": 1243,
          "end": 1257
        }
      ],
      "declare": false,
      "start": 1239,
      "end": 1258
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1263,
            "end": 1267
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1270,
              "end": 1272
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1275,
              "end": 1277
            },
            "start": 1270,
            "end": 1277
          },
          "definite": false,
          "start": 1263,
          "end": 1277
        }
      ],
      "declare": false,
      "start": 1259,
      "end": 1278
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1283,
            "end": 1287
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1290,
              "end": 1292
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1295,
              "end": 1297
            },
            "start": 1290,
            "end": 1297
          },
          "definite": false,
          "start": 1283,
          "end": 1297
        }
      ],
      "declare": false,
      "start": 1279,
      "end": 1298
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1303,
            "end": 1307
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1310,
              "end": 1312
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1315,
              "end": 1317
            },
            "start": 1310,
            "end": 1317
          },
          "definite": false,
          "start": 1303,
          "end": 1317
        }
      ],
      "declare": false,
      "start": 1299,
      "end": 1318
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1338,
            "end": 1342
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1345,
              "end": 1347
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1350,
              "end": 1352
            },
            "start": 1345,
            "end": 1352
          },
          "definite": false,
          "start": 1338,
          "end": 1352
        }
      ],
      "declare": false,
      "start": 1334,
      "end": 1353
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1358,
            "end": 1362
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1365,
              "end": 1370
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1373,
              "end": 1378
            },
            "start": 1365,
            "end": 1378
          },
          "definite": false,
          "start": 1358,
          "end": 1378
        }
      ],
      "declare": false,
      "start": 1354,
      "end": 1379
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1384,
            "end": 1388
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1391,
              "end": 1393
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1396,
              "end": 1398
            },
            "start": 1391,
            "end": 1398
          },
          "definite": false,
          "start": 1384,
          "end": 1398
        }
      ],
      "declare": false,
      "start": 1380,
      "end": 1399
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1404,
            "end": 1408
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1411,
              "end": 1413
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1416,
              "end": 1418
            },
            "start": 1411,
            "end": 1418
          },
          "definite": false,
          "start": 1404,
          "end": 1418
        }
      ],
      "declare": false,
      "start": 1400,
      "end": 1419
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1424,
            "end": 1428
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1431,
              "end": 1433
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1436,
              "end": 1438
            },
            "start": 1431,
            "end": 1438
          },
          "definite": false,
          "start": 1424,
          "end": 1438
        }
      ],
      "declare": false,
      "start": 1420,
      "end": 1439
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1444,
            "end": 1448
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1451,
              "end": 1453
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1456,
              "end": 1458
            },
            "start": 1451,
            "end": 1458
          },
          "definite": false,
          "start": 1444,
          "end": 1458
        }
      ],
      "declare": false,
      "start": 1440,
      "end": 1459
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1464,
            "end": 1468
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1471,
              "end": 1473
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1476,
              "end": 1478
            },
            "start": 1471,
            "end": 1478
          },
          "definite": false,
          "start": 1464,
          "end": 1478
        }
      ],
      "declare": false,
      "start": 1460,
      "end": 1479
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1485,
            "end": 1489
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1492,
              "end": 1494
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1497,
              "end": 1499
            },
            "start": 1492,
            "end": 1499
          },
          "definite": false,
          "start": 1485,
          "end": 1499
        }
      ],
      "declare": false,
      "start": 1481,
      "end": 1500
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1505,
            "end": 1509
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1512,
              "end": 1517
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1520,
              "end": 1525
            },
            "start": 1512,
            "end": 1525
          },
          "definite": false,
          "start": 1505,
          "end": 1525
        }
      ],
      "declare": false,
      "start": 1501,
      "end": 1526
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1531,
            "end": 1535
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1538,
              "end": 1540
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1543,
              "end": 1545
            },
            "start": 1538,
            "end": 1545
          },
          "definite": false,
          "start": 1531,
          "end": 1545
        }
      ],
      "declare": false,
      "start": 1527,
      "end": 1546
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1551,
            "end": 1555
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1558,
              "end": 1560
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1563,
              "end": 1565
            },
            "start": 1558,
            "end": 1565
          },
          "definite": false,
          "start": 1551,
          "end": 1565
        }
      ],
      "declare": false,
      "start": 1547,
      "end": 1566
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1571,
            "end": 1575
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1578,
              "end": 1580
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1583,
              "end": 1585
            },
            "start": 1578,
            "end": 1585
          },
          "definite": false,
          "start": 1571,
          "end": 1585
        }
      ],
      "declare": false,
      "start": 1567,
      "end": 1586
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1591,
            "end": 1595
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1598,
              "end": 1600
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1603,
              "end": 1605
            },
            "start": 1598,
            "end": 1605
          },
          "definite": false,
          "start": 1591,
          "end": 1605
        }
      ],
      "declare": false,
      "start": 1587,
      "end": 1606
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1611,
            "end": 1615
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1618,
              "end": 1620
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1623,
              "end": 1625
            },
            "start": 1618,
            "end": 1625
          },
          "definite": false,
          "start": 1611,
          "end": 1625
        }
      ],
      "declare": false,
      "start": 1607,
      "end": 1626
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1647,
            "end": 1651
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1654,
              "end": 1656
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1660,
              "end": 1662
            },
            "start": 1654,
            "end": 1662
          },
          "definite": false,
          "start": 1647,
          "end": 1662
        }
      ],
      "declare": false,
      "start": 1643,
      "end": 1663
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1668,
            "end": 1672
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1675,
              "end": 1680
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1684,
              "end": 1689
            },
            "start": 1675,
            "end": 1689
          },
          "definite": false,
          "start": 1668,
          "end": 1689
        }
      ],
      "declare": false,
      "start": 1664,
      "end": 1690
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1695,
            "end": 1699
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1702,
              "end": 1704
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1708,
              "end": 1710
            },
            "start": 1702,
            "end": 1710
          },
          "definite": false,
          "start": 1695,
          "end": 1710
        }
      ],
      "declare": false,
      "start": 1691,
      "end": 1711
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1716,
            "end": 1720
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1723,
              "end": 1725
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1729,
              "end": 1731
            },
            "start": 1723,
            "end": 1731
          },
          "definite": false,
          "start": 1716,
          "end": 1731
        }
      ],
      "declare": false,
      "start": 1712,
      "end": 1732
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1737,
            "end": 1741
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1744,
              "end": 1746
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1750,
              "end": 1752
            },
            "start": 1744,
            "end": 1752
          },
          "definite": false,
          "start": 1737,
          "end": 1752
        }
      ],
      "declare": false,
      "start": 1733,
      "end": 1753
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1758,
            "end": 1762
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1765,
              "end": 1767
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1771,
              "end": 1773
            },
            "start": 1765,
            "end": 1773
          },
          "definite": false,
          "start": 1758,
          "end": 1773
        }
      ],
      "declare": false,
      "start": 1754,
      "end": 1774
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1779,
            "end": 1783
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1786,
              "end": 1788
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1792,
              "end": 1794
            },
            "start": 1786,
            "end": 1794
          },
          "definite": false,
          "start": 1779,
          "end": 1794
        }
      ],
      "declare": false,
      "start": 1775,
      "end": 1795
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1801,
            "end": 1805
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1808,
              "end": 1810
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1814,
              "end": 1816
            },
            "start": 1808,
            "end": 1816
          },
          "definite": false,
          "start": 1801,
          "end": 1816
        }
      ],
      "declare": false,
      "start": 1797,
      "end": 1817
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1822,
            "end": 1826
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1829,
              "end": 1834
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1838,
              "end": 1843
            },
            "start": 1829,
            "end": 1843
          },
          "definite": false,
          "start": 1822,
          "end": 1843
        }
      ],
      "declare": false,
      "start": 1818,
      "end": 1844
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1849,
            "end": 1853
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1856,
              "end": 1858
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1862,
              "end": 1864
            },
            "start": 1856,
            "end": 1864
          },
          "definite": false,
          "start": 1849,
          "end": 1864
        }
      ],
      "declare": false,
      "start": 1845,
      "end": 1865
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1870,
            "end": 1874
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1877,
              "end": 1879
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1883,
              "end": 1885
            },
            "start": 1877,
            "end": 1885
          },
          "definite": false,
          "start": 1870,
          "end": 1885
        }
      ],
      "declare": false,
      "start": 1866,
      "end": 1886
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1891,
            "end": 1895
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1898,
              "end": 1900
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1904,
              "end": 1906
            },
            "start": 1898,
            "end": 1906
          },
          "definite": false,
          "start": 1891,
          "end": 1906
        }
      ],
      "declare": false,
      "start": 1887,
      "end": 1907
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1912,
            "end": 1916
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1919,
              "end": 1921
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1925,
              "end": 1927
            },
            "start": 1919,
            "end": 1927
          },
          "definite": false,
          "start": 1912,
          "end": 1927
        }
      ],
      "declare": false,
      "start": 1908,
      "end": 1928
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1933,
            "end": 1937
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1940,
              "end": 1942
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1946,
              "end": 1948
            },
            "start": 1940,
            "end": 1948
          },
          "definite": false,
          "start": 1933,
          "end": 1948
        }
      ],
      "declare": false,
      "start": 1929,
      "end": 1949
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1970,
            "end": 1974
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1977,
              "end": 1979
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1983,
              "end": 1985
            },
            "start": 1977,
            "end": 1985
          },
          "definite": false,
          "start": 1970,
          "end": 1985
        }
      ],
      "declare": false,
      "start": 1966,
      "end": 1986
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1991,
            "end": 1995
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1998,
              "end": 2003
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2007,
              "end": 2012
            },
            "start": 1998,
            "end": 2012
          },
          "definite": false,
          "start": 1991,
          "end": 2012
        }
      ],
      "declare": false,
      "start": 1987,
      "end": 2013
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2018,
            "end": 2022
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2025,
              "end": 2027
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2031,
              "end": 2033
            },
            "start": 2025,
            "end": 2033
          },
          "definite": false,
          "start": 2018,
          "end": 2033
        }
      ],
      "declare": false,
      "start": 2014,
      "end": 2034
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2039,
            "end": 2043
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2046,
              "end": 2048
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2052,
              "end": 2054
            },
            "start": 2046,
            "end": 2054
          },
          "definite": false,
          "start": 2039,
          "end": 2054
        }
      ],
      "declare": false,
      "start": 2035,
      "end": 2055
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2060,
            "end": 2064
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2067,
              "end": 2069
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2073,
              "end": 2075
            },
            "start": 2067,
            "end": 2075
          },
          "definite": false,
          "start": 2060,
          "end": 2075
        }
      ],
      "declare": false,
      "start": 2056,
      "end": 2076
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2081,
            "end": 2085
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2088,
              "end": 2090
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2094,
              "end": 2096
            },
            "start": 2088,
            "end": 2096
          },
          "definite": false,
          "start": 2081,
          "end": 2096
        }
      ],
      "declare": false,
      "start": 2077,
      "end": 2097
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2102,
            "end": 2106
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2109,
              "end": 2111
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2115,
              "end": 2117
            },
            "start": 2109,
            "end": 2117
          },
          "definite": false,
          "start": 2102,
          "end": 2117
        }
      ],
      "declare": false,
      "start": 2098,
      "end": 2118
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2124,
            "end": 2128
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2131,
              "end": 2133
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2137,
              "end": 2139
            },
            "start": 2131,
            "end": 2139
          },
          "definite": false,
          "start": 2124,
          "end": 2139
        }
      ],
      "declare": false,
      "start": 2120,
      "end": 2140
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2145,
            "end": 2149
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2152,
              "end": 2157
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2161,
              "end": 2166
            },
            "start": 2152,
            "end": 2166
          },
          "definite": false,
          "start": 2145,
          "end": 2166
        }
      ],
      "declare": false,
      "start": 2141,
      "end": 2167
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2172,
            "end": 2176
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2179,
              "end": 2181
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2185,
              "end": 2187
            },
            "start": 2179,
            "end": 2187
          },
          "definite": false,
          "start": 2172,
          "end": 2187
        }
      ],
      "declare": false,
      "start": 2168,
      "end": 2188
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2193,
            "end": 2197
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2200,
              "end": 2202
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2206,
              "end": 2208
            },
            "start": 2200,
            "end": 2208
          },
          "definite": false,
          "start": 2193,
          "end": 2208
        }
      ],
      "declare": false,
      "start": 2189,
      "end": 2209
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2214,
            "end": 2218
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2221,
              "end": 2223
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2227,
              "end": 2229
            },
            "start": 2221,
            "end": 2229
          },
          "definite": false,
          "start": 2214,
          "end": 2229
        }
      ],
      "declare": false,
      "start": 2210,
      "end": 2230
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2235,
            "end": 2239
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2242,
              "end": 2244
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2248,
              "end": 2250
            },
            "start": 2242,
            "end": 2250
          },
          "definite": false,
          "start": 2235,
          "end": 2250
        }
      ],
      "declare": false,
      "start": 2231,
      "end": 2251
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2256,
            "end": 2260
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2263,
              "end": 2265
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2269,
              "end": 2271
            },
            "start": 2263,
            "end": 2271
          },
          "definite": false,
          "start": 2256,
          "end": 2271
        }
      ],
      "declare": false,
      "start": 2252,
      "end": 2272
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2293,
            "end": 2297
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2300,
              "end": 2302
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2306,
              "end": 2308
            },
            "start": 2300,
            "end": 2308
          },
          "definite": false,
          "start": 2293,
          "end": 2308
        }
      ],
      "declare": false,
      "start": 2289,
      "end": 2309
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2314,
            "end": 2318
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2321,
              "end": 2326
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2330,
              "end": 2335
            },
            "start": 2321,
            "end": 2335
          },
          "definite": false,
          "start": 2314,
          "end": 2335
        }
      ],
      "declare": false,
      "start": 2310,
      "end": 2336
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2341,
            "end": 2345
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2348,
              "end": 2350
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2354,
              "end": 2356
            },
            "start": 2348,
            "end": 2356
          },
          "definite": false,
          "start": 2341,
          "end": 2356
        }
      ],
      "declare": false,
      "start": 2337,
      "end": 2357
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2362,
            "end": 2366
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2369,
              "end": 2371
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2375,
              "end": 2377
            },
            "start": 2369,
            "end": 2377
          },
          "definite": false,
          "start": 2362,
          "end": 2377
        }
      ],
      "declare": false,
      "start": 2358,
      "end": 2378
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2383,
            "end": 2387
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2390,
              "end": 2392
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2396,
              "end": 2398
            },
            "start": 2390,
            "end": 2398
          },
          "definite": false,
          "start": 2383,
          "end": 2398
        }
      ],
      "declare": false,
      "start": 2379,
      "end": 2399
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2404,
            "end": 2408
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2411,
              "end": 2413
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2417,
              "end": 2419
            },
            "start": 2411,
            "end": 2419
          },
          "definite": false,
          "start": 2404,
          "end": 2419
        }
      ],
      "declare": false,
      "start": 2400,
      "end": 2420
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2425,
            "end": 2429
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2432,
              "end": 2434
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2438,
              "end": 2440
            },
            "start": 2432,
            "end": 2440
          },
          "definite": false,
          "start": 2425,
          "end": 2440
        }
      ],
      "declare": false,
      "start": 2421,
      "end": 2441
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2447,
            "end": 2451
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2454,
              "end": 2456
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2460,
              "end": 2462
            },
            "start": 2454,
            "end": 2462
          },
          "definite": false,
          "start": 2447,
          "end": 2462
        }
      ],
      "declare": false,
      "start": 2443,
      "end": 2463
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2468,
            "end": 2472
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2475,
              "end": 2480
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2484,
              "end": 2489
            },
            "start": 2475,
            "end": 2489
          },
          "definite": false,
          "start": 2468,
          "end": 2489
        }
      ],
      "declare": false,
      "start": 2464,
      "end": 2490
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2495,
            "end": 2499
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2502,
              "end": 2504
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2508,
              "end": 2510
            },
            "start": 2502,
            "end": 2510
          },
          "definite": false,
          "start": 2495,
          "end": 2510
        }
      ],
      "declare": false,
      "start": 2491,
      "end": 2511
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2516,
            "end": 2520
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2523,
              "end": 2525
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2529,
              "end": 2531
            },
            "start": 2523,
            "end": 2531
          },
          "definite": false,
          "start": 2516,
          "end": 2531
        }
      ],
      "declare": false,
      "start": 2512,
      "end": 2532
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2537,
            "end": 2541
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2544,
              "end": 2546
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2550,
              "end": 2552
            },
            "start": 2544,
            "end": 2552
          },
          "definite": false,
          "start": 2537,
          "end": 2552
        }
      ],
      "declare": false,
      "start": 2533,
      "end": 2553
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2558,
            "end": 2562
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2565,
              "end": 2567
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2571,
              "end": 2573
            },
            "start": 2565,
            "end": 2573
          },
          "definite": false,
          "start": 2558,
          "end": 2573
        }
      ],
      "declare": false,
      "start": 2554,
      "end": 2574
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2579,
            "end": 2583
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2586,
              "end": 2588
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2592,
              "end": 2594
            },
            "start": 2586,
            "end": 2594
          },
          "definite": false,
          "start": 2579,
          "end": 2594
        }
      ],
      "declare": false,
      "start": 2575,
      "end": 2595
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2616,
            "end": 2620
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2623,
              "end": 2625
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2629,
              "end": 2631
            },
            "start": 2623,
            "end": 2631
          },
          "definite": false,
          "start": 2616,
          "end": 2631
        }
      ],
      "declare": false,
      "start": 2612,
      "end": 2632
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2637,
            "end": 2641
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2644,
              "end": 2649
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2653,
              "end": 2658
            },
            "start": 2644,
            "end": 2658
          },
          "definite": false,
          "start": 2637,
          "end": 2658
        }
      ],
      "declare": false,
      "start": 2633,
      "end": 2659
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2664,
            "end": 2668
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2671,
              "end": 2673
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2677,
              "end": 2679
            },
            "start": 2671,
            "end": 2679
          },
          "definite": false,
          "start": 2664,
          "end": 2679
        }
      ],
      "declare": false,
      "start": 2660,
      "end": 2680
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2685,
            "end": 2689
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2692,
              "end": 2694
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2698,
              "end": 2700
            },
            "start": 2692,
            "end": 2700
          },
          "definite": false,
          "start": 2685,
          "end": 2700
        }
      ],
      "declare": false,
      "start": 2681,
      "end": 2701
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2706,
            "end": 2710
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2713,
              "end": 2715
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2719,
              "end": 2721
            },
            "start": 2713,
            "end": 2721
          },
          "definite": false,
          "start": 2706,
          "end": 2721
        }
      ],
      "declare": false,
      "start": 2702,
      "end": 2722
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2727,
            "end": 2731
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2734,
              "end": 2736
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2740,
              "end": 2742
            },
            "start": 2734,
            "end": 2742
          },
          "definite": false,
          "start": 2727,
          "end": 2742
        }
      ],
      "declare": false,
      "start": 2723,
      "end": 2743
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2748,
            "end": 2752
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2755,
              "end": 2757
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2761,
              "end": 2763
            },
            "start": 2755,
            "end": 2763
          },
          "definite": false,
          "start": 2748,
          "end": 2763
        }
      ],
      "declare": false,
      "start": 2744,
      "end": 2764
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2770,
            "end": 2774
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2777,
              "end": 2779
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2783,
              "end": 2785
            },
            "start": 2777,
            "end": 2785
          },
          "definite": false,
          "start": 2770,
          "end": 2785
        }
      ],
      "declare": false,
      "start": 2766,
      "end": 2786
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2791,
            "end": 2795
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2798,
              "end": 2803
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2807,
              "end": 2812
            },
            "start": 2798,
            "end": 2812
          },
          "definite": false,
          "start": 2791,
          "end": 2812
        }
      ],
      "declare": false,
      "start": 2787,
      "end": 2813
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2818,
            "end": 2822
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2825,
              "end": 2827
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2831,
              "end": 2833
            },
            "start": 2825,
            "end": 2833
          },
          "definite": false,
          "start": 2818,
          "end": 2833
        }
      ],
      "declare": false,
      "start": 2814,
      "end": 2834
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2839,
            "end": 2843
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2846,
              "end": 2848
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2852,
              "end": 2854
            },
            "start": 2846,
            "end": 2854
          },
          "definite": false,
          "start": 2839,
          "end": 2854
        }
      ],
      "declare": false,
      "start": 2835,
      "end": 2855
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2860,
            "end": 2864
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2867,
              "end": 2869
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2873,
              "end": 2875
            },
            "start": 2867,
            "end": 2875
          },
          "definite": false,
          "start": 2860,
          "end": 2875
        }
      ],
      "declare": false,
      "start": 2856,
      "end": 2876
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2881,
            "end": 2885
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2888,
              "end": 2890
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2894,
              "end": 2896
            },
            "start": 2888,
            "end": 2896
          },
          "definite": false,
          "start": 2881,
          "end": 2896
        }
      ],
      "declare": false,
      "start": 2877,
      "end": 2897
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2902,
            "end": 2906
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2909,
              "end": 2911
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2915,
              "end": 2917
            },
            "start": 2909,
            "end": 2917
          },
          "definite": false,
          "start": 2902,
          "end": 2917
        }
      ],
      "declare": false,
      "start": 2898,
      "end": 2918
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2940,
            "end": 2944
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2947,
              "end": 2949
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2954,
              "end": 2956
            },
            "start": 2947,
            "end": 2956
          },
          "definite": false,
          "start": 2940,
          "end": 2956
        }
      ],
      "declare": false,
      "start": 2936,
      "end": 2957
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2962,
            "end": 2966
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2969,
              "end": 2974
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2979,
              "end": 2984
            },
            "start": 2969,
            "end": 2984
          },
          "definite": false,
          "start": 2962,
          "end": 2984
        }
      ],
      "declare": false,
      "start": 2958,
      "end": 2985
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2990,
            "end": 2994
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2997,
              "end": 2999
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3004,
              "end": 3006
            },
            "start": 2997,
            "end": 3006
          },
          "definite": false,
          "start": 2990,
          "end": 3006
        }
      ],
      "declare": false,
      "start": 2986,
      "end": 3007
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3012,
            "end": 3016
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3019,
              "end": 3021
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3026,
              "end": 3028
            },
            "start": 3019,
            "end": 3028
          },
          "definite": false,
          "start": 3012,
          "end": 3028
        }
      ],
      "declare": false,
      "start": 3008,
      "end": 3029
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 3034,
            "end": 3038
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3041,
              "end": 3043
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3048,
              "end": 3050
            },
            "start": 3041,
            "end": 3050
          },
          "definite": false,
          "start": 3034,
          "end": 3050
        }
      ],
      "declare": false,
      "start": 3030,
      "end": 3051
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 3056,
            "end": 3060
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3063,
              "end": 3065
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3070,
              "end": 3072
            },
            "start": 3063,
            "end": 3072
          },
          "definite": false,
          "start": 3056,
          "end": 3072
        }
      ],
      "declare": false,
      "start": 3052,
      "end": 3073
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 3078,
            "end": 3082
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 3085,
              "end": 3087
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 3092,
              "end": 3094
            },
            "start": 3085,
            "end": 3094
          },
          "definite": false,
          "start": 3078,
          "end": 3094
        }
      ],
      "declare": false,
      "start": 3074,
      "end": 3095
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3101,
            "end": 3105
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3108,
              "end": 3110
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3115,
              "end": 3117
            },
            "start": 3108,
            "end": 3117
          },
          "definite": false,
          "start": 3101,
          "end": 3117
        }
      ],
      "declare": false,
      "start": 3097,
      "end": 3118
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3123,
            "end": 3127
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3130,
              "end": 3135
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3140,
              "end": 3145
            },
            "start": 3130,
            "end": 3145
          },
          "definite": false,
          "start": 3123,
          "end": 3145
        }
      ],
      "declare": false,
      "start": 3119,
      "end": 3146
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3151,
            "end": 3155
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3158,
              "end": 3160
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3165,
              "end": 3167
            },
            "start": 3158,
            "end": 3167
          },
          "definite": false,
          "start": 3151,
          "end": 3167
        }
      ],
      "declare": false,
      "start": 3147,
      "end": 3168
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3173,
            "end": 3177
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3180,
              "end": 3182
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3187,
              "end": 3189
            },
            "start": 3180,
            "end": 3189
          },
          "definite": false,
          "start": 3173,
          "end": 3189
        }
      ],
      "declare": false,
      "start": 3169,
      "end": 3190
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 3195,
            "end": 3199
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3202,
              "end": 3204
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3209,
              "end": 3211
            },
            "start": 3202,
            "end": 3211
          },
          "definite": false,
          "start": 3195,
          "end": 3211
        }
      ],
      "declare": false,
      "start": 3191,
      "end": 3212
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 3217,
            "end": 3221
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3224,
              "end": 3226
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3231,
              "end": 3233
            },
            "start": 3224,
            "end": 3233
          },
          "definite": false,
          "start": 3217,
          "end": 3233
        }
      ],
      "declare": false,
      "start": 3213,
      "end": 3234
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 3239,
            "end": 3243
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 3246,
              "end": 3248
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 3253,
              "end": 3255
            },
            "start": 3246,
            "end": 3255
          },
          "definite": false,
          "start": 3239,
          "end": 3255
        }
      ],
      "declare": false,
      "start": 3235,
      "end": 3256
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3278,
            "end": 3282
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3285,
              "end": 3287
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3292,
              "end": 3294
            },
            "start": 3285,
            "end": 3294
          },
          "definite": false,
          "start": 3278,
          "end": 3294
        }
      ],
      "declare": false,
      "start": 3274,
      "end": 3295
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3300,
            "end": 3304
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3307,
              "end": 3312
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3317,
              "end": 3322
            },
            "start": 3307,
            "end": 3322
          },
          "definite": false,
          "start": 3300,
          "end": 3322
        }
      ],
      "declare": false,
      "start": 3296,
      "end": 3323
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3328,
            "end": 3332
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3335,
              "end": 3337
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3342,
              "end": 3344
            },
            "start": 3335,
            "end": 3344
          },
          "definite": false,
          "start": 3328,
          "end": 3344
        }
      ],
      "declare": false,
      "start": 3324,
      "end": 3345
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3350,
            "end": 3354
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3357,
              "end": 3359
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3364,
              "end": 3366
            },
            "start": 3357,
            "end": 3366
          },
          "definite": false,
          "start": 3350,
          "end": 3366
        }
      ],
      "declare": false,
      "start": 3346,
      "end": 3367
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 3372,
            "end": 3376
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3379,
              "end": 3381
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3386,
              "end": 3388
            },
            "start": 3379,
            "end": 3388
          },
          "definite": false,
          "start": 3372,
          "end": 3388
        }
      ],
      "declare": false,
      "start": 3368,
      "end": 3389
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 3394,
            "end": 3398
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3401,
              "end": 3403
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3408,
              "end": 3410
            },
            "start": 3401,
            "end": 3410
          },
          "definite": false,
          "start": 3394,
          "end": 3410
        }
      ],
      "declare": false,
      "start": 3390,
      "end": 3411
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 3416,
            "end": 3420
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 3423,
              "end": 3425
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 3430,
              "end": 3432
            },
            "start": 3423,
            "end": 3432
          },
          "definite": false,
          "start": 3416,
          "end": 3432
        }
      ],
      "declare": false,
      "start": 3412,
      "end": 3433
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3439,
            "end": 3443
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3446,
              "end": 3448
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3453,
              "end": 3455
            },
            "start": 3446,
            "end": 3455
          },
          "definite": false,
          "start": 3439,
          "end": 3455
        }
      ],
      "declare": false,
      "start": 3435,
      "end": 3456
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3461,
            "end": 3465
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3468,
              "end": 3473
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3478,
              "end": 3483
            },
            "start": 3468,
            "end": 3483
          },
          "definite": false,
          "start": 3461,
          "end": 3483
        }
      ],
      "declare": false,
      "start": 3457,
      "end": 3484
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3489,
            "end": 3493
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3496,
              "end": 3498
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3503,
              "end": 3505
            },
            "start": 3496,
            "end": 3505
          },
          "definite": false,
          "start": 3489,
          "end": 3505
        }
      ],
      "declare": false,
      "start": 3485,
      "end": 3506
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3511,
            "end": 3515
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3518,
              "end": 3520
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3525,
              "end": 3527
            },
            "start": 3518,
            "end": 3527
          },
          "definite": false,
          "start": 3511,
          "end": 3527
        }
      ],
      "declare": false,
      "start": 3507,
      "end": 3528
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8b5",
            "optional": false,
            "typeAnnotation": null,
            "start": 3533,
            "end": 3537
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3540,
              "end": 3542
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3547,
              "end": 3549
            },
            "start": 3540,
            "end": 3549
          },
          "definite": false,
          "start": 3533,
          "end": 3549
        }
      ],
      "declare": false,
      "start": 3529,
      "end": 3550
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8b6",
            "optional": false,
            "typeAnnotation": null,
            "start": 3555,
            "end": 3559
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3562,
              "end": 3564
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3569,
              "end": 3571
            },
            "start": 3562,
            "end": 3571
          },
          "definite": false,
          "start": 3555,
          "end": 3571
        }
      ],
      "declare": false,
      "start": 3551,
      "end": 3572
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8b7",
            "optional": false,
            "typeAnnotation": null,
            "start": 3577,
            "end": 3581
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 3584,
              "end": 3586
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 3591,
              "end": 3593
            },
            "start": 3584,
            "end": 3593
          },
          "definite": false,
          "start": 3577,
          "end": 3593
        }
      ],
      "declare": false,
      "start": 3573,
      "end": 3594
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3594
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 6,
    "end": 8,
    "range": [
      6,
      8
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 15,
    "end": 21,
    "range": [
      15,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 25,
    "end": 31,
    "range": [
      25,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 37,
    "end": 43,
    "range": [
      37,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 47,
    "end": 53,
    "range": [
      47,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 59,
    "end": 65,
    "range": [
      59,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 66,
    "end": 67,
    "range": [
      66,
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
    "value": "boolean",
    "start": 69,
    "end": 76,
    "range": [
      69,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 82,
    "end": 88,
    "range": [
      82,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 92,
    "end": 95,
    "range": [
      92,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 101,
    "end": 107,
    "range": [
      101,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 111,
    "end": 117,
    "range": [
      111,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 123,
    "end": 129,
    "range": [
      123,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 130,
    "end": 132,
    "range": [
      130,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 136,
    "end": 142,
    "range": [
      136,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 145,
    "end": 151,
    "range": [
      145,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 162,
    "end": 168,
    "range": [
      162,
      168
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 169,
    "end": 173,
    "range": [
      169,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 183,
    "end": 188,
    "range": [
      183,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 189,
    "end": 191,
    "range": [
      189,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 198,
    "end": 204,
    "range": [
      198,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 208,
    "end": 214,
    "range": [
      208,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 220,
    "end": 226,
    "range": [
      220,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 230,
    "end": 236,
    "range": [
      230,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 242,
    "end": 248,
    "range": [
      242,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 252,
    "end": 259,
    "range": [
      252,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 265,
    "end": 271,
    "range": [
      265,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 275,
    "end": 278,
    "range": [
      275,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 284,
    "end": 290,
    "range": [
      284,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 294,
    "end": 300,
    "range": [
      294,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 306,
    "end": 312,
    "range": [
      306,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 313,
    "end": 315,
    "range": [
      313,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 319,
    "end": 325,
    "range": [
      319,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 328,
    "end": 334,
    "range": [
      328,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 345,
    "end": 351,
    "range": [
      345,
      351
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 352,
    "end": 356,
    "range": [
      352,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 367,
    "end": 372,
    "range": [
      367,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 373,
    "end": 377,
    "range": [
      373,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 384,
    "end": 391,
    "range": [
      384,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 395,
    "end": 401,
    "range": [
      395,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 407,
    "end": 414,
    "range": [
      407,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 415,
    "end": 417,
    "range": [
      415,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 421,
    "end": 427,
    "range": [
      421,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 430,
    "end": 436,
    "range": [
      430,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 447,
    "end": 453,
    "range": [
      447,
      453
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 454,
    "end": 458,
    "range": [
      454,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 468,
    "end": 473,
    "range": [
      468,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 474,
    "end": 476,
    "range": [
      474,
      476
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 477,
    "end": 484,
    "range": [
      477,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 485,
    "end": 489,
    "range": [
      485,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 494,
    "end": 499,
    "range": [
      494,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 500,
    "end": 502,
    "range": [
      500,
      502
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 503,
    "end": 510,
    "range": [
      503,
      510
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 511,
    "end": 515,
    "range": [
      511,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 521,
    "end": 530,
    "range": [
      521,
      530
    ]
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 531,
    "end": 533,
    "range": [
      531,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 541,
    "end": 547,
    "range": [
      541,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 550,
    "end": 556,
    "range": [
      550,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 560,
    "end": 569,
    "range": [
      560,
      569
    ]
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 570,
    "end": 572,
    "range": [
      570,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 580,
    "end": 586,
    "range": [
      580,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 589,
    "end": 595,
    "range": [
      589,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 600,
    "end": 609,
    "range": [
      600,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "A4",
    "start": 610,
    "end": 612,
    "range": [
      610,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 615,
    "end": 618,
    "range": [
      615,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 623,
    "end": 629,
    "range": [
      623,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 632,
    "end": 634,
    "range": [
      632,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 638,
    "end": 647,
    "range": [
      638,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "B4",
    "start": 648,
    "end": 650,
    "range": [
      648,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 653,
    "end": 656,
    "range": [
      653,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 661,
    "end": 667,
    "range": [
      661,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 670,
    "end": 672,
    "range": [
      670,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 677,
    "end": 686,
    "range": [
      677,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "A5",
    "start": 687,
    "end": 689,
    "range": [
      687,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 696,
    "end": 702,
    "range": [
      696,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 705,
    "end": 711,
    "range": [
      705,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 715,
    "end": 724,
    "range": [
      715,
      724
    ]
  },
  {
    "type": "Identifier",
    "value": "B5",
    "start": 725,
    "end": 727,
    "range": [
      725,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 734,
    "end": 740,
    "range": [
      734,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 743,
    "end": 749,
    "range": [
      743,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 754,
    "end": 763,
    "range": [
      754,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "A6",
    "start": 764,
    "end": 766,
    "range": [
      764,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 773,
    "end": 779,
    "range": [
      773,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 782,
    "end": 788,
    "range": [
      782,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 792,
    "end": 801,
    "range": [
      792,
      801
    ]
  },
  {
    "type": "Identifier",
    "value": "B6",
    "start": 802,
    "end": 804,
    "range": [
      802,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 811,
    "end": 817,
    "range": [
      811,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 820,
    "end": 826,
    "range": [
      820,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 831,
    "end": 834,
    "range": [
      831,
      834
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 835,
    "end": 837,
    "range": [
      835,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 839,
    "end": 841,
    "range": [
      839,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 843,
    "end": 846,
    "range": [
      843,
      846
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 847,
    "end": 849,
    "range": [
      847,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 851,
    "end": 853,
    "range": [
      851,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 855,
    "end": 858,
    "range": [
      855,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 859,
    "end": 861,
    "range": [
      859,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 863,
    "end": 865,
    "range": [
      863,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 867,
    "end": 870,
    "range": [
      867,
      870
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 871,
    "end": 873,
    "range": [
      871,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Identifier",
    "value": "A4",
    "start": 875,
    "end": 877,
    "range": [
      875,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 879,
    "end": 882,
    "range": [
      879,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 883,
    "end": 885,
    "range": [
      883,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Identifier",
    "value": "A5",
    "start": 887,
    "end": 889,
    "range": [
      887,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 891,
    "end": 894,
    "range": [
      891,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 895,
    "end": 897,
    "range": [
      895,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "A6",
    "start": 899,
    "end": 901,
    "range": [
      899,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 904,
    "end": 907,
    "range": [
      904,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 908,
    "end": 910,
    "range": [
      908,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 912,
    "end": 914,
    "range": [
      912,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 916,
    "end": 919,
    "range": [
      916,
      919
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 920,
    "end": 922,
    "range": [
      920,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 924,
    "end": 926,
    "range": [
      924,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 928,
    "end": 931,
    "range": [
      928,
      931
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 932,
    "end": 934,
    "range": [
      932,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 936,
    "end": 938,
    "range": [
      936,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 940,
    "end": 943,
    "range": [
      940,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 944,
    "end": 946,
    "range": [
      944,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Identifier",
    "value": "B4",
    "start": 948,
    "end": 950,
    "range": [
      948,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 952,
    "end": 955,
    "range": [
      952,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 956,
    "end": 958,
    "range": [
      956,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Identifier",
    "value": "B5",
    "start": 960,
    "end": 962,
    "range": [
      960,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 964,
    "end": 967,
    "range": [
      964,
      967
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 968,
    "end": 970,
    "range": [
      968,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Identifier",
    "value": "B6",
    "start": 972,
    "end": 974,
    "range": [
      972,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 977,
    "end": 980,
    "range": [
      977,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "base1",
    "start": 981,
    "end": 986,
    "range": [
      981,
      986
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 988,
    "end": 992,
    "range": [
      988,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 994,
    "end": 997,
    "range": [
      994,
      997
    ]
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 998,
    "end": 1003,
    "range": [
      998,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1005,
    "end": 1009,
    "range": [
      1005,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1026,
    "end": 1029,
    "range": [
      1026,
      1029
    ]
  },
  {
    "type": "Identifier",
    "value": "r1a1",
    "start": 1030,
    "end": 1034,
    "range": [
      1030,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1037,
    "end": 1039,
    "range": [
      1037,
      1039
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1042,
    "end": 1044,
    "range": [
      1042,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1046,
    "end": 1049,
    "range": [
      1046,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "r1a2",
    "start": 1050,
    "end": 1054,
    "range": [
      1050,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Identifier",
    "value": "base1",
    "start": 1057,
    "end": 1062,
    "range": [
      1057,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 1065,
    "end": 1070,
    "range": [
      1065,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1072,
    "end": 1075,
    "range": [
      1072,
      1075
    ]
  },
  {
    "type": "Identifier",
    "value": "r1a3",
    "start": 1076,
    "end": 1080,
    "range": [
      1076,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1083,
    "end": 1085,
    "range": [
      1083,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1088,
    "end": 1090,
    "range": [
      1088,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1092,
    "end": 1095,
    "range": [
      1092,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "r1a4",
    "start": 1096,
    "end": 1100,
    "range": [
      1096,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1103,
    "end": 1105,
    "range": [
      1103,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1108,
    "end": 1110,
    "range": [
      1108,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1112,
    "end": 1115,
    "range": [
      1112,
      1115
    ]
  },
  {
    "type": "Identifier",
    "value": "r1a5",
    "start": 1116,
    "end": 1120,
    "range": [
      1116,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1123,
    "end": 1125,
    "range": [
      1123,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1128,
    "end": 1130,
    "range": [
      1128,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1132,
    "end": 1135,
    "range": [
      1132,
      1135
    ]
  },
  {
    "type": "Identifier",
    "value": "r1a6",
    "start": 1136,
    "end": 1140,
    "range": [
      1136,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1143,
    "end": 1145,
    "range": [
      1143,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1148,
    "end": 1150,
    "range": [
      1148,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1152,
    "end": 1155,
    "range": [
      1152,
      1155
    ]
  },
  {
    "type": "Identifier",
    "value": "r1a7",
    "start": 1156,
    "end": 1160,
    "range": [
      1156,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1163,
    "end": 1165,
    "range": [
      1163,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1168,
    "end": 1170,
    "range": [
      1168,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1173,
    "end": 1176,
    "range": [
      1173,
      1176
    ]
  },
  {
    "type": "Identifier",
    "value": "r1b1",
    "start": 1177,
    "end": 1181,
    "range": [
      1177,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1184,
    "end": 1186,
    "range": [
      1184,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1187,
    "end": 1188,
    "range": [
      1187,
      1188
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1189,
    "end": 1191,
    "range": [
      1189,
      1191
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1191,
    "end": 1192,
    "range": [
      1191,
      1192
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1193,
    "end": 1196,
    "range": [
      1193,
      1196
    ]
  },
  {
    "type": "Identifier",
    "value": "r1b2",
    "start": 1197,
    "end": 1201,
    "range": [
      1197,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 1204,
    "end": 1209,
    "range": [
      1204,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  },
  {
    "type": "Identifier",
    "value": "base1",
    "start": 1212,
    "end": 1217,
    "range": [
      1212,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1219,
    "end": 1222,
    "range": [
      1219,
      1222
    ]
  },
  {
    "type": "Identifier",
    "value": "r1b3",
    "start": 1223,
    "end": 1227,
    "range": [
      1223,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1230,
    "end": 1232,
    "range": [
      1230,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1235,
    "end": 1237,
    "range": [
      1235,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1239,
    "end": 1242,
    "range": [
      1239,
      1242
    ]
  },
  {
    "type": "Identifier",
    "value": "r1b4",
    "start": 1243,
    "end": 1247,
    "range": [
      1243,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1250,
    "end": 1252,
    "range": [
      1250,
      1252
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1255,
    "end": 1257,
    "range": [
      1255,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1259,
    "end": 1262,
    "range": [
      1259,
      1262
    ]
  },
  {
    "type": "Identifier",
    "value": "r1b5",
    "start": 1263,
    "end": 1267,
    "range": [
      1263,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1270,
    "end": 1272,
    "range": [
      1270,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1275,
    "end": 1277,
    "range": [
      1275,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1279,
    "end": 1282,
    "range": [
      1279,
      1282
    ]
  },
  {
    "type": "Identifier",
    "value": "r1b6",
    "start": 1283,
    "end": 1287,
    "range": [
      1283,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1290,
    "end": 1292,
    "range": [
      1290,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1295,
    "end": 1297,
    "range": [
      1295,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1299,
    "end": 1302,
    "range": [
      1299,
      1302
    ]
  },
  {
    "type": "Identifier",
    "value": "r1b7",
    "start": 1303,
    "end": 1307,
    "range": [
      1303,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1310,
    "end": 1312,
    "range": [
      1310,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1315,
    "end": 1317,
    "range": [
      1315,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1334,
    "end": 1337,
    "range": [
      1334,
      1337
    ]
  },
  {
    "type": "Identifier",
    "value": "r2a1",
    "start": 1338,
    "end": 1342,
    "range": [
      1338,
      1342
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1343,
    "end": 1344,
    "range": [
      1343,
      1344
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1345,
    "end": 1347,
    "range": [
      1345,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1350,
    "end": 1352,
    "range": [
      1350,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1354,
    "end": 1357,
    "range": [
      1354,
      1357
    ]
  },
  {
    "type": "Identifier",
    "value": "r2a2",
    "start": 1358,
    "end": 1362,
    "range": [
      1358,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Identifier",
    "value": "base1",
    "start": 1365,
    "end": 1370,
    "range": [
      1365,
      1370
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 1373,
    "end": 1378,
    "range": [
      1373,
      1378
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1380,
    "end": 1383,
    "range": [
      1380,
      1383
    ]
  },
  {
    "type": "Identifier",
    "value": "r2a3",
    "start": 1384,
    "end": 1388,
    "range": [
      1384,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1391,
    "end": 1393,
    "range": [
      1391,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1396,
    "end": 1398,
    "range": [
      1396,
      1398
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1400,
    "end": 1403,
    "range": [
      1400,
      1403
    ]
  },
  {
    "type": "Identifier",
    "value": "r2a4",
    "start": 1404,
    "end": 1408,
    "range": [
      1404,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1411,
    "end": 1413,
    "range": [
      1411,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1416,
    "end": 1418,
    "range": [
      1416,
      1418
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1418,
    "end": 1419,
    "range": [
      1418,
      1419
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1420,
    "end": 1423,
    "range": [
      1420,
      1423
    ]
  },
  {
    "type": "Identifier",
    "value": "r2a5",
    "start": 1424,
    "end": 1428,
    "range": [
      1424,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1431,
    "end": 1433,
    "range": [
      1431,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1436,
    "end": 1438,
    "range": [
      1436,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1438,
    "end": 1439,
    "range": [
      1438,
      1439
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1440,
    "end": 1443,
    "range": [
      1440,
      1443
    ]
  },
  {
    "type": "Identifier",
    "value": "r2a6",
    "start": 1444,
    "end": 1448,
    "range": [
      1444,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1451,
    "end": 1453,
    "range": [
      1451,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1456,
    "end": 1458,
    "range": [
      1456,
      1458
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1460,
    "end": 1463,
    "range": [
      1460,
      1463
    ]
  },
  {
    "type": "Identifier",
    "value": "r2a7",
    "start": 1464,
    "end": 1468,
    "range": [
      1464,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1471,
    "end": 1473,
    "range": [
      1471,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1476,
    "end": 1478,
    "range": [
      1476,
      1478
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1481,
    "end": 1484,
    "range": [
      1481,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "r2b1",
    "start": 1485,
    "end": 1489,
    "range": [
      1485,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1492,
    "end": 1494,
    "range": [
      1492,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1497,
    "end": 1499,
    "range": [
      1497,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1501,
    "end": 1504,
    "range": [
      1501,
      1504
    ]
  },
  {
    "type": "Identifier",
    "value": "r2b2",
    "start": 1505,
    "end": 1509,
    "range": [
      1505,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 1512,
    "end": 1517,
    "range": [
      1512,
      1517
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Identifier",
    "value": "base1",
    "start": 1520,
    "end": 1525,
    "range": [
      1520,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1527,
    "end": 1530,
    "range": [
      1527,
      1530
    ]
  },
  {
    "type": "Identifier",
    "value": "r2b3",
    "start": 1531,
    "end": 1535,
    "range": [
      1531,
      1535
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1538,
    "end": 1540,
    "range": [
      1538,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1543,
    "end": 1545,
    "range": [
      1543,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1547,
    "end": 1550,
    "range": [
      1547,
      1550
    ]
  },
  {
    "type": "Identifier",
    "value": "r2b4",
    "start": 1551,
    "end": 1555,
    "range": [
      1551,
      1555
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1558,
    "end": 1560,
    "range": [
      1558,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1563,
    "end": 1565,
    "range": [
      1563,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1567,
    "end": 1570,
    "range": [
      1567,
      1570
    ]
  },
  {
    "type": "Identifier",
    "value": "r2b5",
    "start": 1571,
    "end": 1575,
    "range": [
      1571,
      1575
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1576,
    "end": 1577,
    "range": [
      1576,
      1577
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1578,
    "end": 1580,
    "range": [
      1578,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1583,
    "end": 1585,
    "range": [
      1583,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1587,
    "end": 1590,
    "range": [
      1587,
      1590
    ]
  },
  {
    "type": "Identifier",
    "value": "r2b6",
    "start": 1591,
    "end": 1595,
    "range": [
      1591,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1598,
    "end": 1600,
    "range": [
      1598,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1601,
    "end": 1602,
    "range": [
      1601,
      1602
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1603,
    "end": 1605,
    "range": [
      1603,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1607,
    "end": 1610,
    "range": [
      1607,
      1610
    ]
  },
  {
    "type": "Identifier",
    "value": "r2b7",
    "start": 1611,
    "end": 1615,
    "range": [
      1611,
      1615
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1616,
    "end": 1617,
    "range": [
      1616,
      1617
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1618,
    "end": 1620,
    "range": [
      1618,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1621,
    "end": 1622,
    "range": [
      1621,
      1622
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1623,
    "end": 1625,
    "range": [
      1623,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1643,
    "end": 1646,
    "range": [
      1643,
      1646
    ]
  },
  {
    "type": "Identifier",
    "value": "r3a1",
    "start": 1647,
    "end": 1651,
    "range": [
      1647,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1654,
    "end": 1656,
    "range": [
      1654,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1657,
    "end": 1659,
    "range": [
      1657,
      1659
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1660,
    "end": 1662,
    "range": [
      1660,
      1662
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1664,
    "end": 1667,
    "range": [
      1664,
      1667
    ]
  },
  {
    "type": "Identifier",
    "value": "r3a2",
    "start": 1668,
    "end": 1672,
    "range": [
      1668,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1673,
    "end": 1674,
    "range": [
      1673,
      1674
    ]
  },
  {
    "type": "Identifier",
    "value": "base1",
    "start": 1675,
    "end": 1680,
    "range": [
      1675,
      1680
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1681,
    "end": 1683,
    "range": [
      1681,
      1683
    ]
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 1684,
    "end": 1689,
    "range": [
      1684,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1689,
    "end": 1690,
    "range": [
      1689,
      1690
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1691,
    "end": 1694,
    "range": [
      1691,
      1694
    ]
  },
  {
    "type": "Identifier",
    "value": "r3a3",
    "start": 1695,
    "end": 1699,
    "range": [
      1695,
      1699
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1700,
    "end": 1701,
    "range": [
      1700,
      1701
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1702,
    "end": 1704,
    "range": [
      1702,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1705,
    "end": 1707,
    "range": [
      1705,
      1707
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1708,
    "end": 1710,
    "range": [
      1708,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1712,
    "end": 1715,
    "range": [
      1712,
      1715
    ]
  },
  {
    "type": "Identifier",
    "value": "r3a4",
    "start": 1716,
    "end": 1720,
    "range": [
      1716,
      1720
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1723,
    "end": 1725,
    "range": [
      1723,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1726,
    "end": 1728,
    "range": [
      1726,
      1728
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1729,
    "end": 1731,
    "range": [
      1729,
      1731
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1733,
    "end": 1736,
    "range": [
      1733,
      1736
    ]
  },
  {
    "type": "Identifier",
    "value": "r3a5",
    "start": 1737,
    "end": 1741,
    "range": [
      1737,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1742,
    "end": 1743,
    "range": [
      1742,
      1743
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1744,
    "end": 1746,
    "range": [
      1744,
      1746
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1747,
    "end": 1749,
    "range": [
      1747,
      1749
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1750,
    "end": 1752,
    "range": [
      1750,
      1752
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1754,
    "end": 1757,
    "range": [
      1754,
      1757
    ]
  },
  {
    "type": "Identifier",
    "value": "r3a6",
    "start": 1758,
    "end": 1762,
    "range": [
      1758,
      1762
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1765,
    "end": 1767,
    "range": [
      1765,
      1767
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1768,
    "end": 1770,
    "range": [
      1768,
      1770
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1771,
    "end": 1773,
    "range": [
      1771,
      1773
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1773,
    "end": 1774,
    "range": [
      1773,
      1774
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1775,
    "end": 1778,
    "range": [
      1775,
      1778
    ]
  },
  {
    "type": "Identifier",
    "value": "r3a7",
    "start": 1779,
    "end": 1783,
    "range": [
      1779,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1784,
    "end": 1785,
    "range": [
      1784,
      1785
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1786,
    "end": 1788,
    "range": [
      1786,
      1788
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1789,
    "end": 1791,
    "range": [
      1789,
      1791
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1792,
    "end": 1794,
    "range": [
      1792,
      1794
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1794,
    "end": 1795,
    "range": [
      1794,
      1795
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1797,
    "end": 1800,
    "range": [
      1797,
      1800
    ]
  },
  {
    "type": "Identifier",
    "value": "r3b1",
    "start": 1801,
    "end": 1805,
    "range": [
      1801,
      1805
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1808,
    "end": 1810,
    "range": [
      1808,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1811,
    "end": 1813,
    "range": [
      1811,
      1813
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1814,
    "end": 1816,
    "range": [
      1814,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1818,
    "end": 1821,
    "range": [
      1818,
      1821
    ]
  },
  {
    "type": "Identifier",
    "value": "r3b2",
    "start": 1822,
    "end": 1826,
    "range": [
      1822,
      1826
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1827,
    "end": 1828,
    "range": [
      1827,
      1828
    ]
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 1829,
    "end": 1834,
    "range": [
      1829,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1835,
    "end": 1837,
    "range": [
      1835,
      1837
    ]
  },
  {
    "type": "Identifier",
    "value": "base1",
    "start": 1838,
    "end": 1843,
    "range": [
      1838,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1843,
    "end": 1844,
    "range": [
      1843,
      1844
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1845,
    "end": 1848,
    "range": [
      1845,
      1848
    ]
  },
  {
    "type": "Identifier",
    "value": "r3b3",
    "start": 1849,
    "end": 1853,
    "range": [
      1849,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1856,
    "end": 1858,
    "range": [
      1856,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1859,
    "end": 1861,
    "range": [
      1859,
      1861
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1862,
    "end": 1864,
    "range": [
      1862,
      1864
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1864,
    "end": 1865,
    "range": [
      1864,
      1865
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1866,
    "end": 1869,
    "range": [
      1866,
      1869
    ]
  },
  {
    "type": "Identifier",
    "value": "r3b4",
    "start": 1870,
    "end": 1874,
    "range": [
      1870,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1877,
    "end": 1879,
    "range": [
      1877,
      1879
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1880,
    "end": 1882,
    "range": [
      1880,
      1882
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1883,
    "end": 1885,
    "range": [
      1883,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1885,
    "end": 1886,
    "range": [
      1885,
      1886
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1887,
    "end": 1890,
    "range": [
      1887,
      1890
    ]
  },
  {
    "type": "Identifier",
    "value": "r3b5",
    "start": 1891,
    "end": 1895,
    "range": [
      1891,
      1895
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1896,
    "end": 1897,
    "range": [
      1896,
      1897
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1898,
    "end": 1900,
    "range": [
      1898,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1901,
    "end": 1903,
    "range": [
      1901,
      1903
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1904,
    "end": 1906,
    "range": [
      1904,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1908,
    "end": 1911,
    "range": [
      1908,
      1911
    ]
  },
  {
    "type": "Identifier",
    "value": "r3b6",
    "start": 1912,
    "end": 1916,
    "range": [
      1912,
      1916
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1917,
    "end": 1918,
    "range": [
      1917,
      1918
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1919,
    "end": 1921,
    "range": [
      1919,
      1921
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1922,
    "end": 1924,
    "range": [
      1922,
      1924
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1925,
    "end": 1927,
    "range": [
      1925,
      1927
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1929,
    "end": 1932,
    "range": [
      1929,
      1932
    ]
  },
  {
    "type": "Identifier",
    "value": "r3b7",
    "start": 1933,
    "end": 1937,
    "range": [
      1933,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1940,
    "end": 1942,
    "range": [
      1940,
      1942
    ]
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 1943,
    "end": 1945,
    "range": [
      1943,
      1945
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1946,
    "end": 1948,
    "range": [
      1946,
      1948
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1948,
    "end": 1949,
    "range": [
      1948,
      1949
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1966,
    "end": 1969,
    "range": [
      1966,
      1969
    ]
  },
  {
    "type": "Identifier",
    "value": "r4a1",
    "start": 1970,
    "end": 1974,
    "range": [
      1970,
      1974
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1977,
    "end": 1979,
    "range": [
      1977,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1980,
    "end": 1982,
    "range": [
      1980,
      1982
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1983,
    "end": 1985,
    "range": [
      1983,
      1985
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1987,
    "end": 1990,
    "range": [
      1987,
      1990
    ]
  },
  {
    "type": "Identifier",
    "value": "r4a2",
    "start": 1991,
    "end": 1995,
    "range": [
      1991,
      1995
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1996,
    "end": 1997,
    "range": [
      1996,
      1997
    ]
  },
  {
    "type": "Identifier",
    "value": "base1",
    "start": 1998,
    "end": 2003,
    "range": [
      1998,
      2003
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 2004,
    "end": 2006,
    "range": [
      2004,
      2006
    ]
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 2007,
    "end": 2012,
    "range": [
      2007,
      2012
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2012,
    "end": 2013,
    "range": [
      2012,
      2013
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2014,
    "end": 2017,
    "range": [
      2014,
      2017
    ]
  },
  {
    "type": "Identifier",
    "value": "r4a3",
    "start": 2018,
    "end": 2022,
    "range": [
      2018,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2025,
    "end": 2027,
    "range": [
      2025,
      2027
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 2028,
    "end": 2030,
    "range": [
      2028,
      2030
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 2031,
    "end": 2033,
    "range": [
      2031,
      2033
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2033,
    "end": 2034,
    "range": [
      2033,
      2034
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2035,
    "end": 2038,
    "range": [
      2035,
      2038
    ]
  },
  {
    "type": "Identifier",
    "value": "r4a4",
    "start": 2039,
    "end": 2043,
    "range": [
      2039,
      2043
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2044,
    "end": 2045,
    "range": [
      2044,
      2045
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2046,
    "end": 2048,
    "range": [
      2046,
      2048
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 2049,
    "end": 2051,
    "range": [
      2049,
      2051
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 2052,
    "end": 2054,
    "range": [
      2052,
      2054
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2054,
    "end": 2055,
    "range": [
      2054,
      2055
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2056,
    "end": 2059,
    "range": [
      2056,
      2059
    ]
  },
  {
    "type": "Identifier",
    "value": "r4a5",
    "start": 2060,
    "end": 2064,
    "range": [
      2060,
      2064
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2065,
    "end": 2066,
    "range": [
      2065,
      2066
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2067,
    "end": 2069,
    "range": [
      2067,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 2070,
    "end": 2072,
    "range": [
      2070,
      2072
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 2073,
    "end": 2075,
    "range": [
      2073,
      2075
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2075,
    "end": 2076,
    "range": [
      2075,
      2076
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2077,
    "end": 2080,
    "range": [
      2077,
      2080
    ]
  },
  {
    "type": "Identifier",
    "value": "r4a6",
    "start": 2081,
    "end": 2085,
    "range": [
      2081,
      2085
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2086,
    "end": 2087,
    "range": [
      2086,
      2087
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2088,
    "end": 2090,
    "range": [
      2088,
      2090
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 2091,
    "end": 2093,
    "range": [
      2091,
      2093
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 2094,
    "end": 2096,
    "range": [
      2094,
      2096
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2096,
    "end": 2097,
    "range": [
      2096,
      2097
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2098,
    "end": 2101,
    "range": [
      2098,
      2101
    ]
  },
  {
    "type": "Identifier",
    "value": "r4a7",
    "start": 2102,
    "end": 2106,
    "range": [
      2102,
      2106
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2107,
    "end": 2108,
    "range": [
      2107,
      2108
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 2109,
    "end": 2111,
    "range": [
      2109,
      2111
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 2112,
    "end": 2114,
    "range": [
      2112,
      2114
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 2115,
    "end": 2117,
    "range": [
      2115,
      2117
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2117,
    "end": 2118,
    "range": [
      2117,
      2118
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2120,
    "end": 2123,
    "range": [
      2120,
      2123
    ]
  },
  {
    "type": "Identifier",
    "value": "r4b1",
    "start": 2124,
    "end": 2128,
    "range": [
      2124,
      2128
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 2131,
    "end": 2133,
    "range": [
      2131,
      2133
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 2134,
    "end": 2136,
    "range": [
      2134,
      2136
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 2137,
    "end": 2139,
    "range": [
      2137,
      2139
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2139,
    "end": 2140,
    "range": [
      2139,
      2140
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2141,
    "end": 2144,
    "range": [
      2141,
      2144
    ]
  },
  {
    "type": "Identifier",
    "value": "r4b2",
    "start": 2145,
    "end": 2149,
    "range": [
      2145,
      2149
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2150,
    "end": 2151,
    "range": [
      2150,
      2151
    ]
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 2152,
    "end": 2157,
    "range": [
      2152,
      2157
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 2158,
    "end": 2160,
    "range": [
      2158,
      2160
    ]
  },
  {
    "type": "Identifier",
    "value": "base1",
    "start": 2161,
    "end": 2166,
    "range": [
      2161,
      2166
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2166,
    "end": 2167,
    "range": [
      2166,
      2167
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2168,
    "end": 2171,
    "range": [
      2168,
      2171
    ]
  },
  {
    "type": "Identifier",
    "value": "r4b3",
    "start": 2172,
    "end": 2176,
    "range": [
      2172,
      2176
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2177,
    "end": 2178,
    "range": [
      2177,
      2178
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 2179,
    "end": 2181,
    "range": [
      2179,
      2181
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 2182,
    "end": 2184,
    "range": [
      2182,
      2184
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2185,
    "end": 2187,
    "range": [
      2185,
      2187
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2187,
    "end": 2188,
    "range": [
      2187,
      2188
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2189,
    "end": 2192,
    "range": [
      2189,
      2192
    ]
  },
  {
    "type": "Identifier",
    "value": "r4b4",
    "start": 2193,
    "end": 2197,
    "range": [
      2193,
      2197
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 2200,
    "end": 2202,
    "range": [
      2200,
      2202
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 2203,
    "end": 2205,
    "range": [
      2203,
      2205
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2206,
    "end": 2208,
    "range": [
      2206,
      2208
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2208,
    "end": 2209,
    "range": [
      2208,
      2209
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2210,
    "end": 2213,
    "range": [
      2210,
      2213
    ]
  },
  {
    "type": "Identifier",
    "value": "r4b5",
    "start": 2214,
    "end": 2218,
    "range": [
      2214,
      2218
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2219,
    "end": 2220,
    "range": [
      2219,
      2220
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 2221,
    "end": 2223,
    "range": [
      2221,
      2223
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 2224,
    "end": 2226,
    "range": [
      2224,
      2226
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2227,
    "end": 2229,
    "range": [
      2227,
      2229
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2229,
    "end": 2230,
    "range": [
      2229,
      2230
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2231,
    "end": 2234,
    "range": [
      2231,
      2234
    ]
  },
  {
    "type": "Identifier",
    "value": "r4b6",
    "start": 2235,
    "end": 2239,
    "range": [
      2235,
      2239
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 2242,
    "end": 2244,
    "range": [
      2242,
      2244
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 2245,
    "end": 2247,
    "range": [
      2245,
      2247
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2248,
    "end": 2250,
    "range": [
      2248,
      2250
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2250,
    "end": 2251,
    "range": [
      2250,
      2251
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2252,
    "end": 2255,
    "range": [
      2252,
      2255
    ]
  },
  {
    "type": "Identifier",
    "value": "r4b7",
    "start": 2256,
    "end": 2260,
    "range": [
      2256,
      2260
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2261,
    "end": 2262,
    "range": [
      2261,
      2262
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 2263,
    "end": 2265,
    "range": [
      2263,
      2265
    ]
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 2266,
    "end": 2268,
    "range": [
      2266,
      2268
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 2269,
    "end": 2271,
    "range": [
      2269,
      2271
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2271,
    "end": 2272,
    "range": [
      2271,
      2272
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2289,
    "end": 2292,
    "range": [
      2289,
      2292
    ]
  },
  {
    "type": "Identifier",
    "value": "r5a1",
    "start": 2293,
    "end": 2297,
    "range": [
      2293,
      2297
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 2300,
    "end": 2302,
    "range": [
      2300,
      2302
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2303,
    "end": 2305,
    "range": [
      2303,
      2305
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 2306,
    "end": 2308,
    "range": [
      2306,
      2308
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2308,
    "end": 2309,
    "range": [
      2308,
      2309
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2310,
    "end": 2313,
    "range": [
      2310,
      2313
    ]
  },
  {
    "type": "Identifier",
    "value": "r5a2",
    "start": 2314,
    "end": 2318,
    "range": [
      2314,
      2318
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2319,
    "end": 2320,
    "range": [
      2319,
      2320
    ]
  },
  {
    "type": "Identifier",
    "value": "base1",
    "start": 2321,
    "end": 2326,
    "range": [
      2321,
      2326
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2327,
    "end": 2329,
    "range": [
      2327,
      2329
    ]
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 2330,
    "end": 2335,
    "range": [
      2330,
      2335
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2335,
    "end": 2336,
    "range": [
      2335,
      2336
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2337,
    "end": 2340,
    "range": [
      2337,
      2340
    ]
  },
  {
    "type": "Identifier",
    "value": "r5a3",
    "start": 2341,
    "end": 2345,
    "range": [
      2341,
      2345
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2346,
    "end": 2347,
    "range": [
      2346,
      2347
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2348,
    "end": 2350,
    "range": [
      2348,
      2350
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2351,
    "end": 2353,
    "range": [
      2351,
      2353
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 2354,
    "end": 2356,
    "range": [
      2354,
      2356
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2356,
    "end": 2357,
    "range": [
      2356,
      2357
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2358,
    "end": 2361,
    "range": [
      2358,
      2361
    ]
  },
  {
    "type": "Identifier",
    "value": "r5a4",
    "start": 2362,
    "end": 2366,
    "range": [
      2362,
      2366
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2367,
    "end": 2368,
    "range": [
      2367,
      2368
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2369,
    "end": 2371,
    "range": [
      2369,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2372,
    "end": 2374,
    "range": [
      2372,
      2374
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 2375,
    "end": 2377,
    "range": [
      2375,
      2377
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2377,
    "end": 2378,
    "range": [
      2377,
      2378
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2379,
    "end": 2382,
    "range": [
      2379,
      2382
    ]
  },
  {
    "type": "Identifier",
    "value": "r5a5",
    "start": 2383,
    "end": 2387,
    "range": [
      2383,
      2387
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2388,
    "end": 2389,
    "range": [
      2388,
      2389
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2390,
    "end": 2392,
    "range": [
      2390,
      2392
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2393,
    "end": 2395,
    "range": [
      2393,
      2395
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 2396,
    "end": 2398,
    "range": [
      2396,
      2398
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2398,
    "end": 2399,
    "range": [
      2398,
      2399
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2400,
    "end": 2403,
    "range": [
      2400,
      2403
    ]
  },
  {
    "type": "Identifier",
    "value": "r5a6",
    "start": 2404,
    "end": 2408,
    "range": [
      2404,
      2408
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2409,
    "end": 2410,
    "range": [
      2409,
      2410
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2411,
    "end": 2413,
    "range": [
      2411,
      2413
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2414,
    "end": 2416,
    "range": [
      2414,
      2416
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 2417,
    "end": 2419,
    "range": [
      2417,
      2419
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2419,
    "end": 2420,
    "range": [
      2419,
      2420
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2421,
    "end": 2424,
    "range": [
      2421,
      2424
    ]
  },
  {
    "type": "Identifier",
    "value": "r5a7",
    "start": 2425,
    "end": 2429,
    "range": [
      2425,
      2429
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2430,
    "end": 2431,
    "range": [
      2430,
      2431
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 2432,
    "end": 2434,
    "range": [
      2432,
      2434
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2435,
    "end": 2437,
    "range": [
      2435,
      2437
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 2438,
    "end": 2440,
    "range": [
      2438,
      2440
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2440,
    "end": 2441,
    "range": [
      2440,
      2441
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2443,
    "end": 2446,
    "range": [
      2443,
      2446
    ]
  },
  {
    "type": "Identifier",
    "value": "r5b1",
    "start": 2447,
    "end": 2451,
    "range": [
      2447,
      2451
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2452,
    "end": 2453,
    "range": [
      2452,
      2453
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 2454,
    "end": 2456,
    "range": [
      2454,
      2456
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2457,
    "end": 2459,
    "range": [
      2457,
      2459
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 2460,
    "end": 2462,
    "range": [
      2460,
      2462
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2464,
    "end": 2467,
    "range": [
      2464,
      2467
    ]
  },
  {
    "type": "Identifier",
    "value": "r5b2",
    "start": 2468,
    "end": 2472,
    "range": [
      2468,
      2472
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2473,
    "end": 2474,
    "range": [
      2473,
      2474
    ]
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 2475,
    "end": 2480,
    "range": [
      2475,
      2480
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2481,
    "end": 2483,
    "range": [
      2481,
      2483
    ]
  },
  {
    "type": "Identifier",
    "value": "base1",
    "start": 2484,
    "end": 2489,
    "range": [
      2484,
      2489
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2489,
    "end": 2490,
    "range": [
      2489,
      2490
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2491,
    "end": 2494,
    "range": [
      2491,
      2494
    ]
  },
  {
    "type": "Identifier",
    "value": "r5b3",
    "start": 2495,
    "end": 2499,
    "range": [
      2495,
      2499
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2500,
    "end": 2501,
    "range": [
      2500,
      2501
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 2502,
    "end": 2504,
    "range": [
      2502,
      2504
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2505,
    "end": 2507,
    "range": [
      2505,
      2507
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2508,
    "end": 2510,
    "range": [
      2508,
      2510
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2510,
    "end": 2511,
    "range": [
      2510,
      2511
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2512,
    "end": 2515,
    "range": [
      2512,
      2515
    ]
  },
  {
    "type": "Identifier",
    "value": "r5b4",
    "start": 2516,
    "end": 2520,
    "range": [
      2516,
      2520
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2521,
    "end": 2522,
    "range": [
      2521,
      2522
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 2523,
    "end": 2525,
    "range": [
      2523,
      2525
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2526,
    "end": 2528,
    "range": [
      2526,
      2528
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2529,
    "end": 2531,
    "range": [
      2529,
      2531
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2531,
    "end": 2532,
    "range": [
      2531,
      2532
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2533,
    "end": 2536,
    "range": [
      2533,
      2536
    ]
  },
  {
    "type": "Identifier",
    "value": "r5b5",
    "start": 2537,
    "end": 2541,
    "range": [
      2537,
      2541
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2542,
    "end": 2543,
    "range": [
      2542,
      2543
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 2544,
    "end": 2546,
    "range": [
      2544,
      2546
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2547,
    "end": 2549,
    "range": [
      2547,
      2549
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2550,
    "end": 2552,
    "range": [
      2550,
      2552
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2552,
    "end": 2553,
    "range": [
      2552,
      2553
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2554,
    "end": 2557,
    "range": [
      2554,
      2557
    ]
  },
  {
    "type": "Identifier",
    "value": "r5b6",
    "start": 2558,
    "end": 2562,
    "range": [
      2558,
      2562
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2563,
    "end": 2564,
    "range": [
      2563,
      2564
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 2565,
    "end": 2567,
    "range": [
      2565,
      2567
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2568,
    "end": 2570,
    "range": [
      2568,
      2570
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2571,
    "end": 2573,
    "range": [
      2571,
      2573
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2573,
    "end": 2574,
    "range": [
      2573,
      2574
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2575,
    "end": 2578,
    "range": [
      2575,
      2578
    ]
  },
  {
    "type": "Identifier",
    "value": "r5b7",
    "start": 2579,
    "end": 2583,
    "range": [
      2579,
      2583
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2584,
    "end": 2585,
    "range": [
      2584,
      2585
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 2586,
    "end": 2588,
    "range": [
      2586,
      2588
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2589,
    "end": 2591,
    "range": [
      2589,
      2591
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 2592,
    "end": 2594,
    "range": [
      2592,
      2594
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2594,
    "end": 2595,
    "range": [
      2594,
      2595
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2612,
    "end": 2615,
    "range": [
      2612,
      2615
    ]
  },
  {
    "type": "Identifier",
    "value": "r6a1",
    "start": 2616,
    "end": 2620,
    "range": [
      2616,
      2620
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2621,
    "end": 2622,
    "range": [
      2621,
      2622
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 2623,
    "end": 2625,
    "range": [
      2623,
      2625
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2626,
    "end": 2628,
    "range": [
      2626,
      2628
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 2629,
    "end": 2631,
    "range": [
      2629,
      2631
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2631,
    "end": 2632,
    "range": [
      2631,
      2632
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2633,
    "end": 2636,
    "range": [
      2633,
      2636
    ]
  },
  {
    "type": "Identifier",
    "value": "r6a2",
    "start": 2637,
    "end": 2641,
    "range": [
      2637,
      2641
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2642,
    "end": 2643,
    "range": [
      2642,
      2643
    ]
  },
  {
    "type": "Identifier",
    "value": "base1",
    "start": 2644,
    "end": 2649,
    "range": [
      2644,
      2649
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2650,
    "end": 2652,
    "range": [
      2650,
      2652
    ]
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 2653,
    "end": 2658,
    "range": [
      2653,
      2658
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2658,
    "end": 2659,
    "range": [
      2658,
      2659
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2660,
    "end": 2663,
    "range": [
      2660,
      2663
    ]
  },
  {
    "type": "Identifier",
    "value": "r6a3",
    "start": 2664,
    "end": 2668,
    "range": [
      2664,
      2668
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2669,
    "end": 2670,
    "range": [
      2669,
      2670
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2671,
    "end": 2673,
    "range": [
      2671,
      2673
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2674,
    "end": 2676,
    "range": [
      2674,
      2676
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 2677,
    "end": 2679,
    "range": [
      2677,
      2679
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2679,
    "end": 2680,
    "range": [
      2679,
      2680
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2681,
    "end": 2684,
    "range": [
      2681,
      2684
    ]
  },
  {
    "type": "Identifier",
    "value": "r6a4",
    "start": 2685,
    "end": 2689,
    "range": [
      2685,
      2689
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2690,
    "end": 2691,
    "range": [
      2690,
      2691
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2692,
    "end": 2694,
    "range": [
      2692,
      2694
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2695,
    "end": 2697,
    "range": [
      2695,
      2697
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 2698,
    "end": 2700,
    "range": [
      2698,
      2700
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2700,
    "end": 2701,
    "range": [
      2700,
      2701
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2702,
    "end": 2705,
    "range": [
      2702,
      2705
    ]
  },
  {
    "type": "Identifier",
    "value": "r6a5",
    "start": 2706,
    "end": 2710,
    "range": [
      2706,
      2710
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2711,
    "end": 2712,
    "range": [
      2711,
      2712
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2713,
    "end": 2715,
    "range": [
      2713,
      2715
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2716,
    "end": 2718,
    "range": [
      2716,
      2718
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 2719,
    "end": 2721,
    "range": [
      2719,
      2721
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2721,
    "end": 2722,
    "range": [
      2721,
      2722
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2723,
    "end": 2726,
    "range": [
      2723,
      2726
    ]
  },
  {
    "type": "Identifier",
    "value": "r6a6",
    "start": 2727,
    "end": 2731,
    "range": [
      2727,
      2731
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2732,
    "end": 2733,
    "range": [
      2732,
      2733
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2734,
    "end": 2736,
    "range": [
      2734,
      2736
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2737,
    "end": 2739,
    "range": [
      2737,
      2739
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 2740,
    "end": 2742,
    "range": [
      2740,
      2742
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2742,
    "end": 2743,
    "range": [
      2742,
      2743
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2744,
    "end": 2747,
    "range": [
      2744,
      2747
    ]
  },
  {
    "type": "Identifier",
    "value": "r6a7",
    "start": 2748,
    "end": 2752,
    "range": [
      2748,
      2752
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2753,
    "end": 2754,
    "range": [
      2753,
      2754
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 2755,
    "end": 2757,
    "range": [
      2755,
      2757
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2758,
    "end": 2760,
    "range": [
      2758,
      2760
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 2761,
    "end": 2763,
    "range": [
      2761,
      2763
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2763,
    "end": 2764,
    "range": [
      2763,
      2764
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2766,
    "end": 2769,
    "range": [
      2766,
      2769
    ]
  },
  {
    "type": "Identifier",
    "value": "r6b1",
    "start": 2770,
    "end": 2774,
    "range": [
      2770,
      2774
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2775,
    "end": 2776,
    "range": [
      2775,
      2776
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 2777,
    "end": 2779,
    "range": [
      2777,
      2779
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2780,
    "end": 2782,
    "range": [
      2780,
      2782
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 2783,
    "end": 2785,
    "range": [
      2783,
      2785
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2785,
    "end": 2786,
    "range": [
      2785,
      2786
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2787,
    "end": 2790,
    "range": [
      2787,
      2790
    ]
  },
  {
    "type": "Identifier",
    "value": "r6b2",
    "start": 2791,
    "end": 2795,
    "range": [
      2791,
      2795
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2796,
    "end": 2797,
    "range": [
      2796,
      2797
    ]
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 2798,
    "end": 2803,
    "range": [
      2798,
      2803
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2804,
    "end": 2806,
    "range": [
      2804,
      2806
    ]
  },
  {
    "type": "Identifier",
    "value": "base1",
    "start": 2807,
    "end": 2812,
    "range": [
      2807,
      2812
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2812,
    "end": 2813,
    "range": [
      2812,
      2813
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2814,
    "end": 2817,
    "range": [
      2814,
      2817
    ]
  },
  {
    "type": "Identifier",
    "value": "r6b3",
    "start": 2818,
    "end": 2822,
    "range": [
      2818,
      2822
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2823,
    "end": 2824,
    "range": [
      2823,
      2824
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 2825,
    "end": 2827,
    "range": [
      2825,
      2827
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2828,
    "end": 2830,
    "range": [
      2828,
      2830
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2831,
    "end": 2833,
    "range": [
      2831,
      2833
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2833,
    "end": 2834,
    "range": [
      2833,
      2834
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2835,
    "end": 2838,
    "range": [
      2835,
      2838
    ]
  },
  {
    "type": "Identifier",
    "value": "r6b4",
    "start": 2839,
    "end": 2843,
    "range": [
      2839,
      2843
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2844,
    "end": 2845,
    "range": [
      2844,
      2845
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 2846,
    "end": 2848,
    "range": [
      2846,
      2848
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2849,
    "end": 2851,
    "range": [
      2849,
      2851
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2852,
    "end": 2854,
    "range": [
      2852,
      2854
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2854,
    "end": 2855,
    "range": [
      2854,
      2855
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2856,
    "end": 2859,
    "range": [
      2856,
      2859
    ]
  },
  {
    "type": "Identifier",
    "value": "r6b5",
    "start": 2860,
    "end": 2864,
    "range": [
      2860,
      2864
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2865,
    "end": 2866,
    "range": [
      2865,
      2866
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 2867,
    "end": 2869,
    "range": [
      2867,
      2869
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2870,
    "end": 2872,
    "range": [
      2870,
      2872
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2873,
    "end": 2875,
    "range": [
      2873,
      2875
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2875,
    "end": 2876,
    "range": [
      2875,
      2876
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2877,
    "end": 2880,
    "range": [
      2877,
      2880
    ]
  },
  {
    "type": "Identifier",
    "value": "r6b6",
    "start": 2881,
    "end": 2885,
    "range": [
      2881,
      2885
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2886,
    "end": 2887,
    "range": [
      2886,
      2887
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 2888,
    "end": 2890,
    "range": [
      2888,
      2890
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2891,
    "end": 2893,
    "range": [
      2891,
      2893
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2894,
    "end": 2896,
    "range": [
      2894,
      2896
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2896,
    "end": 2897,
    "range": [
      2896,
      2897
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2898,
    "end": 2901,
    "range": [
      2898,
      2901
    ]
  },
  {
    "type": "Identifier",
    "value": "r6b7",
    "start": 2902,
    "end": 2906,
    "range": [
      2902,
      2906
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2907,
    "end": 2908,
    "range": [
      2907,
      2908
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 2909,
    "end": 2911,
    "range": [
      2909,
      2911
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 2912,
    "end": 2914,
    "range": [
      2912,
      2914
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 2915,
    "end": 2917,
    "range": [
      2915,
      2917
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2917,
    "end": 2918,
    "range": [
      2917,
      2918
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2936,
    "end": 2939,
    "range": [
      2936,
      2939
    ]
  },
  {
    "type": "Identifier",
    "value": "r7a1",
    "start": 2940,
    "end": 2944,
    "range": [
      2940,
      2944
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2945,
    "end": 2946,
    "range": [
      2945,
      2946
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 2947,
    "end": 2949,
    "range": [
      2947,
      2949
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2950,
    "end": 2953,
    "range": [
      2950,
      2953
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 2954,
    "end": 2956,
    "range": [
      2954,
      2956
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2956,
    "end": 2957,
    "range": [
      2956,
      2957
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2958,
    "end": 2961,
    "range": [
      2958,
      2961
    ]
  },
  {
    "type": "Identifier",
    "value": "r7a2",
    "start": 2962,
    "end": 2966,
    "range": [
      2962,
      2966
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2967,
    "end": 2968,
    "range": [
      2967,
      2968
    ]
  },
  {
    "type": "Identifier",
    "value": "base1",
    "start": 2969,
    "end": 2974,
    "range": [
      2969,
      2974
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2975,
    "end": 2978,
    "range": [
      2975,
      2978
    ]
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 2979,
    "end": 2984,
    "range": [
      2979,
      2984
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2984,
    "end": 2985,
    "range": [
      2984,
      2985
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2986,
    "end": 2989,
    "range": [
      2986,
      2989
    ]
  },
  {
    "type": "Identifier",
    "value": "r7a3",
    "start": 2990,
    "end": 2994,
    "range": [
      2990,
      2994
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2995,
    "end": 2996,
    "range": [
      2995,
      2996
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2997,
    "end": 2999,
    "range": [
      2997,
      2999
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3000,
    "end": 3003,
    "range": [
      3000,
      3003
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 3004,
    "end": 3006,
    "range": [
      3004,
      3006
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3006,
    "end": 3007,
    "range": [
      3006,
      3007
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3008,
    "end": 3011,
    "range": [
      3008,
      3011
    ]
  },
  {
    "type": "Identifier",
    "value": "r7a4",
    "start": 3012,
    "end": 3016,
    "range": [
      3012,
      3016
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3017,
    "end": 3018,
    "range": [
      3017,
      3018
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3019,
    "end": 3021,
    "range": [
      3019,
      3021
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3022,
    "end": 3025,
    "range": [
      3022,
      3025
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 3026,
    "end": 3028,
    "range": [
      3026,
      3028
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3028,
    "end": 3029,
    "range": [
      3028,
      3029
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3030,
    "end": 3033,
    "range": [
      3030,
      3033
    ]
  },
  {
    "type": "Identifier",
    "value": "r7a5",
    "start": 3034,
    "end": 3038,
    "range": [
      3034,
      3038
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3039,
    "end": 3040,
    "range": [
      3039,
      3040
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 3041,
    "end": 3043,
    "range": [
      3041,
      3043
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3044,
    "end": 3047,
    "range": [
      3044,
      3047
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 3048,
    "end": 3050,
    "range": [
      3048,
      3050
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3050,
    "end": 3051,
    "range": [
      3050,
      3051
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3052,
    "end": 3055,
    "range": [
      3052,
      3055
    ]
  },
  {
    "type": "Identifier",
    "value": "r7a6",
    "start": 3056,
    "end": 3060,
    "range": [
      3056,
      3060
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3061,
    "end": 3062,
    "range": [
      3061,
      3062
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 3063,
    "end": 3065,
    "range": [
      3063,
      3065
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3066,
    "end": 3069,
    "range": [
      3066,
      3069
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 3070,
    "end": 3072,
    "range": [
      3070,
      3072
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3072,
    "end": 3073,
    "range": [
      3072,
      3073
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3074,
    "end": 3077,
    "range": [
      3074,
      3077
    ]
  },
  {
    "type": "Identifier",
    "value": "r7a7",
    "start": 3078,
    "end": 3082,
    "range": [
      3078,
      3082
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3083,
    "end": 3084,
    "range": [
      3083,
      3084
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 3085,
    "end": 3087,
    "range": [
      3085,
      3087
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3088,
    "end": 3091,
    "range": [
      3088,
      3091
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 3092,
    "end": 3094,
    "range": [
      3092,
      3094
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3094,
    "end": 3095,
    "range": [
      3094,
      3095
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3097,
    "end": 3100,
    "range": [
      3097,
      3100
    ]
  },
  {
    "type": "Identifier",
    "value": "r7b1",
    "start": 3101,
    "end": 3105,
    "range": [
      3101,
      3105
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3106,
    "end": 3107,
    "range": [
      3106,
      3107
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 3108,
    "end": 3110,
    "range": [
      3108,
      3110
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3111,
    "end": 3114,
    "range": [
      3111,
      3114
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 3115,
    "end": 3117,
    "range": [
      3115,
      3117
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3117,
    "end": 3118,
    "range": [
      3117,
      3118
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3119,
    "end": 3122,
    "range": [
      3119,
      3122
    ]
  },
  {
    "type": "Identifier",
    "value": "r7b2",
    "start": 3123,
    "end": 3127,
    "range": [
      3123,
      3127
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3128,
    "end": 3129,
    "range": [
      3128,
      3129
    ]
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 3130,
    "end": 3135,
    "range": [
      3130,
      3135
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3136,
    "end": 3139,
    "range": [
      3136,
      3139
    ]
  },
  {
    "type": "Identifier",
    "value": "base1",
    "start": 3140,
    "end": 3145,
    "range": [
      3140,
      3145
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3145,
    "end": 3146,
    "range": [
      3145,
      3146
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3147,
    "end": 3150,
    "range": [
      3147,
      3150
    ]
  },
  {
    "type": "Identifier",
    "value": "r7b3",
    "start": 3151,
    "end": 3155,
    "range": [
      3151,
      3155
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3156,
    "end": 3157,
    "range": [
      3156,
      3157
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 3158,
    "end": 3160,
    "range": [
      3158,
      3160
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3161,
    "end": 3164,
    "range": [
      3161,
      3164
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3165,
    "end": 3167,
    "range": [
      3165,
      3167
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3167,
    "end": 3168,
    "range": [
      3167,
      3168
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3169,
    "end": 3172,
    "range": [
      3169,
      3172
    ]
  },
  {
    "type": "Identifier",
    "value": "r7b4",
    "start": 3173,
    "end": 3177,
    "range": [
      3173,
      3177
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3178,
    "end": 3179,
    "range": [
      3178,
      3179
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 3180,
    "end": 3182,
    "range": [
      3180,
      3182
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3183,
    "end": 3186,
    "range": [
      3183,
      3186
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3187,
    "end": 3189,
    "range": [
      3187,
      3189
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3189,
    "end": 3190,
    "range": [
      3189,
      3190
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3191,
    "end": 3194,
    "range": [
      3191,
      3194
    ]
  },
  {
    "type": "Identifier",
    "value": "r7b5",
    "start": 3195,
    "end": 3199,
    "range": [
      3195,
      3199
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3200,
    "end": 3201,
    "range": [
      3200,
      3201
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 3202,
    "end": 3204,
    "range": [
      3202,
      3204
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3205,
    "end": 3208,
    "range": [
      3205,
      3208
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 3209,
    "end": 3211,
    "range": [
      3209,
      3211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3211,
    "end": 3212,
    "range": [
      3211,
      3212
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3213,
    "end": 3216,
    "range": [
      3213,
      3216
    ]
  },
  {
    "type": "Identifier",
    "value": "r7b6",
    "start": 3217,
    "end": 3221,
    "range": [
      3217,
      3221
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3222,
    "end": 3223,
    "range": [
      3222,
      3223
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 3224,
    "end": 3226,
    "range": [
      3224,
      3226
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3227,
    "end": 3230,
    "range": [
      3227,
      3230
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 3231,
    "end": 3233,
    "range": [
      3231,
      3233
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3233,
    "end": 3234,
    "range": [
      3233,
      3234
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3235,
    "end": 3238,
    "range": [
      3235,
      3238
    ]
  },
  {
    "type": "Identifier",
    "value": "r7b7",
    "start": 3239,
    "end": 3243,
    "range": [
      3239,
      3243
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3244,
    "end": 3245,
    "range": [
      3244,
      3245
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 3246,
    "end": 3248,
    "range": [
      3246,
      3248
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3249,
    "end": 3252,
    "range": [
      3249,
      3252
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 3253,
    "end": 3255,
    "range": [
      3253,
      3255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3255,
    "end": 3256,
    "range": [
      3255,
      3256
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3274,
    "end": 3277,
    "range": [
      3274,
      3277
    ]
  },
  {
    "type": "Identifier",
    "value": "r8a1",
    "start": 3278,
    "end": 3282,
    "range": [
      3278,
      3282
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3283,
    "end": 3284,
    "range": [
      3283,
      3284
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 3285,
    "end": 3287,
    "range": [
      3285,
      3287
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 3288,
    "end": 3291,
    "range": [
      3288,
      3291
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 3292,
    "end": 3294,
    "range": [
      3292,
      3294
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3294,
    "end": 3295,
    "range": [
      3294,
      3295
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3296,
    "end": 3299,
    "range": [
      3296,
      3299
    ]
  },
  {
    "type": "Identifier",
    "value": "r8a2",
    "start": 3300,
    "end": 3304,
    "range": [
      3300,
      3304
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3305,
    "end": 3306,
    "range": [
      3305,
      3306
    ]
  },
  {
    "type": "Identifier",
    "value": "base1",
    "start": 3307,
    "end": 3312,
    "range": [
      3307,
      3312
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 3313,
    "end": 3316,
    "range": [
      3313,
      3316
    ]
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 3317,
    "end": 3322,
    "range": [
      3317,
      3322
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3322,
    "end": 3323,
    "range": [
      3322,
      3323
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3324,
    "end": 3327,
    "range": [
      3324,
      3327
    ]
  },
  {
    "type": "Identifier",
    "value": "r8a3",
    "start": 3328,
    "end": 3332,
    "range": [
      3328,
      3332
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3333,
    "end": 3334,
    "range": [
      3333,
      3334
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3335,
    "end": 3337,
    "range": [
      3335,
      3337
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 3338,
    "end": 3341,
    "range": [
      3338,
      3341
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 3342,
    "end": 3344,
    "range": [
      3342,
      3344
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3344,
    "end": 3345,
    "range": [
      3344,
      3345
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3346,
    "end": 3349,
    "range": [
      3346,
      3349
    ]
  },
  {
    "type": "Identifier",
    "value": "r8a4",
    "start": 3350,
    "end": 3354,
    "range": [
      3350,
      3354
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3355,
    "end": 3356,
    "range": [
      3355,
      3356
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3357,
    "end": 3359,
    "range": [
      3357,
      3359
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 3360,
    "end": 3363,
    "range": [
      3360,
      3363
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 3364,
    "end": 3366,
    "range": [
      3364,
      3366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3366,
    "end": 3367,
    "range": [
      3366,
      3367
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3368,
    "end": 3371,
    "range": [
      3368,
      3371
    ]
  },
  {
    "type": "Identifier",
    "value": "r8a5",
    "start": 3372,
    "end": 3376,
    "range": [
      3372,
      3376
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3377,
    "end": 3378,
    "range": [
      3377,
      3378
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 3379,
    "end": 3381,
    "range": [
      3379,
      3381
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 3382,
    "end": 3385,
    "range": [
      3382,
      3385
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 3386,
    "end": 3388,
    "range": [
      3386,
      3388
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3388,
    "end": 3389,
    "range": [
      3388,
      3389
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3390,
    "end": 3393,
    "range": [
      3390,
      3393
    ]
  },
  {
    "type": "Identifier",
    "value": "r8a6",
    "start": 3394,
    "end": 3398,
    "range": [
      3394,
      3398
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3399,
    "end": 3400,
    "range": [
      3399,
      3400
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 3401,
    "end": 3403,
    "range": [
      3401,
      3403
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 3404,
    "end": 3407,
    "range": [
      3404,
      3407
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 3408,
    "end": 3410,
    "range": [
      3408,
      3410
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3410,
    "end": 3411,
    "range": [
      3410,
      3411
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3412,
    "end": 3415,
    "range": [
      3412,
      3415
    ]
  },
  {
    "type": "Identifier",
    "value": "r8a7",
    "start": 3416,
    "end": 3420,
    "range": [
      3416,
      3420
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3421,
    "end": 3422,
    "range": [
      3421,
      3422
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 3423,
    "end": 3425,
    "range": [
      3423,
      3425
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 3426,
    "end": 3429,
    "range": [
      3426,
      3429
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 3430,
    "end": 3432,
    "range": [
      3430,
      3432
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3432,
    "end": 3433,
    "range": [
      3432,
      3433
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3435,
    "end": 3438,
    "range": [
      3435,
      3438
    ]
  },
  {
    "type": "Identifier",
    "value": "r8b1",
    "start": 3439,
    "end": 3443,
    "range": [
      3439,
      3443
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3444,
    "end": 3445,
    "range": [
      3444,
      3445
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 3446,
    "end": 3448,
    "range": [
      3446,
      3448
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 3449,
    "end": 3452,
    "range": [
      3449,
      3452
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 3453,
    "end": 3455,
    "range": [
      3453,
      3455
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3455,
    "end": 3456,
    "range": [
      3455,
      3456
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3457,
    "end": 3460,
    "range": [
      3457,
      3460
    ]
  },
  {
    "type": "Identifier",
    "value": "r8b2",
    "start": 3461,
    "end": 3465,
    "range": [
      3461,
      3465
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3466,
    "end": 3467,
    "range": [
      3466,
      3467
    ]
  },
  {
    "type": "Identifier",
    "value": "base2",
    "start": 3468,
    "end": 3473,
    "range": [
      3468,
      3473
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 3474,
    "end": 3477,
    "range": [
      3474,
      3477
    ]
  },
  {
    "type": "Identifier",
    "value": "base1",
    "start": 3478,
    "end": 3483,
    "range": [
      3478,
      3483
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3483,
    "end": 3484,
    "range": [
      3483,
      3484
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3485,
    "end": 3488,
    "range": [
      3485,
      3488
    ]
  },
  {
    "type": "Identifier",
    "value": "r8b3",
    "start": 3489,
    "end": 3493,
    "range": [
      3489,
      3493
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3494,
    "end": 3495,
    "range": [
      3494,
      3495
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 3496,
    "end": 3498,
    "range": [
      3496,
      3498
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 3499,
    "end": 3502,
    "range": [
      3499,
      3502
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3503,
    "end": 3505,
    "range": [
      3503,
      3505
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3505,
    "end": 3506,
    "range": [
      3505,
      3506
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3507,
    "end": 3510,
    "range": [
      3507,
      3510
    ]
  },
  {
    "type": "Identifier",
    "value": "r8b4",
    "start": 3511,
    "end": 3515,
    "range": [
      3511,
      3515
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3516,
    "end": 3517,
    "range": [
      3516,
      3517
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 3518,
    "end": 3520,
    "range": [
      3518,
      3520
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 3521,
    "end": 3524,
    "range": [
      3521,
      3524
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3525,
    "end": 3527,
    "range": [
      3525,
      3527
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3527,
    "end": 3528,
    "range": [
      3527,
      3528
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3529,
    "end": 3532,
    "range": [
      3529,
      3532
    ]
  },
  {
    "type": "Identifier",
    "value": "r8b5",
    "start": 3533,
    "end": 3537,
    "range": [
      3533,
      3537
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3538,
    "end": 3539,
    "range": [
      3538,
      3539
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 3540,
    "end": 3542,
    "range": [
      3540,
      3542
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 3543,
    "end": 3546,
    "range": [
      3543,
      3546
    ]
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 3547,
    "end": 3549,
    "range": [
      3547,
      3549
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3549,
    "end": 3550,
    "range": [
      3549,
      3550
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3551,
    "end": 3554,
    "range": [
      3551,
      3554
    ]
  },
  {
    "type": "Identifier",
    "value": "r8b6",
    "start": 3555,
    "end": 3559,
    "range": [
      3555,
      3559
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3560,
    "end": 3561,
    "range": [
      3560,
      3561
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 3562,
    "end": 3564,
    "range": [
      3562,
      3564
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 3565,
    "end": 3568,
    "range": [
      3565,
      3568
    ]
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 3569,
    "end": 3571,
    "range": [
      3569,
      3571
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3571,
    "end": 3572,
    "range": [
      3571,
      3572
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3573,
    "end": 3576,
    "range": [
      3573,
      3576
    ]
  },
  {
    "type": "Identifier",
    "value": "r8b7",
    "start": 3577,
    "end": 3581,
    "range": [
      3577,
      3581
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3582,
    "end": 3583,
    "range": [
      3582,
      3583
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 3584,
    "end": 3586,
    "range": [
      3584,
      3586
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 3587,
    "end": 3590,
    "range": [
      3587,
      3590
    ]
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 3591,
    "end": 3593,
    "range": [
      3591,
      3593
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3593,
    "end": 3594,
    "range": [
      3593,
      3594
    ]
  }
]
```
