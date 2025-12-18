__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 213
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
              "start": 214,
              "end": 215
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 214,
            "end": 215
          }
        ],
        "start": 213,
        "end": 216
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
              "name": "commonMethodType",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 239
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 243,
                    "end": 249
                  },
                  "start": 241,
                  "end": 249
                },
                "start": 240,
                "end": 249
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 252,
                "end": 258
              },
              "start": 250,
              "end": 258
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 223,
            "end": 259
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonPropertyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 282
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 284,
                "end": 290
              },
              "start": 282,
              "end": 290
            },
            "accessibility": null,
            "static": false,
            "start": 264,
            "end": 291
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 325
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "start": 329,
                      "end": 330
                    },
                    "typeArguments": null,
                    "start": 329,
                    "end": 330
                  },
                  "start": 327,
                  "end": 330
                },
                "start": 326,
                "end": 330
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
                  "start": 333,
                  "end": 334
                },
                "typeArguments": null,
                "start": 333,
                "end": 334
              },
              "start": 331,
              "end": 334
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 296,
            "end": 335
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "methodOnlyInI1",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 355
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 359,
                    "end": 365
                  },
                  "start": 357,
                  "end": 365
                },
                "start": 356,
                "end": 365
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 368,
                "end": 374
              },
              "start": 366,
              "end": 374
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 341,
            "end": 375
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propertyOnlyInI1",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 396
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 398,
                "end": 404
              },
              "start": 396,
              "end": 404
            },
            "accessibility": null,
            "static": false,
            "start": 380,
            "end": 405
          }
        ],
        "start": 217,
        "end": 407
      },
      "declare": false,
      "start": 201,
      "end": 407
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 418,
        "end": 420
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
              "start": 421,
              "end": 422
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 421,
            "end": 422
          }
        ],
        "start": 420,
        "end": 423
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
              "name": "commonMethodType",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 446
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 450,
                    "end": 456
                  },
                  "start": 448,
                  "end": 456
                },
                "start": 447,
                "end": 456
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 459,
                "end": 465
              },
              "start": 457,
              "end": 465
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 430,
            "end": 466
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonPropertyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 471,
              "end": 489
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 491,
                "end": 497
              },
              "start": 489,
              "end": 497
            },
            "accessibility": null,
            "static": false,
            "start": 471,
            "end": 498
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 532
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "start": 536,
                      "end": 537
                    },
                    "typeArguments": null,
                    "start": 536,
                    "end": 537
                  },
                  "start": 534,
                  "end": 537
                },
                "start": 533,
                "end": 537
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
                  "start": 540,
                  "end": 541
                },
                "typeArguments": null,
                "start": 540,
                "end": 541
              },
              "start": 538,
              "end": 541
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 503,
            "end": 542
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "methodOnlyInI2",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 562
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 566,
                    "end": 572
                  },
                  "start": 564,
                  "end": 572
                },
                "start": 563,
                "end": 572
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 575,
                "end": 581
              },
              "start": 573,
              "end": 581
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 548,
            "end": 582
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propertyOnlyInI2",
              "optional": false,
              "typeAnnotation": null,
              "start": 587,
              "end": 603
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 605,
                "end": 611
              },
              "start": 603,
              "end": 611
            },
            "accessibility": null,
            "static": false,
            "start": 587,
            "end": 612
          }
        ],
        "start": 424,
        "end": 614
      },
      "declare": false,
      "start": 408,
      "end": 614
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
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 777,
                  "end": 779
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 780,
                      "end": 786
                    }
                  ],
                  "start": 779,
                  "end": 787
                },
                "start": 777,
                "end": 787
              },
              "start": 775,
              "end": 787
            },
            "start": 773,
            "end": 787
          },
          "init": null,
          "definite": false,
          "start": 773,
          "end": 787
        }
      ],
      "declare": false,
      "start": 769,
      "end": 788
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
            "name": "i2",
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
                  "start": 797,
                  "end": 799
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 800,
                      "end": 806
                    }
                  ],
                  "start": 799,
                  "end": 807
                },
                "start": 797,
                "end": 807
              },
              "start": 795,
              "end": 807
            },
            "start": 793,
            "end": 807
          },
          "init": null,
          "definite": false,
          "start": 793,
          "end": 807
        }
      ],
      "declare": false,
      "start": 789,
      "end": 808
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
            "name": "i1Ori2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 821,
                      "end": 823
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 824,
                          "end": 830
                        }
                      ],
                      "start": 823,
                      "end": 831
                    },
                    "start": 821,
                    "end": 831
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 834,
                      "end": 836
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 837,
                          "end": 843
                        }
                      ],
                      "start": 836,
                      "end": 844
                    },
                    "start": 834,
                    "end": 844
                  }
                ],
                "start": 821,
                "end": 844
              },
              "start": 819,
              "end": 844
            },
            "start": 813,
            "end": 844
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 847,
            "end": 849
          },
          "definite": false,
          "start": 813,
          "end": 849
        }
      ],
      "declare": false,
      "start": 809,
      "end": 850
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
            "name": "i1Ori2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 863,
                      "end": 865
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 866,
                          "end": 872
                        }
                      ],
                      "start": 865,
                      "end": 873
                    },
                    "start": 863,
                    "end": 873
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 876,
                      "end": 878
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 879,
                          "end": 885
                        }
                      ],
                      "start": 878,
                      "end": 886
                    },
                    "start": 876,
                    "end": 886
                  }
                ],
                "start": 863,
                "end": 886
              },
              "start": 861,
              "end": 886
            },
            "start": 855,
            "end": 886
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 889,
            "end": 891
          },
          "definite": false,
          "start": 855,
          "end": 891
        }
      ],
      "declare": false,
      "start": 851,
      "end": 892
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
            "name": "i1Ori2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 905,
                      "end": 907
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 908,
                          "end": 914
                        }
                      ],
                      "start": 907,
                      "end": 915
                    },
                    "start": 905,
                    "end": 915
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 918,
                      "end": 920
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 921,
                          "end": 927
                        }
                      ],
                      "start": 920,
                      "end": 928
                    },
                    "start": 918,
                    "end": 928
                  }
                ],
                "start": 905,
                "end": 928
              },
              "start": 903,
              "end": 928
            },
            "start": 897,
            "end": 928
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
                  "name": "commonPropertyType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 948,
                  "end": 966
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 968,
                  "end": 975
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 948,
                "end": 975
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "commonMethodType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 981,
                  "end": 997
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 999,
                      "end": 1000
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1003,
                    "end": 1004
                  },
                  "id": null,
                  "generator": false,
                  "start": 999,
                  "end": 1004
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 981,
                "end": 1004
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "commonMethodWithTypeParameter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1010,
                  "end": 1039
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1041,
                      "end": 1042
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1046,
                    "end": 1047
                  },
                  "id": null,
                  "generator": false,
                  "start": 1041,
                  "end": 1047
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1010,
                "end": 1047
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "methodOnlyInI1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1054,
                  "end": 1068
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1070,
                      "end": 1071
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1075,
                    "end": 1076
                  },
                  "id": null,
                  "generator": false,
                  "start": 1070,
                  "end": 1076
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1054,
                "end": 1076
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyOnlyInI1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1082,
                  "end": 1098
                },
                "value": {
                  "type": "Literal",
                  "value": "Hello",
                  "raw": "\"Hello\"",
                  "start": 1100,
                  "end": 1107
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1082,
                "end": 1107
              }
            ],
            "start": 931,
            "end": 1110
          },
          "definite": false,
          "start": 897,
          "end": 1110
        }
      ],
      "declare": false,
      "start": 893,
      "end": 1111
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
            "name": "i1Ori2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1124,
                      "end": 1126
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1127,
                          "end": 1133
                        }
                      ],
                      "start": 1126,
                      "end": 1134
                    },
                    "start": 1124,
                    "end": 1134
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1137,
                      "end": 1139
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1140,
                          "end": 1146
                        }
                      ],
                      "start": 1139,
                      "end": 1147
                    },
                    "start": 1137,
                    "end": 1147
                  }
                ],
                "start": 1124,
                "end": 1147
              },
              "start": 1122,
              "end": 1147
            },
            "start": 1116,
            "end": 1147
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
                  "name": "commonPropertyType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1167,
                  "end": 1185
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1187,
                  "end": 1194
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1167,
                "end": 1194
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "commonMethodType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1200,
                  "end": 1216
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1218,
                      "end": 1219
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1222,
                    "end": 1223
                  },
                  "id": null,
                  "generator": false,
                  "start": 1218,
                  "end": 1223
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1200,
                "end": 1223
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "commonMethodWithTypeParameter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1229,
                  "end": 1258
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1260,
                      "end": 1261
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1265,
                    "end": 1266
                  },
                  "id": null,
                  "generator": false,
                  "start": 1260,
                  "end": 1266
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1229,
                "end": 1266
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "methodOnlyInI2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1273,
                  "end": 1287
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1289,
                      "end": 1290
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1294,
                    "end": 1295
                  },
                  "id": null,
                  "generator": false,
                  "start": 1289,
                  "end": 1295
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1273,
                "end": 1295
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyOnlyInI2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1301,
                  "end": 1317
                },
                "value": {
                  "type": "Literal",
                  "value": "Hello",
                  "raw": "\"Hello\"",
                  "start": 1319,
                  "end": 1326
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1301,
                "end": 1326
              }
            ],
            "start": 1150,
            "end": 1329
          },
          "definite": false,
          "start": 1116,
          "end": 1329
        }
      ],
      "declare": false,
      "start": 1112,
      "end": 1330
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
            "name": "i1Ori2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1343,
                      "end": 1345
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1346,
                          "end": 1352
                        }
                      ],
                      "start": 1345,
                      "end": 1353
                    },
                    "start": 1343,
                    "end": 1353
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1356,
                      "end": 1358
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1359,
                          "end": 1365
                        }
                      ],
                      "start": 1358,
                      "end": 1366
                    },
                    "start": 1356,
                    "end": 1366
                  }
                ],
                "start": 1343,
                "end": 1366
              },
              "start": 1341,
              "end": 1366
            },
            "start": 1335,
            "end": 1366
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
                  "name": "commonPropertyType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1398,
                  "end": 1416
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1418,
                  "end": 1425
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1398,
                "end": 1425
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "commonMethodType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1431,
                  "end": 1447
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1449,
                      "end": 1450
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1453,
                    "end": 1454
                  },
                  "id": null,
                  "generator": false,
                  "start": 1449,
                  "end": 1454
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1431,
                "end": 1454
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "commonMethodWithTypeParameter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1460,
                  "end": 1489
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1491,
                      "end": 1492
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1496,
                    "end": 1497
                  },
                  "id": null,
                  "generator": false,
                  "start": 1491,
                  "end": 1497
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1460,
                "end": 1497
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "methodOnlyInI1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1503,
                  "end": 1517
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1519,
                      "end": 1520
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1524,
                    "end": 1525
                  },
                  "id": null,
                  "generator": false,
                  "start": 1519,
                  "end": 1525
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1503,
                "end": 1525
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyOnlyInI1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1531,
                  "end": 1547
                },
                "value": {
                  "type": "Literal",
                  "value": "Hello",
                  "raw": "\"Hello\"",
                  "start": 1549,
                  "end": 1556
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1531,
                "end": 1556
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "methodOnlyInI2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1562,
                  "end": 1576
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1578,
                      "end": 1579
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1583,
                    "end": 1584
                  },
                  "id": null,
                  "generator": false,
                  "start": 1578,
                  "end": 1584
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1562,
                "end": 1584
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyOnlyInI2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1590,
                  "end": 1606
                },
                "value": {
                  "type": "Literal",
                  "value": "Hello",
                  "raw": "\"Hello\"",
                  "start": 1608,
                  "end": 1615
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1590,
                "end": 1615
              }
            ],
            "start": 1369,
            "end": 1618
          },
          "definite": false,
          "start": 1335,
          "end": 1618
        }
      ],
      "declare": false,
      "start": 1331,
      "end": 1619
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
            "name": "arrayI1OrI2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1638,
                  "end": 1643
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1644,
                            "end": 1646
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1647,
                                "end": 1653
                              }
                            ],
                            "start": 1646,
                            "end": 1654
                          },
                          "start": 1644,
                          "end": 1654
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1657,
                            "end": 1659
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1660,
                                "end": 1666
                              }
                            ],
                            "start": 1659,
                            "end": 1667
                          },
                          "start": 1657,
                          "end": 1667
                        }
                      ],
                      "start": 1644,
                      "end": 1667
                    }
                  ],
                  "start": 1643,
                  "end": 1668
                },
                "start": 1638,
                "end": 1668
              },
              "start": 1636,
              "end": 1668
            },
            "start": 1625,
            "end": 1668
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1672,
                "end": 1674
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1676,
                "end": 1678
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "commonPropertyType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1701,
                      "end": 1719
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1721,
                      "end": 1728
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1701,
                    "end": 1728
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "commonMethodType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1738,
                      "end": 1754
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1756,
                          "end": 1757
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1760,
                        "end": 1761
                      },
                      "id": null,
                      "generator": false,
                      "start": 1756,
                      "end": 1761
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1738,
                    "end": 1761
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "commonMethodWithTypeParameter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1771,
                      "end": 1800
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1802,
                          "end": 1803
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1807,
                        "end": 1808
                      },
                      "id": null,
                      "generator": false,
                      "start": 1802,
                      "end": 1808
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1771,
                    "end": 1808
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "methodOnlyInI1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1819,
                      "end": 1833
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1835,
                          "end": 1836
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1840,
                        "end": 1841
                      },
                      "id": null,
                      "generator": false,
                      "start": 1835,
                      "end": 1841
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1819,
                    "end": 1841
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "propertyOnlyInI1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1851,
                      "end": 1867
                    },
                    "value": {
                      "type": "Literal",
                      "value": "Hello",
                      "raw": "\"Hello\"",
                      "start": 1869,
                      "end": 1876
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1851,
                    "end": 1876
                  }
                ],
                "start": 1680,
                "end": 1883
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "commonPropertyType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1910,
                      "end": 1928
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1930,
                      "end": 1937
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1910,
                    "end": 1937
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "commonMethodType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1947,
                      "end": 1963
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1965,
                          "end": 1966
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1969,
                        "end": 1970
                      },
                      "id": null,
                      "generator": false,
                      "start": 1965,
                      "end": 1970
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1947,
                    "end": 1970
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "commonMethodWithTypeParameter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1980,
                      "end": 2009
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2011,
                          "end": 2012
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2016,
                        "end": 2017
                      },
                      "id": null,
                      "generator": false,
                      "start": 2011,
                      "end": 2017
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1980,
                    "end": 2017
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "methodOnlyInI2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2028,
                      "end": 2042
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2044,
                          "end": 2045
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2049,
                        "end": 2050
                      },
                      "id": null,
                      "generator": false,
                      "start": 2044,
                      "end": 2050
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2028,
                    "end": 2050
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "propertyOnlyInI2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2060,
                      "end": 2076
                    },
                    "value": {
                      "type": "Literal",
                      "value": "Hello",
                      "raw": "\"Hello\"",
                      "start": 2078,
                      "end": 2085
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2060,
                    "end": 2085
                  }
                ],
                "start": 1889,
                "end": 2092
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "commonPropertyType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2127,
                      "end": 2145
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 2147,
                      "end": 2154
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2127,
                    "end": 2154
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "commonMethodType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2164,
                      "end": 2180
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2182,
                          "end": 2183
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2186,
                        "end": 2187
                      },
                      "id": null,
                      "generator": false,
                      "start": 2182,
                      "end": 2187
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2164,
                    "end": 2187
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "commonMethodWithTypeParameter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2197,
                      "end": 2226
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2228,
                          "end": 2229
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2233,
                        "end": 2234
                      },
                      "id": null,
                      "generator": false,
                      "start": 2228,
                      "end": 2234
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2197,
                    "end": 2234
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "methodOnlyInI1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2244,
                      "end": 2258
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2260,
                          "end": 2261
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2265,
                        "end": 2266
                      },
                      "id": null,
                      "generator": false,
                      "start": 2260,
                      "end": 2266
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2244,
                    "end": 2266
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "propertyOnlyInI1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2276,
                      "end": 2292
                    },
                    "value": {
                      "type": "Literal",
                      "value": "Hello",
                      "raw": "\"Hello\"",
                      "start": 2294,
                      "end": 2301
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2276,
                    "end": 2301
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "methodOnlyInI2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2311,
                      "end": 2325
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2327,
                          "end": 2328
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2332,
                        "end": 2333
                      },
                      "id": null,
                      "generator": false,
                      "start": 2327,
                      "end": 2333
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2311,
                    "end": 2333
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "propertyOnlyInI2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2343,
                      "end": 2359
                    },
                    "value": {
                      "type": "Literal",
                      "value": "Hello",
                      "raw": "\"Hello\"",
                      "start": 2361,
                      "end": 2368
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2343,
                    "end": 2368
                  }
                ],
                "start": 2094,
                "end": 2375
              }
            ],
            "start": 1671,
            "end": 2376
          },
          "definite": false,
          "start": 1625,
          "end": 2376
        }
      ],
      "declare": false,
      "start": 1621,
      "end": 2377
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2389,
        "end": 2392
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
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2399,
              "end": 2430
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 2434,
                    "end": 2440
                  },
                  "start": 2432,
                  "end": 2440
                },
                "start": 2431,
                "end": 2440
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
                    "start": 2445,
                    "end": 2451
                  },
                  "start": 2443,
                  "end": 2451
                },
                "start": 2442,
                "end": 2451
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2454,
                "end": 2460
              },
              "start": 2452,
              "end": 2460
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2399,
            "end": 2461
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonPropertyDifferentType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2466,
              "end": 2493
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2495,
                "end": 2501
              },
              "start": 2493,
              "end": 2501
            },
            "accessibility": null,
            "static": false,
            "start": 2466,
            "end": 2502
          }
        ],
        "start": 2393,
        "end": 2504
      },
      "declare": false,
      "start": 2379,
      "end": 2504
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I21",
        "optional": false,
        "typeAnnotation": null,
        "start": 2515,
        "end": 2518
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
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2525,
              "end": 2556
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 2560,
                    "end": 2566
                  },
                  "start": 2558,
                  "end": 2566
                },
                "start": 2557,
                "end": 2566
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
                    "start": 2571,
                    "end": 2577
                  },
                  "start": 2569,
                  "end": 2577
                },
                "start": 2568,
                "end": 2577
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2580,
                "end": 2586
              },
              "start": 2578,
              "end": 2586
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2525,
            "end": 2587
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonPropertyDifferentType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2592,
              "end": 2619
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2621,
                "end": 2627
              },
              "start": 2619,
              "end": 2627
            },
            "accessibility": null,
            "static": false,
            "start": 2592,
            "end": 2628
          }
        ],
        "start": 2519,
        "end": 2630
      },
      "declare": false,
      "start": 2505,
      "end": 2630
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
            "name": "i11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2640,
                  "end": 2643
                },
                "typeArguments": null,
                "start": 2640,
                "end": 2643
              },
              "start": 2638,
              "end": 2643
            },
            "start": 2635,
            "end": 2643
          },
          "init": null,
          "definite": false,
          "start": 2635,
          "end": 2643
        }
      ],
      "declare": false,
      "start": 2631,
      "end": 2644
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
            "name": "i21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I21",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2654,
                  "end": 2657
                },
                "typeArguments": null,
                "start": 2654,
                "end": 2657
              },
              "start": 2652,
              "end": 2657
            },
            "start": 2649,
            "end": 2657
          },
          "init": null,
          "definite": false,
          "start": 2649,
          "end": 2657
        }
      ],
      "declare": false,
      "start": 2645,
      "end": 2658
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
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2673,
                      "end": 2676
                    },
                    "typeArguments": null,
                    "start": 2673,
                    "end": 2676
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2679,
                      "end": 2682
                    },
                    "typeArguments": null,
                    "start": 2679,
                    "end": 2682
                  }
                ],
                "start": 2673,
                "end": 2682
              },
              "start": 2671,
              "end": 2682
            },
            "start": 2663,
            "end": 2682
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "i11",
            "optional": false,
            "typeAnnotation": null,
            "start": 2685,
            "end": 2688
          },
          "definite": false,
          "start": 2663,
          "end": 2688
        }
      ],
      "declare": false,
      "start": 2659,
      "end": 2689
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
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2704,
                      "end": 2707
                    },
                    "typeArguments": null,
                    "start": 2704,
                    "end": 2707
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2710,
                      "end": 2713
                    },
                    "typeArguments": null,
                    "start": 2710,
                    "end": 2713
                  }
                ],
                "start": 2704,
                "end": 2713
              },
              "start": 2702,
              "end": 2713
            },
            "start": 2694,
            "end": 2713
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "i21",
            "optional": false,
            "typeAnnotation": null,
            "start": 2716,
            "end": 2719
          },
          "definite": false,
          "start": 2694,
          "end": 2719
        }
      ],
      "declare": false,
      "start": 2690,
      "end": 2720
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
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2735,
                      "end": 2738
                    },
                    "typeArguments": null,
                    "start": 2735,
                    "end": 2738
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2741,
                      "end": 2744
                    },
                    "typeArguments": null,
                    "start": 2741,
                    "end": 2744
                  }
                ],
                "start": 2735,
                "end": 2744
              },
              "start": 2733,
              "end": 2744
            },
            "start": 2725,
            "end": 2744
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
                  "name": "commonMethodDifferentReturnType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2769,
                  "end": 2800
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2803,
                      "end": 2804
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2806,
                      "end": 2807
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2826,
                              "end": 2827
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2830,
                                  "end": 2831
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "charAt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2832,
                                  "end": 2838
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2830,
                                "end": 2838
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2839,
                                  "end": 2840
                                }
                              ],
                              "optional": false,
                              "start": 2830,
                              "end": 2841
                            },
                            "definite": false,
                            "start": 2826,
                            "end": 2841
                          }
                        ],
                        "declare": false,
                        "start": 2822,
                        "end": 2842
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2858,
                          "end": 2859
                        },
                        "start": 2851,
                        "end": 2860
                      }
                    ],
                    "start": 2812,
                    "end": 2868
                  },
                  "id": null,
                  "generator": false,
                  "start": 2802,
                  "end": 2868
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2769,
                "end": 2868
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "commonPropertyDifferentType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2874,
                  "end": 2901
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 2903,
                  "end": 2910
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2874,
                "end": 2910
              }
            ],
            "start": 2747,
            "end": 2915
          },
          "definite": false,
          "start": 2725,
          "end": 2915
        }
      ],
      "declare": false,
      "start": 2721,
      "end": 2916
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
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2931,
                      "end": 2934
                    },
                    "typeArguments": null,
                    "start": 2931,
                    "end": 2934
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2937,
                      "end": 2940
                    },
                    "typeArguments": null,
                    "start": 2937,
                    "end": 2940
                  }
                ],
                "start": 2931,
                "end": 2940
              },
              "start": 2929,
              "end": 2940
            },
            "start": 2921,
            "end": 2940
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
                  "name": "commonMethodDifferentReturnType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2965,
                  "end": 2996
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2999,
                      "end": 3000
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3002,
                      "end": 3003
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3022,
                              "end": 3023
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3026,
                                  "end": 3027
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "charCodeAt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3028,
                                  "end": 3038
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3026,
                                "end": 3038
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3039,
                                  "end": 3040
                                }
                              ],
                              "optional": false,
                              "start": 3026,
                              "end": 3041
                            },
                            "definite": false,
                            "start": 3022,
                            "end": 3041
                          }
                        ],
                        "declare": false,
                        "start": 3018,
                        "end": 3042
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3058,
                          "end": 3059
                        },
                        "start": 3051,
                        "end": 3060
                      }
                    ],
                    "start": 3008,
                    "end": 3066
                  },
                  "id": null,
                  "generator": false,
                  "start": 2998,
                  "end": 3066
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2965,
                "end": 3066
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "commonPropertyDifferentType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3072,
                  "end": 3099
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 3101,
                  "end": 3103
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3072,
                "end": 3103
              }
            ],
            "start": 2943,
            "end": 3106
          },
          "definite": false,
          "start": 2921,
          "end": 3106
        }
      ],
      "declare": false,
      "start": 2917,
      "end": 3107
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
            "name": "arrayOrI11OrI21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3129,
                  "end": 3134
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I11",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3135,
                            "end": 3138
                          },
                          "typeArguments": null,
                          "start": 3135,
                          "end": 3138
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I21",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3141,
                            "end": 3144
                          },
                          "typeArguments": null,
                          "start": 3141,
                          "end": 3144
                        }
                      ],
                      "start": 3135,
                      "end": 3144
                    }
                  ],
                  "start": 3134,
                  "end": 3145
                },
                "start": 3129,
                "end": 3145
              },
              "start": 3127,
              "end": 3145
            },
            "start": 3112,
            "end": 3145
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i11",
                "optional": false,
                "typeAnnotation": null,
                "start": 3149,
                "end": 3152
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i21",
                "optional": false,
                "typeAnnotation": null,
                "start": 3154,
                "end": 3157
              },
              {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3159,
                  "end": 3162
                },
                "operator": "||",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i21",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3166,
                  "end": 3169
                },
                "start": 3159,
                "end": 3169
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "commonMethodDifferentReturnType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3201,
                      "end": 3232
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3235,
                          "end": 3236
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3238,
                          "end": 3239
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "z",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3262,
                                  "end": 3263
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3266,
                                      "end": 3267
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "charAt",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3268,
                                      "end": 3274
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3266,
                                    "end": 3274
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3275,
                                      "end": 3276
                                    }
                                  ],
                                  "optional": false,
                                  "start": 3266,
                                  "end": 3277
                                },
                                "definite": false,
                                "start": 3262,
                                "end": 3277
                              }
                            ],
                            "declare": false,
                            "start": 3258,
                            "end": 3278
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3298,
                              "end": 3299
                            },
                            "start": 3291,
                            "end": 3300
                          }
                        ],
                        "start": 3244,
                        "end": 3310
                      },
                      "id": null,
                      "generator": false,
                      "start": 3234,
                      "end": 3310
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3201,
                    "end": 3310
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "commonPropertyDifferentType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3320,
                      "end": 3347
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 3349,
                      "end": 3356
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3320,
                    "end": 3356
                  }
                ],
                "start": 3171,
                "end": 3363
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "commonMethodDifferentReturnType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3395,
                      "end": 3426
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3429,
                          "end": 3430
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3432,
                          "end": 3433
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "z",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3456,
                                  "end": 3457
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3460,
                                      "end": 3461
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "charCodeAt",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3462,
                                      "end": 3472
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3460,
                                    "end": 3472
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3473,
                                      "end": 3474
                                    }
                                  ],
                                  "optional": false,
                                  "start": 3460,
                                  "end": 3475
                                },
                                "definite": false,
                                "start": 3456,
                                "end": 3475
                              }
                            ],
                            "declare": false,
                            "start": 3452,
                            "end": 3476
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3496,
                              "end": 3497
                            },
                            "start": 3489,
                            "end": 3498
                          }
                        ],
                        "start": 3438,
                        "end": 3508
                      },
                      "id": null,
                      "generator": false,
                      "start": 3428,
                      "end": 3508
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3395,
                    "end": 3508
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "commonPropertyDifferentType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3518,
                      "end": 3545
                    },
                    "value": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 3547,
                      "end": 3549
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3518,
                    "end": 3549
                  }
                ],
                "start": 3365,
                "end": 3556
              }
            ],
            "start": 3148,
            "end": 3557
          },
          "definite": false,
          "start": 3112,
          "end": 3557
        }
      ],
      "declare": false,
      "start": 3108,
      "end": 3558
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 201,
  "end": 3558
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 201,
    "end": 210,
    "range": [
      201,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 211,
    "end": 213,
    "range": [
      211,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodType",
    "start": 223,
    "end": 239,
    "range": [
      223,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 243,
    "end": 249,
    "range": [
      243,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 252,
    "end": 258,
    "range": [
      252,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "commonPropertyType",
    "start": 264,
    "end": 282,
    "range": [
      264,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 284,
    "end": 290,
    "range": [
      284,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodWithTypeParameter",
    "start": 296,
    "end": 325,
    "range": [
      296,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "methodOnlyInI1",
    "start": 341,
    "end": 355,
    "range": [
      341,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 359,
    "end": 365,
    "range": [
      359,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 368,
    "end": 374,
    "range": [
      368,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyOnlyInI1",
    "start": 380,
    "end": 396,
    "range": [
      380,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 398,
    "end": 404,
    "range": [
      398,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 408,
    "end": 417,
    "range": [
      408,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 418,
    "end": 420,
    "range": [
      418,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodType",
    "start": 430,
    "end": 446,
    "range": [
      430,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 450,
    "end": 456,
    "range": [
      450,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 459,
    "end": 465,
    "range": [
      459,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "commonPropertyType",
    "start": 471,
    "end": 489,
    "range": [
      471,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 491,
    "end": 497,
    "range": [
      491,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodWithTypeParameter",
    "start": 503,
    "end": 532,
    "range": [
      503,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "methodOnlyInI2",
    "start": 548,
    "end": 562,
    "range": [
      548,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 566,
    "end": 572,
    "range": [
      566,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 575,
    "end": 581,
    "range": [
      575,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyOnlyInI2",
    "start": 587,
    "end": 603,
    "range": [
      587,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 605,
    "end": 611,
    "range": [
      605,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 769,
    "end": 772,
    "range": [
      769,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 773,
    "end": 775,
    "range": [
      773,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 777,
    "end": 779,
    "range": [
      777,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 780,
    "end": 786,
    "range": [
      780,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 789,
    "end": 792,
    "range": [
      789,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 793,
    "end": 795,
    "range": [
      793,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 797,
    "end": 799,
    "range": [
      797,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 800,
    "end": 806,
    "range": [
      800,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 809,
    "end": 812,
    "range": [
      809,
      812
    ]
  },
  {
    "type": "Identifier",
    "value": "i1Ori2",
    "start": 813,
    "end": 819,
    "range": [
      813,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 821,
    "end": 823,
    "range": [
      821,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 824,
    "end": 830,
    "range": [
      824,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 834,
    "end": 836,
    "range": [
      834,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 837,
    "end": 843,
    "range": [
      837,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 847,
    "end": 849,
    "range": [
      847,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 851,
    "end": 854,
    "range": [
      851,
      854
    ]
  },
  {
    "type": "Identifier",
    "value": "i1Ori2",
    "start": 855,
    "end": 861,
    "range": [
      855,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 863,
    "end": 865,
    "range": [
      863,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 866,
    "end": 872,
    "range": [
      866,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 876,
    "end": 878,
    "range": [
      876,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 879,
    "end": 885,
    "range": [
      879,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 889,
    "end": 891,
    "range": [
      889,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 893,
    "end": 896,
    "range": [
      893,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "i1Ori2",
    "start": 897,
    "end": 903,
    "range": [
      897,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 905,
    "end": 907,
    "range": [
      905,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 908,
    "end": 914,
    "range": [
      908,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 918,
    "end": 920,
    "range": [
      918,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 921,
    "end": 927,
    "range": [
      921,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Identifier",
    "value": "commonPropertyType",
    "start": 948,
    "end": 966,
    "range": [
      948,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 968,
    "end": 975,
    "range": [
      968,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodType",
    "start": 981,
    "end": 997,
    "range": [
      981,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1000,
    "end": 1002,
    "range": [
      1000,
      1002
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodWithTypeParameter",
    "start": 1010,
    "end": 1039,
    "range": [
      1010,
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
    "value": "a",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1043,
    "end": 1045,
    "range": [
      1043,
      1045
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Identifier",
    "value": "methodOnlyInI1",
    "start": 1054,
    "end": 1068,
    "range": [
      1054,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1072,
    "end": 1074,
    "range": [
      1072,
      1074
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "propertyOnlyInI1",
    "start": 1082,
    "end": 1098,
    "range": [
      1082,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 1100,
    "end": 1107,
    "range": [
      1100,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1112,
    "end": 1115,
    "range": [
      1112,
      1115
    ]
  },
  {
    "type": "Identifier",
    "value": "i1Ori2",
    "start": 1116,
    "end": 1122,
    "range": [
      1116,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 1124,
    "end": 1126,
    "range": [
      1124,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1127,
    "end": 1133,
    "range": [
      1127,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1137,
    "end": 1139,
    "range": [
      1137,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1140,
    "end": 1146,
    "range": [
      1140,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "commonPropertyType",
    "start": 1167,
    "end": 1185,
    "range": [
      1167,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1187,
    "end": 1194,
    "range": [
      1187,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodType",
    "start": 1200,
    "end": 1216,
    "range": [
      1200,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1219,
    "end": 1221,
    "range": [
      1219,
      1221
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodWithTypeParameter",
    "start": 1229,
    "end": 1258,
    "range": [
      1229,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1262,
    "end": 1264,
    "range": [
      1262,
      1264
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "methodOnlyInI2",
    "start": 1273,
    "end": 1287,
    "range": [
      1273,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1291,
    "end": 1293,
    "range": [
      1291,
      1293
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyOnlyInI2",
    "start": 1301,
    "end": 1317,
    "range": [
      1301,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 1319,
    "end": 1326,
    "range": [
      1319,
      1326
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1331,
    "end": 1334,
    "range": [
      1331,
      1334
    ]
  },
  {
    "type": "Identifier",
    "value": "i1Ori2",
    "start": 1335,
    "end": 1341,
    "range": [
      1335,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 1343,
    "end": 1345,
    "range": [
      1343,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1346,
    "end": 1352,
    "range": [
      1346,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1356,
    "end": 1358,
    "range": [
      1356,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1359,
    "end": 1365,
    "range": [
      1359,
      1365
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Identifier",
    "value": "commonPropertyType",
    "start": 1398,
    "end": 1416,
    "range": [
      1398,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1418,
    "end": 1425,
    "range": [
      1418,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodType",
    "start": 1431,
    "end": 1447,
    "range": [
      1431,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1450,
    "end": 1452,
    "range": [
      1450,
      1452
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodWithTypeParameter",
    "start": 1460,
    "end": 1489,
    "range": [
      1460,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1493,
    "end": 1495,
    "range": [
      1493,
      1495
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Identifier",
    "value": "methodOnlyInI1",
    "start": 1503,
    "end": 1517,
    "range": [
      1503,
      1517
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1521,
    "end": 1523,
    "range": [
      1521,
      1523
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1524,
    "end": 1525,
    "range": [
      1524,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyOnlyInI1",
    "start": 1531,
    "end": 1547,
    "range": [
      1531,
      1547
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 1549,
    "end": 1556,
    "range": [
      1549,
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
    "value": "methodOnlyInI2",
    "start": 1562,
    "end": 1576,
    "range": [
      1562,
      1576
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1576,
    "end": 1577,
    "range": [
      1576,
      1577
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1580,
    "end": 1582,
    "range": [
      1580,
      1582
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyOnlyInI2",
    "start": 1590,
    "end": 1606,
    "range": [
      1590,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 1608,
    "end": 1615,
    "range": [
      1608,
      1615
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1621,
    "end": 1624,
    "range": [
      1621,
      1624
    ]
  },
  {
    "type": "Identifier",
    "value": "arrayI1OrI2",
    "start": 1625,
    "end": 1636,
    "range": [
      1625,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1638,
    "end": 1643,
    "range": [
      1638,
      1643
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 1644,
    "end": 1646,
    "range": [
      1644,
      1646
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1647,
    "end": 1653,
    "range": [
      1647,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1653,
    "end": 1654,
    "range": [
      1653,
      1654
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1655,
    "end": 1656,
    "range": [
      1655,
      1656
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1657,
    "end": 1659,
    "range": [
      1657,
      1659
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1660,
    "end": 1666,
    "range": [
      1660,
      1666
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1666,
    "end": 1667,
    "range": [
      1666,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1667,
    "end": 1668,
    "range": [
      1667,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 1672,
    "end": 1674,
    "range": [
      1672,
      1674
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1674,
    "end": 1675,
    "range": [
      1674,
      1675
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 1676,
    "end": 1678,
    "range": [
      1676,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Identifier",
    "value": "commonPropertyType",
    "start": 1701,
    "end": 1719,
    "range": [
      1701,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1721,
    "end": 1728,
    "range": [
      1721,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodType",
    "start": 1738,
    "end": 1754,
    "range": [
      1738,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1757,
    "end": 1759,
    "range": [
      1757,
      1759
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodWithTypeParameter",
    "start": 1771,
    "end": 1800,
    "range": [
      1771,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1804,
    "end": 1806,
    "range": [
      1804,
      1806
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Identifier",
    "value": "methodOnlyInI1",
    "start": 1819,
    "end": 1833,
    "range": [
      1819,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1837,
    "end": 1839,
    "range": [
      1837,
      1839
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyOnlyInI1",
    "start": 1851,
    "end": 1867,
    "range": [
      1851,
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
    "type": "String",
    "value": "\"Hello\"",
    "start": 1869,
    "end": 1876,
    "range": [
      1869,
      1876
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1876,
    "end": 1877,
    "range": [
      1876,
      1877
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1882,
    "end": 1883,
    "range": [
      1882,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Identifier",
    "value": "commonPropertyType",
    "start": 1910,
    "end": 1928,
    "range": [
      1910,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1930,
    "end": 1937,
    "range": [
      1930,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodType",
    "start": 1947,
    "end": 1963,
    "range": [
      1947,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1965,
    "end": 1966,
    "range": [
      1965,
      1966
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1966,
    "end": 1968,
    "range": [
      1966,
      1968
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1969,
    "end": 1970,
    "range": [
      1969,
      1970
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1970,
    "end": 1971,
    "range": [
      1970,
      1971
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodWithTypeParameter",
    "start": 1980,
    "end": 2009,
    "range": [
      1980,
      2009
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2013,
    "end": 2015,
    "range": [
      2013,
      2015
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2016,
    "end": 2017,
    "range": [
      2016,
      2017
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2017,
    "end": 2018,
    "range": [
      2017,
      2018
    ]
  },
  {
    "type": "Identifier",
    "value": "methodOnlyInI2",
    "start": 2028,
    "end": 2042,
    "range": [
      2028,
      2042
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2042,
    "end": 2043,
    "range": [
      2042,
      2043
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2044,
    "end": 2045,
    "range": [
      2044,
      2045
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2046,
    "end": 2048,
    "range": [
      2046,
      2048
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyOnlyInI2",
    "start": 2060,
    "end": 2076,
    "range": [
      2060,
      2076
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2076,
    "end": 2077,
    "range": [
      2076,
      2077
    ]
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 2078,
    "end": 2085,
    "range": [
      2078,
      2085
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2085,
    "end": 2086,
    "range": [
      2085,
      2086
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
    "type": "Punctuator",
    "value": ",",
    "start": 2092,
    "end": 2093,
    "range": [
      2092,
      2093
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2094,
    "end": 2095,
    "range": [
      2094,
      2095
    ]
  },
  {
    "type": "Identifier",
    "value": "commonPropertyType",
    "start": 2127,
    "end": 2145,
    "range": [
      2127,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2147,
    "end": 2154,
    "range": [
      2147,
      2154
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2154,
    "end": 2155,
    "range": [
      2154,
      2155
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodType",
    "start": 2164,
    "end": 2180,
    "range": [
      2164,
      2180
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2180,
    "end": 2181,
    "range": [
      2180,
      2181
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2182,
    "end": 2183,
    "range": [
      2182,
      2183
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2183,
    "end": 2185,
    "range": [
      2183,
      2185
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2186,
    "end": 2187,
    "range": [
      2186,
      2187
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2187,
    "end": 2188,
    "range": [
      2187,
      2188
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodWithTypeParameter",
    "start": 2197,
    "end": 2226,
    "range": [
      2197,
      2226
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2226,
    "end": 2227,
    "range": [
      2226,
      2227
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2228,
    "end": 2229,
    "range": [
      2228,
      2229
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2230,
    "end": 2232,
    "range": [
      2230,
      2232
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2233,
    "end": 2234,
    "range": [
      2233,
      2234
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2234,
    "end": 2235,
    "range": [
      2234,
      2235
    ]
  },
  {
    "type": "Identifier",
    "value": "methodOnlyInI1",
    "start": 2244,
    "end": 2258,
    "range": [
      2244,
      2258
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2258,
    "end": 2259,
    "range": [
      2258,
      2259
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2260,
    "end": 2261,
    "range": [
      2260,
      2261
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2262,
    "end": 2264,
    "range": [
      2262,
      2264
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2265,
    "end": 2266,
    "range": [
      2265,
      2266
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2266,
    "end": 2267,
    "range": [
      2266,
      2267
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyOnlyInI1",
    "start": 2276,
    "end": 2292,
    "range": [
      2276,
      2292
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2292,
    "end": 2293,
    "range": [
      2292,
      2293
    ]
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 2294,
    "end": 2301,
    "range": [
      2294,
      2301
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2301,
    "end": 2302,
    "range": [
      2301,
      2302
    ]
  },
  {
    "type": "Identifier",
    "value": "methodOnlyInI2",
    "start": 2311,
    "end": 2325,
    "range": [
      2311,
      2325
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2325,
    "end": 2326,
    "range": [
      2325,
      2326
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2327,
    "end": 2328,
    "range": [
      2327,
      2328
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2329,
    "end": 2331,
    "range": [
      2329,
      2331
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2332,
    "end": 2333,
    "range": [
      2332,
      2333
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2333,
    "end": 2334,
    "range": [
      2333,
      2334
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyOnlyInI2",
    "start": 2343,
    "end": 2359,
    "range": [
      2343,
      2359
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2359,
    "end": 2360,
    "range": [
      2359,
      2360
    ]
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 2361,
    "end": 2368,
    "range": [
      2361,
      2368
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2368,
    "end": 2369,
    "range": [
      2368,
      2369
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2374,
    "end": 2375,
    "range": [
      2374,
      2375
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2375,
    "end": 2376,
    "range": [
      2375,
      2376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2376,
    "end": 2377,
    "range": [
      2376,
      2377
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2379,
    "end": 2388,
    "range": [
      2379,
      2388
    ]
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 2389,
    "end": 2392,
    "range": [
      2389,
      2392
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2393,
    "end": 2394,
    "range": [
      2393,
      2394
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 2399,
    "end": 2430,
    "range": [
      2399,
      2430
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2430,
    "end": 2431,
    "range": [
      2430,
      2431
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2431,
    "end": 2432,
    "range": [
      2431,
      2432
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2434,
    "end": 2440,
    "range": [
      2434,
      2440
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2440,
    "end": 2441,
    "range": [
      2440,
      2441
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2442,
    "end": 2443,
    "range": [
      2442,
      2443
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2443,
    "end": 2444,
    "range": [
      2443,
      2444
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2445,
    "end": 2451,
    "range": [
      2445,
      2451
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2451,
    "end": 2452,
    "range": [
      2451,
      2452
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2452,
    "end": 2453,
    "range": [
      2452,
      2453
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2454,
    "end": 2460,
    "range": [
      2454,
      2460
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2460,
    "end": 2461,
    "range": [
      2460,
      2461
    ]
  },
  {
    "type": "Identifier",
    "value": "commonPropertyDifferentType",
    "start": 2466,
    "end": 2493,
    "range": [
      2466,
      2493
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2493,
    "end": 2494,
    "range": [
      2493,
      2494
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2495,
    "end": 2501,
    "range": [
      2495,
      2501
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2501,
    "end": 2502,
    "range": [
      2501,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2503,
    "end": 2504,
    "range": [
      2503,
      2504
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2505,
    "end": 2514,
    "range": [
      2505,
      2514
    ]
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 2515,
    "end": 2518,
    "range": [
      2515,
      2518
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2519,
    "end": 2520,
    "range": [
      2519,
      2520
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 2525,
    "end": 2556,
    "range": [
      2525,
      2556
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2556,
    "end": 2557,
    "range": [
      2556,
      2557
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2557,
    "end": 2558,
    "range": [
      2557,
      2558
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2558,
    "end": 2559,
    "range": [
      2558,
      2559
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2560,
    "end": 2566,
    "range": [
      2560,
      2566
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2566,
    "end": 2567,
    "range": [
      2566,
      2567
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2568,
    "end": 2569,
    "range": [
      2568,
      2569
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2569,
    "end": 2570,
    "range": [
      2569,
      2570
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2571,
    "end": 2577,
    "range": [
      2571,
      2577
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2577,
    "end": 2578,
    "range": [
      2577,
      2578
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2578,
    "end": 2579,
    "range": [
      2578,
      2579
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2580,
    "end": 2586,
    "range": [
      2580,
      2586
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2586,
    "end": 2587,
    "range": [
      2586,
      2587
    ]
  },
  {
    "type": "Identifier",
    "value": "commonPropertyDifferentType",
    "start": 2592,
    "end": 2619,
    "range": [
      2592,
      2619
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2619,
    "end": 2620,
    "range": [
      2619,
      2620
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2621,
    "end": 2627,
    "range": [
      2621,
      2627
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2627,
    "end": 2628,
    "range": [
      2627,
      2628
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2629,
    "end": 2630,
    "range": [
      2629,
      2630
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2631,
    "end": 2634,
    "range": [
      2631,
      2634
    ]
  },
  {
    "type": "Identifier",
    "value": "i11",
    "start": 2635,
    "end": 2638,
    "range": [
      2635,
      2638
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2638,
    "end": 2639,
    "range": [
      2638,
      2639
    ]
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 2640,
    "end": 2643,
    "range": [
      2640,
      2643
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2643,
    "end": 2644,
    "range": [
      2643,
      2644
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2645,
    "end": 2648,
    "range": [
      2645,
      2648
    ]
  },
  {
    "type": "Identifier",
    "value": "i21",
    "start": 2649,
    "end": 2652,
    "range": [
      2649,
      2652
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2652,
    "end": 2653,
    "range": [
      2652,
      2653
    ]
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 2654,
    "end": 2657,
    "range": [
      2654,
      2657
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2657,
    "end": 2658,
    "range": [
      2657,
      2658
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2659,
    "end": 2662,
    "range": [
      2659,
      2662
    ]
  },
  {
    "type": "Identifier",
    "value": "i11Ori21",
    "start": 2663,
    "end": 2671,
    "range": [
      2663,
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
    "type": "Identifier",
    "value": "I11",
    "start": 2673,
    "end": 2676,
    "range": [
      2673,
      2676
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2677,
    "end": 2678,
    "range": [
      2677,
      2678
    ]
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 2679,
    "end": 2682,
    "range": [
      2679,
      2682
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2683,
    "end": 2684,
    "range": [
      2683,
      2684
    ]
  },
  {
    "type": "Identifier",
    "value": "i11",
    "start": 2685,
    "end": 2688,
    "range": [
      2685,
      2688
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2688,
    "end": 2689,
    "range": [
      2688,
      2689
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2690,
    "end": 2693,
    "range": [
      2690,
      2693
    ]
  },
  {
    "type": "Identifier",
    "value": "i11Ori21",
    "start": 2694,
    "end": 2702,
    "range": [
      2694,
      2702
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2702,
    "end": 2703,
    "range": [
      2702,
      2703
    ]
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 2704,
    "end": 2707,
    "range": [
      2704,
      2707
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2708,
    "end": 2709,
    "range": [
      2708,
      2709
    ]
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 2710,
    "end": 2713,
    "range": [
      2710,
      2713
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2714,
    "end": 2715,
    "range": [
      2714,
      2715
    ]
  },
  {
    "type": "Identifier",
    "value": "i21",
    "start": 2716,
    "end": 2719,
    "range": [
      2716,
      2719
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2719,
    "end": 2720,
    "range": [
      2719,
      2720
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2721,
    "end": 2724,
    "range": [
      2721,
      2724
    ]
  },
  {
    "type": "Identifier",
    "value": "i11Ori21",
    "start": 2725,
    "end": 2733,
    "range": [
      2725,
      2733
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2733,
    "end": 2734,
    "range": [
      2733,
      2734
    ]
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 2735,
    "end": 2738,
    "range": [
      2735,
      2738
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2739,
    "end": 2740,
    "range": [
      2739,
      2740
    ]
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 2741,
    "end": 2744,
    "range": [
      2741,
      2744
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2745,
    "end": 2746,
    "range": [
      2745,
      2746
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2747,
    "end": 2748,
    "range": [
      2747,
      2748
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 2769,
    "end": 2800,
    "range": [
      2769,
      2800
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2802,
    "end": 2803,
    "range": [
      2802,
      2803
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2803,
    "end": 2804,
    "range": [
      2803,
      2804
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2804,
    "end": 2805,
    "range": [
      2804,
      2805
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2806,
    "end": 2807,
    "range": [
      2806,
      2807
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2807,
    "end": 2808,
    "range": [
      2807,
      2808
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2809,
    "end": 2811,
    "range": [
      2809,
      2811
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2812,
    "end": 2813,
    "range": [
      2812,
      2813
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2822,
    "end": 2825,
    "range": [
      2822,
      2825
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2826,
    "end": 2827,
    "range": [
      2826,
      2827
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2828,
    "end": 2829,
    "range": [
      2828,
      2829
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2830,
    "end": 2831,
    "range": [
      2830,
      2831
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2831,
    "end": 2832,
    "range": [
      2831,
      2832
    ]
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 2832,
    "end": 2838,
    "range": [
      2832,
      2838
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2838,
    "end": 2839,
    "range": [
      2838,
      2839
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2839,
    "end": 2840,
    "range": [
      2839,
      2840
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2840,
    "end": 2841,
    "range": [
      2840,
      2841
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2841,
    "end": 2842,
    "range": [
      2841,
      2842
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2851,
    "end": 2857,
    "range": [
      2851,
      2857
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2858,
    "end": 2859,
    "range": [
      2858,
      2859
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2859,
    "end": 2860,
    "range": [
      2859,
      2860
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2867,
    "end": 2868,
    "range": [
      2867,
      2868
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2868,
    "end": 2869,
    "range": [
      2868,
      2869
    ]
  },
  {
    "type": "Identifier",
    "value": "commonPropertyDifferentType",
    "start": 2874,
    "end": 2901,
    "range": [
      2874,
      2901
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2901,
    "end": 2902,
    "range": [
      2901,
      2902
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2903,
    "end": 2910,
    "range": [
      2903,
      2910
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2910,
    "end": 2911,
    "range": [
      2910,
      2911
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2914,
    "end": 2915,
    "range": [
      2914,
      2915
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2915,
    "end": 2916,
    "range": [
      2915,
      2916
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2917,
    "end": 2920,
    "range": [
      2917,
      2920
    ]
  },
  {
    "type": "Identifier",
    "value": "i11Ori21",
    "start": 2921,
    "end": 2929,
    "range": [
      2921,
      2929
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2929,
    "end": 2930,
    "range": [
      2929,
      2930
    ]
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 2931,
    "end": 2934,
    "range": [
      2931,
      2934
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2935,
    "end": 2936,
    "range": [
      2935,
      2936
    ]
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 2937,
    "end": 2940,
    "range": [
      2937,
      2940
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2941,
    "end": 2942,
    "range": [
      2941,
      2942
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2943,
    "end": 2944,
    "range": [
      2943,
      2944
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 2965,
    "end": 2996,
    "range": [
      2965,
      2996
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2996,
    "end": 2997,
    "range": [
      2996,
      2997
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2998,
    "end": 2999,
    "range": [
      2998,
      2999
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2999,
    "end": 3000,
    "range": [
      2999,
      3000
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3000,
    "end": 3001,
    "range": [
      3000,
      3001
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3002,
    "end": 3003,
    "range": [
      3002,
      3003
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3003,
    "end": 3004,
    "range": [
      3003,
      3004
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3005,
    "end": 3007,
    "range": [
      3005,
      3007
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3008,
    "end": 3009,
    "range": [
      3008,
      3009
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3018,
    "end": 3021,
    "range": [
      3018,
      3021
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3022,
    "end": 3023,
    "range": [
      3022,
      3023
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3024,
    "end": 3025,
    "range": [
      3024,
      3025
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3026,
    "end": 3027,
    "range": [
      3026,
      3027
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3027,
    "end": 3028,
    "range": [
      3027,
      3028
    ]
  },
  {
    "type": "Identifier",
    "value": "charCodeAt",
    "start": 3028,
    "end": 3038,
    "range": [
      3028,
      3038
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3038,
    "end": 3039,
    "range": [
      3038,
      3039
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3039,
    "end": 3040,
    "range": [
      3039,
      3040
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3040,
    "end": 3041,
    "range": [
      3040,
      3041
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3041,
    "end": 3042,
    "range": [
      3041,
      3042
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3051,
    "end": 3057,
    "range": [
      3051,
      3057
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3058,
    "end": 3059,
    "range": [
      3058,
      3059
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3059,
    "end": 3060,
    "range": [
      3059,
      3060
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3065,
    "end": 3066,
    "range": [
      3065,
      3066
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3066,
    "end": 3067,
    "range": [
      3066,
      3067
    ]
  },
  {
    "type": "Identifier",
    "value": "commonPropertyDifferentType",
    "start": 3072,
    "end": 3099,
    "range": [
      3072,
      3099
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3099,
    "end": 3100,
    "range": [
      3099,
      3100
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3101,
    "end": 3103,
    "range": [
      3101,
      3103
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3103,
    "end": 3104,
    "range": [
      3103,
      3104
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3105,
    "end": 3106,
    "range": [
      3105,
      3106
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3106,
    "end": 3107,
    "range": [
      3106,
      3107
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3108,
    "end": 3111,
    "range": [
      3108,
      3111
    ]
  },
  {
    "type": "Identifier",
    "value": "arrayOrI11OrI21",
    "start": 3112,
    "end": 3127,
    "range": [
      3112,
      3127
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3127,
    "end": 3128,
    "range": [
      3127,
      3128
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3129,
    "end": 3134,
    "range": [
      3129,
      3134
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3134,
    "end": 3135,
    "range": [
      3134,
      3135
    ]
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 3135,
    "end": 3138,
    "range": [
      3135,
      3138
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3139,
    "end": 3140,
    "range": [
      3139,
      3140
    ]
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 3141,
    "end": 3144,
    "range": [
      3141,
      3144
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3144,
    "end": 3145,
    "range": [
      3144,
      3145
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3146,
    "end": 3147,
    "range": [
      3146,
      3147
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3148,
    "end": 3149,
    "range": [
      3148,
      3149
    ]
  },
  {
    "type": "Identifier",
    "value": "i11",
    "start": 3149,
    "end": 3152,
    "range": [
      3149,
      3152
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3152,
    "end": 3153,
    "range": [
      3152,
      3153
    ]
  },
  {
    "type": "Identifier",
    "value": "i21",
    "start": 3154,
    "end": 3157,
    "range": [
      3154,
      3157
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3157,
    "end": 3158,
    "range": [
      3157,
      3158
    ]
  },
  {
    "type": "Identifier",
    "value": "i11",
    "start": 3159,
    "end": 3162,
    "range": [
      3159,
      3162
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 3163,
    "end": 3165,
    "range": [
      3163,
      3165
    ]
  },
  {
    "type": "Identifier",
    "value": "i21",
    "start": 3166,
    "end": 3169,
    "range": [
      3166,
      3169
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3169,
    "end": 3170,
    "range": [
      3169,
      3170
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3171,
    "end": 3172,
    "range": [
      3171,
      3172
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 3201,
    "end": 3232,
    "range": [
      3201,
      3232
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3232,
    "end": 3233,
    "range": [
      3232,
      3233
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3234,
    "end": 3235,
    "range": [
      3234,
      3235
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3235,
    "end": 3236,
    "range": [
      3235,
      3236
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3236,
    "end": 3237,
    "range": [
      3236,
      3237
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3238,
    "end": 3239,
    "range": [
      3238,
      3239
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3239,
    "end": 3240,
    "range": [
      3239,
      3240
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3241,
    "end": 3243,
    "range": [
      3241,
      3243
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3244,
    "end": 3245,
    "range": [
      3244,
      3245
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3258,
    "end": 3261,
    "range": [
      3258,
      3261
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3262,
    "end": 3263,
    "range": [
      3262,
      3263
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3264,
    "end": 3265,
    "range": [
      3264,
      3265
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3266,
    "end": 3267,
    "range": [
      3266,
      3267
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3267,
    "end": 3268,
    "range": [
      3267,
      3268
    ]
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 3268,
    "end": 3274,
    "range": [
      3268,
      3274
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3274,
    "end": 3275,
    "range": [
      3274,
      3275
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3275,
    "end": 3276,
    "range": [
      3275,
      3276
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3276,
    "end": 3277,
    "range": [
      3276,
      3277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3277,
    "end": 3278,
    "range": [
      3277,
      3278
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3291,
    "end": 3297,
    "range": [
      3291,
      3297
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3298,
    "end": 3299,
    "range": [
      3298,
      3299
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3299,
    "end": 3300,
    "range": [
      3299,
      3300
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3309,
    "end": 3310,
    "range": [
      3309,
      3310
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3310,
    "end": 3311,
    "range": [
      3310,
      3311
    ]
  },
  {
    "type": "Identifier",
    "value": "commonPropertyDifferentType",
    "start": 3320,
    "end": 3347,
    "range": [
      3320,
      3347
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3347,
    "end": 3348,
    "range": [
      3347,
      3348
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3349,
    "end": 3356,
    "range": [
      3349,
      3356
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3356,
    "end": 3357,
    "range": [
      3356,
      3357
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3362,
    "end": 3363,
    "range": [
      3362,
      3363
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3363,
    "end": 3364,
    "range": [
      3363,
      3364
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3365,
    "end": 3366,
    "range": [
      3365,
      3366
    ]
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 3395,
    "end": 3426,
    "range": [
      3395,
      3426
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3426,
    "end": 3427,
    "range": [
      3426,
      3427
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3428,
    "end": 3429,
    "range": [
      3428,
      3429
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3429,
    "end": 3430,
    "range": [
      3429,
      3430
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3430,
    "end": 3431,
    "range": [
      3430,
      3431
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3432,
    "end": 3433,
    "range": [
      3432,
      3433
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3433,
    "end": 3434,
    "range": [
      3433,
      3434
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3435,
    "end": 3437,
    "range": [
      3435,
      3437
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3438,
    "end": 3439,
    "range": [
      3438,
      3439
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3452,
    "end": 3455,
    "range": [
      3452,
      3455
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3456,
    "end": 3457,
    "range": [
      3456,
      3457
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3458,
    "end": 3459,
    "range": [
      3458,
      3459
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3460,
    "end": 3461,
    "range": [
      3460,
      3461
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3461,
    "end": 3462,
    "range": [
      3461,
      3462
    ]
  },
  {
    "type": "Identifier",
    "value": "charCodeAt",
    "start": 3462,
    "end": 3472,
    "range": [
      3462,
      3472
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3472,
    "end": 3473,
    "range": [
      3472,
      3473
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3473,
    "end": 3474,
    "range": [
      3473,
      3474
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3474,
    "end": 3475,
    "range": [
      3474,
      3475
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3475,
    "end": 3476,
    "range": [
      3475,
      3476
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3489,
    "end": 3495,
    "range": [
      3489,
      3495
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3496,
    "end": 3497,
    "range": [
      3496,
      3497
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3497,
    "end": 3498,
    "range": [
      3497,
      3498
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3507,
    "end": 3508,
    "range": [
      3507,
      3508
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3508,
    "end": 3509,
    "range": [
      3508,
      3509
    ]
  },
  {
    "type": "Identifier",
    "value": "commonPropertyDifferentType",
    "start": 3518,
    "end": 3545,
    "range": [
      3518,
      3545
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3545,
    "end": 3546,
    "range": [
      3545,
      3546
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3547,
    "end": 3549,
    "range": [
      3547,
      3549
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3549,
    "end": 3550,
    "range": [
      3549,
      3550
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3555,
    "end": 3556,
    "range": [
      3555,
      3556
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3556,
    "end": 3557,
    "range": [
      3556,
      3557
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3557,
    "end": 3558,
    "range": [
      3557,
      3558
    ]
  }
]
```
