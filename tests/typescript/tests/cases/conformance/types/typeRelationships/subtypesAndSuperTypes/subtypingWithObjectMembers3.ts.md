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
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 348,
                        "end": 355
                      },
                      "typeArguments": null,
                      "start": 348,
                      "end": 355
                    },
                    "start": 346,
                    "end": 355
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 343,
                  "end": 356
                }
              ],
              "start": 314,
              "end": 362
            },
            "declare": false,
            "start": 302,
            "end": 362
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 379
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
                  "start": 388,
                  "end": 389
                },
                "typeArguments": null,
                "start": 388,
                "end": 389
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
                    "start": 400,
                    "end": 403
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
                        "start": 405,
                        "end": 412
                      },
                      "typeArguments": null,
                      "start": 405,
                      "end": 412
                    },
                    "start": 403,
                    "end": 412
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 400,
                  "end": 413
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
                    "start": 428,
                    "end": 431
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
                        "start": 433,
                        "end": 437
                      },
                      "typeArguments": null,
                      "start": 433,
                      "end": 437
                    },
                    "start": 431,
                    "end": 437
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 428,
                  "end": 438
                }
              ],
              "start": 390,
              "end": 453
            },
            "declare": false,
            "start": 368,
            "end": 453
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null,
              "start": 469,
              "end": 471
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
                    "start": 482,
                    "end": 483
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
                        "start": 485,
                        "end": 489
                      },
                      "typeArguments": null,
                      "start": 485,
                      "end": 489
                    },
                    "start": 483,
                    "end": 489
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 482,
                  "end": 490
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
                    "start": 499,
                    "end": 502
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
                        "start": 504,
                        "end": 511
                      },
                      "typeArguments": null,
                      "start": 504,
                      "end": 511
                    },
                    "start": 502,
                    "end": 511
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 499,
                  "end": 512
                }
              ],
              "start": 472,
              "end": 518
            },
            "declare": false,
            "start": 459,
            "end": 518
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 536
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
                  "start": 545,
                  "end": 547
                },
                "typeArguments": null,
                "start": 545,
                "end": 547
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
                    "start": 558,
                    "end": 559
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
                        "start": 561,
                        "end": 568
                      },
                      "typeArguments": null,
                      "start": 561,
                      "end": 568
                    },
                    "start": 559,
                    "end": 568
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 558,
                  "end": 569
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
                    "start": 584,
                    "end": 585
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
                        "start": 587,
                        "end": 591
                      },
                      "typeArguments": null,
                      "start": 587,
                      "end": 591
                    },
                    "start": 585,
                    "end": 591
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 584,
                  "end": 592
                }
              ],
              "start": 548,
              "end": 607
            },
            "declare": false,
            "start": 524,
            "end": 607
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null,
              "start": 623,
              "end": 625
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
                    "start": 636,
                    "end": 639
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
                        "start": 641,
                        "end": 645
                      },
                      "typeArguments": null,
                      "start": 641,
                      "end": 645
                    },
                    "start": 639,
                    "end": 645
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 636,
                  "end": 646
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
                    "start": 655,
                    "end": 660
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
                        "start": 662,
                        "end": 669
                      },
                      "typeArguments": null,
                      "start": 662,
                      "end": 669
                    },
                    "start": 660,
                    "end": 669
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 655,
                  "end": 670
                }
              ],
              "start": 626,
              "end": 676
            },
            "declare": false,
            "start": 613,
            "end": 676
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null,
              "start": 692,
              "end": 694
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
                  "start": 703,
                  "end": 705
                },
                "typeArguments": null,
                "start": 703,
                "end": 705
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
                    "start": 716,
                    "end": 719
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
                        "start": 721,
                        "end": 728
                      },
                      "typeArguments": null,
                      "start": 721,
                      "end": 728
                    },
                    "start": 719,
                    "end": 728
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 716,
                  "end": 729
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
                    "start": 744,
                    "end": 749
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
                        "start": 751,
                        "end": 755
                      },
                      "typeArguments": null,
                      "start": 751,
                      "end": 755
                    },
                    "start": 749,
                    "end": 755
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 744,
                  "end": 756
                }
              ],
              "start": 706,
              "end": 771
            },
            "declare": false,
            "start": 682,
            "end": 771
          }
        ],
        "start": 296,
        "end": 773
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 274,
      "end": 773
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Optional",
        "optional": false,
        "typeAnnotation": null,
        "start": 785,
        "end": 793
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
              "start": 810,
              "end": 811
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
                    "start": 822,
                    "end": 825
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
                        "start": 828,
                        "end": 832
                      },
                      "typeArguments": null,
                      "start": 828,
                      "end": 832
                    },
                    "start": 826,
                    "end": 832
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 822,
                  "end": 833
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
                    "start": 842,
                    "end": 845
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
                        "start": 848,
                        "end": 855
                      },
                      "typeArguments": null,
                      "start": 848,
                      "end": 855
                    },
                    "start": 846,
                    "end": 855
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 842,
                  "end": 856
                }
              ],
              "start": 812,
              "end": 862
            },
            "declare": false,
            "start": 800,
            "end": 862
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 878,
              "end": 879
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
                  "start": 888,
                  "end": 889
                },
                "typeArguments": null,
                "start": 888,
                "end": 889
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
                    "start": 900,
                    "end": 903
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
                        "start": 906,
                        "end": 913
                      },
                      "typeArguments": null,
                      "start": 906,
                      "end": 913
                    },
                    "start": 904,
                    "end": 913
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 900,
                  "end": 914
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
                    "start": 929,
                    "end": 932
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
                        "start": 935,
                        "end": 939
                      },
                      "typeArguments": null,
                      "start": 935,
                      "end": 939
                    },
                    "start": 933,
                    "end": 939
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 929,
                  "end": 940
                }
              ],
              "start": 890,
              "end": 955
            },
            "declare": false,
            "start": 868,
            "end": 955
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null,
              "start": 971,
              "end": 973
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
                    "start": 984,
                    "end": 985
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
                  "accessibility": null,
                  "static": false,
                  "start": 984,
                  "end": 993
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
                    "start": 1002,
                    "end": 1005
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
                        "start": 1008,
                        "end": 1015
                      },
                      "typeArguments": null,
                      "start": 1008,
                      "end": 1015
                    },
                    "start": 1006,
                    "end": 1015
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1002,
                  "end": 1016
                }
              ],
              "start": 974,
              "end": 1022
            },
            "declare": false,
            "start": 961,
            "end": 1022
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1038,
              "end": 1040
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
                  "start": 1049,
                  "end": 1051
                },
                "typeArguments": null,
                "start": 1049,
                "end": 1051
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
                    "start": 1062,
                    "end": 1063
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
                        "start": 1066,
                        "end": 1073
                      },
                      "typeArguments": null,
                      "start": 1066,
                      "end": 1073
                    },
                    "start": 1064,
                    "end": 1073
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1062,
                  "end": 1074
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
                    "start": 1089,
                    "end": 1090
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
                        "start": 1093,
                        "end": 1097
                      },
                      "typeArguments": null,
                      "start": 1093,
                      "end": 1097
                    },
                    "start": 1091,
                    "end": 1097
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1089,
                  "end": 1098
                }
              ],
              "start": 1052,
              "end": 1113
            },
            "declare": false,
            "start": 1028,
            "end": 1113
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1129,
              "end": 1131
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
                    "start": 1142,
                    "end": 1145
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
                        "start": 1148,
                        "end": 1152
                      },
                      "typeArguments": null,
                      "start": 1148,
                      "end": 1152
                    },
                    "start": 1146,
                    "end": 1152
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1142,
                  "end": 1153
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
                    "start": 1162,
                    "end": 1167
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
                        "start": 1170,
                        "end": 1177
                      },
                      "typeArguments": null,
                      "start": 1170,
                      "end": 1177
                    },
                    "start": 1168,
                    "end": 1177
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1162,
                  "end": 1178
                }
              ],
              "start": 1132,
              "end": 1184
            },
            "declare": false,
            "start": 1119,
            "end": 1184
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1200,
              "end": 1202
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
                  "start": 1211,
                  "end": 1213
                },
                "typeArguments": null,
                "start": 1211,
                "end": 1213
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
                    "start": 1224,
                    "end": 1227
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
                        "start": 1230,
                        "end": 1237
                      },
                      "typeArguments": null,
                      "start": 1230,
                      "end": 1237
                    },
                    "start": 1228,
                    "end": 1237
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1224,
                  "end": 1238
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
                    "start": 1253,
                    "end": 1258
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
                        "start": 1261,
                        "end": 1265
                      },
                      "typeArguments": null,
                      "start": 1261,
                      "end": 1265
                    },
                    "start": 1259,
                    "end": 1265
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1253,
                  "end": 1266
                }
              ],
              "start": 1214,
              "end": 1281
            },
            "declare": false,
            "start": 1190,
            "end": 1281
          }
        ],
        "start": 794,
        "end": 1283
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 775,
      "end": 1283
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1283
}
```
