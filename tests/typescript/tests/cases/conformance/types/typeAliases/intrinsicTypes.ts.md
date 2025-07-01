__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TU1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 11,
          "end": 20
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 21,
                "end": 28
              },
              "start": 21,
              "end": 28
            }
          ],
          "start": 20,
          "end": 29
        },
        "start": 11,
        "end": 29
      },
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TU2",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 51
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 54,
          "end": 63
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 64,
                    "end": 69
                  },
                  "start": 64,
                  "end": 69
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 72,
                    "end": 77
                  },
                  "start": 72,
                  "end": 77
                }
              ],
              "start": 64,
              "end": 77
            }
          ],
          "start": 63,
          "end": 78
        },
        "start": 54,
        "end": 78
      },
      "declare": false,
      "start": 43,
      "end": 79
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TU3",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 106
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 109,
          "end": 118
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            }
          ],
          "start": 118,
          "end": 126
        },
        "start": 109,
        "end": 126
      },
      "declare": false,
      "start": 98,
      "end": 127
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TU4",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 158
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 170
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 171,
              "end": 174
            }
          ],
          "start": 170,
          "end": 175
        },
        "start": 161,
        "end": 175
      },
      "declare": false,
      "start": 150,
      "end": 176
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TU5",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 209
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 212,
          "end": 221
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 222,
              "end": 227
            }
          ],
          "start": 221,
          "end": 228
        },
        "start": 212,
        "end": 228
      },
      "declare": false,
      "start": 201,
      "end": 229
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TU6",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 248
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 251,
          "end": 260
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 261,
                "end": 263
              },
              "start": 261,
              "end": 263
            }
          ],
          "start": 260,
          "end": 264
        },
        "start": 251,
        "end": 264
      },
      "declare": false,
      "start": 240,
      "end": 265
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL1",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 285
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 288,
          "end": 297
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "HELLO",
                "raw": "'HELLO'",
                "start": 298,
                "end": 305
              },
              "start": 298,
              "end": 305
            }
          ],
          "start": 297,
          "end": 306
        },
        "start": 288,
        "end": 306
      },
      "declare": false,
      "start": 277,
      "end": 307
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL2",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 328
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 331,
          "end": 340
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "FOO",
                    "raw": "'FOO'",
                    "start": 341,
                    "end": 346
                  },
                  "start": 341,
                  "end": 346
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "BAR",
                    "raw": "'BAR'",
                    "start": 349,
                    "end": 354
                  },
                  "start": 349,
                  "end": 354
                }
              ],
              "start": 341,
              "end": 354
            }
          ],
          "start": 340,
          "end": 355
        },
        "start": 331,
        "end": 355
      },
      "declare": false,
      "start": 320,
      "end": 356
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL3",
        "optional": false,
        "typeAnnotation": null,
        "start": 380,
        "end": 383
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 386,
          "end": 395
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 396,
              "end": 402
            }
          ],
          "start": 395,
          "end": 403
        },
        "start": 386,
        "end": 403
      },
      "declare": false,
      "start": 375,
      "end": 404
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL4",
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
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 447
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 448,
              "end": 451
            }
          ],
          "start": 447,
          "end": 452
        },
        "start": 438,
        "end": 452
      },
      "declare": false,
      "start": 427,
      "end": 453
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL5",
        "optional": false,
        "typeAnnotation": null,
        "start": 483,
        "end": 486
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 489,
          "end": 498
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 499,
              "end": 504
            }
          ],
          "start": 498,
          "end": 505
        },
        "start": 489,
        "end": 505
      },
      "declare": false,
      "start": 478,
      "end": 506
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL6",
        "optional": false,
        "typeAnnotation": null,
        "start": 522,
        "end": 525
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 528,
          "end": 537
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 538,
                "end": 540
              },
              "start": 538,
              "end": 540
            }
          ],
          "start": 537,
          "end": 541
        },
        "start": 528,
        "end": 541
      },
      "declare": false,
      "start": 517,
      "end": 542
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TC1",
        "optional": false,
        "typeAnnotation": null,
        "start": 559,
        "end": 562
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 565,
          "end": 575
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 576,
                "end": 583
              },
              "start": 576,
              "end": 583
            }
          ],
          "start": 575,
          "end": 584
        },
        "start": 565,
        "end": 584
      },
      "declare": false,
      "start": 554,
      "end": 585
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TC2",
        "optional": false,
        "typeAnnotation": null,
        "start": 603,
        "end": 606
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 609,
          "end": 619
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 620,
                    "end": 625
                  },
                  "start": 620,
                  "end": 625
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 628,
                    "end": 633
                  },
                  "start": 628,
                  "end": 633
                }
              ],
              "start": 620,
              "end": 633
            }
          ],
          "start": 619,
          "end": 634
        },
        "start": 609,
        "end": 634
      },
      "declare": false,
      "start": 598,
      "end": 635
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TC3",
        "optional": false,
        "typeAnnotation": null,
        "start": 659,
        "end": 662
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 665,
          "end": 675
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 676,
              "end": 682
            }
          ],
          "start": 675,
          "end": 683
        },
        "start": 665,
        "end": 683
      },
      "declare": false,
      "start": 654,
      "end": 684
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TC4",
        "optional": false,
        "typeAnnotation": null,
        "start": 713,
        "end": 716
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 719,
          "end": 729
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 730,
              "end": 733
            }
          ],
          "start": 729,
          "end": 734
        },
        "start": 719,
        "end": 734
      },
      "declare": false,
      "start": 708,
      "end": 735
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TC5",
        "optional": false,
        "typeAnnotation": null,
        "start": 766,
        "end": 769
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 772,
          "end": 782
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 783,
              "end": 788
            }
          ],
          "start": 782,
          "end": 789
        },
        "start": 772,
        "end": 789
      },
      "declare": false,
      "start": 761,
      "end": 790
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TC6",
        "optional": false,
        "typeAnnotation": null,
        "start": 806,
        "end": 809
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 812,
          "end": 822
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 823,
                "end": 825
              },
              "start": 823,
              "end": 825
            }
          ],
          "start": 822,
          "end": 826
        },
        "start": 812,
        "end": 826
      },
      "declare": false,
      "start": 801,
      "end": 827
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN1",
        "optional": false,
        "typeAnnotation": null,
        "start": 844,
        "end": 847
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 850,
          "end": 862
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "Hello",
                "raw": "'Hello'",
                "start": 863,
                "end": 870
              },
              "start": 863,
              "end": 870
            }
          ],
          "start": 862,
          "end": 871
        },
        "start": 850,
        "end": 871
      },
      "declare": false,
      "start": 839,
      "end": 872
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN2",
        "optional": false,
        "typeAnnotation": null,
        "start": 890,
        "end": 893
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 896,
          "end": 908
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "Foo",
                    "raw": "'Foo'",
                    "start": 909,
                    "end": 914
                  },
                  "start": 909,
                  "end": 914
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "Bar",
                    "raw": "'Bar'",
                    "start": 917,
                    "end": 922
                  },
                  "start": 917,
                  "end": 922
                }
              ],
              "start": 909,
              "end": 922
            }
          ],
          "start": 908,
          "end": 923
        },
        "start": 896,
        "end": 923
      },
      "declare": false,
      "start": 885,
      "end": 924
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN3",
        "optional": false,
        "typeAnnotation": null,
        "start": 948,
        "end": 951
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 954,
          "end": 966
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 967,
              "end": 973
            }
          ],
          "start": 966,
          "end": 974
        },
        "start": 954,
        "end": 974
      },
      "declare": false,
      "start": 943,
      "end": 975
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1006,
        "end": 1009
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 1012,
          "end": 1024
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 1025,
              "end": 1028
            }
          ],
          "start": 1024,
          "end": 1029
        },
        "start": 1012,
        "end": 1029
      },
      "declare": false,
      "start": 1001,
      "end": 1030
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1063,
        "end": 1066
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 1069,
          "end": 1081
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 1082,
              "end": 1087
            }
          ],
          "start": 1081,
          "end": 1088
        },
        "start": 1069,
        "end": 1088
      },
      "declare": false,
      "start": 1058,
      "end": 1089
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1105,
        "end": 1108
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 1111,
          "end": 1123
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1124,
                "end": 1126
              },
              "start": 1124,
              "end": 1126
            }
          ],
          "start": 1123,
          "end": 1127
        },
        "start": 1111,
        "end": 1127
      },
      "declare": false,
      "start": 1100,
      "end": 1128
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TX1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1145,
        "end": 1148
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1149,
              "end": 1150
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1159,
              "end": 1165
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1149,
            "end": 1165
          }
        ],
        "start": 1148,
        "end": 1166
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 1169,
          "end": 1178
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "aB",
                    "cooked": "aB"
                  },
                  "tail": false,
                  "start": 1179,
                  "end": 1184
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1185,
                  "end": 1187
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1184,
                    "end": 1185
                  },
                  "typeArguments": null,
                  "start": 1184,
                  "end": 1185
                }
              ],
              "start": 1179,
              "end": 1187
            }
          ],
          "start": 1178,
          "end": 1188
        },
        "start": 1169,
        "end": 1188
      },
      "declare": false,
      "start": 1140,
      "end": 1189
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TX2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1195,
        "end": 1198
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TX1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1201,
          "end": 1204
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "xYz",
                "raw": "'xYz'",
                "start": 1205,
                "end": 1210
              },
              "start": 1205,
              "end": 1210
            }
          ],
          "start": 1204,
          "end": 1211
        },
        "start": 1201,
        "end": 1211
      },
      "declare": false,
      "start": 1190,
      "end": 1212
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TX3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1230,
        "end": 1233
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1234,
              "end": 1235
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1244,
              "end": 1250
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1234,
            "end": 1250
          }
        ],
        "start": 1233,
        "end": 1251
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 1254,
          "end": 1263
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "aB",
                    "cooked": "aB"
                  },
                  "tail": false,
                  "start": 1264,
                  "end": 1269
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1270,
                  "end": 1272
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1269,
                    "end": 1270
                  },
                  "typeArguments": null,
                  "start": 1269,
                  "end": 1270
                }
              ],
              "start": 1264,
              "end": 1272
            }
          ],
          "start": 1263,
          "end": 1273
        },
        "start": 1254,
        "end": 1273
      },
      "declare": false,
      "start": 1225,
      "end": 1274
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TX4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1280,
        "end": 1283
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TX3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1286,
          "end": 1289
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "xYz",
                "raw": "'xYz'",
                "start": 1290,
                "end": 1295
              },
              "start": 1290,
              "end": 1295
            }
          ],
          "start": 1289,
          "end": 1296
        },
        "start": 1286,
        "end": 1296
      },
      "declare": false,
      "start": 1275,
      "end": 1297
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TX5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1315,
        "end": 1318
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 1321,
            "end": 1324
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 1340,
            "end": 1343
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 1359,
            "end": 1361
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uppercase",
              "optional": false,
              "typeAnnotation": null,
              "start": 1324,
              "end": 1333
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "abc",
                    "raw": "'abc'",
                    "start": 1334,
                    "end": 1339
                  },
                  "start": 1334,
                  "end": 1339
                }
              ],
              "start": 1333,
              "end": 1340
            },
            "start": 1324,
            "end": 1340
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lowercase",
              "optional": false,
              "typeAnnotation": null,
              "start": 1343,
              "end": 1352
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "XYZ",
                    "raw": "'XYZ'",
                    "start": 1353,
                    "end": 1358
                  },
                  "start": 1353,
                  "end": 1358
                }
              ],
              "start": 1352,
              "end": 1359
            },
            "start": 1343,
            "end": 1359
          }
        ],
        "start": 1321,
        "end": 1361
      },
      "declare": false,
      "start": 1310,
      "end": 1362
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyUppercase",
        "optional": false,
        "typeAnnotation": null,
        "start": 1382,
        "end": 1393
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1394,
              "end": 1395
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1404,
              "end": 1410
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1394,
            "end": 1410
          }
        ],
        "start": 1393,
        "end": 1411
      },
      "typeAnnotation": {
        "type": "TSIntrinsicKeyword",
        "start": 1414,
        "end": 1423
      },
      "declare": false,
      "start": 1377,
      "end": 1424
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1445,
        "end": 1449
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
              "start": 1450,
              "end": 1451
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1460,
              "end": 1466
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1450,
            "end": 1466
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1468,
              "end": 1469
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1478,
                "end": 1479
              },
              "typeArguments": null,
              "start": 1478,
              "end": 1479
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1468,
            "end": 1479
          }
        ],
        "start": 1449,
        "end": 1480
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1484,
              "end": 1490
            },
            "start": 1482,
            "end": 1490
          },
          "start": 1481,
          "end": 1490
        },
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
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 1495,
                "end": 1504
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
                      "start": 1505,
                      "end": 1506
                    },
                    "typeArguments": null,
                    "start": 1505,
                    "end": 1506
                  }
                ],
                "start": 1504,
                "end": 1507
              },
              "start": 1495,
              "end": 1507
            },
            "start": 1493,
            "end": 1507
          },
          "start": 1492,
          "end": 1507
        },
        {
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
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 1512,
                "end": 1521
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1522,
                      "end": 1523
                    },
                    "typeArguments": null,
                    "start": 1522,
                    "end": 1523
                  }
                ],
                "start": 1521,
                "end": 1524
              },
              "start": 1512,
              "end": 1524
            },
            "start": 1510,
            "end": 1524
          },
          "start": 1509,
          "end": 1524
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1532,
                "end": 1533
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1536,
                "end": 1537
              },
              "start": 1532,
              "end": 1537
            },
            "directive": null,
            "start": 1532,
            "end": 1538
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1543,
                "end": 1544
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1547,
                "end": 1548
              },
              "start": 1543,
              "end": 1548
            },
            "directive": null,
            "start": 1543,
            "end": 1549
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1554,
                "end": 1555
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1558,
                "end": 1559
              },
              "start": 1554,
              "end": 1559
            },
            "directive": null,
            "start": 1554,
            "end": 1560
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1575,
                "end": 1576
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1579,
                "end": 1580
              },
              "start": 1575,
              "end": 1580
            },
            "directive": null,
            "start": 1575,
            "end": 1581
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1586,
                "end": 1587
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1590,
                "end": 1591
              },
              "start": 1586,
              "end": 1591
            },
            "directive": null,
            "start": 1586,
            "end": 1592
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1607,
                "end": 1608
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1611,
                "end": 1612
              },
              "start": 1607,
              "end": 1612
            },
            "directive": null,
            "start": 1607,
            "end": 1613
          }
        ],
        "start": 1526,
        "end": 1625
      },
      "expression": false,
      "start": 1436,
      "end": 1625
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1636,
        "end": 1640
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
              "start": 1641,
              "end": 1642
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 1651,
                    "end": 1656
                  },
                  "start": 1651,
                  "end": 1656
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 1659,
                    "end": 1664
                  },
                  "start": 1659,
                  "end": 1664
                }
              ],
              "start": 1651,
              "end": 1664
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1641,
            "end": 1664
          }
        ],
        "start": 1640,
        "end": 1665
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
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 1669,
                "end": 1678
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
                      "start": 1679,
                      "end": 1680
                    },
                    "typeArguments": null,
                    "start": 1679,
                    "end": 1680
                  }
                ],
                "start": 1678,
                "end": 1681
              },
              "start": 1669,
              "end": 1681
            },
            "start": 1667,
            "end": 1681
          },
          "start": 1666,
          "end": 1681
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
                  "name": "s",
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
                            "value": "FOO",
                            "raw": "'FOO'",
                            "start": 1696,
                            "end": 1701
                          },
                          "start": 1696,
                          "end": 1701
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "BAR",
                            "raw": "'BAR'",
                            "start": 1704,
                            "end": 1709
                          },
                          "start": 1704,
                          "end": 1709
                        }
                      ],
                      "start": 1696,
                      "end": 1709
                    },
                    "start": 1694,
                    "end": 1709
                  },
                  "start": 1693,
                  "end": 1709
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1712,
                  "end": 1713
                },
                "definite": false,
                "start": 1693,
                "end": 1713
              }
            ],
            "declare": false,
            "start": 1689,
            "end": 1714
          }
        ],
        "start": 1683,
        "end": 1716
      },
      "expression": false,
      "start": 1627,
      "end": 1716
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1735,
        "end": 1739
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
              "start": 1740,
              "end": 1741
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1750,
              "end": 1756
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1740,
            "end": 1756
          }
        ],
        "start": 1739,
        "end": 1757
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
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 1761,
                "end": 1770
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
                      "start": 1771,
                      "end": 1772
                    },
                    "typeArguments": null,
                    "start": 1771,
                    "end": 1772
                  }
                ],
                "start": 1770,
                "end": 1773
              },
              "start": 1761,
              "end": 1773
            },
            "start": 1759,
            "end": 1773
          },
          "start": 1758,
          "end": 1773
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
            "start": 1776,
            "end": 1777
          },
          "typeArguments": null,
          "start": 1776,
          "end": 1777
        },
        "start": 1774,
        "end": 1777
      },
      "body": null,
      "expression": false,
      "start": 1718,
      "end": 1778
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1789,
        "end": 1793
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1794,
              "end": 1795
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1804,
              "end": 1810
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1794,
            "end": 1810
          }
        ],
        "start": 1793,
        "end": 1811
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
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 1815,
                "end": 1824
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1825,
                      "end": 1826
                    },
                    "typeArguments": null,
                    "start": 1825,
                    "end": 1826
                  }
                ],
                "start": 1824,
                "end": 1827
              },
              "start": 1815,
              "end": 1827
            },
            "start": 1813,
            "end": 1827
          },
          "start": 1812,
          "end": 1827
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1842,
                "end": 1846
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1847,
                  "end": 1848
                }
              ],
              "optional": false,
              "start": 1842,
              "end": 1849
            },
            "start": 1835,
            "end": 1850
          }
        ],
        "start": 1829,
        "end": 1852
      },
      "expression": false,
      "start": 1780,
      "end": 1852
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1852
}
```
