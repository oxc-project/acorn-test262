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
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 529,
        "end": 530
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
              "start": 531,
              "end": 532
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 542
              },
              "typeArguments": null,
              "start": 541,
              "end": 542
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 531,
            "end": 542
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 544,
              "end": 545
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Two",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 557
              },
              "typeArguments": null,
              "start": 554,
              "end": 557
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 544,
            "end": 557
          }
        ],
        "start": 530,
        "end": 558
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 576
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
                        "start": 580,
                        "end": 581
                      },
                      "typeArguments": null,
                      "start": 580,
                      "end": 581
                    },
                    "start": 578,
                    "end": 581
                  },
                  "start": 577,
                  "end": 581
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
                        "start": 586,
                        "end": 587
                      },
                      "typeArguments": null,
                      "start": 586,
                      "end": 587
                    },
                    "start": 584,
                    "end": 587
                  },
                  "start": 583,
                  "end": 587
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
              "start": 576,
              "end": 605
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 565,
            "end": 605
          }
        ],
        "start": 559,
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
        "name": "C",
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
                "name": "Three",
                "optional": false,
                "typeAnnotation": null,
                "start": 640,
                "end": 645
              },
              "typeArguments": null,
              "start": 640,
              "end": 645
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 630,
            "end": 645
          }
        ],
        "start": 616,
        "end": 646
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 664
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
                        "start": 668,
                        "end": 669
                      },
                      "typeArguments": null,
                      "start": 668,
                      "end": 669
                    },
                    "start": 666,
                    "end": 669
                  },
                  "start": 665,
                  "end": 669
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
                        "start": 674,
                        "end": 675
                      },
                      "typeArguments": null,
                      "start": 674,
                      "end": 675
                    },
                    "start": 672,
                    "end": 675
                  },
                  "start": 671,
                  "end": 675
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
                      "value": null,
                      "raw": "null",
                      "start": 686,
                      "end": 690
                    },
                    "start": 679,
                    "end": 691
                  }
                ],
                "start": 677,
                "end": 693
              },
              "expression": false,
              "start": 664,
              "end": 693
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 653,
            "end": 693
          }
        ],
        "start": 647,
        "end": 695
      },
      "abstract": false,
      "declare": false,
      "start": 609,
      "end": 695
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
        "start": 703,
        "end": 704
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
              "start": 705,
              "end": 706
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 715,
                "end": 716
              },
              "typeArguments": null,
              "start": 715,
              "end": 716
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 705,
            "end": 716
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 718,
              "end": 719
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Four",
                "optional": false,
                "typeAnnotation": null,
                "start": 728,
                "end": 732
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 733,
                    "end": 739
                  }
                ],
                "start": 732,
                "end": 740
              },
              "start": 728,
              "end": 740
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 718,
            "end": 740
          }
        ],
        "start": 704,
        "end": 741
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 748,
              "end": 759
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
                        "start": 763,
                        "end": 764
                      },
                      "typeArguments": null,
                      "start": 763,
                      "end": 764
                    },
                    "start": 761,
                    "end": 764
                  },
                  "start": 760,
                  "end": 764
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
                        "start": 769,
                        "end": 770
                      },
                      "typeArguments": null,
                      "start": 769,
                      "end": 770
                    },
                    "start": 767,
                    "end": 770
                  },
                  "start": 766,
                  "end": 770
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
                      "value": null,
                      "raw": "null",
                      "start": 781,
                      "end": 785
                    },
                    "start": 774,
                    "end": 786
                  }
                ],
                "start": 772,
                "end": 788
              },
              "expression": false,
              "start": 759,
              "end": 788
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 748,
            "end": 788
          }
        ],
        "start": 742,
        "end": 790
      },
      "abstract": false,
      "declare": false,
      "start": 697,
      "end": 790
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 802,
        "end": 803
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
              "start": 804,
              "end": 805
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 814,
                "end": 815
              },
              "typeArguments": null,
              "start": 814,
              "end": 815
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 804,
            "end": 815
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 817,
              "end": 818
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Five",
                "optional": false,
                "typeAnnotation": null,
                "start": 827,
                "end": 831
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 832,
                    "end": 838
                  }
                ],
                "start": 831,
                "end": 839
              },
              "start": 827,
              "end": 839
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 817,
            "end": 839
          }
        ],
        "start": 803,
        "end": 840
      },
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
                      "start": 854,
                      "end": 855
                    },
                    "typeArguments": null,
                    "start": 854,
                    "end": 855
                  },
                  "start": 852,
                  "end": 855
                },
                "start": 851,
                "end": 855
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
                      "start": 860,
                      "end": 861
                    },
                    "typeArguments": null,
                    "start": 860,
                    "end": 861
                  },
                  "start": 858,
                  "end": 861
                },
                "start": 857,
                "end": 861
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 864,
                "end": 870
              },
              "start": 862,
              "end": 870
            },
            "start": 847,
            "end": 871
          }
        ],
        "start": 841,
        "end": 873
      },
      "declare": false,
      "start": 792,
      "end": 873
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 885,
        "end": 887
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 898,
                    "end": 899
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 908,
                      "end": 909
                    },
                    "typeArguments": null,
                    "start": 908,
                    "end": 909
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 898,
                  "end": 909
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 911,
                    "end": 912
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Six",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 921,
                      "end": 924
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 925,
                          "end": 931
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 933,
                          "end": 939
                        }
                      ],
                      "start": 924,
                      "end": 940
                    },
                    "start": 921,
                    "end": 940
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 911,
                  "end": 940
                }
              ],
              "start": 897,
              "end": 941
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
                      "start": 945,
                      "end": 946
                    },
                    "typeArguments": null,
                    "start": 945,
                    "end": 946
                  },
                  "start": 943,
                  "end": 946
                },
                "start": 942,
                "end": 946
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
                      "start": 951,
                      "end": 952
                    },
                    "typeArguments": null,
                    "start": 951,
                    "end": 952
                  },
                  "start": 949,
                  "end": 952
                },
                "start": 948,
                "end": 952
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 955,
                "end": 961
              },
              "start": 953,
              "end": 961
            },
            "start": 894,
            "end": 962
          }
        ],
        "start": 888,
        "end": 964
      },
      "declare": false,
      "start": 875,
      "end": 964
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
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 979,
                            "end": 980
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 989,
                              "end": 990
                            },
                            "typeArguments": null,
                            "start": 989,
                            "end": 990
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 979,
                          "end": 990
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 992,
                            "end": 993
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "One",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1002,
                              "end": 1005
                            },
                            "typeArguments": null,
                            "start": 1002,
                            "end": 1005
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 992,
                          "end": 1005
                        }
                      ],
                      "start": 978,
                      "end": 1006
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
                              "start": 1010,
                              "end": 1011
                            },
                            "typeArguments": null,
                            "start": 1010,
                            "end": 1011
                          },
                          "start": 1008,
                          "end": 1011
                        },
                        "start": 1007,
                        "end": 1011
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
                              "start": 1016,
                              "end": 1017
                            },
                            "typeArguments": null,
                            "start": 1016,
                            "end": 1017
                          },
                          "start": 1014,
                          "end": 1017
                        },
                        "start": 1013,
                        "end": 1017
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1020,
                        "end": 1026
                      },
                      "start": 1018,
                      "end": 1026
                    },
                    "start": 975,
                    "end": 1026
                  }
                ],
                "start": 973,
                "end": 1028
              },
              "start": 971,
              "end": 1028
            },
            "start": 970,
            "end": 1028
          },
          "init": null,
          "definite": false,
          "start": 970,
          "end": 1028
        }
      ],
      "declare": false,
      "start": 966,
      "end": 1028
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
            "start": 1033,
            "end": 1034
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
                  "name": "new",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1039,
                  "end": 1042
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
                          "start": 1043,
                          "end": 1044
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1053,
                            "end": 1054
                          },
                          "typeArguments": null,
                          "start": 1053,
                          "end": 1054
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1043,
                        "end": 1054
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1056,
                          "end": 1057
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Two",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1066,
                            "end": 1069
                          },
                          "typeArguments": null,
                          "start": 1066,
                          "end": 1069
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1056,
                        "end": 1069
                      }
                    ],
                    "start": 1042,
                    "end": 1070
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
                            "start": 1074,
                            "end": 1075
                          },
                          "typeArguments": null,
                          "start": 1074,
                          "end": 1075
                        },
                        "start": 1072,
                        "end": 1075
                      },
                      "start": 1071,
                      "end": 1075
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
                            "start": 1080,
                            "end": 1081
                          },
                          "typeArguments": null,
                          "start": 1080,
                          "end": 1081
                        },
                        "start": 1078,
                        "end": 1081
                      },
                      "start": 1077,
                      "end": 1081
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
                          "start": 1092,
                          "end": 1094
                        },
                        "start": 1085,
                        "end": 1095
                      }
                    ],
                    "start": 1083,
                    "end": 1097
                  },
                  "expression": false,
                  "start": 1042,
                  "end": 1097
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1039,
                "end": 1097
              }
            ],
            "start": 1037,
            "end": 1099
          },
          "definite": false,
          "start": 1033,
          "end": 1099
        }
      ],
      "declare": false,
      "start": 1029,
      "end": 1100
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1161,
        "end": 1166
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
                "start": 1170,
                "end": 1171
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
                      "start": 1172,
                      "end": 1175
                    },
                    "typeArguments": null,
                    "start": 1172,
                    "end": 1175
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1177,
                      "end": 1180
                    },
                    "typeArguments": null,
                    "start": 1177,
                    "end": 1180
                  }
                ],
                "start": 1171,
                "end": 1181
              },
              "start": 1170,
              "end": 1181
            },
            "start": 1168,
            "end": 1181
          },
          "start": 1167,
          "end": 1181
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1152,
      "end": 1183
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1193,
        "end": 1198
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
                "start": 1202,
                "end": 1203
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
                      "start": 1204,
                      "end": 1207
                    },
                    "typeArguments": null,
                    "start": 1204,
                    "end": 1207
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1209,
                      "end": 1212
                    },
                    "typeArguments": null,
                    "start": 1209,
                    "end": 1212
                  }
                ],
                "start": 1203,
                "end": 1213
              },
              "start": 1202,
              "end": 1213
            },
            "start": 1200,
            "end": 1213
          },
          "start": 1199,
          "end": 1213
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1184,
      "end": 1215
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1234,
        "end": 1239
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
              "start": 1243,
              "end": 1246
            },
            "start": 1241,
            "end": 1246
          },
          "start": 1240,
          "end": 1246
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1248,
        "end": 1251
      },
      "expression": false,
      "start": 1225,
      "end": 1251
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1262,
        "end": 1267
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
                "start": 1271,
                "end": 1272
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
                      "start": 1273,
                      "end": 1278
                    },
                    "typeArguments": null,
                    "start": 1273,
                    "end": 1278
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1280,
                      "end": 1285
                    },
                    "typeArguments": null,
                    "start": 1280,
                    "end": 1285
                  }
                ],
                "start": 1272,
                "end": 1286
              },
              "start": 1271,
              "end": 1286
            },
            "start": 1269,
            "end": 1286
          },
          "start": 1268,
          "end": 1286
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1253,
      "end": 1288
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1298,
        "end": 1303
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
                "start": 1307,
                "end": 1308
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
                      "start": 1309,
                      "end": 1314
                    },
                    "typeArguments": null,
                    "start": 1309,
                    "end": 1314
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1316,
                      "end": 1321
                    },
                    "typeArguments": null,
                    "start": 1316,
                    "end": 1321
                  }
                ],
                "start": 1308,
                "end": 1322
              },
              "start": 1307,
              "end": 1322
            },
            "start": 1305,
            "end": 1322
          },
          "start": 1304,
          "end": 1322
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1289,
      "end": 1324
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1343,
        "end": 1348
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
              "start": 1352,
              "end": 1355
            },
            "start": 1350,
            "end": 1355
          },
          "start": 1349,
          "end": 1355
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1357,
        "end": 1360
      },
      "expression": false,
      "start": 1334,
      "end": 1360
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1371,
        "end": 1375
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
                "start": 1379,
                "end": 1380
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
                      "start": 1381,
                      "end": 1385
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1386,
                          "end": 1392
                        }
                      ],
                      "start": 1385,
                      "end": 1393
                    },
                    "start": 1381,
                    "end": 1393
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1395,
                      "end": 1399
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1400,
                          "end": 1406
                        }
                      ],
                      "start": 1399,
                      "end": 1407
                    },
                    "start": 1395,
                    "end": 1407
                  }
                ],
                "start": 1380,
                "end": 1408
              },
              "start": 1379,
              "end": 1408
            },
            "start": 1377,
            "end": 1408
          },
          "start": 1376,
          "end": 1408
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1362,
      "end": 1410
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1420,
        "end": 1424
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
                "start": 1428,
                "end": 1429
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
                      "start": 1430,
                      "end": 1434
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1435,
                          "end": 1441
                        }
                      ],
                      "start": 1434,
                      "end": 1442
                    },
                    "start": 1430,
                    "end": 1442
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1444,
                      "end": 1448
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1449,
                          "end": 1455
                        }
                      ],
                      "start": 1448,
                      "end": 1456
                    },
                    "start": 1444,
                    "end": 1456
                  }
                ],
                "start": 1429,
                "end": 1457
              },
              "start": 1428,
              "end": 1457
            },
            "start": 1426,
            "end": 1457
          },
          "start": 1425,
          "end": 1457
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1411,
      "end": 1459
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1478,
        "end": 1482
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
              "start": 1486,
              "end": 1489
            },
            "start": 1484,
            "end": 1489
          },
          "start": 1483,
          "end": 1489
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1491,
        "end": 1494
      },
      "expression": false,
      "start": 1469,
      "end": 1494
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1505,
        "end": 1509
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
                "start": 1520,
                "end": 1521
              },
              "typeArguments": null,
              "start": 1513,
              "end": 1521
            },
            "start": 1511,
            "end": 1521
          },
          "start": 1510,
          "end": 1521
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1496,
      "end": 1523
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1533,
        "end": 1537
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
                "start": 1548,
                "end": 1549
              },
              "typeArguments": null,
              "start": 1541,
              "end": 1549
            },
            "start": 1539,
            "end": 1549
          },
          "start": 1538,
          "end": 1549
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1524,
      "end": 1551
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1570,
        "end": 1574
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
              "start": 1578,
              "end": 1581
            },
            "start": 1576,
            "end": 1581
          },
          "start": 1575,
          "end": 1581
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1583,
        "end": 1586
      },
      "expression": false,
      "start": 1561,
      "end": 1586
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1597,
        "end": 1601
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
                "start": 1612,
                "end": 1613
              },
              "typeArguments": null,
              "start": 1605,
              "end": 1613
            },
            "start": 1603,
            "end": 1613
          },
          "start": 1602,
          "end": 1613
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1588,
      "end": 1615
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1625,
        "end": 1629
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
                "start": 1640,
                "end": 1641
              },
              "typeArguments": null,
              "start": 1633,
              "end": 1641
            },
            "start": 1631,
            "end": 1641
          },
          "start": 1630,
          "end": 1641
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1616,
      "end": 1643
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1662,
        "end": 1666
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
              "start": 1670,
              "end": 1673
            },
            "start": 1668,
            "end": 1673
          },
          "start": 1667,
          "end": 1673
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1675,
        "end": 1678
      },
      "expression": false,
      "start": 1653,
      "end": 1678
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1689,
        "end": 1694
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
                "start": 1698,
                "end": 1699
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
                      "start": 1700,
                      "end": 1705
                    },
                    "typeArguments": null,
                    "start": 1700,
                    "end": 1705
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1707,
                      "end": 1712
                    },
                    "typeArguments": null,
                    "start": 1707,
                    "end": 1712
                  }
                ],
                "start": 1699,
                "end": 1713
              },
              "start": 1698,
              "end": 1713
            },
            "start": 1696,
            "end": 1713
          },
          "start": 1695,
          "end": 1713
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1680,
      "end": 1715
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1725,
        "end": 1730
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
                "start": 1734,
                "end": 1735
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
                      "start": 1736,
                      "end": 1740
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1741,
                          "end": 1747
                        }
                      ],
                      "start": 1740,
                      "end": 1748
                    },
                    "start": 1736,
                    "end": 1748
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Four",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1750,
                      "end": 1754
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1755,
                          "end": 1761
                        }
                      ],
                      "start": 1754,
                      "end": 1762
                    },
                    "start": 1750,
                    "end": 1762
                  }
                ],
                "start": 1735,
                "end": 1763
              },
              "start": 1734,
              "end": 1763
            },
            "start": 1732,
            "end": 1763
          },
          "start": 1731,
          "end": 1763
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1716,
      "end": 1765
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1784,
        "end": 1789
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
              "start": 1793,
              "end": 1796
            },
            "start": 1791,
            "end": 1796
          },
          "start": 1790,
          "end": 1796
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1798,
        "end": 1801
      },
      "expression": false,
      "start": 1775,
      "end": 1801
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1812,
        "end": 1817
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
                "start": 1821,
                "end": 1822
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
                      "start": 1823,
                      "end": 1828
                    },
                    "typeArguments": null,
                    "start": 1823,
                    "end": 1828
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1830,
                      "end": 1835
                    },
                    "typeArguments": null,
                    "start": 1830,
                    "end": 1835
                  }
                ],
                "start": 1822,
                "end": 1836
              },
              "start": 1821,
              "end": 1836
            },
            "start": 1819,
            "end": 1836
          },
          "start": 1818,
          "end": 1836
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1803,
      "end": 1838
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1848,
        "end": 1853
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
                "start": 1857,
                "end": 1858
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
                      "start": 1859,
                      "end": 1863
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1864,
                          "end": 1870
                        }
                      ],
                      "start": 1863,
                      "end": 1871
                    },
                    "start": 1859,
                    "end": 1871
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Four",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1873,
                      "end": 1877
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1878,
                          "end": 1884
                        }
                      ],
                      "start": 1877,
                      "end": 1885
                    },
                    "start": 1873,
                    "end": 1885
                  }
                ],
                "start": 1858,
                "end": 1886
              },
              "start": 1857,
              "end": 1886
            },
            "start": 1855,
            "end": 1886
          },
          "start": 1854,
          "end": 1886
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1839,
      "end": 1888
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1907,
        "end": 1912
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
              "start": 1916,
              "end": 1919
            },
            "start": 1914,
            "end": 1919
          },
          "start": 1913,
          "end": 1919
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1921,
        "end": 1924
      },
      "expression": false,
      "start": 1898,
      "end": 1924
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1935,
        "end": 1939
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
                "start": 1943,
                "end": 1944
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
                      "start": 1945,
                      "end": 1948
                    },
                    "typeArguments": null,
                    "start": 1945,
                    "end": 1948
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1950,
                      "end": 1953
                    },
                    "typeArguments": null,
                    "start": 1950,
                    "end": 1953
                  }
                ],
                "start": 1944,
                "end": 1954
              },
              "start": 1943,
              "end": 1954
            },
            "start": 1941,
            "end": 1954
          },
          "start": 1940,
          "end": 1954
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1926,
      "end": 1956
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1966,
        "end": 1970
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
                "start": 1974,
                "end": 1975
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
                      "start": 1976,
                      "end": 1980
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1981,
                          "end": 1987
                        }
                      ],
                      "start": 1980,
                      "end": 1988
                    },
                    "start": 1976,
                    "end": 1988
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1990,
                      "end": 1994
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1995,
                          "end": 2001
                        }
                      ],
                      "start": 1994,
                      "end": 2002
                    },
                    "start": 1990,
                    "end": 2002
                  }
                ],
                "start": 1975,
                "end": 2003
              },
              "start": 1974,
              "end": 2003
            },
            "start": 1972,
            "end": 2003
          },
          "start": 1971,
          "end": 2003
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1957,
      "end": 2005
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2024,
        "end": 2028
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
              "start": 2032,
              "end": 2035
            },
            "start": 2030,
            "end": 2035
          },
          "start": 2029,
          "end": 2035
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2037,
        "end": 2040
      },
      "expression": false,
      "start": 2015,
      "end": 2040
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2051,
        "end": 2055
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
                "start": 2059,
                "end": 2060
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
                      "start": 2061,
                      "end": 2064
                    },
                    "typeArguments": null,
                    "start": 2061,
                    "end": 2064
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2066,
                      "end": 2069
                    },
                    "typeArguments": null,
                    "start": 2066,
                    "end": 2069
                  }
                ],
                "start": 2060,
                "end": 2070
              },
              "start": 2059,
              "end": 2070
            },
            "start": 2057,
            "end": 2070
          },
          "start": 2056,
          "end": 2070
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2042,
      "end": 2072
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2082,
        "end": 2086
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
                "start": 2090,
                "end": 2091
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
                      "start": 2092,
                      "end": 2097
                    },
                    "typeArguments": null,
                    "start": 2092,
                    "end": 2097
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2099,
                      "end": 2104
                    },
                    "typeArguments": null,
                    "start": 2099,
                    "end": 2104
                  }
                ],
                "start": 2091,
                "end": 2105
              },
              "start": 2090,
              "end": 2105
            },
            "start": 2088,
            "end": 2105
          },
          "start": 2087,
          "end": 2105
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2073,
      "end": 2107
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2126,
        "end": 2130
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
              "start": 2134,
              "end": 2137
            },
            "start": 2132,
            "end": 2137
          },
          "start": 2131,
          "end": 2137
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2139,
        "end": 2142
      },
      "expression": false,
      "start": 2117,
      "end": 2142
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2153,
        "end": 2158
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
                "start": 2162,
                "end": 2163
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
                      "start": 2164,
                      "end": 2167
                    },
                    "typeArguments": null,
                    "start": 2164,
                    "end": 2167
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2169,
                      "end": 2172
                    },
                    "typeArguments": null,
                    "start": 2169,
                    "end": 2172
                  }
                ],
                "start": 2163,
                "end": 2173
              },
              "start": 2162,
              "end": 2173
            },
            "start": 2160,
            "end": 2173
          },
          "start": 2159,
          "end": 2173
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2144,
      "end": 2175
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2185,
        "end": 2190
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
                "start": 2201,
                "end": 2202
              },
              "typeArguments": null,
              "start": 2194,
              "end": 2202
            },
            "start": 2192,
            "end": 2202
          },
          "start": 2191,
          "end": 2202
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2176,
      "end": 2204
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2220,
        "end": 2225
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
              "start": 2229,
              "end": 2232
            },
            "start": 2227,
            "end": 2232
          },
          "start": 2226,
          "end": 2232
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2234,
        "end": 2237
      },
      "expression": false,
      "start": 2211,
      "end": 2237
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2248,
        "end": 2253
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
                "start": 2257,
                "end": 2258
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
                      "start": 2259,
                      "end": 2262
                    },
                    "typeArguments": null,
                    "start": 2259,
                    "end": 2262
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2264,
                      "end": 2267
                    },
                    "typeArguments": null,
                    "start": 2264,
                    "end": 2267
                  }
                ],
                "start": 2258,
                "end": 2268
              },
              "start": 2257,
              "end": 2268
            },
            "start": 2255,
            "end": 2268
          },
          "start": 2254,
          "end": 2268
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2239,
      "end": 2270
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2280,
        "end": 2285
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
                "start": 2296,
                "end": 2297
              },
              "typeArguments": null,
              "start": 2289,
              "end": 2297
            },
            "start": 2287,
            "end": 2297
          },
          "start": 2286,
          "end": 2297
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2271,
      "end": 2299
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2315,
        "end": 2320
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
              "start": 2324,
              "end": 2327
            },
            "start": 2322,
            "end": 2327
          },
          "start": 2321,
          "end": 2327
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2329,
        "end": 2332
      },
      "expression": false,
      "start": 2306,
      "end": 2332
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2343,
        "end": 2348
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
                "start": 2352,
                "end": 2353
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
                      "start": 2354,
                      "end": 2358
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2359,
                          "end": 2365
                        }
                      ],
                      "start": 2358,
                      "end": 2366
                    },
                    "start": 2354,
                    "end": 2366
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2368,
                      "end": 2372
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2373,
                          "end": 2379
                        }
                      ],
                      "start": 2372,
                      "end": 2380
                    },
                    "start": 2368,
                    "end": 2380
                  }
                ],
                "start": 2353,
                "end": 2381
              },
              "start": 2352,
              "end": 2381
            },
            "start": 2350,
            "end": 2381
          },
          "start": 2349,
          "end": 2381
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2334,
      "end": 2383
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2393,
        "end": 2398
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
                "start": 2402,
                "end": 2403
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
                      "start": 2404,
                      "end": 2409
                    },
                    "typeArguments": null,
                    "start": 2404,
                    "end": 2409
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2411,
                      "end": 2416
                    },
                    "typeArguments": null,
                    "start": 2411,
                    "end": 2416
                  }
                ],
                "start": 2403,
                "end": 2417
              },
              "start": 2402,
              "end": 2417
            },
            "start": 2400,
            "end": 2417
          },
          "start": 2399,
          "end": 2417
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2384,
      "end": 2419
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2435,
        "end": 2440
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
              "start": 2444,
              "end": 2447
            },
            "start": 2442,
            "end": 2447
          },
          "start": 2441,
          "end": 2447
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2449,
        "end": 2452
      },
      "expression": false,
      "start": 2426,
      "end": 2452
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2463,
        "end": 2469
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
                "start": 2473,
                "end": 2475
              },
              "typeArguments": null,
              "start": 2473,
              "end": 2475
            },
            "start": 2471,
            "end": 2475
          },
          "start": 2470,
          "end": 2475
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2454,
      "end": 2477
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2487,
        "end": 2493
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
                "start": 2497,
                "end": 2498
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
                      "start": 2499,
                      "end": 2504
                    },
                    "typeArguments": null,
                    "start": 2499,
                    "end": 2504
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2506,
                      "end": 2511
                    },
                    "typeArguments": null,
                    "start": 2506,
                    "end": 2511
                  }
                ],
                "start": 2498,
                "end": 2512
              },
              "start": 2497,
              "end": 2512
            },
            "start": 2495,
            "end": 2512
          },
          "start": 2494,
          "end": 2512
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2478,
      "end": 2514
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2530,
        "end": 2536
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
              "start": 2540,
              "end": 2543
            },
            "start": 2538,
            "end": 2543
          },
          "start": 2537,
          "end": 2543
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2545,
        "end": 2548
      },
      "expression": false,
      "start": 2521,
      "end": 2548
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2559,
        "end": 2564
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
                "start": 2568,
                "end": 2569
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
                      "start": 2570,
                      "end": 2574
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2575,
                          "end": 2581
                        }
                      ],
                      "start": 2574,
                      "end": 2582
                    },
                    "start": 2570,
                    "end": 2582
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2584,
                      "end": 2588
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2589,
                          "end": 2595
                        }
                      ],
                      "start": 2588,
                      "end": 2596
                    },
                    "start": 2584,
                    "end": 2596
                  }
                ],
                "start": 2569,
                "end": 2597
              },
              "start": 2568,
              "end": 2597
            },
            "start": 2566,
            "end": 2597
          },
          "start": 2565,
          "end": 2597
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2550,
      "end": 2599
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2609,
        "end": 2614
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
                "start": 2625,
                "end": 2626
              },
              "typeArguments": null,
              "start": 2618,
              "end": 2626
            },
            "start": 2616,
            "end": 2626
          },
          "start": 2615,
          "end": 2626
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2600,
      "end": 2628
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2644,
        "end": 2649
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
              "start": 2653,
              "end": 2656
            },
            "start": 2651,
            "end": 2656
          },
          "start": 2650,
          "end": 2656
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2658,
        "end": 2661
      },
      "expression": false,
      "start": 2635,
      "end": 2661
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2672,
        "end": 2677
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
                "start": 2681,
                "end": 2682
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
                      "start": 2683,
                      "end": 2687
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2688,
                          "end": 2694
                        }
                      ],
                      "start": 2687,
                      "end": 2695
                    },
                    "start": 2683,
                    "end": 2695
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2697,
                      "end": 2701
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2702,
                          "end": 2708
                        }
                      ],
                      "start": 2701,
                      "end": 2709
                    },
                    "start": 2697,
                    "end": 2709
                  }
                ],
                "start": 2682,
                "end": 2710
              },
              "start": 2681,
              "end": 2710
            },
            "start": 2679,
            "end": 2710
          },
          "start": 2678,
          "end": 2710
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2663,
      "end": 2712
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2722,
        "end": 2727
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
                "start": 2738,
                "end": 2739
              },
              "typeArguments": null,
              "start": 2731,
              "end": 2739
            },
            "start": 2729,
            "end": 2739
          },
          "start": 2728,
          "end": 2739
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2713,
      "end": 2741
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2757,
        "end": 2762
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
              "start": 2766,
              "end": 2769
            },
            "start": 2764,
            "end": 2769
          },
          "start": 2763,
          "end": 2769
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2771,
        "end": 2774
      },
      "expression": false,
      "start": 2748,
      "end": 2774
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 335,
  "end": 2774
}
```
