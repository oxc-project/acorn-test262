__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1852,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "TU1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 11,
        "end": 29,
        "typeName": {
          "type": "Identifier",
          "start": 11,
          "end": 20,
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 20,
          "end": 29,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 21,
              "end": 28,
              "literal": {
                "type": "Literal",
                "start": 21,
                "end": 28,
                "value": "hello",
                "raw": "'hello'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 43,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 51,
        "decorators": [],
        "name": "TU2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 54,
        "end": 78,
        "typeName": {
          "type": "Identifier",
          "start": 54,
          "end": 63,
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 63,
          "end": 78,
          "params": [
            {
              "type": "TSUnionType",
              "start": 64,
              "end": 77,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 64,
                  "end": 69,
                  "literal": {
                    "type": "Literal",
                    "start": 64,
                    "end": 69,
                    "value": "foo",
                    "raw": "'foo'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 72,
                  "end": 77,
                  "literal": {
                    "type": "Literal",
                    "start": 72,
                    "end": 77,
                    "value": "bar",
                    "raw": "'bar'"
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
      "start": 98,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 106,
        "decorators": [],
        "name": "TU3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 109,
        "end": 126,
        "typeName": {
          "type": "Identifier",
          "start": 109,
          "end": 118,
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 118,
          "end": 126,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 150,
      "end": 176,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 158,
        "decorators": [],
        "name": "TU4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 161,
        "end": 175,
        "typeName": {
          "type": "Identifier",
          "start": 161,
          "end": 170,
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 170,
          "end": 175,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 171,
              "end": 174
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 201,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 209,
        "decorators": [],
        "name": "TU5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 212,
        "end": 228,
        "typeName": {
          "type": "Identifier",
          "start": 212,
          "end": 221,
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 221,
          "end": 228,
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 222,
              "end": 227
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 240,
      "end": 265,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 248,
        "decorators": [],
        "name": "TU6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 251,
        "end": 264,
        "typeName": {
          "type": "Identifier",
          "start": 251,
          "end": 260,
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 260,
          "end": 264,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 261,
              "end": 263,
              "literal": {
                "type": "Literal",
                "start": 261,
                "end": 263,
                "value": 42,
                "raw": "42"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 277,
      "end": 307,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 285,
        "decorators": [],
        "name": "TL1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 288,
        "end": 306,
        "typeName": {
          "type": "Identifier",
          "start": 288,
          "end": 297,
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 297,
          "end": 306,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 298,
              "end": 305,
              "literal": {
                "type": "Literal",
                "start": 298,
                "end": 305,
                "value": "HELLO",
                "raw": "'HELLO'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 320,
      "end": 356,
      "id": {
        "type": "Identifier",
        "start": 325,
        "end": 328,
        "decorators": [],
        "name": "TL2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 331,
        "end": 355,
        "typeName": {
          "type": "Identifier",
          "start": 331,
          "end": 340,
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 340,
          "end": 355,
          "params": [
            {
              "type": "TSUnionType",
              "start": 341,
              "end": 354,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 341,
                  "end": 346,
                  "literal": {
                    "type": "Literal",
                    "start": 341,
                    "end": 346,
                    "value": "FOO",
                    "raw": "'FOO'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 349,
                  "end": 354,
                  "literal": {
                    "type": "Literal",
                    "start": 349,
                    "end": 354,
                    "value": "BAR",
                    "raw": "'BAR'"
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
      "start": 375,
      "end": 404,
      "id": {
        "type": "Identifier",
        "start": 380,
        "end": 383,
        "decorators": [],
        "name": "TL3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 386,
        "end": 403,
        "typeName": {
          "type": "Identifier",
          "start": 386,
          "end": 395,
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 395,
          "end": 403,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 396,
              "end": 402
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 427,
      "end": 453,
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 435,
        "decorators": [],
        "name": "TL4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 438,
        "end": 452,
        "typeName": {
          "type": "Identifier",
          "start": 438,
          "end": 447,
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 447,
          "end": 452,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 448,
              "end": 451
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 478,
      "end": 506,
      "id": {
        "type": "Identifier",
        "start": 483,
        "end": 486,
        "decorators": [],
        "name": "TL5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 489,
        "end": 505,
        "typeName": {
          "type": "Identifier",
          "start": 489,
          "end": 498,
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 498,
          "end": 505,
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 499,
              "end": 504
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 517,
      "end": 542,
      "id": {
        "type": "Identifier",
        "start": 522,
        "end": 525,
        "decorators": [],
        "name": "TL6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 528,
        "end": 541,
        "typeName": {
          "type": "Identifier",
          "start": 528,
          "end": 537,
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 537,
          "end": 541,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 538,
              "end": 540,
              "literal": {
                "type": "Literal",
                "start": 538,
                "end": 540,
                "value": 42,
                "raw": "42"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 554,
      "end": 585,
      "id": {
        "type": "Identifier",
        "start": 559,
        "end": 562,
        "decorators": [],
        "name": "TC1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 565,
        "end": 584,
        "typeName": {
          "type": "Identifier",
          "start": 565,
          "end": 575,
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 575,
          "end": 584,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 576,
              "end": 583,
              "literal": {
                "type": "Literal",
                "start": 576,
                "end": 583,
                "value": "hello",
                "raw": "'hello'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 598,
      "end": 635,
      "id": {
        "type": "Identifier",
        "start": 603,
        "end": 606,
        "decorators": [],
        "name": "TC2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 609,
        "end": 634,
        "typeName": {
          "type": "Identifier",
          "start": 609,
          "end": 619,
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 619,
          "end": 634,
          "params": [
            {
              "type": "TSUnionType",
              "start": 620,
              "end": 633,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 620,
                  "end": 625,
                  "literal": {
                    "type": "Literal",
                    "start": 620,
                    "end": 625,
                    "value": "foo",
                    "raw": "'foo'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 628,
                  "end": 633,
                  "literal": {
                    "type": "Literal",
                    "start": 628,
                    "end": 633,
                    "value": "bar",
                    "raw": "'bar'"
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
      "start": 654,
      "end": 684,
      "id": {
        "type": "Identifier",
        "start": 659,
        "end": 662,
        "decorators": [],
        "name": "TC3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 665,
        "end": 683,
        "typeName": {
          "type": "Identifier",
          "start": 665,
          "end": 675,
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 675,
          "end": 683,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 676,
              "end": 682
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 708,
      "end": 735,
      "id": {
        "type": "Identifier",
        "start": 713,
        "end": 716,
        "decorators": [],
        "name": "TC4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 719,
        "end": 734,
        "typeName": {
          "type": "Identifier",
          "start": 719,
          "end": 729,
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 729,
          "end": 734,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 730,
              "end": 733
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 761,
      "end": 790,
      "id": {
        "type": "Identifier",
        "start": 766,
        "end": 769,
        "decorators": [],
        "name": "TC5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 772,
        "end": 789,
        "typeName": {
          "type": "Identifier",
          "start": 772,
          "end": 782,
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 782,
          "end": 789,
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 783,
              "end": 788
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 801,
      "end": 827,
      "id": {
        "type": "Identifier",
        "start": 806,
        "end": 809,
        "decorators": [],
        "name": "TC6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 812,
        "end": 826,
        "typeName": {
          "type": "Identifier",
          "start": 812,
          "end": 822,
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 822,
          "end": 826,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 823,
              "end": 825,
              "literal": {
                "type": "Literal",
                "start": 823,
                "end": 825,
                "value": 42,
                "raw": "42"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 839,
      "end": 872,
      "id": {
        "type": "Identifier",
        "start": 844,
        "end": 847,
        "decorators": [],
        "name": "TN1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 850,
        "end": 871,
        "typeName": {
          "type": "Identifier",
          "start": 850,
          "end": 862,
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 862,
          "end": 871,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 863,
              "end": 870,
              "literal": {
                "type": "Literal",
                "start": 863,
                "end": 870,
                "value": "Hello",
                "raw": "'Hello'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 885,
      "end": 924,
      "id": {
        "type": "Identifier",
        "start": 890,
        "end": 893,
        "decorators": [],
        "name": "TN2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 896,
        "end": 923,
        "typeName": {
          "type": "Identifier",
          "start": 896,
          "end": 908,
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 908,
          "end": 923,
          "params": [
            {
              "type": "TSUnionType",
              "start": 909,
              "end": 922,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 909,
                  "end": 914,
                  "literal": {
                    "type": "Literal",
                    "start": 909,
                    "end": 914,
                    "value": "Foo",
                    "raw": "'Foo'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 917,
                  "end": 922,
                  "literal": {
                    "type": "Literal",
                    "start": 917,
                    "end": 922,
                    "value": "Bar",
                    "raw": "'Bar'"
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
      "start": 943,
      "end": 975,
      "id": {
        "type": "Identifier",
        "start": 948,
        "end": 951,
        "decorators": [],
        "name": "TN3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 954,
        "end": 974,
        "typeName": {
          "type": "Identifier",
          "start": 954,
          "end": 966,
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 966,
          "end": 974,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 967,
              "end": 973
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1001,
      "end": 1030,
      "id": {
        "type": "Identifier",
        "start": 1006,
        "end": 1009,
        "decorators": [],
        "name": "TN4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1012,
        "end": 1029,
        "typeName": {
          "type": "Identifier",
          "start": 1012,
          "end": 1024,
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1024,
          "end": 1029,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 1025,
              "end": 1028
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1058,
      "end": 1089,
      "id": {
        "type": "Identifier",
        "start": 1063,
        "end": 1066,
        "decorators": [],
        "name": "TN5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1069,
        "end": 1088,
        "typeName": {
          "type": "Identifier",
          "start": 1069,
          "end": 1081,
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1081,
          "end": 1088,
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 1082,
              "end": 1087
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1100,
      "end": 1128,
      "id": {
        "type": "Identifier",
        "start": 1105,
        "end": 1108,
        "decorators": [],
        "name": "TN6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1111,
        "end": 1127,
        "typeName": {
          "type": "Identifier",
          "start": 1111,
          "end": 1123,
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1123,
          "end": 1127,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 1124,
              "end": 1126,
              "literal": {
                "type": "Literal",
                "start": 1124,
                "end": 1126,
                "value": 42,
                "raw": "42"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1140,
      "end": 1189,
      "id": {
        "type": "Identifier",
        "start": 1145,
        "end": 1148,
        "decorators": [],
        "name": "TX1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1148,
        "end": 1166,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1149,
            "end": 1165,
            "name": {
              "type": "Identifier",
              "start": 1149,
              "end": 1150,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1159,
              "end": 1165
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1169,
        "end": 1188,
        "typeName": {
          "type": "Identifier",
          "start": 1169,
          "end": 1178,
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1178,
          "end": 1188,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 1179,
              "end": 1187,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1179,
                  "end": 1184,
                  "value": {
                    "raw": "aB",
                    "cooked": "aB"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1185,
                  "end": 1187,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1184,
                  "end": 1185,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1184,
                    "end": 1185,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
      "start": 1190,
      "end": 1212,
      "id": {
        "type": "Identifier",
        "start": 1195,
        "end": 1198,
        "decorators": [],
        "name": "TX2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1201,
        "end": 1211,
        "typeName": {
          "type": "Identifier",
          "start": 1201,
          "end": 1204,
          "decorators": [],
          "name": "TX1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1204,
          "end": 1211,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 1205,
              "end": 1210,
              "literal": {
                "type": "Literal",
                "start": 1205,
                "end": 1210,
                "value": "xYz",
                "raw": "'xYz'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1225,
      "end": 1274,
      "id": {
        "type": "Identifier",
        "start": 1230,
        "end": 1233,
        "decorators": [],
        "name": "TX3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1233,
        "end": 1251,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1234,
            "end": 1250,
            "name": {
              "type": "Identifier",
              "start": 1234,
              "end": 1235,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1244,
              "end": 1250
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1254,
        "end": 1273,
        "typeName": {
          "type": "Identifier",
          "start": 1254,
          "end": 1263,
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1263,
          "end": 1273,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 1264,
              "end": 1272,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1264,
                  "end": 1269,
                  "value": {
                    "raw": "aB",
                    "cooked": "aB"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1270,
                  "end": 1272,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1269,
                  "end": 1270,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1269,
                    "end": 1270,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
      "start": 1275,
      "end": 1297,
      "id": {
        "type": "Identifier",
        "start": 1280,
        "end": 1283,
        "decorators": [],
        "name": "TX4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1286,
        "end": 1296,
        "typeName": {
          "type": "Identifier",
          "start": 1286,
          "end": 1289,
          "decorators": [],
          "name": "TX3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1289,
          "end": 1296,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 1290,
              "end": 1295,
              "literal": {
                "type": "Literal",
                "start": 1290,
                "end": 1295,
                "value": "xYz",
                "raw": "'xYz'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1310,
      "end": 1362,
      "id": {
        "type": "Identifier",
        "start": 1315,
        "end": 1318,
        "decorators": [],
        "name": "TX5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 1321,
        "end": 1361,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 1321,
            "end": 1324,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 1340,
            "end": 1343,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 1359,
            "end": 1361,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1324,
            "end": 1340,
            "typeName": {
              "type": "Identifier",
              "start": 1324,
              "end": 1333,
              "decorators": [],
              "name": "Uppercase",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1333,
              "end": 1340,
              "params": [
                {
                  "type": "TSLiteralType",
                  "start": 1334,
                  "end": 1339,
                  "literal": {
                    "type": "Literal",
                    "start": 1334,
                    "end": 1339,
                    "value": "abc",
                    "raw": "'abc'"
                  }
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 1343,
            "end": 1359,
            "typeName": {
              "type": "Identifier",
              "start": 1343,
              "end": 1352,
              "decorators": [],
              "name": "Lowercase",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1352,
              "end": 1359,
              "params": [
                {
                  "type": "TSLiteralType",
                  "start": 1353,
                  "end": 1358,
                  "literal": {
                    "type": "Literal",
                    "start": 1353,
                    "end": 1358,
                    "value": "XYZ",
                    "raw": "'XYZ'"
                  }
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
      "start": 1377,
      "end": 1424,
      "id": {
        "type": "Identifier",
        "start": 1382,
        "end": 1393,
        "decorators": [],
        "name": "MyUppercase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1393,
        "end": 1411,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1394,
            "end": 1410,
            "name": {
              "type": "Identifier",
              "start": 1394,
              "end": 1395,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1404,
              "end": 1410
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntrinsicKeyword",
        "start": 1414,
        "end": 1423
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1436,
      "end": 1625,
      "id": {
        "type": "Identifier",
        "start": 1445,
        "end": 1449,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1449,
        "end": 1480,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1450,
            "end": 1466,
            "name": {
              "type": "Identifier",
              "start": 1450,
              "end": 1451,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1460,
              "end": 1466
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1468,
            "end": 1479,
            "name": {
              "type": "Identifier",
              "start": 1468,
              "end": 1469,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1478,
              "end": 1479,
              "typeName": {
                "type": "Identifier",
                "start": 1478,
                "end": 1479,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1481,
          "end": 1490,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1482,
            "end": 1490,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1484,
              "end": 1490
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1492,
          "end": 1507,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1493,
            "end": 1507,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1495,
              "end": 1507,
              "typeName": {
                "type": "Identifier",
                "start": 1495,
                "end": 1504,
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1504,
                "end": 1507,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1505,
                    "end": 1506,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1505,
                      "end": 1506,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1509,
          "end": 1524,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1510,
            "end": 1524,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1512,
              "end": 1524,
              "typeName": {
                "type": "Identifier",
                "start": 1512,
                "end": 1521,
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1521,
                "end": 1524,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1522,
                    "end": 1523,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1522,
                      "end": 1523,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1526,
        "end": 1625,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1532,
            "end": 1538,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1532,
              "end": 1537,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1532,
                "end": 1533,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1536,
                "end": 1537,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1543,
            "end": 1549,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1543,
              "end": 1548,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1543,
                "end": 1544,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1547,
                "end": 1548,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1554,
            "end": 1560,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1554,
              "end": 1559,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1554,
                "end": 1555,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1558,
                "end": 1559,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1575,
            "end": 1581,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1575,
              "end": 1580,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1575,
                "end": 1576,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1579,
                "end": 1580,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1586,
            "end": 1592,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1586,
              "end": 1591,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1586,
                "end": 1587,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1590,
                "end": 1591,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1607,
            "end": 1613,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1607,
              "end": 1612,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1607,
                "end": 1608,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1611,
                "end": 1612,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1627,
      "end": 1716,
      "id": {
        "type": "Identifier",
        "start": 1636,
        "end": 1640,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1640,
        "end": 1665,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1641,
            "end": 1664,
            "name": {
              "type": "Identifier",
              "start": 1641,
              "end": 1642,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 1651,
              "end": 1664,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1651,
                  "end": 1656,
                  "literal": {
                    "type": "Literal",
                    "start": 1651,
                    "end": 1656,
                    "value": "foo",
                    "raw": "'foo'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1659,
                  "end": 1664,
                  "literal": {
                    "type": "Literal",
                    "start": 1659,
                    "end": 1664,
                    "value": "bar",
                    "raw": "'bar'"
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1666,
          "end": 1681,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1667,
            "end": 1681,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1669,
              "end": 1681,
              "typeName": {
                "type": "Identifier",
                "start": 1669,
                "end": 1678,
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1678,
                "end": 1681,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1679,
                    "end": 1680,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1679,
                      "end": 1680,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1683,
        "end": 1716,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1689,
            "end": 1714,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1693,
                "end": 1713,
                "id": {
                  "type": "Identifier",
                  "start": 1693,
                  "end": 1709,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1694,
                    "end": 1709,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1696,
                      "end": 1709,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 1696,
                          "end": 1701,
                          "literal": {
                            "type": "Literal",
                            "start": 1696,
                            "end": 1701,
                            "value": "FOO",
                            "raw": "'FOO'"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1704,
                          "end": 1709,
                          "literal": {
                            "type": "Literal",
                            "start": 1704,
                            "end": 1709,
                            "value": "BAR",
                            "raw": "'BAR'"
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1712,
                  "end": 1713,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1718,
      "end": 1778,
      "id": {
        "type": "Identifier",
        "start": 1735,
        "end": 1739,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1739,
        "end": 1757,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1740,
            "end": 1756,
            "name": {
              "type": "Identifier",
              "start": 1740,
              "end": 1741,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1750,
              "end": 1756
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1758,
          "end": 1773,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1759,
            "end": 1773,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1761,
              "end": 1773,
              "typeName": {
                "type": "Identifier",
                "start": 1761,
                "end": 1770,
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1770,
                "end": 1773,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1771,
                    "end": 1772,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1771,
                      "end": 1772,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1774,
        "end": 1777,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1776,
          "end": 1777,
          "typeName": {
            "type": "Identifier",
            "start": 1776,
            "end": 1777,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1780,
      "end": 1852,
      "id": {
        "type": "Identifier",
        "start": 1789,
        "end": 1793,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1793,
        "end": 1811,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1794,
            "end": 1810,
            "name": {
              "type": "Identifier",
              "start": 1794,
              "end": 1795,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1804,
              "end": 1810
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1812,
          "end": 1827,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1813,
            "end": 1827,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1815,
              "end": 1827,
              "typeName": {
                "type": "Identifier",
                "start": 1815,
                "end": 1824,
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1824,
                "end": 1827,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1825,
                    "end": 1826,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1825,
                      "end": 1826,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1829,
        "end": 1852,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1835,
            "end": 1850,
            "argument": {
              "type": "CallExpression",
              "start": 1842,
              "end": 1849,
              "callee": {
                "type": "Identifier",
                "start": 1842,
                "end": 1846,
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1847,
                  "end": 1848,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
