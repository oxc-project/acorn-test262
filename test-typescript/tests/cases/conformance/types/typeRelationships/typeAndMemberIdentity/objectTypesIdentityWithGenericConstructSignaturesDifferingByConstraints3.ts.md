__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 335,
  "end": 2774,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 335,
      "end": 360,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 345,
        "end": 360,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 347,
            "end": 358,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 350,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 344,
        "decorators": [],
        "name": "One",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 361,
      "end": 386,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 371,
        "end": 386,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 373,
            "end": 384,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 373,
              "end": 376,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 367,
        "end": 370,
        "decorators": [],
        "name": "Two",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 387,
      "end": 418,
      "body": {
        "type": "TSInterfaceBody",
        "start": 403,
        "end": 418,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 405,
            "end": 416,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 405,
              "end": 408,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 408,
              "end": 416,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 410,
                "end": 416
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 397,
        "end": 402,
        "decorators": [],
        "name": "Three",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 419,
      "end": 447,
      "body": {
        "type": "TSInterfaceBody",
        "start": 437,
        "end": 447,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 439,
            "end": 445,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 439,
              "end": 442,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 442,
              "end": 445,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 444,
                "end": 445,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 444,
                  "end": 445,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 429,
        "end": 433,
        "decorators": [],
        "name": "Four",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 433,
        "end": 436,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 434,
            "end": 435,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 434,
              "end": 435,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 448,
      "end": 485,
      "body": {
        "type": "TSInterfaceBody",
        "start": 482,
        "end": 485,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 474,
          "end": 481,
          "expression": {
            "type": "Identifier",
            "start": 474,
            "end": 478,
            "decorators": [],
            "name": "Four",
            "optional": false,
            "typeAnnotation": null
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 480,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 458,
        "end": 462,
        "decorators": [],
        "name": "Five",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 462,
        "end": 465,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 463,
            "end": 464,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 486,
      "end": 521,
      "body": {
        "type": "TSInterfaceBody",
        "start": 506,
        "end": 521,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 512,
            "end": 519,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 512,
              "end": 515,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 515,
              "end": 518,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 517,
                "end": 518,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 517,
                  "end": 518,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 496,
        "end": 499,
        "decorators": [],
        "name": "Six",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 499,
        "end": 505,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 500,
            "end": 501,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 500,
              "end": 501,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 503,
            "end": 504,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 503,
              "end": 504,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 523,
      "end": 607,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 559,
        "end": 607,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 565,
            "end": 605,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 565,
              "end": 576,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 576,
              "end": 605,
              "async": false,
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
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 577,
                  "end": 581,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 578,
                    "end": 581,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 580,
                      "end": 581,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 580,
                        "end": 581,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 583,
                  "end": 587,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 584,
                    "end": 587,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 586,
                      "end": 587,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 587,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 529,
        "end": 530,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 530,
        "end": 558,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 531,
            "end": 542,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 541,
              "end": 542,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 541,
                "end": 542,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 531,
              "end": 532,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 544,
            "end": 557,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 554,
              "end": 557,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 554,
                "end": 557,
                "decorators": [],
                "name": "Two",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 544,
              "end": 545,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 609,
      "end": 695,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 647,
        "end": 695,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 653,
            "end": 693,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 653,
              "end": 664,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 664,
              "end": 693,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 677,
                "end": 693,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 679,
                    "end": 691,
                    "argument": {
                      "type": "Literal",
                      "start": 686,
                      "end": 690,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 665,
                  "end": 669,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 666,
                    "end": 669,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 668,
                      "end": 669,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 668,
                        "end": 669,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 671,
                  "end": 675,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 672,
                    "end": 675,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 674,
                      "end": 675,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 674,
                        "end": 675,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 615,
        "end": 616,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 616,
        "end": 646,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 617,
            "end": 628,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 627,
              "end": 628,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 627,
                "end": 628,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 617,
              "end": 618,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 630,
            "end": 645,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 640,
              "end": 645,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 640,
                "end": 645,
                "decorators": [],
                "name": "Three",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 630,
              "end": 631,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 697,
      "end": 790,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 742,
        "end": 790,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 748,
            "end": 788,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 748,
              "end": 759,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 759,
              "end": 788,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 772,
                "end": 788,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 774,
                    "end": 786,
                    "argument": {
                      "type": "Literal",
                      "start": 781,
                      "end": 785,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 760,
                  "end": 764,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 761,
                    "end": 764,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 763,
                      "end": 764,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 763,
                        "end": 764,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 766,
                  "end": 770,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 767,
                    "end": 770,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 769,
                      "end": 770,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 769,
                        "end": 770,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 703,
        "end": 704,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 704,
        "end": 741,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 705,
            "end": 716,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 715,
              "end": 716,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 715,
                "end": 716,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 705,
              "end": 706,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 718,
            "end": 740,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 728,
              "end": 740,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 732,
                "end": 740,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 733,
                    "end": 739
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 728,
                "end": 732,
                "decorators": [],
                "name": "Four",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 718,
              "end": 719,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 792,
      "end": 873,
      "body": {
        "type": "TSInterfaceBody",
        "start": 841,
        "end": 873,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 847,
            "end": 871,
            "params": [
              {
                "type": "Identifier",
                "start": 851,
                "end": 855,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 852,
                  "end": 855,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 854,
                    "end": 855,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 854,
                      "end": 855,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 857,
                "end": 861,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 858,
                  "end": 861,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 860,
                    "end": 861,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 860,
                      "end": 861,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 862,
              "end": 870,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 864,
                "end": 870
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 802,
        "end": 803,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 803,
        "end": 840,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 804,
            "end": 815,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 814,
              "end": 815,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 814,
                "end": 815,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 804,
              "end": 805,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 817,
            "end": 839,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 827,
              "end": 839,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 831,
                "end": 839,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 832,
                    "end": 838
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 827,
                "end": 831,
                "decorators": [],
                "name": "Five",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 817,
              "end": 818,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 875,
      "end": 964,
      "body": {
        "type": "TSInterfaceBody",
        "start": 888,
        "end": 964,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 894,
            "end": 962,
            "params": [
              {
                "type": "Identifier",
                "start": 942,
                "end": 946,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 943,
                  "end": 946,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 945,
                    "end": 946,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 945,
                      "end": 946,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 948,
                "end": 952,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 949,
                  "end": 952,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 951,
                    "end": 952,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 951,
                      "end": 952,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 953,
              "end": 961,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 955,
                "end": 961
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 897,
              "end": 941,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 898,
                  "end": 909,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 908,
                    "end": 909,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 908,
                      "end": 909,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 898,
                    "end": 899,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 911,
                  "end": 940,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 921,
                    "end": 940,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 924,
                      "end": 940,
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
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 921,
                      "end": 924,
                      "decorators": [],
                      "name": "Six",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 911,
                    "end": 912,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 885,
        "end": 887,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 966,
      "end": 1028,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 970,
          "end": 1028,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 970,
            "end": 1028,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 971,
              "end": 1028,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 973,
                "end": 1028,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 975,
                    "end": 1026,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1007,
                        "end": 1011,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1008,
                          "end": 1011,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1010,
                            "end": 1011,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1010,
                              "end": 1011,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1013,
                        "end": 1017,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1014,
                          "end": 1017,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1016,
                            "end": 1017,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1016,
                              "end": 1017,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1018,
                      "end": 1026,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1020,
                        "end": 1026
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 978,
                      "end": 1006,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 979,
                          "end": 990,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 989,
                            "end": 990,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 989,
                              "end": 990,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 979,
                            "end": 980,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 992,
                          "end": 1005,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 1002,
                            "end": 1005,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1002,
                              "end": 1005,
                              "decorators": [],
                              "name": "One",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 992,
                            "end": 993,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1029,
      "end": 1100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1033,
          "end": 1099,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1033,
            "end": 1034,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1037,
            "end": 1099,
            "properties": [
              {
                "type": "Property",
                "start": 1039,
                "end": 1097,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1039,
                  "end": 1042,
                  "decorators": [],
                  "name": "new",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1042,
                  "end": 1097,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1083,
                    "end": 1097,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1085,
                        "end": 1095,
                        "argument": {
                          "type": "Literal",
                          "start": 1092,
                          "end": 1094,
                          "raw": "''",
                          "value": "",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1071,
                      "end": 1075,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1072,
                        "end": 1075,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1074,
                          "end": 1075,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1074,
                            "end": 1075,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 1077,
                      "end": 1081,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1078,
                        "end": 1081,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1080,
                          "end": 1081,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1080,
                            "end": 1081,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1042,
                    "end": 1070,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1043,
                        "end": 1054,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1053,
                          "end": 1054,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1053,
                            "end": 1054,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1043,
                          "end": 1044,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1056,
                        "end": 1069,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1066,
                          "end": 1069,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1066,
                            "end": 1069,
                            "decorators": [],
                            "name": "Two",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1056,
                          "end": 1057,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 1152,
      "end": 1183,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1161,
        "end": 1166,
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1167,
          "end": 1181,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1168,
            "end": 1181,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1170,
              "end": 1181,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1171,
                "end": 1181,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1172,
                    "end": 1175,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1172,
                      "end": 1175,
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1177,
                    "end": 1180,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1177,
                      "end": 1180,
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1170,
                "end": 1171,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1184,
      "end": 1215,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1193,
        "end": 1198,
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1199,
          "end": 1213,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1200,
            "end": 1213,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1202,
              "end": 1213,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1203,
                "end": 1213,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1204,
                    "end": 1207,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1204,
                      "end": 1207,
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1209,
                    "end": 1212,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1209,
                      "end": 1212,
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1202,
                "end": 1203,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1225,
      "end": 1251,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1248,
        "end": 1251,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1234,
        "end": 1239,
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1240,
          "end": 1246,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1241,
            "end": 1246,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1243,
              "end": 1246
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1253,
      "end": 1288,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1262,
        "end": 1267,
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1268,
          "end": 1286,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1269,
            "end": 1286,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1271,
              "end": 1286,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1272,
                "end": 1286,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1273,
                    "end": 1278,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1273,
                      "end": 1278,
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1280,
                    "end": 1285,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1280,
                      "end": 1285,
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1271,
                "end": 1272,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1289,
      "end": 1324,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1298,
        "end": 1303,
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1304,
          "end": 1322,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1305,
            "end": 1322,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1307,
              "end": 1322,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1308,
                "end": 1322,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1309,
                    "end": 1314,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1309,
                      "end": 1314,
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1316,
                    "end": 1321,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1316,
                      "end": 1321,
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1307,
                "end": 1308,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1334,
      "end": 1360,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1357,
        "end": 1360,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1343,
        "end": 1348,
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1349,
          "end": 1355,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1350,
            "end": 1355,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1352,
              "end": 1355
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1362,
      "end": 1410,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1371,
        "end": 1375,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1376,
          "end": 1408,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1377,
            "end": 1408,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1379,
              "end": 1408,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1380,
                "end": 1408,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1381,
                    "end": 1393,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1385,
                      "end": 1393,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1386,
                          "end": 1392
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1381,
                      "end": 1385,
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1395,
                    "end": 1407,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1399,
                      "end": 1407,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1400,
                          "end": 1406
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1395,
                      "end": 1399,
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1379,
                "end": 1380,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1411,
      "end": 1459,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1420,
        "end": 1424,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1425,
          "end": 1457,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1426,
            "end": 1457,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1428,
              "end": 1457,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1429,
                "end": 1457,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1430,
                    "end": 1442,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1434,
                      "end": 1442,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1435,
                          "end": 1441
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1430,
                      "end": 1434,
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1444,
                    "end": 1456,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1448,
                      "end": 1456,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1449,
                          "end": 1455
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1444,
                      "end": 1448,
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1428,
                "end": 1429,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1469,
      "end": 1494,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1491,
        "end": 1494,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1478,
        "end": 1482,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1483,
          "end": 1489,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1484,
            "end": 1489,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1486,
              "end": 1489
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1496,
      "end": 1523,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1505,
        "end": 1509,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1510,
          "end": 1521,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1511,
            "end": 1521,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1513,
              "end": 1521,
              "exprName": {
                "type": "Identifier",
                "start": 1520,
                "end": 1521,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1524,
      "end": 1551,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1533,
        "end": 1537,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1538,
          "end": 1549,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1539,
            "end": 1549,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1541,
              "end": 1549,
              "exprName": {
                "type": "Identifier",
                "start": 1548,
                "end": 1549,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1561,
      "end": 1586,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1583,
        "end": 1586,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1570,
        "end": 1574,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1575,
          "end": 1581,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1576,
            "end": 1581,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1578,
              "end": 1581
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1588,
      "end": 1615,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1597,
        "end": 1601,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1602,
          "end": 1613,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1603,
            "end": 1613,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1605,
              "end": 1613,
              "exprName": {
                "type": "Identifier",
                "start": 1612,
                "end": 1613,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1616,
      "end": 1643,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1625,
        "end": 1629,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1630,
          "end": 1641,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1631,
            "end": 1641,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1633,
              "end": 1641,
              "exprName": {
                "type": "Identifier",
                "start": 1640,
                "end": 1641,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1653,
      "end": 1678,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1675,
        "end": 1678,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1662,
        "end": 1666,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1667,
          "end": 1673,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1668,
            "end": 1673,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1670,
              "end": 1673
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1680,
      "end": 1715,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1689,
        "end": 1694,
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1695,
          "end": 1713,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1696,
            "end": 1713,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1698,
              "end": 1713,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1699,
                "end": 1713,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1700,
                    "end": 1705,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1700,
                      "end": 1705,
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1707,
                    "end": 1712,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1707,
                      "end": 1712,
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1698,
                "end": 1699,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1716,
      "end": 1765,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1725,
        "end": 1730,
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1731,
          "end": 1763,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1732,
            "end": 1763,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1734,
              "end": 1763,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1735,
                "end": 1763,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1736,
                    "end": 1748,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1740,
                      "end": 1748,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1741,
                          "end": 1747
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1736,
                      "end": 1740,
                      "decorators": [],
                      "name": "Four",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1750,
                    "end": 1762,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1754,
                      "end": 1762,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1755,
                          "end": 1761
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1750,
                      "end": 1754,
                      "decorators": [],
                      "name": "Four",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1734,
                "end": 1735,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1775,
      "end": 1801,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1798,
        "end": 1801,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1784,
        "end": 1789,
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1790,
          "end": 1796,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1791,
            "end": 1796,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1793,
              "end": 1796
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1803,
      "end": 1838,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1812,
        "end": 1817,
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1818,
          "end": 1836,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1819,
            "end": 1836,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1821,
              "end": 1836,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1822,
                "end": 1836,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1823,
                    "end": 1828,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1823,
                      "end": 1828,
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1830,
                    "end": 1835,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1830,
                      "end": 1835,
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1821,
                "end": 1822,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1839,
      "end": 1888,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1848,
        "end": 1853,
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1854,
          "end": 1886,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1855,
            "end": 1886,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1857,
              "end": 1886,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1858,
                "end": 1886,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1859,
                    "end": 1871,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1863,
                      "end": 1871,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1864,
                          "end": 1870
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1859,
                      "end": 1863,
                      "decorators": [],
                      "name": "Four",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1873,
                    "end": 1885,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1877,
                      "end": 1885,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1878,
                          "end": 1884
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1873,
                      "end": 1877,
                      "decorators": [],
                      "name": "Four",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1857,
                "end": 1858,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1898,
      "end": 1924,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1921,
        "end": 1924,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1907,
        "end": 1912,
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1913,
          "end": 1919,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1914,
            "end": 1919,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1916,
              "end": 1919
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1926,
      "end": 1956,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1935,
        "end": 1939,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1940,
          "end": 1954,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1941,
            "end": 1954,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1943,
              "end": 1954,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1944,
                "end": 1954,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1945,
                    "end": 1948,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1945,
                      "end": 1948,
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1950,
                    "end": 1953,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1950,
                      "end": 1953,
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1943,
                "end": 1944,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1957,
      "end": 2005,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1966,
        "end": 1970,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1971,
          "end": 2003,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1972,
            "end": 2003,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1974,
              "end": 2003,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1975,
                "end": 2003,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1976,
                    "end": 1988,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1980,
                      "end": 1988,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1981,
                          "end": 1987
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1976,
                      "end": 1980,
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1990,
                    "end": 2002,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1994,
                      "end": 2002,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1995,
                          "end": 2001
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1990,
                      "end": 1994,
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1974,
                "end": 1975,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2015,
      "end": 2040,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2037,
        "end": 2040,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2024,
        "end": 2028,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2029,
          "end": 2035,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2030,
            "end": 2035,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2032,
              "end": 2035
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2042,
      "end": 2072,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2051,
        "end": 2055,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2056,
          "end": 2070,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2057,
            "end": 2070,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2059,
              "end": 2070,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2060,
                "end": 2070,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2061,
                    "end": 2064,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2061,
                      "end": 2064,
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2066,
                    "end": 2069,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2066,
                      "end": 2069,
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2059,
                "end": 2060,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2073,
      "end": 2107,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2082,
        "end": 2086,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2087,
          "end": 2105,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2088,
            "end": 2105,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2090,
              "end": 2105,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2091,
                "end": 2105,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2092,
                    "end": 2097,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2092,
                      "end": 2097,
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2099,
                    "end": 2104,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2099,
                      "end": 2104,
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2090,
                "end": 2091,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2117,
      "end": 2142,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2139,
        "end": 2142,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2126,
        "end": 2130,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2131,
          "end": 2137,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2132,
            "end": 2137,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2134,
              "end": 2137
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2144,
      "end": 2175,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2153,
        "end": 2158,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2159,
          "end": 2173,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2160,
            "end": 2173,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2162,
              "end": 2173,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2163,
                "end": 2173,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2164,
                    "end": 2167,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2164,
                      "end": 2167,
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2169,
                    "end": 2172,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2169,
                      "end": 2172,
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2162,
                "end": 2163,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2176,
      "end": 2204,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2185,
        "end": 2190,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2191,
          "end": 2202,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2192,
            "end": 2202,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2194,
              "end": 2202,
              "exprName": {
                "type": "Identifier",
                "start": 2201,
                "end": 2202,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2211,
      "end": 2237,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2234,
        "end": 2237,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2220,
        "end": 2225,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2226,
          "end": 2232,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2227,
            "end": 2232,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2229,
              "end": 2232
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2239,
      "end": 2270,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2248,
        "end": 2253,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2254,
          "end": 2268,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2255,
            "end": 2268,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2257,
              "end": 2268,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2258,
                "end": 2268,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2259,
                    "end": 2262,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2259,
                      "end": 2262,
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2264,
                    "end": 2267,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2264,
                      "end": 2267,
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2257,
                "end": 2258,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2271,
      "end": 2299,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2280,
        "end": 2285,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2286,
          "end": 2297,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2287,
            "end": 2297,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2289,
              "end": 2297,
              "exprName": {
                "type": "Identifier",
                "start": 2296,
                "end": 2297,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2306,
      "end": 2332,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2329,
        "end": 2332,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2315,
        "end": 2320,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2321,
          "end": 2327,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2322,
            "end": 2327,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2324,
              "end": 2327
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2334,
      "end": 2383,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2343,
        "end": 2348,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2349,
          "end": 2381,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2350,
            "end": 2381,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2352,
              "end": 2381,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2353,
                "end": 2381,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2354,
                    "end": 2366,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2358,
                      "end": 2366,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2359,
                          "end": 2365
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2354,
                      "end": 2358,
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2368,
                    "end": 2380,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2372,
                      "end": 2380,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2373,
                          "end": 2379
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2368,
                      "end": 2372,
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2352,
                "end": 2353,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2384,
      "end": 2419,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2393,
        "end": 2398,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2399,
          "end": 2417,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2400,
            "end": 2417,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2402,
              "end": 2417,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2403,
                "end": 2417,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2404,
                    "end": 2409,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2404,
                      "end": 2409,
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2411,
                    "end": 2416,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2411,
                      "end": 2416,
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2402,
                "end": 2403,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2426,
      "end": 2452,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2449,
        "end": 2452,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2435,
        "end": 2440,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2441,
          "end": 2447,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2442,
            "end": 2447,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2444,
              "end": 2447
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2454,
      "end": 2477,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2463,
        "end": 2469,
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2470,
          "end": 2475,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2471,
            "end": 2475,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2473,
              "end": 2475,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2473,
                "end": 2475,
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2478,
      "end": 2514,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2487,
        "end": 2493,
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2494,
          "end": 2512,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2495,
            "end": 2512,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2497,
              "end": 2512,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2498,
                "end": 2512,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2499,
                    "end": 2504,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2499,
                      "end": 2504,
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2506,
                    "end": 2511,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2506,
                      "end": 2511,
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2497,
                "end": 2498,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2521,
      "end": 2548,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2545,
        "end": 2548,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2530,
        "end": 2536,
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2537,
          "end": 2543,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2538,
            "end": 2543,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2540,
              "end": 2543
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2550,
      "end": 2599,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2559,
        "end": 2564,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2565,
          "end": 2597,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2566,
            "end": 2597,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2568,
              "end": 2597,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2569,
                "end": 2597,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2570,
                    "end": 2582,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2574,
                      "end": 2582,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2575,
                          "end": 2581
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2570,
                      "end": 2574,
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2584,
                    "end": 2596,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2588,
                      "end": 2596,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2589,
                          "end": 2595
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2584,
                      "end": 2588,
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2568,
                "end": 2569,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2600,
      "end": 2628,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2609,
        "end": 2614,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2615,
          "end": 2626,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2616,
            "end": 2626,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2618,
              "end": 2626,
              "exprName": {
                "type": "Identifier",
                "start": 2625,
                "end": 2626,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2635,
      "end": 2661,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2658,
        "end": 2661,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2644,
        "end": 2649,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2650,
          "end": 2656,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2651,
            "end": 2656,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2653,
              "end": 2656
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2663,
      "end": 2712,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2672,
        "end": 2677,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2678,
          "end": 2710,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2679,
            "end": 2710,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2681,
              "end": 2710,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2682,
                "end": 2710,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2683,
                    "end": 2695,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2687,
                      "end": 2695,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2688,
                          "end": 2694
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2683,
                      "end": 2687,
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2697,
                    "end": 2709,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2701,
                      "end": 2709,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2702,
                          "end": 2708
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 2697,
                      "end": 2701,
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2681,
                "end": 2682,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2713,
      "end": 2741,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2722,
        "end": 2727,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2728,
          "end": 2739,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2729,
            "end": 2739,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2731,
              "end": 2739,
              "exprName": {
                "type": "Identifier",
                "start": 2738,
                "end": 2739,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2748,
      "end": 2774,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2771,
        "end": 2774,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2757,
        "end": 2762,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2763,
          "end": 2769,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2764,
            "end": 2769,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2766,
              "end": 2769
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
