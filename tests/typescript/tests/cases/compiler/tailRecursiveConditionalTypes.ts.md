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
        "name": "Trim",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
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
              "start": 10,
              "end": 11
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 20,
              "end": 26
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 26
          }
        ],
        "start": 9,
        "end": 27
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "typeArguments": null,
          "start": 34,
          "end": 35
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": " ",
                "cooked": " "
              },
              "tail": false,
              "start": 44,
              "end": 48
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 55,
              "end": 57
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 55
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 54,
                "end": 55
              },
              "start": 48,
              "end": 55
            }
          ],
          "start": 44,
          "end": 57
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Trim",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 64
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
                  "start": 65,
                  "end": 66
                },
                "typeArguments": null,
                "start": 65,
                "end": 66
              }
            ],
            "start": 64,
            "end": 67
          },
          "start": 60,
          "end": 67
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "typeArguments": null,
            "start": 74,
            "end": 75
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 84,
                "end": 87
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": " ",
                  "cooked": " "
                },
                "tail": true,
                "start": 94,
                "end": 97
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 94
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 93,
                  "end": 94
                },
                "start": 87,
                "end": 94
              }
            ],
            "start": 84,
            "end": 97
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Trim",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 104
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
                    "start": 105,
                    "end": 106
                  },
                  "typeArguments": null,
                  "start": 105,
                  "end": 106
                }
              ],
              "start": 104,
              "end": 107
            },
            "start": 100,
            "end": 107
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "typeArguments": null,
            "start": 114,
            "end": 115
          },
          "start": 74,
          "end": 115
        },
        "start": 34,
        "end": 115
      },
      "declare": false,
      "start": 0,
      "end": 116
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 126
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Trim",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 133
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "                                                                                                                                                hello ",
                "raw": "'                                                                                                                                                hello '",
                "start": 134,
                "end": 286
              },
              "start": 134,
              "end": 286
            }
          ],
          "start": 133,
          "end": 287
        },
        "start": 129,
        "end": 287
      },
      "declare": false,
      "start": 118,
      "end": 288
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 294,
        "end": 297
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Trim",
          "optional": false,
          "typeAnnotation": null,
          "start": 300,
          "end": 304
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": " hello                                                                                                                                                ",
                "raw": "' hello                                                                                                                                                '",
                "start": 305,
                "end": 457
              },
              "start": 305,
              "end": 457
            }
          ],
          "start": 304,
          "end": 458
        },
        "start": 300,
        "end": 458
      },
      "declare": false,
      "start": 289,
      "end": 459
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetChars",
        "optional": false,
        "typeAnnotation": null,
        "start": 466,
        "end": 474
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
              "start": 475,
              "end": 476
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 475,
            "end": 476
          }
        ],
        "start": 474,
        "end": 477
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetCharsRec",
          "optional": false,
          "typeAnnotation": null,
          "start": 480,
          "end": 491
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 492,
                "end": 493
              },
              "typeArguments": null,
              "start": 492,
              "end": 493
            },
            {
              "type": "TSNeverKeyword",
              "start": 495,
              "end": 500
            }
          ],
          "start": 491,
          "end": 501
        },
        "start": 480,
        "end": 501
      },
      "declare": false,
      "start": 461,
      "end": 502
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetCharsRec",
        "optional": false,
        "typeAnnotation": null,
        "start": 508,
        "end": 519
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
              "start": 520,
              "end": 521
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 520,
            "end": 521
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Acc",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 526
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 523,
            "end": 526
          }
        ],
        "start": 519,
        "end": 527
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 534,
            "end": 535
          },
          "typeArguments": null,
          "start": 534,
          "end": 535
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 544,
              "end": 547
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 557,
              "end": 560
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 570,
              "end": 572
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Char",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 553,
                  "end": 557
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 553,
                "end": 557
              },
              "start": 547,
              "end": 557
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 566,
                  "end": 570
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 566,
                "end": 570
              },
              "start": 560,
              "end": 570
            }
          ],
          "start": 544,
          "end": 572
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "GetCharsRec",
            "optional": false,
            "typeAnnotation": null,
            "start": 575,
            "end": 586
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 587,
                  "end": 591
                },
                "typeArguments": null,
                "start": 587,
                "end": 591
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Char",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 593,
                      "end": 597
                    },
                    "typeArguments": null,
                    "start": 593,
                    "end": 597
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Acc",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 600,
                      "end": 603
                    },
                    "typeArguments": null,
                    "start": 600,
                    "end": 603
                  }
                ],
                "start": 593,
                "end": 603
              }
            ],
            "start": 586,
            "end": 604
          },
          "start": 575,
          "end": 604
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Acc",
            "optional": false,
            "typeAnnotation": null,
            "start": 607,
            "end": 610
          },
          "typeArguments": null,
          "start": 607,
          "end": 610
        },
        "start": 534,
        "end": 610
      },
      "declare": false,
      "start": 503,
      "end": 611
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 618,
        "end": 621
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetChars",
          "optional": false,
          "typeAnnotation": null,
          "start": 624,
          "end": 632
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                "raw": "'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'",
                "start": 633,
                "end": 697
              },
              "start": 633,
              "end": 697
            }
          ],
          "start": 632,
          "end": 698
        },
        "start": 624,
        "end": 698
      },
      "declare": false,
      "start": 613,
      "end": 699
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Reverse",
        "optional": false,
        "typeAnnotation": null,
        "start": 706,
        "end": 713
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
              "start": 714,
              "end": 715
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 714,
            "end": 715
          }
        ],
        "start": 713,
        "end": 716
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSAnyKeyword",
            "start": 719,
            "end": 722
          },
          "start": 719,
          "end": 724
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 733,
            "end": 734
          },
          "typeArguments": null,
          "start": 733,
          "end": 734
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 737,
            "end": 738
          },
          "typeArguments": null,
          "start": 737,
          "end": 738
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReverseRec",
            "optional": false,
            "typeAnnotation": null,
            "start": 741,
            "end": 751
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
                  "start": 752,
                  "end": 753
                },
                "typeArguments": null,
                "start": 752,
                "end": 753
              },
              {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 755,
                "end": 757
              }
            ],
            "start": 751,
            "end": 758
          },
          "start": 741,
          "end": 758
        },
        "start": 719,
        "end": 758
      },
      "declare": false,
      "start": 701,
      "end": 759
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReverseRec",
        "optional": false,
        "typeAnnotation": null,
        "start": 765,
        "end": 775
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
              "start": 776,
              "end": 777
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 776,
            "end": 777
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Acc",
              "optional": false,
              "typeAnnotation": null,
              "start": 779,
              "end": 782
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 791,
                "end": 798
              },
              "start": 791,
              "end": 800
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 779,
            "end": 800
          }
        ],
        "start": 775,
        "end": 801
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 808,
            "end": 809
          },
          "typeArguments": null,
          "start": 808,
          "end": 809
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Head",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 825,
                  "end": 829
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 825,
                "end": 829
              },
              "start": 819,
              "end": 829
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tail",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 840,
                    "end": 844
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 840,
                  "end": 844
                },
                "start": 834,
                "end": 844
              },
              "start": 831,
              "end": 844
            }
          ],
          "start": 818,
          "end": 845
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReverseRec",
            "optional": false,
            "typeAnnotation": null,
            "start": 848,
            "end": 858
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 859,
                  "end": 863
                },
                "typeArguments": null,
                "start": 859,
                "end": 863
              },
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Head",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 866,
                      "end": 870
                    },
                    "typeArguments": null,
                    "start": 866,
                    "end": 870
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Acc",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 875,
                        "end": 878
                      },
                      "typeArguments": null,
                      "start": 875,
                      "end": 878
                    },
                    "start": 872,
                    "end": 878
                  }
                ],
                "start": 865,
                "end": 879
              }
            ],
            "start": 858,
            "end": 880
          },
          "start": 848,
          "end": 880
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Acc",
            "optional": false,
            "typeAnnotation": null,
            "start": 883,
            "end": 886
          },
          "typeArguments": null,
          "start": 883,
          "end": 886
        },
        "start": 808,
        "end": 886
      },
      "declare": false,
      "start": 760,
      "end": 887
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null,
        "start": 894,
        "end": 897
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reverse",
          "optional": false,
          "typeAnnotation": null,
          "start": 900,
          "end": 907
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 909,
                    "end": 910
                  },
                  "start": 909,
                  "end": 910
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 912,
                    "end": 913
                  },
                  "start": 912,
                  "end": 913
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 915,
                    "end": 916
                  },
                  "start": 915,
                  "end": 916
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 918,
                    "end": 919
                  },
                  "start": 918,
                  "end": 919
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 921,
                    "end": 922
                  },
                  "start": 921,
                  "end": 922
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 924,
                    "end": 925
                  },
                  "start": 924,
                  "end": 925
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 927,
                    "end": 928
                  },
                  "start": 927,
                  "end": 928
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 930,
                    "end": 931
                  },
                  "start": 930,
                  "end": 931
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 8,
                    "raw": "8",
                    "start": 933,
                    "end": 934
                  },
                  "start": 933,
                  "end": 934
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 9,
                    "raw": "9",
                    "start": 936,
                    "end": 937
                  },
                  "start": 936,
                  "end": 937
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 939,
                    "end": 940
                  },
                  "start": 939,
                  "end": 940
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 942,
                    "end": 943
                  },
                  "start": 942,
                  "end": 943
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 945,
                    "end": 946
                  },
                  "start": 945,
                  "end": 946
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 948,
                    "end": 949
                  },
                  "start": 948,
                  "end": 949
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 951,
                    "end": 952
                  },
                  "start": 951,
                  "end": 952
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 954,
                    "end": 955
                  },
                  "start": 954,
                  "end": 955
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 957,
                    "end": 958
                  },
                  "start": 957,
                  "end": 958
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 960,
                    "end": 961
                  },
                  "start": 960,
                  "end": 961
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 8,
                    "raw": "8",
                    "start": 963,
                    "end": 964
                  },
                  "start": 963,
                  "end": 964
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 9,
                    "raw": "9",
                    "start": 966,
                    "end": 967
                  },
                  "start": 966,
                  "end": 967
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 969,
                    "end": 970
                  },
                  "start": 969,
                  "end": 970
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 972,
                    "end": 973
                  },
                  "start": 972,
                  "end": 973
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 975,
                    "end": 976
                  },
                  "start": 975,
                  "end": 976
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 978,
                    "end": 979
                  },
                  "start": 978,
                  "end": 979
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 981,
                    "end": 982
                  },
                  "start": 981,
                  "end": 982
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 984,
                    "end": 985
                  },
                  "start": 984,
                  "end": 985
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 987,
                    "end": 988
                  },
                  "start": 987,
                  "end": 988
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 990,
                    "end": 991
                  },
                  "start": 990,
                  "end": 991
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 8,
                    "raw": "8",
                    "start": 993,
                    "end": 994
                  },
                  "start": 993,
                  "end": 994
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 9,
                    "raw": "9",
                    "start": 996,
                    "end": 997
                  },
                  "start": 996,
                  "end": 997
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 999,
                    "end": 1000
                  },
                  "start": 999,
                  "end": 1000
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1002,
                    "end": 1003
                  },
                  "start": 1002,
                  "end": 1003
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1005,
                    "end": 1006
                  },
                  "start": 1005,
                  "end": 1006
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1008,
                    "end": 1009
                  },
                  "start": 1008,
                  "end": 1009
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 1011,
                    "end": 1012
                  },
                  "start": 1011,
                  "end": 1012
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 1014,
                    "end": 1015
                  },
                  "start": 1014,
                  "end": 1015
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 1017,
                    "end": 1018
                  },
                  "start": 1017,
                  "end": 1018
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 1020,
                    "end": 1021
                  },
                  "start": 1020,
                  "end": 1021
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 8,
                    "raw": "8",
                    "start": 1023,
                    "end": 1024
                  },
                  "start": 1023,
                  "end": 1024
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 9,
                    "raw": "9",
                    "start": 1026,
                    "end": 1027
                  },
                  "start": 1026,
                  "end": 1027
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1029,
                    "end": 1030
                  },
                  "start": 1029,
                  "end": 1030
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1032,
                    "end": 1033
                  },
                  "start": 1032,
                  "end": 1033
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1035,
                    "end": 1036
                  },
                  "start": 1035,
                  "end": 1036
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1038,
                    "end": 1039
                  },
                  "start": 1038,
                  "end": 1039
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 1041,
                    "end": 1042
                  },
                  "start": 1041,
                  "end": 1042
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 1044,
                    "end": 1045
                  },
                  "start": 1044,
                  "end": 1045
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 1047,
                    "end": 1048
                  },
                  "start": 1047,
                  "end": 1048
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 1050,
                    "end": 1051
                  },
                  "start": 1050,
                  "end": 1051
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 8,
                    "raw": "8",
                    "start": 1053,
                    "end": 1054
                  },
                  "start": 1053,
                  "end": 1054
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 9,
                    "raw": "9",
                    "start": 1056,
                    "end": 1057
                  },
                  "start": 1056,
                  "end": 1057
                }
              ],
              "start": 908,
              "end": 1058
            }
          ],
          "start": 907,
          "end": 1059
        },
        "start": 900,
        "end": 1059
      },
      "declare": false,
      "start": 889,
      "end": 1060
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null,
        "start": 1066,
        "end": 1069
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reverse",
          "optional": false,
          "typeAnnotation": null,
          "start": 1072,
          "end": 1079
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1080,
                "end": 1086
              },
              "start": 1080,
              "end": 1088
            }
          ],
          "start": 1079,
          "end": 1089
        },
        "start": 1072,
        "end": 1089
      },
      "declare": false,
      "start": 1061,
      "end": 1090
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TupleOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 1097,
        "end": 1104
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
              "start": 1105,
              "end": 1106
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1105,
            "end": 1106
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1108,
              "end": 1109
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1118,
              "end": 1124
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1108,
            "end": 1124
          }
        ],
        "start": 1104,
        "end": 1125
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSNumberKeyword",
          "start": 1128,
          "end": 1134
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1143,
            "end": 1144
          },
          "typeArguments": null,
          "start": 1143,
          "end": 1144
        },
        "trueType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1147,
              "end": 1148
            },
            "typeArguments": null,
            "start": 1147,
            "end": 1148
          },
          "start": 1147,
          "end": 1150
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TupleOfRec",
            "optional": false,
            "typeAnnotation": null,
            "start": 1153,
            "end": 1163
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
                  "start": 1164,
                  "end": 1165
                },
                "typeArguments": null,
                "start": 1164,
                "end": 1165
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1167,
                  "end": 1168
                },
                "typeArguments": null,
                "start": 1167,
                "end": 1168
              },
              {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 1170,
                "end": 1172
              }
            ],
            "start": 1163,
            "end": 1173
          },
          "start": 1153,
          "end": 1173
        },
        "start": 1128,
        "end": 1173
      },
      "declare": false,
      "start": 1092,
      "end": 1174
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TupleOfRec",
        "optional": false,
        "typeAnnotation": null,
        "start": 1180,
        "end": 1190
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
              "start": 1191,
              "end": 1192
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1191,
            "end": 1192
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1194,
              "end": 1195
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1204,
              "end": 1210
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1194,
            "end": 1210
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Acc",
              "optional": false,
              "typeAnnotation": null,
              "start": 1212,
              "end": 1215
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1224,
                "end": 1231
              },
              "start": 1224,
              "end": 1233
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1212,
            "end": 1233
          }
        ],
        "start": 1190,
        "end": 1234
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Acc",
              "optional": false,
              "typeAnnotation": null,
              "start": 1241,
              "end": 1244
            },
            "typeArguments": null,
            "start": 1241,
            "end": 1244
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "\"length\"",
              "start": 1245,
              "end": 1253
            },
            "start": 1245,
            "end": 1253
          },
          "start": 1241,
          "end": 1254
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1263,
            "end": 1264
          },
          "typeArguments": null,
          "start": 1263,
          "end": 1264
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Acc",
            "optional": false,
            "typeAnnotation": null,
            "start": 1267,
            "end": 1270
          },
          "typeArguments": null,
          "start": 1267,
          "end": 1270
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TupleOfRec",
            "optional": false,
            "typeAnnotation": null,
            "start": 1273,
            "end": 1283
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
                  "start": 1284,
                  "end": 1285
                },
                "typeArguments": null,
                "start": 1284,
                "end": 1285
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1287,
                  "end": 1288
                },
                "typeArguments": null,
                "start": 1287,
                "end": 1288
              },
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1291,
                      "end": 1292
                    },
                    "typeArguments": null,
                    "start": 1291,
                    "end": 1292
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Acc",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1297,
                        "end": 1300
                      },
                      "typeArguments": null,
                      "start": 1297,
                      "end": 1300
                    },
                    "start": 1294,
                    "end": 1300
                  }
                ],
                "start": 1290,
                "end": 1301
              }
            ],
            "start": 1283,
            "end": 1302
          },
          "start": 1273,
          "end": 1302
        },
        "start": 1241,
        "end": 1302
      },
      "declare": false,
      "start": 1175,
      "end": 1303
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T40",
        "optional": false,
        "typeAnnotation": null,
        "start": 1310,
        "end": 1313
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 1316,
          "end": 1323
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 1324,
              "end": 1327
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 200,
                "raw": "200",
                "start": 1329,
                "end": 1332
              },
              "start": 1329,
              "end": 1332
            }
          ],
          "start": 1323,
          "end": 1333
        },
        "start": 1316,
        "end": 1333
      },
      "declare": false,
      "start": 1305,
      "end": 1334
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T41",
        "optional": false,
        "typeAnnotation": null,
        "start": 1340,
        "end": 1343
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 1346,
          "end": 1353
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 1354,
              "end": 1357
            },
            {
              "type": "TSNumberKeyword",
              "start": 1359,
              "end": 1365
            }
          ],
          "start": 1353,
          "end": 1366
        },
        "start": 1346,
        "end": 1366
      },
      "declare": false,
      "start": 1335,
      "end": 1367
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1367
}
```
