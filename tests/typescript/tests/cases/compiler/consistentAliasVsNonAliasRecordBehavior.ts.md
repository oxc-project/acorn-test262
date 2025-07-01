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
        "name": "Record2",
        "optional": false,
        "typeAnnotation": null,
        "start": 226,
        "end": 233
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 235
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 250,
                "end": 253
              },
              "start": 244,
              "end": 253
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 234,
            "end": 253
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 256
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 255,
            "end": 256
          }
        ],
        "start": 233,
        "end": 257
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 267,
          "end": 268
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 273
          },
          "typeArguments": null,
          "start": 272,
          "end": 273
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 277
          },
          "typeArguments": null,
          "start": 276,
          "end": 277
        },
        "optional": false,
        "readonly": null,
        "start": 260,
        "end": 280
      },
      "declare": false,
      "start": 221,
      "end": 281
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defaultRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 292,
        "end": 305
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
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 315
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 316,
                      "end": 319
                    },
                    "start": 316,
                    "end": 319
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 321,
                    "end": 327
                  }
                ],
                "start": 315,
                "end": 328
              },
              "start": 309,
              "end": 328
            },
            "start": 307,
            "end": 328
          },
          "start": 306,
          "end": 328
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
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 339
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 340,
                    "end": 346
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 348,
                    "end": 354
                  }
                ],
                "start": 339,
                "end": 355
              },
              "start": 333,
              "end": 355
            },
            "start": 331,
            "end": 355
          },
          "start": 330,
          "end": 355
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 364
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 368
              },
              "start": 363,
              "end": 368
            },
            "directive": null,
            "start": 363,
            "end": 369
          }
        ],
        "start": 357,
        "end": 404
      },
      "expression": false,
      "start": 283,
      "end": 404
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "customRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 427
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
                "name": "Record2",
                "optional": false,
                "typeAnnotation": null,
                "start": 431,
                "end": 438
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 439,
                      "end": 442
                    },
                    "start": 439,
                    "end": 442
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 444,
                    "end": 450
                  }
                ],
                "start": 438,
                "end": 451
              },
              "start": 431,
              "end": 451
            },
            "start": 429,
            "end": 451
          },
          "start": 428,
          "end": 451
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
                "name": "Record2",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 463
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 464,
                    "end": 470
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 472,
                    "end": 478
                  }
                ],
                "start": 463,
                "end": 479
              },
              "start": 456,
              "end": 479
            },
            "start": 454,
            "end": 479
          },
          "start": 453,
          "end": 479
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 488
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 492
              },
              "start": 487,
              "end": 492
            },
            "directive": null,
            "start": 487,
            "end": 493
          }
        ],
        "start": 481,
        "end": 528
      },
      "expression": false,
      "start": 406,
      "end": 528
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixed1",
        "optional": false,
        "typeAnnotation": null,
        "start": 539,
        "end": 545
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
                "name": "Record2",
                "optional": false,
                "typeAnnotation": null,
                "start": 549,
                "end": 556
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 557,
                      "end": 560
                    },
                    "start": 557,
                    "end": 560
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 562,
                    "end": 568
                  }
                ],
                "start": 556,
                "end": 569
              },
              "start": 549,
              "end": 569
            },
            "start": 547,
            "end": 569
          },
          "start": 546,
          "end": 569
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
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 574,
                "end": 580
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 581,
                    "end": 587
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 589,
                    "end": 595
                  }
                ],
                "start": 580,
                "end": 596
              },
              "start": 574,
              "end": 596
            },
            "start": 572,
            "end": 596
          },
          "start": 571,
          "end": 596
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 604,
                "end": 605
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 608,
                "end": 609
              },
              "start": 604,
              "end": 609
            },
            "directive": null,
            "start": 604,
            "end": 610
          }
        ],
        "start": 598,
        "end": 621
      },
      "expression": false,
      "start": 530,
      "end": 621
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixed2",
        "optional": false,
        "typeAnnotation": null,
        "start": 632,
        "end": 638
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
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 648
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 649,
                      "end": 652
                    },
                    "start": 649,
                    "end": 652
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 654,
                    "end": 660
                  }
                ],
                "start": 648,
                "end": 661
              },
              "start": 642,
              "end": 661
            },
            "start": 640,
            "end": 661
          },
          "start": 639,
          "end": 661
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
                "name": "Record2",
                "optional": false,
                "typeAnnotation": null,
                "start": 666,
                "end": 673
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 674,
                    "end": 680
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 682,
                    "end": 688
                  }
                ],
                "start": 673,
                "end": 689
              },
              "start": 666,
              "end": 689
            },
            "start": 664,
            "end": 689
          },
          "start": 663,
          "end": 689
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 697,
                "end": 698
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 701,
                "end": 702
              },
              "start": 697,
              "end": 702
            },
            "directive": null,
            "start": 697,
            "end": 703
          }
        ],
        "start": 691,
        "end": 714
      },
      "expression": false,
      "start": 623,
      "end": 714
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defaultRecord2",
        "optional": false,
        "typeAnnotation": null,
        "start": 725,
        "end": 739
      },
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
              "start": 740,
              "end": 741
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 740,
            "end": 741
          }
        ],
        "start": 739,
        "end": 742
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
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 746,
                "end": 752
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 753,
                      "end": 756
                    },
                    "start": 753,
                    "end": 756
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 758,
                      "end": 759
                    },
                    "typeArguments": null,
                    "start": 758,
                    "end": 759
                  }
                ],
                "start": 752,
                "end": 760
              },
              "start": 746,
              "end": 760
            },
            "start": 744,
            "end": 760
          },
          "start": 743,
          "end": 760
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
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 765,
                "end": 771
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 772,
                    "end": 778
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 780,
                      "end": 781
                    },
                    "typeArguments": null,
                    "start": 780,
                    "end": 781
                  }
                ],
                "start": 771,
                "end": 782
              },
              "start": 765,
              "end": 782
            },
            "start": 763,
            "end": 782
          },
          "start": 762,
          "end": 782
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 790,
                "end": 791
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 794,
                "end": 795
              },
              "start": 790,
              "end": 795
            },
            "directive": null,
            "start": 790,
            "end": 796
          }
        ],
        "start": 784,
        "end": 831
      },
      "expression": false,
      "start": 716,
      "end": 831
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "customRecord2",
        "optional": false,
        "typeAnnotation": null,
        "start": 842,
        "end": 855
      },
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
              "start": 856,
              "end": 857
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 856,
            "end": 857
          }
        ],
        "start": 855,
        "end": 858
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
                "name": "Record2",
                "optional": false,
                "typeAnnotation": null,
                "start": 862,
                "end": 869
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 870,
                      "end": 873
                    },
                    "start": 870,
                    "end": 873
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 875,
                      "end": 876
                    },
                    "typeArguments": null,
                    "start": 875,
                    "end": 876
                  }
                ],
                "start": 869,
                "end": 877
              },
              "start": 862,
              "end": 877
            },
            "start": 860,
            "end": 877
          },
          "start": 859,
          "end": 877
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
                "name": "Record2",
                "optional": false,
                "typeAnnotation": null,
                "start": 882,
                "end": 889
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 890,
                    "end": 896
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 898,
                      "end": 899
                    },
                    "typeArguments": null,
                    "start": 898,
                    "end": 899
                  }
                ],
                "start": 889,
                "end": 900
              },
              "start": 882,
              "end": 900
            },
            "start": 880,
            "end": 900
          },
          "start": 879,
          "end": 900
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 908,
                "end": 909
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 912,
                "end": 913
              },
              "start": 908,
              "end": 913
            },
            "directive": null,
            "start": 908,
            "end": 914
          }
        ],
        "start": 902,
        "end": 949
      },
      "expression": false,
      "start": 833,
      "end": 949
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixed3",
        "optional": false,
        "typeAnnotation": null,
        "start": 960,
        "end": 966
      },
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
              "start": 967,
              "end": 968
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 967,
            "end": 968
          }
        ],
        "start": 966,
        "end": 969
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
                "name": "Record2",
                "optional": false,
                "typeAnnotation": null,
                "start": 973,
                "end": 980
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 981,
                      "end": 984
                    },
                    "start": 981,
                    "end": 984
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 986,
                      "end": 987
                    },
                    "typeArguments": null,
                    "start": 986,
                    "end": 987
                  }
                ],
                "start": 980,
                "end": 988
              },
              "start": 973,
              "end": 988
            },
            "start": 971,
            "end": 988
          },
          "start": 970,
          "end": 988
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
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 993,
                "end": 999
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1000,
                    "end": 1006
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1008,
                      "end": 1009
                    },
                    "typeArguments": null,
                    "start": 1008,
                    "end": 1009
                  }
                ],
                "start": 999,
                "end": 1010
              },
              "start": 993,
              "end": 1010
            },
            "start": 991,
            "end": 1010
          },
          "start": 990,
          "end": 1010
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1018,
                "end": 1019
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1022,
                "end": 1023
              },
              "start": 1018,
              "end": 1023
            },
            "directive": null,
            "start": 1018,
            "end": 1024
          }
        ],
        "start": 1012,
        "end": 1035
      },
      "expression": false,
      "start": 951,
      "end": 1035
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixed4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1046,
        "end": 1052
      },
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
              "start": 1053,
              "end": 1054
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1053,
            "end": 1054
          }
        ],
        "start": 1052,
        "end": 1055
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
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 1059,
                "end": 1065
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 1066,
                      "end": 1069
                    },
                    "start": 1066,
                    "end": 1069
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1071,
                      "end": 1072
                    },
                    "typeArguments": null,
                    "start": 1071,
                    "end": 1072
                  }
                ],
                "start": 1065,
                "end": 1073
              },
              "start": 1059,
              "end": 1073
            },
            "start": 1057,
            "end": 1073
          },
          "start": 1056,
          "end": 1073
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
                "name": "Record2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1078,
                "end": 1085
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1086,
                    "end": 1092
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1094,
                      "end": 1095
                    },
                    "typeArguments": null,
                    "start": 1094,
                    "end": 1095
                  }
                ],
                "start": 1085,
                "end": 1096
              },
              "start": 1078,
              "end": 1096
            },
            "start": 1076,
            "end": 1096
          },
          "start": 1075,
          "end": 1096
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1104,
                "end": 1105
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1108,
                "end": 1109
              },
              "start": 1104,
              "end": 1109
            },
            "directive": null,
            "start": 1104,
            "end": 1110
          }
        ],
        "start": 1098,
        "end": 1121
      },
      "expression": false,
      "start": 1037,
      "end": 1121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 221,
  "end": 1121
}
```
