__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "invalidUniqueType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 56,
                  "end": 62
                },
                "start": 49,
                "end": 62
              },
              "start": 47,
              "end": 62
            },
            "start": 30,
            "end": 62
          },
          "init": null,
          "definite": false,
          "start": 30,
          "end": 62
        }
      ],
      "declare": true,
      "start": 16,
      "end": 63
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 89,
                  "end": 95
                },
                "start": 82,
                "end": 95
              },
              "start": 80,
              "end": 95
            },
            "start": 78,
            "end": 95
          },
          "init": null,
          "definite": false,
          "start": 78,
          "end": 95
        }
      ],
      "declare": true,
      "start": 64,
      "end": 96
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "invalidLetType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 132,
                  "end": 138
                },
                "start": 125,
                "end": 138
              },
              "start": 123,
              "end": 138
            },
            "start": 109,
            "end": 138
          },
          "init": null,
          "definite": false,
          "start": 109,
          "end": 138
        }
      ],
      "declare": true,
      "start": 97,
      "end": 139
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
            "name": "invalidVarType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 175,
                  "end": 181
                },
                "start": 168,
                "end": 181
              },
              "start": 166,
              "end": 181
            },
            "start": 152,
            "end": 181
          },
          "init": null,
          "definite": false,
          "start": 152,
          "end": 181
        }
      ],
      "declare": true,
      "start": 140,
      "end": 182
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidArgType",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 254
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 267,
                "end": 273
              },
              "start": 260,
              "end": 273
            },
            "start": 258,
            "end": 273
          },
          "start": 255,
          "end": 273
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 276,
          "end": 280
        },
        "start": 274,
        "end": 280
      },
      "body": null,
      "expression": false,
      "start": 223,
      "end": 281
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidRestArgType",
        "optional": false,
        "typeAnnotation": null,
        "start": 299,
        "end": 317
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 324
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 334,
                  "end": 340
                },
                "start": 327,
                "end": 340
              },
              "start": 326,
              "end": 343
            },
            "start": 324,
            "end": 343
          },
          "value": null,
          "start": 318,
          "end": 343
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 346,
          "end": 350
        },
        "start": 344,
        "end": 350
      },
      "body": null,
      "expression": false,
      "start": 282,
      "end": 351
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidReturnType",
        "optional": false,
        "typeAnnotation": null,
        "start": 369,
        "end": 386
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "unique",
          "typeAnnotation": {
            "type": "TSSymbolKeyword",
            "start": 397,
            "end": 403
          },
          "start": 390,
          "end": 403
        },
        "start": 388,
        "end": 403
      },
      "body": null,
      "expression": false,
      "start": 352,
      "end": 404
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidThisType",
        "optional": false,
        "typeAnnotation": null,
        "start": 422,
        "end": 437
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 451,
                "end": 457
              },
              "start": 444,
              "end": 457
            },
            "start": 442,
            "end": 457
          },
          "start": 438,
          "end": 457
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 460,
          "end": 464
        },
        "start": 458,
        "end": 464
      },
      "body": null,
      "expression": false,
      "start": 405,
      "end": 465
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidTypePredicate",
        "optional": false,
        "typeAnnotation": null,
        "start": 483,
        "end": 503
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 507,
              "end": 510
            },
            "start": 505,
            "end": 510
          },
          "start": 504,
          "end": 510
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 513,
            "end": 514
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 525,
                "end": 531
              },
              "start": 518,
              "end": 531
            },
            "start": 518,
            "end": 531
          },
          "start": 513,
          "end": 531
        },
        "start": 511,
        "end": 531
      },
      "body": null,
      "expression": false,
      "start": 466,
      "end": 532
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidTypeParameterConstraint",
        "optional": false,
        "typeAnnotation": null,
        "start": 550,
        "end": 580
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 581,
              "end": 582
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 598,
                "end": 604
              },
              "start": 591,
              "end": 604
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 581,
            "end": 604
          }
        ],
        "start": 580,
        "end": 605
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 609,
          "end": 613
        },
        "start": 607,
        "end": 613
      },
      "body": null,
      "expression": false,
      "start": 533,
      "end": 614
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidTypeParameterDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 632,
        "end": 659
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 660,
              "end": 661
            },
            "constraint": null,
            "default": {
              "type": "TSTypeOperator",
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 671,
                "end": 677
              },
              "start": 664,
              "end": 677
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 660,
            "end": 677
          }
        ],
        "start": 659,
        "end": 678
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 682,
          "end": 686
        },
        "start": 680,
        "end": 686
      },
      "body": null,
      "expression": false,
      "start": 615,
      "end": 687
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InvalidClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 706,
        "end": 718
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 736
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "invalidConstructorArgType",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 771,
                        "end": 777
                      },
                      "start": 764,
                      "end": 777
                    },
                    "start": 762,
                    "end": 777
                  },
                  "start": 737,
                  "end": 777
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 779,
                "end": 781
              },
              "expression": false,
              "start": 736,
              "end": 781
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 725,
            "end": 781
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidReadonlyPropertyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 796,
              "end": 823
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 832,
                  "end": 838
                },
                "start": 825,
                "end": 838
              },
              "start": 823,
              "end": 838
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 787,
            "end": 839
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidPropertyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 844,
              "end": 863
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 872,
                  "end": 878
                },
                "start": 865,
                "end": 878
              },
              "start": 863,
              "end": 878
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 844,
            "end": 879
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidArgType",
              "optional": false,
              "typeAnnotation": null,
              "start": 884,
              "end": 898
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 911,
                        "end": 917
                      },
                      "start": 904,
                      "end": 917
                    },
                    "start": 902,
                    "end": 917
                  },
                  "start": 899,
                  "end": 917
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 920,
                  "end": 924
                },
                "start": 918,
                "end": 924
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 927,
                    "end": 934
                  }
                ],
                "start": 925,
                "end": 936
              },
              "expression": false,
              "start": 898,
              "end": 936
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 884,
            "end": 936
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidRestArgType",
              "optional": false,
              "typeAnnotation": null,
              "start": 941,
              "end": 959
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 963,
                    "end": 967
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeOperator",
                        "operator": "unique",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 977,
                          "end": 983
                        },
                        "start": 970,
                        "end": 983
                      },
                      "start": 969,
                      "end": 986
                    },
                    "start": 967,
                    "end": 986
                  },
                  "value": null,
                  "start": 960,
                  "end": 986
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 989,
                  "end": 993
                },
                "start": 987,
                "end": 993
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 996,
                    "end": 1003
                  }
                ],
                "start": 994,
                "end": 1005
              },
              "expression": false,
              "start": 959,
              "end": 1005
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 941,
            "end": 1005
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1010,
              "end": 1027
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 1038,
                    "end": 1044
                  },
                  "start": 1031,
                  "end": 1044
                },
                "start": 1029,
                "end": 1044
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1047,
                    "end": 1054
                  }
                ],
                "start": 1045,
                "end": 1056
              },
              "expression": false,
              "start": 1027,
              "end": 1056
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1010,
            "end": 1056
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidThisType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1061,
              "end": 1076
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1090,
                        "end": 1096
                      },
                      "start": 1083,
                      "end": 1096
                    },
                    "start": 1081,
                    "end": 1096
                  },
                  "start": 1077,
                  "end": 1096
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1099,
                  "end": 1103
                },
                "start": 1097,
                "end": 1103
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1106,
                    "end": 1113
                  }
                ],
                "start": 1104,
                "end": 1115
              },
              "expression": false,
              "start": 1076,
              "end": 1115
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1061,
            "end": 1115
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidTypePredicate",
              "optional": false,
              "typeAnnotation": null,
              "start": 1120,
              "end": 1140
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1144,
                      "end": 1147
                    },
                    "start": 1142,
                    "end": 1147
                  },
                  "start": 1141,
                  "end": 1147
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1150,
                    "end": 1151
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1162,
                        "end": 1168
                      },
                      "start": 1155,
                      "end": 1168
                    },
                    "start": 1155,
                    "end": 1168
                  },
                  "start": 1150,
                  "end": 1168
                },
                "start": 1148,
                "end": 1168
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1171,
                    "end": 1178
                  }
                ],
                "start": 1169,
                "end": 1180
              },
              "expression": false,
              "start": 1140,
              "end": 1180
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1120,
            "end": 1180
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidTypeParameterConstraint",
              "optional": false,
              "typeAnnotation": null,
              "start": 1185,
              "end": 1215
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1216,
                      "end": 1217
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1233,
                        "end": 1239
                      },
                      "start": 1226,
                      "end": 1239
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1216,
                    "end": 1239
                  }
                ],
                "start": 1215,
                "end": 1240
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1244,
                  "end": 1248
                },
                "start": 1242,
                "end": 1248
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1251,
                    "end": 1258
                  }
                ],
                "start": 1249,
                "end": 1260
              },
              "expression": false,
              "start": 1215,
              "end": 1260
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1185,
            "end": 1260
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidTypeParameterDefault",
              "optional": false,
              "typeAnnotation": null,
              "start": 1265,
              "end": 1292
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1293,
                      "end": 1294
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1304,
                        "end": 1310
                      },
                      "start": 1297,
                      "end": 1310
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1293,
                    "end": 1310
                  }
                ],
                "start": 1292,
                "end": 1311
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1315,
                  "end": 1319
                },
                "start": 1313,
                "end": 1319
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1322,
                    "end": 1329
                  }
                ],
                "start": 1320,
                "end": 1331
              },
              "expression": false,
              "start": 1292,
              "end": 1331
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1265,
            "end": 1331
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidGetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 1340,
              "end": 1353
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 1364,
                    "end": 1370
                  },
                  "start": 1357,
                  "end": 1370
                },
                "start": 1355,
                "end": 1370
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1373,
                    "end": 1380
                  }
                ],
                "start": 1371,
                "end": 1382
              },
              "expression": false,
              "start": 1353,
              "end": 1382
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1336,
            "end": 1382
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidSetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 1391,
              "end": 1404
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1417,
                        "end": 1423
                      },
                      "start": 1410,
                      "end": 1423
                    },
                    "start": 1408,
                    "end": 1423
                  },
                  "start": 1405,
                  "end": 1423
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1427,
                    "end": 1434
                  }
                ],
                "start": 1425,
                "end": 1436
              },
              "expression": false,
              "start": 1404,
              "end": 1436
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1387,
            "end": 1436
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticPropertyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1449,
              "end": 1474
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 1483,
                  "end": 1489
                },
                "start": 1476,
                "end": 1489
              },
              "start": 1474,
              "end": 1489
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1442,
            "end": 1490
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticArgType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1502,
              "end": 1522
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1535,
                        "end": 1541
                      },
                      "start": 1528,
                      "end": 1541
                    },
                    "start": 1526,
                    "end": 1541
                  },
                  "start": 1523,
                  "end": 1541
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1544,
                  "end": 1548
                },
                "start": 1542,
                "end": 1548
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1551,
                    "end": 1558
                  }
                ],
                "start": 1549,
                "end": 1560
              },
              "expression": false,
              "start": 1522,
              "end": 1560
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1495,
            "end": 1560
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticRestArgType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1572,
              "end": 1596
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1600,
                    "end": 1604
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeOperator",
                        "operator": "unique",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 1614,
                          "end": 1620
                        },
                        "start": 1607,
                        "end": 1620
                      },
                      "start": 1606,
                      "end": 1623
                    },
                    "start": 1604,
                    "end": 1623
                  },
                  "value": null,
                  "start": 1597,
                  "end": 1623
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1626,
                  "end": 1630
                },
                "start": 1624,
                "end": 1630
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1633,
                    "end": 1640
                  }
                ],
                "start": 1631,
                "end": 1642
              },
              "expression": false,
              "start": 1596,
              "end": 1642
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1565,
            "end": 1642
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1654,
              "end": 1677
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 1688,
                    "end": 1694
                  },
                  "start": 1681,
                  "end": 1694
                },
                "start": 1679,
                "end": 1694
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1697,
                    "end": 1704
                  }
                ],
                "start": 1695,
                "end": 1706
              },
              "expression": false,
              "start": 1677,
              "end": 1706
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1647,
            "end": 1706
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticThisType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1718,
              "end": 1739
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1753,
                        "end": 1759
                      },
                      "start": 1746,
                      "end": 1759
                    },
                    "start": 1744,
                    "end": 1759
                  },
                  "start": 1740,
                  "end": 1759
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1762,
                  "end": 1766
                },
                "start": 1760,
                "end": 1766
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1769,
                    "end": 1776
                  }
                ],
                "start": 1767,
                "end": 1778
              },
              "expression": false,
              "start": 1739,
              "end": 1778
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1711,
            "end": 1778
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticTypePredicate",
              "optional": false,
              "typeAnnotation": null,
              "start": 1790,
              "end": 1816
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1820,
                      "end": 1823
                    },
                    "start": 1818,
                    "end": 1823
                  },
                  "start": 1817,
                  "end": 1823
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1826,
                    "end": 1827
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1838,
                        "end": 1844
                      },
                      "start": 1831,
                      "end": 1844
                    },
                    "start": 1831,
                    "end": 1844
                  },
                  "start": 1826,
                  "end": 1844
                },
                "start": 1824,
                "end": 1844
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1847,
                    "end": 1854
                  }
                ],
                "start": 1845,
                "end": 1856
              },
              "expression": false,
              "start": 1816,
              "end": 1856
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1783,
            "end": 1856
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticTypeParameterConstraint",
              "optional": false,
              "typeAnnotation": null,
              "start": 1868,
              "end": 1904
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1905,
                      "end": 1906
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1922,
                        "end": 1928
                      },
                      "start": 1915,
                      "end": 1928
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1905,
                    "end": 1928
                  }
                ],
                "start": 1904,
                "end": 1929
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1933,
                  "end": 1937
                },
                "start": 1931,
                "end": 1937
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1940,
                    "end": 1947
                  }
                ],
                "start": 1938,
                "end": 1949
              },
              "expression": false,
              "start": 1904,
              "end": 1949
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1861,
            "end": 1949
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticTypeParameterDefault",
              "optional": false,
              "typeAnnotation": null,
              "start": 1961,
              "end": 1994
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1995,
                      "end": 1996
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 2006,
                        "end": 2012
                      },
                      "start": 1999,
                      "end": 2012
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1995,
                    "end": 2012
                  }
                ],
                "start": 1994,
                "end": 2013
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2017,
                  "end": 2021
                },
                "start": 2015,
                "end": 2021
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2024,
                    "end": 2031
                  }
                ],
                "start": 2022,
                "end": 2033
              },
              "expression": false,
              "start": 1994,
              "end": 2033
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1954,
            "end": 2033
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticGetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 2049,
              "end": 2068
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 2079,
                    "end": 2085
                  },
                  "start": 2072,
                  "end": 2085
                },
                "start": 2070,
                "end": 2085
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2088,
                    "end": 2095
                  }
                ],
                "start": 2086,
                "end": 2097
              },
              "expression": false,
              "start": 2068,
              "end": 2097
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2038,
            "end": 2097
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticSetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 2113,
              "end": 2132
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 2145,
                        "end": 2151
                      },
                      "start": 2138,
                      "end": 2151
                    },
                    "start": 2136,
                    "end": 2151
                  },
                  "start": 2133,
                  "end": 2151
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2155,
                    "end": 2162
                  }
                ],
                "start": 2153,
                "end": 2164
              },
              "expression": false,
              "start": 2132,
              "end": 2164
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2102,
            "end": 2164
          }
        ],
        "start": 719,
        "end": 2166
      },
      "abstract": false,
      "declare": false,
      "start": 700,
      "end": 2166
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InvalidInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 2192,
        "end": 2208
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidPropertyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2215,
              "end": 2234
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2243,
                  "end": 2249
                },
                "start": 2236,
                "end": 2249
              },
              "start": 2234,
              "end": 2249
            },
            "accessibility": null,
            "static": false,
            "start": 2215,
            "end": 2250
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidArgType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2255,
              "end": 2269
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2282,
                      "end": 2288
                    },
                    "start": 2275,
                    "end": 2288
                  },
                  "start": 2273,
                  "end": 2288
                },
                "start": 2270,
                "end": 2288
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2291,
                "end": 2295
              },
              "start": 2289,
              "end": 2295
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2255,
            "end": 2296
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidRestArgType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2301,
              "end": 2319
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2323,
                  "end": 2327
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 2337,
                        "end": 2343
                      },
                      "start": 2330,
                      "end": 2343
                    },
                    "start": 2329,
                    "end": 2346
                  },
                  "start": 2327,
                  "end": 2346
                },
                "value": null,
                "start": 2320,
                "end": 2346
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2349,
                "end": 2353
              },
              "start": 2347,
              "end": 2353
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2301,
            "end": 2354
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2359,
              "end": 2376
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2387,
                  "end": 2393
                },
                "start": 2380,
                "end": 2393
              },
              "start": 2378,
              "end": 2393
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2359,
            "end": 2394
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidThisType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2399,
              "end": 2414
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2428,
                      "end": 2434
                    },
                    "start": 2421,
                    "end": 2434
                  },
                  "start": 2419,
                  "end": 2434
                },
                "start": 2415,
                "end": 2434
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2399,
            "end": 2436
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidTypePredicate",
              "optional": false,
              "typeAnnotation": null,
              "start": 2441,
              "end": 2461
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2465,
                    "end": 2468
                  },
                  "start": 2463,
                  "end": 2468
                },
                "start": 2462,
                "end": 2468
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2471,
                  "end": 2472
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2483,
                      "end": 2489
                    },
                    "start": 2476,
                    "end": 2489
                  },
                  "start": 2476,
                  "end": 2489
                },
                "start": 2471,
                "end": 2489
              },
              "start": 2469,
              "end": 2489
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2441,
            "end": 2489
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidTypeParameterConstraint",
              "optional": false,
              "typeAnnotation": null,
              "start": 2494,
              "end": 2524
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 2525,
                    "end": 2526
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2542,
                      "end": 2548
                    },
                    "start": 2535,
                    "end": 2548
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2525,
                  "end": 2548
                }
              ],
              "start": 2524,
              "end": 2549
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2553,
                "end": 2557
              },
              "start": 2551,
              "end": 2557
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2494,
            "end": 2558
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidTypeParameterDefault",
              "optional": false,
              "typeAnnotation": null,
              "start": 2563,
              "end": 2590
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 2591,
                    "end": 2592
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2602,
                      "end": 2608
                    },
                    "start": 2595,
                    "end": 2608
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2591,
                  "end": 2608
                }
              ],
              "start": 2590,
              "end": 2609
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2613,
                "end": 2617
              },
              "start": 2611,
              "end": 2617
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2563,
            "end": 2618
          }
        ],
        "start": 2209,
        "end": 2620
      },
      "declare": false,
      "start": 2182,
      "end": 2620
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InvalidTypeLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 2644,
        "end": 2662
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidPropertyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2671,
              "end": 2690
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2699,
                  "end": 2705
                },
                "start": 2692,
                "end": 2705
              },
              "start": 2690,
              "end": 2705
            },
            "accessibility": null,
            "static": false,
            "start": 2671,
            "end": 2706
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidArgType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2711,
              "end": 2725
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2738,
                      "end": 2744
                    },
                    "start": 2731,
                    "end": 2744
                  },
                  "start": 2729,
                  "end": 2744
                },
                "start": 2726,
                "end": 2744
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2747,
                "end": 2751
              },
              "start": 2745,
              "end": 2751
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2711,
            "end": 2752
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidRestArgType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2757,
              "end": 2775
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2779,
                  "end": 2783
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 2793,
                        "end": 2799
                      },
                      "start": 2786,
                      "end": 2799
                    },
                    "start": 2785,
                    "end": 2802
                  },
                  "start": 2783,
                  "end": 2802
                },
                "value": null,
                "start": 2776,
                "end": 2802
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2805,
                "end": 2809
              },
              "start": 2803,
              "end": 2809
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2757,
            "end": 2810
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2815,
              "end": 2832
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2843,
                  "end": 2849
                },
                "start": 2836,
                "end": 2849
              },
              "start": 2834,
              "end": 2849
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2815,
            "end": 2850
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidThisType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2855,
              "end": 2870
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2884,
                      "end": 2890
                    },
                    "start": 2877,
                    "end": 2890
                  },
                  "start": 2875,
                  "end": 2890
                },
                "start": 2871,
                "end": 2890
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2855,
            "end": 2892
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidTypePredicate",
              "optional": false,
              "typeAnnotation": null,
              "start": 2897,
              "end": 2917
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2921,
                    "end": 2924
                  },
                  "start": 2919,
                  "end": 2924
                },
                "start": 2918,
                "end": 2924
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2927,
                  "end": 2928
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2939,
                      "end": 2945
                    },
                    "start": 2932,
                    "end": 2945
                  },
                  "start": 2932,
                  "end": 2945
                },
                "start": 2927,
                "end": 2945
              },
              "start": 2925,
              "end": 2945
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2897,
            "end": 2945
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidTypeParameterConstraint",
              "optional": false,
              "typeAnnotation": null,
              "start": 2950,
              "end": 2980
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 2981,
                    "end": 2982
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2998,
                      "end": 3004
                    },
                    "start": 2991,
                    "end": 3004
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2981,
                  "end": 3004
                }
              ],
              "start": 2980,
              "end": 3005
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 3009,
                "end": 3013
              },
              "start": 3007,
              "end": 3013
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2950,
            "end": 3014
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidTypeParameterDefault",
              "optional": false,
              "typeAnnotation": null,
              "start": 3019,
              "end": 3046
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 3047,
                    "end": 3048
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 3058,
                      "end": 3064
                    },
                    "start": 3051,
                    "end": 3064
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3047,
                  "end": 3064
                }
              ],
              "start": 3046,
              "end": 3065
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 3069,
                "end": 3073
              },
              "start": 3067,
              "end": 3073
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3019,
            "end": 3074
          }
        ],
        "start": 2665,
        "end": 3076
      },
      "declare": false,
      "start": 2639,
      "end": 3077
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InvalidAlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 3098,
        "end": 3110
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "unique",
        "typeAnnotation": {
          "type": "TSSymbolKeyword",
          "start": 3120,
          "end": 3126
        },
        "start": 3113,
        "end": 3126
      },
      "declare": false,
      "start": 3093,
      "end": 3127
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InvalidAliasTypeParameterConstraint",
        "optional": false,
        "typeAnnotation": null,
        "start": 3133,
        "end": 3168
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
              "start": 3169,
              "end": 3170
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 3186,
                "end": 3192
              },
              "start": 3179,
              "end": 3192
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3169,
            "end": 3192
          }
        ],
        "start": 3168,
        "end": 3193
      },
      "typeAnnotation": {
        "type": "TSNeverKeyword",
        "start": 3196,
        "end": 3201
      },
      "declare": false,
      "start": 3128,
      "end": 3202
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InvalidAliasTypeParameterDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 3208,
        "end": 3240
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
              "start": 3241,
              "end": 3242
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 3258,
                "end": 3264
              },
              "start": 3251,
              "end": 3264
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3241,
            "end": 3264
          }
        ],
        "start": 3240,
        "end": 3265
      },
      "typeAnnotation": {
        "type": "TSNeverKeyword",
        "start": 3268,
        "end": 3273
      },
      "declare": false,
      "start": 3203,
      "end": 3274
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "invalidTypeArgument",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3330,
                  "end": 3337
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 3345,
                        "end": 3351
                      },
                      "start": 3338,
                      "end": 3351
                    }
                  ],
                  "start": 3337,
                  "end": 3352
                },
                "start": 3330,
                "end": 3352
              },
              "start": 3328,
              "end": 3352
            },
            "start": 3309,
            "end": 3352
          },
          "init": null,
          "definite": false,
          "start": 3309,
          "end": 3352
        }
      ],
      "declare": true,
      "start": 3295,
      "end": 3353
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "invalidArrayType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 3394,
                    "end": 3400
                  },
                  "start": 3387,
                  "end": 3400
                },
                "start": 3386,
                "end": 3403
              },
              "start": 3384,
              "end": 3403
            },
            "start": 3368,
            "end": 3403
          },
          "init": null,
          "definite": false,
          "start": 3368,
          "end": 3403
        }
      ],
      "declare": true,
      "start": 3354,
      "end": 3404
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "invalidTupleType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 3445,
                      "end": 3451
                    },
                    "start": 3438,
                    "end": 3451
                  }
                ],
                "start": 3437,
                "end": 3452
              },
              "start": 3435,
              "end": 3452
            },
            "start": 3419,
            "end": 3452
          },
          "init": null,
          "definite": false,
          "start": 3419,
          "end": 3452
        }
      ],
      "declare": true,
      "start": 3405,
      "end": 3453
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "invalidMappedType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3507,
                  "end": 3508
                },
                "constraint": {
                  "type": "TSStringKeyword",
                  "start": 3512,
                  "end": 3518
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 3528,
                    "end": 3534
                  },
                  "start": 3521,
                  "end": 3534
                },
                "optional": false,
                "readonly": null,
                "start": 3504,
                "end": 3536
              },
              "start": 3502,
              "end": 3536
            },
            "start": 3485,
            "end": 3536
          },
          "init": null,
          "definite": false,
          "start": 3485,
          "end": 3536
        }
      ],
      "declare": true,
      "start": 3471,
      "end": 3537
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "invalidUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 3597,
                      "end": 3603
                    },
                    "start": 3590,
                    "end": 3603
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 3613,
                      "end": 3619
                    },
                    "start": 3606,
                    "end": 3619
                  }
                ],
                "start": 3590,
                "end": 3619
              },
              "start": 3588,
              "end": 3619
            },
            "start": 3576,
            "end": 3619
          },
          "init": null,
          "definite": false,
          "start": 3576,
          "end": 3619
        }
      ],
      "declare": true,
      "start": 3562,
      "end": 3620
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "invalidIntersection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 3663,
                      "end": 3669
                    },
                    "start": 3656,
                    "end": 3669
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 3679,
                      "end": 3685
                    },
                    "start": 3672,
                    "end": 3685
                  }
                ],
                "start": 3656,
                "end": 3685
              },
              "start": 3654,
              "end": 3685
            },
            "start": 3635,
            "end": 3685
          },
          "init": null,
          "definite": false,
          "start": 3635,
          "end": 3685
        }
      ],
      "declare": true,
      "start": 3621,
      "end": 3686
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldNotBeAssignable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3802,
                "end": 3808
              },
              "start": 3800,
              "end": 3808
            },
            "start": 3779,
            "end": 3808
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 3811,
              "end": 3817
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3811,
            "end": 3819
          },
          "definite": false,
          "start": 3779,
          "end": 3819
        }
      ],
      "declare": false,
      "start": 3773,
      "end": 3820
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 3820
}
```
