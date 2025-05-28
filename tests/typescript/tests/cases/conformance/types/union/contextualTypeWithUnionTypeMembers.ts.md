__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 201,
  "end": 3558,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 201,
      "end": 407,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 213,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 213,
        "end": 216,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 214,
            "end": 215,
            "name": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 217,
        "end": 407,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 223,
            "end": 259,
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 239,
              "decorators": [],
              "name": "commonMethodType",
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
                "start": 240,
                "end": 249,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 241,
                  "end": 249,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 243,
                    "end": 249
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 258,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 252,
                "end": 258
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 264,
            "end": 291,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 264,
              "end": 282,
              "decorators": [],
              "name": "commonPropertyType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 282,
              "end": 290,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 284,
                "end": 290
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 296,
            "end": 335,
            "key": {
              "type": "Identifier",
              "start": 296,
              "end": 325,
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
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
                "start": 326,
                "end": 330,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 327,
                  "end": 330,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 329,
                    "end": 330,
                    "typeName": {
                      "type": "Identifier",
                      "start": 329,
                      "end": 330,
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
              "start": 331,
              "end": 334,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 333,
                "end": 334,
                "typeName": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 334,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 341,
            "end": 375,
            "key": {
              "type": "Identifier",
              "start": 341,
              "end": 355,
              "decorators": [],
              "name": "methodOnlyInI1",
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
                "start": 356,
                "end": 365,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 357,
                  "end": 365,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 359,
                    "end": 365
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 366,
              "end": 374,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 368,
                "end": 374
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 380,
            "end": 405,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 380,
              "end": 396,
              "decorators": [],
              "name": "propertyOnlyInI1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 396,
              "end": 404,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 398,
                "end": 404
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
      "start": 408,
      "end": 614,
      "id": {
        "type": "Identifier",
        "start": 418,
        "end": 420,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 420,
        "end": 423,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 421,
            "end": 422,
            "name": {
              "type": "Identifier",
              "start": 421,
              "end": 422,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 424,
        "end": 614,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 430,
            "end": 466,
            "key": {
              "type": "Identifier",
              "start": 430,
              "end": 446,
              "decorators": [],
              "name": "commonMethodType",
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
                "start": 447,
                "end": 456,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 448,
                  "end": 456,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 450,
                    "end": 456
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 457,
              "end": 465,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 459,
                "end": 465
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 471,
            "end": 498,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 471,
              "end": 489,
              "decorators": [],
              "name": "commonPropertyType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 489,
              "end": 497,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 491,
                "end": 497
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 503,
            "end": 542,
            "key": {
              "type": "Identifier",
              "start": 503,
              "end": 532,
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
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
                "start": 533,
                "end": 537,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 534,
                  "end": 537,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 536,
                    "end": 537,
                    "typeName": {
                      "type": "Identifier",
                      "start": 536,
                      "end": 537,
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
              "start": 538,
              "end": 541,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 540,
                "end": 541,
                "typeName": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 541,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 548,
            "end": 582,
            "key": {
              "type": "Identifier",
              "start": 548,
              "end": 562,
              "decorators": [],
              "name": "methodOnlyInI2",
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
                "start": 563,
                "end": 572,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 564,
                  "end": 572,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 566,
                    "end": 572
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 573,
              "end": 581,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 575,
                "end": 581
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 587,
            "end": 612,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 587,
              "end": 603,
              "decorators": [],
              "name": "propertyOnlyInI2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 603,
              "end": 611,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 605,
                "end": 611
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
      "type": "VariableDeclaration",
      "start": 769,
      "end": 788,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 773,
          "end": 787,
          "id": {
            "type": "Identifier",
            "start": 773,
            "end": 787,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 775,
              "end": 787,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 777,
                "end": 787,
                "typeName": {
                  "type": "Identifier",
                  "start": 777,
                  "end": 779,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 779,
                  "end": 787,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 780,
                      "end": 786
                    }
                  ]
                }
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
      "start": 789,
      "end": 808,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 793,
          "end": 807,
          "id": {
            "type": "Identifier",
            "start": 793,
            "end": 807,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 795,
              "end": 807,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 797,
                "end": 807,
                "typeName": {
                  "type": "Identifier",
                  "start": 797,
                  "end": 799,
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 799,
                  "end": 807,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 800,
                      "end": 806
                    }
                  ]
                }
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
      "start": 809,
      "end": 850,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 813,
          "end": 849,
          "id": {
            "type": "Identifier",
            "start": 813,
            "end": 844,
            "decorators": [],
            "name": "i1Ori2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 819,
              "end": 844,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 821,
                "end": 844,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 821,
                    "end": 831,
                    "typeName": {
                      "type": "Identifier",
                      "start": 821,
                      "end": 823,
                      "decorators": [],
                      "name": "I1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 823,
                      "end": 831,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 824,
                          "end": 830
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 834,
                    "end": 844,
                    "typeName": {
                      "type": "Identifier",
                      "start": 834,
                      "end": 836,
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 836,
                      "end": 844,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 837,
                          "end": 843
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 847,
            "end": 849,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 851,
      "end": 892,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 855,
          "end": 891,
          "id": {
            "type": "Identifier",
            "start": 855,
            "end": 886,
            "decorators": [],
            "name": "i1Ori2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 861,
              "end": 886,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 863,
                "end": 886,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 863,
                    "end": 873,
                    "typeName": {
                      "type": "Identifier",
                      "start": 863,
                      "end": 865,
                      "decorators": [],
                      "name": "I1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 865,
                      "end": 873,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 866,
                          "end": 872
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 876,
                    "end": 886,
                    "typeName": {
                      "type": "Identifier",
                      "start": 876,
                      "end": 878,
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 878,
                      "end": 886,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 879,
                          "end": 885
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 889,
            "end": 891,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 893,
      "end": 1111,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 897,
          "end": 1110,
          "id": {
            "type": "Identifier",
            "start": 897,
            "end": 928,
            "decorators": [],
            "name": "i1Ori2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 903,
              "end": 928,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 905,
                "end": 928,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 905,
                    "end": 915,
                    "typeName": {
                      "type": "Identifier",
                      "start": 905,
                      "end": 907,
                      "decorators": [],
                      "name": "I1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 907,
                      "end": 915,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 908,
                          "end": 914
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 918,
                    "end": 928,
                    "typeName": {
                      "type": "Identifier",
                      "start": 918,
                      "end": 920,
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 920,
                      "end": 928,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 921,
                          "end": 927
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 931,
            "end": 1110,
            "properties": [
              {
                "type": "Property",
                "start": 948,
                "end": 975,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 948,
                  "end": 966,
                  "decorators": [],
                  "name": "commonPropertyType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 968,
                  "end": 975,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 981,
                "end": 1004,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 981,
                  "end": 997,
                  "decorators": [],
                  "name": "commonMethodType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 999,
                  "end": 1004,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 999,
                      "end": 1000,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 1003,
                    "end": 1004,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1010,
                "end": 1047,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1010,
                  "end": 1039,
                  "decorators": [],
                  "name": "commonMethodWithTypeParameter",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1041,
                  "end": 1047,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1041,
                      "end": 1042,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 1046,
                    "end": 1047,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1054,
                "end": 1076,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1054,
                  "end": 1068,
                  "decorators": [],
                  "name": "methodOnlyInI1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1070,
                  "end": 1076,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1070,
                      "end": 1071,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 1075,
                    "end": 1076,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1082,
                "end": 1107,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1082,
                  "end": 1098,
                  "decorators": [],
                  "name": "propertyOnlyInI1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1100,
                  "end": 1107,
                  "value": "Hello",
                  "raw": "\"Hello\""
                },
                "method": false,
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
      "type": "VariableDeclaration",
      "start": 1112,
      "end": 1330,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1116,
          "end": 1329,
          "id": {
            "type": "Identifier",
            "start": 1116,
            "end": 1147,
            "decorators": [],
            "name": "i1Ori2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1122,
              "end": 1147,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1124,
                "end": 1147,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1124,
                    "end": 1134,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1124,
                      "end": 1126,
                      "decorators": [],
                      "name": "I1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1126,
                      "end": 1134,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1127,
                          "end": 1133
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1137,
                    "end": 1147,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1137,
                      "end": 1139,
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1139,
                      "end": 1147,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1140,
                          "end": 1146
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1150,
            "end": 1329,
            "properties": [
              {
                "type": "Property",
                "start": 1167,
                "end": 1194,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1167,
                  "end": 1185,
                  "decorators": [],
                  "name": "commonPropertyType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1187,
                  "end": 1194,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1200,
                "end": 1223,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1200,
                  "end": 1216,
                  "decorators": [],
                  "name": "commonMethodType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1218,
                  "end": 1223,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1218,
                      "end": 1219,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 1222,
                    "end": 1223,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1229,
                "end": 1266,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1229,
                  "end": 1258,
                  "decorators": [],
                  "name": "commonMethodWithTypeParameter",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1260,
                  "end": 1266,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1260,
                      "end": 1261,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 1265,
                    "end": 1266,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1273,
                "end": 1295,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1273,
                  "end": 1287,
                  "decorators": [],
                  "name": "methodOnlyInI2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1289,
                  "end": 1295,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1289,
                      "end": 1290,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 1294,
                    "end": 1295,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1301,
                "end": 1326,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1301,
                  "end": 1317,
                  "decorators": [],
                  "name": "propertyOnlyInI2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1319,
                  "end": 1326,
                  "value": "Hello",
                  "raw": "\"Hello\""
                },
                "method": false,
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
      "type": "VariableDeclaration",
      "start": 1331,
      "end": 1619,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1335,
          "end": 1618,
          "id": {
            "type": "Identifier",
            "start": 1335,
            "end": 1366,
            "decorators": [],
            "name": "i1Ori2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1341,
              "end": 1366,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1343,
                "end": 1366,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1343,
                    "end": 1353,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1343,
                      "end": 1345,
                      "decorators": [],
                      "name": "I1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1345,
                      "end": 1353,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1346,
                          "end": 1352
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1356,
                    "end": 1366,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1356,
                      "end": 1358,
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1358,
                      "end": 1366,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1359,
                          "end": 1365
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1369,
            "end": 1618,
            "properties": [
              {
                "type": "Property",
                "start": 1398,
                "end": 1425,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1398,
                  "end": 1416,
                  "decorators": [],
                  "name": "commonPropertyType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1418,
                  "end": 1425,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1431,
                "end": 1454,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1431,
                  "end": 1447,
                  "decorators": [],
                  "name": "commonMethodType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1449,
                  "end": 1454,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1449,
                      "end": 1450,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 1453,
                    "end": 1454,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1460,
                "end": 1497,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1460,
                  "end": 1489,
                  "decorators": [],
                  "name": "commonMethodWithTypeParameter",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1491,
                  "end": 1497,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1491,
                      "end": 1492,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 1496,
                    "end": 1497,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1503,
                "end": 1525,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1503,
                  "end": 1517,
                  "decorators": [],
                  "name": "methodOnlyInI1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1519,
                  "end": 1525,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1519,
                      "end": 1520,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 1524,
                    "end": 1525,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1531,
                "end": 1556,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1531,
                  "end": 1547,
                  "decorators": [],
                  "name": "propertyOnlyInI1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1549,
                  "end": 1556,
                  "value": "Hello",
                  "raw": "\"Hello\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1562,
                "end": 1584,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1562,
                  "end": 1576,
                  "decorators": [],
                  "name": "methodOnlyInI2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1578,
                  "end": 1584,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1578,
                      "end": 1579,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 1583,
                    "end": 1584,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1590,
                "end": 1615,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1590,
                  "end": 1606,
                  "decorators": [],
                  "name": "propertyOnlyInI2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1608,
                  "end": 1615,
                  "value": "Hello",
                  "raw": "\"Hello\""
                },
                "method": false,
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
      "type": "VariableDeclaration",
      "start": 1621,
      "end": 2377,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1625,
          "end": 2376,
          "id": {
            "type": "Identifier",
            "start": 1625,
            "end": 1668,
            "decorators": [],
            "name": "arrayI1OrI2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1636,
              "end": 1668,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1638,
                "end": 1668,
                "typeName": {
                  "type": "Identifier",
                  "start": 1638,
                  "end": 1643,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1643,
                  "end": 1668,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 1644,
                      "end": 1667,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1644,
                          "end": 1654,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1644,
                            "end": 1646,
                            "decorators": [],
                            "name": "I1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1646,
                            "end": 1654,
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1647,
                                "end": 1653
                              }
                            ]
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1657,
                          "end": 1667,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1657,
                            "end": 1659,
                            "decorators": [],
                            "name": "I2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1659,
                            "end": 1667,
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1660,
                                "end": 1666
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1671,
            "end": 2376,
            "elements": [
              {
                "type": "Identifier",
                "start": 1672,
                "end": 1674,
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1676,
                "end": 1678,
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ObjectExpression",
                "start": 1680,
                "end": 1883,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1701,
                    "end": 1728,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1701,
                      "end": 1719,
                      "decorators": [],
                      "name": "commonPropertyType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1721,
                      "end": 1728,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1738,
                    "end": 1761,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1738,
                      "end": 1754,
                      "decorators": [],
                      "name": "commonMethodType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1756,
                      "end": 1761,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1756,
                          "end": 1757,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 1760,
                        "end": 1761,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1771,
                    "end": 1808,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1771,
                      "end": 1800,
                      "decorators": [],
                      "name": "commonMethodWithTypeParameter",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1802,
                      "end": 1808,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1802,
                          "end": 1803,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 1807,
                        "end": 1808,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1819,
                    "end": 1841,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1819,
                      "end": 1833,
                      "decorators": [],
                      "name": "methodOnlyInI1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1835,
                      "end": 1841,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1835,
                          "end": 1836,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 1840,
                        "end": 1841,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1851,
                    "end": 1876,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1851,
                      "end": 1867,
                      "decorators": [],
                      "name": "propertyOnlyInI1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1869,
                      "end": 1876,
                      "value": "Hello",
                      "raw": "\"Hello\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 1889,
                "end": 2092,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1910,
                    "end": 1937,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1910,
                      "end": 1928,
                      "decorators": [],
                      "name": "commonPropertyType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1930,
                      "end": 1937,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1947,
                    "end": 1970,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1947,
                      "end": 1963,
                      "decorators": [],
                      "name": "commonMethodType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1965,
                      "end": 1970,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1965,
                          "end": 1966,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 1969,
                        "end": 1970,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1980,
                    "end": 2017,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1980,
                      "end": 2009,
                      "decorators": [],
                      "name": "commonMethodWithTypeParameter",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2011,
                      "end": 2017,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2011,
                          "end": 2012,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 2016,
                        "end": 2017,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2028,
                    "end": 2050,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2028,
                      "end": 2042,
                      "decorators": [],
                      "name": "methodOnlyInI2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2044,
                      "end": 2050,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2044,
                          "end": 2045,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 2049,
                        "end": 2050,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2060,
                    "end": 2085,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2060,
                      "end": 2076,
                      "decorators": [],
                      "name": "propertyOnlyInI2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2078,
                      "end": 2085,
                      "value": "Hello",
                      "raw": "\"Hello\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 2094,
                "end": 2375,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2127,
                    "end": 2154,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2127,
                      "end": 2145,
                      "decorators": [],
                      "name": "commonPropertyType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2147,
                      "end": 2154,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2164,
                    "end": 2187,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2164,
                      "end": 2180,
                      "decorators": [],
                      "name": "commonMethodType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2182,
                      "end": 2187,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2182,
                          "end": 2183,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 2186,
                        "end": 2187,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2197,
                    "end": 2234,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2197,
                      "end": 2226,
                      "decorators": [],
                      "name": "commonMethodWithTypeParameter",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2228,
                      "end": 2234,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2228,
                          "end": 2229,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 2233,
                        "end": 2234,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2244,
                    "end": 2266,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2244,
                      "end": 2258,
                      "decorators": [],
                      "name": "methodOnlyInI1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2260,
                      "end": 2266,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2260,
                          "end": 2261,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 2265,
                        "end": 2266,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2276,
                    "end": 2301,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2276,
                      "end": 2292,
                      "decorators": [],
                      "name": "propertyOnlyInI1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2294,
                      "end": 2301,
                      "value": "Hello",
                      "raw": "\"Hello\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2311,
                    "end": 2333,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2311,
                      "end": 2325,
                      "decorators": [],
                      "name": "methodOnlyInI2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2327,
                      "end": 2333,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2327,
                          "end": 2328,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 2332,
                        "end": 2333,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2343,
                    "end": 2368,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2343,
                      "end": 2359,
                      "decorators": [],
                      "name": "propertyOnlyInI2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2361,
                      "end": 2368,
                      "value": "Hello",
                      "raw": "\"Hello\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2379,
      "end": 2504,
      "id": {
        "type": "Identifier",
        "start": 2389,
        "end": 2392,
        "decorators": [],
        "name": "I11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2393,
        "end": 2504,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 2399,
            "end": 2461,
            "key": {
              "type": "Identifier",
              "start": 2399,
              "end": 2430,
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
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
                "start": 2431,
                "end": 2440,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2432,
                  "end": 2440,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2434,
                    "end": 2440
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 2442,
                "end": 2451,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2443,
                  "end": 2451,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2445,
                    "end": 2451
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2452,
              "end": 2460,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2454,
                "end": 2460
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2466,
            "end": 2502,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2466,
              "end": 2493,
              "decorators": [],
              "name": "commonPropertyDifferentType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2493,
              "end": 2501,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2495,
                "end": 2501
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
      "start": 2505,
      "end": 2630,
      "id": {
        "type": "Identifier",
        "start": 2515,
        "end": 2518,
        "decorators": [],
        "name": "I21",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2519,
        "end": 2630,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 2525,
            "end": 2587,
            "key": {
              "type": "Identifier",
              "start": 2525,
              "end": 2556,
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
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
                "start": 2557,
                "end": 2566,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2558,
                  "end": 2566,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2560,
                    "end": 2566
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 2568,
                "end": 2577,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2569,
                  "end": 2577,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2571,
                    "end": 2577
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2578,
              "end": 2586,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2580,
                "end": 2586
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2592,
            "end": 2628,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2592,
              "end": 2619,
              "decorators": [],
              "name": "commonPropertyDifferentType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2619,
              "end": 2627,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2621,
                "end": 2627
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
      "type": "VariableDeclaration",
      "start": 2631,
      "end": 2644,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2635,
          "end": 2643,
          "id": {
            "type": "Identifier",
            "start": 2635,
            "end": 2643,
            "decorators": [],
            "name": "i11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2638,
              "end": 2643,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2640,
                "end": 2643,
                "typeName": {
                  "type": "Identifier",
                  "start": 2640,
                  "end": 2643,
                  "decorators": [],
                  "name": "I11",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 2645,
      "end": 2658,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2649,
          "end": 2657,
          "id": {
            "type": "Identifier",
            "start": 2649,
            "end": 2657,
            "decorators": [],
            "name": "i21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2652,
              "end": 2657,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2654,
                "end": 2657,
                "typeName": {
                  "type": "Identifier",
                  "start": 2654,
                  "end": 2657,
                  "decorators": [],
                  "name": "I21",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 2659,
      "end": 2689,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2663,
          "end": 2688,
          "id": {
            "type": "Identifier",
            "start": 2663,
            "end": 2682,
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2671,
              "end": 2682,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2673,
                "end": 2682,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2673,
                    "end": 2676,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2673,
                      "end": 2676,
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2679,
                    "end": 2682,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2679,
                      "end": 2682,
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 2685,
            "end": 2688,
            "decorators": [],
            "name": "i11",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2690,
      "end": 2720,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2694,
          "end": 2719,
          "id": {
            "type": "Identifier",
            "start": 2694,
            "end": 2713,
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2702,
              "end": 2713,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2704,
                "end": 2713,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2704,
                    "end": 2707,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2704,
                      "end": 2707,
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2710,
                    "end": 2713,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2710,
                      "end": 2713,
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 2716,
            "end": 2719,
            "decorators": [],
            "name": "i21",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2721,
      "end": 2916,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2725,
          "end": 2915,
          "id": {
            "type": "Identifier",
            "start": 2725,
            "end": 2744,
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2733,
              "end": 2744,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2735,
                "end": 2744,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2735,
                    "end": 2738,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2735,
                      "end": 2738,
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2741,
                    "end": 2744,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2741,
                      "end": 2744,
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2747,
            "end": 2915,
            "properties": [
              {
                "type": "Property",
                "start": 2769,
                "end": 2868,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2769,
                  "end": 2800,
                  "decorators": [],
                  "name": "commonMethodDifferentReturnType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2802,
                  "end": 2868,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2803,
                      "end": 2804,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2806,
                      "end": 2807,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2812,
                    "end": 2868,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 2822,
                        "end": 2842,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 2826,
                            "end": 2841,
                            "id": {
                              "type": "Identifier",
                              "start": 2826,
                              "end": 2827,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 2830,
                              "end": 2841,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2830,
                                "end": 2838,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2830,
                                  "end": 2831,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2832,
                                  "end": 2838,
                                  "decorators": [],
                                  "name": "charAt",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 2839,
                                  "end": 2840,
                                  "decorators": [],
                                  "name": "b",
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
                        "type": "ReturnStatement",
                        "start": 2851,
                        "end": 2860,
                        "argument": {
                          "type": "Identifier",
                          "start": 2858,
                          "end": 2859,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 2874,
                "end": 2910,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2874,
                  "end": 2901,
                  "decorators": [],
                  "name": "commonPropertyDifferentType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 2903,
                  "end": 2910,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "method": false,
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
      "type": "VariableDeclaration",
      "start": 2917,
      "end": 3107,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2921,
          "end": 3106,
          "id": {
            "type": "Identifier",
            "start": 2921,
            "end": 2940,
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2929,
              "end": 2940,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2931,
                "end": 2940,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2931,
                    "end": 2934,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2931,
                      "end": 2934,
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2937,
                    "end": 2940,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2937,
                      "end": 2940,
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2943,
            "end": 3106,
            "properties": [
              {
                "type": "Property",
                "start": 2965,
                "end": 3066,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2965,
                  "end": 2996,
                  "decorators": [],
                  "name": "commonMethodDifferentReturnType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2998,
                  "end": 3066,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2999,
                      "end": 3000,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 3002,
                      "end": 3003,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 3008,
                    "end": 3066,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 3018,
                        "end": 3042,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 3022,
                            "end": 3041,
                            "id": {
                              "type": "Identifier",
                              "start": 3022,
                              "end": 3023,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 3026,
                              "end": 3041,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3026,
                                "end": 3038,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3026,
                                  "end": 3027,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3028,
                                  "end": 3038,
                                  "decorators": [],
                                  "name": "charCodeAt",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 3039,
                                  "end": 3040,
                                  "decorators": [],
                                  "name": "b",
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
                        "type": "ReturnStatement",
                        "start": 3051,
                        "end": 3060,
                        "argument": {
                          "type": "Identifier",
                          "start": 3058,
                          "end": 3059,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 3072,
                "end": 3103,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 3072,
                  "end": 3099,
                  "decorators": [],
                  "name": "commonPropertyDifferentType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 3101,
                  "end": 3103,
                  "value": 10,
                  "raw": "10"
                },
                "method": false,
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
      "type": "VariableDeclaration",
      "start": 3108,
      "end": 3558,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3112,
          "end": 3557,
          "id": {
            "type": "Identifier",
            "start": 3112,
            "end": 3145,
            "decorators": [],
            "name": "arrayOrI11OrI21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3127,
              "end": 3145,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3129,
                "end": 3145,
                "typeName": {
                  "type": "Identifier",
                  "start": 3129,
                  "end": 3134,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3134,
                  "end": 3145,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 3135,
                      "end": 3144,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 3135,
                          "end": 3138,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3135,
                            "end": 3138,
                            "decorators": [],
                            "name": "I11",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 3141,
                          "end": 3144,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3141,
                            "end": 3144,
                            "decorators": [],
                            "name": "I21",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3148,
            "end": 3557,
            "elements": [
              {
                "type": "Identifier",
                "start": 3149,
                "end": 3152,
                "decorators": [],
                "name": "i11",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3154,
                "end": 3157,
                "decorators": [],
                "name": "i21",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "LogicalExpression",
                "start": 3159,
                "end": 3169,
                "left": {
                  "type": "Identifier",
                  "start": 3159,
                  "end": 3162,
                  "decorators": [],
                  "name": "i11",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "||",
                "right": {
                  "type": "Identifier",
                  "start": 3166,
                  "end": 3169,
                  "decorators": [],
                  "name": "i21",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "ObjectExpression",
                "start": 3171,
                "end": 3363,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3201,
                    "end": 3310,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3201,
                      "end": 3232,
                      "decorators": [],
                      "name": "commonMethodDifferentReturnType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 3234,
                      "end": 3310,
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3235,
                          "end": 3236,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 3238,
                          "end": 3239,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 3244,
                        "end": 3310,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 3258,
                            "end": 3278,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 3262,
                                "end": 3277,
                                "id": {
                                  "type": "Identifier",
                                  "start": 3262,
                                  "end": 3263,
                                  "decorators": [],
                                  "name": "z",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 3266,
                                  "end": 3277,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 3266,
                                    "end": 3274,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 3266,
                                      "end": 3267,
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3268,
                                      "end": 3274,
                                      "decorators": [],
                                      "name": "charAt",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 3275,
                                      "end": 3276,
                                      "decorators": [],
                                      "name": "b",
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
                            "type": "ReturnStatement",
                            "start": 3291,
                            "end": 3300,
                            "argument": {
                              "type": "Identifier",
                              "start": 3298,
                              "end": 3299,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3320,
                    "end": 3356,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3320,
                      "end": 3347,
                      "decorators": [],
                      "name": "commonPropertyDifferentType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3349,
                      "end": 3356,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 3365,
                "end": 3556,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3395,
                    "end": 3508,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3395,
                      "end": 3426,
                      "decorators": [],
                      "name": "commonMethodDifferentReturnType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 3428,
                      "end": 3508,
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3429,
                          "end": 3430,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 3432,
                          "end": 3433,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 3438,
                        "end": 3508,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 3452,
                            "end": 3476,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 3456,
                                "end": 3475,
                                "id": {
                                  "type": "Identifier",
                                  "start": 3456,
                                  "end": 3457,
                                  "decorators": [],
                                  "name": "z",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 3460,
                                  "end": 3475,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 3460,
                                    "end": 3472,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 3460,
                                      "end": 3461,
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3462,
                                      "end": 3472,
                                      "decorators": [],
                                      "name": "charCodeAt",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 3473,
                                      "end": 3474,
                                      "decorators": [],
                                      "name": "b",
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
                            "type": "ReturnStatement",
                            "start": 3489,
                            "end": 3498,
                            "argument": {
                              "type": "Identifier",
                              "start": 3496,
                              "end": 3497,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3518,
                    "end": 3549,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3518,
                      "end": 3545,
                      "decorators": [],
                      "name": "commonPropertyDifferentType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3547,
                      "end": 3549,
                      "value": 10,
                      "raw": "10"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
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
