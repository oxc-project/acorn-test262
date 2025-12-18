__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 16,
    "end": 23,
    "range": [
      16,
      23
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 24,
    "end": 29,
    "range": [
      24,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidUniqueType",
    "start": 30,
    "end": 47,
    "range": [
      30,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 49,
    "end": 55,
    "range": [
      49,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 56,
    "end": 62,
    "range": [
      56,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 64,
    "end": 71,
    "range": [
      64,
      71
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 72,
    "end": 77,
    "range": [
      72,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 82,
    "end": 88,
    "range": [
      82,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 89,
    "end": 95,
    "range": [
      89,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 97,
    "end": 104,
    "range": [
      97,
      104
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 105,
    "end": 108,
    "range": [
      105,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidLetType",
    "start": 109,
    "end": 123,
    "range": [
      109,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 125,
    "end": 131,
    "range": [
      125,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 132,
    "end": 138,
    "range": [
      132,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 140,
    "end": 147,
    "range": [
      140,
      147
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 148,
    "end": 151,
    "range": [
      148,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidVarType",
    "start": 152,
    "end": 166,
    "range": [
      152,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 168,
    "end": 174,
    "range": [
      168,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 175,
    "end": 181,
    "range": [
      175,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 223,
    "end": 230,
    "range": [
      223,
      230
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 231,
    "end": 239,
    "range": [
      231,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidArgType",
    "start": 240,
    "end": 254,
    "range": [
      240,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 255,
    "end": 258,
    "range": [
      255,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 260,
    "end": 266,
    "range": [
      260,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 267,
    "end": 273,
    "range": [
      267,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 276,
    "end": 280,
    "range": [
      276,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 282,
    "end": 289,
    "range": [
      282,
      289
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 290,
    "end": 298,
    "range": [
      290,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidRestArgType",
    "start": 299,
    "end": 317,
    "range": [
      299,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 318,
    "end": 321,
    "range": [
      318,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 321,
    "end": 324,
    "range": [
      321,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 327,
    "end": 333,
    "range": [
      327,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 334,
    "end": 340,
    "range": [
      334,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 346,
    "end": 350,
    "range": [
      346,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 352,
    "end": 359,
    "range": [
      352,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 360,
    "end": 368,
    "range": [
      360,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidReturnType",
    "start": 369,
    "end": 386,
    "range": [
      369,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 390,
    "end": 396,
    "range": [
      390,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 397,
    "end": 403,
    "range": [
      397,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 405,
    "end": 412,
    "range": [
      405,
      412
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 413,
    "end": 421,
    "range": [
      413,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidThisType",
    "start": 422,
    "end": 437,
    "range": [
      422,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 438,
    "end": 442,
    "range": [
      438,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 444,
    "end": 450,
    "range": [
      444,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 451,
    "end": 457,
    "range": [
      451,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 460,
    "end": 464,
    "range": [
      460,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 466,
    "end": 473,
    "range": [
      466,
      473
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 474,
    "end": 482,
    "range": [
      474,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidTypePredicate",
    "start": 483,
    "end": 503,
    "range": [
      483,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 507,
    "end": 510,
    "range": [
      507,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 515,
    "end": 517,
    "range": [
      515,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 518,
    "end": 524,
    "range": [
      518,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 525,
    "end": 531,
    "range": [
      525,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 533,
    "end": 540,
    "range": [
      533,
      540
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 541,
    "end": 549,
    "range": [
      541,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidTypeParameterConstraint",
    "start": 550,
    "end": 580,
    "range": [
      550,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 583,
    "end": 590,
    "range": [
      583,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 591,
    "end": 597,
    "range": [
      591,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 598,
    "end": 604,
    "range": [
      598,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 609,
    "end": 613,
    "range": [
      609,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 615,
    "end": 622,
    "range": [
      615,
      622
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 623,
    "end": 631,
    "range": [
      623,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidTypeParameterDefault",
    "start": 632,
    "end": 659,
    "range": [
      632,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 664,
    "end": 670,
    "range": [
      664,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 671,
    "end": 677,
    "range": [
      671,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 682,
    "end": 686,
    "range": [
      682,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 700,
    "end": 705,
    "range": [
      700,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "InvalidClass",
    "start": 706,
    "end": 718,
    "range": [
      706,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 725,
    "end": 736,
    "range": [
      725,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidConstructorArgType",
    "start": 737,
    "end": 762,
    "range": [
      737,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 764,
    "end": 770,
    "range": [
      764,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 771,
    "end": 777,
    "range": [
      771,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 787,
    "end": 795,
    "range": [
      787,
      795
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidReadonlyPropertyType",
    "start": 796,
    "end": 823,
    "range": [
      796,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 825,
    "end": 831,
    "range": [
      825,
      831
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 832,
    "end": 838,
    "range": [
      832,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidPropertyType",
    "start": 844,
    "end": 863,
    "range": [
      844,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 865,
    "end": 871,
    "range": [
      865,
      871
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 872,
    "end": 878,
    "range": [
      872,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidArgType",
    "start": 884,
    "end": 898,
    "range": [
      884,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 899,
    "end": 902,
    "range": [
      899,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 904,
    "end": 910,
    "range": [
      904,
      910
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 911,
    "end": 917,
    "range": [
      911,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 920,
    "end": 924,
    "range": [
      920,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 927,
    "end": 933,
    "range": [
      927,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidRestArgType",
    "start": 941,
    "end": 959,
    "range": [
      941,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 960,
    "end": 963,
    "range": [
      960,
      963
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 963,
    "end": 967,
    "range": [
      963,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 970,
    "end": 976,
    "range": [
      970,
      976
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 977,
    "end": 983,
    "range": [
      977,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 989,
    "end": 993,
    "range": [
      989,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 996,
    "end": 1002,
    "range": [
      996,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidReturnType",
    "start": 1010,
    "end": 1027,
    "range": [
      1010,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1031,
    "end": 1037,
    "range": [
      1031,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1038,
    "end": 1044,
    "range": [
      1038,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1047,
    "end": 1053,
    "range": [
      1047,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidThisType",
    "start": 1061,
    "end": 1076,
    "range": [
      1061,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1077,
    "end": 1081,
    "range": [
      1077,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1083,
    "end": 1089,
    "range": [
      1083,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1090,
    "end": 1096,
    "range": [
      1090,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1099,
    "end": 1103,
    "range": [
      1099,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1106,
    "end": 1112,
    "range": [
      1106,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidTypePredicate",
    "start": 1120,
    "end": 1140,
    "range": [
      1120,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1144,
    "end": 1147,
    "range": [
      1144,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1152,
    "end": 1154,
    "range": [
      1152,
      1154
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1155,
    "end": 1161,
    "range": [
      1155,
      1161
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1162,
    "end": 1168,
    "range": [
      1162,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1171,
    "end": 1177,
    "range": [
      1171,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidTypeParameterConstraint",
    "start": 1185,
    "end": 1215,
    "range": [
      1185,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1218,
    "end": 1225,
    "range": [
      1218,
      1225
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1226,
    "end": 1232,
    "range": [
      1226,
      1232
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1233,
    "end": 1239,
    "range": [
      1233,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1244,
    "end": 1248,
    "range": [
      1244,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1251,
    "end": 1257,
    "range": [
      1251,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidTypeParameterDefault",
    "start": 1265,
    "end": 1292,
    "range": [
      1265,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1297,
    "end": 1303,
    "range": [
      1297,
      1303
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1304,
    "end": 1310,
    "range": [
      1304,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1315,
    "end": 1319,
    "range": [
      1315,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1322,
    "end": 1328,
    "range": [
      1322,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1336,
    "end": 1339,
    "range": [
      1336,
      1339
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidGetter",
    "start": 1340,
    "end": 1353,
    "range": [
      1340,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1357,
    "end": 1363,
    "range": [
      1357,
      1363
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1364,
    "end": 1370,
    "range": [
      1364,
      1370
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1373,
    "end": 1379,
    "range": [
      1373,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1387,
    "end": 1390,
    "range": [
      1387,
      1390
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidSetter",
    "start": 1391,
    "end": 1404,
    "range": [
      1391,
      1404
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1405,
    "end": 1408,
    "range": [
      1405,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1410,
    "end": 1416,
    "range": [
      1410,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1417,
    "end": 1423,
    "range": [
      1417,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1427,
    "end": 1433,
    "range": [
      1427,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1442,
    "end": 1448,
    "range": [
      1442,
      1448
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidStaticPropertyType",
    "start": 1449,
    "end": 1474,
    "range": [
      1449,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1476,
    "end": 1482,
    "range": [
      1476,
      1482
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1483,
    "end": 1489,
    "range": [
      1483,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1495,
    "end": 1501,
    "range": [
      1495,
      1501
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidStaticArgType",
    "start": 1502,
    "end": 1522,
    "range": [
      1502,
      1522
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1523,
    "end": 1526,
    "range": [
      1523,
      1526
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1528,
    "end": 1534,
    "range": [
      1528,
      1534
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1535,
    "end": 1541,
    "range": [
      1535,
      1541
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1542,
    "end": 1543,
    "range": [
      1542,
      1543
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1544,
    "end": 1548,
    "range": [
      1544,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1549,
    "end": 1550,
    "range": [
      1549,
      1550
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1551,
    "end": 1557,
    "range": [
      1551,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1557,
    "end": 1558,
    "range": [
      1557,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1565,
    "end": 1571,
    "range": [
      1565,
      1571
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidStaticRestArgType",
    "start": 1572,
    "end": 1596,
    "range": [
      1572,
      1596
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1597,
    "end": 1600,
    "range": [
      1597,
      1600
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1600,
    "end": 1604,
    "range": [
      1600,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1607,
    "end": 1613,
    "range": [
      1607,
      1613
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1614,
    "end": 1620,
    "range": [
      1614,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1621,
    "end": 1622,
    "range": [
      1621,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1626,
    "end": 1630,
    "range": [
      1626,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1633,
    "end": 1639,
    "range": [
      1633,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1647,
    "end": 1653,
    "range": [
      1647,
      1653
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidStaticReturnType",
    "start": 1654,
    "end": 1677,
    "range": [
      1654,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1681,
    "end": 1687,
    "range": [
      1681,
      1687
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1688,
    "end": 1694,
    "range": [
      1688,
      1694
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1695,
    "end": 1696,
    "range": [
      1695,
      1696
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1697,
    "end": 1703,
    "range": [
      1697,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1711,
    "end": 1717,
    "range": [
      1711,
      1717
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidStaticThisType",
    "start": 1718,
    "end": 1739,
    "range": [
      1718,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1740,
    "end": 1744,
    "range": [
      1740,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1746,
    "end": 1752,
    "range": [
      1746,
      1752
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1753,
    "end": 1759,
    "range": [
      1753,
      1759
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1759,
    "end": 1760,
    "range": [
      1759,
      1760
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1762,
    "end": 1766,
    "range": [
      1762,
      1766
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1769,
    "end": 1775,
    "range": [
      1769,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1775,
    "end": 1776,
    "range": [
      1775,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1783,
    "end": 1789,
    "range": [
      1783,
      1789
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidStaticTypePredicate",
    "start": 1790,
    "end": 1816,
    "range": [
      1790,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1820,
    "end": 1823,
    "range": [
      1820,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1823,
    "end": 1824,
    "range": [
      1823,
      1824
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1826,
    "end": 1827,
    "range": [
      1826,
      1827
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1828,
    "end": 1830,
    "range": [
      1828,
      1830
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1831,
    "end": 1837,
    "range": [
      1831,
      1837
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1838,
    "end": 1844,
    "range": [
      1838,
      1844
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1847,
    "end": 1853,
    "range": [
      1847,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1861,
    "end": 1867,
    "range": [
      1861,
      1867
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidStaticTypeParameterConstraint",
    "start": 1868,
    "end": 1904,
    "range": [
      1868,
      1904
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1905,
    "end": 1906,
    "range": [
      1905,
      1906
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1907,
    "end": 1914,
    "range": [
      1907,
      1914
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1915,
    "end": 1921,
    "range": [
      1915,
      1921
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1922,
    "end": 1928,
    "range": [
      1922,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1929,
    "end": 1930,
    "range": [
      1929,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1933,
    "end": 1937,
    "range": [
      1933,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1940,
    "end": 1946,
    "range": [
      1940,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1948,
    "end": 1949,
    "range": [
      1948,
      1949
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1954,
    "end": 1960,
    "range": [
      1954,
      1960
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidStaticTypeParameterDefault",
    "start": 1961,
    "end": 1994,
    "range": [
      1961,
      1994
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1994,
    "end": 1995,
    "range": [
      1994,
      1995
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1995,
    "end": 1996,
    "range": [
      1995,
      1996
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1997,
    "end": 1998,
    "range": [
      1997,
      1998
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1999,
    "end": 2005,
    "range": [
      1999,
      2005
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2006,
    "end": 2012,
    "range": [
      2006,
      2012
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2012,
    "end": 2013,
    "range": [
      2012,
      2013
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2013,
    "end": 2014,
    "range": [
      2013,
      2014
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2014,
    "end": 2015,
    "range": [
      2014,
      2015
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2015,
    "end": 2016,
    "range": [
      2015,
      2016
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2017,
    "end": 2021,
    "range": [
      2017,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2024,
    "end": 2030,
    "range": [
      2024,
      2030
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2038,
    "end": 2044,
    "range": [
      2038,
      2044
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2045,
    "end": 2048,
    "range": [
      2045,
      2048
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidStaticGetter",
    "start": 2049,
    "end": 2068,
    "range": [
      2049,
      2068
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2069,
    "end": 2070,
    "range": [
      2069,
      2070
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2072,
    "end": 2078,
    "range": [
      2072,
      2078
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2079,
    "end": 2085,
    "range": [
      2079,
      2085
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2086,
    "end": 2087,
    "range": [
      2086,
      2087
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2088,
    "end": 2094,
    "range": [
      2088,
      2094
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2094,
    "end": 2095,
    "range": [
      2094,
      2095
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2096,
    "end": 2097,
    "range": [
      2096,
      2097
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2102,
    "end": 2108,
    "range": [
      2102,
      2108
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2109,
    "end": 2112,
    "range": [
      2109,
      2112
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidStaticSetter",
    "start": 2113,
    "end": 2132,
    "range": [
      2113,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2133,
    "end": 2136,
    "range": [
      2133,
      2136
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2136,
    "end": 2137,
    "range": [
      2136,
      2137
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2138,
    "end": 2144,
    "range": [
      2138,
      2144
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2145,
    "end": 2151,
    "range": [
      2145,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2151,
    "end": 2152,
    "range": [
      2151,
      2152
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2153,
    "end": 2154,
    "range": [
      2153,
      2154
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2155,
    "end": 2161,
    "range": [
      2155,
      2161
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2161,
    "end": 2162,
    "range": [
      2161,
      2162
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2163,
    "end": 2164,
    "range": [
      2163,
      2164
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2165,
    "end": 2166,
    "range": [
      2165,
      2166
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2182,
    "end": 2191,
    "range": [
      2182,
      2191
    ]
  },
  {
    "type": "Identifier",
    "value": "InvalidInterface",
    "start": 2192,
    "end": 2208,
    "range": [
      2192,
      2208
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2209,
    "end": 2210,
    "range": [
      2209,
      2210
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidPropertyType",
    "start": 2215,
    "end": 2234,
    "range": [
      2215,
      2234
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2234,
    "end": 2235,
    "range": [
      2234,
      2235
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2236,
    "end": 2242,
    "range": [
      2236,
      2242
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2243,
    "end": 2249,
    "range": [
      2243,
      2249
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2249,
    "end": 2250,
    "range": [
      2249,
      2250
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidArgType",
    "start": 2255,
    "end": 2269,
    "range": [
      2255,
      2269
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2269,
    "end": 2270,
    "range": [
      2269,
      2270
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2270,
    "end": 2273,
    "range": [
      2270,
      2273
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2275,
    "end": 2281,
    "range": [
      2275,
      2281
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2282,
    "end": 2288,
    "range": [
      2282,
      2288
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2288,
    "end": 2289,
    "range": [
      2288,
      2289
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2291,
    "end": 2295,
    "range": [
      2291,
      2295
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2295,
    "end": 2296,
    "range": [
      2295,
      2296
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidRestArgType",
    "start": 2301,
    "end": 2319,
    "range": [
      2301,
      2319
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2319,
    "end": 2320,
    "range": [
      2319,
      2320
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2320,
    "end": 2323,
    "range": [
      2320,
      2323
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2323,
    "end": 2327,
    "range": [
      2323,
      2327
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2327,
    "end": 2328,
    "range": [
      2327,
      2328
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2329,
    "end": 2330,
    "range": [
      2329,
      2330
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2330,
    "end": 2336,
    "range": [
      2330,
      2336
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2337,
    "end": 2343,
    "range": [
      2337,
      2343
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2343,
    "end": 2344,
    "range": [
      2343,
      2344
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2344,
    "end": 2345,
    "range": [
      2344,
      2345
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2345,
    "end": 2346,
    "range": [
      2345,
      2346
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2346,
    "end": 2347,
    "range": [
      2346,
      2347
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2347,
    "end": 2348,
    "range": [
      2347,
      2348
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2349,
    "end": 2353,
    "range": [
      2349,
      2353
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2353,
    "end": 2354,
    "range": [
      2353,
      2354
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidReturnType",
    "start": 2359,
    "end": 2376,
    "range": [
      2359,
      2376
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2376,
    "end": 2377,
    "range": [
      2376,
      2377
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2377,
    "end": 2378,
    "range": [
      2377,
      2378
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2378,
    "end": 2379,
    "range": [
      2378,
      2379
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2380,
    "end": 2386,
    "range": [
      2380,
      2386
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2387,
    "end": 2393,
    "range": [
      2387,
      2393
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2393,
    "end": 2394,
    "range": [
      2393,
      2394
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidThisType",
    "start": 2399,
    "end": 2414,
    "range": [
      2399,
      2414
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2414,
    "end": 2415,
    "range": [
      2414,
      2415
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2415,
    "end": 2419,
    "range": [
      2415,
      2419
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2419,
    "end": 2420,
    "range": [
      2419,
      2420
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2421,
    "end": 2427,
    "range": [
      2421,
      2427
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2428,
    "end": 2434,
    "range": [
      2428,
      2434
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2434,
    "end": 2435,
    "range": [
      2434,
      2435
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2435,
    "end": 2436,
    "range": [
      2435,
      2436
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidTypePredicate",
    "start": 2441,
    "end": 2461,
    "range": [
      2441,
      2461
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2461,
    "end": 2462,
    "range": [
      2461,
      2462
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2463,
    "end": 2464,
    "range": [
      2463,
      2464
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2465,
    "end": 2468,
    "range": [
      2465,
      2468
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2468,
    "end": 2469,
    "range": [
      2468,
      2469
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2469,
    "end": 2470,
    "range": [
      2469,
      2470
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2471,
    "end": 2472,
    "range": [
      2471,
      2472
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2473,
    "end": 2475,
    "range": [
      2473,
      2475
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2476,
    "end": 2482,
    "range": [
      2476,
      2482
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2483,
    "end": 2489,
    "range": [
      2483,
      2489
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidTypeParameterConstraint",
    "start": 2494,
    "end": 2524,
    "range": [
      2494,
      2524
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2524,
    "end": 2525,
    "range": [
      2524,
      2525
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2525,
    "end": 2526,
    "range": [
      2525,
      2526
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2527,
    "end": 2534,
    "range": [
      2527,
      2534
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2535,
    "end": 2541,
    "range": [
      2535,
      2541
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2542,
    "end": 2548,
    "range": [
      2542,
      2548
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2548,
    "end": 2549,
    "range": [
      2548,
      2549
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2549,
    "end": 2550,
    "range": [
      2549,
      2550
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2550,
    "end": 2551,
    "range": [
      2550,
      2551
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2551,
    "end": 2552,
    "range": [
      2551,
      2552
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2553,
    "end": 2557,
    "range": [
      2553,
      2557
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2557,
    "end": 2558,
    "range": [
      2557,
      2558
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidTypeParameterDefault",
    "start": 2563,
    "end": 2590,
    "range": [
      2563,
      2590
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2590,
    "end": 2591,
    "range": [
      2590,
      2591
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2591,
    "end": 2592,
    "range": [
      2591,
      2592
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2593,
    "end": 2594,
    "range": [
      2593,
      2594
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2595,
    "end": 2601,
    "range": [
      2595,
      2601
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2602,
    "end": 2608,
    "range": [
      2602,
      2608
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2608,
    "end": 2609,
    "range": [
      2608,
      2609
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2609,
    "end": 2610,
    "range": [
      2609,
      2610
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2610,
    "end": 2611,
    "range": [
      2610,
      2611
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2611,
    "end": 2612,
    "range": [
      2611,
      2612
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2613,
    "end": 2617,
    "range": [
      2613,
      2617
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2617,
    "end": 2618,
    "range": [
      2617,
      2618
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2619,
    "end": 2620,
    "range": [
      2619,
      2620
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2639,
    "end": 2643,
    "range": [
      2639,
      2643
    ]
  },
  {
    "type": "Identifier",
    "value": "InvalidTypeLiteral",
    "start": 2644,
    "end": 2662,
    "range": [
      2644,
      2662
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2663,
    "end": 2664,
    "range": [
      2663,
      2664
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2665,
    "end": 2666,
    "range": [
      2665,
      2666
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidPropertyType",
    "start": 2671,
    "end": 2690,
    "range": [
      2671,
      2690
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2690,
    "end": 2691,
    "range": [
      2690,
      2691
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2692,
    "end": 2698,
    "range": [
      2692,
      2698
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2699,
    "end": 2705,
    "range": [
      2699,
      2705
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2705,
    "end": 2706,
    "range": [
      2705,
      2706
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidArgType",
    "start": 2711,
    "end": 2725,
    "range": [
      2711,
      2725
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2725,
    "end": 2726,
    "range": [
      2725,
      2726
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2726,
    "end": 2729,
    "range": [
      2726,
      2729
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2729,
    "end": 2730,
    "range": [
      2729,
      2730
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2731,
    "end": 2737,
    "range": [
      2731,
      2737
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2738,
    "end": 2744,
    "range": [
      2738,
      2744
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2744,
    "end": 2745,
    "range": [
      2744,
      2745
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2745,
    "end": 2746,
    "range": [
      2745,
      2746
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2747,
    "end": 2751,
    "range": [
      2747,
      2751
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2751,
    "end": 2752,
    "range": [
      2751,
      2752
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidRestArgType",
    "start": 2757,
    "end": 2775,
    "range": [
      2757,
      2775
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2775,
    "end": 2776,
    "range": [
      2775,
      2776
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2776,
    "end": 2779,
    "range": [
      2776,
      2779
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2779,
    "end": 2783,
    "range": [
      2779,
      2783
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2783,
    "end": 2784,
    "range": [
      2783,
      2784
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2785,
    "end": 2786,
    "range": [
      2785,
      2786
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2786,
    "end": 2792,
    "range": [
      2786,
      2792
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2793,
    "end": 2799,
    "range": [
      2793,
      2799
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2799,
    "end": 2800,
    "range": [
      2799,
      2800
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2801,
    "end": 2802,
    "range": [
      2801,
      2802
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2802,
    "end": 2803,
    "range": [
      2802,
      2803
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2803,
    "end": 2804,
    "range": [
      2803,
      2804
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2805,
    "end": 2809,
    "range": [
      2805,
      2809
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2809,
    "end": 2810,
    "range": [
      2809,
      2810
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidReturnType",
    "start": 2815,
    "end": 2832,
    "range": [
      2815,
      2832
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2832,
    "end": 2833,
    "range": [
      2832,
      2833
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2833,
    "end": 2834,
    "range": [
      2833,
      2834
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2834,
    "end": 2835,
    "range": [
      2834,
      2835
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2836,
    "end": 2842,
    "range": [
      2836,
      2842
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2843,
    "end": 2849,
    "range": [
      2843,
      2849
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2849,
    "end": 2850,
    "range": [
      2849,
      2850
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidThisType",
    "start": 2855,
    "end": 2870,
    "range": [
      2855,
      2870
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2870,
    "end": 2871,
    "range": [
      2870,
      2871
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2871,
    "end": 2875,
    "range": [
      2871,
      2875
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2875,
    "end": 2876,
    "range": [
      2875,
      2876
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2877,
    "end": 2883,
    "range": [
      2877,
      2883
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2884,
    "end": 2890,
    "range": [
      2884,
      2890
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2890,
    "end": 2891,
    "range": [
      2890,
      2891
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2891,
    "end": 2892,
    "range": [
      2891,
      2892
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidTypePredicate",
    "start": 2897,
    "end": 2917,
    "range": [
      2897,
      2917
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2917,
    "end": 2918,
    "range": [
      2917,
      2918
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2918,
    "end": 2919,
    "range": [
      2918,
      2919
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2919,
    "end": 2920,
    "range": [
      2919,
      2920
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2921,
    "end": 2924,
    "range": [
      2921,
      2924
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2924,
    "end": 2925,
    "range": [
      2924,
      2925
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2925,
    "end": 2926,
    "range": [
      2925,
      2926
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2927,
    "end": 2928,
    "range": [
      2927,
      2928
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2929,
    "end": 2931,
    "range": [
      2929,
      2931
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2932,
    "end": 2938,
    "range": [
      2932,
      2938
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2939,
    "end": 2945,
    "range": [
      2939,
      2945
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidTypeParameterConstraint",
    "start": 2950,
    "end": 2980,
    "range": [
      2950,
      2980
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2980,
    "end": 2981,
    "range": [
      2980,
      2981
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2981,
    "end": 2982,
    "range": [
      2981,
      2982
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2983,
    "end": 2990,
    "range": [
      2983,
      2990
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2991,
    "end": 2997,
    "range": [
      2991,
      2997
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2998,
    "end": 3004,
    "range": [
      2998,
      3004
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3004,
    "end": 3005,
    "range": [
      3004,
      3005
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3005,
    "end": 3006,
    "range": [
      3005,
      3006
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3006,
    "end": 3007,
    "range": [
      3006,
      3007
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3007,
    "end": 3008,
    "range": [
      3007,
      3008
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3009,
    "end": 3013,
    "range": [
      3009,
      3013
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3013,
    "end": 3014,
    "range": [
      3013,
      3014
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidTypeParameterDefault",
    "start": 3019,
    "end": 3046,
    "range": [
      3019,
      3046
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3046,
    "end": 3047,
    "range": [
      3046,
      3047
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3047,
    "end": 3048,
    "range": [
      3047,
      3048
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3049,
    "end": 3050,
    "range": [
      3049,
      3050
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3051,
    "end": 3057,
    "range": [
      3051,
      3057
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3058,
    "end": 3064,
    "range": [
      3058,
      3064
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3064,
    "end": 3065,
    "range": [
      3064,
      3065
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3065,
    "end": 3066,
    "range": [
      3065,
      3066
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3066,
    "end": 3067,
    "range": [
      3066,
      3067
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3067,
    "end": 3068,
    "range": [
      3067,
      3068
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3069,
    "end": 3073,
    "range": [
      3069,
      3073
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3073,
    "end": 3074,
    "range": [
      3073,
      3074
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3075,
    "end": 3076,
    "range": [
      3075,
      3076
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3076,
    "end": 3077,
    "range": [
      3076,
      3077
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3093,
    "end": 3097,
    "range": [
      3093,
      3097
    ]
  },
  {
    "type": "Identifier",
    "value": "InvalidAlias",
    "start": 3098,
    "end": 3110,
    "range": [
      3098,
      3110
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3111,
    "end": 3112,
    "range": [
      3111,
      3112
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3113,
    "end": 3119,
    "range": [
      3113,
      3119
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3120,
    "end": 3126,
    "range": [
      3120,
      3126
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3126,
    "end": 3127,
    "range": [
      3126,
      3127
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3128,
    "end": 3132,
    "range": [
      3128,
      3132
    ]
  },
  {
    "type": "Identifier",
    "value": "InvalidAliasTypeParameterConstraint",
    "start": 3133,
    "end": 3168,
    "range": [
      3133,
      3168
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3168,
    "end": 3169,
    "range": [
      3168,
      3169
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3169,
    "end": 3170,
    "range": [
      3169,
      3170
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3171,
    "end": 3178,
    "range": [
      3171,
      3178
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3179,
    "end": 3185,
    "range": [
      3179,
      3185
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3186,
    "end": 3192,
    "range": [
      3186,
      3192
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3192,
    "end": 3193,
    "range": [
      3192,
      3193
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3194,
    "end": 3195,
    "range": [
      3194,
      3195
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3196,
    "end": 3201,
    "range": [
      3196,
      3201
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3201,
    "end": 3202,
    "range": [
      3201,
      3202
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3203,
    "end": 3207,
    "range": [
      3203,
      3207
    ]
  },
  {
    "type": "Identifier",
    "value": "InvalidAliasTypeParameterDefault",
    "start": 3208,
    "end": 3240,
    "range": [
      3208,
      3240
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3240,
    "end": 3241,
    "range": [
      3240,
      3241
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3241,
    "end": 3242,
    "range": [
      3241,
      3242
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3243,
    "end": 3250,
    "range": [
      3243,
      3250
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3251,
    "end": 3257,
    "range": [
      3251,
      3257
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3258,
    "end": 3264,
    "range": [
      3258,
      3264
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3264,
    "end": 3265,
    "range": [
      3264,
      3265
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3266,
    "end": 3267,
    "range": [
      3266,
      3267
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3268,
    "end": 3273,
    "range": [
      3268,
      3273
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3273,
    "end": 3274,
    "range": [
      3273,
      3274
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3295,
    "end": 3302,
    "range": [
      3295,
      3302
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3303,
    "end": 3308,
    "range": [
      3303,
      3308
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidTypeArgument",
    "start": 3309,
    "end": 3328,
    "range": [
      3309,
      3328
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3328,
    "end": 3329,
    "range": [
      3328,
      3329
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3330,
    "end": 3337,
    "range": [
      3330,
      3337
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3337,
    "end": 3338,
    "range": [
      3337,
      3338
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3338,
    "end": 3344,
    "range": [
      3338,
      3344
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3345,
    "end": 3351,
    "range": [
      3345,
      3351
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3351,
    "end": 3352,
    "range": [
      3351,
      3352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3352,
    "end": 3353,
    "range": [
      3352,
      3353
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3354,
    "end": 3361,
    "range": [
      3354,
      3361
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3362,
    "end": 3367,
    "range": [
      3362,
      3367
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidArrayType",
    "start": 3368,
    "end": 3384,
    "range": [
      3368,
      3384
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3384,
    "end": 3385,
    "range": [
      3384,
      3385
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3386,
    "end": 3387,
    "range": [
      3386,
      3387
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3387,
    "end": 3393,
    "range": [
      3387,
      3393
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3394,
    "end": 3400,
    "range": [
      3394,
      3400
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3400,
    "end": 3401,
    "range": [
      3400,
      3401
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3401,
    "end": 3402,
    "range": [
      3401,
      3402
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3402,
    "end": 3403,
    "range": [
      3402,
      3403
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3403,
    "end": 3404,
    "range": [
      3403,
      3404
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3405,
    "end": 3412,
    "range": [
      3405,
      3412
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3413,
    "end": 3418,
    "range": [
      3413,
      3418
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidTupleType",
    "start": 3419,
    "end": 3435,
    "range": [
      3419,
      3435
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3435,
    "end": 3436,
    "range": [
      3435,
      3436
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3437,
    "end": 3438,
    "range": [
      3437,
      3438
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3438,
    "end": 3444,
    "range": [
      3438,
      3444
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3445,
    "end": 3451,
    "range": [
      3445,
      3451
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3451,
    "end": 3452,
    "range": [
      3451,
      3452
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3452,
    "end": 3453,
    "range": [
      3452,
      3453
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3471,
    "end": 3478,
    "range": [
      3471,
      3478
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3479,
    "end": 3484,
    "range": [
      3479,
      3484
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidMappedType",
    "start": 3485,
    "end": 3502,
    "range": [
      3485,
      3502
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3502,
    "end": 3503,
    "range": [
      3502,
      3503
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3504,
    "end": 3505,
    "range": [
      3504,
      3505
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3506,
    "end": 3507,
    "range": [
      3506,
      3507
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3507,
    "end": 3508,
    "range": [
      3507,
      3508
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3509,
    "end": 3511,
    "range": [
      3509,
      3511
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3512,
    "end": 3518,
    "range": [
      3512,
      3518
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3518,
    "end": 3519,
    "range": [
      3518,
      3519
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3519,
    "end": 3520,
    "range": [
      3519,
      3520
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3521,
    "end": 3527,
    "range": [
      3521,
      3527
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3528,
    "end": 3534,
    "range": [
      3528,
      3534
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3535,
    "end": 3536,
    "range": [
      3535,
      3536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3536,
    "end": 3537,
    "range": [
      3536,
      3537
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3562,
    "end": 3569,
    "range": [
      3562,
      3569
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3570,
    "end": 3575,
    "range": [
      3570,
      3575
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidUnion",
    "start": 3576,
    "end": 3588,
    "range": [
      3576,
      3588
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3588,
    "end": 3589,
    "range": [
      3588,
      3589
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3590,
    "end": 3596,
    "range": [
      3590,
      3596
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3597,
    "end": 3603,
    "range": [
      3597,
      3603
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3604,
    "end": 3605,
    "range": [
      3604,
      3605
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3606,
    "end": 3612,
    "range": [
      3606,
      3612
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3613,
    "end": 3619,
    "range": [
      3613,
      3619
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3619,
    "end": 3620,
    "range": [
      3619,
      3620
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3621,
    "end": 3628,
    "range": [
      3621,
      3628
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3629,
    "end": 3634,
    "range": [
      3629,
      3634
    ]
  },
  {
    "type": "Identifier",
    "value": "invalidIntersection",
    "start": 3635,
    "end": 3654,
    "range": [
      3635,
      3654
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3654,
    "end": 3655,
    "range": [
      3654,
      3655
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3656,
    "end": 3662,
    "range": [
      3656,
      3662
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3663,
    "end": 3669,
    "range": [
      3663,
      3669
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3670,
    "end": 3671,
    "range": [
      3670,
      3671
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3672,
    "end": 3678,
    "range": [
      3672,
      3678
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3679,
    "end": 3685,
    "range": [
      3679,
      3685
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3685,
    "end": 3686,
    "range": [
      3685,
      3686
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3773,
    "end": 3778,
    "range": [
      3773,
      3778
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldNotBeAssignable",
    "start": 3779,
    "end": 3800,
    "range": [
      3779,
      3800
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3800,
    "end": 3801,
    "range": [
      3800,
      3801
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3802,
    "end": 3808,
    "range": [
      3802,
      3808
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3809,
    "end": 3810,
    "range": [
      3809,
      3810
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 3811,
    "end": 3817,
    "range": [
      3811,
      3817
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3817,
    "end": 3818,
    "range": [
      3817,
      3818
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3818,
    "end": 3819,
    "range": [
      3818,
      3819
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3819,
    "end": 3820,
    "range": [
      3819,
      3820
    ]
  }
]
```
