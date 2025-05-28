__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 335,
  "end": 3233,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 335,
      "end": 420,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 342,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 343,
        "end": 420,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 349,
            "end": 418,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 349,
              "end": 352,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 352,
              "end": 418,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 352,
                "end": 381,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 353,
                    "end": 364,
                    "name": {
                      "type": "Identifier",
                      "start": 353,
                      "end": 354,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 363,
                      "end": 364,
                      "typeName": {
                        "type": "Identifier",
                        "start": 363,
                        "end": 364,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
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
                    "start": 366,
                    "end": 380,
                    "name": {
                      "type": "Identifier",
                      "start": 366,
                      "end": 367,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 376,
                      "end": 380,
                      "typeName": {
                        "type": "Identifier",
                        "start": 376,
                        "end": 380,
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null
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
                  "start": 382,
                  "end": 386,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 383,
                    "end": 386,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 385,
                      "end": 386,
                      "typeName": {
                        "type": "Identifier",
                        "start": 385,
                        "end": 386,
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
                  "start": 388,
                  "end": 392,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 389,
                    "end": 392,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 391,
                      "end": 392,
                      "typeName": {
                        "type": "Identifier",
                        "start": 391,
                        "end": 392,
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
                "start": 393,
                "end": 401,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 395,
                  "end": 401
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 402,
                "end": 418,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 404,
                    "end": 416,
                    "argument": {
                      "type": "Literal",
                      "start": 411,
                      "end": 415,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 422,
      "end": 516,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 428,
        "end": 429,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 429,
        "end": 467,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 430,
            "end": 441,
            "name": {
              "type": "Identifier",
              "start": 430,
              "end": 431,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 440,
              "end": 441,
              "typeName": {
                "type": "Identifier",
                "start": 440,
                "end": 441,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
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
            "start": 443,
            "end": 466,
            "name": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 453,
              "end": 466,
              "typeName": {
                "type": "Identifier",
                "start": 453,
                "end": 458,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 458,
                "end": 466,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 459,
                    "end": 465
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 468,
        "end": 516,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 474,
            "end": 514,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 474,
              "end": 477,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 477,
              "end": 514,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 478,
                  "end": 482,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 479,
                    "end": 482,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 481,
                      "end": 482,
                      "typeName": {
                        "type": "Identifier",
                        "start": 481,
                        "end": 482,
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
                  "start": 484,
                  "end": 488,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 485,
                    "end": 488,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 487,
                      "end": 488,
                      "typeName": {
                        "type": "Identifier",
                        "start": 487,
                        "end": 488,
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
                "start": 489,
                "end": 497,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 491,
                  "end": 497
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 498,
                "end": 514,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 500,
                    "end": 512,
                    "argument": {
                      "type": "Literal",
                      "start": 507,
                      "end": 511,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 518,
      "end": 605,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 524,
        "end": 525,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 525,
        "end": 556,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 526,
            "end": 537,
            "name": {
              "type": "Identifier",
              "start": 526,
              "end": 527,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 536,
              "end": 537,
              "typeName": {
                "type": "Identifier",
                "start": 536,
                "end": 537,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
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
            "start": 539,
            "end": 555,
            "name": {
              "type": "Identifier",
              "start": 539,
              "end": 540,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 549,
              "end": 555,
              "typeName": {
                "type": "Identifier",
                "start": 549,
                "end": 555,
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 557,
        "end": 605,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 563,
            "end": 603,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 563,
              "end": 566,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 566,
              "end": 603,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 567,
                  "end": 571,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 568,
                    "end": 571,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 570,
                      "end": 571,
                      "typeName": {
                        "type": "Identifier",
                        "start": 570,
                        "end": 571,
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
                  "start": 573,
                  "end": 577,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 574,
                    "end": 577,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 576,
                      "end": 577,
                      "typeName": {
                        "type": "Identifier",
                        "start": 576,
                        "end": 577,
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
                "start": 578,
                "end": 586,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 580,
                  "end": 586
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 587,
                "end": 603,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 589,
                    "end": 601,
                    "argument": {
                      "type": "Literal",
                      "start": 596,
                      "end": 600,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 607,
      "end": 694,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 613,
        "end": 614,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 614,
        "end": 645,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 615,
            "end": 626,
            "name": {
              "type": "Identifier",
              "start": 615,
              "end": 616,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 625,
              "end": 626,
              "typeName": {
                "type": "Identifier",
                "start": 625,
                "end": 626,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
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
            "start": 628,
            "end": 644,
            "name": {
              "type": "Identifier",
              "start": 628,
              "end": 629,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 638,
              "end": 644,
              "typeName": {
                "type": "Identifier",
                "start": 638,
                "end": 644,
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 646,
        "end": 694,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 652,
            "end": 692,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 652,
              "end": 655,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 655,
              "end": 692,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 656,
                  "end": 660,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 657,
                    "end": 660,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 659,
                      "end": 660,
                      "typeName": {
                        "type": "Identifier",
                        "start": 659,
                        "end": 660,
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
                  "start": 662,
                  "end": 666,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 663,
                    "end": 666,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 665,
                      "end": 666,
                      "typeName": {
                        "type": "Identifier",
                        "start": 665,
                        "end": 666,
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
                "start": 667,
                "end": 675,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 669,
                  "end": 675
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 676,
                "end": 692,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 678,
                    "end": 690,
                    "argument": {
                      "type": "Literal",
                      "start": 685,
                      "end": 689,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 696,
      "end": 771,
      "id": {
        "type": "Identifier",
        "start": 706,
        "end": 707,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 707,
        "end": 738,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 708,
            "end": 719,
            "name": {
              "type": "Identifier",
              "start": 708,
              "end": 709,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 718,
              "end": 719,
              "typeName": {
                "type": "Identifier",
                "start": 718,
                "end": 719,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
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
            "start": 721,
            "end": 737,
            "name": {
              "type": "Identifier",
              "start": 721,
              "end": 722,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 731,
              "end": 737,
              "typeName": {
                "type": "Identifier",
                "start": 731,
                "end": 737,
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 739,
        "end": 771,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 745,
            "end": 769,
            "key": {
              "type": "Identifier",
              "start": 745,
              "end": 748,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 749,
                "end": 753,
                "decorators": [],
                "name": "x",
                "optional": false,
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
                "start": 755,
                "end": 759,
                "decorators": [],
                "name": "y",
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
              "start": 760,
              "end": 768,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 762,
                "end": 768
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
      "start": 773,
      "end": 850,
      "id": {
        "type": "Identifier",
        "start": 783,
        "end": 785,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 786,
        "end": 850,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 792,
            "end": 848,
            "key": {
              "type": "Identifier",
              "start": 792,
              "end": 795,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 795,
              "end": 827,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 796,
                  "end": 807,
                  "name": {
                    "type": "Identifier",
                    "start": 796,
                    "end": 797,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 806,
                    "end": 807,
                    "typeName": {
                      "type": "Identifier",
                      "start": 806,
                      "end": 807,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 809,
                  "end": 826,
                  "name": {
                    "type": "Identifier",
                    "start": 809,
                    "end": 810,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 819,
                    "end": 826,
                    "typeName": {
                      "type": "Identifier",
                      "start": 819,
                      "end": 826,
                      "decorators": [],
                      "name": "Boolean",
                      "optional": false,
                      "typeAnnotation": null
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
                "start": 828,
                "end": 832,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 829,
                  "end": 832,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 831,
                    "end": 832,
                    "typeName": {
                      "type": "Identifier",
                      "start": 831,
                      "end": 832,
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
                "start": 834,
                "end": 838,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 835,
                  "end": 838,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 837,
                    "end": 838,
                    "typeName": {
                      "type": "Identifier",
                      "start": 837,
                      "end": 838,
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
              "start": 839,
              "end": 847,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 841,
                "end": 847
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
      "start": 852,
      "end": 924,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 856,
          "end": 924,
          "id": {
            "type": "Identifier",
            "start": 856,
            "end": 924,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 857,
              "end": 924,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 859,
                "end": 924,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 861,
                    "end": 922,
                    "key": {
                      "type": "Identifier",
                      "start": 861,
                      "end": 864,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 864,
                      "end": 902,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 865,
                          "end": 876,
                          "name": {
                            "type": "Identifier",
                            "start": 865,
                            "end": 866,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 875,
                            "end": 876,
                            "typeName": {
                              "type": "Identifier",
                              "start": 875,
                              "end": 876,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
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
                          "start": 878,
                          "end": 901,
                          "name": {
                            "type": "Identifier",
                            "start": 878,
                            "end": 879,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 888,
                            "end": 901,
                            "typeName": {
                              "type": "Identifier",
                              "start": 888,
                              "end": 893,
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 893,
                              "end": 901,
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 894,
                                  "end": 900
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
                        "start": 903,
                        "end": 907,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 904,
                          "end": 907,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 906,
                            "end": 907,
                            "typeName": {
                              "type": "Identifier",
                              "start": 906,
                              "end": 907,
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
                        "start": 909,
                        "end": 913,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 910,
                          "end": 913,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 912,
                            "end": 913,
                            "typeName": {
                              "type": "Identifier",
                              "start": 912,
                              "end": 913,
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
                      "start": 914,
                      "end": 922,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 916,
                        "end": 922
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
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
      "start": 925,
      "end": 999,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 929,
          "end": 998,
          "id": {
            "type": "Identifier",
            "start": 929,
            "end": 930,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 933,
            "end": 998,
            "properties": [
              {
                "type": "Property",
                "start": 935,
                "end": 996,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 935,
                  "end": 938,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 938,
                  "end": 996,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 938,
                    "end": 969,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 939,
                        "end": 950,
                        "name": {
                          "type": "Identifier",
                          "start": 939,
                          "end": 940,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 949,
                          "end": 950,
                          "typeName": {
                            "type": "Identifier",
                            "start": 949,
                            "end": 950,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
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
                        "start": 952,
                        "end": 968,
                        "name": {
                          "type": "Identifier",
                          "start": 952,
                          "end": 953,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 962,
                          "end": 968,
                          "typeName": {
                            "type": "Identifier",
                            "start": 962,
                            "end": 968,
                            "decorators": [],
                            "name": "RegExp",
                            "optional": false,
                            "typeAnnotation": null
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
                      "start": 970,
                      "end": 974,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 971,
                        "end": 974,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 973,
                          "end": 974,
                          "typeName": {
                            "type": "Identifier",
                            "start": 973,
                            "end": 974,
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
                      "start": 976,
                      "end": 980,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 977,
                        "end": 980,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 979,
                          "end": 980,
                          "typeName": {
                            "type": "Identifier",
                            "start": 979,
                            "end": 980,
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
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 982,
                    "end": 996,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 984,
                        "end": 994,
                        "argument": {
                          "type": "Literal",
                          "start": 991,
                          "end": 993,
                          "value": "",
                          "raw": "''"
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1001,
      "end": 1021,
      "id": {
        "type": "Identifier",
        "start": 1010,
        "end": 1014,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1015,
          "end": 1019,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1016,
            "end": 1019,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1018,
              "end": 1019,
              "typeName": {
                "type": "Identifier",
                "start": 1018,
                "end": 1019,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1022,
      "end": 1042,
      "id": {
        "type": "Identifier",
        "start": 1031,
        "end": 1035,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1036,
          "end": 1040,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1037,
            "end": 1040,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1039,
              "end": 1040,
              "typeName": {
                "type": "Identifier",
                "start": 1039,
                "end": 1040,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1052,
      "end": 1077,
      "id": {
        "type": "Identifier",
        "start": 1061,
        "end": 1065,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1066,
          "end": 1072,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1067,
            "end": 1072,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1069,
              "end": 1072
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1074,
        "end": 1077,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1079,
      "end": 1130,
      "id": {
        "type": "Identifier",
        "start": 1088,
        "end": 1093,
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1094,
          "end": 1128,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1095,
            "end": 1128,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1097,
              "end": 1128,
              "typeName": {
                "type": "Identifier",
                "start": 1097,
                "end": 1098,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1098,
                "end": 1128,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1099,
                    "end": 1112,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1099,
                      "end": 1104,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1104,
                      "end": 1112,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1105,
                          "end": 1111
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1114,
                    "end": 1127,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1114,
                      "end": 1119,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1119,
                      "end": 1127,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1120,
                          "end": 1126
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1131,
      "end": 1182,
      "id": {
        "type": "Identifier",
        "start": 1140,
        "end": 1145,
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1146,
          "end": 1180,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1147,
            "end": 1180,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1149,
              "end": 1180,
              "typeName": {
                "type": "Identifier",
                "start": 1149,
                "end": 1150,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1150,
                "end": 1180,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1151,
                    "end": 1164,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1151,
                      "end": 1156,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1156,
                      "end": 1164,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1157,
                          "end": 1163
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1166,
                    "end": 1179,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1166,
                      "end": 1171,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1171,
                      "end": 1179,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1172,
                          "end": 1178
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1192,
      "end": 1218,
      "id": {
        "type": "Identifier",
        "start": 1201,
        "end": 1206,
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1207,
          "end": 1213,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1208,
            "end": 1213,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1210,
              "end": 1213
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1215,
        "end": 1218,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1220,
      "end": 1257,
      "id": {
        "type": "Identifier",
        "start": 1229,
        "end": 1234,
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1235,
          "end": 1255,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1236,
            "end": 1255,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1238,
              "end": 1255,
              "typeName": {
                "type": "Identifier",
                "start": 1238,
                "end": 1239,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1239,
                "end": 1255,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1240,
                    "end": 1246,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1240,
                      "end": 1246,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1248,
                    "end": 1254,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1248,
                      "end": 1254,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1258,
      "end": 1295,
      "id": {
        "type": "Identifier",
        "start": 1267,
        "end": 1272,
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1273,
          "end": 1293,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1274,
            "end": 1293,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1276,
              "end": 1293,
              "typeName": {
                "type": "Identifier",
                "start": 1276,
                "end": 1277,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1277,
                "end": 1293,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1278,
                    "end": 1284,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1278,
                      "end": 1284,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1286,
                    "end": 1292,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1286,
                      "end": 1292,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1305,
      "end": 1331,
      "id": {
        "type": "Identifier",
        "start": 1314,
        "end": 1319,
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1320,
          "end": 1326,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1321,
            "end": 1326,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1323,
              "end": 1326
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1328,
        "end": 1331,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1333,
      "end": 1369,
      "id": {
        "type": "Identifier",
        "start": 1342,
        "end": 1346,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1347,
          "end": 1367,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1348,
            "end": 1367,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1350,
              "end": 1367,
              "typeName": {
                "type": "Identifier",
                "start": 1350,
                "end": 1351,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1351,
                "end": 1367,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1352,
                    "end": 1358,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1352,
                      "end": 1358,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1360,
                    "end": 1366,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1360,
                      "end": 1366,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1370,
      "end": 1406,
      "id": {
        "type": "Identifier",
        "start": 1379,
        "end": 1383,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1384,
          "end": 1404,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1385,
            "end": 1404,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1387,
              "end": 1404,
              "typeName": {
                "type": "Identifier",
                "start": 1387,
                "end": 1388,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1388,
                "end": 1404,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1389,
                    "end": 1395,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1389,
                      "end": 1395,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1397,
                    "end": 1403,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1397,
                      "end": 1403,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1416,
      "end": 1441,
      "id": {
        "type": "Identifier",
        "start": 1425,
        "end": 1429,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1430,
          "end": 1436,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1431,
            "end": 1436,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1433,
              "end": 1436
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1438,
        "end": 1441,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1443,
      "end": 1470,
      "id": {
        "type": "Identifier",
        "start": 1452,
        "end": 1456,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1457,
          "end": 1468,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1458,
            "end": 1468,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1460,
              "end": 1468,
              "exprName": {
                "type": "Identifier",
                "start": 1467,
                "end": 1468,
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
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1471,
      "end": 1498,
      "id": {
        "type": "Identifier",
        "start": 1480,
        "end": 1484,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1485,
          "end": 1496,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1486,
            "end": 1496,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1488,
              "end": 1496,
              "exprName": {
                "type": "Identifier",
                "start": 1495,
                "end": 1496,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1508,
      "end": 1533,
      "id": {
        "type": "Identifier",
        "start": 1517,
        "end": 1521,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1522,
          "end": 1528,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1523,
            "end": 1528,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1525,
              "end": 1528
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1530,
        "end": 1533,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1535,
      "end": 1562,
      "id": {
        "type": "Identifier",
        "start": 1544,
        "end": 1548,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1549,
          "end": 1560,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1550,
            "end": 1560,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1552,
              "end": 1560,
              "exprName": {
                "type": "Identifier",
                "start": 1559,
                "end": 1560,
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
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1563,
      "end": 1590,
      "id": {
        "type": "Identifier",
        "start": 1572,
        "end": 1576,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1577,
          "end": 1588,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1578,
            "end": 1588,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1580,
              "end": 1588,
              "exprName": {
                "type": "Identifier",
                "start": 1587,
                "end": 1588,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1600,
      "end": 1625,
      "id": {
        "type": "Identifier",
        "start": 1609,
        "end": 1613,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1614,
          "end": 1620,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1615,
            "end": 1620,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1617,
              "end": 1620
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1622,
        "end": 1625,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1627,
      "end": 1647,
      "id": {
        "type": "Identifier",
        "start": 1636,
        "end": 1640,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1641,
          "end": 1645,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1642,
            "end": 1645,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1644,
              "end": 1645,
              "typeName": {
                "type": "Identifier",
                "start": 1644,
                "end": 1645,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1648,
      "end": 1698,
      "id": {
        "type": "Identifier",
        "start": 1657,
        "end": 1661,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1662,
          "end": 1696,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1663,
            "end": 1696,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1665,
              "end": 1696,
              "typeName": {
                "type": "Identifier",
                "start": 1665,
                "end": 1666,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1666,
                "end": 1696,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1667,
                    "end": 1680,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1667,
                      "end": 1672,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1672,
                      "end": 1680,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1673,
                          "end": 1679
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1682,
                    "end": 1695,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1682,
                      "end": 1687,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1687,
                      "end": 1695,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1688,
                          "end": 1694
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1705,
      "end": 1730,
      "id": {
        "type": "Identifier",
        "start": 1714,
        "end": 1718,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1719,
          "end": 1725,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1720,
            "end": 1725,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1722,
              "end": 1725
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1727,
        "end": 1730,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1732,
      "end": 1753,
      "id": {
        "type": "Identifier",
        "start": 1741,
        "end": 1746,
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1747,
          "end": 1751,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1748,
            "end": 1751,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1750,
              "end": 1751,
              "typeName": {
                "type": "Identifier",
                "start": 1750,
                "end": 1751,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1754,
      "end": 1791,
      "id": {
        "type": "Identifier",
        "start": 1763,
        "end": 1768,
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1769,
          "end": 1789,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1770,
            "end": 1789,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1772,
              "end": 1789,
              "typeName": {
                "type": "Identifier",
                "start": 1772,
                "end": 1773,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1773,
                "end": 1789,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1774,
                    "end": 1780,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1774,
                      "end": 1780,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1782,
                    "end": 1788,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1782,
                      "end": 1788,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1798,
      "end": 1824,
      "id": {
        "type": "Identifier",
        "start": 1807,
        "end": 1812,
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1813,
          "end": 1819,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1814,
            "end": 1819,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1816,
              "end": 1819
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1821,
        "end": 1824,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1826,
      "end": 1863,
      "id": {
        "type": "Identifier",
        "start": 1835,
        "end": 1840,
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1841,
          "end": 1861,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1842,
            "end": 1861,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1844,
              "end": 1861,
              "typeName": {
                "type": "Identifier",
                "start": 1844,
                "end": 1845,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1845,
                "end": 1861,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1846,
                    "end": 1852,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1846,
                      "end": 1852,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1854,
                    "end": 1860,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1854,
                      "end": 1860,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1864,
      "end": 1901,
      "id": {
        "type": "Identifier",
        "start": 1873,
        "end": 1878,
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1879,
          "end": 1899,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1880,
            "end": 1899,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1882,
              "end": 1899,
              "typeName": {
                "type": "Identifier",
                "start": 1882,
                "end": 1883,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1883,
                "end": 1899,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1884,
                    "end": 1890,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1884,
                      "end": 1890,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1892,
                    "end": 1898,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1892,
                      "end": 1898,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1908,
      "end": 1934,
      "id": {
        "type": "Identifier",
        "start": 1917,
        "end": 1922,
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1923,
          "end": 1929,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1924,
            "end": 1929,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1926,
              "end": 1929
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1931,
        "end": 1934,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1936,
      "end": 1973,
      "id": {
        "type": "Identifier",
        "start": 1945,
        "end": 1950,
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1951,
          "end": 1971,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1952,
            "end": 1971,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1954,
              "end": 1971,
              "typeName": {
                "type": "Identifier",
                "start": 1954,
                "end": 1955,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1955,
                "end": 1971,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1956,
                    "end": 1962,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1956,
                      "end": 1962,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1964,
                    "end": 1970,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1964,
                      "end": 1970,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1974,
      "end": 2008,
      "id": {
        "type": "Identifier",
        "start": 1983,
        "end": 1988,
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1989,
          "end": 2006,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1990,
            "end": 2006,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1992,
              "end": 2006,
              "typeName": {
                "type": "Identifier",
                "start": 1992,
                "end": 1993,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1993,
                "end": 2006,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1994,
                    "end": 1997
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1999,
                    "end": 2005,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1999,
                      "end": 2005,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2057,
      "end": 2083,
      "id": {
        "type": "Identifier",
        "start": 2066,
        "end": 2071,
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2072,
          "end": 2078,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2073,
            "end": 2078,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2075,
              "end": 2078
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2080,
        "end": 2083,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2085,
      "end": 2105,
      "id": {
        "type": "Identifier",
        "start": 2094,
        "end": 2098,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2099,
          "end": 2103,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2100,
            "end": 2103,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2102,
              "end": 2103,
              "typeName": {
                "type": "Identifier",
                "start": 2102,
                "end": 2103,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2106,
      "end": 2142,
      "id": {
        "type": "Identifier",
        "start": 2115,
        "end": 2119,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2120,
          "end": 2140,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2121,
            "end": 2140,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2123,
              "end": 2140,
              "typeName": {
                "type": "Identifier",
                "start": 2123,
                "end": 2124,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2124,
                "end": 2140,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2125,
                    "end": 2131,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2125,
                      "end": 2131,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2133,
                    "end": 2139,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2133,
                      "end": 2139,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2149,
      "end": 2174,
      "id": {
        "type": "Identifier",
        "start": 2158,
        "end": 2162,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2163,
          "end": 2169,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2164,
            "end": 2169,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2166,
              "end": 2169
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2171,
        "end": 2174,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2176,
      "end": 2196,
      "id": {
        "type": "Identifier",
        "start": 2185,
        "end": 2189,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2190,
          "end": 2194,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2191,
            "end": 2194,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2193,
              "end": 2194,
              "typeName": {
                "type": "Identifier",
                "start": 2193,
                "end": 2194,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2197,
      "end": 2224,
      "id": {
        "type": "Identifier",
        "start": 2206,
        "end": 2210,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2211,
          "end": 2222,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2212,
            "end": 2222,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2214,
              "end": 2222,
              "exprName": {
                "type": "Identifier",
                "start": 2221,
                "end": 2222,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2231,
      "end": 2256,
      "id": {
        "type": "Identifier",
        "start": 2240,
        "end": 2244,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2245,
          "end": 2251,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2246,
            "end": 2251,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2248,
              "end": 2251
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2253,
        "end": 2256,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2258,
      "end": 2308,
      "id": {
        "type": "Identifier",
        "start": 2267,
        "end": 2271,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2272,
          "end": 2306,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2273,
            "end": 2306,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2275,
              "end": 2306,
              "typeName": {
                "type": "Identifier",
                "start": 2275,
                "end": 2276,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2276,
                "end": 2306,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2277,
                    "end": 2290,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2277,
                      "end": 2282,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2282,
                      "end": 2290,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2283,
                          "end": 2289
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2292,
                    "end": 2305,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2292,
                      "end": 2297,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2297,
                      "end": 2305,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2298,
                          "end": 2304
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2309,
      "end": 2345,
      "id": {
        "type": "Identifier",
        "start": 2318,
        "end": 2322,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2323,
          "end": 2343,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2324,
            "end": 2343,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2326,
              "end": 2343,
              "typeName": {
                "type": "Identifier",
                "start": 2326,
                "end": 2327,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2327,
                "end": 2343,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2328,
                    "end": 2334,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2328,
                      "end": 2334,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2336,
                    "end": 2342,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2336,
                      "end": 2342,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2352,
      "end": 2377,
      "id": {
        "type": "Identifier",
        "start": 2361,
        "end": 2365,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2366,
          "end": 2372,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2367,
            "end": 2372,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2369,
              "end": 2372
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2374,
        "end": 2377,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2379,
      "end": 2429,
      "id": {
        "type": "Identifier",
        "start": 2388,
        "end": 2392,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2393,
          "end": 2427,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2394,
            "end": 2427,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2396,
              "end": 2427,
              "typeName": {
                "type": "Identifier",
                "start": 2396,
                "end": 2397,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2397,
                "end": 2427,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2398,
                    "end": 2411,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2398,
                      "end": 2403,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2403,
                      "end": 2411,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2404,
                          "end": 2410
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2413,
                    "end": 2426,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2413,
                      "end": 2418,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2418,
                      "end": 2426,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2419,
                          "end": 2425
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2430,
      "end": 2466,
      "id": {
        "type": "Identifier",
        "start": 2439,
        "end": 2443,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2444,
          "end": 2464,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2445,
            "end": 2464,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2447,
              "end": 2464,
              "typeName": {
                "type": "Identifier",
                "start": 2447,
                "end": 2448,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2448,
                "end": 2464,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2449,
                    "end": 2455,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2449,
                      "end": 2455,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2457,
                    "end": 2463,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2457,
                      "end": 2463,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2473,
      "end": 2498,
      "id": {
        "type": "Identifier",
        "start": 2482,
        "end": 2486,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2487,
          "end": 2493,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2488,
            "end": 2493,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2490,
              "end": 2493
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2495,
        "end": 2498,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2500,
      "end": 2551,
      "id": {
        "type": "Identifier",
        "start": 2509,
        "end": 2514,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2515,
          "end": 2549,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2516,
            "end": 2549,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2518,
              "end": 2549,
              "typeName": {
                "type": "Identifier",
                "start": 2518,
                "end": 2519,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2519,
                "end": 2549,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2520,
                    "end": 2533,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2520,
                      "end": 2525,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2525,
                      "end": 2533,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2526,
                          "end": 2532
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2535,
                    "end": 2548,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2535,
                      "end": 2540,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2540,
                      "end": 2548,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2541,
                          "end": 2547
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2552,
      "end": 2580,
      "id": {
        "type": "Identifier",
        "start": 2561,
        "end": 2566,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2567,
          "end": 2578,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2568,
            "end": 2578,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2570,
              "end": 2578,
              "exprName": {
                "type": "Identifier",
                "start": 2577,
                "end": 2578,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2587,
      "end": 2613,
      "id": {
        "type": "Identifier",
        "start": 2596,
        "end": 2601,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2602,
          "end": 2608,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2603,
            "end": 2608,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2605,
              "end": 2608
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2610,
        "end": 2613,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2615,
      "end": 2666,
      "id": {
        "type": "Identifier",
        "start": 2624,
        "end": 2629,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2630,
          "end": 2664,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2631,
            "end": 2664,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2633,
              "end": 2664,
              "typeName": {
                "type": "Identifier",
                "start": 2633,
                "end": 2634,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2634,
                "end": 2664,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2635,
                    "end": 2648,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2635,
                      "end": 2640,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2640,
                      "end": 2648,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2641,
                          "end": 2647
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2650,
                    "end": 2663,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2650,
                      "end": 2655,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2655,
                      "end": 2663,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2656,
                          "end": 2662
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2667,
      "end": 2695,
      "id": {
        "type": "Identifier",
        "start": 2676,
        "end": 2681,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2682,
          "end": 2693,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2683,
            "end": 2693,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2685,
              "end": 2693,
              "exprName": {
                "type": "Identifier",
                "start": 2692,
                "end": 2693,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2702,
      "end": 2728,
      "id": {
        "type": "Identifier",
        "start": 2711,
        "end": 2716,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2717,
          "end": 2723,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2718,
            "end": 2723,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2720,
              "end": 2723
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2725,
        "end": 2728,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2730,
      "end": 2767,
      "id": {
        "type": "Identifier",
        "start": 2739,
        "end": 2744,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2745,
          "end": 2765,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2746,
            "end": 2765,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2748,
              "end": 2765,
              "typeName": {
                "type": "Identifier",
                "start": 2748,
                "end": 2749,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2749,
                "end": 2765,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2750,
                    "end": 2756,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2750,
                      "end": 2756,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2758,
                    "end": 2764,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2758,
                      "end": 2764,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2768,
      "end": 2805,
      "id": {
        "type": "Identifier",
        "start": 2777,
        "end": 2782,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2783,
          "end": 2803,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2784,
            "end": 2803,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2786,
              "end": 2803,
              "typeName": {
                "type": "Identifier",
                "start": 2786,
                "end": 2787,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2787,
                "end": 2803,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2788,
                    "end": 2794,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2788,
                      "end": 2794,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2796,
                    "end": 2802,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2796,
                      "end": 2802,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2812,
      "end": 2838,
      "id": {
        "type": "Identifier",
        "start": 2821,
        "end": 2826,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2827,
          "end": 2833,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2828,
            "end": 2833,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2830,
              "end": 2833
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2835,
        "end": 2838,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2840,
      "end": 2863,
      "id": {
        "type": "Identifier",
        "start": 2849,
        "end": 2855,
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2856,
          "end": 2861,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2857,
            "end": 2861,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2859,
              "end": 2861,
              "typeName": {
                "type": "Identifier",
                "start": 2859,
                "end": 2861,
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2864,
      "end": 2902,
      "id": {
        "type": "Identifier",
        "start": 2873,
        "end": 2879,
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2880,
          "end": 2900,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2881,
            "end": 2900,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2883,
              "end": 2900,
              "typeName": {
                "type": "Identifier",
                "start": 2883,
                "end": 2884,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2884,
                "end": 2900,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2885,
                    "end": 2891,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2885,
                      "end": 2891,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2893,
                    "end": 2899,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2893,
                      "end": 2899,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2909,
      "end": 2936,
      "id": {
        "type": "Identifier",
        "start": 2918,
        "end": 2924,
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2925,
          "end": 2931,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2926,
            "end": 2931,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2928,
              "end": 2931
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2933,
        "end": 2936,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2938,
      "end": 2975,
      "id": {
        "type": "Identifier",
        "start": 2947,
        "end": 2952,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2953,
          "end": 2973,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2954,
            "end": 2973,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2956,
              "end": 2973,
              "typeName": {
                "type": "Identifier",
                "start": 2956,
                "end": 2957,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2957,
                "end": 2973,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2958,
                    "end": 2964,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2958,
                      "end": 2964,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2966,
                    "end": 2972,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2966,
                      "end": 2972,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2976,
      "end": 3004,
      "id": {
        "type": "Identifier",
        "start": 2985,
        "end": 2990,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2991,
          "end": 3002,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2992,
            "end": 3002,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2994,
              "end": 3002,
              "exprName": {
                "type": "Identifier",
                "start": 3001,
                "end": 3002,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3011,
      "end": 3037,
      "id": {
        "type": "Identifier",
        "start": 3020,
        "end": 3025,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 3026,
          "end": 3032,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3027,
            "end": 3032,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3029,
              "end": 3032
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3034,
        "end": 3037,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 3039,
      "end": 3076,
      "id": {
        "type": "Identifier",
        "start": 3048,
        "end": 3053,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 3054,
          "end": 3074,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3055,
            "end": 3074,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3057,
              "end": 3074,
              "typeName": {
                "type": "Identifier",
                "start": 3057,
                "end": 3058,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3058,
                "end": 3074,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3059,
                    "end": 3065,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3059,
                      "end": 3065,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3067,
                    "end": 3073,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3067,
                      "end": 3073,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 3077,
      "end": 3105,
      "id": {
        "type": "Identifier",
        "start": 3086,
        "end": 3091,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 3092,
          "end": 3103,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3093,
            "end": 3103,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 3095,
              "end": 3103,
              "exprName": {
                "type": "Identifier",
                "start": 3102,
                "end": 3103,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3112,
      "end": 3138,
      "id": {
        "type": "Identifier",
        "start": 3121,
        "end": 3126,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 3127,
          "end": 3133,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3128,
            "end": 3133,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3130,
              "end": 3133
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3135,
        "end": 3138,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 3140,
      "end": 3162,
      "id": {
        "type": "Identifier",
        "start": 3149,
        "end": 3154,
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 3155,
          "end": 3160,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3156,
            "end": 3160,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3158,
              "end": 3160,
              "typeName": {
                "type": "Identifier",
                "start": 3158,
                "end": 3160,
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 3163,
      "end": 3200,
      "id": {
        "type": "Identifier",
        "start": 3172,
        "end": 3177,
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 3178,
          "end": 3198,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3179,
            "end": 3198,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3181,
              "end": 3198,
              "typeName": {
                "type": "Identifier",
                "start": 3181,
                "end": 3182,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3182,
                "end": 3198,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3183,
                    "end": 3189,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3183,
                      "end": 3189,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3191,
                    "end": 3197,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3191,
                      "end": 3197,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3207,
      "end": 3233,
      "id": {
        "type": "Identifier",
        "start": 3216,
        "end": 3221,
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 3222,
          "end": 3228,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3223,
            "end": 3228,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3225,
              "end": 3228
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3230,
        "end": 3233,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
