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
