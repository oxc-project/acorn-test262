instantiationExpressions.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 5985,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 32,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "fx",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 27,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 27,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 26,
              "end": 27,
              "typeName": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 28,
        "end": 31,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 30,
          "end": 31,
          "typeName": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 33,
      "end": 76,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 52,
        "decorators": [],
        "name": "fx",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 56,
          "end": 60,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 57,
            "end": 60,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 59,
              "end": 60,
              "typeName": {
                "type": "Identifier",
                "start": 59,
                "end": 60,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 62,
          "end": 71,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 71,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 65,
              "end": 71
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 72,
        "end": 75,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 74,
          "end": 75,
          "typeName": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 52,
        "end": 55,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 53,
            "end": 54,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 77,
      "end": 122,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 96,
        "decorators": [],
        "name": "fx",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 103,
          "end": 112,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 104,
            "end": 112,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 106,
              "end": 112,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 107,
                  "end": 108,
                  "typeName": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 110,
                  "end": 111,
                  "typeName": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 113,
        "end": 121,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 115,
          "end": 121,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 116,
              "end": 117,
              "typeName": {
                "type": "Identifier",
                "start": 116,
                "end": 117,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 119,
              "end": 120,
              "typeName": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 96,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 97,
            "end": 98,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 100,
            "end": 101,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 124,
      "end": 387,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 138,
        "end": 387,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 144,
            "end": 158,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 148,
                "end": 157,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 150,
                  "decorators": [],
                  "name": "f0",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 153,
                  "end": 157,
                  "expression": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 155,
                    "decorators": [],
                    "name": "fx",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 155,
                    "end": 157,
                    "params": []
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 173,
            "end": 193,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 177,
                "end": 192,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 179,
                  "decorators": [],
                  "name": "f1",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 182,
                  "end": 192,
                  "expression": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 184,
                    "decorators": [],
                    "name": "fx",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 184,
                    "end": 192,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 185,
                        "end": 191
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 259,
            "end": 287,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 263,
                "end": 286,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 265,
                  "decorators": [],
                  "name": "f2",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 268,
                  "end": 286,
                  "expression": {
                    "type": "Identifier",
                    "start": 268,
                    "end": 270,
                    "decorators": [],
                    "name": "fx",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 270,
                    "end": 286,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 271,
                        "end": 277
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 279,
                        "end": 285
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 338,
            "end": 375,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 342,
                "end": 374,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 344,
                  "decorators": [],
                  "name": "f3",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 347,
                  "end": 374,
                  "expression": {
                    "type": "Identifier",
                    "start": 347,
                    "end": 349,
                    "decorators": [],
                    "name": "fx",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 349,
                    "end": 374,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 350,
                        "end": 356
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 358,
                        "end": 364
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 366,
                        "end": 373
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 135,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 389,
      "end": 412,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 394,
        "end": 397,
        "decorators": [],
        "name": "T10",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 400,
        "end": 411,
        "exprName": {
          "type": "Identifier",
          "start": 407,
          "end": 409,
          "decorators": [],
          "name": "fx",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 409,
          "end": 411,
          "params": []
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 423,
      "end": 452,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 428,
        "end": 431,
        "decorators": [],
        "name": "T11",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 434,
        "end": 451,
        "exprName": {
          "type": "Identifier",
          "start": 441,
          "end": 443,
          "decorators": [],
          "name": "fx",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 443,
          "end": 451,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 444,
              "end": 450
            }
          ]
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 514,
      "end": 551,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 519,
        "end": 522,
        "decorators": [],
        "name": "T12",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 525,
        "end": 550,
        "exprName": {
          "type": "Identifier",
          "start": 532,
          "end": 534,
          "decorators": [],
          "name": "fx",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 534,
          "end": 550,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 535,
              "end": 541
            },
            {
              "type": "TSNumberKeyword",
              "start": 543,
              "end": 549
            }
          ]
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 598,
      "end": 644,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 603,
        "end": 606,
        "decorators": [],
        "name": "T13",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 609,
        "end": 643,
        "exprName": {
          "type": "Identifier",
          "start": 616,
          "end": 618,
          "decorators": [],
          "name": "fx",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 618,
          "end": 643,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 619,
              "end": 625
            },
            {
              "type": "TSNumberKeyword",
              "start": 627,
              "end": 633
            },
            {
              "type": "TSBooleanKeyword",
              "start": 635,
              "end": 642
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 656,
      "end": 811,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 670,
        "end": 811,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 676,
            "end": 695,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 682,
                "end": 694,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 684,
                  "decorators": [],
                  "name": "A0",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 687,
                  "end": 694,
                  "expression": {
                    "type": "Identifier",
                    "start": 687,
                    "end": 692,
                    "decorators": [],
                    "name": "Array",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 692,
                    "end": 694,
                    "params": []
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 710,
            "end": 735,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 716,
                "end": 734,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 716,
                  "end": 718,
                  "decorators": [],
                  "name": "A1",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 721,
                  "end": 734,
                  "expression": {
                    "type": "Identifier",
                    "start": 721,
                    "end": 726,
                    "decorators": [],
                    "name": "Array",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 726,
                    "end": 734,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 727,
                        "end": 733
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 766,
            "end": 799,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 772,
                "end": 798,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 772,
                  "end": 774,
                  "decorators": [],
                  "name": "A2",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 777,
                  "end": 798,
                  "expression": {
                    "type": "Identifier",
                    "start": 777,
                    "end": 782,
                    "decorators": [],
                    "name": "Array",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 782,
                    "end": 798,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 783,
                        "end": 789
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 791,
                        "end": 797
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 665,
        "end": 667,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 813,
      "end": 839,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 818,
        "end": 821,
        "decorators": [],
        "name": "T20",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 824,
        "end": 838,
        "exprName": {
          "type": "Identifier",
          "start": 831,
          "end": 836,
          "decorators": [],
          "name": "Array",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 836,
          "end": 838,
          "params": []
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 850,
      "end": 882,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 855,
        "end": 858,
        "decorators": [],
        "name": "T21",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 861,
        "end": 881,
        "exprName": {
          "type": "Identifier",
          "start": 868,
          "end": 873,
          "decorators": [],
          "name": "Array",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 873,
          "end": 881,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 874,
              "end": 880
            }
          ]
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 909,
      "end": 949,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 914,
        "end": 917,
        "decorators": [],
        "name": "T22",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 920,
        "end": 948,
        "exprName": {
          "type": "Identifier",
          "start": 927,
          "end": 932,
          "decorators": [],
          "name": "Array",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 932,
          "end": 948,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 933,
              "end": 939
            },
            {
              "type": "TSNumberKeyword",
              "start": 941,
              "end": 947
            }
          ]
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 961,
      "end": 1034,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 980,
        "end": 1034,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 986,
            "end": 1004,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 986,
              "end": 997,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 997,
              "end": 1004,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 998,
                  "end": 1002,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 999,
                    "end": 1002,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1001,
                      "end": 1002,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1001,
                        "end": 1002,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1009,
            "end": 1032,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1016,
              "end": 1017,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1017,
              "end": 1032,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1021,
                  "end": 1025,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1022,
                    "end": 1025,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1024,
                      "end": 1025,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1024,
                        "end": 1025,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1026,
                "end": 1031,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1028,
                  "end": 1031,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 1028,
                    "end": 1029,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1028,
                      "end": 1029,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1017,
                "end": 1020,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1018,
                    "end": 1019,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1018,
                      "end": 1019,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 975,
        "end": 976,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 976,
        "end": 979,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 977,
            "end": 978,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 977,
              "end": 978,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1036,
      "end": 1203,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1050,
        "end": 1203,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1056,
            "end": 1075,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1060,
                "end": 1074,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1060,
                  "end": 1062,
                  "decorators": [],
                  "name": "c1",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 1065,
                  "end": 1074,
                  "expression": {
                    "type": "Identifier",
                    "start": 1065,
                    "end": 1066,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1066,
                    "end": 1074,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1067,
                        "end": 1073
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1152,
            "end": 1173,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1156,
                "end": 1172,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1156,
                  "end": 1158,
                  "decorators": [],
                  "name": "f1",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 1161,
                  "end": 1172,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1161,
                    "end": 1164,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1161,
                      "end": 1162,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1163,
                      "end": 1164,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1164,
                    "end": 1172,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1165,
                        "end": 1171
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1045,
        "end": 1047,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1205,
      "end": 1356,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1266,
        "end": 1356,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1272,
            "end": 1291,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1276,
                "end": 1290,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1276,
                  "end": 1278,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 1281,
                  "end": 1290,
                  "expression": {
                    "type": "Identifier",
                    "start": 1281,
                    "end": 1282,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1282,
                    "end": 1290,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1283,
                        "end": 1289
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1214,
        "end": 1217,
        "decorators": [],
        "name": "f10",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1218,
          "end": 1264,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1219,
            "end": 1264,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1221,
              "end": 1264,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 1223,
                  "end": 1236,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1227,
                      "end": 1231,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1228,
                        "end": 1231,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1230,
                          "end": 1231,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1230,
                            "end": 1231,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1232,
                    "end": 1235,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1234,
                      "end": 1235,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1234,
                        "end": 1235,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1223,
                    "end": 1226,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1224,
                        "end": 1225,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1224,
                          "end": 1225,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 1237,
                  "end": 1262,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1241,
                      "end": 1245,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1242,
                        "end": 1245,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1244,
                          "end": 1245,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1244,
                            "end": 1245,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 1247,
                      "end": 1256,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1248,
                        "end": 1256,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1250,
                          "end": 1256
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1257,
                    "end": 1262,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1259,
                      "end": 1262,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1259,
                        "end": 1260,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1259,
                          "end": 1260,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1237,
                    "end": 1240,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1238,
                        "end": 1239,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1238,
                          "end": 1239,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1358,
      "end": 1479,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1426,
        "end": 1479,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1432,
            "end": 1451,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1436,
                "end": 1450,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1436,
                  "end": 1438,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 1441,
                  "end": 1450,
                  "expression": {
                    "type": "Identifier",
                    "start": 1441,
                    "end": 1442,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1442,
                    "end": 1450,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1443,
                        "end": 1449
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1367,
        "end": 1370,
        "decorators": [],
        "name": "f11",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1371,
          "end": 1424,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1372,
            "end": 1424,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1374,
              "end": 1424,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 1376,
                  "end": 1389,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1380,
                      "end": 1384,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1381,
                        "end": 1384,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1383,
                          "end": 1384,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1383,
                            "end": 1384,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1385,
                    "end": 1388,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1387,
                      "end": 1388,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1387,
                        "end": 1388,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1376,
                    "end": 1379,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1377,
                        "end": 1378,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1377,
                          "end": 1378,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 1390,
                  "end": 1422,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1391,
                      "end": 1400,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1392,
                        "end": 1400,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1394,
                          "end": 1400
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 1402,
                      "end": 1411,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1403,
                        "end": 1411,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1405,
                          "end": 1411
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1412,
                    "end": 1422,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1414,
                      "end": 1422,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 1414,
                        "end": 1420
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1481,
      "end": 1593,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1526,
        "end": 1593,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1532,
            "end": 1551,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1536,
                "end": 1550,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1536,
                  "end": 1538,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 1541,
                  "end": 1550,
                  "expression": {
                    "type": "Identifier",
                    "start": 1541,
                    "end": 1542,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1542,
                    "end": 1550,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1543,
                        "end": 1549
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1490,
        "end": 1493,
        "decorators": [],
        "name": "f12",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1494,
          "end": 1524,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1495,
            "end": 1524,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1497,
              "end": 1524,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 1499,
                  "end": 1512,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1503,
                      "end": 1507,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1504,
                        "end": 1507,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1506,
                          "end": 1507,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1506,
                            "end": 1507,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1508,
                    "end": 1511,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1510,
                      "end": 1511,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1510,
                        "end": 1511,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1499,
                    "end": 1502,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1500,
                        "end": 1501,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1500,
                          "end": 1501,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1513,
                  "end": 1522,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1513,
                    "end": 1514,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1514,
                    "end": 1522,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1516,
                      "end": 1522
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1595,
      "end": 1700,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1637,
        "end": 1700,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1643,
            "end": 1662,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1647,
                "end": 1661,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1647,
                  "end": 1649,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 1652,
                  "end": 1661,
                  "expression": {
                    "type": "Identifier",
                    "start": 1652,
                    "end": 1653,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1653,
                    "end": 1661,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1654,
                        "end": 1660
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1604,
        "end": 1607,
        "decorators": [],
        "name": "f13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1608,
          "end": 1635,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1609,
            "end": 1635,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1611,
              "end": 1635,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1613,
                  "end": 1623,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1613,
                    "end": 1614,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1614,
                    "end": 1622,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1616,
                      "end": 1622
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1624,
                  "end": 1633,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1624,
                    "end": 1625,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1625,
                    "end": 1633,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1627,
                      "end": 1633
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1702,
      "end": 1869,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1771,
        "end": 1869,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1777,
            "end": 1796,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1781,
                "end": 1795,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1781,
                  "end": 1783,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 1786,
                  "end": 1795,
                  "expression": {
                    "type": "Identifier",
                    "start": 1786,
                    "end": 1787,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1787,
                    "end": 1795,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1788,
                        "end": 1794
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1711,
        "end": 1714,
        "decorators": [],
        "name": "f14",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1715,
          "end": 1769,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1716,
            "end": 1769,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1718,
              "end": 1769,
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 1720,
                  "end": 1737,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1728,
                      "end": 1732,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1729,
                        "end": 1732,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1731,
                          "end": 1732,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1731,
                            "end": 1732,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1733,
                    "end": 1736,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1735,
                      "end": 1736,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1735,
                        "end": 1736,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1724,
                    "end": 1727,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1725,
                        "end": 1726,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1725,
                          "end": 1726,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 1738,
                  "end": 1767,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1746,
                      "end": 1750,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1747,
                        "end": 1750,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1749,
                          "end": 1750,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1749,
                            "end": 1750,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 1752,
                      "end": 1761,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1753,
                        "end": 1761,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1755,
                          "end": 1761
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1762,
                    "end": 1767,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1764,
                      "end": 1767,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1764,
                        "end": 1765,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1764,
                          "end": 1765,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1742,
                    "end": 1745,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1743,
                        "end": 1744,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1743,
                          "end": 1744,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1871,
      "end": 2030,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1936,
        "end": 2030,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1942,
            "end": 1961,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1946,
                "end": 1960,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1946,
                  "end": 1948,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 1951,
                  "end": 1960,
                  "expression": {
                    "type": "Identifier",
                    "start": 1951,
                    "end": 1952,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1952,
                    "end": 1960,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1953,
                        "end": 1959
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1880,
        "end": 1883,
        "decorators": [],
        "name": "f15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1884,
          "end": 1934,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1885,
            "end": 1934,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1887,
              "end": 1934,
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 1889,
                  "end": 1906,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1897,
                      "end": 1901,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1898,
                        "end": 1901,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1900,
                          "end": 1901,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1900,
                            "end": 1901,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1902,
                    "end": 1905,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1904,
                      "end": 1905,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1904,
                        "end": 1905,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1893,
                    "end": 1896,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1894,
                        "end": 1895,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1894,
                          "end": 1895,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 1907,
                  "end": 1932,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1911,
                      "end": 1915,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1912,
                        "end": 1915,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1914,
                          "end": 1915,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1914,
                            "end": 1915,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 1917,
                      "end": 1926,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1918,
                        "end": 1926,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1920,
                          "end": 1926
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1927,
                    "end": 1932,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1929,
                      "end": 1932,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1929,
                        "end": 1930,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1929,
                          "end": 1930,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1907,
                    "end": 1910,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1908,
                        "end": 1909,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1908,
                          "end": 1909,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2032,
      "end": 2161,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2104,
        "end": 2161,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2110,
            "end": 2129,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2114,
                "end": 2128,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2114,
                  "end": 2116,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 2119,
                  "end": 2128,
                  "expression": {
                    "type": "Identifier",
                    "start": 2119,
                    "end": 2120,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2120,
                    "end": 2128,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2121,
                        "end": 2127
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2041,
        "end": 2044,
        "decorators": [],
        "name": "f16",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2045,
          "end": 2102,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2046,
            "end": 2102,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2048,
              "end": 2102,
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 2050,
                  "end": 2067,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2058,
                      "end": 2062,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2059,
                        "end": 2062,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2061,
                          "end": 2062,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2061,
                            "end": 2062,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2063,
                    "end": 2066,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2065,
                      "end": 2066,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2065,
                        "end": 2066,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 2054,
                    "end": 2057,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 2055,
                        "end": 2056,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 2055,
                          "end": 2056,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 2068,
                  "end": 2100,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2069,
                      "end": 2078,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2070,
                        "end": 2078,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2072,
                          "end": 2078
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 2080,
                      "end": 2089,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2081,
                        "end": 2089,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2083,
                          "end": 2089
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2090,
                    "end": 2100,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2092,
                      "end": 2100,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2092,
                        "end": 2098
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2163,
      "end": 2288,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2235,
        "end": 2288,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2241,
            "end": 2260,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2245,
                "end": 2259,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2245,
                  "end": 2247,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 2250,
                  "end": 2259,
                  "expression": {
                    "type": "Identifier",
                    "start": 2250,
                    "end": 2251,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2251,
                    "end": 2259,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2252,
                        "end": 2258
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2172,
        "end": 2175,
        "decorators": [],
        "name": "f17",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2176,
          "end": 2233,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2177,
            "end": 2233,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2179,
              "end": 2233,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 2181,
                  "end": 2194,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2185,
                      "end": 2189,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2186,
                        "end": 2189,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2188,
                          "end": 2189,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2188,
                            "end": 2189,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2190,
                    "end": 2193,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2192,
                      "end": 2193,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2192,
                        "end": 2193,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 2181,
                    "end": 2184,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 2182,
                        "end": 2183,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 2182,
                          "end": 2183,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 2195,
                  "end": 2231,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2200,
                      "end": 2209,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2201,
                        "end": 2209,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2203,
                          "end": 2209
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 2211,
                      "end": 2220,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2212,
                        "end": 2220,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2214,
                          "end": 2220
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2221,
                    "end": 2231,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2223,
                      "end": 2231,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2223,
                        "end": 2229
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2290,
      "end": 2451,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2356,
        "end": 2451,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2362,
            "end": 2381,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2366,
                "end": 2380,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2366,
                  "end": 2368,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 2371,
                  "end": 2380,
                  "expression": {
                    "type": "Identifier",
                    "start": 2371,
                    "end": 2372,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
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
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2299,
        "end": 2302,
        "decorators": [],
        "name": "f20",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2303,
          "end": 2354,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2304,
            "end": 2354,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 2306,
              "end": 2354,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 2307,
                  "end": 2321,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2311,
                      "end": 2315,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2312,
                        "end": 2315,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2314,
                          "end": 2315,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2314,
                            "end": 2315,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2317,
                    "end": 2321,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2320,
                      "end": 2321,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2320,
                        "end": 2321,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 2307,
                    "end": 2310,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 2308,
                        "end": 2309,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 2308,
                          "end": 2309,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 2326,
                  "end": 2353,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2330,
                      "end": 2334,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2331,
                        "end": 2334,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2333,
                          "end": 2334,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2333,
                            "end": 2334,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 2336,
                      "end": 2345,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2337,
                        "end": 2345,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2339,
                          "end": 2345
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2347,
                    "end": 2353,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2350,
                      "end": 2353,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 2350,
                        "end": 2351,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2350,
                          "end": 2351,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 2326,
                    "end": 2329,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 2327,
                        "end": 2328,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 2327,
                          "end": 2328,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2453,
      "end": 2579,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2526,
        "end": 2579,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2532,
            "end": 2551,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2536,
                "end": 2550,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2536,
                  "end": 2538,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 2541,
                  "end": 2550,
                  "expression": {
                    "type": "Identifier",
                    "start": 2541,
                    "end": 2542,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2542,
                    "end": 2550,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2543,
                        "end": 2549
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2462,
        "end": 2465,
        "decorators": [],
        "name": "f21",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2466,
          "end": 2524,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2467,
            "end": 2524,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 2469,
              "end": 2524,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 2470,
                  "end": 2484,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2474,
                      "end": 2478,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2475,
                        "end": 2478,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2477,
                          "end": 2478,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2477,
                            "end": 2478,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2480,
                    "end": 2484,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2483,
                      "end": 2484,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2483,
                        "end": 2484,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 2470,
                    "end": 2473,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 2471,
                        "end": 2472,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 2471,
                          "end": 2472,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 2489,
                  "end": 2523,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2490,
                      "end": 2499,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2491,
                        "end": 2499,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2493,
                          "end": 2499
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 2501,
                      "end": 2510,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2502,
                        "end": 2510,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2504,
                          "end": 2510
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2512,
                    "end": 2523,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2515,
                      "end": 2523,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2515,
                        "end": 2521
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2581,
      "end": 2702,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2631,
        "end": 2702,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2637,
            "end": 2656,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2641,
                "end": 2655,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2641,
                  "end": 2643,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 2646,
                  "end": 2655,
                  "expression": {
                    "type": "Identifier",
                    "start": 2646,
                    "end": 2647,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2647,
                    "end": 2655,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2648,
                        "end": 2654
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2590,
        "end": 2593,
        "decorators": [],
        "name": "f22",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2594,
          "end": 2629,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2595,
            "end": 2629,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 2597,
              "end": 2629,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 2598,
                  "end": 2612,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2602,
                      "end": 2606,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2603,
                        "end": 2606,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2605,
                          "end": 2606,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2605,
                            "end": 2606,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2608,
                    "end": 2612,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2611,
                      "end": 2612,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2611,
                        "end": 2612,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 2598,
                    "end": 2601,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 2599,
                        "end": 2600,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 2599,
                          "end": 2600,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 2616,
                  "end": 2629,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 2618,
                      "end": 2627,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2618,
                        "end": 2619,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2619,
                        "end": 2627,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2621,
                          "end": 2627
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2704,
      "end": 2814,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2751,
        "end": 2814,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2757,
            "end": 2776,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2761,
                "end": 2775,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2761,
                  "end": 2763,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 2766,
                  "end": 2775,
                  "expression": {
                    "type": "Identifier",
                    "start": 2766,
                    "end": 2767,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2767,
                    "end": 2775,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2768,
                        "end": 2774
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2713,
        "end": 2716,
        "decorators": [],
        "name": "f23",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2717,
          "end": 2749,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2718,
            "end": 2749,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 2720,
              "end": 2749,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 2720,
                  "end": 2733,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 2722,
                      "end": 2731,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2722,
                        "end": 2723,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2723,
                        "end": 2731,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2725,
                          "end": 2731
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 2736,
                  "end": 2749,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 2738,
                      "end": 2747,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2738,
                        "end": 2739,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2739,
                        "end": 2747,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2741,
                          "end": 2747
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2816,
      "end": 2989,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2890,
        "end": 2989,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2896,
            "end": 2915,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2900,
                "end": 2914,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2900,
                  "end": 2902,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 2905,
                  "end": 2914,
                  "expression": {
                    "type": "Identifier",
                    "start": 2905,
                    "end": 2906,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2906,
                    "end": 2914,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2907,
                        "end": 2913
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2825,
        "end": 2828,
        "decorators": [],
        "name": "f24",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2829,
          "end": 2888,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2830,
            "end": 2888,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 2832,
              "end": 2888,
              "types": [
                {
                  "type": "TSConstructorType",
                  "start": 2833,
                  "end": 2851,
                  "abstract": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2841,
                      "end": 2845,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2842,
                        "end": 2845,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2844,
                          "end": 2845,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2844,
                            "end": 2845,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2847,
                    "end": 2851,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2850,
                      "end": 2851,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2850,
                        "end": 2851,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 2837,
                    "end": 2840,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 2838,
                        "end": 2839,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 2838,
                          "end": 2839,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSConstructorType",
                  "start": 2856,
                  "end": 2887,
                  "abstract": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2864,
                      "end": 2868,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2865,
                        "end": 2868,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2867,
                          "end": 2868,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2867,
                            "end": 2868,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 2870,
                      "end": 2879,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2871,
                        "end": 2879,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2873,
                          "end": 2879
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2881,
                    "end": 2887,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2884,
                      "end": 2887,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 2884,
                        "end": 2885,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2884,
                          "end": 2885,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 2860,
                    "end": 2863,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 2861,
                        "end": 2862,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 2861,
                          "end": 2862,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2991,
      "end": 3160,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3061,
        "end": 3160,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3067,
            "end": 3086,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3071,
                "end": 3085,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3071,
                  "end": 3073,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 3076,
                  "end": 3085,
                  "expression": {
                    "type": "Identifier",
                    "start": 3076,
                    "end": 3077,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3077,
                    "end": 3085,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 3078,
                        "end": 3084
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3000,
        "end": 3003,
        "decorators": [],
        "name": "f25",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3004,
          "end": 3059,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3005,
            "end": 3059,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 3007,
              "end": 3059,
              "types": [
                {
                  "type": "TSConstructorType",
                  "start": 3008,
                  "end": 3026,
                  "abstract": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3016,
                      "end": 3020,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3017,
                        "end": 3020,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3019,
                          "end": 3020,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3019,
                            "end": 3020,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 3022,
                    "end": 3026,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3025,
                      "end": 3026,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3025,
                        "end": 3026,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 3012,
                    "end": 3015,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 3013,
                        "end": 3014,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 3013,
                          "end": 3014,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 3031,
                  "end": 3058,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3035,
                      "end": 3039,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3036,
                        "end": 3039,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3038,
                          "end": 3039,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3038,
                            "end": 3039,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 3041,
                      "end": 3050,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3042,
                        "end": 3050,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3044,
                          "end": 3050
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 3052,
                    "end": 3058,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 3055,
                      "end": 3058,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 3055,
                        "end": 3056,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3055,
                          "end": 3056,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 3031,
                    "end": 3034,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 3032,
                        "end": 3033,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 3032,
                          "end": 3033,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 3162,
      "end": 3296,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3239,
        "end": 3296,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3245,
            "end": 3264,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3249,
                "end": 3263,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3249,
                  "end": 3251,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 3254,
                  "end": 3263,
                  "expression": {
                    "type": "Identifier",
                    "start": 3254,
                    "end": 3255,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3255,
                    "end": 3263,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 3256,
                        "end": 3262
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3171,
        "end": 3174,
        "decorators": [],
        "name": "f26",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3175,
          "end": 3237,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3176,
            "end": 3237,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 3178,
              "end": 3237,
              "types": [
                {
                  "type": "TSConstructorType",
                  "start": 3179,
                  "end": 3197,
                  "abstract": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3187,
                      "end": 3191,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3188,
                        "end": 3191,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3190,
                          "end": 3191,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3190,
                            "end": 3191,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 3193,
                    "end": 3197,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3196,
                      "end": 3197,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3196,
                        "end": 3197,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 3183,
                    "end": 3186,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 3184,
                        "end": 3185,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 3184,
                          "end": 3185,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 3202,
                  "end": 3236,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3203,
                      "end": 3212,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3204,
                        "end": 3212,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3206,
                          "end": 3212
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 3214,
                      "end": 3223,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3215,
                        "end": 3223,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3217,
                          "end": 3223
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 3225,
                    "end": 3236,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 3228,
                      "end": 3236,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 3228,
                        "end": 3234
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 3298,
      "end": 3428,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3375,
        "end": 3428,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3381,
            "end": 3400,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3385,
                "end": 3399,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3385,
                  "end": 3387,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 3390,
                  "end": 3399,
                  "expression": {
                    "type": "Identifier",
                    "start": 3390,
                    "end": 3391,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3391,
                    "end": 3399,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 3392,
                        "end": 3398
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3307,
        "end": 3310,
        "decorators": [],
        "name": "f27",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3311,
          "end": 3373,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3312,
            "end": 3373,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 3314,
              "end": 3373,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 3315,
                  "end": 3329,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3319,
                      "end": 3323,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3320,
                        "end": 3323,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3322,
                          "end": 3323,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3322,
                            "end": 3323,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 3325,
                    "end": 3329,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3328,
                      "end": 3329,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3328,
                        "end": 3329,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 3315,
                    "end": 3318,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 3316,
                        "end": 3317,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 3316,
                          "end": 3317,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSConstructorType",
                  "start": 3334,
                  "end": 3372,
                  "abstract": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3339,
                      "end": 3348,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3340,
                        "end": 3348,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3342,
                          "end": 3348
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 3350,
                      "end": 3359,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3351,
                        "end": 3359,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3353,
                          "end": 3359
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 3361,
                    "end": 3372,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 3364,
                      "end": 3372,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 3364,
                        "end": 3370
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 3430,
      "end": 3591,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3496,
        "end": 3591,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3502,
            "end": 3521,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3506,
                "end": 3520,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3506,
                  "end": 3508,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 3511,
                  "end": 3520,
                  "expression": {
                    "type": "Identifier",
                    "start": 3511,
                    "end": 3512,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3512,
                    "end": 3520,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 3513,
                        "end": 3519
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3439,
        "end": 3442,
        "decorators": [],
        "name": "f30",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3443,
          "end": 3494,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3444,
            "end": 3494,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3446,
              "end": 3494,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 3447,
                  "end": 3461,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3451,
                      "end": 3455,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3452,
                        "end": 3455,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3454,
                          "end": 3455,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3454,
                            "end": 3455,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 3457,
                    "end": 3461,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3460,
                      "end": 3461,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3460,
                        "end": 3461,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 3447,
                    "end": 3450,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 3448,
                        "end": 3449,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 3448,
                          "end": 3449,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 3466,
                  "end": 3493,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3470,
                      "end": 3474,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3471,
                        "end": 3474,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3473,
                          "end": 3474,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3473,
                            "end": 3474,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 3476,
                      "end": 3485,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3477,
                        "end": 3485,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3479,
                          "end": 3485
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 3487,
                    "end": 3493,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 3490,
                      "end": 3493,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 3490,
                        "end": 3491,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3490,
                          "end": 3491,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 3466,
                    "end": 3469,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 3467,
                        "end": 3468,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 3467,
                          "end": 3468,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 3593,
      "end": 3770,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3666,
        "end": 3770,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3672,
            "end": 3691,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3676,
                "end": 3690,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3676,
                  "end": 3678,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 3681,
                  "end": 3690,
                  "expression": {
                    "type": "Identifier",
                    "start": 3681,
                    "end": 3682,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3682,
                    "end": 3690,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 3683,
                        "end": 3689
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3602,
        "end": 3605,
        "decorators": [],
        "name": "f31",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3606,
          "end": 3664,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3607,
            "end": 3664,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3609,
              "end": 3664,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 3610,
                  "end": 3624,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3614,
                      "end": 3618,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3615,
                        "end": 3618,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3617,
                          "end": 3618,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3617,
                            "end": 3618,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 3620,
                    "end": 3624,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3623,
                      "end": 3624,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3623,
                        "end": 3624,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 3610,
                    "end": 3613,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 3611,
                        "end": 3612,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 3611,
                          "end": 3612,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 3629,
                  "end": 3663,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3630,
                      "end": 3639,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3631,
                        "end": 3639,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3633,
                          "end": 3639
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 3641,
                      "end": 3650,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3642,
                        "end": 3650,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3644,
                          "end": 3650
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 3652,
                    "end": 3663,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 3655,
                      "end": 3663,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 3655,
                        "end": 3661
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 3772,
      "end": 3893,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3822,
        "end": 3893,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3828,
            "end": 3847,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3832,
                "end": 3846,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3832,
                  "end": 3834,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 3837,
                  "end": 3846,
                  "expression": {
                    "type": "Identifier",
                    "start": 3837,
                    "end": 3838,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3838,
                    "end": 3846,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 3839,
                        "end": 3845
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3781,
        "end": 3784,
        "decorators": [],
        "name": "f32",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3785,
          "end": 3820,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3786,
            "end": 3820,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3788,
              "end": 3820,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 3789,
                  "end": 3803,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3793,
                      "end": 3797,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3794,
                        "end": 3797,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3796,
                          "end": 3797,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3796,
                            "end": 3797,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 3799,
                    "end": 3803,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3802,
                      "end": 3803,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3802,
                        "end": 3803,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 3789,
                    "end": 3792,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 3790,
                        "end": 3791,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 3790,
                          "end": 3791,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 3807,
                  "end": 3820,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3809,
                      "end": 3818,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3809,
                        "end": 3810,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3810,
                        "end": 3818,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3812,
                          "end": 3818
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 3895,
      "end": 4005,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3942,
        "end": 4005,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3948,
            "end": 3967,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3952,
                "end": 3966,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3952,
                  "end": 3954,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 3957,
                  "end": 3966,
                  "expression": {
                    "type": "Identifier",
                    "start": 3957,
                    "end": 3958,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3958,
                    "end": 3966,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 3959,
                        "end": 3965
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3904,
        "end": 3907,
        "decorators": [],
        "name": "f33",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3908,
          "end": 3940,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3909,
            "end": 3940,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3911,
              "end": 3940,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 3911,
                  "end": 3924,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3913,
                      "end": 3922,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3913,
                        "end": 3914,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3914,
                        "end": 3922,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3916,
                          "end": 3922
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 3927,
                  "end": 3940,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3929,
                      "end": 3938,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3929,
                        "end": 3930,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3930,
                        "end": 3938,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3932,
                          "end": 3938
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 4007,
      "end": 4180,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4081,
        "end": 4180,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4087,
            "end": 4106,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4091,
                "end": 4105,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4091,
                  "end": 4093,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 4096,
                  "end": 4105,
                  "expression": {
                    "type": "Identifier",
                    "start": 4096,
                    "end": 4097,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 4097,
                    "end": 4105,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4098,
                        "end": 4104
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4016,
        "end": 4019,
        "decorators": [],
        "name": "f34",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4020,
          "end": 4079,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4021,
            "end": 4079,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4023,
              "end": 4079,
              "types": [
                {
                  "type": "TSConstructorType",
                  "start": 4024,
                  "end": 4042,
                  "abstract": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4032,
                      "end": 4036,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4033,
                        "end": 4036,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4035,
                          "end": 4036,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4035,
                            "end": 4036,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 4038,
                    "end": 4042,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4041,
                      "end": 4042,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4041,
                        "end": 4042,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 4028,
                    "end": 4031,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 4029,
                        "end": 4030,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 4029,
                          "end": 4030,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSConstructorType",
                  "start": 4047,
                  "end": 4078,
                  "abstract": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4055,
                      "end": 4059,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4056,
                        "end": 4059,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4058,
                          "end": 4059,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4058,
                            "end": 4059,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 4061,
                      "end": 4070,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4062,
                        "end": 4070,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4064,
                          "end": 4070
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 4072,
                    "end": 4078,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 4075,
                      "end": 4078,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 4075,
                        "end": 4076,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4075,
                          "end": 4076,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 4051,
                    "end": 4054,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 4052,
                        "end": 4053,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 4052,
                          "end": 4053,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 4182,
      "end": 4351,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4252,
        "end": 4351,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4258,
            "end": 4277,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4262,
                "end": 4276,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4262,
                  "end": 4264,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 4267,
                  "end": 4276,
                  "expression": {
                    "type": "Identifier",
                    "start": 4267,
                    "end": 4268,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 4268,
                    "end": 4276,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4269,
                        "end": 4275
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4191,
        "end": 4194,
        "decorators": [],
        "name": "f35",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4195,
          "end": 4250,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4196,
            "end": 4250,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4198,
              "end": 4250,
              "types": [
                {
                  "type": "TSConstructorType",
                  "start": 4199,
                  "end": 4217,
                  "abstract": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4207,
                      "end": 4211,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4208,
                        "end": 4211,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4210,
                          "end": 4211,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4210,
                            "end": 4211,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 4213,
                    "end": 4217,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4216,
                      "end": 4217,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4216,
                        "end": 4217,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 4203,
                    "end": 4206,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 4204,
                        "end": 4205,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 4204,
                          "end": 4205,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 4222,
                  "end": 4249,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4226,
                      "end": 4230,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4227,
                        "end": 4230,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4229,
                          "end": 4230,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4229,
                            "end": 4230,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 4232,
                      "end": 4241,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4233,
                        "end": 4241,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4235,
                          "end": 4241
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 4243,
                    "end": 4249,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 4246,
                      "end": 4249,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 4246,
                        "end": 4247,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4246,
                          "end": 4247,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 4222,
                    "end": 4225,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 4223,
                        "end": 4224,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 4223,
                          "end": 4224,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 4353,
      "end": 4534,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4430,
        "end": 4534,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4436,
            "end": 4455,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4440,
                "end": 4454,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4440,
                  "end": 4442,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 4445,
                  "end": 4454,
                  "expression": {
                    "type": "Identifier",
                    "start": 4445,
                    "end": 4446,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 4446,
                    "end": 4454,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4447,
                        "end": 4453
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4362,
        "end": 4365,
        "decorators": [],
        "name": "f36",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4366,
          "end": 4428,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4367,
            "end": 4428,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4369,
              "end": 4428,
              "types": [
                {
                  "type": "TSConstructorType",
                  "start": 4370,
                  "end": 4388,
                  "abstract": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4378,
                      "end": 4382,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4379,
                        "end": 4382,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4381,
                          "end": 4382,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4381,
                            "end": 4382,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 4384,
                    "end": 4388,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4387,
                      "end": 4388,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4387,
                        "end": 4388,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 4374,
                    "end": 4377,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 4375,
                        "end": 4376,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 4375,
                          "end": 4376,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 4393,
                  "end": 4427,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4394,
                      "end": 4403,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4395,
                        "end": 4403,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4397,
                          "end": 4403
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 4405,
                      "end": 4414,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4406,
                        "end": 4414,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4408,
                          "end": 4414
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 4416,
                    "end": 4427,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 4419,
                      "end": 4427,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 4419,
                        "end": 4425
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 4536,
      "end": 4721,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4613,
        "end": 4721,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4619,
            "end": 4638,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4623,
                "end": 4637,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4623,
                  "end": 4625,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 4628,
                  "end": 4637,
                  "expression": {
                    "type": "Identifier",
                    "start": 4628,
                    "end": 4629,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 4629,
                    "end": 4637,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4630,
                        "end": 4636
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4545,
        "end": 4548,
        "decorators": [],
        "name": "f37",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4549,
          "end": 4611,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4550,
            "end": 4611,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4552,
              "end": 4611,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 4553,
                  "end": 4567,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4557,
                      "end": 4561,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4558,
                        "end": 4561,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4560,
                          "end": 4561,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4560,
                            "end": 4561,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 4563,
                    "end": 4567,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4566,
                      "end": 4567,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4566,
                        "end": 4567,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 4553,
                    "end": 4556,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 4554,
                        "end": 4555,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 4554,
                          "end": 4555,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSConstructorType",
                  "start": 4572,
                  "end": 4610,
                  "abstract": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4577,
                      "end": 4586,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4578,
                        "end": 4586,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4580,
                          "end": 4586
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 4588,
                      "end": 4597,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4589,
                        "end": 4597,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4591,
                          "end": 4597
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 4599,
                    "end": 4610,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 4602,
                      "end": 4610,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 4602,
                        "end": 4608
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 4723,
      "end": 4938,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4821,
        "end": 4938,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4827,
            "end": 4846,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4831,
                "end": 4845,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4831,
                  "end": 4833,
                  "decorators": [],
                  "name": "fs",
                  "optional": false
                },
                "init": {
                  "type": "TSInstantiationExpression",
                  "start": 4836,
                  "end": 4845,
                  "expression": {
                    "type": "Identifier",
                    "start": 4836,
                    "end": 4837,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 4837,
                    "end": 4845,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4838,
                        "end": 4844
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4732,
        "end": 4735,
        "decorators": [],
        "name": "f38",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4788,
          "end": 4819,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4789,
            "end": 4819,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4791,
              "end": 4819,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 4791,
                  "end": 4792,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4791,
                    "end": 4792,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 4795,
                  "end": 4796,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4795,
                    "end": 4796,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 4800,
                  "end": 4818,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4804,
                      "end": 4808,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4805,
                        "end": 4808,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4807,
                          "end": 4808,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4807,
                            "end": 4808,
                            "decorators": [],
                            "name": "C",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 4810,
                    "end": 4818,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 4813,
                      "end": 4818,
                      "elementType": {
                        "type": "TSArrayType",
                        "start": 4813,
                        "end": 4816,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 4813,
                          "end": 4814,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4813,
                            "end": 4814,
                            "decorators": [],
                            "name": "C",
                            "optional": false
                          }
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 4800,
                    "end": 4803,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 4801,
                        "end": 4802,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 4801,
                          "end": 4802,
                          "decorators": [],
                          "name": "C",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4735,
        "end": 4787,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4736,
            "end": 4783,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 4746,
              "end": 4783,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 4747,
                  "end": 4761,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4751,
                      "end": 4755,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4752,
                        "end": 4755,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4754,
                          "end": 4755,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4754,
                            "end": 4755,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 4757,
                    "end": 4761,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4760,
                      "end": 4761,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4760,
                        "end": 4761,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 4747,
                    "end": 4750,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 4748,
                        "end": 4749,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 4748,
                          "end": 4749,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 4766,
                  "end": 4782,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 4770,
                      "end": 4774,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4771,
                        "end": 4774,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4773,
                          "end": 4774,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4773,
                            "end": 4774,
                            "decorators": [],
                            "name": "B",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 4776,
                    "end": 4782,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 4779,
                      "end": 4782,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 4779,
                        "end": 4780,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4779,
                          "end": 4780,
                          "decorators": [],
                          "name": "B",
                          "optional": false
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 4766,
                    "end": 4769,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 4767,
                        "end": 4768,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 4767,
                          "end": 4768,
                          "decorators": [],
                          "name": "B",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4736,
              "end": 4737,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4785,
            "end": 4786,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4785,
              "end": 4786,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 4940,
      "end": 4995,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4970,
        "end": 4995,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 4976,
            "end": 4993,
            "argument": {
              "type": "ObjectExpression",
              "start": 4983,
              "end": 4992,
              "properties": [
                {
                  "type": "Property",
                  "start": 4985,
                  "end": 4990,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4985,
                    "end": 4990,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 4985,
                    "end": 4990,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4949,
        "end": 4956,
        "decorators": [],
        "name": "makeBox",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4960,
          "end": 4968,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4965,
            "end": 4968,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4967,
              "end": 4968,
              "typeName": {
                "type": "Identifier",
                "start": 4967,
                "end": 4968,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4956,
        "end": 4959,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4957,
            "end": 4958,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4957,
              "end": 4958,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4997,
      "end": 5033,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5002,
        "end": 5009,
        "decorators": [],
        "name": "BoxFunc",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 5015,
        "end": 5032,
        "exprName": {
          "type": "Identifier",
          "start": 5022,
          "end": 5029,
          "decorators": [],
          "name": "makeBox",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5029,
          "end": 5032,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 5030,
              "end": 5031,
              "typeName": {
                "type": "Identifier",
                "start": 5030,
                "end": 5031,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5009,
        "end": 5012,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5010,
            "end": 5011,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5010,
              "end": 5011,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5065,
      "end": 5102,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5070,
        "end": 5083,
        "decorators": [],
        "name": "StringBoxFunc",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5086,
        "end": 5101,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5093,
          "end": 5101,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 5094,
              "end": 5100
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 5086,
          "end": 5093,
          "decorators": [],
          "name": "BoxFunc",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5145,
      "end": 5189,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5150,
        "end": 5153,
        "decorators": [],
        "name": "Box",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5159,
        "end": 5188,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5169,
          "end": 5188,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 5170,
              "end": 5187,
              "exprName": {
                "type": "Identifier",
                "start": 5177,
                "end": 5184,
                "decorators": [],
                "name": "makeBox",
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 5184,
                "end": 5187,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 5185,
                    "end": 5186,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5185,
                      "end": 5186,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 5159,
          "end": 5169,
          "decorators": [],
          "name": "ReturnType",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5153,
        "end": 5156,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5154,
            "end": 5155,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5154,
              "end": 5155,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5207,
      "end": 5236,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5212,
        "end": 5221,
        "decorators": [],
        "name": "StringBox",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5224,
        "end": 5235,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5227,
          "end": 5235,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 5228,
              "end": 5234
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 5224,
          "end": 5227,
          "decorators": [],
          "name": "Box",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5260,
      "end": 5302,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5265,
        "end": 5266,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5272,
        "end": 5301,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5284,
          "end": 5301,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 5285,
              "end": 5300,
              "exprName": {
                "type": "Identifier",
                "start": 5292,
                "end": 5297,
                "decorators": [],
                "name": "Array",
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 5297,
                "end": 5300,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 5298,
                    "end": 5299,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5298,
                      "end": 5299,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 5272,
          "end": 5284,
          "decorators": [],
          "name": "InstanceType",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5266,
        "end": 5269,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5267,
            "end": 5268,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5267,
              "end": 5268,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 5312,
      "end": 5387,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5326,
          "end": 5387,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5326,
            "end": 5387,
            "decorators": [],
            "name": "g1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5328,
              "end": 5387,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 5330,
                "end": 5387,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 5336,
                    "end": 5356,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5340,
                        "end": 5344,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5341,
                          "end": 5344,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5343,
                            "end": 5344,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5343,
                              "end": 5344,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5345,
                      "end": 5355,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 5347,
                        "end": 5355,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 5349,
                            "end": 5353,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 5349,
                              "end": 5350,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5350,
                              "end": 5353,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5352,
                                "end": 5353,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5352,
                                  "end": 5353,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 5336,
                      "end": 5339,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 5337,
                          "end": 5338,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 5337,
                            "end": 5338,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 5361,
                    "end": 5385,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5369,
                        "end": 5373,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5370,
                          "end": 5373,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5372,
                            "end": 5373,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5372,
                              "end": 5373,
                              "decorators": [],
                              "name": "U",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5374,
                      "end": 5384,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 5376,
                        "end": 5384,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 5378,
                            "end": 5382,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 5378,
                              "end": 5379,
                              "decorators": [],
                              "name": "b",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 5379,
                              "end": 5382,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5381,
                                "end": 5382,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5381,
                                  "end": 5382,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 5365,
                      "end": 5368,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 5366,
                          "end": 5367,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 5366,
                            "end": 5367,
                            "decorators": [],
                            "name": "U",
                            "optional": false
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
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5389,
      "end": 5416,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5394,
        "end": 5397,
        "decorators": [],
        "name": "T30",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 5403,
        "end": 5415,
        "exprName": {
          "type": "Identifier",
          "start": 5410,
          "end": 5412,
          "decorators": [],
          "name": "g1",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5412,
          "end": 5415,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 5413,
              "end": 5414,
              "typeName": {
                "type": "Identifier",
                "start": 5413,
                "end": 5414,
                "decorators": [],
                "name": "V",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5397,
        "end": 5400,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5398,
            "end": 5399,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5398,
              "end": 5399,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5469,
      "end": 5502,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5474,
        "end": 5477,
        "decorators": [],
        "name": "T31",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5483,
        "end": 5501,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5493,
          "end": 5501,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 5494,
              "end": 5500,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 5497,
                "end": 5500,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 5498,
                    "end": 5499,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5498,
                      "end": 5499,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 5494,
                "end": 5497,
                "decorators": [],
                "name": "T30",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 5483,
          "end": 5493,
          "decorators": [],
          "name": "ReturnType",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5477,
        "end": 5480,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5478,
            "end": 5479,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5478,
              "end": 5479,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5516,
      "end": 5551,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5521,
        "end": 5524,
        "decorators": [],
        "name": "T32",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5530,
        "end": 5550,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5542,
          "end": 5550,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 5543,
              "end": 5549,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 5546,
                "end": 5549,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 5547,
                    "end": 5548,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5547,
                      "end": 5548,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 5543,
                "end": 5546,
                "decorators": [],
                "name": "T30",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 5530,
          "end": 5542,
          "decorators": [],
          "name": "InstanceType",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5524,
        "end": 5527,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5525,
            "end": 5526,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5525,
              "end": 5526,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 5566,
      "end": 5657,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5580,
          "end": 5657,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5580,
            "end": 5657,
            "decorators": [],
            "name": "g2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5582,
              "end": 5657,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 5584,
                "end": 5657,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 5590,
                    "end": 5618,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5609,
                        "end": 5613,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5610,
                          "end": 5613,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5612,
                            "end": 5613,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5612,
                              "end": 5613,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5614,
                      "end": 5617,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5616,
                        "end": 5617,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5616,
                          "end": 5617,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 5590,
                      "end": 5608,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 5591,
                          "end": 5607,
                          "const": false,
                          "constraint": {
                            "type": "TSStringKeyword",
                            "start": 5601,
                            "end": 5607
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 5591,
                            "end": 5592,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 5623,
                    "end": 5655,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5646,
                        "end": 5650,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5647,
                          "end": 5650,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5649,
                            "end": 5650,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5649,
                              "end": 5650,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5651,
                      "end": 5654,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5653,
                        "end": 5654,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5653,
                          "end": 5654,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 5627,
                      "end": 5645,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 5628,
                          "end": 5644,
                          "const": false,
                          "constraint": {
                            "type": "TSNumberKeyword",
                            "start": 5638,
                            "end": 5644
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 5628,
                            "end": 5629,
                            "decorators": [],
                            "name": "T",
                            "optional": false
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
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5659,
      "end": 5701,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5664,
        "end": 5667,
        "decorators": [],
        "name": "T40",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 5688,
        "end": 5700,
        "exprName": {
          "type": "Identifier",
          "start": 5695,
          "end": 5697,
          "decorators": [],
          "name": "g2",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5697,
          "end": 5700,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 5698,
              "end": 5699,
              "typeName": {
                "type": "Identifier",
                "start": 5698,
                "end": 5699,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5667,
        "end": 5685,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5668,
            "end": 5684,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 5678,
              "end": 5684
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5668,
              "end": 5669,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5712,
      "end": 5754,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5717,
        "end": 5720,
        "decorators": [],
        "name": "T41",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 5741,
        "end": 5753,
        "exprName": {
          "type": "Identifier",
          "start": 5748,
          "end": 5750,
          "decorators": [],
          "name": "g2",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5750,
          "end": 5753,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 5751,
              "end": 5752,
              "typeName": {
                "type": "Identifier",
                "start": 5751,
                "end": 5752,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5720,
        "end": 5738,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5721,
            "end": 5737,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 5731,
              "end": 5737
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5721,
              "end": 5722,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 5766,
      "end": 5860,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5780,
          "end": 5860,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5780,
            "end": 5860,
            "decorators": [],
            "name": "g3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5782,
              "end": 5860,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 5784,
                "end": 5860,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 5790,
                    "end": 5818,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5809,
                        "end": 5813,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5810,
                          "end": 5813,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5812,
                            "end": 5813,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5812,
                              "end": 5813,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5814,
                      "end": 5817,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5816,
                        "end": 5817,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5816,
                          "end": 5817,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 5790,
                      "end": 5808,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 5791,
                          "end": 5807,
                          "const": false,
                          "constraint": {
                            "type": "TSStringKeyword",
                            "start": 5801,
                            "end": 5807
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 5791,
                            "end": 5792,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 5823,
                    "end": 5858,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5849,
                        "end": 5853,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5850,
                          "end": 5853,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5852,
                            "end": 5853,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5852,
                              "end": 5853,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5854,
                      "end": 5857,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5856,
                        "end": 5857,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5856,
                          "end": 5857,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 5827,
                      "end": 5848,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 5828,
                          "end": 5844,
                          "const": false,
                          "constraint": {
                            "type": "TSNumberKeyword",
                            "start": 5838,
                            "end": 5844
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 5828,
                            "end": 5829,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          },
                          "out": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 5846,
                          "end": 5847,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 5846,
                            "end": 5847,
                            "decorators": [],
                            "name": "Q",
                            "optional": false
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
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5862,
      "end": 5904,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5867,
        "end": 5870,
        "decorators": [],
        "name": "T50",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 5891,
        "end": 5903,
        "exprName": {
          "type": "Identifier",
          "start": 5898,
          "end": 5900,
          "decorators": [],
          "name": "g3",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5900,
          "end": 5903,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 5901,
              "end": 5902,
              "typeName": {
                "type": "Identifier",
                "start": 5901,
                "end": 5902,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5870,
        "end": 5888,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5871,
            "end": 5887,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 5881,
              "end": 5887
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5871,
              "end": 5872,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5921,
      "end": 5968,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5926,
        "end": 5929,
        "decorators": [],
        "name": "T51",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 5950,
        "end": 5967,
        "exprName": {
          "type": "Identifier",
          "start": 5957,
          "end": 5959,
          "decorators": [],
          "name": "g3",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5959,
          "end": 5967,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 5960,
              "end": 5961,
              "typeName": {
                "type": "Identifier",
                "start": 5960,
                "end": 5961,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            },
            {
              "type": "TSAnyKeyword",
              "start": 5963,
              "end": 5966
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5929,
        "end": 5947,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5930,
            "end": 5946,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 5940,
              "end": 5946
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5930,
              "end": 5931,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
