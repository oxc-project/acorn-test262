__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IConstructSignature",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 36
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 96,
                  "end": 102
                },
                "start": 94,
                "end": 102
              },
              "start": 88,
              "end": 103
            }
          ],
          "start": 37,
          "end": 105
        },
        "declare": false,
        "start": 7,
        "end": 105
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 105
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IConstructSignatureWithParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 157
        },
        "typeParameters": null,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 250,
                      "end": 256
                    },
                    "start": 248,
                    "end": 256
                  },
                  "start": 247,
                  "end": 256
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 305,
                      "end": 311
                    },
                    "start": 303,
                    "end": 311
                  },
                  "start": 302,
                  "end": 311
                }
              ],
              "returnType": null,
              "start": 213,
              "end": 313
            }
          ],
          "start": 158,
          "end": 315
        },
        "declare": false,
        "start": 114,
        "end": 315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 107,
      "end": 315
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IConstructSignatureWithRestParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 334,
          "end": 371
        },
        "typeParameters": null,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 386,
                      "end": 392
                    },
                    "start": 384,
                    "end": 392
                  },
                  "start": 383,
                  "end": 392
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rests",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 397,
                    "end": 402
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 404,
                        "end": 410
                      },
                      "start": 404,
                      "end": 412
                    },
                    "start": 402,
                    "end": 412
                  },
                  "value": null,
                  "start": 394,
                  "end": 412
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 415,
                  "end": 421
                },
                "start": 413,
                "end": 421
              },
              "start": 378,
              "end": 422
            }
          ],
          "start": 372,
          "end": 424
        },
        "declare": false,
        "start": 324,
        "end": 424
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 317,
      "end": 424
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IConstructSignatureWithOverloads",
          "optional": false,
          "typeAnnotation": null,
          "start": 443,
          "end": 475
        },
        "typeParameters": null,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 490,
                      "end": 496
                    },
                    "start": 488,
                    "end": 496
                  },
                  "start": 487,
                  "end": 496
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 499,
                  "end": 505
                },
                "start": 497,
                "end": 505
              },
              "start": 482,
              "end": 506
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 519,
                      "end": 525
                    },
                    "start": 517,
                    "end": 525
                  },
                  "start": 516,
                  "end": 525
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 528,
                  "end": 534
                },
                "start": 526,
                "end": 534
              },
              "start": 511,
              "end": 535
            }
          ],
          "start": 476,
          "end": 537
        },
        "declare": false,
        "start": 433,
        "end": 537
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 426,
      "end": 537
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IConstructSignatureWithTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 556,
          "end": 593
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
                "start": 594,
                "end": 595
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 594,
              "end": 595
            }
          ],
          "start": 593,
          "end": 596
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
                  "name": "a",
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
                        "start": 656,
                        "end": 657
                      },
                      "typeArguments": null,
                      "start": 656,
                      "end": 657
                    },
                    "start": 654,
                    "end": 657
                  },
                  "start": 653,
                  "end": 657
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
                    "start": 660,
                    "end": 661
                  },
                  "typeArguments": null,
                  "start": 660,
                  "end": 661
                },
                "start": 658,
                "end": 661
              },
              "start": 648,
              "end": 662
            }
          ],
          "start": 597,
          "end": 664
        },
        "declare": false,
        "start": 546,
        "end": 664
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 539,
      "end": 664
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IConstructSignatureWithOwnTypeParametes",
          "optional": false,
          "typeAnnotation": null,
          "start": 683,
          "end": 722
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
                      "start": 734,
                      "end": 735
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IConstructSignature",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 744,
                        "end": 763
                      },
                      "typeArguments": null,
                      "start": 744,
                      "end": 763
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 734,
                    "end": 763
                  }
                ],
                "start": 733,
                "end": 764
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
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
                        "start": 768,
                        "end": 769
                      },
                      "typeArguments": null,
                      "start": 768,
                      "end": 769
                    },
                    "start": 766,
                    "end": 769
                  },
                  "start": 765,
                  "end": 769
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
                    "start": 772,
                    "end": 773
                  },
                  "typeArguments": null,
                  "start": 772,
                  "end": 773
                },
                "start": 770,
                "end": 773
              },
              "start": 729,
              "end": 774
            }
          ],
          "start": 723,
          "end": 776
        },
        "declare": false,
        "start": 673,
        "end": 776
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 666,
      "end": 776
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 777
}
```
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
        "name": "IGlobalConstructSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 35
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 95,
                "end": 101
              },
              "start": 93,
              "end": 101
            },
            "start": 87,
            "end": 102
          }
        ],
        "start": 36,
        "end": 104
      },
      "declare": false,
      "start": 0,
      "end": 104
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IGlobalConstructSignatureWithParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 155
      },
      "typeParameters": null,
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 248,
                    "end": 254
                  },
                  "start": 246,
                  "end": 254
                },
                "start": 245,
                "end": 254
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 303,
                    "end": 309
                  },
                  "start": 301,
                  "end": 309
                },
                "start": 300,
                "end": 309
              }
            ],
            "returnType": null,
            "start": 211,
            "end": 311
          }
        ],
        "start": 156,
        "end": 313
      },
      "declare": false,
      "start": 106,
      "end": 313
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IGlobalConstructSignatureWithRestParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 368
      },
      "typeParameters": null,
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 384,
                    "end": 390
                  },
                  "start": 382,
                  "end": 390
                },
                "start": 381,
                "end": 390
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rests",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 395,
                  "end": 400
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 402,
                      "end": 408
                    },
                    "start": 402,
                    "end": 410
                  },
                  "start": 400,
                  "end": 410
                },
                "value": null,
                "start": 392,
                "end": 410
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 413,
                "end": 419
              },
              "start": 411,
              "end": 419
            },
            "start": 376,
            "end": 420
          }
        ],
        "start": 369,
        "end": 423
      },
      "declare": false,
      "start": 315,
      "end": 423
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IGlobalConstructSignatureWithOverloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 435,
        "end": 473
      },
      "typeParameters": null,
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 488,
                    "end": 494
                  },
                  "start": 486,
                  "end": 494
                },
                "start": 485,
                "end": 494
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 497,
                "end": 503
              },
              "start": 495,
              "end": 503
            },
            "start": 480,
            "end": 504
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 517,
                    "end": 523
                  },
                  "start": 515,
                  "end": 523
                },
                "start": 514,
                "end": 523
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 526,
                "end": 532
              },
              "start": 524,
              "end": 532
            },
            "start": 509,
            "end": 533
          }
        ],
        "start": 474,
        "end": 535
      },
      "declare": false,
      "start": 425,
      "end": 535
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IGlobalConstructSignatureWithTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 547,
        "end": 590
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
              "start": 591,
              "end": 592
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 591,
            "end": 592
          }
        ],
        "start": 590,
        "end": 593
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
                "name": "a",
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
                      "start": 653,
                      "end": 654
                    },
                    "typeArguments": null,
                    "start": 653,
                    "end": 654
                  },
                  "start": 651,
                  "end": 654
                },
                "start": 650,
                "end": 654
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
                  "start": 657,
                  "end": 658
                },
                "typeArguments": null,
                "start": 657,
                "end": 658
              },
              "start": 655,
              "end": 658
            },
            "start": 645,
            "end": 659
          }
        ],
        "start": 594,
        "end": 661
      },
      "declare": false,
      "start": 537,
      "end": 661
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IGlobalConstructSignatureWithOwnTypeParametes",
        "optional": false,
        "typeAnnotation": null,
        "start": 673,
        "end": 718
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
                    "start": 730,
                    "end": 731
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IGlobalConstructSignature",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 740,
                      "end": 765
                    },
                    "typeArguments": null,
                    "start": 740,
                    "end": 765
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 730,
                  "end": 765
                }
              ],
              "start": 729,
              "end": 766
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                      "start": 770,
                      "end": 771
                    },
                    "typeArguments": null,
                    "start": 770,
                    "end": 771
                  },
                  "start": 768,
                  "end": 771
                },
                "start": 767,
                "end": 771
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
                  "start": 774,
                  "end": 775
                },
                "typeArguments": null,
                "start": 774,
                "end": 775
              },
              "start": 772,
              "end": 775
            },
            "start": 725,
            "end": 776
          }
        ],
        "start": 719,
        "end": 778
      },
      "declare": false,
      "start": 663,
      "end": 778
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 778
}
```
