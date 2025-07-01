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
        "name": "One",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 344
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 350
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 352,
                "end": 358
              },
              "start": 350,
              "end": 358
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
            "start": 347,
            "end": 358
          }
        ],
        "start": 345,
        "end": 360
      },
      "abstract": false,
      "declare": false,
      "start": 335,
      "end": 360
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Two",
        "optional": false,
        "typeAnnotation": null,
        "start": 367,
        "end": 370
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 376
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 378,
                "end": 384
              },
              "start": 376,
              "end": 384
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
            "start": 373,
            "end": 384
          }
        ],
        "start": 371,
        "end": 386
      },
      "abstract": false,
      "declare": false,
      "start": 361,
      "end": 386
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Three",
        "optional": false,
        "typeAnnotation": null,
        "start": 397,
        "end": 402
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
              "start": 405,
              "end": 408
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 410,
                "end": 416
              },
              "start": 408,
              "end": 416
            },
            "accessibility": null,
            "static": false,
            "start": 405,
            "end": 416
          }
        ],
        "start": 403,
        "end": 418
      },
      "declare": false,
      "start": 387,
      "end": 418
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Four",
        "optional": false,
        "typeAnnotation": null,
        "start": 429,
        "end": 433
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
              "start": 434,
              "end": 435
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 434,
            "end": 435
          }
        ],
        "start": 433,
        "end": 436
      },
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
              "start": 439,
              "end": 442
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
                  "start": 444,
                  "end": 445
                },
                "typeArguments": null,
                "start": 444,
                "end": 445
              },
              "start": 442,
              "end": 445
            },
            "accessibility": null,
            "static": false,
            "start": 439,
            "end": 445
          }
        ],
        "start": 437,
        "end": 447
      },
      "declare": false,
      "start": 419,
      "end": 447
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Five",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 462
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
              "start": 463,
              "end": 464
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 463,
            "end": 464
          }
        ],
        "start": 462,
        "end": 465
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Four",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 478
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
                  "start": 479,
                  "end": 480
                },
                "typeArguments": null,
                "start": 479,
                "end": 480
              }
            ],
            "start": 478,
            "end": 481
          },
          "start": 474,
          "end": 481
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 482,
        "end": 485
      },
      "declare": false,
      "start": 448,
      "end": 485
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Six",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 499
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
              "start": 500,
              "end": 501
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 500,
            "end": 501
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 504
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 503,
            "end": 504
          }
        ],
        "start": 499,
        "end": 505
      },
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
              "start": 512,
              "end": 515
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
                  "start": 517,
                  "end": 518
                },
                "typeArguments": null,
                "start": 517,
                "end": 518
              },
              "start": 515,
              "end": 518
            },
            "accessibility": null,
            "static": false,
            "start": 512,
            "end": 519
          }
        ],
        "start": 506,
        "end": 521
      },
      "declare": false,
      "start": 486,
      "end": 521
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 529,
        "end": 530
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 540
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 541,
                      "end": 542
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 551,
                        "end": 552
                      },
                      "typeArguments": null,
                      "start": 551,
                      "end": 552
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 541,
                    "end": 552
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 554,
                      "end": 555
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "One",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 564,
                        "end": 567
                      },
                      "typeArguments": null,
                      "start": 564,
                      "end": 567
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 554,
                    "end": 567
                  }
                ],
                "start": 540,
                "end": 568
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
                        "start": 572,
                        "end": 573
                      },
                      "typeArguments": null,
                      "start": 572,
                      "end": 573
                    },
                    "start": 570,
                    "end": 573
                  },
                  "start": 569,
                  "end": 573
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 578,
                        "end": 579
                      },
                      "typeArguments": null,
                      "start": 578,
                      "end": 579
                    },
                    "start": 576,
                    "end": 579
                  },
                  "start": 575,
                  "end": 579
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 582,
                  "end": 588
                },
                "start": 580,
                "end": 588
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
                      "start": 598,
                      "end": 602
                    },
                    "start": 591,
                    "end": 603
                  }
                ],
                "start": 589,
                "end": 605
              },
              "expression": false,
              "start": 540,
              "end": 605
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 537,
            "end": 605
          }
        ],
        "start": 531,
        "end": 607
      },
      "abstract": false,
      "declare": false,
      "start": 523,
      "end": 607
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
        "start": 615,
        "end": 616
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
              "start": 617,
              "end": 618
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 627,
                "end": 628
              },
              "typeArguments": null,
              "start": 627,
              "end": 628
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 617,
            "end": 628
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 631
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Two",
                "optional": false,
                "typeAnnotation": null,
                "start": 640,
                "end": 643
              },
              "typeArguments": null,
              "start": 640,
              "end": 643
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 630,
            "end": 643
          }
        ],
        "start": 616,
        "end": 644
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 651,
              "end": 654
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
                        "start": 658,
                        "end": 659
                      },
                      "typeArguments": null,
                      "start": 658,
                      "end": 659
                    },
                    "start": 656,
                    "end": 659
                  },
                  "start": 655,
                  "end": 659
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 664,
                        "end": 665
                      },
                      "typeArguments": null,
                      "start": 664,
                      "end": 665
                    },
                    "start": 662,
                    "end": 665
                  },
                  "start": 661,
                  "end": 665
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 668,
                  "end": 674
                },
                "start": 666,
                "end": 674
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
                      "start": 684,
                      "end": 688
                    },
                    "start": 677,
                    "end": 689
                  }
                ],
                "start": 675,
                "end": 691
              },
              "expression": false,
              "start": 654,
              "end": 691
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 651,
            "end": 691
          }
        ],
        "start": 645,
        "end": 693
      },
      "abstract": false,
      "declare": false,
      "start": 609,
      "end": 693
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
        "start": 701,
        "end": 702
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
              "start": 703,
              "end": 704
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 713,
                "end": 714
              },
              "typeArguments": null,
              "start": 713,
              "end": 714
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 703,
            "end": 714
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 716,
              "end": 717
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Three",
                "optional": false,
                "typeAnnotation": null,
                "start": 726,
                "end": 731
              },
              "typeArguments": null,
              "start": 726,
              "end": 731
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 716,
            "end": 731
          }
        ],
        "start": 702,
        "end": 732
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 739,
              "end": 742
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
                        "start": 746,
                        "end": 747
                      },
                      "typeArguments": null,
                      "start": 746,
                      "end": 747
                    },
                    "start": 744,
                    "end": 747
                  },
                  "start": 743,
                  "end": 747
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 752,
                        "end": 753
                      },
                      "typeArguments": null,
                      "start": 752,
                      "end": 753
                    },
                    "start": 750,
                    "end": 753
                  },
                  "start": 749,
                  "end": 753
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 756,
                  "end": 762
                },
                "start": 754,
                "end": 762
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
                      "start": 772,
                      "end": 776
                    },
                    "start": 765,
                    "end": 777
                  }
                ],
                "start": 763,
                "end": 779
              },
              "expression": false,
              "start": 742,
              "end": 779
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 739,
            "end": 779
          }
        ],
        "start": 733,
        "end": 781
      },
      "abstract": false,
      "declare": false,
      "start": 695,
      "end": 781
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 789,
        "end": 790
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
              "start": 791,
              "end": 792
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 801,
                "end": 802
              },
              "typeArguments": null,
              "start": 801,
              "end": 802
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 791,
            "end": 802
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 804,
              "end": 805
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Four",
                "optional": false,
                "typeAnnotation": null,
                "start": 814,
                "end": 818
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 819,
                    "end": 825
                  }
                ],
                "start": 818,
                "end": 826
              },
              "start": 814,
              "end": 826
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 804,
            "end": 826
          }
        ],
        "start": 790,
        "end": 827
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 834,
              "end": 837
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
                        "start": 841,
                        "end": 842
                      },
                      "typeArguments": null,
                      "start": 841,
                      "end": 842
                    },
                    "start": 839,
                    "end": 842
                  },
                  "start": 838,
                  "end": 842
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 847,
                        "end": 848
                      },
                      "typeArguments": null,
                      "start": 847,
                      "end": 848
                    },
                    "start": 845,
                    "end": 848
                  },
                  "start": 844,
                  "end": 848
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 851,
                  "end": 857
                },
                "start": 849,
                "end": 857
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
                      "start": 867,
                      "end": 871
                    },
                    "start": 860,
                    "end": 872
                  }
                ],
                "start": 858,
                "end": 874
              },
              "expression": false,
              "start": 837,
              "end": 874
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 834,
            "end": 874
          }
        ],
        "start": 828,
        "end": 876
      },
      "abstract": false,
      "declare": false,
      "start": 783,
      "end": 876
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 888,
        "end": 889
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
              "start": 890,
              "end": 891
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 900,
                "end": 901
              },
              "typeArguments": null,
              "start": 900,
              "end": 901
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 890,
            "end": 901
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 903,
              "end": 904
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Five",
                "optional": false,
                "typeAnnotation": null,
                "start": 913,
                "end": 917
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 918,
                    "end": 924
                  }
                ],
                "start": 917,
                "end": 925
              },
              "start": 913,
              "end": 925
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 903,
            "end": 925
          }
        ],
        "start": 889,
        "end": 926
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 933,
              "end": 936
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 946,
                      "end": 947
                    },
                    "typeArguments": null,
                    "start": 946,
                    "end": 947
                  },
                  "start": 944,
                  "end": 947
                },
                "start": 943,
                "end": 947
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 950,
                "end": 956
              },
              "start": 948,
              "end": 956
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 933,
            "end": 957
          }
        ],
        "start": 927,
        "end": 959
      },
      "declare": false,
      "start": 878,
      "end": 959
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
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
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 980,
              "end": 983
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 984,
                    "end": 985
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 994,
                      "end": 995
                    },
                    "typeArguments": null,
                    "start": 994,
                    "end": 995
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 984,
                  "end": 995
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 997,
                    "end": 998
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Six",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1007,
                      "end": 1010
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1011,
                          "end": 1017
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 1019,
                          "end": 1025
                        }
                      ],
                      "start": 1010,
                      "end": 1026
                    },
                    "start": 1007,
                    "end": 1026
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 997,
                  "end": 1026
                }
              ],
              "start": 983,
              "end": 1027
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
                      "start": 1031,
                      "end": 1032
                    },
                    "typeArguments": null,
                    "start": 1031,
                    "end": 1032
                  },
                  "start": 1029,
                  "end": 1032
                },
                "start": 1028,
                "end": 1032
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1037,
                      "end": 1038
                    },
                    "typeArguments": null,
                    "start": 1037,
                    "end": 1038
                  },
                  "start": 1035,
                  "end": 1038
                },
                "start": 1034,
                "end": 1038
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1041,
                "end": 1047
              },
              "start": 1039,
              "end": 1047
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 980,
            "end": 1048
          }
        ],
        "start": 974,
        "end": 1050
      },
      "declare": false,
      "start": 961,
      "end": 1050
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1061,
                      "end": 1064
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 1065,
                            "end": 1066
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1075,
                              "end": 1076
                            },
                            "typeArguments": null,
                            "start": 1075,
                            "end": 1076
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1065,
                          "end": 1076
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1078,
                            "end": 1079
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "One",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1088,
                              "end": 1091
                            },
                            "typeArguments": null,
                            "start": 1088,
                            "end": 1091
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1078,
                          "end": 1091
                        }
                      ],
                      "start": 1064,
                      "end": 1092
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
                              "start": 1096,
                              "end": 1097
                            },
                            "typeArguments": null,
                            "start": 1096,
                            "end": 1097
                          },
                          "start": 1094,
                          "end": 1097
                        },
                        "start": 1093,
                        "end": 1097
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1102,
                              "end": 1103
                            },
                            "typeArguments": null,
                            "start": 1102,
                            "end": 1103
                          },
                          "start": 1100,
                          "end": 1103
                        },
                        "start": 1099,
                        "end": 1103
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1106,
                        "end": 1112
                      },
                      "start": 1104,
                      "end": 1112
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1061,
                    "end": 1112
                  }
                ],
                "start": 1059,
                "end": 1114
              },
              "start": 1057,
              "end": 1114
            },
            "start": 1056,
            "end": 1114
          },
          "init": null,
          "definite": false,
          "start": 1056,
          "end": 1114
        }
      ],
      "declare": false,
      "start": 1052,
      "end": 1114
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1119,
            "end": 1120
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1125,
                  "end": 1128
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1129,
                          "end": 1130
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1139,
                            "end": 1140
                          },
                          "typeArguments": null,
                          "start": 1139,
                          "end": 1140
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1129,
                        "end": 1140
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1142,
                          "end": 1143
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Two",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1152,
                            "end": 1155
                          },
                          "typeArguments": null,
                          "start": 1152,
                          "end": 1155
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1142,
                        "end": 1155
                      }
                    ],
                    "start": 1128,
                    "end": 1156
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
                            "start": 1160,
                            "end": 1161
                          },
                          "typeArguments": null,
                          "start": 1160,
                          "end": 1161
                        },
                        "start": 1158,
                        "end": 1161
                      },
                      "start": 1157,
                      "end": 1161
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
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1166,
                            "end": 1167
                          },
                          "typeArguments": null,
                          "start": 1166,
                          "end": 1167
                        },
                        "start": 1164,
                        "end": 1167
                      },
                      "start": 1163,
                      "end": 1167
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 1178,
                          "end": 1180
                        },
                        "start": 1171,
                        "end": 1181
                      }
                    ],
                    "start": 1169,
                    "end": 1183
                  },
                  "expression": false,
                  "start": 1128,
                  "end": 1183
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1125,
                "end": 1183
              }
            ],
            "start": 1123,
            "end": 1185
          },
          "definite": false,
          "start": 1119,
          "end": 1185
        }
      ],
      "declare": false,
      "start": 1115,
      "end": 1186
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1197,
        "end": 1201
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1205,
                "end": 1206
              },
              "typeArguments": null,
              "start": 1205,
              "end": 1206
            },
            "start": 1203,
            "end": 1206
          },
          "start": 1202,
          "end": 1206
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1188,
      "end": 1208
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1218,
        "end": 1222
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1226,
                "end": 1227
              },
              "typeArguments": null,
              "start": 1226,
              "end": 1227
            },
            "start": 1224,
            "end": 1227
          },
          "start": 1223,
          "end": 1227
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1209,
      "end": 1229
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1248,
        "end": 1252
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1256,
              "end": 1259
            },
            "start": 1254,
            "end": 1259
          },
          "start": 1253,
          "end": 1259
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1261,
        "end": 1264
      },
      "expression": false,
      "start": 1239,
      "end": 1264
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1275,
        "end": 1280
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1284,
                "end": 1285
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1286,
                      "end": 1289
                    },
                    "typeArguments": null,
                    "start": 1286,
                    "end": 1289
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1291,
                      "end": 1294
                    },
                    "typeArguments": null,
                    "start": 1291,
                    "end": 1294
                  }
                ],
                "start": 1285,
                "end": 1295
              },
              "start": 1284,
              "end": 1295
            },
            "start": 1282,
            "end": 1295
          },
          "start": 1281,
          "end": 1295
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1266,
      "end": 1297
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1307,
        "end": 1312
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1316,
                "end": 1317
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1318,
                      "end": 1321
                    },
                    "typeArguments": null,
                    "start": 1318,
                    "end": 1321
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1323,
                      "end": 1326
                    },
                    "typeArguments": null,
                    "start": 1323,
                    "end": 1326
                  }
                ],
                "start": 1317,
                "end": 1327
              },
              "start": 1316,
              "end": 1327
            },
            "start": 1314,
            "end": 1327
          },
          "start": 1313,
          "end": 1327
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1298,
      "end": 1329
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1348,
        "end": 1353
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1357,
              "end": 1360
            },
            "start": 1355,
            "end": 1360
          },
          "start": 1354,
          "end": 1360
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1362,
        "end": 1365
      },
      "expression": false,
      "start": 1339,
      "end": 1365
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1376,
        "end": 1381
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1385,
                "end": 1386
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1387,
                      "end": 1392
                    },
                    "typeArguments": null,
                    "start": 1387,
                    "end": 1392
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1394,
                      "end": 1399
                    },
                    "typeArguments": null,
                    "start": 1394,
                    "end": 1399
                  }
                ],
                "start": 1386,
                "end": 1400
              },
              "start": 1385,
              "end": 1400
            },
            "start": 1383,
            "end": 1400
          },
          "start": 1382,
          "end": 1400
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1367,
      "end": 1402
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1412,
        "end": 1417
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1421,
                "end": 1422
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1423,
                      "end": 1428
                    },
                    "typeArguments": null,
                    "start": 1423,
                    "end": 1428
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1430,
                      "end": 1435
                    },
                    "typeArguments": null,
                    "start": 1430,
                    "end": 1435
                  }
                ],
                "start": 1422,
                "end": 1436
              },
              "start": 1421,
              "end": 1436
            },
            "start": 1419,
            "end": 1436
          },
          "start": 1418,
          "end": 1436
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1403,
      "end": 1438
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1457,
        "end": 1462
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1466,
              "end": 1469
            },
            "start": 1464,
            "end": 1469
          },
          "start": 1463,
          "end": 1469
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1471,
        "end": 1474
      },
      "expression": false,
      "start": 1448,
      "end": 1474
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1485,
        "end": 1489
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1493,
                "end": 1494
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1495,
                      "end": 1499
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1500,
                          "end": 1506
                        }
                      ],
                      "start": 1499,
                      "end": 1507
                    },
                    "start": 1495,
                    "end": 1507
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1509,
                      "end": 1513
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1514,
                          "end": 1520
                        }
                      ],
                      "start": 1513,
                      "end": 1521
                    },
                    "start": 1509,
                    "end": 1521
                  }
                ],
                "start": 1494,
                "end": 1522
              },
              "start": 1493,
              "end": 1522
            },
            "start": 1491,
            "end": 1522
          },
          "start": 1490,
          "end": 1522
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1476,
      "end": 1524
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1534,
        "end": 1538
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1542,
                "end": 1543
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1544,
                      "end": 1548
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1549,
                          "end": 1555
                        }
                      ],
                      "start": 1548,
                      "end": 1556
                    },
                    "start": 1544,
                    "end": 1556
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1558,
                      "end": 1562
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1563,
                          "end": 1569
                        }
                      ],
                      "start": 1562,
                      "end": 1570
                    },
                    "start": 1558,
                    "end": 1570
                  }
                ],
                "start": 1543,
                "end": 1571
              },
              "start": 1542,
              "end": 1571
            },
            "start": 1540,
            "end": 1571
          },
          "start": 1539,
          "end": 1571
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1525,
      "end": 1573
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1592,
        "end": 1596
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1600,
              "end": 1603
            },
            "start": 1598,
            "end": 1603
          },
          "start": 1597,
          "end": 1603
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1605,
        "end": 1608
      },
      "expression": false,
      "start": 1583,
      "end": 1608
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1619,
        "end": 1623
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1634,
                "end": 1635
              },
              "typeArguments": null,
              "start": 1627,
              "end": 1635
            },
            "start": 1625,
            "end": 1635
          },
          "start": 1624,
          "end": 1635
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1610,
      "end": 1637
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1647,
        "end": 1651
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1662,
                "end": 1663
              },
              "typeArguments": null,
              "start": 1655,
              "end": 1663
            },
            "start": 1653,
            "end": 1663
          },
          "start": 1652,
          "end": 1663
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1638,
      "end": 1665
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1684,
        "end": 1688
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1692,
              "end": 1695
            },
            "start": 1690,
            "end": 1695
          },
          "start": 1689,
          "end": 1695
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1697,
        "end": 1700
      },
      "expression": false,
      "start": 1675,
      "end": 1700
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1711,
        "end": 1715
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1726,
                "end": 1727
              },
              "typeArguments": null,
              "start": 1719,
              "end": 1727
            },
            "start": 1717,
            "end": 1727
          },
          "start": 1716,
          "end": 1727
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1702,
      "end": 1729
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1739,
        "end": 1743
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1754,
                "end": 1755
              },
              "typeArguments": null,
              "start": 1747,
              "end": 1755
            },
            "start": 1745,
            "end": 1755
          },
          "start": 1744,
          "end": 1755
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1730,
      "end": 1757
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1776,
        "end": 1780
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1784,
              "end": 1787
            },
            "start": 1782,
            "end": 1787
          },
          "start": 1781,
          "end": 1787
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1789,
        "end": 1792
      },
      "expression": false,
      "start": 1767,
      "end": 1792
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1803,
        "end": 1807
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1811,
                "end": 1812
              },
              "typeArguments": null,
              "start": 1811,
              "end": 1812
            },
            "start": 1809,
            "end": 1812
          },
          "start": 1808,
          "end": 1812
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1794,
      "end": 1814
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1824,
        "end": 1828
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1832,
                "end": 1833
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1834,
                      "end": 1837
                    },
                    "typeArguments": null,
                    "start": 1834,
                    "end": 1837
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1839,
                      "end": 1842
                    },
                    "typeArguments": null,
                    "start": 1839,
                    "end": 1842
                  }
                ],
                "start": 1833,
                "end": 1843
              },
              "start": 1832,
              "end": 1843
            },
            "start": 1830,
            "end": 1843
          },
          "start": 1829,
          "end": 1843
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1815,
      "end": 1845
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1861,
        "end": 1865
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1869,
              "end": 1872
            },
            "start": 1867,
            "end": 1872
          },
          "start": 1866,
          "end": 1872
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1874,
        "end": 1877
      },
      "expression": false,
      "start": 1852,
      "end": 1877
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1888,
        "end": 1893
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1897,
                "end": 1898
              },
              "typeArguments": null,
              "start": 1897,
              "end": 1898
            },
            "start": 1895,
            "end": 1898
          },
          "start": 1894,
          "end": 1898
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1879,
      "end": 1900
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1910,
        "end": 1915
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1919,
                "end": 1920
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1921,
                      "end": 1926
                    },
                    "typeArguments": null,
                    "start": 1921,
                    "end": 1926
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1928,
                      "end": 1933
                    },
                    "typeArguments": null,
                    "start": 1928,
                    "end": 1933
                  }
                ],
                "start": 1920,
                "end": 1934
              },
              "start": 1919,
              "end": 1934
            },
            "start": 1917,
            "end": 1934
          },
          "start": 1916,
          "end": 1934
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1901,
      "end": 1936
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1952,
        "end": 1957
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1961,
              "end": 1964
            },
            "start": 1959,
            "end": 1964
          },
          "start": 1958,
          "end": 1964
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1966,
        "end": 1969
      },
      "expression": false,
      "start": 1943,
      "end": 1969
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1980,
        "end": 1985
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1989,
                "end": 1990
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1991,
                      "end": 1996
                    },
                    "typeArguments": null,
                    "start": 1991,
                    "end": 1996
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1998,
                      "end": 2003
                    },
                    "typeArguments": null,
                    "start": 1998,
                    "end": 2003
                  }
                ],
                "start": 1990,
                "end": 2004
              },
              "start": 1989,
              "end": 2004
            },
            "start": 1987,
            "end": 2004
          },
          "start": 1986,
          "end": 2004
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1971,
      "end": 2006
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2016,
        "end": 2021
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 2025,
                "end": 2026
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Four",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2027,
                      "end": 2031
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2032,
                          "end": 2038
                        }
                      ],
                      "start": 2031,
                      "end": 2039
                    },
                    "start": 2027,
                    "end": 2039
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Four",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2041,
                      "end": 2045
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2046,
                          "end": 2052
                        }
                      ],
                      "start": 2045,
                      "end": 2053
                    },
                    "start": 2041,
                    "end": 2053
                  }
                ],
                "start": 2026,
                "end": 2054
              },
              "start": 2025,
              "end": 2054
            },
            "start": 2023,
            "end": 2054
          },
          "start": 2022,
          "end": 2054
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2007,
      "end": 2056
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2075,
        "end": 2080
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2084,
              "end": 2087
            },
            "start": 2082,
            "end": 2087
          },
          "start": 2081,
          "end": 2087
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2089,
        "end": 2092
      },
      "expression": false,
      "start": 2066,
      "end": 2092
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2103,
        "end": 2108
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 2112,
                "end": 2113
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2114,
                      "end": 2119
                    },
                    "typeArguments": null,
                    "start": 2114,
                    "end": 2119
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2121,
                      "end": 2126
                    },
                    "typeArguments": null,
                    "start": 2121,
                    "end": 2126
                  }
                ],
                "start": 2113,
                "end": 2127
              },
              "start": 2112,
              "end": 2127
            },
            "start": 2110,
            "end": 2127
          },
          "start": 2109,
          "end": 2127
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2094,
      "end": 2129
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2139,
        "end": 2144
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 2148,
                "end": 2149
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Four",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2150,
                      "end": 2154
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2155,
                          "end": 2161
                        }
                      ],
                      "start": 2154,
                      "end": 2162
                    },
                    "start": 2150,
                    "end": 2162
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Four",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2164,
                      "end": 2168
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2169,
                          "end": 2175
                        }
                      ],
                      "start": 2168,
                      "end": 2176
                    },
                    "start": 2164,
                    "end": 2176
                  }
                ],
                "start": 2149,
                "end": 2177
              },
              "start": 2148,
              "end": 2177
            },
            "start": 2146,
            "end": 2177
          },
          "start": 2145,
          "end": 2177
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2130,
      "end": 2179
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2198,
        "end": 2203
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2207,
              "end": 2210
            },
            "start": 2205,
            "end": 2210
          },
          "start": 2204,
          "end": 2210
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2212,
        "end": 2215
      },
      "expression": false,
      "start": 2189,
      "end": 2215
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2226,
        "end": 2230
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 2234,
                "end": 2235
              },
              "typeArguments": null,
              "start": 2234,
              "end": 2235
            },
            "start": 2232,
            "end": 2235
          },
          "start": 2231,
          "end": 2235
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2217,
      "end": 2237
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2247,
        "end": 2251
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 2255,
                "end": 2256
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2257,
                      "end": 2261
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2262,
                          "end": 2268
                        }
                      ],
                      "start": 2261,
                      "end": 2269
                    },
                    "start": 2257,
                    "end": 2269
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2271,
                      "end": 2275
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2276,
                          "end": 2282
                        }
                      ],
                      "start": 2275,
                      "end": 2283
                    },
                    "start": 2271,
                    "end": 2283
                  }
                ],
                "start": 2256,
                "end": 2284
              },
              "start": 2255,
              "end": 2284
            },
            "start": 2253,
            "end": 2284
          },
          "start": 2252,
          "end": 2284
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2238,
      "end": 2286
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2302,
        "end": 2306
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2310,
              "end": 2313
            },
            "start": 2308,
            "end": 2313
          },
          "start": 2307,
          "end": 2313
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2315,
        "end": 2318
      },
      "expression": false,
      "start": 2293,
      "end": 2318
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2329,
        "end": 2333
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 2337,
                "end": 2338
              },
              "typeArguments": null,
              "start": 2337,
              "end": 2338
            },
            "start": 2335,
            "end": 2338
          },
          "start": 2334,
          "end": 2338
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2320,
      "end": 2340
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2350,
        "end": 2354
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2365,
                "end": 2366
              },
              "typeArguments": null,
              "start": 2358,
              "end": 2366
            },
            "start": 2356,
            "end": 2366
          },
          "start": 2355,
          "end": 2366
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2341,
      "end": 2368
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2387,
        "end": 2391
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2395,
              "end": 2398
            },
            "start": 2393,
            "end": 2398
          },
          "start": 2392,
          "end": 2398
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2400,
        "end": 2403
      },
      "expression": false,
      "start": 2378,
      "end": 2403
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2414,
        "end": 2418
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 2422,
                "end": 2423
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2424,
                      "end": 2427
                    },
                    "typeArguments": null,
                    "start": 2424,
                    "end": 2427
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2429,
                      "end": 2432
                    },
                    "typeArguments": null,
                    "start": 2429,
                    "end": 2432
                  }
                ],
                "start": 2423,
                "end": 2433
              },
              "start": 2422,
              "end": 2433
            },
            "start": 2420,
            "end": 2433
          },
          "start": 2419,
          "end": 2433
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2405,
      "end": 2435
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2445,
        "end": 2449
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 2453,
                "end": 2454
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2455,
                      "end": 2459
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2460,
                          "end": 2466
                        }
                      ],
                      "start": 2459,
                      "end": 2467
                    },
                    "start": 2455,
                    "end": 2467
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2469,
                      "end": 2473
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2474,
                          "end": 2480
                        }
                      ],
                      "start": 2473,
                      "end": 2481
                    },
                    "start": 2469,
                    "end": 2481
                  }
                ],
                "start": 2454,
                "end": 2482
              },
              "start": 2453,
              "end": 2482
            },
            "start": 2451,
            "end": 2482
          },
          "start": 2450,
          "end": 2482
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2436,
      "end": 2484
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2503,
        "end": 2507
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2511,
              "end": 2514
            },
            "start": 2509,
            "end": 2514
          },
          "start": 2508,
          "end": 2514
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2516,
        "end": 2519
      },
      "expression": false,
      "start": 2494,
      "end": 2519
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2530,
        "end": 2534
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 2538,
                "end": 2539
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2540,
                      "end": 2543
                    },
                    "typeArguments": null,
                    "start": 2540,
                    "end": 2543
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2545,
                      "end": 2548
                    },
                    "typeArguments": null,
                    "start": 2545,
                    "end": 2548
                  }
                ],
                "start": 2539,
                "end": 2549
              },
              "start": 2538,
              "end": 2549
            },
            "start": 2536,
            "end": 2549
          },
          "start": 2535,
          "end": 2549
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2521,
      "end": 2551
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2561,
        "end": 2565
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 2569,
                "end": 2570
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2571,
                      "end": 2576
                    },
                    "typeArguments": null,
                    "start": 2571,
                    "end": 2576
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2578,
                      "end": 2583
                    },
                    "typeArguments": null,
                    "start": 2578,
                    "end": 2583
                  }
                ],
                "start": 2570,
                "end": 2584
              },
              "start": 2569,
              "end": 2584
            },
            "start": 2567,
            "end": 2584
          },
          "start": 2566,
          "end": 2584
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2552,
      "end": 2586
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2605,
        "end": 2609
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2613,
              "end": 2616
            },
            "start": 2611,
            "end": 2616
          },
          "start": 2610,
          "end": 2616
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2618,
        "end": 2621
      },
      "expression": false,
      "start": 2596,
      "end": 2621
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2632,
        "end": 2637
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 2641,
                "end": 2642
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2643,
                      "end": 2646
                    },
                    "typeArguments": null,
                    "start": 2643,
                    "end": 2646
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2648,
                      "end": 2651
                    },
                    "typeArguments": null,
                    "start": 2648,
                    "end": 2651
                  }
                ],
                "start": 2642,
                "end": 2652
              },
              "start": 2641,
              "end": 2652
            },
            "start": 2639,
            "end": 2652
          },
          "start": 2638,
          "end": 2652
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2623,
      "end": 2654
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2664,
        "end": 2669
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2680,
                "end": 2681
              },
              "typeArguments": null,
              "start": 2673,
              "end": 2681
            },
            "start": 2671,
            "end": 2681
          },
          "start": 2670,
          "end": 2681
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2655,
      "end": 2683
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2699,
        "end": 2704
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2708,
              "end": 2711
            },
            "start": 2706,
            "end": 2711
          },
          "start": 2705,
          "end": 2711
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2713,
        "end": 2716
      },
      "expression": false,
      "start": 2690,
      "end": 2716
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2727,
        "end": 2732
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 2736,
                "end": 2737
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2738,
                      "end": 2741
                    },
                    "typeArguments": null,
                    "start": 2738,
                    "end": 2741
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2743,
                      "end": 2746
                    },
                    "typeArguments": null,
                    "start": 2743,
                    "end": 2746
                  }
                ],
                "start": 2737,
                "end": 2747
              },
              "start": 2736,
              "end": 2747
            },
            "start": 2734,
            "end": 2747
          },
          "start": 2733,
          "end": 2747
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2718,
      "end": 2749
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2759,
        "end": 2764
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2775,
                "end": 2776
              },
              "typeArguments": null,
              "start": 2768,
              "end": 2776
            },
            "start": 2766,
            "end": 2776
          },
          "start": 2765,
          "end": 2776
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2750,
      "end": 2778
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2794,
        "end": 2799
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2803,
              "end": 2806
            },
            "start": 2801,
            "end": 2806
          },
          "start": 2800,
          "end": 2806
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2808,
        "end": 2811
      },
      "expression": false,
      "start": 2785,
      "end": 2811
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2822,
        "end": 2827
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 2831,
                "end": 2832
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2833,
                      "end": 2837
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2838,
                          "end": 2844
                        }
                      ],
                      "start": 2837,
                      "end": 2845
                    },
                    "start": 2833,
                    "end": 2845
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2847,
                      "end": 2851
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2852,
                          "end": 2858
                        }
                      ],
                      "start": 2851,
                      "end": 2859
                    },
                    "start": 2847,
                    "end": 2859
                  }
                ],
                "start": 2832,
                "end": 2860
              },
              "start": 2831,
              "end": 2860
            },
            "start": 2829,
            "end": 2860
          },
          "start": 2828,
          "end": 2860
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2813,
      "end": 2862
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2872,
        "end": 2877
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 2881,
                "end": 2882
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2883,
                      "end": 2888
                    },
                    "typeArguments": null,
                    "start": 2883,
                    "end": 2888
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2890,
                      "end": 2895
                    },
                    "typeArguments": null,
                    "start": 2890,
                    "end": 2895
                  }
                ],
                "start": 2882,
                "end": 2896
              },
              "start": 2881,
              "end": 2896
            },
            "start": 2879,
            "end": 2896
          },
          "start": 2878,
          "end": 2896
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2863,
      "end": 2898
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2917,
        "end": 2922
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2926,
              "end": 2929
            },
            "start": 2924,
            "end": 2929
          },
          "start": 2923,
          "end": 2929
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2931,
        "end": 2934
      },
      "expression": false,
      "start": 2908,
      "end": 2934
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2945,
        "end": 2951
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2955,
                "end": 2957
              },
              "typeArguments": null,
              "start": 2955,
              "end": 2957
            },
            "start": 2953,
            "end": 2957
          },
          "start": 2952,
          "end": 2957
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2936,
      "end": 2959
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2969,
        "end": 2975
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 2979,
                "end": 2980
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2981,
                      "end": 2986
                    },
                    "typeArguments": null,
                    "start": 2981,
                    "end": 2986
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2988,
                      "end": 2993
                    },
                    "typeArguments": null,
                    "start": 2988,
                    "end": 2993
                  }
                ],
                "start": 2980,
                "end": 2994
              },
              "start": 2979,
              "end": 2994
            },
            "start": 2977,
            "end": 2994
          },
          "start": 2976,
          "end": 2994
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2960,
      "end": 2996
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 3012,
        "end": 3018
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3022,
              "end": 3025
            },
            "start": 3020,
            "end": 3025
          },
          "start": 3019,
          "end": 3025
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3027,
        "end": 3030
      },
      "expression": false,
      "start": 3003,
      "end": 3030
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 3041,
        "end": 3046
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 3050,
                "end": 3051
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3052,
                      "end": 3056
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 3057,
                          "end": 3063
                        }
                      ],
                      "start": 3056,
                      "end": 3064
                    },
                    "start": 3052,
                    "end": 3064
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3066,
                      "end": 3070
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 3071,
                          "end": 3077
                        }
                      ],
                      "start": 3070,
                      "end": 3078
                    },
                    "start": 3066,
                    "end": 3078
                  }
                ],
                "start": 3051,
                "end": 3079
              },
              "start": 3050,
              "end": 3079
            },
            "start": 3048,
            "end": 3079
          },
          "start": 3047,
          "end": 3079
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 3032,
      "end": 3081
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 3091,
        "end": 3096
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 3107,
                "end": 3108
              },
              "typeArguments": null,
              "start": 3100,
              "end": 3108
            },
            "start": 3098,
            "end": 3108
          },
          "start": 3097,
          "end": 3108
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 3082,
      "end": 3110
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 3126,
        "end": 3131
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3135,
              "end": 3138
            },
            "start": 3133,
            "end": 3138
          },
          "start": 3132,
          "end": 3138
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3140,
        "end": 3143
      },
      "expression": false,
      "start": 3117,
      "end": 3143
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 3154,
        "end": 3159
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 3163,
                "end": 3164
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3165,
                      "end": 3169
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 3170,
                          "end": 3176
                        }
                      ],
                      "start": 3169,
                      "end": 3177
                    },
                    "start": 3165,
                    "end": 3177
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3179,
                      "end": 3183
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 3184,
                          "end": 3190
                        }
                      ],
                      "start": 3183,
                      "end": 3191
                    },
                    "start": 3179,
                    "end": 3191
                  }
                ],
                "start": 3164,
                "end": 3192
              },
              "start": 3163,
              "end": 3192
            },
            "start": 3161,
            "end": 3192
          },
          "start": 3160,
          "end": 3192
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 3145,
      "end": 3194
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 3204,
        "end": 3209
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 3220,
                "end": 3221
              },
              "typeArguments": null,
              "start": 3213,
              "end": 3221
            },
            "start": 3211,
            "end": 3221
          },
          "start": 3210,
          "end": 3221
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 3195,
      "end": 3223
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 3239,
        "end": 3244
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3248,
              "end": 3251
            },
            "start": 3246,
            "end": 3251
          },
          "start": 3245,
          "end": 3251
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3253,
        "end": 3256
      },
      "expression": false,
      "start": 3230,
      "end": 3256
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 3267,
        "end": 3272
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3276,
                "end": 3278
              },
              "typeArguments": null,
              "start": 3276,
              "end": 3278
            },
            "start": 3274,
            "end": 3278
          },
          "start": 3273,
          "end": 3278
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 3258,
      "end": 3280
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 3290,
        "end": 3295
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 3299,
                "end": 3300
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3301,
                      "end": 3306
                    },
                    "typeArguments": null,
                    "start": 3301,
                    "end": 3306
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3308,
                      "end": 3313
                    },
                    "typeArguments": null,
                    "start": 3308,
                    "end": 3313
                  }
                ],
                "start": 3300,
                "end": 3314
              },
              "start": 3299,
              "end": 3314
            },
            "start": 3297,
            "end": 3314
          },
          "start": 3296,
          "end": 3314
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 3281,
      "end": 3316
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 3332,
        "end": 3337
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3341,
              "end": 3344
            },
            "start": 3339,
            "end": 3344
          },
          "start": 3338,
          "end": 3344
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3346,
        "end": 3349
      },
      "expression": false,
      "start": 3323,
      "end": 3349
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 335,
  "end": 3349
}
```
