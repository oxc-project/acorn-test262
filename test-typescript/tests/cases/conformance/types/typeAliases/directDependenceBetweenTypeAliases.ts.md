__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 144,
  "end": 1005,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 144,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 151,
        "name": "T0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 154,
        "end": 156,
        "typeName": {
          "type": "Identifier",
          "start": 154,
          "end": 156,
          "name": "T0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 157,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 166,
        "name": "T0_1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 169,
        "end": 173,
        "typeName": {
          "type": "Identifier",
          "start": 169,
          "end": 173,
          "name": "T0_2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 174,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 183,
        "name": "T0_2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 186,
        "end": 190,
        "typeName": {
          "type": "Identifier",
          "start": 186,
          "end": 190,
          "name": "T0_3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 191,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 200,
        "name": "T0_3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 203,
        "end": 207,
        "typeName": {
          "type": "Identifier",
          "start": 203,
          "end": 207,
          "name": "T0_1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 309,
      "end": 326,
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 320,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 320,
        "end": 323,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 321,
            "end": 322,
            "name": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
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
        "start": 324,
        "end": 326,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 327,
      "end": 342,
      "id": {
        "type": "Identifier",
        "start": 332,
        "end": 334,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 337,
        "end": 342,
        "typeName": {
          "type": "Identifier",
          "start": 337,
          "end": 338,
          "name": "I",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 338,
          "end": 342,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 339,
              "end": 341,
              "typeName": {
                "type": "Identifier",
                "start": 339,
                "end": 341,
                "name": "T1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 411,
      "end": 432,
      "id": {
        "type": "Identifier",
        "start": 416,
        "end": 418,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 421,
        "end": 432,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 421,
            "end": 423,
            "typeName": {
              "type": "Identifier",
              "start": 421,
              "end": 423,
              "name": "T2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSStringKeyword",
            "start": 426,
            "end": 432
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 433,
      "end": 446,
      "id": {
        "type": "Identifier",
        "start": 439,
        "end": 440,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 444,
        "end": 446,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 440,
        "end": 443,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 441,
            "end": 442,
            "name": {
              "type": "Identifier",
              "start": 441,
              "end": 442,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 447,
      "end": 474,
      "id": {
        "type": "Identifier",
        "start": 452,
        "end": 456,
        "name": "T2_1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 459,
        "end": 474,
        "types": [
          {
            "type": "TSArrayType",
            "start": 459,
            "end": 465,
            "elementType": {
              "type": "TSTypeReference",
              "start": 459,
              "end": 463,
              "typeName": {
                "type": "Identifier",
                "start": 459,
                "end": 463,
                "name": "T2_1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSNumberKeyword",
            "start": 468,
            "end": 474
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 531,
      "end": 545,
      "id": {
        "type": "Identifier",
        "start": 536,
        "end": 538,
        "name": "T3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "start": 541,
        "end": 545,
        "elementType": {
          "type": "TSTypeReference",
          "start": 541,
          "end": 543,
          "typeName": {
            "type": "Identifier",
            "start": 541,
            "end": 543,
            "name": "T3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 610,
      "end": 632,
      "id": {
        "type": "Identifier",
        "start": 615,
        "end": 617,
        "name": "T4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 620,
        "end": 632,
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 621,
            "end": 627
          },
          {
            "type": "TSTypeReference",
            "start": 629,
            "end": 631,
            "typeName": {
              "type": "Identifier",
              "start": 629,
              "end": 631,
              "name": "T4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 705,
      "end": 721,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 709,
          "end": 721,
          "id": {
            "type": "Identifier",
            "start": 709,
            "end": 716,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 710,
              "end": 716,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 712,
                "end": 716,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 712,
                  "end": 714,
                  "typeName": {
                    "type": "Identifier",
                    "start": 712,
                    "end": 714,
                    "name": "T5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 719,
            "end": 721,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 722,
      "end": 740,
      "id": {
        "type": "Identifier",
        "start": 727,
        "end": 729,
        "name": "T5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 732,
        "end": 740,
        "exprName": {
          "type": "Identifier",
          "start": 739,
          "end": 740,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 742,
      "end": 756,
      "id": {
        "type": "Identifier",
        "start": 748,
        "end": 750,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 754,
        "end": 756,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 750,
        "end": 753,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 751,
            "end": 752,
            "name": {
              "type": "Identifier",
              "start": 751,
              "end": 752,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 757,
      "end": 778,
      "id": {
        "type": "Identifier",
        "start": 762,
        "end": 764,
        "name": "T6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 767,
        "end": 778,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 767,
            "end": 769,
            "typeName": {
              "type": "Identifier",
              "start": 767,
              "end": 769,
              "name": "T7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSNumberKeyword",
            "start": 772,
            "end": 778
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 779,
      "end": 798,
      "id": {
        "type": "Identifier",
        "start": 784,
        "end": 786,
        "name": "T7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 789,
        "end": 798,
        "exprName": {
          "type": "Identifier",
          "start": 796,
          "end": 798,
          "name": "yy",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 799,
      "end": 822,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 803,
          "end": 821,
          "id": {
            "type": "Identifier",
            "start": 803,
            "end": 821,
            "name": "yy",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 805,
              "end": 821,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 807,
                "end": 821,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 808,
                    "end": 814
                  },
                  {
                    "type": "TSArrayType",
                    "start": 816,
                    "end": 820,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 816,
                      "end": 818,
                      "typeName": {
                        "type": "Identifier",
                        "start": 816,
                        "end": 818,
                        "name": "T8",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
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
      "type": "TSTypeAliasDeclaration",
      "start": 823,
      "end": 838,
      "id": {
        "type": "Identifier",
        "start": 828,
        "end": 830,
        "name": "T8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 833,
        "end": 838,
        "typeName": {
          "type": "Identifier",
          "start": 833,
          "end": 834,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 834,
          "end": 838,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 835,
              "end": 837,
              "typeName": {
                "type": "Identifier",
                "start": 835,
                "end": 837,
                "name": "T6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 855,
      "end": 873,
      "id": {
        "type": "Identifier",
        "start": 860,
        "end": 862,
        "name": "T9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 865,
        "end": 873,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 868,
          "end": 873,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 871,
            "end": 873,
            "typeName": {
              "type": "Identifier",
              "start": 871,
              "end": 873,
              "name": "T9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 874,
      "end": 921,
      "id": {
        "type": "Identifier",
        "start": 879,
        "end": 882,
        "name": "T10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 885,
        "end": 921,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 885,
            "end": 895,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 887,
                "end": 893,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 887,
                  "end": 888,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 888,
                  "end": 893,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 890,
                    "end": 893,
                    "typeName": {
                      "type": "Identifier",
                      "start": 890,
                      "end": 893,
                      "name": "T10",
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
          {
            "type": "TSTypeLiteral",
            "start": 898,
            "end": 921,
            "members": [
              {
                "type": "TSConstructSignatureDeclaration",
                "start": 900,
                "end": 919,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 904,
                    "end": 910,
                    "name": "v",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 905,
                      "end": 910,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 907,
                        "end": 910,
                        "typeName": {
                          "type": "Identifier",
                          "start": 907,
                          "end": 910,
                          "name": "T10",
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
                  "start": 911,
                  "end": 919,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 913,
                    "end": 919
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 922,
      "end": 938,
      "id": {
        "type": "Identifier",
        "start": 927,
        "end": 930,
        "name": "T11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "start": 933,
        "end": 938,
        "elementType": {
          "type": "TSTypeReference",
          "start": 933,
          "end": 936,
          "typeName": {
            "type": "Identifier",
            "start": 933,
            "end": 936,
            "name": "T12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 939,
      "end": 963,
      "id": {
        "type": "Identifier",
        "start": 944,
        "end": 947,
        "name": "T12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 950,
        "end": 963,
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "start": 951,
            "end": 954,
            "typeName": {
              "type": "Identifier",
              "start": 951,
              "end": 954,
              "name": "T13",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSStringKeyword",
            "start": 956,
            "end": 962
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 964,
      "end": 984,
      "id": {
        "type": "Identifier",
        "start": 969,
        "end": 972,
        "name": "T13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 975,
        "end": 984,
        "exprName": {
          "type": "Identifier",
          "start": 982,
          "end": 984,
          "name": "zz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 985,
      "end": 1003,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 989,
          "end": 1003,
          "id": {
            "type": "Identifier",
            "start": 989,
            "end": 1003,
            "name": "zz",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 991,
              "end": 1003,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 993,
                "end": 1003,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 995,
                    "end": 1001,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 995,
                      "end": 996,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 996,
                      "end": 1001,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 998,
                        "end": 1001,
                        "typeName": {
                          "type": "Identifier",
                          "start": 998,
                          "end": 1001,
                          "name": "T11",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
