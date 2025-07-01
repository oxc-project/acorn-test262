__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 35
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "width",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
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
            "accessibility": null,
            "static": false,
            "start": 40,
            "end": 54
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "height",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 65
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 67,
                "end": 73
              },
              "start": 65,
              "end": 73
            },
            "accessibility": null,
            "static": false,
            "start": 59,
            "end": 74
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "visible",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 86
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 88,
                "end": 95
              },
              "start": 86,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 79,
            "end": 96
          }
        ],
        "start": 16,
        "end": 98
      },
      "declare": false,
      "start": 0,
      "end": 98
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Named",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 115
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 126
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 128,
                "end": 134
              },
              "start": 126,
              "end": 134
            },
            "accessibility": null,
            "static": false,
            "start": 122,
            "end": 135
          }
        ],
        "start": 116,
        "end": 137
      },
      "declare": false,
      "start": 100,
      "end": 137
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 154
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 162
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
              },
              "start": 162,
              "end": 170
            },
            "accessibility": null,
            "static": false,
            "start": 161,
            "end": 171
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "accessibility": null,
            "static": false,
            "start": 176,
            "end": 186
          }
        ],
        "start": 155,
        "end": 188
      },
      "declare": false,
      "start": 139,
      "end": 188
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T00",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 222
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 228,
          "end": 229
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 234
          },
          "typeArguments": null,
          "start": 233,
          "end": 234
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 237,
          "end": 243
        },
        "optional": false,
        "readonly": null,
        "start": 225,
        "end": 245
      },
      "declare": false,
      "start": 214,
      "end": 246
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 265
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 271,
          "end": 272
        },
        "constraint": {
          "type": "TSNumberKeyword",
          "start": 276,
          "end": 282
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 285,
          "end": 291
        },
        "optional": false,
        "readonly": null,
        "start": 268,
        "end": 293
      },
      "declare": false,
      "start": 257,
      "end": 294
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
        "end": 313
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 319,
          "end": 320
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 328
          },
          "typeArguments": null,
          "start": 324,
          "end": 328
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 331,
          "end": 337
        },
        "optional": false,
        "readonly": null,
        "start": 316,
        "end": 339
      },
      "declare": false,
      "start": 305,
      "end": 340
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 359
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 362,
          "end": 368
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 373
              },
              "typeArguments": null,
              "start": 369,
              "end": 373
            },
            {
              "type": "TSNumberKeyword",
              "start": 375,
              "end": 381
            }
          ],
          "start": 368,
          "end": 382
        },
        "start": 362,
        "end": 382
      },
      "declare": false,
      "start": 351,
      "end": 383
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 400,
        "end": 403
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 406,
          "end": 410
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 416
              },
              "typeArguments": null,
              "start": 411,
              "end": 416
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "name",
                "raw": "\"name\"",
                "start": 418,
                "end": 424
              },
              "start": 418,
              "end": 424
            }
          ],
          "start": 410,
          "end": 425
        },
        "start": 406,
        "end": 425
      },
      "declare": false,
      "start": 395,
      "end": 426
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
        "end": 435
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 442
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 448
              },
              "typeArguments": null,
              "start": 443,
              "end": 448
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 450,
                "end": 455
              },
              "start": 450,
              "end": 455
            }
          ],
          "start": 442,
          "end": 456
        },
        "start": 438,
        "end": 456
      },
      "declare": false,
      "start": 427,
      "end": 457
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 476
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 479,
          "end": 483
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 484,
                "end": 489
              },
              "typeArguments": null,
              "start": 484,
              "end": 489
            },
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "\"name\"",
                    "start": 491,
                    "end": 497
                  },
                  "start": 491,
                  "end": 497
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 500,
                    "end": 505
                  },
                  "start": 500,
                  "end": 505
                }
              ],
              "start": 491,
              "end": 505
            }
          ],
          "start": 483,
          "end": 506
        },
        "start": 479,
        "end": 506
      },
      "declare": false,
      "start": 468,
      "end": 507
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 523,
        "end": 526
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 529,
          "end": 533
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 534,
                "end": 539
              },
              "typeArguments": null,
              "start": 534,
              "end": 539
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Named",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 552
                },
                "typeArguments": null,
                "start": 547,
                "end": 552
              },
              "start": 541,
              "end": 552
            }
          ],
          "start": 533,
          "end": 553
        },
        "start": 529,
        "end": 553
      },
      "declare": false,
      "start": 518,
      "end": 554
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T14",
        "optional": false,
        "typeAnnotation": null,
        "start": 560,
        "end": 563
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 566,
          "end": 570
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 576
              },
              "typeArguments": null,
              "start": 571,
              "end": 576
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 584,
                  "end": 589
                },
                "typeArguments": null,
                "start": 584,
                "end": 589
              },
              "start": 578,
              "end": 589
            }
          ],
          "start": 570,
          "end": 590
        },
        "start": 566,
        "end": 590
      },
      "declare": false,
      "start": 555,
      "end": 591
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T15",
        "optional": false,
        "typeAnnotation": null,
        "start": 607,
        "end": 610
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 613,
          "end": 617
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 618,
                "end": 623
              },
              "typeArguments": null,
              "start": 618,
              "end": 623
            },
            {
              "type": "TSNeverKeyword",
              "start": 625,
              "end": 630
            }
          ],
          "start": 617,
          "end": 631
        },
        "start": 613,
        "end": 631
      },
      "declare": false,
      "start": 602,
      "end": 632
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T16",
        "optional": false,
        "typeAnnotation": null,
        "start": 638,
        "end": 641
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 644,
          "end": 648
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 649,
                "end": 654
              },
              "typeArguments": null,
              "start": 649,
              "end": 654
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 656,
              "end": 665
            }
          ],
          "start": 648,
          "end": 666
        },
        "start": 644,
        "end": 666
      },
      "declare": false,
      "start": 633,
      "end": 667
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 688,
        "end": 690
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
              "start": 691,
              "end": 692
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 691,
            "end": 692
          }
        ],
        "start": 690,
        "end": 693
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 697,
                "end": 698
              },
              "typeArguments": null,
              "start": 697,
              "end": 698
            },
            "start": 695,
            "end": 698
          },
          "start": 694,
          "end": 698
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Pick",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 713,
                        "end": 717
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Shape",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 718,
                              "end": 723
                            },
                            "typeArguments": null,
                            "start": 718,
                            "end": 723
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 725,
                              "end": 726
                            },
                            "typeArguments": null,
                            "start": 725,
                            "end": 726
                          }
                        ],
                        "start": 717,
                        "end": 727
                      },
                      "start": 713,
                      "end": 727
                    },
                    "start": 711,
                    "end": 727
                  },
                  "start": 710,
                  "end": 727
                },
                "init": null,
                "definite": false,
                "start": 710,
                "end": 727
              }
            ],
            "declare": false,
            "start": 706,
            "end": 728
          }
        ],
        "start": 700,
        "end": 740
      },
      "expression": false,
      "start": 679,
      "end": 740
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 751,
        "end": 753
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
              "start": 754,
              "end": 755
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 764,
                  "end": 770
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 773,
                  "end": 779
                }
              ],
              "start": 764,
              "end": 779
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 754,
            "end": 779
          }
        ],
        "start": 753,
        "end": 780
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 784,
                "end": 785
              },
              "typeArguments": null,
              "start": 784,
              "end": 785
            },
            "start": 782,
            "end": 785
          },
          "start": 781,
          "end": 785
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Pick",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 800,
                        "end": 804
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Shape",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 805,
                              "end": 810
                            },
                            "typeArguments": null,
                            "start": 805,
                            "end": 810
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 812,
                              "end": 813
                            },
                            "typeArguments": null,
                            "start": 812,
                            "end": 813
                          }
                        ],
                        "start": 804,
                        "end": 814
                      },
                      "start": 800,
                      "end": 814
                    },
                    "start": 798,
                    "end": 814
                  },
                  "start": 797,
                  "end": 814
                },
                "init": null,
                "definite": false,
                "start": 797,
                "end": 814
              }
            ],
            "declare": false,
            "start": 793,
            "end": 815
          }
        ],
        "start": 787,
        "end": 827
      },
      "expression": false,
      "start": 742,
      "end": 827
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 838,
        "end": 840
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
              "start": 841,
              "end": 842
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 857,
                  "end": 862
                },
                "typeArguments": null,
                "start": 857,
                "end": 862
              },
              "start": 851,
              "end": 862
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 841,
            "end": 862
          }
        ],
        "start": 840,
        "end": 863
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 867,
                "end": 868
              },
              "typeArguments": null,
              "start": 867,
              "end": 868
            },
            "start": 865,
            "end": 868
          },
          "start": 864,
          "end": 868
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Pick",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 883,
                        "end": 887
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Shape",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 888,
                              "end": 893
                            },
                            "typeArguments": null,
                            "start": 888,
                            "end": 893
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 895,
                              "end": 896
                            },
                            "typeArguments": null,
                            "start": 895,
                            "end": 896
                          }
                        ],
                        "start": 887,
                        "end": 897
                      },
                      "start": 883,
                      "end": 897
                    },
                    "start": 881,
                    "end": 897
                  },
                  "start": 880,
                  "end": 897
                },
                "init": null,
                "definite": false,
                "start": 880,
                "end": 897
              }
            ],
            "declare": false,
            "start": 876,
            "end": 898
          }
        ],
        "start": 870,
        "end": 900
      },
      "expression": false,
      "start": 829,
      "end": 900
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 911,
        "end": 913
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
              "start": 914,
              "end": 915
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Named",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 930,
                  "end": 935
                },
                "typeArguments": null,
                "start": 930,
                "end": 935
              },
              "start": 924,
              "end": 935
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 914,
            "end": 935
          }
        ],
        "start": 913,
        "end": 936
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 940,
                "end": 941
              },
              "typeArguments": null,
              "start": 940,
              "end": 941
            },
            "start": 938,
            "end": 941
          },
          "start": 937,
          "end": 941
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Pick",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 956,
                        "end": 960
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Shape",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 961,
                              "end": 966
                            },
                            "typeArguments": null,
                            "start": 961,
                            "end": 966
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 968,
                              "end": 969
                            },
                            "typeArguments": null,
                            "start": 968,
                            "end": 969
                          }
                        ],
                        "start": 960,
                        "end": 970
                      },
                      "start": 956,
                      "end": 970
                    },
                    "start": 954,
                    "end": 970
                  },
                  "start": 953,
                  "end": 970
                },
                "init": null,
                "definite": false,
                "start": 953,
                "end": 970
              }
            ],
            "declare": false,
            "start": 949,
            "end": 971
          }
        ],
        "start": 943,
        "end": 973
      },
      "expression": false,
      "start": 902,
      "end": 973
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1011,
        "end": 1014
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
              "start": 1015,
              "end": 1016
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1015,
            "end": 1016
          }
        ],
        "start": 1014,
        "end": 1017
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1031,
              "end": 1032
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1041,
                  "end": 1042
                },
                "typeArguments": null,
                "start": 1041,
                "end": 1042
              },
              "start": 1035,
              "end": 1042
            },
            "declare": false,
            "start": 1026,
            "end": 1043
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1058,
                        "end": 1059
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
                            "start": 1069,
                            "end": 1070
                          },
                          "typeArguments": null,
                          "start": 1069,
                          "end": 1070
                        },
                        "start": 1063,
                        "end": 1070
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1073,
                            "end": 1074
                          },
                          "typeArguments": null,
                          "start": 1073,
                          "end": 1074
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1075,
                            "end": 1076
                          },
                          "typeArguments": null,
                          "start": 1075,
                          "end": 1076
                        },
                        "start": 1073,
                        "end": 1077
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 1055,
                      "end": 1079
                    },
                    "start": 1053,
                    "end": 1079
                  },
                  "start": 1052,
                  "end": 1079
                },
                "init": null,
                "definite": false,
                "start": 1052,
                "end": 1079
              }
            ],
            "declare": false,
            "start": 1048,
            "end": 1080
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1095,
                        "end": 1096
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
                            "start": 1106,
                            "end": 1107
                          },
                          "typeArguments": null,
                          "start": 1106,
                          "end": 1107
                        },
                        "start": 1100,
                        "end": 1107
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1110,
                            "end": 1111
                          },
                          "typeArguments": null,
                          "start": 1110,
                          "end": 1111
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Q",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1112,
                            "end": 1113
                          },
                          "typeArguments": null,
                          "start": 1112,
                          "end": 1113
                        },
                        "start": 1110,
                        "end": 1114
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 1092,
                      "end": 1116
                    },
                    "start": 1090,
                    "end": 1116
                  },
                  "start": 1089,
                  "end": 1116
                },
                "init": null,
                "definite": false,
                "start": 1089,
                "end": 1116
              }
            ],
            "declare": false,
            "start": 1085,
            "end": 1117
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1132,
                        "end": 1133
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1137,
                          "end": 1138
                        },
                        "typeArguments": null,
                        "start": 1137,
                        "end": 1138
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1141,
                            "end": 1142
                          },
                          "typeArguments": null,
                          "start": 1141,
                          "end": 1142
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1143,
                            "end": 1144
                          },
                          "typeArguments": null,
                          "start": 1143,
                          "end": 1144
                        },
                        "start": 1141,
                        "end": 1145
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 1129,
                      "end": 1147
                    },
                    "start": 1127,
                    "end": 1147
                  },
                  "start": 1126,
                  "end": 1147
                },
                "init": null,
                "definite": false,
                "start": 1126,
                "end": 1147
              }
            ],
            "declare": false,
            "start": 1122,
            "end": 1148
          }
        ],
        "start": 1020,
        "end": 1150
      },
      "expression": false,
      "start": 1002,
      "end": 1150
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1161,
        "end": 1164
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
              "start": 1165,
              "end": 1166
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1165,
            "end": 1166
          }
        ],
        "start": 1164,
        "end": 1167
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1186,
                        "end": 1187
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
                            "start": 1197,
                            "end": 1198
                          },
                          "typeArguments": null,
                          "start": 1197,
                          "end": 1198
                        },
                        "start": 1191,
                        "end": 1198
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1201,
                            "end": 1202
                          },
                          "typeArguments": null,
                          "start": 1201,
                          "end": 1202
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1203,
                            "end": 1204
                          },
                          "typeArguments": null,
                          "start": 1203,
                          "end": 1204
                        },
                        "start": 1201,
                        "end": 1205
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 1183,
                      "end": 1207
                    },
                    "start": 1181,
                    "end": 1207
                  },
                  "start": 1180,
                  "end": 1207
                },
                "init": null,
                "definite": false,
                "start": 1180,
                "end": 1207
              }
            ],
            "declare": false,
            "start": 1176,
            "end": 1208
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1223,
                        "end": 1224
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
                            "start": 1234,
                            "end": 1235
                          },
                          "typeArguments": null,
                          "start": 1234,
                          "end": 1235
                        },
                        "start": 1228,
                        "end": 1235
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1239,
                            "end": 1240
                          },
                          "typeArguments": null,
                          "start": 1239,
                          "end": 1240
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1241,
                            "end": 1242
                          },
                          "typeArguments": null,
                          "start": 1241,
                          "end": 1242
                        },
                        "start": 1239,
                        "end": 1243
                      },
                      "optional": true,
                      "readonly": null,
                      "start": 1220,
                      "end": 1245
                    },
                    "start": 1218,
                    "end": 1245
                  },
                  "start": 1217,
                  "end": 1245
                },
                "init": null,
                "definite": false,
                "start": 1217,
                "end": 1245
              }
            ],
            "declare": false,
            "start": 1213,
            "end": 1246
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1280,
                        "end": 1281
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
                            "start": 1291,
                            "end": 1292
                          },
                          "typeArguments": null,
                          "start": 1291,
                          "end": 1292
                        },
                        "start": 1285,
                        "end": 1292
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1295,
                            "end": 1296
                          },
                          "typeArguments": null,
                          "start": 1295,
                          "end": 1296
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1297,
                            "end": 1298
                          },
                          "typeArguments": null,
                          "start": 1297,
                          "end": 1298
                        },
                        "start": 1295,
                        "end": 1299
                      },
                      "optional": false,
                      "readonly": true,
                      "start": 1268,
                      "end": 1301
                    },
                    "start": 1266,
                    "end": 1301
                  },
                  "start": 1265,
                  "end": 1301
                },
                "init": null,
                "definite": false,
                "start": 1265,
                "end": 1301
              }
            ],
            "declare": false,
            "start": 1261,
            "end": 1302
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1336,
                        "end": 1337
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
                            "start": 1347,
                            "end": 1348
                          },
                          "typeArguments": null,
                          "start": 1347,
                          "end": 1348
                        },
                        "start": 1341,
                        "end": 1348
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1352,
                            "end": 1353
                          },
                          "typeArguments": null,
                          "start": 1352,
                          "end": 1353
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1354,
                            "end": 1355
                          },
                          "typeArguments": null,
                          "start": 1354,
                          "end": 1355
                        },
                        "start": 1352,
                        "end": 1356
                      },
                      "optional": true,
                      "readonly": true,
                      "start": 1324,
                      "end": 1358
                    },
                    "start": 1322,
                    "end": 1358
                  },
                  "start": 1321,
                  "end": 1358
                },
                "init": null,
                "definite": false,
                "start": 1321,
                "end": 1358
              }
            ],
            "declare": false,
            "start": 1317,
            "end": 1359
          }
        ],
        "start": 1170,
        "end": 1371
      },
      "expression": false,
      "start": 1152,
      "end": 1371
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1382,
        "end": 1385
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
              "start": 1386,
              "end": 1387
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1386,
            "end": 1387
          }
        ],
        "start": 1385,
        "end": 1388
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1407,
                        "end": 1408
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
                            "start": 1418,
                            "end": 1419
                          },
                          "typeArguments": null,
                          "start": 1418,
                          "end": 1419
                        },
                        "start": 1412,
                        "end": 1419
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1422,
                            "end": 1423
                          },
                          "typeArguments": null,
                          "start": 1422,
                          "end": 1423
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1424,
                            "end": 1425
                          },
                          "typeArguments": null,
                          "start": 1424,
                          "end": 1425
                        },
                        "start": 1422,
                        "end": 1426
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 1404,
                      "end": 1428
                    },
                    "start": 1402,
                    "end": 1428
                  },
                  "start": 1401,
                  "end": 1428
                },
                "init": null,
                "definite": false,
                "start": 1401,
                "end": 1428
              }
            ],
            "declare": false,
            "start": 1397,
            "end": 1429
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1444,
                        "end": 1445
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
                            "start": 1455,
                            "end": 1456
                          },
                          "typeArguments": null,
                          "start": 1455,
                          "end": 1456
                        },
                        "start": 1449,
                        "end": 1456
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1459,
                              "end": 1460
                            },
                            "typeArguments": null,
                            "start": 1459,
                            "end": 1460
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1461,
                              "end": 1462
                            },
                            "typeArguments": null,
                            "start": 1461,
                            "end": 1462
                          },
                          "start": 1459,
                          "end": 1463
                        },
                        "start": 1459,
                        "end": 1465
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 1441,
                      "end": 1467
                    },
                    "start": 1439,
                    "end": 1467
                  },
                  "start": 1438,
                  "end": 1467
                },
                "init": null,
                "definite": false,
                "start": 1438,
                "end": 1467
              }
            ],
            "declare": false,
            "start": 1434,
            "end": 1468
          }
        ],
        "start": 1391,
        "end": 1480
      },
      "expression": false,
      "start": 1373,
      "end": 1480
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objAndReadonly",
        "optional": false,
        "typeAnnotation": null,
        "start": 1555,
        "end": 1569
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1570,
              "end": 1571
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1570,
            "end": 1571
          }
        ],
        "start": 1569,
        "end": 1572
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "primary",
          "optional": false,
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
                "start": 1582,
                "end": 1583
              },
              "typeArguments": null,
              "start": 1582,
              "end": 1583
            },
            "start": 1580,
            "end": 1583
          },
          "start": 1573,
          "end": 1583
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "secondary",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1596,
                "end": 1604
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
                      "start": 1605,
                      "end": 1606
                    },
                    "typeArguments": null,
                    "start": 1605,
                    "end": 1606
                  }
                ],
                "start": 1604,
                "end": 1607
              },
              "start": 1596,
              "end": 1607
            },
            "start": 1594,
            "end": 1607
          },
          "start": 1585,
          "end": 1607
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1610,
            "end": 1611
          },
          "typeArguments": null,
          "start": 1610,
          "end": 1611
        },
        "start": 1608,
        "end": 1611
      },
      "body": null,
      "expression": false,
      "start": 1538,
      "end": 1612
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objAndPartial",
        "optional": false,
        "typeAnnotation": null,
        "start": 1630,
        "end": 1643
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1644,
              "end": 1645
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1644,
            "end": 1645
          }
        ],
        "start": 1643,
        "end": 1646
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "primary",
          "optional": false,
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
                "start": 1656,
                "end": 1657
              },
              "typeArguments": null,
              "start": 1656,
              "end": 1657
            },
            "start": 1654,
            "end": 1657
          },
          "start": 1647,
          "end": 1657
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "secondary",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 1670,
                "end": 1677
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
                      "start": 1678,
                      "end": 1679
                    },
                    "typeArguments": null,
                    "start": 1678,
                    "end": 1679
                  }
                ],
                "start": 1677,
                "end": 1680
              },
              "start": 1670,
              "end": 1680
            },
            "start": 1668,
            "end": 1680
          },
          "start": 1659,
          "end": 1680
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1683,
            "end": 1684
          },
          "typeArguments": null,
          "start": 1683,
          "end": 1684
        },
        "start": 1681,
        "end": 1684
      },
      "body": null,
      "expression": false,
      "start": 1613,
      "end": 1685
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1696,
        "end": 1699
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1712,
                  "end": 1714
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "objAndReadonly",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1717,
                    "end": 1731
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1734,
                            "end": 1735
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1737,
                            "end": 1738
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1734,
                          "end": 1738
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1740,
                            "end": 1741
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1743,
                            "end": 1744
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1740,
                          "end": 1744
                        }
                      ],
                      "start": 1732,
                      "end": 1746
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1750,
                            "end": 1751
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1753,
                            "end": 1754
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1750,
                          "end": 1754
                        }
                      ],
                      "start": 1748,
                      "end": 1756
                    }
                  ],
                  "optional": false,
                  "start": 1717,
                  "end": 1757
                },
                "definite": false,
                "start": 1712,
                "end": 1757
              }
            ],
            "declare": false,
            "start": 1708,
            "end": 1758
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1777,
                  "end": 1779
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "objAndReadonly",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1782,
                    "end": 1796
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1799,
                            "end": 1800
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1802,
                            "end": 1803
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1799,
                          "end": 1803
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1805,
                            "end": 1806
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1808,
                            "end": 1809
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1805,
                          "end": 1809
                        }
                      ],
                      "start": 1797,
                      "end": 1811
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1815,
                            "end": 1816
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1818,
                            "end": 1819
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1815,
                          "end": 1819
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1821,
                            "end": 1822
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1824,
                            "end": 1825
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1821,
                          "end": 1825
                        }
                      ],
                      "start": 1813,
                      "end": 1827
                    }
                  ],
                  "optional": false,
                  "start": 1782,
                  "end": 1828
                },
                "definite": false,
                "start": 1777,
                "end": 1828
              }
            ],
            "declare": false,
            "start": 1773,
            "end": 1829
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1838,
                  "end": 1840
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "objAndReadonly",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1843,
                    "end": 1857
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1860,
                            "end": 1861
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1863,
                            "end": 1864
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1860,
                          "end": 1864
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1866,
                            "end": 1867
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1869,
                            "end": 1870
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1866,
                          "end": 1870
                        }
                      ],
                      "start": 1858,
                      "end": 1872
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1876,
                            "end": 1877
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1879,
                            "end": 1880
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1876,
                          "end": 1880
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1882,
                            "end": 1883
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1885,
                            "end": 1886
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1882,
                          "end": 1886
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1888,
                            "end": 1889
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1891,
                            "end": 1892
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1888,
                          "end": 1892
                        }
                      ],
                      "start": 1874,
                      "end": 1894
                    }
                  ],
                  "optional": false,
                  "start": 1843,
                  "end": 1895
                },
                "definite": false,
                "start": 1838,
                "end": 1895
              }
            ],
            "declare": false,
            "start": 1834,
            "end": 1896
          }
        ],
        "start": 1702,
        "end": 1908
      },
      "expression": false,
      "start": 1687,
      "end": 1908
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1919,
        "end": 1922
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1935,
                  "end": 1937
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "objAndPartial",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1940,
                    "end": 1953
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1956,
                            "end": 1957
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1959,
                            "end": 1960
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1956,
                          "end": 1960
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1962,
                            "end": 1963
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1965,
                            "end": 1966
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1962,
                          "end": 1966
                        }
                      ],
                      "start": 1954,
                      "end": 1968
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1972,
                            "end": 1973
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1975,
                            "end": 1976
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1972,
                          "end": 1976
                        }
                      ],
                      "start": 1970,
                      "end": 1978
                    }
                  ],
                  "optional": false,
                  "start": 1940,
                  "end": 1979
                },
                "definite": false,
                "start": 1935,
                "end": 1979
              }
            ],
            "declare": false,
            "start": 1931,
            "end": 1980
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1989,
                  "end": 1991
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "objAndPartial",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1994,
                    "end": 2007
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2010,
                            "end": 2011
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2013,
                            "end": 2014
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2010,
                          "end": 2014
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2016,
                            "end": 2017
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2019,
                            "end": 2020
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2016,
                          "end": 2020
                        }
                      ],
                      "start": 2008,
                      "end": 2022
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2026,
                            "end": 2027
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2029,
                            "end": 2030
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2026,
                          "end": 2030
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2032,
                            "end": 2033
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2035,
                            "end": 2036
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2032,
                          "end": 2036
                        }
                      ],
                      "start": 2024,
                      "end": 2038
                    }
                  ],
                  "optional": false,
                  "start": 1994,
                  "end": 2039
                },
                "definite": false,
                "start": 1989,
                "end": 2039
              }
            ],
            "declare": false,
            "start": 1985,
            "end": 2040
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2049,
                  "end": 2051
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "objAndPartial",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2054,
                    "end": 2067
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2070,
                            "end": 2071
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2073,
                            "end": 2074
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2070,
                          "end": 2074
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2076,
                            "end": 2077
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2079,
                            "end": 2080
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2076,
                          "end": 2080
                        }
                      ],
                      "start": 2068,
                      "end": 2082
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2086,
                            "end": 2087
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2089,
                            "end": 2090
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2086,
                          "end": 2090
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2092,
                            "end": 2093
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2095,
                            "end": 2096
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2092,
                          "end": 2096
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2098,
                            "end": 2099
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2101,
                            "end": 2102
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2098,
                          "end": 2102
                        }
                      ],
                      "start": 2084,
                      "end": 2104
                    }
                  ],
                  "optional": false,
                  "start": 2054,
                  "end": 2105
                },
                "definite": false,
                "start": 2049,
                "end": 2105
              }
            ],
            "declare": false,
            "start": 2045,
            "end": 2106
          }
        ],
        "start": 1925,
        "end": 2118
      },
      "expression": false,
      "start": 1910,
      "end": 2118
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2191,
        "end": 2194
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 2201,
              "end": 2202
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2204,
                "end": 2210
              },
              "start": 2202,
              "end": 2210
            },
            "accessibility": null,
            "static": false,
            "start": 2201,
            "end": 2211
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 2216,
              "end": 2217
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2220,
                "end": 2226
              },
              "start": 2218,
              "end": 2226
            },
            "accessibility": null,
            "static": false,
            "start": 2216,
            "end": 2227
          }
        ],
        "start": 2195,
        "end": 2229
      },
      "declare": false,
      "start": 2181,
      "end": 2229
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "setState",
        "optional": false,
        "typeAnnotation": null,
        "start": 2240,
        "end": 2248
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
              "start": 2249,
              "end": 2250
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2249,
            "end": 2250
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2252,
              "end": 2253
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
                  "start": 2268,
                  "end": 2269
                },
                "typeArguments": null,
                "start": 2268,
                "end": 2269
              },
              "start": 2262,
              "end": 2269
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2252,
            "end": 2269
          }
        ],
        "start": 2248,
        "end": 2270
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                "start": 2276,
                "end": 2277
              },
              "typeArguments": null,
              "start": 2276,
              "end": 2277
            },
            "start": 2274,
            "end": 2277
          },
          "start": 2271,
          "end": 2277
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 2286,
                "end": 2290
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
                      "start": 2291,
                      "end": 2292
                    },
                    "typeArguments": null,
                    "start": 2291,
                    "end": 2292
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2294,
                      "end": 2295
                    },
                    "typeArguments": null,
                    "start": 2294,
                    "end": 2295
                  }
                ],
                "start": 2290,
                "end": 2296
              },
              "start": 2286,
              "end": 2296
            },
            "start": 2284,
            "end": 2296
          },
          "start": 2279,
          "end": 2296
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2313,
                    "end": 2314
                  },
                  "init": null,
                  "definite": false,
                  "start": 2313,
                  "end": 2314
                }
              ],
              "declare": false,
              "start": 2309,
              "end": 2314
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null,
              "start": 2318,
              "end": 2323
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2335,
                        "end": 2338
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2339,
                        "end": 2340
                      },
                      "optional": false,
                      "computed": true,
                      "start": 2335,
                      "end": 2341
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2344,
                        "end": 2349
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2350,
                        "end": 2351
                      },
                      "optional": false,
                      "computed": true,
                      "start": 2344,
                      "end": 2352
                    },
                    "start": 2335,
                    "end": 2352
                  },
                  "directive": null,
                  "start": 2335,
                  "end": 2353
                }
              ],
              "start": 2325,
              "end": 2359
            },
            "start": 2304,
            "end": 2359
          }
        ],
        "start": 2298,
        "end": 2361
      },
      "expression": false,
      "start": 2231,
      "end": 2361
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2372,
                  "end": 2375
                },
                "typeArguments": null,
                "start": 2372,
                "end": 2375
              },
              "start": 2370,
              "end": 2375
            },
            "start": 2367,
            "end": 2375
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2380,
                  "end": 2381
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 2383,
                  "end": 2390
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2380,
                "end": 2390
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
                  "start": 2392,
                  "end": 2393
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 2395,
                  "end": 2397
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2392,
                "end": 2397
              }
            ],
            "start": 2378,
            "end": 2399
          },
          "definite": false,
          "start": 2367,
          "end": 2399
        }
      ],
      "declare": false,
      "start": 2363,
      "end": 2400
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "setState",
          "optional": false,
          "typeAnnotation": null,
          "start": 2401,
          "end": 2409
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2410,
            "end": 2413
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2417,
                  "end": 2418
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "\"test\"",
                  "start": 2420,
                  "end": 2426
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2417,
                "end": 2426
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
                  "start": 2428,
                  "end": 2429
                },
                "value": {
                  "type": "Literal",
                  "value": 43,
                  "raw": "43",
                  "start": 2431,
                  "end": 2433
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2428,
                "end": 2433
              }
            ],
            "start": 2415,
            "end": 2435
          }
        ],
        "optional": false,
        "start": 2401,
        "end": 2436
      },
      "directive": null,
      "start": 2401,
      "end": 2436
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "setState",
          "optional": false,
          "typeAnnotation": null,
          "start": 2437,
          "end": 2445
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2446,
            "end": 2449
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2453,
                  "end": 2454
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 2456,
                  "end": 2460
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2453,
                "end": 2460
              }
            ],
            "start": 2451,
            "end": 2462
          }
        ],
        "optional": false,
        "start": 2437,
        "end": 2463
      },
      "directive": null,
      "start": 2437,
      "end": 2464
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "setState",
          "optional": false,
          "typeAnnotation": null,
          "start": 2465,
          "end": 2473
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2474,
            "end": 2477
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2481,
                  "end": 2482
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2484,
                  "end": 2493
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2481,
                "end": 2493
              }
            ],
            "start": 2479,
            "end": 2495
          }
        ],
        "optional": false,
        "start": 2465,
        "end": 2496
      },
      "directive": null,
      "start": 2465,
      "end": 2497
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "setState",
          "optional": false,
          "typeAnnotation": null,
          "start": 2498,
          "end": 2506
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2507,
            "end": 2510
          },
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 2512,
            "end": 2515
          }
        ],
        "optional": false,
        "start": 2498,
        "end": 2516
      },
      "directive": null,
      "start": 2498,
      "end": 2517
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "setState",
          "optional": false,
          "typeAnnotation": null,
          "start": 2518,
          "end": 2526
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2527,
            "end": 2530
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2532,
            "end": 2535
          }
        ],
        "optional": false,
        "start": 2518,
        "end": 2536
      },
      "directive": null,
      "start": 2518,
      "end": 2537
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "setState",
          "optional": false,
          "typeAnnotation": null,
          "start": 2538,
          "end": 2546
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2547,
            "end": 2550
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2554,
                  "end": 2555
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2557,
                  "end": 2566
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2554,
                "end": 2566
              }
            ],
            "start": 2552,
            "end": 2568
          }
        ],
        "optional": false,
        "start": 2538,
        "end": 2569
      },
      "directive": null,
      "start": 2538,
      "end": 2570
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "setState",
          "optional": false,
          "typeAnnotation": null,
          "start": 2581,
          "end": 2589
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2590,
            "end": 2593
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2597,
                  "end": 2598
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2600,
                  "end": 2604
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2597,
                "end": 2604
              }
            ],
            "start": 2595,
            "end": 2606
          }
        ],
        "optional": false,
        "start": 2581,
        "end": 2607
      },
      "directive": null,
      "start": 2581,
      "end": 2608
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 2626,
        "end": 2627
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
              "start": 2628,
              "end": 2629
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2628,
            "end": 2629
          }
        ],
        "start": 2627,
        "end": 2630
      },
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
              "name": "state",
              "optional": false,
              "typeAnnotation": null,
              "start": 2637,
              "end": 2642
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
                  "start": 2644,
                  "end": 2645
                },
                "typeArguments": null,
                "start": 2644,
                "end": 2645
              },
              "start": 2642,
              "end": 2645
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
            "start": 2637,
            "end": 2646
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setState",
              "optional": false,
              "typeAnnotation": null,
              "start": 2651,
              "end": 2659
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2660,
                      "end": 2661
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
                          "start": 2676,
                          "end": 2677
                        },
                        "typeArguments": null,
                        "start": 2676,
                        "end": 2677
                      },
                      "start": 2670,
                      "end": 2677
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2660,
                    "end": 2677
                  }
                ],
                "start": 2659,
                "end": 2678
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Pick",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2686,
                        "end": 2690
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
                              "start": 2691,
                              "end": 2692
                            },
                            "typeArguments": null,
                            "start": 2691,
                            "end": 2692
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2694,
                              "end": 2695
                            },
                            "typeArguments": null,
                            "start": 2694,
                            "end": 2695
                          }
                        ],
                        "start": 2690,
                        "end": 2696
                      },
                      "start": 2686,
                      "end": 2696
                    },
                    "start": 2684,
                    "end": 2696
                  },
                  "start": 2679,
                  "end": 2696
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2717,
                            "end": 2718
                          },
                          "init": null,
                          "definite": false,
                          "start": 2717,
                          "end": 2718
                        }
                      ],
                      "declare": false,
                      "start": 2713,
                      "end": 2718
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2722,
                      "end": 2727
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2743,
                                  "end": 2747
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "state",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2748,
                                  "end": 2753
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2743,
                                "end": 2753
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2754,
                                "end": 2755
                              },
                              "optional": false,
                              "computed": true,
                              "start": 2743,
                              "end": 2756
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2759,
                                "end": 2764
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2765,
                                "end": 2766
                              },
                              "optional": false,
                              "computed": true,
                              "start": 2759,
                              "end": 2767
                            },
                            "start": 2743,
                            "end": 2767
                          },
                          "directive": null,
                          "start": 2743,
                          "end": 2768
                        }
                      ],
                      "start": 2729,
                      "end": 2778
                    },
                    "start": 2708,
                    "end": 2778
                  }
                ],
                "start": 2698,
                "end": 2784
              },
              "expression": false,
              "start": 2659,
              "end": 2784
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2651,
            "end": 2784
          }
        ],
        "start": 2631,
        "end": 2786
      },
      "abstract": false,
      "declare": false,
      "start": 2620,
      "end": 2786
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2792,
            "end": 2793
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2800,
              "end": 2801
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2802,
                    "end": 2805
                  },
                  "typeArguments": null,
                  "start": 2802,
                  "end": 2805
                }
              ],
              "start": 2801,
              "end": 2806
            },
            "arguments": [],
            "start": 2796,
            "end": 2808
          },
          "definite": false,
          "start": 2792,
          "end": 2808
        }
      ],
      "declare": false,
      "start": 2788,
      "end": 2809
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2810,
            "end": 2811
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setState",
            "optional": false,
            "typeAnnotation": null,
            "start": 2812,
            "end": 2820
          },
          "optional": false,
          "computed": false,
          "start": 2810,
          "end": 2820
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2823,
                  "end": 2824
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "\"test\"",
                  "start": 2826,
                  "end": 2832
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2823,
                "end": 2832
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
                  "start": 2834,
                  "end": 2835
                },
                "value": {
                  "type": "Literal",
                  "value": 43,
                  "raw": "43",
                  "start": 2837,
                  "end": 2839
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2834,
                "end": 2839
              }
            ],
            "start": 2821,
            "end": 2841
          }
        ],
        "optional": false,
        "start": 2810,
        "end": 2842
      },
      "directive": null,
      "start": 2810,
      "end": 2843
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2844,
            "end": 2845
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setState",
            "optional": false,
            "typeAnnotation": null,
            "start": 2846,
            "end": 2854
          },
          "optional": false,
          "computed": false,
          "start": 2844,
          "end": 2854
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2857,
                  "end": 2858
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 2860,
                  "end": 2864
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2857,
                "end": 2864
              }
            ],
            "start": 2855,
            "end": 2866
          }
        ],
        "optional": false,
        "start": 2844,
        "end": 2867
      },
      "directive": null,
      "start": 2844,
      "end": 2868
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2869,
            "end": 2870
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setState",
            "optional": false,
            "typeAnnotation": null,
            "start": 2871,
            "end": 2879
          },
          "optional": false,
          "computed": false,
          "start": 2869,
          "end": 2879
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2882,
                  "end": 2883
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2885,
                  "end": 2894
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2882,
                "end": 2894
              }
            ],
            "start": 2880,
            "end": 2896
          }
        ],
        "optional": false,
        "start": 2869,
        "end": 2897
      },
      "directive": null,
      "start": 2869,
      "end": 2898
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2899,
            "end": 2900
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setState",
            "optional": false,
            "typeAnnotation": null,
            "start": 2901,
            "end": 2909
          },
          "optional": false,
          "computed": false,
          "start": 2899,
          "end": 2909
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 2910,
            "end": 2913
          }
        ],
        "optional": false,
        "start": 2899,
        "end": 2914
      },
      "directive": null,
      "start": 2899,
      "end": 2915
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2916,
            "end": 2917
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setState",
            "optional": false,
            "typeAnnotation": null,
            "start": 2918,
            "end": 2926
          },
          "optional": false,
          "computed": false,
          "start": 2916,
          "end": 2926
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2927,
            "end": 2930
          }
        ],
        "optional": false,
        "start": 2916,
        "end": 2931
      },
      "directive": null,
      "start": 2916,
      "end": 2932
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2933,
            "end": 2934
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setState",
            "optional": false,
            "typeAnnotation": null,
            "start": 2935,
            "end": 2943
          },
          "optional": false,
          "computed": false,
          "start": 2933,
          "end": 2943
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2946,
                  "end": 2947
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2949,
                  "end": 2958
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2946,
                "end": 2958
              }
            ],
            "start": 2944,
            "end": 2960
          }
        ],
        "optional": false,
        "start": 2933,
        "end": 2961
      },
      "directive": null,
      "start": 2933,
      "end": 2962
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2973,
            "end": 2974
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setState",
            "optional": false,
            "typeAnnotation": null,
            "start": 2975,
            "end": 2983
          },
          "optional": false,
          "computed": false,
          "start": 2973,
          "end": 2983
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2986,
                  "end": 2987
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2989,
                  "end": 2993
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2986,
                "end": 2993
              }
            ],
            "start": 2984,
            "end": 2995
          }
        ],
        "optional": false,
        "start": 2973,
        "end": 2996
      },
      "directive": null,
      "start": 2973,
      "end": 2997
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3014,
        "end": 3016
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 3021,
              "end": 3022
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3025,
                "end": 3031
              },
              "start": 3023,
              "end": 3031
            },
            "accessibility": null,
            "static": false,
            "start": 3021,
            "end": 3032
          },
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
                    "type": "TSStringKeyword",
                    "start": 3039,
                    "end": 3045
                  },
                  "start": 3037,
                  "end": 3045
                },
                "start": 3034,
                "end": 3045
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3048,
                "end": 3051
              },
              "start": 3046,
              "end": 3051
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 3033,
            "end": 3051
          }
        ],
        "start": 3019,
        "end": 3053
      },
      "declare": false,
      "start": 3009,
      "end": 3054
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3064,
                  "end": 3066
                },
                "typeArguments": null,
                "start": 3064,
                "end": 3066
              },
              "start": 3062,
              "end": 3066
            },
            "start": 3060,
            "end": 3066
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3071,
                  "end": 3072
                },
                "value": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "'no'",
                  "start": 3074,
                  "end": 3078
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3071,
                "end": 3078
              }
            ],
            "start": 3069,
            "end": 3080
          },
          "definite": false,
          "start": 3060,
          "end": 3080
        }
      ],
      "declare": false,
      "start": 3056,
      "end": 3081
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3100,
                  "end": 3107
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3108,
                        "end": 3110
                      },
                      "typeArguments": null,
                      "start": 3108,
                      "end": 3110
                    }
                  ],
                  "start": 3107,
                  "end": 3111
                },
                "start": 3100,
                "end": 3111
              },
              "start": 3098,
              "end": 3111
            },
            "start": 3096,
            "end": 3111
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3116,
                  "end": 3117
                },
                "value": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "'no'",
                  "start": 3119,
                  "end": 3123
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3116,
                "end": 3123
              }
            ],
            "start": 3114,
            "end": 3125
          },
          "definite": false,
          "start": 3096,
          "end": 3125
        }
      ],
      "declare": false,
      "start": 3092,
      "end": 3126
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3147,
                  "end": 3148
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3158,
                      "end": 3160
                    },
                    "typeArguments": null,
                    "start": 3158,
                    "end": 3160
                  },
                  "start": 3152,
                  "end": 3160
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3163,
                      "end": 3165
                    },
                    "typeArguments": null,
                    "start": 3163,
                    "end": 3165
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3166,
                      "end": 3167
                    },
                    "typeArguments": null,
                    "start": 3166,
                    "end": 3167
                  },
                  "start": 3163,
                  "end": 3168
                },
                "optional": false,
                "readonly": null,
                "start": 3144,
                "end": 3169
              },
              "start": 3142,
              "end": 3169
            },
            "start": 3140,
            "end": 3169
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3174,
                  "end": 3175
                },
                "value": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "'no'",
                  "start": 3177,
                  "end": 3181
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3174,
                "end": 3181
              }
            ],
            "start": 3172,
            "end": 3183
          },
          "definite": false,
          "start": 3140,
          "end": 3183
        }
      ],
      "declare": false,
      "start": 3136,
      "end": 3184
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3223,
        "end": 3227
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
              "start": 3228,
              "end": 3229
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3228,
            "end": 3229
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 3231,
              "end": 3232
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
                  "start": 3247,
                  "end": 3248
                },
                "typeArguments": null,
                "start": 3247,
                "end": 3248
              },
              "start": 3241,
              "end": 3248
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3231,
            "end": 3248
          }
        ],
        "start": 3227,
        "end": 3249
      },
      "typeAnnotation": {
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
              "name": "pf",
              "optional": false,
              "typeAnnotation": null,
              "start": 3258,
              "end": 3260
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3264,
                  "end": 3265
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3269,
                    "end": 3270
                  },
                  "typeArguments": null,
                  "start": 3269,
                  "end": 3270
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3274,
                      "end": 3275
                    },
                    "typeArguments": null,
                    "start": 3274,
                    "end": 3275
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3276,
                      "end": 3277
                    },
                    "typeArguments": null,
                    "start": 3276,
                    "end": 3277
                  },
                  "start": 3274,
                  "end": 3278
                },
                "optional": true,
                "readonly": null,
                "start": 3262,
                "end": 3279
              },
              "start": 3260,
              "end": 3279
            },
            "accessibility": null,
            "static": false,
            "start": 3258,
            "end": 3280
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pt",
              "optional": false,
              "typeAnnotation": null,
              "start": 3285,
              "end": 3287
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3291,
                  "end": 3292
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3296,
                    "end": 3297
                  },
                  "typeArguments": null,
                  "start": 3296,
                  "end": 3297
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3301,
                      "end": 3302
                    },
                    "typeArguments": null,
                    "start": 3301,
                    "end": 3302
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3303,
                      "end": 3304
                    },
                    "typeArguments": null,
                    "start": 3303,
                    "end": 3304
                  },
                  "start": 3301,
                  "end": 3305
                },
                "optional": true,
                "readonly": null,
                "start": 3289,
                "end": 3306
              },
              "start": 3287,
              "end": 3306
            },
            "accessibility": null,
            "static": false,
            "start": 3285,
            "end": 3307
          }
        ],
        "start": 3252,
        "end": 3339
      },
      "declare": false,
      "start": 3218,
      "end": 3340
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O",
        "optional": false,
        "typeAnnotation": null,
        "start": 3346,
        "end": 3347
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3351,
              "end": 3352
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3354,
                "end": 3360
              },
              "start": 3352,
              "end": 3360
            },
            "accessibility": null,
            "static": false,
            "start": 3351,
            "end": 3361
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 3362,
              "end": 3363
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 3365,
                "end": 3372
              },
              "start": 3363,
              "end": 3372
            },
            "accessibility": null,
            "static": false,
            "start": 3362,
            "end": 3372
          }
        ],
        "start": 3350,
        "end": 3373
      },
      "declare": false,
      "start": 3341,
      "end": 3374
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
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3382,
                  "end": 3383
                },
                "typeArguments": null,
                "start": 3382,
                "end": 3383
              },
              "start": 3380,
              "end": 3383
            },
            "start": 3379,
            "end": 3383
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3387,
                  "end": 3388
                },
                "value": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 3390,
                  "end": 3391
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3387,
                "end": 3391
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3393,
                  "end": 3394
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 3396,
                  "end": 3401
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3393,
                "end": 3401
              }
            ],
            "start": 3386,
            "end": 3402
          },
          "definite": false,
          "start": 3379,
          "end": 3402
        }
      ],
      "declare": false,
      "start": 3375,
      "end": 3403
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3411,
                  "end": 3415
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3416,
                        "end": 3417
                      },
                      "typeArguments": null,
                      "start": 3416,
                      "end": 3417
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "'x'",
                        "start": 3419,
                        "end": 3422
                      },
                      "start": 3419,
                      "end": 3422
                    }
                  ],
                  "start": 3415,
                  "end": 3423
                },
                "start": 3411,
                "end": 3423
              },
              "start": 3409,
              "end": 3423
            },
            "start": 3408,
            "end": 3423
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
                  "name": "pf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3432,
                  "end": 3434
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3437,
                        "end": 3438
                      },
                      "value": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 3440,
                        "end": 3441
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3437,
                      "end": 3441
                    }
                  ],
                  "start": 3436,
                  "end": 3442
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3432,
                "end": 3442
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3448,
                  "end": 3450
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3453,
                        "end": 3454
                      },
                      "value": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 3456,
                        "end": 3457
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3453,
                      "end": 3457
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3459,
                        "end": 3460
                      },
                      "value": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 3462,
                        "end": 3467
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3459,
                      "end": 3467
                    }
                  ],
                  "start": 3452,
                  "end": 3468
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3448,
                "end": 3468
              }
            ],
            "start": 3426,
            "end": 3471
          },
          "definite": false,
          "start": 3408,
          "end": 3471
        }
      ],
      "declare": false,
      "start": 3404,
      "end": 3472
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3505,
        "end": 3510
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
              "start": 3511,
              "end": 3512
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3511,
            "end": 3512
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3514,
              "end": 3515
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
                  "start": 3530,
                  "end": 3531
                },
                "typeArguments": null,
                "start": 3530,
                "end": 3531
              },
              "start": 3524,
              "end": 3531
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3514,
            "end": 3531
          }
        ],
        "start": 3510,
        "end": 3532
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 3538,
                "end": 3542
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
                      "start": 3543,
                      "end": 3544
                    },
                    "typeArguments": null,
                    "start": 3543,
                    "end": 3544
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3546,
                      "end": 3547
                    },
                    "typeArguments": null,
                    "start": 3546,
                    "end": 3547
                  }
                ],
                "start": 3542,
                "end": 3548
              },
              "start": 3538,
              "end": 3548
            },
            "start": 3536,
            "end": 3548
          },
          "start": 3533,
          "end": 3548
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3560,
                  "end": 3561
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3564,
                    "end": 3567
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3568,
                    "end": 3571
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3564,
                  "end": 3571
                },
                "definite": false,
                "start": 3560,
                "end": 3571
              }
            ],
            "declare": false,
            "start": 3556,
            "end": 3572
          }
        ],
        "start": 3550,
        "end": 3584
      },
      "expression": false,
      "start": 3496,
      "end": 3584
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3595,
        "end": 3600
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
              "start": 3601,
              "end": 3602
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3601,
            "end": 3602
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3604,
              "end": 3605
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
                  "start": 3620,
                  "end": 3621
                },
                "typeArguments": null,
                "start": 3620,
                "end": 3621
              },
              "start": 3614,
              "end": 3621
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3604,
            "end": 3621
          }
        ],
        "start": 3600,
        "end": 3622
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 3628,
                "end": 3634
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
                      "start": 3635,
                      "end": 3636
                    },
                    "typeArguments": null,
                    "start": 3635,
                    "end": 3636
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 3638,
                    "end": 3644
                  }
                ],
                "start": 3634,
                "end": 3645
              },
              "start": 3628,
              "end": 3645
            },
            "start": 3626,
            "end": 3645
          },
          "start": 3623,
          "end": 3645
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3657,
                  "end": 3658
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3661,
                    "end": 3664
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3665,
                    "end": 3668
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3661,
                  "end": 3668
                },
                "definite": false,
                "start": 3657,
                "end": 3668
              }
            ],
            "declare": false,
            "start": 3653,
            "end": 3669
          }
        ],
        "start": 3647,
        "end": 3681
      },
      "expression": false,
      "start": 3586,
      "end": 3681
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3681
}
```
