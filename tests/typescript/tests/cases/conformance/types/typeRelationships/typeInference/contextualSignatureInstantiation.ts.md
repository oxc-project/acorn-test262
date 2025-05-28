__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 495,
  "end": 1460,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 495,
      "end": 555,
      "id": {
        "type": "Identifier",
        "start": 512,
        "end": 515,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 515,
        "end": 518,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 516,
            "end": 517,
            "name": {
              "type": "Identifier",
              "start": 516,
              "end": 517,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
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
          "start": 519,
          "end": 550,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 521,
            "end": 550,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 523,
              "end": 550,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 524,
                  "end": 533,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 525,
                    "end": 533,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 527,
                      "end": 533
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 535,
                  "end": 544,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 536,
                    "end": 544,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 538,
                      "end": 544
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 546,
                "end": 550,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 549,
                  "end": 550,
                  "typeName": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 550,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 551,
        "end": 554,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 553,
          "end": 554,
          "typeName": {
            "type": "Identifier",
            "start": 553,
            "end": 554,
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
      "type": "TSDeclareFunction",
      "start": 556,
      "end": 624,
      "id": {
        "type": "Identifier",
        "start": 573,
        "end": 576,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 576,
        "end": 585,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 577,
            "end": 578,
            "name": {
              "type": "Identifier",
              "start": 577,
              "end": 578,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 580,
            "end": 581,
            "name": {
              "type": "Identifier",
              "start": 580,
              "end": 581,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 583,
            "end": 584,
            "name": {
              "type": "Identifier",
              "start": 583,
              "end": 584,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
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
          "start": 586,
          "end": 590,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 587,
            "end": 590,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 589,
              "end": 590,
              "typeName": {
                "type": "Identifier",
                "start": 589,
                "end": 590,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 592,
          "end": 596,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 593,
            "end": 596,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 595,
              "end": 596,
              "typeName": {
                "type": "Identifier",
                "start": 595,
                "end": 596,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 598,
          "end": 619,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 600,
            "end": 619,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 602,
              "end": 619,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 603,
                  "end": 607,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 604,
                    "end": 607,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 606,
                      "end": 607,
                      "typeName": {
                        "type": "Identifier",
                        "start": 606,
                        "end": 607,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 609,
                  "end": 613,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 610,
                    "end": 613,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 612,
                      "end": 613,
                      "typeName": {
                        "type": "Identifier",
                        "start": 612,
                        "end": 613,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 615,
                "end": 619,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 618,
                  "end": 619,
                  "typeName": {
                    "type": "Identifier",
                    "start": 618,
                    "end": 619,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 620,
        "end": 623,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 622,
          "end": 623,
          "typeName": {
            "type": "Identifier",
            "start": 622,
            "end": 623,
            "decorators": [],
            "name": "V",
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
      "type": "TSDeclareFunction",
      "start": 625,
      "end": 690,
      "id": {
        "type": "Identifier",
        "start": 642,
        "end": 645,
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 645,
        "end": 651,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 646,
            "end": 647,
            "name": {
              "type": "Identifier",
              "start": 646,
              "end": 647,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 649,
            "end": 650,
            "name": {
              "type": "Identifier",
              "start": 649,
              "end": 650,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
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
          "start": 652,
          "end": 656,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 653,
            "end": 656,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 655,
              "end": 656,
              "typeName": {
                "type": "Identifier",
                "start": 655,
                "end": 656,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 658,
          "end": 662,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 659,
            "end": 662,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 661,
              "end": 662,
              "typeName": {
                "type": "Identifier",
                "start": 661,
                "end": 662,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 664,
          "end": 685,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 666,
            "end": 685,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 668,
              "end": 685,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 669,
                  "end": 673,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 670,
                    "end": 673,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 672,
                      "end": 673,
                      "typeName": {
                        "type": "Identifier",
                        "start": 672,
                        "end": 673,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 675,
                  "end": 679,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 676,
                    "end": 679,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 678,
                      "end": 679,
                      "typeName": {
                        "type": "Identifier",
                        "start": 678,
                        "end": 679,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 681,
                "end": 685,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 684,
                  "end": 685,
                  "typeName": {
                    "type": "Identifier",
                    "start": 684,
                    "end": 685,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 686,
        "end": 689,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 688,
          "end": 689,
          "typeName": {
            "type": "Identifier",
            "start": 688,
            "end": 689,
            "decorators": [],
            "name": "U",
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
      "type": "TSDeclareFunction",
      "start": 692,
      "end": 729,
      "id": {
        "type": "Identifier",
        "start": 709,
        "end": 710,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 710,
        "end": 713,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 711,
            "end": 712,
            "name": {
              "type": "Identifier",
              "start": 711,
              "end": 712,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
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
          "start": 714,
          "end": 718,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 715,
            "end": 718,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 717,
              "end": 718,
              "typeName": {
                "type": "Identifier",
                "start": 717,
                "end": 718,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 720,
          "end": 724,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 721,
            "end": 724,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 723,
              "end": 724,
              "typeName": {
                "type": "Identifier",
                "start": 723,
                "end": 724,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 725,
        "end": 728,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 727,
          "end": 728,
          "typeName": {
            "type": "Identifier",
            "start": 727,
            "end": 728,
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
      "type": "TSDeclareFunction",
      "start": 730,
      "end": 778,
      "id": {
        "type": "Identifier",
        "start": 747,
        "end": 748,
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 748,
        "end": 754,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 749,
            "end": 750,
            "name": {
              "type": "Identifier",
              "start": 749,
              "end": 750,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 752,
            "end": 753,
            "name": {
              "type": "Identifier",
              "start": 752,
              "end": 753,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
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
          "start": 755,
          "end": 759,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 756,
            "end": 759,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 758,
              "end": 759,
              "typeName": {
                "type": "Identifier",
                "start": 758,
                "end": 759,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 761,
          "end": 765,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 762,
            "end": 765,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 764,
              "end": 765,
              "typeName": {
                "type": "Identifier",
                "start": 764,
                "end": 765,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 766,
        "end": 777,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 768,
          "end": 777,
          "types": [
            {
              "type": "TSArrayType",
              "start": 768,
              "end": 771,
              "elementType": {
                "type": "TSTypeReference",
                "start": 768,
                "end": 769,
                "typeName": {
                  "type": "Identifier",
                  "start": 768,
                  "end": 769,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSArrayType",
              "start": 774,
              "end": 777,
              "elementType": {
                "type": "TSTypeReference",
                "start": 774,
                "end": 775,
                "typeName": {
                  "type": "Identifier",
                  "start": 774,
                  "end": 775,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 780,
      "end": 794,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 784,
          "end": 793,
          "id": {
            "type": "Identifier",
            "start": 784,
            "end": 793,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 785,
              "end": 793,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 787,
                "end": 793
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 795,
      "end": 816,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 799,
          "end": 815,
          "id": {
            "type": "Identifier",
            "start": 799,
            "end": 800,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 803,
            "end": 815,
            "callee": {
              "type": "Identifier",
              "start": 803,
              "end": 806,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 807,
                "end": 808,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 810,
                "end": 811,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Identifier",
                "start": 813,
                "end": 814,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 842,
      "end": 863,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 846,
          "end": 862,
          "id": {
            "type": "Identifier",
            "start": 846,
            "end": 847,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 850,
            "end": 862,
            "callee": {
              "type": "Identifier",
              "start": 850,
              "end": 853,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 854,
                "end": 855,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 857,
                "end": 858,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Identifier",
                "start": 860,
                "end": 861,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 890,
      "end": 913,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 894,
          "end": 912,
          "id": {
            "type": "Identifier",
            "start": 894,
            "end": 912,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 895,
              "end": 912,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 897,
                "end": 912,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 897,
                    "end": 903
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 906,
                    "end": 912
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 914,
      "end": 929,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 918,
          "end": 928,
          "id": {
            "type": "Identifier",
            "start": 918,
            "end": 919,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 922,
            "end": 928,
            "callee": {
              "type": "Identifier",
              "start": 922,
              "end": 925,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 926,
                "end": 927,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 988,
      "end": 1013,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 992,
          "end": 1012,
          "id": {
            "type": "Identifier",
            "start": 992,
            "end": 993,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 996,
            "end": 1012,
            "callee": {
              "type": "Identifier",
              "start": 996,
              "end": 999,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1000,
                "end": 1001,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1003,
                "end": 1008,
                "value": "one",
                "raw": "\"one\""
              },
              {
                "type": "Identifier",
                "start": 1010,
                "end": 1011,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1062,
      "end": 1087,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1066,
          "end": 1086,
          "id": {
            "type": "Identifier",
            "start": 1066,
            "end": 1067,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1070,
            "end": 1086,
            "callee": {
              "type": "Identifier",
              "start": 1070,
              "end": 1073,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1074,
                "end": 1079,
                "value": "one",
                "raw": "\"one\""
              },
              {
                "type": "Literal",
                "start": 1081,
                "end": 1082,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Identifier",
                "start": 1084,
                "end": 1085,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1136,
      "end": 1157,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1140,
          "end": 1156,
          "id": {
            "type": "Identifier",
            "start": 1140,
            "end": 1141,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1144,
            "end": 1156,
            "callee": {
              "type": "Identifier",
              "start": 1144,
              "end": 1147,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1148,
                "end": 1149,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1151,
                "end": 1152,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1154,
                "end": 1155,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1193,
      "end": 1220,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1197,
          "end": 1219,
          "id": {
            "type": "Identifier",
            "start": 1197,
            "end": 1219,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1198,
              "end": 1219,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1200,
                "end": 1219,
                "types": [
                  {
                    "type": "TSArrayType",
                    "start": 1200,
                    "end": 1208,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 1200,
                      "end": 1206
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 1211,
                    "end": 1219,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1211,
                      "end": 1217
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1221,
      "end": 1236,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1225,
          "end": 1235,
          "id": {
            "type": "Identifier",
            "start": 1225,
            "end": 1226,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1229,
            "end": 1235,
            "callee": {
              "type": "Identifier",
              "start": 1229,
              "end": 1232,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1233,
                "end": 1234,
                "decorators": [],
                "name": "h",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1281,
      "end": 1306,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1285,
          "end": 1305,
          "id": {
            "type": "Identifier",
            "start": 1285,
            "end": 1286,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1289,
            "end": 1305,
            "callee": {
              "type": "Identifier",
              "start": 1289,
              "end": 1292,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1293,
                "end": 1294,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1296,
                "end": 1301,
                "value": "one",
                "raw": "\"one\""
              },
              {
                "type": "Identifier",
                "start": 1303,
                "end": 1304,
                "decorators": [],
                "name": "h",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1341,
      "end": 1366,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1345,
          "end": 1365,
          "id": {
            "type": "Identifier",
            "start": 1345,
            "end": 1346,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1349,
            "end": 1365,
            "callee": {
              "type": "Identifier",
              "start": 1349,
              "end": 1352,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1353,
                "end": 1358,
                "value": "one",
                "raw": "\"one\""
              },
              {
                "type": "Literal",
                "start": 1360,
                "end": 1361,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Identifier",
                "start": 1363,
                "end": 1364,
                "decorators": [],
                "name": "h",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1401,
      "end": 1422,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1405,
          "end": 1421,
          "id": {
            "type": "Identifier",
            "start": 1405,
            "end": 1406,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1409,
            "end": 1421,
            "callee": {
              "type": "Identifier",
              "start": 1409,
              "end": 1412,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1413,
                "end": 1414,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1416,
                "end": 1417,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1419,
                "end": 1420,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
