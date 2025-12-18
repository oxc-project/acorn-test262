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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 335,
    "end": 340,
    "range": [
      335,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 341,
    "end": 344,
    "range": [
      341,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 347,
    "end": 350,
    "range": [
      347,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 352,
    "end": 358,
    "range": [
      352,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 361,
    "end": 366,
    "range": [
      361,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 367,
    "end": 370,
    "range": [
      367,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 373,
    "end": 376,
    "range": [
      373,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 378,
    "end": 384,
    "range": [
      378,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 387,
    "end": 396,
    "range": [
      387,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 397,
    "end": 402,
    "range": [
      397,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 405,
    "end": 408,
    "range": [
      405,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 410,
    "end": 416,
    "range": [
      410,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 419,
    "end": 428,
    "range": [
      419,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "Four",
    "start": 429,
    "end": 433,
    "range": [
      429,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 435,
    "end": 436,
    "range": [
      435,
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
    "type": "Identifier",
    "value": "foo",
    "start": 439,
    "end": 442,
    "range": [
      439,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 448,
    "end": 457,
    "range": [
      448,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 458,
    "end": 462,
    "range": [
      458,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 466,
    "end": 473,
    "range": [
      466,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "Four",
    "start": 474,
    "end": 478,
    "range": [
      474,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 486,
    "end": 495,
    "range": [
      486,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "Six",
    "start": 496,
    "end": 499,
    "range": [
      496,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 512,
    "end": 515,
    "range": [
      512,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 523,
    "end": 528,
    "range": [
      523,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 537,
    "end": 540,
    "range": [
      537,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 543,
    "end": 550,
    "range": [
      543,
      550
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 556,
    "end": 563,
    "range": [
      556,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 564,
    "end": 567,
    "range": [
      564,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 582,
    "end": 588,
    "range": [
      582,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 591,
    "end": 597,
    "range": [
      591,
      597
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 598,
    "end": 602,
    "range": [
      598,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
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
    "value": "class",
    "start": 609,
    "end": 614,
    "range": [
      609,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 619,
    "end": 626,
    "range": [
      619,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 632,
    "end": 639,
    "range": [
      632,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 640,
    "end": 643,
    "range": [
      640,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 651,
    "end": 654,
    "range": [
      651,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 668,
    "end": 674,
    "range": [
      668,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 677,
    "end": 683,
    "range": [
      677,
      683
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 684,
    "end": 688,
    "range": [
      684,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 695,
    "end": 700,
    "range": [
      695,
      700
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 705,
    "end": 712,
    "range": [
      705,
      712
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 718,
    "end": 725,
    "range": [
      718,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 726,
    "end": 731,
    "range": [
      726,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 739,
    "end": 742,
    "range": [
      739,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 756,
    "end": 762,
    "range": [
      756,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 765,
    "end": 771,
    "range": [
      765,
      771
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 772,
    "end": 776,
    "range": [
      772,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 783,
    "end": 788,
    "range": [
      783,
      788
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 793,
    "end": 800,
    "range": [
      793,
      800
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 806,
    "end": 813,
    "range": [
      806,
      813
    ]
  },
  {
    "type": "Identifier",
    "value": "Four",
    "start": 814,
    "end": 818,
    "range": [
      814,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
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
    "start": 819,
    "end": 825,
    "range": [
      819,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 834,
    "end": 837,
    "range": [
      834,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 848,
    "end": 849,
    "range": [
      848,
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
    "value": "string",
    "start": 851,
    "end": 857,
    "range": [
      851,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 860,
    "end": 866,
    "range": [
      860,
      866
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 867,
    "end": 871,
    "range": [
      867,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 878,
    "end": 887,
    "range": [
      878,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 892,
    "end": 899,
    "range": [
      892,
      899
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 905,
    "end": 912,
    "range": [
      905,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 913,
    "end": 917,
    "range": [
      913,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 918,
    "end": 924,
    "range": [
      918,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 933,
    "end": 936,
    "range": [
      933,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 950,
    "end": 956,
    "range": [
      950,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
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
    "value": "I2",
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
    "type": "Identifier",
    "value": "foo",
    "start": 980,
    "end": 983,
    "range": [
      980,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 986,
    "end": 993,
    "range": [
      986,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 999,
    "end": 1006,
    "range": [
      999,
      1006
    ]
  },
  {
    "type": "Identifier",
    "value": "Six",
    "start": 1007,
    "end": 1010,
    "range": [
      1007,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1011,
    "end": 1017,
    "range": [
      1011,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1019,
    "end": 1025,
    "range": [
      1019,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1037,
    "end": 1038,
    "range": [
      1037,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1039,
    "end": 1040,
    "range": [
      1039,
      1040
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1041,
    "end": 1047,
    "range": [
      1041,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1052,
    "end": 1055,
    "range": [
      1052,
      1055
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1061,
    "end": 1064,
    "range": [
      1061,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1067,
    "end": 1074,
    "range": [
      1067,
      1074
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1080,
    "end": 1087,
    "range": [
      1080,
      1087
    ]
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 1088,
    "end": 1091,
    "range": [
      1088,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1106,
    "end": 1112,
    "range": [
      1106,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1115,
    "end": 1118,
    "range": [
      1115,
      1118
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
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
    "type": "Punctuator",
    "value": "{",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1125,
    "end": 1128,
    "range": [
      1125,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1131,
    "end": 1138,
    "range": [
      1131,
      1138
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1144,
    "end": 1151,
    "range": [
      1144,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 1152,
    "end": 1155,
    "range": [
      1152,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1171,
    "end": 1177,
    "range": [
      1171,
      1177
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1178,
    "end": 1180,
    "range": [
      1178,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1188,
    "end": 1196,
    "range": [
      1188,
      1196
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1197,
    "end": 1201,
    "range": [
      1197,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1209,
    "end": 1217,
    "range": [
      1209,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1218,
    "end": 1222,
    "range": [
      1218,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1239,
    "end": 1247,
    "range": [
      1239,
      1247
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1248,
    "end": 1252,
    "range": [
      1248,
      1252
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1256,
    "end": 1259,
    "range": [
      1256,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1266,
    "end": 1274,
    "range": [
      1266,
      1274
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 1275,
    "end": 1280,
    "range": [
      1275,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1281,
    "end": 1282,
    "range": [
      1281,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 1286,
    "end": 1289,
    "range": [
      1286,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 1291,
    "end": 1294,
    "range": [
      1291,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1298,
    "end": 1306,
    "range": [
      1298,
      1306
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 1307,
    "end": 1312,
    "range": [
      1307,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 1318,
    "end": 1321,
    "range": [
      1318,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 1323,
    "end": 1326,
    "range": [
      1323,
      1326
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1327,
    "end": 1328,
    "range": [
      1327,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1339,
    "end": 1347,
    "range": [
      1339,
      1347
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 1348,
    "end": 1353,
    "range": [
      1348,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1357,
    "end": 1360,
    "range": [
      1357,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1367,
    "end": 1375,
    "range": [
      1367,
      1375
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 1376,
    "end": 1381,
    "range": [
      1376,
      1381
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1383,
    "end": 1384,
    "range": [
      1383,
      1384
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1385,
    "end": 1386,
    "range": [
      1385,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
      1387
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 1387,
    "end": 1392,
    "range": [
      1387,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 1394,
    "end": 1399,
    "range": [
      1394,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1403,
    "end": 1411,
    "range": [
      1403,
      1411
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 1412,
    "end": 1417,
    "range": [
      1412,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1418,
    "end": 1419,
    "range": [
      1418,
      1419
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 1423,
    "end": 1428,
    "range": [
      1423,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 1430,
    "end": 1435,
    "range": [
      1430,
      1435
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1448,
    "end": 1456,
    "range": [
      1448,
      1456
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 1457,
    "end": 1462,
    "range": [
      1457,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
      1465
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1466,
    "end": 1469,
    "range": [
      1466,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1476,
    "end": 1484,
    "range": [
      1476,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1485,
    "end": 1489,
    "range": [
      1485,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 1495,
    "end": 1499,
    "range": [
      1495,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1500,
    "end": 1506,
    "range": [
      1500,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 1509,
    "end": 1513,
    "range": [
      1509,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1514,
    "end": 1520,
    "range": [
      1514,
      1520
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1521,
    "end": 1522,
    "range": [
      1521,
      1522
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1523,
    "end": 1524,
    "range": [
      1523,
      1524
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1525,
    "end": 1533,
    "range": [
      1525,
      1533
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1534,
    "end": 1538,
    "range": [
      1534,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1539,
    "end": 1540,
    "range": [
      1539,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1542,
    "end": 1543,
    "range": [
      1542,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 1544,
    "end": 1548,
    "range": [
      1544,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1548,
    "end": 1549,
    "range": [
      1548,
      1549
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1549,
    "end": 1555,
    "range": [
      1549,
      1555
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1555,
    "end": 1556,
    "range": [
      1555,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 1558,
    "end": 1562,
    "range": [
      1558,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1563,
    "end": 1569,
    "range": [
      1563,
      1569
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1569,
    "end": 1570,
    "range": [
      1569,
      1570
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1570,
    "end": 1571,
    "range": [
      1570,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1583,
    "end": 1591,
    "range": [
      1583,
      1591
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1592,
    "end": 1596,
    "range": [
      1592,
      1596
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1600,
    "end": 1603,
    "range": [
      1600,
      1603
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1603,
    "end": 1604,
    "range": [
      1603,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1610,
    "end": 1618,
    "range": [
      1610,
      1618
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1619,
    "end": 1623,
    "range": [
      1619,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1627,
    "end": 1633,
    "range": [
      1627,
      1633
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1635,
    "end": 1636,
    "range": [
      1635,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1638,
    "end": 1646,
    "range": [
      1638,
      1646
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1647,
    "end": 1651,
    "range": [
      1647,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1653,
    "end": 1654,
    "range": [
      1653,
      1654
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1655,
    "end": 1661,
    "range": [
      1655,
      1661
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1664,
    "end": 1665,
    "range": [
      1664,
      1665
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1675,
    "end": 1683,
    "range": [
      1675,
      1683
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1684,
    "end": 1688,
    "range": [
      1684,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1689,
    "end": 1690,
    "range": [
      1689,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1692,
    "end": 1695,
    "range": [
      1692,
      1695
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1695,
    "end": 1696,
    "range": [
      1695,
      1696
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1697,
    "end": 1698,
    "range": [
      1697,
      1698
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1702,
    "end": 1710,
    "range": [
      1702,
      1710
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1711,
    "end": 1715,
    "range": [
      1711,
      1715
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1715,
    "end": 1716,
    "range": [
      1715,
      1716
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1717,
    "end": 1718,
    "range": [
      1717,
      1718
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1719,
    "end": 1725,
    "range": [
      1719,
      1725
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1726,
    "end": 1727,
    "range": [
      1726,
      1727
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1730,
    "end": 1738,
    "range": [
      1730,
      1738
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1739,
    "end": 1743,
    "range": [
      1739,
      1743
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1747,
    "end": 1753,
    "range": [
      1747,
      1753
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1767,
    "end": 1775,
    "range": [
      1767,
      1775
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1776,
    "end": 1780,
    "range": [
      1776,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1784,
    "end": 1787,
    "range": [
      1784,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1789,
    "end": 1790,
    "range": [
      1789,
      1790
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1794,
    "end": 1802,
    "range": [
      1794,
      1802
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1803,
    "end": 1807,
    "range": [
      1803,
      1807
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1815,
    "end": 1823,
    "range": [
      1815,
      1823
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1824,
    "end": 1828,
    "range": [
      1824,
      1828
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1828,
    "end": 1829,
    "range": [
      1828,
      1829
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1830,
    "end": 1831,
    "range": [
      1830,
      1831
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1832,
    "end": 1833,
    "range": [
      1832,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 1834,
    "end": 1837,
    "range": [
      1834,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 1839,
    "end": 1842,
    "range": [
      1839,
      1842
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1843,
    "end": 1844,
    "range": [
      1843,
      1844
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1852,
    "end": 1860,
    "range": [
      1852,
      1860
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1861,
    "end": 1865,
    "range": [
      1861,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1865,
    "end": 1866,
    "range": [
      1865,
      1866
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1866,
    "end": 1867,
    "range": [
      1866,
      1867
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1869,
    "end": 1872,
    "range": [
      1869,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1876,
    "end": 1877,
    "range": [
      1876,
      1877
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1879,
    "end": 1887,
    "range": [
      1879,
      1887
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1888,
    "end": 1893,
    "range": [
      1888,
      1893
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1893,
    "end": 1894,
    "range": [
      1893,
      1894
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1894,
    "end": 1895,
    "range": [
      1894,
      1895
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1895,
    "end": 1896,
    "range": [
      1895,
      1896
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1897,
    "end": 1898,
    "range": [
      1897,
      1898
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1898,
    "end": 1899,
    "range": [
      1898,
      1899
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1899,
    "end": 1900,
    "range": [
      1899,
      1900
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1901,
    "end": 1909,
    "range": [
      1901,
      1909
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1910,
    "end": 1915,
    "range": [
      1910,
      1915
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1915,
    "end": 1916,
    "range": [
      1915,
      1916
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1917,
    "end": 1918,
    "range": [
      1917,
      1918
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1919,
    "end": 1920,
    "range": [
      1919,
      1920
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1920,
    "end": 1921,
    "range": [
      1920,
      1921
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 1921,
    "end": 1926,
    "range": [
      1921,
      1926
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 1928,
    "end": 1933,
    "range": [
      1928,
      1933
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1933,
    "end": 1934,
    "range": [
      1933,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1934,
    "end": 1935,
    "range": [
      1934,
      1935
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1935,
    "end": 1936,
    "range": [
      1935,
      1936
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1943,
    "end": 1951,
    "range": [
      1943,
      1951
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1952,
    "end": 1957,
    "range": [
      1952,
      1957
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1958,
    "end": 1959,
    "range": [
      1958,
      1959
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1959,
    "end": 1960,
    "range": [
      1959,
      1960
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1961,
    "end": 1964,
    "range": [
      1961,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1966,
    "end": 1967,
    "range": [
      1966,
      1967
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1971,
    "end": 1979,
    "range": [
      1971,
      1979
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1980,
    "end": 1985,
    "range": [
      1980,
      1985
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1986,
    "end": 1987,
    "range": [
      1986,
      1987
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1987,
    "end": 1988,
    "range": [
      1987,
      1988
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1989,
    "end": 1990,
    "range": [
      1989,
      1990
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1990,
    "end": 1991,
    "range": [
      1990,
      1991
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 1991,
    "end": 1996,
    "range": [
      1991,
      1996
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1996,
    "end": 1997,
    "range": [
      1996,
      1997
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 1998,
    "end": 2003,
    "range": [
      1998,
      2003
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2003,
    "end": 2004,
    "range": [
      2003,
      2004
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2004,
    "end": 2005,
    "range": [
      2004,
      2005
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2007,
    "end": 2015,
    "range": [
      2007,
      2015
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 2016,
    "end": 2021,
    "range": [
      2016,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 2025,
    "end": 2026,
    "range": [
      2025,
      2026
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2026,
    "end": 2027,
    "range": [
      2026,
      2027
    ]
  },
  {
    "type": "Identifier",
    "value": "Four",
    "start": 2027,
    "end": 2031,
    "range": [
      2027,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2032,
    "end": 2038,
    "range": [
      2032,
      2038
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2039,
    "end": 2040,
    "range": [
      2039,
      2040
    ]
  },
  {
    "type": "Identifier",
    "value": "Four",
    "start": 2041,
    "end": 2045,
    "range": [
      2041,
      2045
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2045,
    "end": 2046,
    "range": [
      2045,
      2046
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2046,
    "end": 2052,
    "range": [
      2046,
      2052
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2052,
    "end": 2053,
    "range": [
      2052,
      2053
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2053,
    "end": 2054,
    "range": [
      2053,
      2054
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2054,
    "end": 2055,
    "range": [
      2054,
      2055
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2055,
    "end": 2056,
    "range": [
      2055,
      2056
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2066,
    "end": 2074,
    "range": [
      2066,
      2074
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 2075,
    "end": 2080,
    "range": [
      2075,
      2080
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2080,
    "end": 2081,
    "range": [
      2080,
      2081
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2081,
    "end": 2082,
    "range": [
      2081,
      2082
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2084,
    "end": 2087,
    "range": [
      2084,
      2087
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2087,
    "end": 2088,
    "range": [
      2087,
      2088
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2089,
    "end": 2090,
    "range": [
      2089,
      2090
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2091,
    "end": 2092,
    "range": [
      2091,
      2092
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2094,
    "end": 2102,
    "range": [
      2094,
      2102
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6c",
    "start": 2103,
    "end": 2108,
    "range": [
      2103,
      2108
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2108,
    "end": 2109,
    "range": [
      2108,
      2109
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2109,
    "end": 2110,
    "range": [
      2109,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 2114,
    "end": 2119,
    "range": [
      2114,
      2119
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2119,
    "end": 2120,
    "range": [
      2119,
      2120
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 2121,
    "end": 2126,
    "range": [
      2121,
      2126
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2126,
    "end": 2127,
    "range": [
      2126,
      2127
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2127,
    "end": 2128,
    "range": [
      2127,
      2128
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2130,
    "end": 2138,
    "range": [
      2130,
      2138
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6c",
    "start": 2139,
    "end": 2144,
    "range": [
      2139,
      2144
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2144,
    "end": 2145,
    "range": [
      2144,
      2145
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 2148,
    "end": 2149,
    "range": [
      2148,
      2149
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2149,
    "end": 2150,
    "range": [
      2149,
      2150
    ]
  },
  {
    "type": "Identifier",
    "value": "Four",
    "start": 2150,
    "end": 2154,
    "range": [
      2150,
      2154
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2154,
    "end": 2155,
    "range": [
      2154,
      2155
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2155,
    "end": 2161,
    "range": [
      2155,
      2161
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2161,
    "end": 2162,
    "range": [
      2161,
      2162
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2162,
    "end": 2163,
    "range": [
      2162,
      2163
    ]
  },
  {
    "type": "Identifier",
    "value": "Four",
    "start": 2164,
    "end": 2168,
    "range": [
      2164,
      2168
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2168,
    "end": 2169,
    "range": [
      2168,
      2169
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2169,
    "end": 2175,
    "range": [
      2169,
      2175
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2175,
    "end": 2176,
    "range": [
      2175,
      2176
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2177,
    "end": 2178,
    "range": [
      2177,
      2178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2178,
    "end": 2179,
    "range": [
      2178,
      2179
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2189,
    "end": 2197,
    "range": [
      2189,
      2197
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6c",
    "start": 2198,
    "end": 2203,
    "range": [
      2198,
      2203
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2203,
    "end": 2204,
    "range": [
      2203,
      2204
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2204,
    "end": 2205,
    "range": [
      2204,
      2205
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2205,
    "end": 2206,
    "range": [
      2205,
      2206
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2207,
    "end": 2210,
    "range": [
      2207,
      2210
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2212,
    "end": 2213,
    "range": [
      2212,
      2213
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2214,
    "end": 2215,
    "range": [
      2214,
      2215
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2217,
    "end": 2225,
    "range": [
      2217,
      2225
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 2226,
    "end": 2230,
    "range": [
      2226,
      2230
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2230,
    "end": 2231,
    "range": [
      2230,
      2231
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2231,
    "end": 2232,
    "range": [
      2231,
      2232
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2232,
    "end": 2233,
    "range": [
      2232,
      2233
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2234,
    "end": 2235,
    "range": [
      2234,
      2235
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2235,
    "end": 2236,
    "range": [
      2235,
      2236
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2236,
    "end": 2237,
    "range": [
      2236,
      2237
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2238,
    "end": 2246,
    "range": [
      2238,
      2246
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 2247,
    "end": 2251,
    "range": [
      2247,
      2251
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2251,
    "end": 2252,
    "range": [
      2251,
      2252
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2252,
    "end": 2253,
    "range": [
      2252,
      2253
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2255,
    "end": 2256,
    "range": [
      2255,
      2256
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2256,
    "end": 2257,
    "range": [
      2256,
      2257
    ]
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 2257,
    "end": 2261,
    "range": [
      2257,
      2261
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2261,
    "end": 2262,
    "range": [
      2261,
      2262
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2262,
    "end": 2268,
    "range": [
      2262,
      2268
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2268,
    "end": 2269,
    "range": [
      2268,
      2269
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2269,
    "end": 2270,
    "range": [
      2269,
      2270
    ]
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 2271,
    "end": 2275,
    "range": [
      2271,
      2275
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2275,
    "end": 2276,
    "range": [
      2275,
      2276
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2276,
    "end": 2282,
    "range": [
      2276,
      2282
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2282,
    "end": 2283,
    "range": [
      2282,
      2283
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2283,
    "end": 2284,
    "range": [
      2283,
      2284
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2284,
    "end": 2285,
    "range": [
      2284,
      2285
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2285,
    "end": 2286,
    "range": [
      2285,
      2286
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2293,
    "end": 2301,
    "range": [
      2293,
      2301
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 2302,
    "end": 2306,
    "range": [
      2302,
      2306
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2306,
    "end": 2307,
    "range": [
      2306,
      2307
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2307,
    "end": 2308,
    "range": [
      2307,
      2308
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2308,
    "end": 2309,
    "range": [
      2308,
      2309
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2310,
    "end": 2313,
    "range": [
      2310,
      2313
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2313,
    "end": 2314,
    "range": [
      2313,
      2314
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2317,
    "end": 2318,
    "range": [
      2317,
      2318
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2320,
    "end": 2328,
    "range": [
      2320,
      2328
    ]
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 2329,
    "end": 2333,
    "range": [
      2329,
      2333
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2333,
    "end": 2334,
    "range": [
      2333,
      2334
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2334,
    "end": 2335,
    "range": [
      2334,
      2335
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2335,
    "end": 2336,
    "range": [
      2335,
      2336
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2337,
    "end": 2338,
    "range": [
      2337,
      2338
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2338,
    "end": 2339,
    "range": [
      2338,
      2339
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2339,
    "end": 2340,
    "range": [
      2339,
      2340
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2341,
    "end": 2349,
    "range": [
      2341,
      2349
    ]
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 2350,
    "end": 2354,
    "range": [
      2350,
      2354
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2354,
    "end": 2355,
    "range": [
      2354,
      2355
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2355,
    "end": 2356,
    "range": [
      2355,
      2356
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2356,
    "end": 2357,
    "range": [
      2356,
      2357
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2358,
    "end": 2364,
    "range": [
      2358,
      2364
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2365,
    "end": 2366,
    "range": [
      2365,
      2366
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2366,
    "end": 2367,
    "range": [
      2366,
      2367
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2367,
    "end": 2368,
    "range": [
      2367,
      2368
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2378,
    "end": 2386,
    "range": [
      2378,
      2386
    ]
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 2387,
    "end": 2391,
    "range": [
      2387,
      2391
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2392,
    "end": 2393,
    "range": [
      2392,
      2393
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2393,
    "end": 2394,
    "range": [
      2393,
      2394
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2395,
    "end": 2398,
    "range": [
      2395,
      2398
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2398,
    "end": 2399,
    "range": [
      2398,
      2399
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2400,
    "end": 2401,
    "range": [
      2400,
      2401
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2402,
    "end": 2403,
    "range": [
      2402,
      2403
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2405,
    "end": 2413,
    "range": [
      2405,
      2413
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 2414,
    "end": 2418,
    "range": [
      2414,
      2418
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2418,
    "end": 2419,
    "range": [
      2418,
      2419
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2419,
    "end": 2420,
    "range": [
      2419,
      2420
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2422,
    "end": 2423,
    "range": [
      2422,
      2423
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2423,
    "end": 2424,
    "range": [
      2423,
      2424
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 2424,
    "end": 2427,
    "range": [
      2424,
      2427
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2427,
    "end": 2428,
    "range": [
      2427,
      2428
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 2429,
    "end": 2432,
    "range": [
      2429,
      2432
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2433,
    "end": 2434,
    "range": [
      2433,
      2434
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2434,
    "end": 2435,
    "range": [
      2434,
      2435
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2436,
    "end": 2444,
    "range": [
      2436,
      2444
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 2445,
    "end": 2449,
    "range": [
      2445,
      2449
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2449,
    "end": 2450,
    "range": [
      2449,
      2450
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2450,
    "end": 2451,
    "range": [
      2450,
      2451
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2451,
    "end": 2452,
    "range": [
      2451,
      2452
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2453,
    "end": 2454,
    "range": [
      2453,
      2454
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2454,
    "end": 2455,
    "range": [
      2454,
      2455
    ]
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 2455,
    "end": 2459,
    "range": [
      2455,
      2459
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2459,
    "end": 2460,
    "range": [
      2459,
      2460
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2460,
    "end": 2466,
    "range": [
      2460,
      2466
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2466,
    "end": 2467,
    "range": [
      2466,
      2467
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2467,
    "end": 2468,
    "range": [
      2467,
      2468
    ]
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 2469,
    "end": 2473,
    "range": [
      2469,
      2473
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2473,
    "end": 2474,
    "range": [
      2473,
      2474
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2474,
    "end": 2480,
    "range": [
      2474,
      2480
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2480,
    "end": 2481,
    "range": [
      2480,
      2481
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2481,
    "end": 2482,
    "range": [
      2481,
      2482
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2482,
    "end": 2483,
    "range": [
      2482,
      2483
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2483,
    "end": 2484,
    "range": [
      2483,
      2484
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2494,
    "end": 2502,
    "range": [
      2494,
      2502
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 2503,
    "end": 2507,
    "range": [
      2503,
      2507
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2507,
    "end": 2508,
    "range": [
      2507,
      2508
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2508,
    "end": 2509,
    "range": [
      2508,
      2509
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2509,
    "end": 2510,
    "range": [
      2509,
      2510
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2511,
    "end": 2514,
    "range": [
      2511,
      2514
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2514,
    "end": 2515,
    "range": [
      2514,
      2515
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2516,
    "end": 2517,
    "range": [
      2516,
      2517
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2518,
    "end": 2519,
    "range": [
      2518,
      2519
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2521,
    "end": 2529,
    "range": [
      2521,
      2529
    ]
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 2530,
    "end": 2534,
    "range": [
      2530,
      2534
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2534,
    "end": 2535,
    "range": [
      2534,
      2535
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2535,
    "end": 2536,
    "range": [
      2535,
      2536
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2536,
    "end": 2537,
    "range": [
      2536,
      2537
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2538,
    "end": 2539,
    "range": [
      2538,
      2539
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2539,
    "end": 2540,
    "range": [
      2539,
      2540
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 2540,
    "end": 2543,
    "range": [
      2540,
      2543
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2543,
    "end": 2544,
    "range": [
      2543,
      2544
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 2545,
    "end": 2548,
    "range": [
      2545,
      2548
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2548,
    "end": 2549,
    "range": [
      2548,
      2549
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2549,
    "end": 2550,
    "range": [
      2549,
      2550
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2550,
    "end": 2551,
    "range": [
      2550,
      2551
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2552,
    "end": 2560,
    "range": [
      2552,
      2560
    ]
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 2561,
    "end": 2565,
    "range": [
      2561,
      2565
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2565,
    "end": 2566,
    "range": [
      2565,
      2566
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2566,
    "end": 2567,
    "range": [
      2566,
      2567
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2567,
    "end": 2568,
    "range": [
      2567,
      2568
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2569,
    "end": 2570,
    "range": [
      2569,
      2570
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2570,
    "end": 2571,
    "range": [
      2570,
      2571
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 2571,
    "end": 2576,
    "range": [
      2571,
      2576
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2576,
    "end": 2577,
    "range": [
      2576,
      2577
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 2578,
    "end": 2583,
    "range": [
      2578,
      2583
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2583,
    "end": 2584,
    "range": [
      2583,
      2584
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2584,
    "end": 2585,
    "range": [
      2584,
      2585
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2585,
    "end": 2586,
    "range": [
      2585,
      2586
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2596,
    "end": 2604,
    "range": [
      2596,
      2604
    ]
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 2605,
    "end": 2609,
    "range": [
      2605,
      2609
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2609,
    "end": 2610,
    "range": [
      2609,
      2610
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2610,
    "end": 2611,
    "range": [
      2610,
      2611
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2611,
    "end": 2612,
    "range": [
      2611,
      2612
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2613,
    "end": 2616,
    "range": [
      2613,
      2616
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2616,
    "end": 2617,
    "range": [
      2616,
      2617
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2618,
    "end": 2619,
    "range": [
      2618,
      2619
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2620,
    "end": 2621,
    "range": [
      2620,
      2621
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2623,
    "end": 2631,
    "range": [
      2623,
      2631
    ]
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 2632,
    "end": 2637,
    "range": [
      2632,
      2637
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2637,
    "end": 2638,
    "range": [
      2637,
      2638
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2638,
    "end": 2639,
    "range": [
      2638,
      2639
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2639,
    "end": 2640,
    "range": [
      2639,
      2640
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2641,
    "end": 2642,
    "range": [
      2641,
      2642
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2642,
    "end": 2643,
    "range": [
      2642,
      2643
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 2643,
    "end": 2646,
    "range": [
      2643,
      2646
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2646,
    "end": 2647,
    "range": [
      2646,
      2647
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 2648,
    "end": 2651,
    "range": [
      2648,
      2651
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2651,
    "end": 2652,
    "range": [
      2651,
      2652
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2652,
    "end": 2653,
    "range": [
      2652,
      2653
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2653,
    "end": 2654,
    "range": [
      2653,
      2654
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2655,
    "end": 2663,
    "range": [
      2655,
      2663
    ]
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 2664,
    "end": 2669,
    "range": [
      2664,
      2669
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2669,
    "end": 2670,
    "range": [
      2669,
      2670
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2670,
    "end": 2671,
    "range": [
      2670,
      2671
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2671,
    "end": 2672,
    "range": [
      2671,
      2672
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2673,
    "end": 2679,
    "range": [
      2673,
      2679
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2680,
    "end": 2681,
    "range": [
      2680,
      2681
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2681,
    "end": 2682,
    "range": [
      2681,
      2682
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2682,
    "end": 2683,
    "range": [
      2682,
      2683
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2690,
    "end": 2698,
    "range": [
      2690,
      2698
    ]
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 2699,
    "end": 2704,
    "range": [
      2699,
      2704
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2704,
    "end": 2705,
    "range": [
      2704,
      2705
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2705,
    "end": 2706,
    "range": [
      2705,
      2706
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2706,
    "end": 2707,
    "range": [
      2706,
      2707
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2708,
    "end": 2711,
    "range": [
      2708,
      2711
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2711,
    "end": 2712,
    "range": [
      2711,
      2712
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2713,
    "end": 2714,
    "range": [
      2713,
      2714
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2715,
    "end": 2716,
    "range": [
      2715,
      2716
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2718,
    "end": 2726,
    "range": [
      2718,
      2726
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2727,
    "end": 2732,
    "range": [
      2727,
      2732
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2732,
    "end": 2733,
    "range": [
      2732,
      2733
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2733,
    "end": 2734,
    "range": [
      2733,
      2734
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2734,
    "end": 2735,
    "range": [
      2734,
      2735
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2736,
    "end": 2737,
    "range": [
      2736,
      2737
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2737,
    "end": 2738,
    "range": [
      2737,
      2738
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 2738,
    "end": 2741,
    "range": [
      2738,
      2741
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2741,
    "end": 2742,
    "range": [
      2741,
      2742
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 2743,
    "end": 2746,
    "range": [
      2743,
      2746
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2746,
    "end": 2747,
    "range": [
      2746,
      2747
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2747,
    "end": 2748,
    "range": [
      2747,
      2748
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2748,
    "end": 2749,
    "range": [
      2748,
      2749
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2750,
    "end": 2758,
    "range": [
      2750,
      2758
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2759,
    "end": 2764,
    "range": [
      2759,
      2764
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2764,
    "end": 2765,
    "range": [
      2764,
      2765
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2765,
    "end": 2766,
    "range": [
      2765,
      2766
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2766,
    "end": 2767,
    "range": [
      2766,
      2767
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2768,
    "end": 2774,
    "range": [
      2768,
      2774
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2775,
    "end": 2776,
    "range": [
      2775,
      2776
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2776,
    "end": 2777,
    "range": [
      2776,
      2777
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2777,
    "end": 2778,
    "range": [
      2777,
      2778
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2785,
    "end": 2793,
    "range": [
      2785,
      2793
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2794,
    "end": 2799,
    "range": [
      2794,
      2799
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2799,
    "end": 2800,
    "range": [
      2799,
      2800
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2801,
    "end": 2802,
    "range": [
      2801,
      2802
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2803,
    "end": 2806,
    "range": [
      2803,
      2806
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2806,
    "end": 2807,
    "range": [
      2806,
      2807
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2808,
    "end": 2809,
    "range": [
      2808,
      2809
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2810,
    "end": 2811,
    "range": [
      2810,
      2811
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2813,
    "end": 2821,
    "range": [
      2813,
      2821
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2822,
    "end": 2827,
    "range": [
      2822,
      2827
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2827,
    "end": 2828,
    "range": [
      2827,
      2828
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2828,
    "end": 2829,
    "range": [
      2828,
      2829
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2829,
    "end": 2830,
    "range": [
      2829,
      2830
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2831,
    "end": 2832,
    "range": [
      2831,
      2832
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2832,
    "end": 2833,
    "range": [
      2832,
      2833
    ]
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 2833,
    "end": 2837,
    "range": [
      2833,
      2837
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2837,
    "end": 2838,
    "range": [
      2837,
      2838
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2838,
    "end": 2844,
    "range": [
      2838,
      2844
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2844,
    "end": 2845,
    "range": [
      2844,
      2845
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2845,
    "end": 2846,
    "range": [
      2845,
      2846
    ]
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 2847,
    "end": 2851,
    "range": [
      2847,
      2851
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2851,
    "end": 2852,
    "range": [
      2851,
      2852
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2852,
    "end": 2858,
    "range": [
      2852,
      2858
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2858,
    "end": 2859,
    "range": [
      2858,
      2859
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2859,
    "end": 2860,
    "range": [
      2859,
      2860
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2860,
    "end": 2861,
    "range": [
      2860,
      2861
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2861,
    "end": 2862,
    "range": [
      2861,
      2862
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2863,
    "end": 2871,
    "range": [
      2863,
      2871
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2872,
    "end": 2877,
    "range": [
      2872,
      2877
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2877,
    "end": 2878,
    "range": [
      2877,
      2878
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2878,
    "end": 2879,
    "range": [
      2878,
      2879
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2879,
    "end": 2880,
    "range": [
      2879,
      2880
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2881,
    "end": 2882,
    "range": [
      2881,
      2882
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2882,
    "end": 2883,
    "range": [
      2882,
      2883
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 2883,
    "end": 2888,
    "range": [
      2883,
      2888
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2888,
    "end": 2889,
    "range": [
      2888,
      2889
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 2890,
    "end": 2895,
    "range": [
      2890,
      2895
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2895,
    "end": 2896,
    "range": [
      2895,
      2896
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2896,
    "end": 2897,
    "range": [
      2896,
      2897
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2897,
    "end": 2898,
    "range": [
      2897,
      2898
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2908,
    "end": 2916,
    "range": [
      2908,
      2916
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2917,
    "end": 2922,
    "range": [
      2917,
      2922
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2922,
    "end": 2923,
    "range": [
      2922,
      2923
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2923,
    "end": 2924,
    "range": [
      2923,
      2924
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2924,
    "end": 2925,
    "range": [
      2924,
      2925
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2926,
    "end": 2929,
    "range": [
      2926,
      2929
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2929,
    "end": 2930,
    "range": [
      2929,
      2930
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2931,
    "end": 2932,
    "range": [
      2931,
      2932
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2933,
    "end": 2934,
    "range": [
      2933,
      2934
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2936,
    "end": 2944,
    "range": [
      2936,
      2944
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2945,
    "end": 2951,
    "range": [
      2945,
      2951
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2951,
    "end": 2952,
    "range": [
      2951,
      2952
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2952,
    "end": 2953,
    "range": [
      2952,
      2953
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2953,
    "end": 2954,
    "range": [
      2953,
      2954
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2955,
    "end": 2957,
    "range": [
      2955,
      2957
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2957,
    "end": 2958,
    "range": [
      2957,
      2958
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2958,
    "end": 2959,
    "range": [
      2958,
      2959
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2960,
    "end": 2968,
    "range": [
      2960,
      2968
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2969,
    "end": 2975,
    "range": [
      2969,
      2975
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2975,
    "end": 2976,
    "range": [
      2975,
      2976
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2976,
    "end": 2977,
    "range": [
      2976,
      2977
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2977,
    "end": 2978,
    "range": [
      2977,
      2978
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2979,
    "end": 2980,
    "range": [
      2979,
      2980
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2980,
    "end": 2981,
    "range": [
      2980,
      2981
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 2981,
    "end": 2986,
    "range": [
      2981,
      2986
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2986,
    "end": 2987,
    "range": [
      2986,
      2987
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 2988,
    "end": 2993,
    "range": [
      2988,
      2993
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2993,
    "end": 2994,
    "range": [
      2993,
      2994
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2994,
    "end": 2995,
    "range": [
      2994,
      2995
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2995,
    "end": 2996,
    "range": [
      2995,
      2996
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3003,
    "end": 3011,
    "range": [
      3003,
      3011
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 3012,
    "end": 3018,
    "range": [
      3012,
      3018
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3018,
    "end": 3019,
    "range": [
      3018,
      3019
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3019,
    "end": 3020,
    "range": [
      3019,
      3020
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3020,
    "end": 3021,
    "range": [
      3020,
      3021
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3022,
    "end": 3025,
    "range": [
      3022,
      3025
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3025,
    "end": 3026,
    "range": [
      3025,
      3026
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3027,
    "end": 3028,
    "range": [
      3027,
      3028
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3029,
    "end": 3030,
    "range": [
      3029,
      3030
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3032,
    "end": 3040,
    "range": [
      3032,
      3040
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 3041,
    "end": 3046,
    "range": [
      3041,
      3046
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3046,
    "end": 3047,
    "range": [
      3046,
      3047
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3047,
    "end": 3048,
    "range": [
      3047,
      3048
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3048,
    "end": 3049,
    "range": [
      3048,
      3049
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 3050,
    "end": 3051,
    "range": [
      3050,
      3051
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3051,
    "end": 3052,
    "range": [
      3051,
      3052
    ]
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 3052,
    "end": 3056,
    "range": [
      3052,
      3056
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3056,
    "end": 3057,
    "range": [
      3056,
      3057
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3057,
    "end": 3063,
    "range": [
      3057,
      3063
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3063,
    "end": 3064,
    "range": [
      3063,
      3064
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3064,
    "end": 3065,
    "range": [
      3064,
      3065
    ]
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 3066,
    "end": 3070,
    "range": [
      3066,
      3070
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3070,
    "end": 3071,
    "range": [
      3070,
      3071
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3071,
    "end": 3077,
    "range": [
      3071,
      3077
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3077,
    "end": 3078,
    "range": [
      3077,
      3078
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3078,
    "end": 3079,
    "range": [
      3078,
      3079
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3079,
    "end": 3080,
    "range": [
      3079,
      3080
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3080,
    "end": 3081,
    "range": [
      3080,
      3081
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3082,
    "end": 3090,
    "range": [
      3082,
      3090
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 3091,
    "end": 3096,
    "range": [
      3091,
      3096
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3096,
    "end": 3097,
    "range": [
      3096,
      3097
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3097,
    "end": 3098,
    "range": [
      3097,
      3098
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3098,
    "end": 3099,
    "range": [
      3098,
      3099
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3100,
    "end": 3106,
    "range": [
      3100,
      3106
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3107,
    "end": 3108,
    "range": [
      3107,
      3108
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3108,
    "end": 3109,
    "range": [
      3108,
      3109
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3109,
    "end": 3110,
    "range": [
      3109,
      3110
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3117,
    "end": 3125,
    "range": [
      3117,
      3125
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 3126,
    "end": 3131,
    "range": [
      3126,
      3131
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3131,
    "end": 3132,
    "range": [
      3131,
      3132
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3132,
    "end": 3133,
    "range": [
      3132,
      3133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3133,
    "end": 3134,
    "range": [
      3133,
      3134
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3135,
    "end": 3138,
    "range": [
      3135,
      3138
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3138,
    "end": 3139,
    "range": [
      3138,
      3139
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3140,
    "end": 3141,
    "range": [
      3140,
      3141
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3142,
    "end": 3143,
    "range": [
      3142,
      3143
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3145,
    "end": 3153,
    "range": [
      3145,
      3153
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 3154,
    "end": 3159,
    "range": [
      3154,
      3159
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3159,
    "end": 3160,
    "range": [
      3159,
      3160
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3160,
    "end": 3161,
    "range": [
      3160,
      3161
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3161,
    "end": 3162,
    "range": [
      3161,
      3162
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 3163,
    "end": 3164,
    "range": [
      3163,
      3164
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3164,
    "end": 3165,
    "range": [
      3164,
      3165
    ]
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 3165,
    "end": 3169,
    "range": [
      3165,
      3169
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3169,
    "end": 3170,
    "range": [
      3169,
      3170
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3170,
    "end": 3176,
    "range": [
      3170,
      3176
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3176,
    "end": 3177,
    "range": [
      3176,
      3177
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3177,
    "end": 3178,
    "range": [
      3177,
      3178
    ]
  },
  {
    "type": "Identifier",
    "value": "Five",
    "start": 3179,
    "end": 3183,
    "range": [
      3179,
      3183
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3183,
    "end": 3184,
    "range": [
      3183,
      3184
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3184,
    "end": 3190,
    "range": [
      3184,
      3190
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3190,
    "end": 3191,
    "range": [
      3190,
      3191
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3191,
    "end": 3192,
    "range": [
      3191,
      3192
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3192,
    "end": 3193,
    "range": [
      3192,
      3193
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3193,
    "end": 3194,
    "range": [
      3193,
      3194
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3195,
    "end": 3203,
    "range": [
      3195,
      3203
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 3204,
    "end": 3209,
    "range": [
      3204,
      3209
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3209,
    "end": 3210,
    "range": [
      3209,
      3210
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3210,
    "end": 3211,
    "range": [
      3210,
      3211
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3211,
    "end": 3212,
    "range": [
      3211,
      3212
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3213,
    "end": 3219,
    "range": [
      3213,
      3219
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3220,
    "end": 3221,
    "range": [
      3220,
      3221
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3221,
    "end": 3222,
    "range": [
      3221,
      3222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3222,
    "end": 3223,
    "range": [
      3222,
      3223
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3230,
    "end": 3238,
    "range": [
      3230,
      3238
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 3239,
    "end": 3244,
    "range": [
      3239,
      3244
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3244,
    "end": 3245,
    "range": [
      3244,
      3245
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3245,
    "end": 3246,
    "range": [
      3245,
      3246
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3246,
    "end": 3247,
    "range": [
      3246,
      3247
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3248,
    "end": 3251,
    "range": [
      3248,
      3251
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3251,
    "end": 3252,
    "range": [
      3251,
      3252
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3253,
    "end": 3254,
    "range": [
      3253,
      3254
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3255,
    "end": 3256,
    "range": [
      3255,
      3256
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3258,
    "end": 3266,
    "range": [
      3258,
      3266
    ]
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 3267,
    "end": 3272,
    "range": [
      3267,
      3272
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3272,
    "end": 3273,
    "range": [
      3272,
      3273
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3273,
    "end": 3274,
    "range": [
      3273,
      3274
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3274,
    "end": 3275,
    "range": [
      3274,
      3275
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 3276,
    "end": 3278,
    "range": [
      3276,
      3278
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3278,
    "end": 3279,
    "range": [
      3278,
      3279
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3279,
    "end": 3280,
    "range": [
      3279,
      3280
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3281,
    "end": 3289,
    "range": [
      3281,
      3289
    ]
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 3290,
    "end": 3295,
    "range": [
      3290,
      3295
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3295,
    "end": 3296,
    "range": [
      3295,
      3296
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3296,
    "end": 3297,
    "range": [
      3296,
      3297
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3297,
    "end": 3298,
    "range": [
      3297,
      3298
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3299,
    "end": 3300,
    "range": [
      3299,
      3300
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3300,
    "end": 3301,
    "range": [
      3300,
      3301
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 3301,
    "end": 3306,
    "range": [
      3301,
      3306
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3306,
    "end": 3307,
    "range": [
      3306,
      3307
    ]
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 3308,
    "end": 3313,
    "range": [
      3308,
      3313
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3313,
    "end": 3314,
    "range": [
      3313,
      3314
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3314,
    "end": 3315,
    "range": [
      3314,
      3315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3315,
    "end": 3316,
    "range": [
      3315,
      3316
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3323,
    "end": 3331,
    "range": [
      3323,
      3331
    ]
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 3332,
    "end": 3337,
    "range": [
      3332,
      3337
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3337,
    "end": 3338,
    "range": [
      3337,
      3338
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3338,
    "end": 3339,
    "range": [
      3338,
      3339
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3339,
    "end": 3340,
    "range": [
      3339,
      3340
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3341,
    "end": 3344,
    "range": [
      3341,
      3344
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3344,
    "end": 3345,
    "range": [
      3344,
      3345
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3346,
    "end": 3347,
    "range": [
      3346,
      3347
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3348,
    "end": 3349,
    "range": [
      3348,
      3349
    ]
  }
]
```
