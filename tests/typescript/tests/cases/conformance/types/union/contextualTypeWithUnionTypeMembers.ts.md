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
