__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 10,
    "end": 14,
    "range": [
      10,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 21,
    "end": 24,
    "range": [
      21,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 26,
    "end": 32,
    "range": [
      26,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 37,
    "end": 46,
    "range": [
      37,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 47,
    "end": 54,
    "range": [
      47,
      54
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 55,
    "end": 62,
    "range": [
      55,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 63,
    "end": 67,
    "range": [
      63,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 74,
    "end": 77,
    "range": [
      74,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85,
    "range": [
      79,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 274,
    "end": 283,
    "range": [
      274,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "NotOptional",
    "start": 284,
    "end": 295,
    "range": [
      284,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 302,
    "end": 311,
    "range": [
      302,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 324,
    "end": 327,
    "range": [
      324,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 329,
    "end": 333,
    "range": [
      329,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 343,
    "end": 346,
    "range": [
      343,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 348,
    "end": 355,
    "range": [
      348,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 368,
    "end": 377,
    "range": [
      368,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 380,
    "end": 387,
    "range": [
      380,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 400,
    "end": 403,
    "range": [
      400,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 405,
    "end": 412,
    "range": [
      405,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 428,
    "end": 431,
    "range": [
      428,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 433,
    "end": 437,
    "range": [
      433,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 459,
    "end": 468,
    "range": [
      459,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 469,
    "end": 471,
    "range": [
      469,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484,
    "range": [
      483,
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
    "value": ";",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Numeric",
    "value": "2.0",
    "start": 499,
    "end": 502,
    "range": [
      499,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 504,
    "end": 511,
    "range": [
      504,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 524,
    "end": 533,
    "range": [
      524,
      533
    ]
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 534,
    "end": 536,
    "range": [
      534,
      536
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 537,
    "end": 544,
    "range": [
      537,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 545,
    "end": 547,
    "range": [
      545,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 561,
    "end": 568,
    "range": [
      561,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 587,
    "end": 591,
    "range": [
      587,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 613,
    "end": 622,
    "range": [
      613,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 623,
    "end": 625,
    "range": [
      623,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 636,
    "end": 639,
    "range": [
      636,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 641,
    "end": 645,
    "range": [
      641,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "String",
    "value": "'2.0'",
    "start": 655,
    "end": 660,
    "range": [
      655,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 662,
    "end": 669,
    "range": [
      662,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 682,
    "end": 691,
    "range": [
      682,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 692,
    "end": 694,
    "range": [
      692,
      694
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 695,
    "end": 702,
    "range": [
      695,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 703,
    "end": 705,
    "range": [
      703,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 716,
    "end": 719,
    "range": [
      716,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 721,
    "end": 728,
    "range": [
      721,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "String",
    "value": "'2.0'",
    "start": 744,
    "end": 749,
    "range": [
      744,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 751,
    "end": 755,
    "range": [
      751,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 775,
    "end": 784,
    "range": [
      775,
      784
    ]
  },
  {
    "type": "Identifier",
    "value": "Optional",
    "start": 785,
    "end": 793,
    "range": [
      785,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 800,
    "end": 809,
    "range": [
      800,
      809
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 822,
    "end": 825,
    "range": [
      822,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 828,
    "end": 832,
    "range": [
      828,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 842,
    "end": 845,
    "range": [
      842,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 848,
    "end": 855,
    "range": [
      848,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 868,
    "end": 877,
    "range": [
      868,
      877
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 880,
    "end": 887,
    "range": [
      880,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 900,
    "end": 903,
    "range": [
      900,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 906,
    "end": 913,
    "range": [
      906,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 929,
    "end": 932,
    "range": [
      929,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 935,
    "end": 939,
    "range": [
      935,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 961,
    "end": 970,
    "range": [
      961,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 971,
    "end": 973,
    "range": [
      971,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 985,
    "end": 986,
    "range": [
      985,
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
    "type": "Numeric",
    "value": "2.0",
    "start": 1002,
    "end": 1005,
    "range": [
      1002,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1008,
    "end": 1015,
    "range": [
      1008,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1028,
    "end": 1037,
    "range": [
      1028,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 1038,
    "end": 1040,
    "range": [
      1038,
      1040
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1041,
    "end": 1048,
    "range": [
      1041,
      1048
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1049,
    "end": 1051,
    "range": [
      1049,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1066,
    "end": 1073,
    "range": [
      1066,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1073,
    "end": 1074,
    "range": [
      1073,
      1074
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1093,
    "end": 1097,
    "range": [
      1093,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1119,
    "end": 1128,
    "range": [
      1119,
      1128
    ]
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 1129,
    "end": 1131,
    "range": [
      1129,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 1142,
    "end": 1145,
    "range": [
      1142,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1148,
    "end": 1152,
    "range": [
      1148,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "String",
    "value": "'2.0'",
    "start": 1162,
    "end": 1167,
    "range": [
      1162,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1170,
    "end": 1177,
    "range": [
      1170,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1190,
    "end": 1199,
    "range": [
      1190,
      1199
    ]
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 1200,
    "end": 1202,
    "range": [
      1200,
      1202
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1203,
    "end": 1210,
    "range": [
      1203,
      1210
    ]
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 1211,
    "end": 1213,
    "range": [
      1211,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 1224,
    "end": 1227,
    "range": [
      1224,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1230,
    "end": 1237,
    "range": [
      1230,
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
    "type": "String",
    "value": "'2.0'",
    "start": 1253,
    "end": 1258,
    "range": [
      1253,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1261,
    "end": 1265,
    "range": [
      1261,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  }
]
```
