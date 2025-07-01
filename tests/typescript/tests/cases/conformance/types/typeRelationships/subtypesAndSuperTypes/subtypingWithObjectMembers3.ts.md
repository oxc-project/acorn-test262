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
        "start": 281,
        "end": 292
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
              "start": 309,
              "end": 310
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
                    "start": 321,
                    "end": 324
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
                        "start": 326,
                        "end": 330
                      },
                      "typeArguments": null,
                      "start": 326,
                      "end": 330
                    },
                    "start": 324,
                    "end": 330
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 321,
                  "end": 331
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
                    "start": 340,
                    "end": 343
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
                        "start": 345,
                        "end": 352
                      },
                      "typeArguments": null,
                      "start": 345,
                      "end": 352
                    },
                    "start": 343,
                    "end": 352
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 340,
                  "end": 353
                }
              ],
              "start": 311,
              "end": 359
            },
            "declare": false,
            "start": 299,
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 430,
                        "end": 434
                      },
                      "typeArguments": null,
                      "start": 430,
                      "end": 434
                    },
                    "start": 428,
                    "end": 434
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 425,
                  "end": 435
                }
              ],
              "start": 387,
              "end": 450
            },
            "declare": false,
            "start": 365,
            "end": 450
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 468
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
                    "start": 479,
                    "end": 480
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
                        "start": 482,
                        "end": 486
                      },
                      "typeArguments": null,
                      "start": 482,
                      "end": 486
                    },
                    "start": 480,
                    "end": 486
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 479,
                  "end": 487
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
                    "start": 496,
                    "end": 499
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
                        "start": 501,
                        "end": 508
                      },
                      "typeArguments": null,
                      "start": 501,
                      "end": 508
                    },
                    "start": 499,
                    "end": 508
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 496,
                  "end": 509
                }
              ],
              "start": 469,
              "end": 515
            },
            "declare": false,
            "start": 456,
            "end": 515
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null,
              "start": 531,
              "end": 533
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
                  "start": 542,
                  "end": 544
                },
                "typeArguments": null,
                "start": 542,
                "end": 544
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
                    "start": 555,
                    "end": 556
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
                        "start": 558,
                        "end": 565
                      },
                      "typeArguments": null,
                      "start": 558,
                      "end": 565
                    },
                    "start": 556,
                    "end": 565
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 555,
                  "end": 566
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
                    "start": 581,
                    "end": 582
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
                        "start": 584,
                        "end": 588
                      },
                      "typeArguments": null,
                      "start": 584,
                      "end": 588
                    },
                    "start": 582,
                    "end": 588
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 581,
                  "end": 589
                }
              ],
              "start": 545,
              "end": 604
            },
            "declare": false,
            "start": 521,
            "end": 604
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null,
              "start": 620,
              "end": 622
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
                    "start": 633,
                    "end": 636
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
                        "start": 638,
                        "end": 642
                      },
                      "typeArguments": null,
                      "start": 638,
                      "end": 642
                    },
                    "start": 636,
                    "end": 642
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 633,
                  "end": 643
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
                    "start": 652,
                    "end": 657
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
                        "start": 659,
                        "end": 666
                      },
                      "typeArguments": null,
                      "start": 659,
                      "end": 666
                    },
                    "start": 657,
                    "end": 666
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 652,
                  "end": 667
                }
              ],
              "start": 623,
              "end": 673
            },
            "declare": false,
            "start": 610,
            "end": 673
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null,
              "start": 689,
              "end": 691
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
                  "start": 700,
                  "end": 702
                },
                "typeArguments": null,
                "start": 700,
                "end": 702
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
                    "start": 713,
                    "end": 716
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
                        "start": 718,
                        "end": 725
                      },
                      "typeArguments": null,
                      "start": 718,
                      "end": 725
                    },
                    "start": 716,
                    "end": 725
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 713,
                  "end": 726
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
                    "start": 741,
                    "end": 746
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
                        "start": 748,
                        "end": 752
                      },
                      "typeArguments": null,
                      "start": 748,
                      "end": 752
                    },
                    "start": 746,
                    "end": 752
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 741,
                  "end": 753
                }
              ],
              "start": 703,
              "end": 768
            },
            "declare": false,
            "start": 679,
            "end": 768
          }
        ],
        "start": 293,
        "end": 770
      },
      "kind": "module",
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
        "start": 779,
        "end": 787
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
              "start": 804,
              "end": 805
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
                    "start": 816,
                    "end": 819
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
                        "start": 822,
                        "end": 826
                      },
                      "typeArguments": null,
                      "start": 822,
                      "end": 826
                    },
                    "start": 820,
                    "end": 826
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 816,
                  "end": 827
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
                    "start": 836,
                    "end": 839
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
                        "start": 842,
                        "end": 849
                      },
                      "typeArguments": null,
                      "start": 842,
                      "end": 849
                    },
                    "start": 840,
                    "end": 849
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 836,
                  "end": 850
                }
              ],
              "start": 806,
              "end": 856
            },
            "declare": false,
            "start": 794,
            "end": 856
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 872,
              "end": 873
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
                  "start": 882,
                  "end": 883
                },
                "typeArguments": null,
                "start": 882,
                "end": 883
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
                    "start": 894,
                    "end": 897
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
                        "start": 900,
                        "end": 907
                      },
                      "typeArguments": null,
                      "start": 900,
                      "end": 907
                    },
                    "start": 898,
                    "end": 907
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 894,
                  "end": 908
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
                    "start": 923,
                    "end": 926
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
                        "start": 929,
                        "end": 933
                      },
                      "typeArguments": null,
                      "start": 929,
                      "end": 933
                    },
                    "start": 927,
                    "end": 933
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 923,
                  "end": 934
                }
              ],
              "start": 884,
              "end": 949
            },
            "declare": false,
            "start": 862,
            "end": 949
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null,
              "start": 965,
              "end": 967
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
                    "start": 978,
                    "end": 979
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
                        "start": 982,
                        "end": 986
                      },
                      "typeArguments": null,
                      "start": 982,
                      "end": 986
                    },
                    "start": 980,
                    "end": 986
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 978,
                  "end": 987
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
                    "start": 996,
                    "end": 999
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
                        "start": 1002,
                        "end": 1009
                      },
                      "typeArguments": null,
                      "start": 1002,
                      "end": 1009
                    },
                    "start": 1000,
                    "end": 1009
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 996,
                  "end": 1010
                }
              ],
              "start": 968,
              "end": 1016
            },
            "declare": false,
            "start": 955,
            "end": 1016
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1034
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
                  "start": 1043,
                  "end": 1045
                },
                "typeArguments": null,
                "start": 1043,
                "end": 1045
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
                    "start": 1056,
                    "end": 1057
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
                        "start": 1060,
                        "end": 1067
                      },
                      "typeArguments": null,
                      "start": 1060,
                      "end": 1067
                    },
                    "start": 1058,
                    "end": 1067
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1056,
                  "end": 1068
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
                    "start": 1083,
                    "end": 1084
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
                        "start": 1087,
                        "end": 1091
                      },
                      "typeArguments": null,
                      "start": 1087,
                      "end": 1091
                    },
                    "start": 1085,
                    "end": 1091
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1083,
                  "end": 1092
                }
              ],
              "start": 1046,
              "end": 1107
            },
            "declare": false,
            "start": 1022,
            "end": 1107
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1123,
              "end": 1125
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
                    "start": 1136,
                    "end": 1139
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
                        "start": 1142,
                        "end": 1146
                      },
                      "typeArguments": null,
                      "start": 1142,
                      "end": 1146
                    },
                    "start": 1140,
                    "end": 1146
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1136,
                  "end": 1147
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
                    "start": 1156,
                    "end": 1161
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
                        "start": 1164,
                        "end": 1171
                      },
                      "typeArguments": null,
                      "start": 1164,
                      "end": 1171
                    },
                    "start": 1162,
                    "end": 1171
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1156,
                  "end": 1172
                }
              ],
              "start": 1126,
              "end": 1178
            },
            "declare": false,
            "start": 1113,
            "end": 1178
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1194,
              "end": 1196
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
                  "start": 1205,
                  "end": 1207
                },
                "typeArguments": null,
                "start": 1205,
                "end": 1207
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
                    "start": 1218,
                    "end": 1221
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
                        "start": 1224,
                        "end": 1231
                      },
                      "typeArguments": null,
                      "start": 1224,
                      "end": 1231
                    },
                    "start": 1222,
                    "end": 1231
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1218,
                  "end": 1232
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
                    "start": 1247,
                    "end": 1252
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
                        "start": 1255,
                        "end": 1259
                      },
                      "typeArguments": null,
                      "start": 1255,
                      "end": 1259
                    },
                    "start": 1253,
                    "end": 1259
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1247,
                  "end": 1260
                }
              ],
              "start": 1208,
              "end": 1275
            },
            "declare": false,
            "start": 1184,
            "end": 1275
          }
        ],
        "start": 788,
        "end": 1277
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 772,
      "end": 1277
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1277
}
```
