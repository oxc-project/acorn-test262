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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 24
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 26,
                "end": 32
              },
              "start": 24,
              "end": 32
            },
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 33
          }
        ],
        "start": 15,
        "end": 35
      },
      "declare": false,
      "start": 0,
      "end": 35
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 54
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 67
          },
          "typeArguments": null,
          "start": 63,
          "end": 67
        }
      ],
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              },
              "start": 77,
              "end": 85
            },
            "accessibility": null,
            "static": false,
            "start": 74,
            "end": 86
          }
        ],
        "start": 68,
        "end": 88
      },
      "declare": false,
      "start": 37,
      "end": 88
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 295
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 313
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 324,
                    "end": 327
                  },
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
                        "start": 329,
                        "end": 333
                      },
                      "typeArguments": null,
                      "start": 329,
                      "end": 333
                    },
                    "start": 327,
                    "end": 333
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 324,
                  "end": 334
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 343,
                    "end": 346
                  },
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
                        "start": 348,
                        "end": 352
                      },
                      "typeArguments": null,
                      "start": 348,
                      "end": 352
                    },
                    "start": 346,
                    "end": 352
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 343,
                  "end": 353
                }
              ],
              "start": 314,
              "end": 359
            },
            "declare": false,
            "start": 302,
            "end": 359
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 376
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 385,
                  "end": 386
                },
                "typeArguments": null,
                "start": 385,
                "end": 386
              }
            ],
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 397,
                    "end": 400
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 402,
                        "end": 409
                      },
                      "typeArguments": null,
                      "start": 402,
                      "end": 409
                    },
                    "start": 400,
                    "end": 409
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 397,
                  "end": 410
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 425,
                    "end": 428
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 430,
                      "end": 436
                    },
                    "start": 428,
                    "end": 436
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 425,
                  "end": 437
                }
              ],
              "start": 387,
              "end": 452
            },
            "declare": false,
            "start": 365,
            "end": 452
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 470
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
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 481,
                    "end": 482
                  },
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
                        "start": 484,
                        "end": 488
                      },
                      "typeArguments": null,
                      "start": 484,
                      "end": 488
                    },
                    "start": 482,
                    "end": 488
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 481,
                  "end": 489
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2.0",
                    "start": 498,
                    "end": 501
                  },
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
                        "start": 503,
                        "end": 507
                      },
                      "typeArguments": null,
                      "start": 503,
                      "end": 507
                    },
                    "start": 501,
                    "end": 507
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 498,
                  "end": 508
                }
              ],
              "start": 471,
              "end": 514
            },
            "declare": false,
            "start": 458,
            "end": 514
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null,
              "start": 530,
              "end": 532
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 543
                },
                "typeArguments": null,
                "start": 541,
                "end": 543
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 554,
                    "end": 555
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 557,
                        "end": 564
                      },
                      "typeArguments": null,
                      "start": 557,
                      "end": 564
                    },
                    "start": 555,
                    "end": 564
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 554,
                  "end": 565
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 580,
                    "end": 581
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 583,
                      "end": 589
                    },
                    "start": 581,
                    "end": 589
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 580,
                  "end": 590
                }
              ],
              "start": 544,
              "end": 605
            },
            "declare": false,
            "start": 520,
            "end": 605
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
              "end": 623
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
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 634,
                    "end": 637
                  },
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
                        "start": 639,
                        "end": 643
                      },
                      "typeArguments": null,
                      "start": 639,
                      "end": 643
                    },
                    "start": 637,
                    "end": 643
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 634,
                  "end": 644
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "2.0",
                    "raw": "'2.0'",
                    "start": 653,
                    "end": 658
                  },
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
                        "start": 660,
                        "end": 664
                      },
                      "typeArguments": null,
                      "start": 660,
                      "end": 664
                    },
                    "start": 658,
                    "end": 664
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 653,
                  "end": 665
                }
              ],
              "start": 624,
              "end": 671
            },
            "declare": false,
            "start": 611,
            "end": 671
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null,
              "start": 687,
              "end": 689
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 698,
                  "end": 700
                },
                "typeArguments": null,
                "start": 698,
                "end": 700
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 711,
                    "end": 714
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 716,
                        "end": 723
                      },
                      "typeArguments": null,
                      "start": 716,
                      "end": 723
                    },
                    "start": 714,
                    "end": 723
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 711,
                  "end": 724
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "2.0",
                    "raw": "'2.0'",
                    "start": 739,
                    "end": 744
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 746,
                      "end": 752
                    },
                    "start": 744,
                    "end": 752
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 739,
                  "end": 753
                }
              ],
              "start": 701,
              "end": 768
            },
            "declare": false,
            "start": 677,
            "end": 768
          }
        ],
        "start": 296,
        "end": 770
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 274,
      "end": 770
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Optional",
        "optional": false,
        "typeAnnotation": null,
        "start": 823,
        "end": 831
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 848,
              "end": 849
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 860,
                    "end": 863
                  },
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
                        "start": 866,
                        "end": 870
                      },
                      "typeArguments": null,
                      "start": 866,
                      "end": 870
                    },
                    "start": 864,
                    "end": 870
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 860,
                  "end": 871
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 880,
                    "end": 883
                  },
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
                        "start": 886,
                        "end": 890
                      },
                      "typeArguments": null,
                      "start": 886,
                      "end": 890
                    },
                    "start": 884,
                    "end": 890
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 880,
                  "end": 891
                }
              ],
              "start": 850,
              "end": 897
            },
            "declare": false,
            "start": 838,
            "end": 897
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 914
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 923,
                  "end": 924
                },
                "typeArguments": null,
                "start": 923,
                "end": 924
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 935,
                    "end": 938
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 941,
                        "end": 948
                      },
                      "typeArguments": null,
                      "start": 941,
                      "end": 948
                    },
                    "start": 939,
                    "end": 948
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 935,
                  "end": 949
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 964,
                    "end": 967
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 970,
                      "end": 976
                    },
                    "start": 968,
                    "end": 976
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 964,
                  "end": 977
                }
              ],
              "start": 925,
              "end": 992
            },
            "declare": false,
            "start": 903,
            "end": 992
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1008,
              "end": 1010
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1021,
                    "end": 1022
                  },
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
                        "start": 1025,
                        "end": 1029
                      },
                      "typeArguments": null,
                      "start": 1025,
                      "end": 1029
                    },
                    "start": 1023,
                    "end": 1029
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1021,
                  "end": 1030
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2.0",
                    "start": 1039,
                    "end": 1042
                  },
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
                        "start": 1045,
                        "end": 1049
                      },
                      "typeArguments": null,
                      "start": 1045,
                      "end": 1049
                    },
                    "start": 1043,
                    "end": 1049
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1039,
                  "end": 1050
                }
              ],
              "start": 1011,
              "end": 1056
            },
            "declare": false,
            "start": 998,
            "end": 1056
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1072,
              "end": 1074
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1083,
                  "end": 1085
                },
                "typeArguments": null,
                "start": 1083,
                "end": 1085
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1096,
                    "end": 1097
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1100,
                        "end": 1107
                      },
                      "typeArguments": null,
                      "start": 1100,
                      "end": 1107
                    },
                    "start": 1098,
                    "end": 1107
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1096,
                  "end": 1108
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1123,
                    "end": 1124
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1127,
                      "end": 1133
                    },
                    "start": 1125,
                    "end": 1133
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1123,
                  "end": 1134
                }
              ],
              "start": 1086,
              "end": 1149
            },
            "declare": false,
            "start": 1062,
            "end": 1149
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1165,
              "end": 1167
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 1178,
                    "end": 1181
                  },
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
                        "start": 1184,
                        "end": 1188
                      },
                      "typeArguments": null,
                      "start": 1184,
                      "end": 1188
                    },
                    "start": 1182,
                    "end": 1188
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1178,
                  "end": 1189
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "2.0",
                    "raw": "'2.0'",
                    "start": 1198,
                    "end": 1203
                  },
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
                        "start": 1206,
                        "end": 1210
                      },
                      "typeArguments": null,
                      "start": 1206,
                      "end": 1210
                    },
                    "start": 1204,
                    "end": 1210
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1198,
                  "end": 1211
                }
              ],
              "start": 1168,
              "end": 1217
            },
            "declare": false,
            "start": 1155,
            "end": 1217
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1233,
              "end": 1235
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1244,
                  "end": 1246
                },
                "typeArguments": null,
                "start": 1244,
                "end": 1246
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 1257,
                    "end": 1260
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1263,
                        "end": 1270
                      },
                      "typeArguments": null,
                      "start": 1263,
                      "end": 1270
                    },
                    "start": 1261,
                    "end": 1270
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1257,
                  "end": 1271
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "2.0",
                    "raw": "'2.0'",
                    "start": 1286,
                    "end": 1291
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1294,
                      "end": 1300
                    },
                    "start": 1292,
                    "end": 1300
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1286,
                  "end": 1301
                }
              ],
              "start": 1247,
              "end": 1316
            },
            "declare": false,
            "start": 1223,
            "end": 1316
          }
        ],
        "start": 832,
        "end": 1318
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 813,
      "end": 1318
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1318
}
```
