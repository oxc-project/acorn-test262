__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 335,
  "end": 3349,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 335,
      "end": 360,
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 344,
        "name": "One",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 345,
        "end": 360,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 347,
            "end": 358,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 350,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 358,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 352,
                "end": 358
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 361,
      "end": 386,
      "id": {
        "type": "Identifier",
        "start": 367,
        "end": 370,
        "name": "Two",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 371,
        "end": 386,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 373,
            "end": 384,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 373,
              "end": 376,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 376,
              "end": 384,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 378,
                "end": 384
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 387,
      "end": 418,
      "id": {
        "type": "Identifier",
        "start": 397,
        "end": 402,
        "name": "Three",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 403,
        "end": 418,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 405,
            "end": 416,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 405,
              "end": 408,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 408,
              "end": 416,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 410,
                "end": 416
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 419,
      "end": 447,
      "id": {
        "type": "Identifier",
        "start": 429,
        "end": 433,
        "name": "Four",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 433,
        "end": 436,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 434,
            "end": 435,
            "name": {
              "type": "Identifier",
              "start": 434,
              "end": 435,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 437,
        "end": 447,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 439,
            "end": 445,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 439,
              "end": 442,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 442,
              "end": 445,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 444,
                "end": 445,
                "typeName": {
                  "type": "Identifier",
                  "start": 444,
                  "end": 445,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 448,
      "end": 485,
      "id": {
        "type": "Identifier",
        "start": 458,
        "end": 462,
        "name": "Five",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 474,
          "end": 481,
          "expression": {
            "type": "Identifier",
            "start": 474,
            "end": 478,
            "name": "Four",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 478,
            "end": 481,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 479,
                "end": 480,
                "typeName": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 480,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 462,
        "end": 465,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 463,
            "end": 464,
            "name": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 482,
        "end": 485,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 486,
      "end": 521,
      "id": {
        "type": "Identifier",
        "start": 496,
        "end": 499,
        "name": "Six",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 499,
        "end": 505,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 500,
            "end": 501,
            "name": {
              "type": "Identifier",
              "start": 500,
              "end": 501,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 503,
            "end": 504,
            "name": {
              "type": "Identifier",
              "start": 503,
              "end": 504,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 506,
        "end": 521,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 512,
            "end": 519,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 512,
              "end": 515,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 515,
              "end": 518,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 517,
                "end": 518,
                "typeName": {
                  "type": "Identifier",
                  "start": 517,
                  "end": 518,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 523,
      "end": 607,
      "id": {
        "type": "Identifier",
        "start": 529,
        "end": 530,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 531,
        "end": 607,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 537,
            "end": 605,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 537,
              "end": 540,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 540,
              "end": 605,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 569,
                  "end": 573,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 570,
                    "end": 573,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 572,
                      "end": 573,
                      "typeName": {
                        "type": "Identifier",
                        "start": 572,
                        "end": 573,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 575,
                  "end": 579,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 576,
                    "end": 579,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 578,
                      "end": 579,
                      "typeName": {
                        "type": "Identifier",
                        "start": 578,
                        "end": 579,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 589,
                "end": 605,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 591,
                    "end": 603,
                    "argument": {
                      "type": "Literal",
                      "start": 598,
                      "end": 602,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 540,
                "end": 568,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 541,
                    "end": 552,
                    "name": {
                      "type": "Identifier",
                      "start": 541,
                      "end": 542,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 551,
                      "end": 552,
                      "typeName": {
                        "type": "Identifier",
                        "start": 551,
                        "end": 552,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 554,
                    "end": 567,
                    "name": {
                      "type": "Identifier",
                      "start": 554,
                      "end": 555,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 564,
                      "end": 567,
                      "typeName": {
                        "type": "Identifier",
                        "start": 564,
                        "end": 567,
                        "name": "One",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 580,
                "end": 588,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 582,
                  "end": 588
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 609,
      "end": 693,
      "id": {
        "type": "Identifier",
        "start": 615,
        "end": 616,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 645,
        "end": 693,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 651,
            "end": 691,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 651,
              "end": 654,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 654,
              "end": 691,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 655,
                  "end": 659,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 656,
                    "end": 659,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 658,
                      "end": 659,
                      "typeName": {
                        "type": "Identifier",
                        "start": 658,
                        "end": 659,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 661,
                  "end": 665,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 662,
                    "end": 665,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 664,
                      "end": 665,
                      "typeName": {
                        "type": "Identifier",
                        "start": 664,
                        "end": 665,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 675,
                "end": 691,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 677,
                    "end": 689,
                    "argument": {
                      "type": "Literal",
                      "start": 684,
                      "end": 688,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 666,
                "end": 674,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 668,
                  "end": 674
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 616,
        "end": 644,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 617,
            "end": 628,
            "name": {
              "type": "Identifier",
              "start": 617,
              "end": 618,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 627,
              "end": 628,
              "typeName": {
                "type": "Identifier",
                "start": 627,
                "end": 628,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 630,
            "end": 643,
            "name": {
              "type": "Identifier",
              "start": 630,
              "end": 631,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 640,
              "end": 643,
              "typeName": {
                "type": "Identifier",
                "start": 640,
                "end": 643,
                "name": "Two",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 695,
      "end": 781,
      "id": {
        "type": "Identifier",
        "start": 701,
        "end": 702,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 733,
        "end": 781,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 739,
            "end": 779,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 739,
              "end": 742,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 742,
              "end": 779,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 743,
                  "end": 747,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 744,
                    "end": 747,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 746,
                      "end": 747,
                      "typeName": {
                        "type": "Identifier",
                        "start": 746,
                        "end": 747,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 749,
                  "end": 753,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 750,
                    "end": 753,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 752,
                      "end": 753,
                      "typeName": {
                        "type": "Identifier",
                        "start": 752,
                        "end": 753,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 763,
                "end": 779,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 765,
                    "end": 777,
                    "argument": {
                      "type": "Literal",
                      "start": 772,
                      "end": 776,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 754,
                "end": 762,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 756,
                  "end": 762
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 702,
        "end": 732,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 703,
            "end": 714,
            "name": {
              "type": "Identifier",
              "start": 703,
              "end": 704,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 713,
              "end": 714,
              "typeName": {
                "type": "Identifier",
                "start": 713,
                "end": 714,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 716,
            "end": 731,
            "name": {
              "type": "Identifier",
              "start": 716,
              "end": 717,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 726,
              "end": 731,
              "typeName": {
                "type": "Identifier",
                "start": 726,
                "end": 731,
                "name": "Three",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 783,
      "end": 876,
      "id": {
        "type": "Identifier",
        "start": 789,
        "end": 790,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 828,
        "end": 876,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 834,
            "end": 874,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 834,
              "end": 837,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 837,
              "end": 874,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 838,
                  "end": 842,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 839,
                    "end": 842,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 841,
                      "end": 842,
                      "typeName": {
                        "type": "Identifier",
                        "start": 841,
                        "end": 842,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 844,
                  "end": 848,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 845,
                    "end": 848,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 847,
                      "end": 848,
                      "typeName": {
                        "type": "Identifier",
                        "start": 847,
                        "end": 848,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 858,
                "end": 874,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 860,
                    "end": 872,
                    "argument": {
                      "type": "Literal",
                      "start": 867,
                      "end": 871,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 849,
                "end": 857,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 851,
                  "end": 857
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 790,
        "end": 827,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 791,
            "end": 802,
            "name": {
              "type": "Identifier",
              "start": 791,
              "end": 792,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 801,
              "end": 802,
              "typeName": {
                "type": "Identifier",
                "start": 801,
                "end": 802,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 804,
            "end": 826,
            "name": {
              "type": "Identifier",
              "start": 804,
              "end": 805,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 814,
              "end": 826,
              "typeName": {
                "type": "Identifier",
                "start": 814,
                "end": 818,
                "name": "Four",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 818,
                "end": 826,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 819,
                    "end": 825
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 878,
      "end": 959,
      "id": {
        "type": "Identifier",
        "start": 888,
        "end": 889,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 889,
        "end": 926,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 890,
            "end": 901,
            "name": {
              "type": "Identifier",
              "start": 890,
              "end": 891,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 900,
              "end": 901,
              "typeName": {
                "type": "Identifier",
                "start": 900,
                "end": 901,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 903,
            "end": 925,
            "name": {
              "type": "Identifier",
              "start": 903,
              "end": 904,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 913,
              "end": 925,
              "typeName": {
                "type": "Identifier",
                "start": 913,
                "end": 917,
                "name": "Five",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 917,
                "end": 925,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 918,
                    "end": 924
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 927,
        "end": 959,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 933,
            "end": 957,
            "key": {
              "type": "Identifier",
              "start": 933,
              "end": 936,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 937,
                "end": 941,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 938,
                  "end": 941,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 940,
                    "end": 941,
                    "typeName": {
                      "type": "Identifier",
                      "start": 940,
                      "end": 941,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 943,
                "end": 947,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 944,
                  "end": 947,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 946,
                    "end": 947,
                    "typeName": {
                      "type": "Identifier",
                      "start": 946,
                      "end": 947,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 948,
              "end": 956,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 950,
                "end": 956
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 961,
      "end": 1050,
      "id": {
        "type": "Identifier",
        "start": 971,
        "end": 973,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 974,
        "end": 1050,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 980,
            "end": 1048,
            "key": {
              "type": "Identifier",
              "start": 980,
              "end": 983,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 983,
              "end": 1027,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 984,
                  "end": 995,
                  "name": {
                    "type": "Identifier",
                    "start": 984,
                    "end": 985,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 994,
                    "end": 995,
                    "typeName": {
                      "type": "Identifier",
                      "start": 994,
                      "end": 995,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 997,
                  "end": 1026,
                  "name": {
                    "type": "Identifier",
                    "start": 997,
                    "end": 998,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1007,
                    "end": 1026,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1007,
                      "end": 1010,
                      "name": "Six",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1010,
                      "end": 1026,
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
                      ]
                    }
                  },
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
                "start": 1028,
                "end": 1032,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1029,
                  "end": 1032,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1031,
                    "end": 1032,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1031,
                      "end": 1032,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1034,
                "end": 1038,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1035,
                  "end": 1038,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1037,
                    "end": 1038,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1037,
                      "end": 1038,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1039,
              "end": 1047,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1041,
                "end": 1047
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1052,
      "end": 1114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1056,
          "end": 1114,
          "id": {
            "type": "Identifier",
            "start": 1056,
            "end": 1114,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1057,
              "end": 1114,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1059,
                "end": 1114,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 1061,
                    "end": 1112,
                    "key": {
                      "type": "Identifier",
                      "start": 1061,
                      "end": 1064,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1064,
                      "end": 1092,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1065,
                          "end": 1076,
                          "name": {
                            "type": "Identifier",
                            "start": 1065,
                            "end": 1066,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1075,
                            "end": 1076,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1075,
                              "end": 1076,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 1078,
                          "end": 1091,
                          "name": {
                            "type": "Identifier",
                            "start": 1078,
                            "end": 1079,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1088,
                            "end": 1091,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1088,
                              "end": 1091,
                              "name": "One",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
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
                        "start": 1093,
                        "end": 1097,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1094,
                          "end": 1097,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1096,
                            "end": 1097,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1096,
                              "end": 1097,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1099,
                        "end": 1103,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1100,
                          "end": 1103,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1102,
                            "end": 1103,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1102,
                              "end": 1103,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1104,
                      "end": 1112,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1106,
                        "end": 1112
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1115,
      "end": 1186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1119,
          "end": 1185,
          "id": {
            "type": "Identifier",
            "start": 1119,
            "end": 1120,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1123,
            "end": 1185,
            "properties": [
              {
                "type": "Property",
                "start": 1125,
                "end": 1183,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1125,
                  "end": 1128,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1128,
                  "end": 1183,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1157,
                      "end": 1161,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1158,
                        "end": 1161,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1160,
                          "end": 1161,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1160,
                            "end": 1161,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1163,
                      "end": 1167,
                      "name": "y",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1164,
                        "end": 1167,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1166,
                          "end": 1167,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1166,
                            "end": 1167,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1169,
                    "end": 1183,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1171,
                        "end": 1181,
                        "argument": {
                          "type": "Literal",
                          "start": 1178,
                          "end": 1180,
                          "value": "",
                          "raw": "''"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1128,
                    "end": 1156,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1129,
                        "end": 1140,
                        "name": {
                          "type": "Identifier",
                          "start": 1129,
                          "end": 1130,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1139,
                          "end": 1140,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1139,
                            "end": 1140,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1142,
                        "end": 1155,
                        "name": {
                          "type": "Identifier",
                          "start": 1142,
                          "end": 1143,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1152,
                          "end": 1155,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1152,
                            "end": 1155,
                            "name": "Two",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1188,
      "end": 1208,
      "id": {
        "type": "Identifier",
        "start": 1197,
        "end": 1201,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1202,
          "end": 1206,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1203,
            "end": 1206,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1205,
              "end": 1206,
              "typeName": {
                "type": "Identifier",
                "start": 1205,
                "end": 1206,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1209,
      "end": 1229,
      "id": {
        "type": "Identifier",
        "start": 1218,
        "end": 1222,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1223,
          "end": 1227,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1224,
            "end": 1227,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1226,
              "end": 1227,
              "typeName": {
                "type": "Identifier",
                "start": 1226,
                "end": 1227,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1239,
      "end": 1264,
      "id": {
        "type": "Identifier",
        "start": 1248,
        "end": 1252,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1253,
          "end": 1259,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1254,
            "end": 1259,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1256,
              "end": 1259
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1261,
        "end": 1264,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1266,
      "end": 1297,
      "id": {
        "type": "Identifier",
        "start": 1275,
        "end": 1280,
        "name": "foo1b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1281,
          "end": 1295,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1282,
            "end": 1295,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1284,
              "end": 1295,
              "typeName": {
                "type": "Identifier",
                "start": 1284,
                "end": 1285,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1285,
                "end": 1295,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1286,
                    "end": 1289,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1286,
                      "end": 1289,
                      "name": "Two",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1291,
                    "end": 1294,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1291,
                      "end": 1294,
                      "name": "Two",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1298,
      "end": 1329,
      "id": {
        "type": "Identifier",
        "start": 1307,
        "end": 1312,
        "name": "foo1b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1313,
          "end": 1327,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1314,
            "end": 1327,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1316,
              "end": 1327,
              "typeName": {
                "type": "Identifier",
                "start": 1316,
                "end": 1317,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1317,
                "end": 1327,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1318,
                    "end": 1321,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1318,
                      "end": 1321,
                      "name": "Two",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1323,
                    "end": 1326,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1323,
                      "end": 1326,
                      "name": "Two",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1339,
      "end": 1365,
      "id": {
        "type": "Identifier",
        "start": 1348,
        "end": 1353,
        "name": "foo1b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1354,
          "end": 1360,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1355,
            "end": 1360,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1357,
              "end": 1360
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1362,
        "end": 1365,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1367,
      "end": 1402,
      "id": {
        "type": "Identifier",
        "start": 1376,
        "end": 1381,
        "name": "foo1c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1382,
          "end": 1400,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1383,
            "end": 1400,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1385,
              "end": 1400,
              "typeName": {
                "type": "Identifier",
                "start": 1385,
                "end": 1386,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1386,
                "end": 1400,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1387,
                    "end": 1392,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1387,
                      "end": 1392,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1394,
                    "end": 1399,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1394,
                      "end": 1399,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1403,
      "end": 1438,
      "id": {
        "type": "Identifier",
        "start": 1412,
        "end": 1417,
        "name": "foo1c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1418,
          "end": 1436,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1419,
            "end": 1436,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1421,
              "end": 1436,
              "typeName": {
                "type": "Identifier",
                "start": 1421,
                "end": 1422,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1422,
                "end": 1436,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1423,
                    "end": 1428,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1423,
                      "end": 1428,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1430,
                    "end": 1435,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1430,
                      "end": 1435,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1448,
      "end": 1474,
      "id": {
        "type": "Identifier",
        "start": 1457,
        "end": 1462,
        "name": "foo1c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1463,
          "end": 1469,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1464,
            "end": 1469,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1466,
              "end": 1469
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1471,
        "end": 1474,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1476,
      "end": 1524,
      "id": {
        "type": "Identifier",
        "start": 1485,
        "end": 1489,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1490,
          "end": 1522,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1491,
            "end": 1522,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1493,
              "end": 1522,
              "typeName": {
                "type": "Identifier",
                "start": 1493,
                "end": 1494,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1494,
                "end": 1522,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1495,
                    "end": 1507,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1495,
                      "end": 1499,
                      "name": "Five",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1499,
                      "end": 1507,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1500,
                          "end": 1506
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1509,
                    "end": 1521,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1509,
                      "end": 1513,
                      "name": "Five",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1513,
                      "end": 1521,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1514,
                          "end": 1520
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1525,
      "end": 1573,
      "id": {
        "type": "Identifier",
        "start": 1534,
        "end": 1538,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1539,
          "end": 1571,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1540,
            "end": 1571,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1542,
              "end": 1571,
              "typeName": {
                "type": "Identifier",
                "start": 1542,
                "end": 1543,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1543,
                "end": 1571,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1544,
                    "end": 1556,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1544,
                      "end": 1548,
                      "name": "Five",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1548,
                      "end": 1556,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1549,
                          "end": 1555
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1558,
                    "end": 1570,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1558,
                      "end": 1562,
                      "name": "Five",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1562,
                      "end": 1570,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1563,
                          "end": 1569
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1583,
      "end": 1608,
      "id": {
        "type": "Identifier",
        "start": 1592,
        "end": 1596,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1597,
          "end": 1603,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1598,
            "end": 1603,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1600,
              "end": 1603
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1605,
        "end": 1608,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1610,
      "end": 1637,
      "id": {
        "type": "Identifier",
        "start": 1619,
        "end": 1623,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1624,
          "end": 1635,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1625,
            "end": 1635,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1627,
              "end": 1635,
              "exprName": {
                "type": "Identifier",
                "start": 1634,
                "end": 1635,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1638,
      "end": 1665,
      "id": {
        "type": "Identifier",
        "start": 1647,
        "end": 1651,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1652,
          "end": 1663,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1653,
            "end": 1663,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1655,
              "end": 1663,
              "exprName": {
                "type": "Identifier",
                "start": 1662,
                "end": 1663,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1675,
      "end": 1700,
      "id": {
        "type": "Identifier",
        "start": 1684,
        "end": 1688,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1689,
          "end": 1695,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1690,
            "end": 1695,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1692,
              "end": 1695
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1697,
        "end": 1700,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1702,
      "end": 1729,
      "id": {
        "type": "Identifier",
        "start": 1711,
        "end": 1715,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1716,
          "end": 1727,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1717,
            "end": 1727,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1719,
              "end": 1727,
              "exprName": {
                "type": "Identifier",
                "start": 1726,
                "end": 1727,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1730,
      "end": 1757,
      "id": {
        "type": "Identifier",
        "start": 1739,
        "end": 1743,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1744,
          "end": 1755,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1745,
            "end": 1755,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1747,
              "end": 1755,
              "exprName": {
                "type": "Identifier",
                "start": 1754,
                "end": 1755,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1767,
      "end": 1792,
      "id": {
        "type": "Identifier",
        "start": 1776,
        "end": 1780,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1781,
          "end": 1787,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1782,
            "end": 1787,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1784,
              "end": 1787
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1789,
        "end": 1792,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1794,
      "end": 1814,
      "id": {
        "type": "Identifier",
        "start": 1803,
        "end": 1807,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1808,
          "end": 1812,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1809,
            "end": 1812,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1811,
              "end": 1812,
              "typeName": {
                "type": "Identifier",
                "start": 1811,
                "end": 1812,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1815,
      "end": 1845,
      "id": {
        "type": "Identifier",
        "start": 1824,
        "end": 1828,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1829,
          "end": 1843,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1830,
            "end": 1843,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1832,
              "end": 1843,
              "typeName": {
                "type": "Identifier",
                "start": 1832,
                "end": 1833,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1833,
                "end": 1843,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1834,
                    "end": 1837,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1834,
                      "end": 1837,
                      "name": "Two",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1839,
                    "end": 1842,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1839,
                      "end": 1842,
                      "name": "Two",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1852,
      "end": 1877,
      "id": {
        "type": "Identifier",
        "start": 1861,
        "end": 1865,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1866,
          "end": 1872,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1867,
            "end": 1872,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1869,
              "end": 1872
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1874,
        "end": 1877,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1879,
      "end": 1900,
      "id": {
        "type": "Identifier",
        "start": 1888,
        "end": 1893,
        "name": "foo5b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1894,
          "end": 1898,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1895,
            "end": 1898,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1897,
              "end": 1898,
              "typeName": {
                "type": "Identifier",
                "start": 1897,
                "end": 1898,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1901,
      "end": 1936,
      "id": {
        "type": "Identifier",
        "start": 1910,
        "end": 1915,
        "name": "foo5b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1916,
          "end": 1934,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1917,
            "end": 1934,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1919,
              "end": 1934,
              "typeName": {
                "type": "Identifier",
                "start": 1919,
                "end": 1920,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1920,
                "end": 1934,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1921,
                    "end": 1926,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1921,
                      "end": 1926,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1928,
                    "end": 1933,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1928,
                      "end": 1933,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1943,
      "end": 1969,
      "id": {
        "type": "Identifier",
        "start": 1952,
        "end": 1957,
        "name": "foo5b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1958,
          "end": 1964,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1959,
            "end": 1964,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1961,
              "end": 1964
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1966,
        "end": 1969,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1971,
      "end": 2006,
      "id": {
        "type": "Identifier",
        "start": 1980,
        "end": 1985,
        "name": "foo5c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1986,
          "end": 2004,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1987,
            "end": 2004,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1989,
              "end": 2004,
              "typeName": {
                "type": "Identifier",
                "start": 1989,
                "end": 1990,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1990,
                "end": 2004,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1991,
                    "end": 1996,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1991,
                      "end": 1996,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1998,
                    "end": 2003,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1998,
                      "end": 2003,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2007,
      "end": 2056,
      "id": {
        "type": "Identifier",
        "start": 2016,
        "end": 2021,
        "name": "foo5c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2022,
          "end": 2054,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2023,
            "end": 2054,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2025,
              "end": 2054,
              "typeName": {
                "type": "Identifier",
                "start": 2025,
                "end": 2026,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2026,
                "end": 2054,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2027,
                    "end": 2039,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2027,
                      "end": 2031,
                      "name": "Four",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2031,
                      "end": 2039,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2032,
                          "end": 2038
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2041,
                    "end": 2053,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2041,
                      "end": 2045,
                      "name": "Four",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2045,
                      "end": 2053,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2046,
                          "end": 2052
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2066,
      "end": 2092,
      "id": {
        "type": "Identifier",
        "start": 2075,
        "end": 2080,
        "name": "foo5c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2081,
          "end": 2087,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2082,
            "end": 2087,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2084,
              "end": 2087
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2089,
        "end": 2092,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2094,
      "end": 2129,
      "id": {
        "type": "Identifier",
        "start": 2103,
        "end": 2108,
        "name": "foo6c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2109,
          "end": 2127,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2110,
            "end": 2127,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2112,
              "end": 2127,
              "typeName": {
                "type": "Identifier",
                "start": 2112,
                "end": 2113,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2113,
                "end": 2127,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2114,
                    "end": 2119,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2114,
                      "end": 2119,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2121,
                    "end": 2126,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2121,
                      "end": 2126,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2130,
      "end": 2179,
      "id": {
        "type": "Identifier",
        "start": 2139,
        "end": 2144,
        "name": "foo6c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2145,
          "end": 2177,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2146,
            "end": 2177,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2148,
              "end": 2177,
              "typeName": {
                "type": "Identifier",
                "start": 2148,
                "end": 2149,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2149,
                "end": 2177,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2150,
                    "end": 2162,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2150,
                      "end": 2154,
                      "name": "Four",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2154,
                      "end": 2162,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2155,
                          "end": 2161
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2164,
                    "end": 2176,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2164,
                      "end": 2168,
                      "name": "Four",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2168,
                      "end": 2176,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2169,
                          "end": 2175
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2189,
      "end": 2215,
      "id": {
        "type": "Identifier",
        "start": 2198,
        "end": 2203,
        "name": "foo6c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2204,
          "end": 2210,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2205,
            "end": 2210,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2207,
              "end": 2210
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2212,
        "end": 2215,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2217,
      "end": 2237,
      "id": {
        "type": "Identifier",
        "start": 2226,
        "end": 2230,
        "name": "foo6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2231,
          "end": 2235,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2232,
            "end": 2235,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2234,
              "end": 2235,
              "typeName": {
                "type": "Identifier",
                "start": 2234,
                "end": 2235,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2238,
      "end": 2286,
      "id": {
        "type": "Identifier",
        "start": 2247,
        "end": 2251,
        "name": "foo6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2252,
          "end": 2284,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2253,
            "end": 2284,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2255,
              "end": 2284,
              "typeName": {
                "type": "Identifier",
                "start": 2255,
                "end": 2256,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2256,
                "end": 2284,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2257,
                    "end": 2269,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2257,
                      "end": 2261,
                      "name": "Five",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2261,
                      "end": 2269,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2262,
                          "end": 2268
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2271,
                    "end": 2283,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2271,
                      "end": 2275,
                      "name": "Five",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2275,
                      "end": 2283,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2276,
                          "end": 2282
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2293,
      "end": 2318,
      "id": {
        "type": "Identifier",
        "start": 2302,
        "end": 2306,
        "name": "foo6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2307,
          "end": 2313,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2308,
            "end": 2313,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2310,
              "end": 2313
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2315,
        "end": 2318,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2320,
      "end": 2340,
      "id": {
        "type": "Identifier",
        "start": 2329,
        "end": 2333,
        "name": "foo7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2334,
          "end": 2338,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2335,
            "end": 2338,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2337,
              "end": 2338,
              "typeName": {
                "type": "Identifier",
                "start": 2337,
                "end": 2338,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2341,
      "end": 2368,
      "id": {
        "type": "Identifier",
        "start": 2350,
        "end": 2354,
        "name": "foo7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2355,
          "end": 2366,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2356,
            "end": 2366,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2358,
              "end": 2366,
              "exprName": {
                "type": "Identifier",
                "start": 2365,
                "end": 2366,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2378,
      "end": 2403,
      "id": {
        "type": "Identifier",
        "start": 2387,
        "end": 2391,
        "name": "foo7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2392,
          "end": 2398,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2393,
            "end": 2398,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2395,
              "end": 2398
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2400,
        "end": 2403,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2405,
      "end": 2435,
      "id": {
        "type": "Identifier",
        "start": 2414,
        "end": 2418,
        "name": "foo8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2419,
          "end": 2433,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2420,
            "end": 2433,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2422,
              "end": 2433,
              "typeName": {
                "type": "Identifier",
                "start": 2422,
                "end": 2423,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2423,
                "end": 2433,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2424,
                    "end": 2427,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2424,
                      "end": 2427,
                      "name": "Two",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2429,
                    "end": 2432,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2429,
                      "end": 2432,
                      "name": "Two",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2436,
      "end": 2484,
      "id": {
        "type": "Identifier",
        "start": 2445,
        "end": 2449,
        "name": "foo8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2450,
          "end": 2482,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2451,
            "end": 2482,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2453,
              "end": 2482,
              "typeName": {
                "type": "Identifier",
                "start": 2453,
                "end": 2454,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2454,
                "end": 2482,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2455,
                    "end": 2467,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2455,
                      "end": 2459,
                      "name": "Five",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2459,
                      "end": 2467,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2460,
                          "end": 2466
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2469,
                    "end": 2481,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2469,
                      "end": 2473,
                      "name": "Five",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2473,
                      "end": 2481,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2474,
                          "end": 2480
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2494,
      "end": 2519,
      "id": {
        "type": "Identifier",
        "start": 2503,
        "end": 2507,
        "name": "foo8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2508,
          "end": 2514,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2509,
            "end": 2514,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2511,
              "end": 2514
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2516,
        "end": 2519,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2521,
      "end": 2551,
      "id": {
        "type": "Identifier",
        "start": 2530,
        "end": 2534,
        "name": "foo9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2535,
          "end": 2549,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2536,
            "end": 2549,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2538,
              "end": 2549,
              "typeName": {
                "type": "Identifier",
                "start": 2538,
                "end": 2539,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2539,
                "end": 2549,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2540,
                    "end": 2543,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2540,
                      "end": 2543,
                      "name": "Two",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2545,
                    "end": 2548,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2545,
                      "end": 2548,
                      "name": "Two",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2552,
      "end": 2586,
      "id": {
        "type": "Identifier",
        "start": 2561,
        "end": 2565,
        "name": "foo9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2566,
          "end": 2584,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2567,
            "end": 2584,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2569,
              "end": 2584,
              "typeName": {
                "type": "Identifier",
                "start": 2569,
                "end": 2570,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2570,
                "end": 2584,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2571,
                    "end": 2576,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2571,
                      "end": 2576,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2578,
                    "end": 2583,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2578,
                      "end": 2583,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2596,
      "end": 2621,
      "id": {
        "type": "Identifier",
        "start": 2605,
        "end": 2609,
        "name": "foo9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2610,
          "end": 2616,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2611,
            "end": 2616,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2613,
              "end": 2616
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2618,
        "end": 2621,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2623,
      "end": 2654,
      "id": {
        "type": "Identifier",
        "start": 2632,
        "end": 2637,
        "name": "foo10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2638,
          "end": 2652,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2639,
            "end": 2652,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2641,
              "end": 2652,
              "typeName": {
                "type": "Identifier",
                "start": 2641,
                "end": 2642,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2642,
                "end": 2652,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2643,
                    "end": 2646,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2643,
                      "end": 2646,
                      "name": "Two",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2648,
                    "end": 2651,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2648,
                      "end": 2651,
                      "name": "Two",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2655,
      "end": 2683,
      "id": {
        "type": "Identifier",
        "start": 2664,
        "end": 2669,
        "name": "foo10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2670,
          "end": 2681,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2671,
            "end": 2681,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2673,
              "end": 2681,
              "exprName": {
                "type": "Identifier",
                "start": 2680,
                "end": 2681,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2690,
      "end": 2716,
      "id": {
        "type": "Identifier",
        "start": 2699,
        "end": 2704,
        "name": "foo10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2705,
          "end": 2711,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2706,
            "end": 2711,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2708,
              "end": 2711
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2713,
        "end": 2716,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2718,
      "end": 2749,
      "id": {
        "type": "Identifier",
        "start": 2727,
        "end": 2732,
        "name": "foo11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2733,
          "end": 2747,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2734,
            "end": 2747,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2736,
              "end": 2747,
              "typeName": {
                "type": "Identifier",
                "start": 2736,
                "end": 2737,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2737,
                "end": 2747,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2738,
                    "end": 2741,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2738,
                      "end": 2741,
                      "name": "Two",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2743,
                    "end": 2746,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2743,
                      "end": 2746,
                      "name": "Two",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2750,
      "end": 2778,
      "id": {
        "type": "Identifier",
        "start": 2759,
        "end": 2764,
        "name": "foo11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2765,
          "end": 2776,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2766,
            "end": 2776,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2768,
              "end": 2776,
              "exprName": {
                "type": "Identifier",
                "start": 2775,
                "end": 2776,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2785,
      "end": 2811,
      "id": {
        "type": "Identifier",
        "start": 2794,
        "end": 2799,
        "name": "foo11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2800,
          "end": 2806,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2801,
            "end": 2806,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2803,
              "end": 2806
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2808,
        "end": 2811,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2813,
      "end": 2862,
      "id": {
        "type": "Identifier",
        "start": 2822,
        "end": 2827,
        "name": "foo12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2828,
          "end": 2860,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2829,
            "end": 2860,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2831,
              "end": 2860,
              "typeName": {
                "type": "Identifier",
                "start": 2831,
                "end": 2832,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2832,
                "end": 2860,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2833,
                    "end": 2845,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2833,
                      "end": 2837,
                      "name": "Five",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2837,
                      "end": 2845,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2838,
                          "end": 2844
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2847,
                    "end": 2859,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2847,
                      "end": 2851,
                      "name": "Five",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2851,
                      "end": 2859,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2852,
                          "end": 2858
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2863,
      "end": 2898,
      "id": {
        "type": "Identifier",
        "start": 2872,
        "end": 2877,
        "name": "foo12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2878,
          "end": 2896,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2879,
            "end": 2896,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2881,
              "end": 2896,
              "typeName": {
                "type": "Identifier",
                "start": 2881,
                "end": 2882,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2882,
                "end": 2896,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2883,
                    "end": 2888,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2883,
                      "end": 2888,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2890,
                    "end": 2895,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2890,
                      "end": 2895,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2908,
      "end": 2934,
      "id": {
        "type": "Identifier",
        "start": 2917,
        "end": 2922,
        "name": "foo12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2923,
          "end": 2929,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2924,
            "end": 2929,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2926,
              "end": 2929
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2931,
        "end": 2934,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2936,
      "end": 2959,
      "id": {
        "type": "Identifier",
        "start": 2945,
        "end": 2951,
        "name": "foo12b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2952,
          "end": 2957,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2953,
            "end": 2957,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2955,
              "end": 2957,
              "typeName": {
                "type": "Identifier",
                "start": 2955,
                "end": 2957,
                "name": "I2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2960,
      "end": 2996,
      "id": {
        "type": "Identifier",
        "start": 2969,
        "end": 2975,
        "name": "foo12b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2976,
          "end": 2994,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2977,
            "end": 2994,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2979,
              "end": 2994,
              "typeName": {
                "type": "Identifier",
                "start": 2979,
                "end": 2980,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2980,
                "end": 2994,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2981,
                    "end": 2986,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2981,
                      "end": 2986,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2988,
                    "end": 2993,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2988,
                      "end": 2993,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3003,
      "end": 3030,
      "id": {
        "type": "Identifier",
        "start": 3012,
        "end": 3018,
        "name": "foo12b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3019,
          "end": 3025,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3020,
            "end": 3025,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3022,
              "end": 3025
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3027,
        "end": 3030,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 3032,
      "end": 3081,
      "id": {
        "type": "Identifier",
        "start": 3041,
        "end": 3046,
        "name": "foo13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3047,
          "end": 3079,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3048,
            "end": 3079,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3050,
              "end": 3079,
              "typeName": {
                "type": "Identifier",
                "start": 3050,
                "end": 3051,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3051,
                "end": 3079,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3052,
                    "end": 3064,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3052,
                      "end": 3056,
                      "name": "Five",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3056,
                      "end": 3064,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 3057,
                          "end": 3063
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3066,
                    "end": 3078,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3066,
                      "end": 3070,
                      "name": "Five",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3070,
                      "end": 3078,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 3071,
                          "end": 3077
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 3082,
      "end": 3110,
      "id": {
        "type": "Identifier",
        "start": 3091,
        "end": 3096,
        "name": "foo13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3097,
          "end": 3108,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3098,
            "end": 3108,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 3100,
              "end": 3108,
              "exprName": {
                "type": "Identifier",
                "start": 3107,
                "end": 3108,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3117,
      "end": 3143,
      "id": {
        "type": "Identifier",
        "start": 3126,
        "end": 3131,
        "name": "foo13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3132,
          "end": 3138,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3133,
            "end": 3138,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3135,
              "end": 3138
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3140,
        "end": 3143,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 3145,
      "end": 3194,
      "id": {
        "type": "Identifier",
        "start": 3154,
        "end": 3159,
        "name": "foo14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3160,
          "end": 3192,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3161,
            "end": 3192,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3163,
              "end": 3192,
              "typeName": {
                "type": "Identifier",
                "start": 3163,
                "end": 3164,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3164,
                "end": 3192,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3165,
                    "end": 3177,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3165,
                      "end": 3169,
                      "name": "Five",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3169,
                      "end": 3177,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 3170,
                          "end": 3176
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3179,
                    "end": 3191,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3179,
                      "end": 3183,
                      "name": "Five",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3183,
                      "end": 3191,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 3184,
                          "end": 3190
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 3195,
      "end": 3223,
      "id": {
        "type": "Identifier",
        "start": 3204,
        "end": 3209,
        "name": "foo14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3210,
          "end": 3221,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3211,
            "end": 3221,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 3213,
              "end": 3221,
              "exprName": {
                "type": "Identifier",
                "start": 3220,
                "end": 3221,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3230,
      "end": 3256,
      "id": {
        "type": "Identifier",
        "start": 3239,
        "end": 3244,
        "name": "foo14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3245,
          "end": 3251,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3246,
            "end": 3251,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3248,
              "end": 3251
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3253,
        "end": 3256,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 3258,
      "end": 3280,
      "id": {
        "type": "Identifier",
        "start": 3267,
        "end": 3272,
        "name": "foo15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3273,
          "end": 3278,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3274,
            "end": 3278,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3276,
              "end": 3278,
              "typeName": {
                "type": "Identifier",
                "start": 3276,
                "end": 3278,
                "name": "I2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 3281,
      "end": 3316,
      "id": {
        "type": "Identifier",
        "start": 3290,
        "end": 3295,
        "name": "foo15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3296,
          "end": 3314,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3297,
            "end": 3314,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3299,
              "end": 3314,
              "typeName": {
                "type": "Identifier",
                "start": 3299,
                "end": 3300,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3300,
                "end": 3314,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3301,
                    "end": 3306,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3301,
                      "end": 3306,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3308,
                    "end": 3313,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3308,
                      "end": 3313,
                      "name": "Three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3323,
      "end": 3349,
      "id": {
        "type": "Identifier",
        "start": 3332,
        "end": 3337,
        "name": "foo15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3338,
          "end": 3344,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3339,
            "end": 3344,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3341,
              "end": 3344
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3346,
        "end": 3349,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
